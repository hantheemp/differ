package com.muratkagan.differ.ui.view;

import javax.swing.JPanel;

import com.muratkagan.differ.ui.foundation.BaseLabel;
import com.muratkagan.differ.ui.foundation.LabelStyle;
import com.muratkagan.differ.ui.layout.EmptyStateLayout;

public class EmptyEditorView implements View {

	private final EmptyStateLayout root;

	public EmptyEditorView() {
		root = new EmptyStateLayout();

		root.add(new BaseLabel("No comparison selected", LabelStyle.TITLE), 12)
				.add(new BaseLabel("Select two folders to start diffing.", LabelStyle.SECONDARY));
	}

	@Override
	public JPanel getRoot() {
		return root;
	}
}
