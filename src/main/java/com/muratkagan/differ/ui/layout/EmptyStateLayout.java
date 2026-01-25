package com.muratkagan.differ.ui.layout;

import java.awt.GridBagConstraints;
import java.awt.GridBagLayout;

import javax.swing.Box;
import javax.swing.BoxLayout;
import javax.swing.JComponent;
import javax.swing.JPanel;

import com.muratkagan.differ.ui.theme.Theme;

public class EmptyStateLayout extends JPanel {

	private static final long serialVersionUID = 1L;

	private final JPanel contentPanel;

	public EmptyStateLayout() {
		this.contentPanel = new JPanel();
		contentPanel.setLayout(new BoxLayout(contentPanel, BoxLayout.Y_AXIS));
		contentPanel.setOpaque(false);

		init();
	}

	private void init() {
		setLayout(new GridBagLayout());
		setBackground(Theme.color().background());

		GridBagConstraints gbc = new GridBagConstraints();
		gbc.gridx = 0;
		gbc.gridy = 0;
		gbc.anchor = GridBagConstraints.CENTER;

		add(contentPanel, gbc);
	}

	public EmptyStateLayout add(JComponent component) {
		contentPanel.add(component);
		contentPanel.add(Box.createVerticalStrut(Theme.spacing().md()));
		return this;
	}

	public EmptyStateLayout add(JComponent component, int spacingBelow) {
		contentPanel.add(component);
		if (spacingBelow > 0) {
			contentPanel.add(Box.createVerticalStrut(spacingBelow));
		}
		return this;
	}

	public JPanel getContentPanel() {
		return contentPanel;
	}
}