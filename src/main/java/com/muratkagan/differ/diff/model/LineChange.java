package com.muratkagan.differ.diff.model;

public class LineChange {

	private final LineChangeType type;
	private final Integer sourceLineNo;
	private final Integer targetLineNo;
	private final String sourceLine;
	private final String targetLine;

	public LineChange(LineChangeType type, Integer sourceLineNo, Integer targetLineNo, String sourceLine,
			String targetLine) {
		this.type = type;
		this.sourceLineNo = sourceLineNo;
		this.targetLineNo = targetLineNo;
		this.sourceLine = sourceLine;
		this.targetLine = targetLine;
	}

	public LineChangeType getType() {
		return type;
	}

	public Integer getSourceLineNo() {
		return sourceLineNo;
	}

	public Integer getTargetLineNo() {
		return targetLineNo;
	}

	public String getSourceLine() {
		return sourceLine;
	}

	public String getTargetLine() {
		return targetLine;
	}

	@Override
	public String toString() {
		switch (type) {
		case INSERT:
			return String.format("+ [%d] %s", targetLineNo + 1, targetLine);

		case DELETE:
			return String.format("- [%d] %s", sourceLineNo + 1, sourceLine);

		case CHANGE:
			return String.format("~ [%d → %d]%n  - %s%n  + %s", sourceLineNo + 1, targetLineNo + 1, sourceLine,
					targetLine);

		default:
			return type.name();
		}
	}
}