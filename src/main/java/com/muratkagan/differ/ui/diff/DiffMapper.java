package com.muratkagan.differ.ui.diff;

import com.muratkagan.differ.diff.model.FileDiffResult;
import com.muratkagan.differ.diff.model.LineChange;
import com.muratkagan.differ.ui.model.DiffLine;

import java.util.ArrayList;
import java.util.List;

public class DiffMapper {

	public static List<DiffLine> toUiLines(FileDiffResult result) {
		List<DiffLine> lines = new ArrayList<>();

		for (LineChange change : result.getChanges()) {
			switch (change.getType()) {
				case DELETE:
					lines.add(new DiffLine(DiffLine.Type.REMOVED, change.getSourceLine()));
					break;
				
				case INSERT:
					lines.add(new DiffLine(DiffLine.Type.ADDED, change.getTargetLine()));
					break;
				
				case CHANGE:
					lines.add(new DiffLine(DiffLine.Type.REMOVED, change.getSourceLine()));
					lines.add(new DiffLine(DiffLine.Type.ADDED, change.getTargetLine()));
					break;
			}
		}

		return lines;
	}
}