package com.muratkagan.differ.ui.controller;

import com.muratkagan.differ.ui.app.MainView;
import com.muratkagan.differ.ui.state.SidebarState;
import com.muratkagan.differ.ui.view.EmptySidebarView;
import com.muratkagan.differ.ui.view.FileEntryModel;
import com.muratkagan.differ.ui.view.SidebarListView;

import java.util.List;

public class SidebarController {

	private final SidebarState state;
	private final EditorController editorController;
	private final MainView mainView;

	public SidebarController(SidebarState state, EditorController editorController, MainView mainView) {
		this.state = state;
		this.editorController = editorController;
		this.mainView = mainView;
	}

	public void initialize() {
		showEmpty();
		/*showFileList(List.of(
				new FileEntryModel("src/Main.java", true),
				new FileEntryModel("src/App.java", false),
				new FileEntryModel("README.md", true)
		));*/
	}

	public void showEmpty() {
		state.showEmpty();
		mainView.setSidebar(new EmptySidebarView().getRoot());
	}

	public void showFileList(List<FileEntryModel> files) {
		state.showList(files);

		SidebarListView view = new SidebarListView(state.getFiles());

		view.onSelectionChanged(file -> {
			editorController.showDiff("old content of " + file.getPath(), "new content of " + file.getPath());
			return null;
		});

		mainView.setSidebar(view.getRoot());
	}
}
