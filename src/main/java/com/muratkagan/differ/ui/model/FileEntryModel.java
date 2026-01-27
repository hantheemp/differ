package com.muratkagan.differ.ui.model;

public class FileEntryModel {

	private final String path;
	private final boolean modified;

	public FileEntryModel(String path, boolean modified) {
		this.path = path;
		this.modified = modified;
	}

	public String getPath() {
		return path;
	}

	public boolean isModified() {
		return modified;
	}

	@Override
	public String toString() {
		return path;
	}
}
