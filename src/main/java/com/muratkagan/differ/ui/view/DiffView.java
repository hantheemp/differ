package com.muratkagan.differ.ui.view;

import java.util.ArrayList;
import java.util.List;

import com.muratkagan.differ.ui.model.DiffLine;

import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.control.Label;
import javafx.scene.control.ScrollPane;
import javafx.scene.layout.*;
import javafx.scene.paint.Color;

public class DiffView {

	private final BorderPane root = new BorderPane();
	private final VBox leftPanel = new VBox();
	private final VBox rightPanel = new VBox();
	private final ScrollPane scrollPane = new ScrollPane();

	public DiffView() {
		configure();
	}

	private void configure() {
		// Header
		HBox header = new HBox(20);
		header.setPadding(new Insets(10, 16, 10, 16));
		header.setAlignment(Pos.CENTER_LEFT);
		header.getStyleClass().add("diff-header");

		Label leftTitle = new Label("Baseline");
		leftTitle.getStyleClass().add("diff-panel-title");
		
		Label rightTitle = new Label("Target");
		rightTitle.getStyleClass().add("diff-panel-title");
		
		Region spacer = new Region();
		HBox.setHgrow(spacer, Priority.ALWAYS);
		
		header.getChildren().addAll(leftTitle, spacer, rightTitle);

		// Split view container
		HBox splitView = new HBox(0);
		splitView.getStyleClass().add("diff-split-view");
		
		// Left panel setup
		leftPanel.getStyleClass().add("diff-panel-left");
		leftPanel.setMinWidth(0);
		HBox.setHgrow(leftPanel, Priority.ALWAYS);

		// Right panel setup
		rightPanel.getStyleClass().add("diff-panel-right");
		rightPanel.setMinWidth(0);
		HBox.setHgrow(rightPanel, Priority.ALWAYS);

		splitView.getChildren().addAll(leftPanel, rightPanel);

		// Scrollpane setup
		scrollPane.setContent(splitView);
		scrollPane.setFitToHeight(true);
		scrollPane.setFitToWidth(true);
		scrollPane.getStyleClass().add("diff-scroll");
		
		root.setTop(header);
		root.setCenter(scrollPane);
		root.getStyleClass().add("diff-root");
	}

	public void render(List<DiffLine> lines) {
		leftPanel.getChildren().clear();
		rightPanel.getChildren().clear();
		
		int leftLineNum = 1;
		int rightLineNum = 1;

		for (DiffLine line : lines) {
			switch (line.getType()) {
			case REMOVED:
				addDiffLine(leftPanel, leftLineNum++, line.getText(), "diff-line-removed");
				addEmptyLine(rightPanel);
				break;
			case ADDED:
				addEmptyLine(leftPanel);
				addDiffLine(rightPanel, rightLineNum++, line.getText(), "diff-line-added");
				break;
			case UNCHANGED:
				addDiffLine(leftPanel, leftLineNum++, line.getText(), "diff-line-unchanged");
				addDiffLine(rightPanel, rightLineNum++, line.getText(), "diff-line-unchanged");
				break;
			}
		}
	}

	private void addDiffLine(VBox panel, int lineNumber, String text, String styleClass) {
		HBox lineContainer = new HBox(0);
		lineContainer.getStyleClass().addAll("diff-line-container", styleClass);
		
		// Line number
		Label lineNum = new Label(String.valueOf(lineNumber));
		lineNum.getStyleClass().add("diff-line-number");
		lineNum.setMinWidth(50);
		lineNum.setMaxWidth(50);
		lineNum.setAlignment(Pos.CENTER_RIGHT);
		lineNum.setPadding(new Insets(0, 8, 0, 0));
		
		// Line content
		Label content = new Label(text.isEmpty() ? " " : text);
		content.getStyleClass().add("diff-line-content");
		content.setMaxWidth(Double.MAX_VALUE);
		HBox.setHgrow(content, Priority.ALWAYS);
		content.setPadding(new Insets(0, 8, 0, 8));
		
		lineContainer.getChildren().addAll(lineNum, content);
		panel.getChildren().add(lineContainer);
	}

	private void addEmptyLine(VBox panel) {
		HBox lineContainer = new HBox(0);
		lineContainer.getStyleClass().addAll("diff-line-container", "diff-line-empty");
		lineContainer.setMinHeight(20);
		
		// Empty line number area
		Label lineNum = new Label("");
		lineNum.getStyleClass().add("diff-line-number");
		lineNum.setMinWidth(50);
		lineNum.setMaxWidth(50);
		
		// Empty content area
		Label content = new Label(" ");
		content.getStyleClass().add("diff-line-content");
		content.setMaxWidth(Double.MAX_VALUE);
		HBox.setHgrow(content, Priority.ALWAYS);
		
		lineContainer.getChildren().addAll(lineNum, content);
		panel.getChildren().add(lineContainer);
	}

	public BorderPane getRoot() {
		return root;
	}
}
