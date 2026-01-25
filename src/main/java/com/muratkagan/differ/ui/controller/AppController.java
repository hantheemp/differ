package com.muratkagan.differ.ui.controller;

import com.muratkagan.differ.ui.MainFrame;
import com.muratkagan.differ.ui.model.EditorState;
import com.muratkagan.differ.ui.model.SidebarState;

public class AppController implements IAppController {

	private final MainFrame frame;

	private final SidebarController sidebarController;
	private final EditorController editorController;

	public AppController(MainFrame frame) {
		this.frame = frame;

		EditorState editorState = new EditorState();
		SidebarState sidebarState = new SidebarState();

		this.editorController = new EditorController(editorState, frame);
		this.sidebarController = new SidebarController(sidebarState, editorController, frame);
	}

	@Override
	public void initialize() {
		sidebarController.initialize();
		editorController.initialize();

		frame.setVisible(true);
	}

	@Override
	public void shutdown() {

	}
}
