package com.muratkagan.differ.core.ignore;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class IgnoreRules {
	private static final List<String> DEFAULT_IGNORES = List.of("target/", ".git/", ".idea/", ".vscode/", ".settings/",
			".classpath", ".project");

	private static final List<String> DEFAULT_EXTENSIONS = List.of(".class", ".jar", ".war", ".log");

	private static List<String> ignorePatterns = new ArrayList<>(DEFAULT_IGNORES);
	private static boolean initialized = false;

	public static void initialize(Path projectRoot) {
		ignorePatterns = new ArrayList<>(DEFAULT_IGNORES);
		loadIgnoreFile(projectRoot);
		initialized = true;
	}

	public static void reset() {
		ignorePatterns = new ArrayList<>(DEFAULT_IGNORES);
		initialized = false;
	}

	private static void loadIgnoreFile(Path projectRoot) {
		Path ignoreFile = projectRoot.resolve(".differignore");

		if (!Files.exists(ignoreFile)) {
			return;
		}

		try {
			List<String> customPatterns = Files.readAllLines(ignoreFile).stream().map(String::trim)
					.filter(line -> !line.isEmpty()).filter(line -> !line.startsWith("#")).collect(Collectors.toList());

			ignorePatterns.addAll(customPatterns);
		} catch (IOException e) {
			System.err.println("Warning: Could not read .differignore file: " + e.getMessage());
		}
	}

	public static boolean shouldIgnore(Path relativePath) {
		String path = relativePath.toString().replace("\\", "/");

		for (String pattern : ignorePatterns) {
			if (matchesPattern(path, pattern)) {
				return true;
			}
		}

		for (String ext : DEFAULT_EXTENSIONS) {
			if (path.endsWith(ext)) {
				return true;
			}
		}

		return false;
	}

	private static boolean matchesPattern(String path, String pattern) {
		if (pattern.endsWith("/")) {
			return path.startsWith(pattern) || path.startsWith(pattern.substring(0, pattern.length() - 1) + "/");
		}

		if (pattern.contains("*")) {
			String regex = pattern.replace(".", "\\.").replace("*", ".*");
			return path.matches(regex);
		}

		return path.equals(pattern) || path.startsWith(pattern + "/");
	}

	public static boolean isInitialized() {
		return initialized;
	}
}