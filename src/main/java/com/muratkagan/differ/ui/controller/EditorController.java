package com.muratkagan.differ.ui.controller;

import java.util.List;

import com.muratkagan.differ.diff.model.FileDiffResult;
import com.muratkagan.differ.ui.app.MainView;
import com.muratkagan.differ.ui.diff.DiffMapper;
import com.muratkagan.differ.ui.model.DiffLine;
import com.muratkagan.differ.ui.state.EditorState;
import com.muratkagan.differ.ui.view.DiffView;
import com.muratkagan.differ.ui.view.EmptyEditorView;

public class EditorController {

	private final EditorState state;
	private final MainView mainView;

	private DiffView diffView;

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

	public void showDiff(FileDiffResult result) {
		List<DiffLine> lines = DiffMapper.toUiLines(result);

		state.showDiff(lines);

		if (diffView == null) {
			diffView = new DiffView();
		}

		diffView.render(lines);
		mainView.setEditor(diffView.getRoot());
	}
}