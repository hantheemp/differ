package com.muratkagan.differ.ui.theme;

import java.awt.Color;

public class ColorPalette {

	private ColorPalette() {

	}

	// ============================================================================
	// PRIMARY COLORS
	// ============================================================================

	public static final Color PRIMARY = new Color(0x137FEC);
	public static final Color PRIMARY_HOVER = new Color(0x0D6BD4);
	public static final Color PRIMARY_PRESSED = new Color(0x0A59B8);
	public static final Color PRIMARY_DISABLED = new Color(19, 127, 236, 128); // 0x137FEC with 50% opacity

	// ============================================================================
	// BACKGROUND COLORS
	// ============================================================================

	public static final Color BACKGROUND_LIGHT = new Color(0xF6F7F8);
	public static final Color BACKGROUND_DARK = new Color(0x101922);
	public static final Color SURFACE_DARK = new Color(0x192633);
	public static final Color SURFACE_HOVER = new Color(0x1E2F3D);
	public static final Color EDITOR_BACKGROUND = new Color(0x1E1E1E);

	// ============================================================================
	// BORDER COLORS
	// ============================================================================

	public static final Color BORDER_DARK = new Color(0x324D67);
	public static final Color BORDER_LIGHT = new Color(0xE2E8F0);
	public static final Color BORDER_HOVER = new Color(0x4B6A88);
	public static final Color DIVIDER = new Color(0x324D67);

	// ============================================================================
	// TEXT COLORS
	// ============================================================================

	public static final Color TEXT_PRIMARY = new Color(0xFFFFFF);
	public static final Color TEXT_SECONDARY = new Color(0xCBD5E1);
	public static final Color TEXT_TERTIARY = new Color(0x94A3B8);
	public static final Color TEXT_QUATERNARY = new Color(0x64748B);
	public static final Color TEXT_DISABLED = new Color(0x475569);
	public static final Color TEXT_DARK = new Color(0x0F172A);

	// ============================================================================
	// DIFF HIGHLIGHT COLORS
	// ============================================================================

	// Added lines (green)
	public static final Color DIFF_ADDED_BG = new Color(22, 163, 74, 38); // 15% opacity
	public static final Color DIFF_ADDED_GUTTER_BG = new Color(22, 163, 74, 51); // 20% opacity
	public static final Color DIFF_ADDED_BORDER = new Color(22, 163, 74, 76); // 30% opacity
	public static final Color DIFF_ADDED_TEXT = new Color(0x16A34A);

	// Deleted lines (red)
	public static final Color DIFF_DELETED_BG = new Color(220, 38, 38, 38);
	public static final Color DIFF_DELETED_GUTTER_BG = new Color(220, 38, 38, 51);
	public static final Color DIFF_DELETED_BORDER = new Color(220, 38, 38, 76);
	public static final Color DIFF_DELETED_TEXT = new Color(0xDC2626);

	// Modified lines (yellow)
	public static final Color DIFF_MODIFIED_BG = new Color(234, 179, 8, 38);
	public static final Color DIFF_MODIFIED_GUTTER_BG = new Color(234, 179, 8, 51);
	public static final Color DIFF_MODIFIED_BORDER = new Color(234, 179, 8, 76);
	public static final Color DIFF_MODIFIED_TEXT = new Color(0xEAB308);

	// Unchanged/context lines
	public static final Color DIFF_CONTEXT_BG = new Color(0x94A3B8);
	public static final Color DIFF_CONTEXT_TEXT = new Color(0x94A3B8);

	// Empty/filler lines (where one side has content, other doesn't)
	public static final Color DIFF_EMPTY_BG = new Color(0x151515);
	public static final Color DIFF_EMPTY_GUTTER_BG = new Color(25, 38, 51, 76); // 0x192633 with alpha 76

	// ============================================================================
	// STATUS COLORS
	// ============================================================================

	// Success (green)
	public static final Color SUCCESS = new Color(0x16A34A);
	public static final Color SUCCESS_BG = new Color(22, 163, 74, 102); // 40% opacity
	public static final Color SUCCESS_BORDER = new Color(22, 163, 74, 128); // 50% opacity
	public static final Color SUCCESS_LIGHT = new Color(0x22C55E);

	// Error (red)
	public static final Color ERROR = new Color(0xDC2626);
	public static final Color ERROR_BG = new Color(220, 38, 38, 102);
	public static final Color ERROR_BORDER = new Color(220, 38, 38, 128);
	public static final Color ERROR_LIGHT = new Color(0xEF4444);

	// Warning (yellow)
	public static final Color WARNING = new Color(0xEAB308);
	public static final Color WARNING_BG = new Color(234, 179, 8, 102);
	public static final Color WARNING_BORDER = new Color(234, 179, 8, 128);
	public static final Color WARNING_LIGHT = new Color(0xFACC15);

	// Info (blue)
	public static final Color INFO = new Color(0x3B82F6);
	public static final Color INFO_BG = new Color(59, 130, 246, 102);
	public static final Color INFO_BORDER = new Color(59, 130, 246, 128);
	public static final Color INFO_LIGHT = new Color(0x60A5FA);

	// ============================================================================
	// SYNTAX HIGHLIGHTING COLORS
	// ============================================================================

	public static final Color SYNTAX_KEYWORD = new Color(0x60A5FA); // blue
	public static final Color SYNTAX_STRING = new Color(0xFDA172); // orange
	public static final Color SYNTAX_COMMENT = new Color(0x6B7280); // gray
	public static final Color SYNTAX_NUMBER = new Color(0x34D399); // green
	public static final Color SYNTAX_CLASS = new Color(0xFDE68A); // yellow
	public static final Color SYNTAX_METHOD = new Color(0xFDE68A); // yellow
	public static final Color SYNTAX_ANNOTATION = new Color(0x34D399); // green
	public static final Color SYNTAX_OPERATOR = new Color(0xE5E7EB); // light gray
	public static final Color SYNTAX_VARIABLE = new Color(0xE5E7EB); // light gray

	// ============================================================================
	// COMPONENT-SPECIFIC COLORS
	// ============================================================================

	// Line numbers
	public static final Color LINE_NUMBER_TEXT = new Color(0x64748B);
	public static final Color LINE_NUMBER_BG = new Color(25, 38, 51, 128); // 0x192633 with alpha 128

	// Selection
	public static final Color SELECTION_BG = new Color(19, 127, 236, 76); // 0x137FEC with alpha 76
	public static final Color SELECTION_BORDER = new Color(0x137FEC);

	// Hover
	public static final Color HOVER_BG = new Color(255, 255, 255, 13); // white 5% opacity
	public static final Color HOVER_BORDER = new Color(0x4B6A88);

	// Focus
	public static final Color FOCUS_RING = PRIMARY;
	public static final Color FOCUS_RING_ALPHA = new Color(19, 127, 236, 51); // 0x137FEC with alpha 51 (20% opacity)

	// Scrollbar
	public static final Color SCROLLBAR_TRACK = new Color(0x111A22);
	public static final Color SCROLLBAR_THUMB = new Color(0x324D67);
	public static final Color SCROLLBAR_THUMB_HOVER = new Color(0x4B6A88);

	// Avatar
	public static final Color AVATAR_BG = new Color(19, 127, 236, 51); // 0x137FEC with alpha 51 (20% opacity)
	public static final Color AVATAR_BORDER = new Color(19, 127, 236, 76); // 0x137FEC with alpha 76 (30% opacity)
	public static final Color AVATAR_TEXT = PRIMARY;

	// Badge backgrounds
	public static final Color BADGE_SUCCESS_BG = new Color(22, 163, 74, 102);
	public static final Color BADGE_ERROR_BG = new Color(220, 38, 38, 102);
	public static final Color BADGE_WARNING_BG = new Color(234, 179, 8, 102);
	public static final Color BADGE_INFO_BG = new Color(59, 130, 246, 102);

	// Progress bar
	public static final Color PROGRESS_TRACK = BACKGROUND_DARK;
	public static final Color PROGRESS_FILL = PRIMARY;
	public static final Color PROGRESS_BORDER = BORDER_DARK;

	// Button shadows
	public static final Color BUTTON_SHADOW = new Color(30, 58, 138, 51); // 0x1E3A8A with alpha 51 (20% opacity)

	// ============================================================================
	// SEMANTIC COLORS (mapped from palette)
	// ============================================================================

	public static final Color CHANGE_ADDED = SUCCESS;
	public static final Color CHANGE_DELETED = ERROR;
	public static final Color CHANGE_MODIFIED = WARNING;

}
