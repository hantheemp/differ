package com.muratkagan.differ.ui.view;

import javafx.scene.Node;
import javafx.scene.control.Label;
import javafx.scene.layout.StackPane;

public class EmptyEditorView {

	private final StackPane root;

	public EmptyEditorView() {
		root = new StackPane();
		root.getStyleClass().add("empty-editor");

		Label label = new Label("Select files to compare");
		label.getStyleClass().add("empty-text");

		root.getChildren().add(label);
	}

	public Node getRoot() {
		return root;
	} 
}
