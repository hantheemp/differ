package com.muratkagan.differ.ui.model;

public class EditorState {

	private boolean hasContent;
	private String leftContent;
	private String rightContent;
	private DiffViewMode viewMode;

	public EditorState() {
		this.hasContent = false;
		this.viewMode = DiffViewMode.SIDE_BY_SIDE;
	}

	public boolean hasContent() {
		return hasContent;
	}

	public void clear() {
		hasContent = false;
		leftContent = null;
		rightContent = null;
	}

	public void setDiff(String left, String right) {
		this.leftContent = left;
		this.rightContent = right;
		this.hasContent = true;
	}

	public String getLeftContent() {
		return leftContent;
	}

	public String getRightContent() {
		return rightContent;
	}

	public DiffViewMode getViewMode() {
		return viewMode;
	}

	public void setViewMode(DiffViewMode viewMode) {
		this.viewMode = viewMode;
	}
}
