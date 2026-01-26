package com.muratkagan.differ.ui.state;

import javafx.beans.property.ObjectProperty;
import javafx.beans.property.SimpleObjectProperty;
import javafx.beans.property.SimpleStringProperty;
import javafx.beans.property.StringProperty;

public class EditorState {

	private final ObjectProperty<ViewMode> viewMode = new SimpleObjectProperty<ViewMode>(ViewMode.EMPTY);

	private final StringProperty leftText = new SimpleStringProperty();
	private final StringProperty rightText = new SimpleStringProperty();

	public ObjectProperty<ViewMode> viewModeProperty() {
		return viewMode;
	}

	public StringProperty leftTextProperty() {
		return leftText;
	}

	public StringProperty rightTextProperty() {
		return rightText;
	}

	public void clear() {
		viewMode.set(ViewMode.EMPTY);
		leftText.set(null);
		rightText.set(null);
	}

	public void showDiff(String left, String right) {
		viewMode.set(ViewMode.DIFF);
		leftText.set(left);
		rightText.set(right);
	}

}
