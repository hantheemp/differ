package com.muratkagan.differ.ui.controller;

import com.muratkagan.differ.ui.MainFrame;
import com.muratkagan.differ.ui.model.EditorState;
import com.muratkagan.differ.ui.view.EmptyEditorView;
import com.muratkagan.differ.ui.model.DiffViewMode;

public class EditorController {

	private final EditorState state;
	private final MainFrame frame;

	public EditorController(EditorState state, MainFrame frame) {
		this.state = state;
		this.frame = frame;
	}

	public void initialize() {
		showEmpty();
	}

	public void showDiff(String left, String right) {
		state.setDiff(left, right);
		render();
	}

	public void clear() {
		state.clear();
		render();
	}

	public void toggleViewMode() {
		state.setViewMode(
				state.getViewMode() == DiffViewMode.SIDE_BY_SIDE ? DiffViewMode.INLINE : DiffViewMode.SIDE_BY_SIDE);
		render();
	}

	private void showEmpty() {
		EmptyEditorView view = new EmptyEditorView();
		frame.setEditorContent(view.getRoot());
	}

	private void render() {
		// later: EditorView.render(state)
	}
}
