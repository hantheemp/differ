package com.muratkagan.differ.ui;

import java.awt.BorderLayout;

import javax.swing.BorderFactory;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.SwingUtilities;

import com.muratkagan.differ.ui.foundation.BaseButton;
import com.muratkagan.differ.ui.foundation.BaseLabel;
import com.muratkagan.differ.ui.foundation.BaseScrollPane;
import com.muratkagan.differ.ui.foundation.BaseSplitPane;
import com.muratkagan.differ.ui.foundation.ButtonStyle;
import com.muratkagan.differ.ui.foundation.LabelStyle;
import com.muratkagan.differ.ui.layout.EditorLayout;
import com.muratkagan.differ.ui.layout.EmptyStateLayout;
import com.muratkagan.differ.ui.layout.SidebarLayout;
import com.muratkagan.differ.ui.theme.Theme;

public class UIFoundationPlayground {

	public static void main(String[] args) {
		SwingUtilities.invokeLater(() -> {
			JFrame frame = new JFrame("Differ UI – Layout Playground");
			frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
			frame.setSize(1100, 700);
			frame.setLocationRelativeTo(null);
			frame.setLayout(new BorderLayout());
			frame.getContentPane().setBackground(Theme.color().background());

			/* ---------------- Sidebar Content ---------------- */

			JPanel sidebarHeader = new JPanel(new BorderLayout());
			sidebarHeader.setOpaque(false);
			sidebarHeader.setBorder(BorderFactory.createEmptyBorder(Theme.spacing().lg(), Theme.spacing().lg(),
					Theme.spacing().sm(), Theme.spacing().lg()));
			sidebarHeader.add(new BaseLabel("Foundation", LabelStyle.TITLE), BorderLayout.CENTER);

			JPanel sidebarContent = new JPanel();
			sidebarContent.setLayout(new javax.swing.BoxLayout(sidebarContent, javax.swing.BoxLayout.Y_AXIS));
			sidebarContent.setOpaque(false);
			sidebarContent.setBorder(BorderFactory.createEmptyBorder(Theme.spacing().sm(), Theme.spacing().lg(),
					Theme.spacing().lg(), Theme.spacing().lg()));

			sidebarContent.add(new BaseLabel("Labels", LabelStyle.SECONDARY));
			sidebarContent.add(javax.swing.Box.createVerticalStrut(Theme.spacing().sm()));
			sidebarContent.add(new BaseLabel("Title Label", LabelStyle.TITLE));
			sidebarContent.add(new BaseLabel("Normal Label", LabelStyle.NORMAL));
			sidebarContent.add(new BaseLabel("Secondary Label", LabelStyle.SECONDARY));
			sidebarContent.add(new BaseLabel("Code Label", LabelStyle.CODE));

			sidebarContent.add(javax.swing.Box.createVerticalStrut(Theme.spacing().lg()));
			sidebarContent.add(new BaseLabel("Buttons", LabelStyle.SECONDARY));
			sidebarContent.add(javax.swing.Box.createVerticalStrut(Theme.spacing().sm()));
			sidebarContent.add(new BaseButton("Primary", ButtonStyle.PRIMARY));
			sidebarContent.add(new BaseButton("Secondary", ButtonStyle.SECONDARY));
			sidebarContent.add(new BaseButton("Ghost", ButtonStyle.GHOST));
			sidebarContent.add(new BaseButton("Danger", ButtonStyle.DANGER));
			sidebarContent.add(new BaseButton("Icon").asIcon());

			SidebarLayout sidebar = new SidebarLayout(sidebarHeader, new BaseScrollPane(sidebarContent));

			/* ---------------- Editor Content ---------------- */

			JPanel editorHeader = new JPanel(new BorderLayout());
			editorHeader.setOpaque(false);
			editorHeader.setBorder(BorderFactory.createEmptyBorder(Theme.spacing().md(), Theme.spacing().lg(),
					Theme.spacing().md(), Theme.spacing().lg()));
			editorHeader.add(new BaseLabel("Editor Area", LabelStyle.TITLE), BorderLayout.WEST);

			EmptyStateLayout emptyState = new EmptyStateLayout().add(new BaseLabel("Nothing to show", LabelStyle.TITLE))
					.add(new BaseLabel("Select an item from the sidebar to begin.", LabelStyle.SECONDARY),
							Theme.spacing().md())
					.add(new BaseButton("Create New", ButtonStyle.PRIMARY));

			EditorLayout editor = new EditorLayout(editorHeader, emptyState);

			/* ---------------- Split Pane ---------------- */

			BaseSplitPane splitPane = new BaseSplitPane(BaseSplitPane.HORIZONTAL_SPLIT, sidebar, editor)
					.withDividerLocation(320).withResizeWeight(0);

			frame.add(splitPane, BorderLayout.CENTER);
			frame.setVisible(true);
		});
	}
}
