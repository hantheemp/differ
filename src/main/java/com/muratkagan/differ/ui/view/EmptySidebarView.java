package com.muratkagan.differ.ui.view;

import javax.swing.JPanel;

import com.muratkagan.differ.ui.foundation.BaseButton;
import com.muratkagan.differ.ui.foundation.BaseLabel;
import com.muratkagan.differ.ui.foundation.ButtonStyle;
import com.muratkagan.differ.ui.foundation.LabelStyle;
import com.muratkagan.differ.ui.layout.EmptyStateLayout;
import com.muratkagan.differ.ui.theme.Theme;

public class EmptySidebarView {

	private final JPanel root;

	public EmptySidebarView() {
		this.root = build();
	}

	private JPanel build() {
		EmptyStateLayout layout = new EmptyStateLayout();
		layout.setBackground(Theme.color().surface());

		BaseLabel title = new BaseLabel("No files loaded", LabelStyle.SECONDARY);
		BaseLabel hint = new BaseLabel("Open two files to start comparing", LabelStyle.TERTIARY);

		BaseButton openButton = new BaseButton("Open files", ButtonStyle.PRIMARY);

		layout.add(title).add(hint, Theme.spacing().md()).add(openButton, Theme.spacing().lg());

		return layout;
	}

	public JPanel getRoot() {
		return root;
	}
}
