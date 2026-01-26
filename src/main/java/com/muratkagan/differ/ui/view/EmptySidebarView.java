package com.muratkagan.differ.ui.view;

import javafx.geometry.Pos;
import javafx.scene.control.Label;
import javafx.scene.layout.VBox;

public class EmptySidebarView {

	private final VBox root;

	public EmptySidebarView() {
		root = new VBox(12);
		root.setAlignment(Pos.CENTER);
		root.getStyleClass().add("empty-sidebar");

		Label title = new Label("No files");
		title.getStyleClass().add("empty-sidebar-title");

		Label subtitle = new Label("Load a project to see changes");
		subtitle.getStyleClass().add("empty-sidebar-subtitle");

		root.getChildren().addAll(title, subtitle);
	}

	public VBox getRoot() {
		return root;
	}
}