package com.muratkagan.differ.ui.view;

import java.util.function.Consumer;

import com.muratkagan.differ.ui.model.FileEntryModel;

import javafx.collections.ObservableList;
import javafx.scene.control.ListCell;
import javafx.scene.control.ListView;
import javafx.scene.layout.BorderPane;

public class SidebarListView {

	private final BorderPane root;
	private final ListView<FileEntryModel> listView;

	public SidebarListView(ObservableList<FileEntryModel> items) {
		this.listView = new ListView<>(items);
		this.root = new BorderPane(listView);

		configure();
	}

	private void configure() {
		listView.setCellFactory(lv -> new ListCell<>() {
			@Override
			protected void updateItem(FileEntryModel item, boolean empty) {
				super.updateItem(item, empty);

				getStyleClass().removeAll("file-modified", "file-unchanged");

				if (empty || item == null) {
					setText(null);
				} else {
					setText(item.getPath());

					if (item.isModified()) {
						getStyleClass().add("file-modified");
					} else {
						getStyleClass().add("file-unchanged");
					}
				}
			}
		});

		listView.getStyleClass().add("sidebar-list");
	}

	public void onSelectionChanged(Consumer<FileEntryModel> handler) {
		listView.getSelectionModel().selectedItemProperty().addListener((obs, oldVal, newVal) -> {
			if (newVal != null) {
				handler.accept(newVal);
			}
		});
	}

	public BorderPane getRoot() {
		return root;
	}
}
