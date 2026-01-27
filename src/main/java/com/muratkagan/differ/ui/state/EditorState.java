package com.muratkagan.differ.ui.state;

import java.util.List;

import com.muratkagan.differ.ui.model.DiffLine;

import javafx.beans.property.ObjectProperty;
import javafx.beans.property.SimpleObjectProperty;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;

public class EditorState {

	private final ObjectProperty<ViewMode> viewMode = new SimpleObjectProperty<>(ViewMode.EMPTY);

	private final ObservableList<DiffLine> diffLines = FXCollections.observableArrayList();

	public ObjectProperty<ViewMode> viewModeProperty() {
		return viewMode;
	}

	public ObservableList<DiffLine> getDiffLines() {
		return diffLines;
	}

	public void clear() {
		viewMode.set(ViewMode.EMPTY);
		diffLines.clear();
	}

	public void showDiff(List<DiffLine> lines) {
		viewMode.set(ViewMode.DIFF);
		diffLines.setAll(lines);
	}

}