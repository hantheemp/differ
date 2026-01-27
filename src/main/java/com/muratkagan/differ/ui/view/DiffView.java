package com.muratkagan.differ.ui.view;

import java.util.ArrayList;
import java.util.List;

import com.muratkagan.differ.ui.model.DiffLine;

import javafx.collections.FXCollections;
import javafx.geometry.Insets;
import javafx.scene.control.Label;
import javafx.scene.control.ListCell;
import javafx.scene.control.ListView;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.HBox;
import javafx.scene.layout.Priority;
import javafx.scene.layout.VBox;

public class DiffView {

	private final BorderPane root = new BorderPane();
	private final ListView<String> leftListView = new ListView<>();
	private final ListView<String> rightListView = new ListView<>();

	public DiffView() {
		configure();
	}

	private void configure() {
		VBox leftPanel = createPanel("Original", leftListView, "diff-removed");
		VBox rightPanel = createPanel("Modified", rightListView, "diff-added");

		HBox splitView = new HBox(10);
		HBox.setHgrow(leftPanel, Priority.ALWAYS);
		HBox.setHgrow(rightPanel, Priority.ALWAYS);
		splitView.getChildren().addAll(leftPanel, rightPanel);
		splitView.setPadding(new Insets(10));

		root.setCenter(splitView);
		root.getStyleClass().add("diff-root");
	}

	private VBox createPanel(String title, ListView<String> listView, String styleClass) {
		Label header = new Label(title);
		header.getStyleClass().add("diff-header");

		listView.setCellFactory(lv -> new ListCell<>() {
			@Override
			protected void updateItem(String item, boolean empty) {
				super.updateItem(item, empty);
				if (empty || item == null) {
					setText(null);
					getStyleClass().clear();
				} else {
					setText(item);
					getStyleClass().setAll("diff-line", styleClass);
				}
			}
		});

		VBox panel = new VBox(5);
		VBox.setVgrow(listView, Priority.ALWAYS);
		panel.getChildren().addAll(header, listView);
		panel.getStyleClass().add("diff-panel");

		return panel;
	}

	public void render(List<DiffLine> lines) {
		List<String> leftLines = new ArrayList<>();
		List<String> rightLines = new ArrayList<>();

		for (DiffLine line : lines) {
			switch (line.getType()) {
			case REMOVED:
				leftLines.add(line.getText());
				break;
			case ADDED:
				rightLines.add(line.getText());
				break;
			case UNCHANGED:
				leftLines.add(line.getText());
				rightLines.add(line.getText());
				break;
			}
		}

		leftListView.setItems(FXCollections.observableArrayList(leftLines));
		rightListView.setItems(FXCollections.observableArrayList(rightLines));
	}

	public BorderPane getRoot() {
		return root;
	}
}