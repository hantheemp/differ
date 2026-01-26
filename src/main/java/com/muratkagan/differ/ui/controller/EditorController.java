package com.muratkagan.differ.ui.controller;

import com.muratkagan.differ.ui.app.MainView;
import com.muratkagan.differ.ui.state.EditorState;
import com.muratkagan.differ.ui.view.EmptyEditorView;

public class EditorController {

	private final EditorState state;
	private final MainView mainView;

	public EditorController(EditorState state, MainView mainView) {
		this.state = state;
		this.mainView = mainView;
	}

	public void initialize() {
		showEmpty();
	}

	public void showEmpty() {
		state.clear();
		mainView.setEditor(new EmptyEditorView().getRoot());
	}

	public void showDiff(String left, String right) {
		state.showDiff(left, right);
		// DiffView will come here
	}

}
