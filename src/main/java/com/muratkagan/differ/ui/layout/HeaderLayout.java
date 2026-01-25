package com.muratkagan.differ.ui.layout;

import java.awt.BorderLayout;
import java.awt.FlowLayout;

import javax.swing.JComponent;
import javax.swing.JPanel;

import com.muratkagan.differ.ui.theme.Theme;

public class HeaderLayout extends JPanel {

	private static final long serialVersionUID = 1L;

	private final JPanel leftSection;
	private final JPanel rightSection;

	public HeaderLayout() {
		this.leftSection = new JPanel(new FlowLayout(FlowLayout.LEFT, Theme.spacing().gapMedium(), 0));
		this.rightSection = new JPanel(new FlowLayout(FlowLayout.RIGHT, Theme.spacing().gapMedium(), 0));

		init();
	}

	private void init() {
		setLayout(new BorderLayout());
		setBackground(Theme.color().surface());

		setPreferredSize(new java.awt.Dimension(Integer.MAX_VALUE, Theme.spacing().headerHeight()));

		leftSection.setOpaque(false);
		rightSection.setOpaque(false);

		add(leftSection, BorderLayout.WEST);
		add(rightSection, BorderLayout.EAST);
	}

	public HeaderLayout addLeft(JComponent component) {
		leftSection.add(component);
		return this;
	}

	public HeaderLayout addRight(JComponent component) {
		rightSection.add(component);
		return this;
	}

	public JPanel getLeftSection() {
		return leftSection;
	}

	public JPanel getRightSection() {
		return rightSection;
	}
}