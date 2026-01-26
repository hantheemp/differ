package com.muratkagan.differ.ui.controller;

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

		editorController = new EditorController(editorState, mainView);
		sidebarController = new SidebarController(sidebarState, editorController, mainView);

		sidebarController.initialize();
		editorController.initialize();

	}

	public void initialize() {
		sidebarController.initialize();
		editorController.initialize();
	}

}
