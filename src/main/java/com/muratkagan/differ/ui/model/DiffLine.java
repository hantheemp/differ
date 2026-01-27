package com.muratkagan.differ.ui.model;

public class DiffLine {

	public enum Type {
		ADDED, REMOVED, UNCHANGED
	}

	private final Type type;
	private final String text;

	public DiffLine(Type type, String text) {
		this.type = type;
		this.text = text;
	}

	public Type getType() {
		return type;
	}

	public String getText() {
		return text;
	}
}