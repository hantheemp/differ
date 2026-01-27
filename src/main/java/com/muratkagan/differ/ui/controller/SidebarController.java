package com.muratkagan.differ.ui.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.muratkagan.differ.diff.LineDiffService;
import com.muratkagan.differ.diff.model.FileDiffResult;
import com.muratkagan.differ.ui.app.MainView;
import com.muratkagan.differ.ui.model.FileEntryModel;
import com.muratkagan.differ.ui.state.SidebarState;
import com.muratkagan.differ.ui.view.EmptySidebarView;
import com.muratkagan.differ.ui.view.SidebarListView;

import javafx.application.Platform;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.stage.DirectoryChooser;
import javafx.stage.Window;

public class SidebarController {

	private final SidebarState state;
	private final EditorController editorController;
	private final MainView mainView;
	private final LineDiffService diffService;

	private Path baselineDirectory;
	private Path targetDirectory;

	public SidebarController(SidebarState state, EditorController editorController, MainView mainView,
			LineDiffService diffService) {
		this.state = state;
		this.editorController = editorController;
		this.mainView = mainView;
		this.diffService = diffService;
	}

	public void initialize() {
		Platform.runLater(this::showEmpty);
	}

	public void selectBaselineDirectory() {

		DirectoryChooser chooser = new DirectoryChooser();
		chooser.setTitle("Select Baseline Directory");

		Window window = getWindow();

		File selected = chooser.showDialog(window);

		if (selected != null) {
			baselineDirectory = selected.toPath();
			state.setBaselineDirectory(baselineDirectory);
			checkAndLoadFiles();
		}
	}

	public void selectTargetDirectory() {

		DirectoryChooser chooser = new DirectoryChooser();
		chooser.setTitle("Select Target Directory");

		Window window = getWindow();

		File selected = chooser.showDialog(window);

		if (selected != null) {
			targetDirectory = selected.toPath();
			state.setTargetDirectory(targetDirectory);
			checkAndLoadFiles();
		}
	}

	private Window getWindow() {
		if (mainView.getRoot().getScene() != null) {
			return mainView.getRoot().getScene().getWindow();
		}
		return null;
	}

	private void checkAndLoadFiles() {
		if (baselineDirectory != null && targetDirectory != null) {
			loadFileList();
		}
	}

	private void loadFileList() {
		try {
			List<FileEntryModel> fileModels = new ArrayList<>();

			List<Path> baselineFiles = Files.walk(baselineDirectory).filter(Files::isRegularFile)
					.collect(Collectors.toList());

			for (Path baselineFile : baselineFiles) {
				Path relativePath = baselineDirectory.relativize(baselineFile);
				Path targetFile = targetDirectory.resolve(relativePath);

				boolean isModified = false;
				if (Files.exists(targetFile)) {
					isModified = !filesAreEqual(baselineFile, targetFile);
				} else {
					isModified = true;
				}

				fileModels.add(new FileEntryModel(relativePath.toString(), isModified));
			}

			List<Path> targetFiles = Files.walk(targetDirectory).filter(Files::isRegularFile)
					.collect(Collectors.toList());

			for (Path targetFile : targetFiles) {
				Path relativePath = targetDirectory.relativize(targetFile);
				Path baselineFile = baselineDirectory.resolve(relativePath);

				if (!Files.exists(baselineFile)) {
					fileModels.add(new FileEntryModel(relativePath.toString(), true));
				}
			}

			if (fileModels.isEmpty()) {
				showEmpty();
			} else {
				ObservableList<FileEntryModel> items = FXCollections.observableArrayList(fileModels);
				SidebarListView listView = new SidebarListView(items);

				listView.onSelectionChanged(this::showFileDiff);

				mainView.setSidebar(listView.getRoot());
			}

		} catch (IOException e) {
			e.printStackTrace();
			showEmpty();
		}
	}

	private boolean filesAreEqual(Path file1, Path file2) {
		try {
			byte[] content1 = Files.readAllBytes(file1);
			byte[] content2 = Files.readAllBytes(file2);
			return java.util.Arrays.equals(content1, content2);
		} catch (IOException e) {
			return false;
		}
	}

	private void showFileDiff(FileEntryModel file) {
		try {
			Path baselineFile = baselineDirectory.resolve(file.getPath());
			Path targetFile = targetDirectory.resolve(file.getPath());

			String baselineContent = Files.exists(baselineFile) ? Files.readString(baselineFile) : "";
			String targetContent = Files.exists(targetFile) ? Files.readString(targetFile) : "";

			FileDiffResult result = diffService.diff(baselineContent, targetContent);
			editorController.showDiff(result);

		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public void showEmpty() {
		state.showEmpty();
		EmptySidebarView emptySidebarView = new EmptySidebarView();
		emptySidebarView.setOnSelectBaseline(this::selectBaselineDirectory);
		emptySidebarView.setOnSelectTarget(this::selectTargetDirectory);
		mainView.setSidebar(emptySidebarView.getRoot());
		editorController.showEmpty();
	}
}