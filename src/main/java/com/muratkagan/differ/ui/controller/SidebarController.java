package com.muratkagan.differ.ui.controller;

import com.muratkagan.differ.ui.MainFrame;
import com.muratkagan.differ.ui.model.FileEntryModel;
import com.muratkagan.differ.ui.model.SidebarState;
import com.muratkagan.differ.ui.view.EmptySidebarView;
import com.muratkagan.differ.ui.view.SidebarListView;

public class SidebarController {

	private final SidebarState state;
	private final EditorController editorController;
	private final MainFrame frame;

	public SidebarController(SidebarState state, EditorController editorController, MainFrame frame) {
		this.state = state;
		this.editorController = editorController;
		this.frame = frame;
	}

	public void initialize() {
		if (state.isEmpty()) {
			showEmpty();
		} else {
			render();
		}
	}

	public void onFileSelected(FileEntryModel entry) {
		state.select(entry);

		editorController.showDiff("old content of " + entry.getPath(), "new content of " + entry.getPath());

		render();
	}

	private void showEmpty() {
		EmptySidebarView view = new EmptySidebarView();
		frame.setSidebarContent(view.getRoot());
	}

	private void render() {
		SidebarListView view = new SidebarListView();

		view.setFiles(state.getFiles());
		view.setSelected(state.getSelected());

		view.onSelect(this::onFileSelected);

		frame.setSidebarContent(view.getRoot());
	}

}
