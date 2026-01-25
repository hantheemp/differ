package com.muratkagan.differ.ui.layout;

import java.awt.BorderLayout;

import javax.swing.JComponent;
import javax.swing.JPanel;

import com.muratkagan.differ.ui.foundation.BaseScrollPane;
import com.muratkagan.differ.ui.theme.Theme;

public class SidebarLayout extends JPanel {

	private static final long serialVersionUID = 1L;

	private final JPanel headerSection;
	private final JComponent contentComponent;
	private final BaseScrollPane scrollPane;

	public SidebarLayout(JPanel header, JComponent content) {
		this.headerSection = header;
		this.contentComponent = content;
		this.scrollPane = new BaseScrollPane(content);

		init();
	}

	private void init() {
		setLayout(new BorderLayout());
		setBackground(Theme.color().surface());

		setPreferredSize(new java.awt.Dimension(Theme.spacing().sidebarWidth(), Integer.MAX_VALUE));

		if (headerSection != null) {
			add(headerSection, BorderLayout.NORTH);
		}

		if (scrollPane != null) {
			add(scrollPane, BorderLayout.CENTER);
		}
	}

	public JPanel getHeaderSection() {
		return headerSection;
	}

	public JComponent getContentComponent() {
		return contentComponent;
	}

	public BaseScrollPane getScrollPane() {
		return scrollPane;
	}
}