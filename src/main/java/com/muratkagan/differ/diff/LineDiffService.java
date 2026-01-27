package com.muratkagan.differ.diff;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Arrays;
import java.util.List;

import com.github.difflib.DiffUtils;
import com.github.difflib.patch.AbstractDelta;
import com.github.difflib.patch.Chunk;
import com.github.difflib.patch.Patch;
import com.muratkagan.differ.diff.model.FileDiffResult;
import com.muratkagan.differ.diff.model.LineChange;
import com.muratkagan.differ.diff.model.LineChangeType;

public class LineDiffService {

	public FileDiffResult diffFiles(Path baselineFile, Path targetFile, Path relativePath) throws IOException {
		List<String> baselineLines = Files.readAllLines(baselineFile);
		List<String> targetLines = Files.readAllLines(targetFile);
		return diff(baselineLines, targetLines, relativePath);
	}

	public FileDiffResult diff(String baselineContent, String targetContent) {
		List<String> baselineLines = Arrays.asList(baselineContent.split("\\r?\\n"));
		List<String> targetLines = Arrays.asList(targetContent.split("\\r?\\n"));
		return diff(baselineLines, targetLines, null);
	}

	private FileDiffResult diff(List<String> baselineLines, List<String> targetLines, Path relativePath) {
		Patch<String> patch = DiffUtils.diff(baselineLines, targetLines);
		FileDiffResult result = new FileDiffResult(relativePath);

		for (AbstractDelta<String> delta : patch.getDeltas()) {
			Chunk<String> source = delta.getSource();
			Chunk<String> target = delta.getTarget();

			switch (delta.getType()) {
			case INSERT:
				int targetLineNo = target.getPosition() + 1;
				for (String line : target.getLines()) {
					result.addChange(new LineChange(LineChangeType.INSERT, null, targetLineNo++, null, line));
				}
				break;

			case DELETE:
				int sourceLineNo = source.getPosition() + 1;
				for (String line : source.getLines()) {
					result.addChange(new LineChange(LineChangeType.DELETE, sourceLineNo++, null, line, null));
				}
				break;

			case CHANGE:
				int sourcePos = source.getPosition() + 1;
				int targetPos = target.getPosition() + 1;
				int max = Math.max(source.getLines().size(), target.getLines().size());

				for (int i = 0; i < max; i++) {
					String oldLine = i < source.getLines().size() ? source.getLines().get(i) : null;
					String newLine = i < target.getLines().size() ? target.getLines().get(i) : null;

					if (oldLine != null && newLine != null) {
						result.addChange(
								new LineChange(LineChangeType.CHANGE, sourcePos + i, targetPos + i, oldLine, newLine));
					} else if (oldLine != null) {
						result.addChange(new LineChange(LineChangeType.DELETE, sourcePos + i, null, oldLine, null));
					} else {
						result.addChange(new LineChange(LineChangeType.INSERT, null, targetPos + i, null, newLine));
					}
				}
				break;

			default:
				break;
			}
		}

		return result;
	}
}