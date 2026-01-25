package com.muratkagan.differ.ui.theme;

import java.awt.Font;
import java.awt.FontFormatException;
import java.io.IOException;
import java.io.InputStream;

public class Typography {

	private Typography() {

	}

	// ============================================================================
	// FONT FAMILIES
	// ============================================================================

	public static final String FONT_FAMILY_DISPLAY = "Inter";
	public static final String FONT_FAMILY_MONO = "JetBrains Mono";
	public static final String FONT_FAMILY_FALLBACK_DISPLAY = "Arial";
	public static final String FONT_FAMILY_FALLBACK_MONO = "Courier New";

	// ============================================================================
	// FONT SIZES
	// ============================================================================

	public static final int SIZE_TINY = 10;
	public static final int SIZE_SMALL = 12;
	public static final int SIZE_NORMAL = 13;
	public static final int SIZE_MEDIUM = 14;
	public static final int SIZE_LARGE = 16;
	public static final int SIZE_TITLE = 18;
	public static final int SIZE_HEADING = 20;
	public static final int SIZE_DISPLAY = 24;

	// ============================================================================
	// FONT WEIGHTS (as style constants)
	// ============================================================================

	public static final int WEIGHT_NORMAL = Font.PLAIN;
	public static final int WEIGHT_MEDIUM = Font.PLAIN; // Will need custom font loading for true medium
	public static final int WEIGHT_SEMIBOLD = Font.BOLD;
	public static final int WEIGHT_BOLD = Font.BOLD;

	// ============================================================================
	// COMMON FONT DEFINITIONS
	// ============================================================================

	// Display fonts (UI elements)
	public static final Font DISPLAY_TINY = createDisplayFont(SIZE_TINY, WEIGHT_NORMAL);
	public static final Font DISPLAY_SMALL = createDisplayFont(SIZE_SMALL, WEIGHT_NORMAL);
	public static final Font DISPLAY_NORMAL = createDisplayFont(SIZE_NORMAL, WEIGHT_NORMAL);
	public static final Font DISPLAY_MEDIUM = createDisplayFont(SIZE_MEDIUM, WEIGHT_NORMAL);
	public static final Font DISPLAY_LARGE = createDisplayFont(SIZE_LARGE, WEIGHT_NORMAL);

	public static final Font DISPLAY_SMALL_BOLD = createDisplayFont(SIZE_SMALL, WEIGHT_BOLD);
	public static final Font DISPLAY_NORMAL_BOLD = createDisplayFont(SIZE_NORMAL, WEIGHT_BOLD);
	public static final Font DISPLAY_MEDIUM_BOLD = createDisplayFont(SIZE_MEDIUM, WEIGHT_BOLD);
	public static final Font DISPLAY_LARGE_BOLD = createDisplayFont(SIZE_LARGE, WEIGHT_BOLD);

	// Title fonts
	public static final Font TITLE = createDisplayFont(SIZE_TITLE, WEIGHT_BOLD);
	public static final Font HEADING = createDisplayFont(SIZE_HEADING, WEIGHT_BOLD);
	public static final Font DISPLAY = createDisplayFont(SIZE_DISPLAY, WEIGHT_BOLD);

	// Monospace fonts (code editor)
	public static final Font MONO_TINY = createMonoFont(SIZE_TINY, WEIGHT_NORMAL);
	public static final Font MONO_SMALL = createMonoFont(SIZE_SMALL, WEIGHT_NORMAL);
	public static final Font MONO_NORMAL = createMonoFont(SIZE_NORMAL, WEIGHT_NORMAL);
	public static final Font MONO_MEDIUM = createMonoFont(SIZE_MEDIUM, WEIGHT_NORMAL);

	public static final Font MONO_SMALL_BOLD = createMonoFont(SIZE_SMALL, WEIGHT_BOLD);
	public static final Font MONO_NORMAL_BOLD = createMonoFont(SIZE_NORMAL, WEIGHT_BOLD);

	// ============================================================================
	// SEMANTIC FONT ASSIGNMENTS
	// ============================================================================

	// Header
	public static final Font HEADER_TITLE = TITLE;
	public static final Font HEADER_MENU = DISPLAY_NORMAL;

	// Toolbar
	public static final Font TOOLBAR_LABEL = DISPLAY_TINY;
	public static final Font TOOLBAR_INPUT = MONO_NORMAL;
	public static final Font TOOLBAR_BUTTON = DISPLAY_NORMAL_BOLD;

	// File tree
	public static final Font TREE_HEADER = DISPLAY_SMALL_BOLD;
	public static final Font TREE_ITEM = DISPLAY_NORMAL;
	public static final Font TREE_BADGE = DISPLAY_TINY;

	// Diff viewer
	public static final Font DIFF_HEADER = MONO_NORMAL;
	public static final Font DIFF_CONTENT = MONO_NORMAL;
	public static final Font DIFF_LINE_NUMBER = MONO_TINY;

	// Status bar
	public static final Font STATUS_TEXT = DISPLAY_SMALL;
	public static final Font STATUS_LABEL = DISPLAY_TINY;

	// Buttons
	public static final Font BUTTON_PRIMARY = DISPLAY_NORMAL_BOLD;
	public static final Font BUTTON_SECONDARY = DISPLAY_NORMAL;
	public static final Font BUTTON_SMALL = DISPLAY_SMALL;

	// Badges
	public static final Font BADGE = DISPLAY_TINY;

	public static Font createDisplayFont(int size, int style) {
		Font font = loadCustomFont(FONT_FAMILY_DISPLAY, size, style);
		if (font != null) {
			return font;
		}
		return new Font(FONT_FAMILY_FALLBACK_DISPLAY, style, size);
	}

	public static Font createMonoFont(int size, int style) {
		Font font = loadCustomFont(FONT_FAMILY_MONO, size, style);
		if (font != null) {
			return font;
		}
		return new Font(FONT_FAMILY_FALLBACK_MONO, style, size);
	}

	private static Font loadCustomFont(String fontName, int size, int style) {
		try {
			String resourcePath = "/fonts/" + fontName.replace(" ", "") + ".ttf";
			InputStream fontStream = Typography.class.getResourceAsStream(resourcePath);

			if (fontStream != null) {
				Font baseFont = Font.createFont(Font.TRUETYPE_FONT, fontStream);
				return baseFont.deriveFont(style, (float) size);
			}
		} catch (FontFormatException | IOException e) {
			System.err.println("Could not load custom font: " + fontName + " - " + e.getMessage());
		}

		Font systemFont = new Font(fontName, style, size);
		if (!systemFont.getFamily().equals(Font.DIALOG)) {
			return systemFont;
		}

		return null;
	}

}
