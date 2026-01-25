package com.muratkagan.differ;

import com.muratkagan.differ.core.identity.ProjectScanner;
import com.muratkagan.differ.diff.LineDiffService;
import com.muratkagan.differ.diff.model.FileDiffResult;
import com.muratkagan.differ.ui.MainFrame;
import com.muratkagan.differ.ui.controller.AppController;
import com.muratkagan.differ.ui.foundation.BasePanel;
import com.muratkagan.differ.ui.theme.ColorPalette;
import com.muratkagan.differ.util.FileHasher;

import java.awt.Color;
import java.nio.file.*;
import java.util.Map;

import javax.swing.JFrame;
import javax.swing.SwingUtilities;

public class DifferApplication {

	public static void main(String[] args) throws Exception {

		SwingUtilities.invokeLater(() -> {
			MainFrame frame = new MainFrame();
			AppController app = new AppController(frame);
			app.initialize();
		});
		/*
		 * Path baselineRoot = Paths.get("C:\\Users\\temel\\Desktop\\testFiles\\old");
		 * Path targetRoot = Paths.get("C:\\Users\\temel\\Desktop\\testFiles\\new");
		 * 
		 * Map<String, Path> baselineFiles = ProjectScanner.scanProject(baselineRoot);
		 * Map<String, Path> targetFiles = ProjectScanner.scanProject(targetRoot);
		 * 
		 * for (String relativePath : baselineFiles.keySet()) { if
		 * (!targetFiles.containsKey(relativePath)) { System.out.println("DELETED: " +
		 * relativePath); } }
		 * 
		 * for (String relativePath : targetFiles.keySet()) { if
		 * (!baselineFiles.containsKey(relativePath)) { System.out.println("ADDED: " +
		 * relativePath); } }
		 * 
		 * for (String relativePath : baselineFiles.keySet()) { if
		 * (!targetFiles.containsKey(relativePath)) { continue; }
		 * 
		 * Path baselineFile = baselineFiles.get(relativePath); Path targetFile =
		 * targetFiles.get(relativePath);
		 * 
		 * if (!Files.isRegularFile(baselineFile) || !Files.isRegularFile(targetFile)) {
		 * System.out.println("SKIPPED (not a file): " + relativePath); continue; }
		 * 
		 * String hashA = FileHasher.sha256(baselineFile); String hashB =
		 * FileHasher.sha256(targetFile);
		 * 
		 * if (hashA.equals(hashB)) { System.out.println("UNCHANGED: " + relativePath);
		 * } else { System.out.println("MODIFIED: " + relativePath);
		 * 
		 * FileDiffResult diff = LineDiffService.diffFiles(baselineFile, targetFile,
		 * Paths.get(relativePath));
		 * 
		 * if (diff.isEmpty()) { System.out.println("  (no line-level changes)"); } else
		 * { diff.getChanges().forEach(change -> System.out.println("  " + change)); } }
		 * }
		 */
	}

}
