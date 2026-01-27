package com.muratkagan.differ.ui.view;

import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.layout.VBox;

public class EmptySidebarView {

	private final VBox root;
	private final Button selectBaselineButton;
	private final Button selectTargetButton;

	public EmptySidebarView() {
		root = new VBox(12);
		root.setAlignment(Pos.CENTER);
		root.setPadding(new Insets(20));
		root.getStyleClass().add("empty-sidebar");

		Label title = new Label("No Directories Selected");
		title.getStyleClass().add("empty-sidebar-title");

		Label subtitle = new Label("Select two directories to compare");
		subtitle.getStyleClass().add("empty-sidebar-subtitle");

		selectBaselineButton = new Button("Select Baseline Directory");
		selectBaselineButton.getStyleClass().add("primary-button");

		selectTargetButton = new Button("Select Target Directory");
		selectTargetButton.getStyleClass().add("primary-button");

		root.getChildren().addAll(title, subtitle, selectBaselineButton, selectTargetButton);
	}

	public void setOnSelectBaseline(Runnable handler) {
		selectBaselineButton.setOnAction(e -> {
			handler.run();
		});
	}

	public void setOnSelectTarget(Runnable handler) {
		selectTargetButton.setOnAction(e -> {
			handler.run();
		});
	}

	public VBox getRoot() {
		return root;
	}
}