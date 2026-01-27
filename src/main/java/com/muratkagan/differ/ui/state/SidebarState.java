package com.muratkagan.differ.ui.state;

import java.nio.file.Path;

import javafx.beans.property.ObjectProperty;
import javafx.beans.property.SimpleObjectProperty;

public class SidebarState {

	private final ObjectProperty<Path> baselineDirectory = new SimpleObjectProperty<>();
	private final ObjectProperty<Path> targetDirectory = new SimpleObjectProperty<>();

	public ObjectProperty<Path> baselineDirectoryProperty() {
		return baselineDirectory;
	}

	public void setBaselineDirectory(Path path) {
		baselineDirectory.set(path);
	}

	public Path getBaselineDirectory() {
		return baselineDirectory.get();
	}

	public ObjectProperty<Path> targetDirectoryProperty() {
		return targetDirectory;
	}

	public void setTargetDirectory(Path path) {
		targetDirectory.set(path);
	}

	public Path getTargetDirectory() {
		return targetDirectory.get();
	}

	public void showEmpty() {
		baselineDirectory.set(null);
		targetDirectory.set(null);
	}
}