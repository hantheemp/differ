package com.muratkagan.differ.ui.model;

import java.util.List;

public class SidebarState {

	private List<FileEntryModel> files = List.of();
	private FileEntryModel selected;

	public List<FileEntryModel> getFiles() {
		return files;
	}

	public FileEntryModel getSelected() {
		return selected;
	}

	public void setFiles(List<FileEntryModel> files) {
		this.files = files;
	}

	public void select(FileEntryModel entry) {
		this.selected = entry;
	}

	public boolean isEmpty() {
		return files == null || files.isEmpty();
	}
}
