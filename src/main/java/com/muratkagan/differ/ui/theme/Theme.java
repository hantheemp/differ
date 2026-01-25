package com.muratkagan.differ.ui.theme;

import java.awt.Color;
import java.awt.Font;
import java.awt.Insets;

import javax.swing.UIManager;

public final class Theme {

	private Theme() {
		// Prevent instantiation
	}

	// ============================================================================
	// THEME ACCESSORS
	// ============================================================================

	public static ColorAPI color() {
		return ColorAPI.INSTANCE;
	}

	public static FontAPI font() {
		return FontAPI.INSTANCE;
	}

	public static SpacingAPI spacing() {
		return SpacingAPI.INSTANCE;
	}

	// ============================================================================
	// COLOR API
	// ============================================================================

	public static final class ColorAPI {
		private static final ColorAPI INSTANCE = new ColorAPI();

		private ColorAPI() {
		}

		// Primary
		public Color primary() {
			return ColorPalette.PRIMARY;
		}

		public Color primaryHover() {
			return ColorPalette.PRIMARY_HOVER;
		}

		public Color primaryPressed() {
			return ColorPalette.PRIMARY_PRESSED;
		}

		// Background
		public Color background() {
			return ColorPalette.BACKGROUND_DARK;
		}

		public Color backgroundLight() {
			return ColorPalette.BACKGROUND_LIGHT;
		}

		public Color surface() {
			return ColorPalette.SURFACE_DARK;
		}

		public Color surfaceHover() {
			return ColorPalette.SURFACE_HOVER;
		}

		public Color editor() {
			return ColorPalette.EDITOR_BACKGROUND;
		}

		// Border
		public Color border() {
			return ColorPalette.BORDER_DARK;
		}

		public Color borderHover() {
			return ColorPalette.BORDER_HOVER;
		}

		public Color divider() {
			return ColorPalette.DIVIDER;
		}

		// Text
		public Color text() {
			return ColorPalette.TEXT_PRIMARY;
		}

		public Color textSecondary() {
			return ColorPalette.TEXT_SECONDARY;
		}

		public Color textTertiary() {
			return ColorPalette.TEXT_TERTIARY;
		}

		public Color textDisabled() {
			return ColorPalette.TEXT_DISABLED;
		}

		// Diff
		public Color diffAddedBg() {
			return ColorPalette.DIFF_ADDED_BG;
		}

		public Color diffAddedText() {
			return ColorPalette.DIFF_ADDED_TEXT;
		}

		public Color diffDeletedBg() {
			return ColorPalette.DIFF_DELETED_BG;
		}

		public Color diffDeletedText() {
			return ColorPalette.DIFF_DELETED_TEXT;
		}

		public Color diffModifiedBg() {
			return ColorPalette.DIFF_MODIFIED_BG;
		}

		public Color diffModifiedText() {
			return ColorPalette.DIFF_MODIFIED_TEXT;
		}

		// Status
		public Color success() {
			return ColorPalette.SUCCESS;
		}

		public Color successBg() {
			return ColorPalette.SUCCESS_BG;
		}

		public Color error() {
			return ColorPalette.ERROR;
		}

		public Color errorBg() {
			return ColorPalette.ERROR_BG;
		}

		public Color warning() {
			return ColorPalette.WARNING;
		}

		public Color warningBg() {
			return ColorPalette.WARNING_BG;
		}

		public Color info() {
			return ColorPalette.INFO;
		}

		public Color infoBg() {
			return ColorPalette.INFO_BG;
		}

		// Syntax highlighting
		public Color syntaxKeyword() {
			return ColorPalette.SYNTAX_KEYWORD;
		}

		public Color syntaxString() {
			return ColorPalette.SYNTAX_STRING;
		}

		public Color syntaxComment() {
			return ColorPalette.SYNTAX_COMMENT;
		}

		public Color syntaxNumber() {
			return ColorPalette.SYNTAX_NUMBER;
		}

		public Color syntaxClass() {
			return ColorPalette.SYNTAX_CLASS;
		}

		// Component-specific
		public Color lineNumber() {
			return ColorPalette.LINE_NUMBER_TEXT;
		}

		public Color lineNumberBg() {
			return ColorPalette.LINE_NUMBER_BG;
		}

		public Color selection() {
			return ColorPalette.SELECTION_BG;
		}

		public Color hover() {
			return ColorPalette.HOVER_BG;
		}

		public Color scrollbarThumb() {
			return ColorPalette.SCROLLBAR_THUMB;
		}

		public Color scrollbarTrack() {
			return ColorPalette.SCROLLBAR_TRACK;
		}
	}

	// ============================================================================
	// FONT API
	// ============================================================================

	public static final class FontAPI {
		private static final FontAPI INSTANCE = new FontAPI();

		private FontAPI() {
		}

		// Display fonts
		public Font display() {
			return Typography.DISPLAY_NORMAL;
		}

		public Font displaySmall() {
			return Typography.DISPLAY_SMALL;
		}

		public Font displayLarge() {
			return Typography.DISPLAY_LARGE;
		}

		public Font displayBold() {
			return Typography.DISPLAY_NORMAL_BOLD;
		}

		// Code fonts
		public Font code() {
			return Typography.MONO_NORMAL;
		}

		public Font codeSmall() {
			return Typography.MONO_SMALL;
		}

		public Font codeBold() {
			return Typography.MONO_NORMAL_BOLD;
		}

		// Semantic fonts
		public Font title() {
			return Typography.TITLE;
		}

		public Font heading() {
			return Typography.HEADING;
		}

		public Font button() {
			return Typography.BUTTON_PRIMARY;
		}

		public Font badge() {
			return Typography.BADGE;
		}

		public Font treeItem() {
			return Typography.TREE_ITEM;
		}

		public Font diffContent() {
			return Typography.DIFF_CONTENT;
		}

		public Font lineNumber() {
			return Typography.DIFF_LINE_NUMBER;
		}
	}

	// ============================================================================
	// SPACING API
	// ============================================================================

	public static final class SpacingAPI {
		private static final SpacingAPI INSTANCE = new SpacingAPI();

		private SpacingAPI() {
		}

		// Base spacing
		public int none() {
			return Spacing.NONE;
		}

		public int xs() {
			return Spacing.XS;
		}

		public int sm() {
			return Spacing.SM;
		}

		public int md() {
			return Spacing.MD;
		}

		public int lg() {
			return Spacing.LG;
		}

		public int xl() {
			return Spacing.XL;
		}

		public int xxl() {
			return Spacing.XXL;
		}

		// Semantic spacing
		public int small() {
			return Spacing.SM;
		}

		public int medium() {
			return Spacing.MD;
		}

		public int large() {
			return Spacing.LG;
		}

		// Component heights
		public int headerHeight() {
			return Spacing.HEIGHT_HEADER;
		}

		public int toolbarHeight() {
			return Spacing.HEIGHT_TOOLBAR;
		}

		public int statusBarHeight() {
			return Spacing.HEIGHT_STATUS_BAR;
		}

		public int buttonHeight() {
			return Spacing.HEIGHT_BUTTON_MEDIUM;
		}

		public int inputHeight() {
			return Spacing.HEIGHT_INPUT;
		}

		// Component widths
		public int sidebarWidth() {
			return Spacing.WIDTH_SIDEBAR_DEFAULT;
		}

		public int lineNumberWidth() {
			return Spacing.WIDTH_LINE_NUMBER_GUTTER;
		}

		public int scrollbarWidth() {
			return Spacing.WIDTH_SCROLLBAR;
		}

		// Border radius
		public int radiusSm() {
			return Spacing.RADIUS_SM;
		}

		public int radiusMd() {
			return Spacing.RADIUS_MD;
		}

		public int radiusLg() {
			return Spacing.RADIUS_LG;
		}

		public int radiusFull() {
			return Spacing.RADIUS_FULL;
		}

		// Border thickness
		public int borderThin() {
			return Spacing.BORDER_THIN;
		}

		// Padding
		public Insets paddingSm() {
			return Spacing.PADDING_SM;
		}

		public Insets paddingMd() {
			return Spacing.PADDING_MD;
		}

		public Insets paddingLg() {
			return Spacing.PADDING_LG;
		}

		public Insets paddingButton() {
			return Spacing.PADDING_BUTTON;
		}

		public Insets paddingInput() {
			return Spacing.PADDING_INPUT;
		}

		// Gaps
		public int gapSmall() {
			return Spacing.GAP_SMALL;
		}

		public int gapMedium() {
			return Spacing.GAP_MEDIUM;
		}

		public int gapLarge() {
			return Spacing.GAP_LARGE;
		}
	}

	public static void initialize() {
		Typography.DISPLAY_NORMAL.toString();
		Typography.MONO_NORMAL.toString();
	}

	public static void applyToUIManager() {
		UIManager.put("Button.background", ColorPalette.SURFACE_DARK);
		UIManager.put("Button.foreground", ColorPalette.TEXT_PRIMARY);
		UIManager.put("Button.font", Typography.BUTTON_PRIMARY);

		UIManager.put("Panel.background", ColorPalette.BACKGROUND_DARK);
		UIManager.put("Panel.foreground", ColorPalette.TEXT_PRIMARY);

		UIManager.put("TextField.background", ColorPalette.SURFACE_DARK);
		UIManager.put("TextField.foreground", ColorPalette.TEXT_PRIMARY);
		UIManager.put("TextField.caretForeground", ColorPalette.TEXT_PRIMARY);
		UIManager.put("TextField.font", Typography.DISPLAY_NORMAL);

		UIManager.put("Tree.background", ColorPalette.SURFACE_DARK);
		UIManager.put("Tree.foreground", ColorPalette.TEXT_PRIMARY);
		UIManager.put("Tree.font", Typography.TREE_ITEM);

		UIManager.put("ScrollBar.thumb", ColorPalette.SCROLLBAR_THUMB);
		UIManager.put("ScrollBar.track", ColorPalette.SCROLLBAR_TRACK);
	}
}