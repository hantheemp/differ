package com.muratkagan.differ.diff.model;

import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

public class FileDiffResult {

	private final Path file;
	private final List<LineChange> changes = new ArrayList<LineChange>();

	public FileDiffResult(Path file) {
		this.file = file;
	}

	public void addChange(LineChange change) {
		changes.add(change);
	}

	public Path getFile() {
		return file;
	}

	public List<LineChange> getChanges() {
		return changes;
	}

	public boolean isEmpty() {
		return changes.isEmpty();
	}
}
