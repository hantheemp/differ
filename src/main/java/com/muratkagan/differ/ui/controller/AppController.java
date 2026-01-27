package com.muratkagan.differ.ui.controller;

import com.muratkagan.differ.diff.LineDiffService;
import com.muratkagan.differ.ui.app.MainView;
import com.muratkagan.differ.ui.state.EditorState;
import com.muratkagan.differ.ui.state.SidebarState;

public class AppController {

	private final MainView mainView;
	private final EditorController editorController;
	private final SidebarController sidebarController;

	public AppController(MainView mainView) {
		this.mainView = mainView;

		EditorState editorState = new EditorState();
		SidebarState sidebarState = new SidebarState();
		LineDiffService service = new LineDiffService();

		editorController = new EditorController(editorState, mainView);
		sidebarController = new SidebarController(sidebarState, editorController, mainView, service);
	}

	public void initialize() {
		editorController.initialize();
		sidebarController.initialize();
	}

	public MainView getMainView() {
		return mainView;
	}
}