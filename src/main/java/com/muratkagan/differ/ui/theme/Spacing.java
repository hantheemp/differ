package com.muratkagan.differ.ui.theme;

import java.awt.Insets;
import java.awt.Dimension;

public final class Spacing {

	private Spacing() {
		// Prevent instantiation
	}

	// ============================================================================
	// BASE SPACING SCALE (4px grid)
	// ============================================================================

	public static final int NONE = 0;
	public static final int XXS = 2; // 2px
	public static final int XS = 4; // 4px
	public static final int SM = 8; // 8px
	public static final int MD = 12; // 12px
	public static final int LG = 16; // 16px
	public static final int XL = 20; // 20px
	public static final int XXL = 24; // 24px
	public static final int XXXL = 32; // 32px
	public static final int HUGE = 48; // 48px

	// ============================================================================
	// COMPONENT HEIGHTS
	// ============================================================================

	public static final int HEIGHT_HEADER = 50;
	public static final int HEIGHT_TOOLBAR = 68;
	public static final int HEIGHT_STATUS_BAR = 32;
	public static final int HEIGHT_DIFF_HEADER = 40;
	public static final int HEIGHT_TREE_HEADER = 44;

	public static final int HEIGHT_BUTTON_SMALL = 32;
	public static final int HEIGHT_BUTTON_MEDIUM = 36;
	public static final int HEIGHT_BUTTON_LARGE = 40;

	public static final int HEIGHT_INPUT = 36;
	public static final int HEIGHT_INPUT_SMALL = 32;

	public static final int HEIGHT_BADGE = 20;

	// ============================================================================
	// COMPONENT WIDTHS
	// ============================================================================

	public static final int WIDTH_SIDEBAR_DEFAULT = 288;
	public static final int WIDTH_SIDEBAR_MIN = 200;
	public static final int WIDTH_SIDEBAR_MAX = 500;

	public static final int WIDTH_LINE_NUMBER_GUTTER = 48;
	public static final int WIDTH_DIVIDER = 1;

	public static final int WIDTH_BUTTON_MIN = 84;
	public static final int WIDTH_ICON_BUTTON = 32;
	public static final int WIDTH_AVATAR = 32;

	public static final int WIDTH_SCROLLBAR = 10;

	public static final int WIDTH_PROGRESS_BAR = 256;

	// ============================================================================
	// BORDER RADIUS
	// ============================================================================

	public static final int RADIUS_NONE = 0;
	public static final int RADIUS_SM = 4;
	public static final int RADIUS_MD = 6;
	public static final int RADIUS_LG = 8;
	public static final int RADIUS_XL = 12;
	public static final int RADIUS_FULL = 9999;

	// ============================================================================
	// BORDER THICKNESS
	// ============================================================================

	public static final int BORDER_THIN = 1;
	public static final int BORDER_MEDIUM = 2;
	public static final int BORDER_THICK = 3;

	// ============================================================================
	// PADDING (Insets)
	// ============================================================================

	// Uniform padding
	public static final Insets PADDING_NONE = new Insets(NONE, NONE, NONE, NONE);
	public static final Insets PADDING_XS = new Insets(XS, XS, XS, XS);
	public static final Insets PADDING_SM = new Insets(SM, SM, SM, SM);
	public static final Insets PADDING_MD = new Insets(MD, MD, MD, MD);
	public static final Insets PADDING_LG = new Insets(LG, LG, LG, LG);
	public static final Insets PADDING_XL = new Insets(XL, XL, XL, XL);

	// Component-specific padding
	public static final Insets PADDING_HEADER = new Insets(SM, LG, SM, LG);
	public static final Insets PADDING_TOOLBAR = new Insets(MD, MD, MD, MD);
	public static final Insets PADDING_STATUS_BAR = new Insets(NONE, LG, NONE, LG);
	public static final Insets PADDING_TREE_HEADER = new Insets(MD, MD, MD, MD);
	public static final Insets PADDING_DIFF_HEADER = new Insets(NONE, LG, NONE, LG);

	public static final Insets PADDING_BUTTON = new Insets(SM, LG, SM, LG);
	public static final Insets PADDING_BUTTON_SMALL = new Insets(XS, MD, XS, MD);
	public static final Insets PADDING_ICON_BUTTON = new Insets(XS, XS, XS, XS);

	public static final Insets PADDING_INPUT = new Insets(SM, MD, SM, MD);
	public static final Insets PADDING_BADGE = new Insets(XXS, XS, XXS, XS);

	public static final Insets PADDING_TREE_ITEM = new Insets(XS, SM, XS, SM);
	public static final Insets PADDING_DIFF_LINE = new Insets(NONE, LG, NONE, LG);

	// ============================================================================
	// GAPS (spacing between components)
	// ============================================================================

	public static final int GAP_TINY = XXS;
	public static final int GAP_SMALL = XS;
	public static final int GAP_MEDIUM = SM;
	public static final int GAP_LARGE = MD;
	public static final int GAP_XLARGE = LG;

	// Component-specific gaps
	public static final int GAP_HEADER_ITEMS = LG;
	public static final int GAP_TOOLBAR_ITEMS = SM;
	public static final int GAP_BUTTON_ICON = XS;
	public static final int GAP_BADGE_LIST = XS;
	public static final int GAP_TREE_INDENT = LG;

	// ============================================================================
	// SHADOW OFFSETS
	// ============================================================================

	public static final int SHADOW_OFFSET_X_SM = 0;
	public static final int SHADOW_OFFSET_Y_SM = 2;
	public static final int SHADOW_BLUR_SM = 4;

	public static final int SHADOW_OFFSET_X_MD = 0;
	public static final int SHADOW_OFFSET_Y_MD = 4;
	public static final int SHADOW_BLUR_MD = 8;

	public static final int SHADOW_OFFSET_X_LG = 0;
	public static final int SHADOW_OFFSET_Y_LG = 8;
	public static final int SHADOW_BLUR_LG = 16;

	// ============================================================================
	// DIVIDER SIZES
	// ============================================================================

	public static final int DIVIDER_HEIGHT_HORIZONTAL = BORDER_THIN;
	public static final int DIVIDER_WIDTH_VERTICAL = BORDER_THIN;

	public static final Dimension DIVIDER_SIZE_HORIZONTAL = new Dimension(Integer.MAX_VALUE, DIVIDER_HEIGHT_HORIZONTAL);
	public static final Dimension DIVIDER_SIZE_VERTICAL = new Dimension(DIVIDER_WIDTH_VERTICAL, Integer.MAX_VALUE);

	public static Insets uniform(int size) {
		return new Insets(size, size, size, size);
	}

	public static Insets symmetric(int vertical, int horizontal) {
		return new Insets(vertical, horizontal, vertical, horizontal);
	}

	public static Insets of(int top, int right, int bottom, int left) {
		return new Insets(top, left, bottom, right);
	}

	public static Insets top(int top) {
		return new Insets(top, 0, 0, 0);
	}

	public static Insets bottom(int bottom) {
		return new Insets(0, 0, bottom, 0);
	}

	public static Insets left(int left) {
		return new Insets(0, left, 0, 0);
	}

	public static Insets right(int right) {
		return new Insets(0, 0, 0, right);
	}

	public static Insets vertical(int vertical) {
		return new Insets(vertical, 0, vertical, 0);
	}

	public static Insets horizontal(int horizontal) {
		return new Insets(0, horizontal, 0, horizontal);
	}

	public static Dimension size(int width, int height) {
		return new Dimension(width, height);
	}

	public static Dimension square(int size) {
		return new Dimension(size, size);
	}
}