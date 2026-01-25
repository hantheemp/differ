package com.muratkagan.differ.ui.foundation;

import java.awt.Color;
import java.awt.Font;

import javax.swing.JLabel;

import com.muratkagan.differ.ui.theme.Theme;

public class BaseLabel extends JLabel {

	private static final long serialVersionUID = 1L;

	private LabelStyle style = LabelStyle.NORMAL;
	private boolean styleLocked = false;

	public BaseLabel() {
		this("", LabelStyle.NORMAL);
	}

	public BaseLabel(String text) {
		this(text, LabelStyle.NORMAL);
	}

	public BaseLabel(String text, LabelStyle style) {
		super(text);
		this.style = style;
		applyTheme();
	}

	public BaseLabel(String text, int horizontalAlignment) {
		super(text, horizontalAlignment);
		this.style = LabelStyle.NORMAL;
		applyTheme();
	}

	protected void applyTheme() {
		if (styleLocked) {
			return;
		}

		setOpaque(false);

		switch (style) {
		case NORMAL:
			setForeground(Theme.color().text());
			setFont(Theme.font().display());
			break;
		case SECONDARY:
			setForeground(Theme.color().textSecondary());
			setFont(Theme.font().display());
			break;
		case TERTIARY:
			setForeground(Theme.color().textTertiary());
			setFont(Theme.font().displaySmall());
			break;
		case DISABLED:
			setForeground(Theme.color().textDisabled());
			setFont(Theme.font().display());
			break;
		case TITLE:
			setForeground(Theme.color().text());
			setFont(Theme.font().title());
			break;
		case CODE:
			setForeground(Theme.color().textSecondary());
			setFont(Theme.font().code());
			break;
		}
	}

	public void setStyle(LabelStyle style) {
		this.style = style;
		this.styleLocked = false;
		applyTheme();
	}

	public LabelStyle getStyle() {
		return style;
	}

	public BaseLabel asPrimary() {
		return withStyle(LabelStyle.NORMAL);
	}

	public BaseLabel asSecondary() {
		return withStyle(LabelStyle.SECONDARY);
	}

	public BaseLabel asTertiary() {
		return withStyle(LabelStyle.TERTIARY);
	}

	public BaseLabel asTitle() {
		return withStyle(LabelStyle.TITLE);
	}

	public BaseLabel asCode() {
		return withStyle(LabelStyle.CODE);
	}

	private BaseLabel withStyle(LabelStyle style) {
		setStyle(style);
		return this;
	}

	public BaseLabel withFont(Font font) {
		setFont(font);
		styleLocked = true;
		return this;
	}

	public BaseLabel withColor(Color color) {
		setForeground(color);
		styleLocked = true;
		return this;
	}

	public BaseLabel bold() {
		setFont(getFont().deriveFont(Font.BOLD));
		styleLocked = true;
		return this;
	}

	public BaseLabel withSize(int size) {
		setFont(getFont().deriveFont((float) size));
		styleLocked = true;
		return this;
	}
}
