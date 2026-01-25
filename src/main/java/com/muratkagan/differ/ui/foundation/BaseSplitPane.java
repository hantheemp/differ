package com.muratkagan.differ.ui.foundation;

import java.awt.Color;
import java.awt.Component;
import java.awt.Cursor;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Insets;
import java.awt.RenderingHints;

import javax.swing.JSplitPane;
import javax.swing.border.Border;
import javax.swing.plaf.basic.BasicSplitPaneDivider;
import javax.swing.plaf.basic.BasicSplitPaneUI;

import com.muratkagan.differ.ui.theme.Theme;

public class BaseSplitPane extends JSplitPane {

	private static final long serialVersionUID = 1L;

	private static final int DEFAULT_DIVIDER_SIZE = 1;

	public BaseSplitPane() {
		this(JSplitPane.HORIZONTAL_SPLIT);
	}

	public BaseSplitPane(int orientation) {
		this(orientation, null, null);
	}

	public BaseSplitPane(int orientation, Component leftComponent, Component rightComponent) {
		super(orientation, leftComponent, rightComponent);
		applyTheme();
	}

	public BaseSplitPane(int orientation, boolean continuousLayout, Component leftComponent, Component rightComponent) {
		super(orientation, continuousLayout, leftComponent, rightComponent);
		applyTheme();
	}

	protected void applyTheme() {
		setBackground(Theme.color().background());
		setBorder(null);
		setDividerSize(DEFAULT_DIVIDER_SIZE);
		setContinuousLayout(true);
		setOneTouchExpandable(false);

		setUI(new ThemedSplitPaneUI());
	}

	public BaseSplitPane withDividerLocation(int location) {
		setDividerLocation(location);
		return this;
	}

	public BaseSplitPane withDividerSize(int size) {
		setDividerSize(size);
		return this;
	}

	public BaseSplitPane withOneTouchExpandable(boolean expandable) {
		setOneTouchExpandable(expandable);
		return this;
	}

	public BaseSplitPane withResizeWeight(double weight) {
		setResizeWeight(weight);
		return this;
	}

	public void updateTheme() {
		applyTheme();
		repaint();
	}

	private static class ThemedSplitPaneUI extends BasicSplitPaneUI {

		@Override
		public BasicSplitPaneDivider createDefaultDivider() {
			return new ThemedDivider(this);
		}
	}

	private static class ThemedDivider extends BasicSplitPaneDivider {

		private static final long serialVersionUID = 1L;

		private boolean isHovered = false;

		public ThemedDivider(BasicSplitPaneUI ui) {
			super(ui);
			setBackground(Theme.color().border());
			setBorder(new DividerBorder());

			addMouseListener(new java.awt.event.MouseAdapter() {
				@Override
				public void mouseEntered(java.awt.event.MouseEvent e) {
					isHovered = true;
					setCursor(getOrientation() == JSplitPane.HORIZONTAL_SPLIT
							? Cursor.getPredefinedCursor(Cursor.E_RESIZE_CURSOR)
							: Cursor.getPredefinedCursor(Cursor.N_RESIZE_CURSOR));
					repaint();
				}

				@Override
				public void mouseExited(java.awt.event.MouseEvent e) {
					isHovered = false;
					setCursor(Cursor.getDefaultCursor());
					repaint();
				}
			});
		}

		@Override
		public void paint(Graphics g) {
			Graphics2D g2d = (Graphics2D) g.create();
			g2d.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);

			Color bgColor = isHovered ? Theme.color().borderHover() : Theme.color().border();
			g2d.setColor(bgColor);
			g2d.fillRect(0, 0, getWidth(), getHeight());

			g2d.dispose();
		}

		private int getOrientation() {
			return ((JSplitPane) getParent()).getOrientation();
		}

		private static class DividerBorder implements Border {
			@Override
			public void paintBorder(Component c, Graphics g, int x, int y, int width, int height) {

			}

			@Override
			public Insets getBorderInsets(Component c) {
				return new Insets(0, 0, 0, 0);
			}

			@Override
			public boolean isBorderOpaque() {
				return false;
			}
		}
	}
}