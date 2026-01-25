package com.muratkagan.differ.ui.layout;

import java.awt.BorderLayout;

import javax.swing.JComponent;
import javax.swing.JPanel;

import com.muratkagan.differ.ui.theme.Theme;

public class EditorLayout extends JPanel {

	private static final long serialVersionUID = 1L;

	private final JPanel headerSection;
	private final JComponent editorContent;

	public EditorLayout(JPanel header, JComponent content) {
		this.headerSection = header;
		this.editorContent = content;

		init();
	}

	private void init() {
		setLayout(new BorderLayout());
		setBackground(Theme.color().editor());

		if (headerSection != null) {
			add(headerSection, BorderLayout.NORTH);
		}

		if (editorContent != null) {
			add(editorContent, BorderLayout.CENTER);
		}
	}

	public JPanel getHeaderSection() {
		return headerSection;
	}

	public JComponent getEditorContent() {
		return editorContent;
	}
}