package com.muratkagan.differ.ui.foundation;

import java.awt.Color;
import java.awt.Component;
import java.awt.Dimension;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Rectangle;
import java.awt.RenderingHints;

import javax.swing.JButton;
import javax.swing.JComponent;
import javax.swing.JScrollBar;
import javax.swing.JScrollPane;
import javax.swing.plaf.basic.BasicScrollBarUI;

import com.muratkagan.differ.ui.theme.Theme;

public class BaseScrollPane extends JScrollPane {

	private static final long serialVersionUID = 1L;

	public BaseScrollPane() {
		this(null);
	}

	public BaseScrollPane(Component view) {
		super(view);
		applyTheme();
	}

	public BaseScrollPane(Component view, int vsbPolicy, int hsbPolicy) {
		super(view, vsbPolicy, hsbPolicy);
		applyTheme();
	}

	protected void applyTheme() {
		setBorder(null);

		setBackground(Theme.color().surface());
		getViewport().setBackground(Theme.color().surface());

		getVerticalScrollBar().setUI(new ThemedScrollBarUI());
		getHorizontalScrollBar().setUI(new ThemedScrollBarUI());

		getVerticalScrollBar().setUnitIncrement(16);
		getHorizontalScrollBar().setUnitIncrement(16);

		setVerticalScrollBarPolicy(JScrollPane.VERTICAL_SCROLLBAR_AS_NEEDED);
		setHorizontalScrollBarPolicy(JScrollPane.HORIZONTAL_SCROLLBAR_AS_NEEDED);
	}

	public void updateTheme() {
		applyTheme();
		repaint();
	}

	private static class ThemedScrollBarUI extends BasicScrollBarUI {

		private static final int THUMB_SIZE = Theme.spacing().scrollbarWidth();
		private static final int THUMB_RADIUS = 5;

		@Override
		protected void configureScrollBarColors() {
			this.thumbColor = Theme.color().scrollbarThumb();
			this.thumbDarkShadowColor = Theme.color().scrollbarThumb();
			this.thumbHighlightColor = Theme.color().scrollbarThumb();
			this.thumbLightShadowColor = Theme.color().scrollbarThumb();
			this.trackColor = Theme.color().scrollbarTrack();
			this.trackHighlightColor = Theme.color().scrollbarTrack();
		}

		@Override
		protected JButton createDecreaseButton(int orientation) {
			return createInvisibleButton();
		}

		@Override
		protected JButton createIncreaseButton(int orientation) {
			return createInvisibleButton();
		}

		private JButton createInvisibleButton() {
			JButton button = new JButton();
			button.setPreferredSize(new Dimension(0, 0));
			button.setMinimumSize(new Dimension(0, 0));
			button.setMaximumSize(new Dimension(0, 0));
			return button;
		}

		@Override
		public Dimension getPreferredSize(JComponent c) {
			if (scrollbar.getOrientation() == JScrollBar.VERTICAL) {
				return new Dimension(THUMB_SIZE, super.getPreferredSize(c).height);
			} else {
				return new Dimension(super.getPreferredSize(c).width, THUMB_SIZE);
			}
		}

		@Override
		protected void paintTrack(Graphics g, JComponent c, Rectangle trackBounds) {
			Graphics2D g2d = (Graphics2D) g.create();
			g2d.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);

			g2d.setColor(Theme.color().scrollbarTrack());
			g2d.fillRect(trackBounds.x, trackBounds.y, trackBounds.width, trackBounds.height);

			g2d.dispose();
		}

		@Override
		protected void paintThumb(Graphics g, JComponent c, Rectangle thumbBounds) {
			if (thumbBounds.isEmpty() || !scrollbar.isEnabled()) {
				return;
			}

			Graphics2D g2d = (Graphics2D) g.create();
			g2d.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);

			Color thumbColor;
			if (isDragging) {
				thumbColor = Theme.color().scrollbarThumb().brighter();
			} else if (isThumbRollover()) {
				thumbColor = brighten(Theme.color().scrollbarThumb(), 1.2f);
			} else {
				thumbColor = Theme.color().scrollbarThumb();
			}

			g2d.setColor(thumbColor);

			int padding = 2;
			int x = thumbBounds.x + padding;
			int y = thumbBounds.y;
			int width = thumbBounds.width - (padding * 2);
			int height = thumbBounds.height;

			g2d.fillRoundRect(x, y, width, height, THUMB_RADIUS, THUMB_RADIUS);

			g2d.dispose();
		}

		private Color brighten(Color color, float factor) {
			int r = Math.min(255, (int) (color.getRed() * factor));
			int g = Math.min(255, (int) (color.getGreen() * factor));
			int b = Math.min(255, (int) (color.getBlue() * factor));
			return new Color(r, g, b, color.getAlpha());
		}
	}
}