package com.muratkagan.differ.core.identity;

import java.io.IOException;
import java.nio.file.*;
import java.util.HashMap;
import java.util.Map;

import com.muratkagan.differ.core.ignore.IgnoreRules;

public class ProjectScanner {

	public static Map<String, Path> scanProject(Path projectRoot) throws IOException {
		Map<String, Path> fileMap = new HashMap<>();

		Files.walk(projectRoot).filter(Files::isRegularFile).forEach(file -> {
			String relativePath = projectRoot.relativize(file).toString().replace("\\", "/");

			if (IgnoreRules.shouldIgnore(Paths.get(relativePath))) {

				return;
			}

			fileMap.put(relativePath, file);
		});

		return fileMap;
	}
}
