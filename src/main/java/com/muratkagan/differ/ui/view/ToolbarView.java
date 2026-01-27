package com.muratkagan.differ.ui.view;

import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.layout.HBox;
import javafx.scene.layout.Priority;
import javafx.scene.layout.VBox;

public class ToolbarView {

	private final VBox root;
	private final TextField baselineField;
	private final TextField targetField;
	private final Button baselineBrowseButton;
	private final Button targetBrowseButton;
	private final Button compareButton;

	public ToolbarView() {
		root = new VBox(12);
		root.setPadding(new Insets(12, 16, 12, 16));
		root.getStyleClass().add("toolbar");

		// Baseline directory section
		VBox baselineSection = createDirectorySection("Baseline Project", true);
		baselineField = (TextField) ((HBox) baselineSection.getChildren().get(1)).getChildren().get(0);
		baselineBrowseButton = (Button) ((HBox) baselineSection.getChildren().get(1)).getChildren().get(1);

		// Target directory section
		VBox targetSection = createDirectorySection("Target Project", false);
		targetField = (TextField) ((HBox) targetSection.getChildren().get(1)).getChildren().get(0);
		targetBrowseButton = (Button) ((HBox) targetSection.getChildren().get(1)).getChildren().get(1);

		// Compare button
		compareButton = new Button("Compare");
		compareButton.getStyleClass().add("compare-button");
		compareButton.setMaxWidth(Double.MAX_VALUE);
		compareButton.setPrefHeight(36);

		root.getChildren().addAll(baselineSection, targetSection, compareButton);
	}

	private VBox createDirectorySection(String title, boolean isBaseline) {
		VBox section = new VBox(6);

		Label label = new Label(title);
		label.getStyleClass().add("toolbar-label");

		TextField textField = new TextField();
		textField.setEditable(false);
		textField.setPromptText("No directory selected");
		textField.getStyleClass().add("path-field");
		HBox.setHgrow(textField, Priority.ALWAYS);

		Button browseButton = new Button("Browse...");
		browseButton.getStyleClass().add("browse-button");
		browseButton.setMinWidth(84);

		HBox inputRow = new HBox(8);
		inputRow.getChildren().addAll(textField, browseButton);
		inputRow.setAlignment(Pos.CENTER_LEFT);

		section.getChildren().addAll(label, inputRow);
		return section;
	}

	public void setBaselinePath(String path) {
		baselineField.setText(path);
	}

	public void setTargetPath(String path) {
		targetField.setText(path);
	}

	public void setOnBaselineBrowse(Runnable handler) {
		baselineBrowseButton.setOnAction(e -> handler.run());
	}

	public void setOnTargetBrowse(Runnable handler) {
		targetBrowseButton.setOnAction(e -> handler.run());
	}

	public void setOnCompare(Runnable handler) {
		compareButton.setOnAction(e -> handler.run());
	}

	public VBox getRoot() {
		return root;
	}
}
