package com.muratkagan.differ.ui.layout;

import java.awt.BorderLayout;

import javax.swing.JComponent;
import javax.swing.JPanel;

import com.muratkagan.differ.ui.theme.Theme;

public class AppLayout extends JPanel {

	private static final long serialVersionUID = 1L;

	private final JComponent header;
	private final JComponent content;

	public AppLayout(JComponent header, JComponent content) {
		this.header = header;
		this.content = content;
		init();
	}

	private void init() {
		setLayout(new BorderLayout());
		setBackground(Theme.color().background());

		if (header != null) {
			add(header, BorderLayout.NORTH);
		}

		if (content != null) {
			add(content, BorderLayout.CENTER);
		}
	}

	public JComponent getHeader() {
		return header;
	}

	public JComponent getContent() {
		return content;
	}
}
