package com.muratkagan.differ.ui.foundation;

import java.awt.Color;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Insets;
import java.awt.RenderingHints;

import javax.swing.BorderFactory;
import javax.swing.JPanel;

import com.muratkagan.differ.ui.theme.Theme;

public class BasePanel extends JPanel {

	private static final long serialVersionUID = 1L;

	private int borderRadius = 0;
	private Color backgroundColor;
	private boolean rounded = false;

	public BasePanel() {
		this(Theme.color().surface());
	}

	public BasePanel(Color background) {
		this.backgroundColor = background;
		applyTheme();
	}

	protected void applyTheme() {
		setBackground(backgroundColor != null ? backgroundColor : Theme.color().surface());

		setForeground(Theme.color().text());
		setOpaque(!rounded);
	}

	@Override
	protected void paintComponent(Graphics g) {
		if (!rounded) {
			super.paintComponent(g);
			return;
		}

		Graphics2D g2d = (Graphics2D) g.create();
		g2d.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);

		g2d.setColor(getBackground());
		g2d.fillRoundRect(0, 0, getWidth() - 1, getHeight() - 1, borderRadius, borderRadius);

		g2d.dispose();
		paintChildren(g);
	}

	public void setRounded(boolean rounded) {
		this.rounded = rounded;
		setOpaque(!rounded);
		repaint();
	}

	public void setBorderRadius(int radius) {
		this.borderRadius = radius;
		this.rounded = radius > 0;
		setOpaque(!rounded);
		repaint();
	}

	public void useThemeRadiusMd() {
		setBorderRadius(Theme.spacing().radiusMd());
	}

	public void setBackgroundColor(Color color) {
		this.backgroundColor = color;
		applyTheme();
	}

	public void setPadding(int padding) {
		setBorder(BorderFactory.createEmptyBorder(padding, padding, padding, padding));
	}

	public void setPadding(int top, int right, int bottom, int left) {
		setBorder(BorderFactory.createEmptyBorder(top, left, bottom, right));
	}

	public void setPadding(Insets insets) {
		setBorder(BorderFactory.createEmptyBorder(insets.top, insets.left, insets.bottom, insets.right));
	}

	public void setPaddingSm() {
		setPadding(Theme.spacing().paddingSm());
	}

	public void setPaddingMd() {
		setPadding(Theme.spacing().paddingMd());
	}

	public void setPaddingLg() {
		setPadding(Theme.spacing().paddingLg());
	}
}
