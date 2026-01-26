package com.muratkagan.differ.ui.app;

import javafx.scene.Node;
import javafx.scene.control.SplitPane;
import javafx.scene.layout.BorderPane;

public class MainView {

	private final BorderPane root;
	private final SplitPane splitPane;

	private Node sidebar;
	private Node editor;

	public MainView() {
		root = new BorderPane();
		splitPane = new SplitPane();

		splitPane.setDividerPositions(0.25);
		root.setCenter(splitPane);
	}

	public void setSidebar(Node sidebar) {
		this.sidebar = sidebar;
		refresh();
	}

	public void setEditor(Node editor) {
		this.editor = editor;
		refresh();
	}

	private void refresh() {
		splitPane.getItems().clear();

		if (sidebar != null) {
			splitPane.getItems().add(sidebar);
		}

		if (editor != null) {
			splitPane.getItems().add(editor);
		}
	}

	public BorderPane getRoot() {
		return root;
	}
}
