package com.muratkagan.differ.ui;

import java.awt.BorderLayout;

import javax.swing.JFrame;
import javax.swing.JPanel;

import com.muratkagan.differ.ui.foundation.BaseSplitPane;
import com.muratkagan.differ.ui.layout.EditorLayout;
import com.muratkagan.differ.ui.layout.SidebarLayout;

public class MainFrame extends JFrame {

	private static final long serialVersionUID = 1L;

	private final SidebarLayout sidebar;
	private final EditorLayout editor;

	public MainFrame() {
		super("Differ");

		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setSize(1200, 800);
		setLocationRelativeTo(null);

		sidebar = new SidebarLayout(null, new JPanel());
		editor = new EditorLayout(null, new JPanel());

		BaseSplitPane splitPane = new BaseSplitPane(BaseSplitPane.HORIZONTAL_SPLIT, sidebar, editor)
				.withDividerLocation(300).withResizeWeight(0);

		setContentPane(splitPane);
	}

	public void setEditorContent(JPanel panel) {
		editor.removeAll();
		editor.add(panel, BorderLayout.CENTER);
		editor.revalidate();
		editor.repaint();
	}

	public void setSidebarContent(JPanel panel) {
		sidebar.getScrollPane().setViewportView(panel);
	}
}
