package com.muratkagan.differ.ui.foundation;

import java.awt.Color;
import java.awt.Cursor;
import java.awt.Dimension;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Insets;
import java.awt.RenderingHints;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;

import javax.swing.BorderFactory;
import javax.swing.Icon;
import javax.swing.JButton;
import javax.swing.SwingConstants;

import com.muratkagan.differ.ui.theme.Theme;

public class BaseButton extends JButton {

	private static final long serialVersionUID = 1L;

	private ButtonStyle style = ButtonStyle.SECONDARY;
	private int borderRadius = Theme.spacing().radiusMd();

	private boolean isHovered = false;
	private boolean isPressed = false;
	private boolean styleLocked = false;

	public BaseButton() {
		this("", ButtonStyle.SECONDARY);
	}

	public BaseButton(String text) {
		this(text, ButtonStyle.SECONDARY);
	}

	public BaseButton(String text, ButtonStyle style) {
		super(text);
		this.style = style;
		initButton();
	}

	public BaseButton(String text, Icon icon) {
		this(text, icon, ButtonStyle.SECONDARY);
	}

	public BaseButton(String text, Icon icon, ButtonStyle style) {
		super(text, icon);
		this.style = style;
		initButton();
	}

	public BaseButton(Icon icon) {
		super(icon);
		this.style = ButtonStyle.ICON;
		initButton();
	}

	private void initButton() {
		setFocusPainted(false);
		setBorderPainted(false);
		setContentAreaFilled(false);
		setOpaque(false);
		setCursor(Cursor.getPredefinedCursor(Cursor.HAND_CURSOR));

		applyTheme();
		addMouseListeners();
	}

	protected void applyTheme() {
		if (styleLocked) {
			return;
		}

		setMargin(resolveMargin());

		switch (style) {
		case PRIMARY:
			setFont(Theme.font().button());
			setForeground(Color.WHITE);
			break;

		case SECONDARY:
			setFont(Theme.font().display());
			setForeground(Theme.color().text());
			break;

		case GHOST:
			setFont(Theme.font().display());
			setForeground(Theme.color().textSecondary());
			break;

		case DANGER:
			setFont(Theme.font().button());
			setForeground(Color.WHITE);
			break;

		case ICON:
			setFont(Theme.font().display());
			setForeground(Theme.color().textSecondary());
			borderRadius = Theme.spacing().radiusFull();
			break;
		}

		setBorder(BorderFactory.createEmptyBorder(getMargin().top, getMargin().left, getMargin().bottom,
				getMargin().right));
	}

	private Insets resolveMargin() {
		if (style == ButtonStyle.ICON) {
			return new Insets(Theme.spacing().xs(), Theme.spacing().xs(), Theme.spacing().xs(), Theme.spacing().xs());
		}
		return Theme.spacing().paddingButton();
	}

	private void addMouseListeners() {
		addMouseListener(new MouseAdapter() {
			@Override
			public void mouseEntered(MouseEvent e) {
				if (!isEnabled())
					return;
				isHovered = true;
				repaint();
			}

			@Override
			public void mouseExited(MouseEvent e) {
				if (!isEnabled())
					return;
				isHovered = false;
				repaint();
			}

			@Override
			public void mousePressed(MouseEvent e) {
				if (!isEnabled())
					return;
				isPressed = true;
				repaint();
			}

			@Override
			public void mouseReleased(MouseEvent e) {
				if (!isEnabled())
					return;
				isPressed = false;
				repaint();
			}
		});
	}

	@Override
	public Dimension getPreferredSize() {
		Dimension size = super.getPreferredSize();

		if (style == ButtonStyle.PRIMARY || style == ButtonStyle.SECONDARY || style == ButtonStyle.DANGER) {
			size.height = Theme.spacing().buttonHeight();
		}

		return size;
	}

	@Override
	protected void paintComponent(Graphics g) {
		Graphics2D g2d = (Graphics2D) g.create();

		g2d.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
		g2d.setRenderingHint(RenderingHints.KEY_TEXT_ANTIALIASING, RenderingHints.VALUE_TEXT_ANTIALIAS_ON);

		g2d.setColor(resolveBackgroundColor());
		g2d.fillRoundRect(0, 0, getWidth(), getHeight(), borderRadius, borderRadius);

		if (isBordered()) {
			g2d.setColor(isHovered ? Theme.color().borderHover() : Theme.color().border());
			g2d.drawRoundRect(0, 0, getWidth() - 1, getHeight() - 1, borderRadius, borderRadius);
		}

		g2d.dispose();
		super.paintComponent(g);
	}

	private boolean isBordered() {
		return style == ButtonStyle.SECONDARY || style == ButtonStyle.GHOST;
	}

	private Color resolveBackgroundColor() {
		if (!isEnabled()) {
			return Theme.color().surface();
		}

		switch (style) {
		case PRIMARY:
			return isPressed ? Theme.color().primaryPressed()
					: isHovered ? Theme.color().primaryHover() : Theme.color().primary();

		case SECONDARY:
			return isHovered || isPressed ? Theme.color().surfaceHover() : Theme.color().surface();

		case GHOST:
		case ICON:
			return isHovered || isPressed ? Theme.color().hover() : new Color(0, 0, 0, 0);

		case DANGER:
			return isPressed ? Theme.color().error().darker()
					: isHovered ? Theme.color().error().brighter() : Theme.color().error();

		default:
			return Theme.color().surface();
		}
	}

	public BaseButton setStyle(ButtonStyle style) {
		this.style = style;
		this.styleLocked = false;
		applyTheme();
		repaint();
		return this;
	}

	public ButtonStyle getButtonStyle() {
		return style;
	}

	public BaseButton setBorderRadius(int radius) {
		this.borderRadius = radius;
		repaint();
		return this;
	}

	public BaseButton asPrimary() {
		return setStyle(ButtonStyle.PRIMARY);
	}

	public BaseButton asSecondary() {
		return setStyle(ButtonStyle.SECONDARY);
	}

	public BaseButton asGhost() {
		return setStyle(ButtonStyle.GHOST);
	}

	public BaseButton asDanger() {
		return setStyle(ButtonStyle.DANGER);
	}

	public BaseButton asIcon() {
		return setStyle(ButtonStyle.ICON);
	}

	public BaseButton withFont(Font font) {
		setFont(font);
		styleLocked = true;
		return this;
	}

	public BaseButton withIconPosition(int position) {
		setHorizontalTextPosition(position);
		setVerticalTextPosition(SwingConstants.CENTER);
		return this;
	}

	public BaseButton withIconGap(int gap) {
		setIconTextGap(gap);
		return this;
	}
}
