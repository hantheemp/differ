package com.muratkagan.differ.ui.state;

import java.util.List;

import com.muratkagan.differ.ui.view.FileEntryModel;

import javafx.beans.property.ObjectProperty;
import javafx.beans.property.SimpleObjectProperty;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;

public class SidebarState {

	private final ObjectProperty<ViewMode> viewMode = new SimpleObjectProperty<>(ViewMode.EMPTY);

	private final ObservableList<FileEntryModel> files = FXCollections.observableArrayList();

	public ObjectProperty<ViewMode> viewModeProperty() {
		return viewMode;
	}

	public ObservableList<FileEntryModel> getFiles() {
		return files;
	}

	public void showEmpty() {
		viewMode.set(ViewMode.EMPTY);
		files.clear();
	}

	public void showList(List<FileEntryModel> files2) {
		viewMode.set(ViewMode.LIST);
		files.setAll(files2);
	}
}
