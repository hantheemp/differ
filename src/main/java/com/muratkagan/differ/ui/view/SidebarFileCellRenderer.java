package com.muratkagan.differ.ui.view;

import java.awt.BorderLayout;
import java.awt.Component;

import javax.swing.BorderFactory;
import javax.swing.Icon;
import javax.swing.JLabel;
import javax.swing.JList;
import javax.swing.JPanel;
import javax.swing.ListCellRenderer;

import com.muratkagan.differ.ui.model.FileEntryModel;
import com.muratkagan.differ.ui.theme.Theme;

public class SidebarFileCellRenderer implements ListCellRenderer<FileEntryModel> {

	@Override
	public Component getListCellRendererComponent(JList<? extends FileEntryModel> list, FileEntryModel value, int index,
			boolean isSelected, boolean cellHasFocus) {

		JPanel root = new JPanel(new BorderLayout());
		root.setOpaque(true);

		JLabel label = new JLabel(value.getPath());
		label.setFont(Theme.font().display());
		// label.setIcon(resolveIcon(value));
		label.setBorder(BorderFactory.createEmptyBorder(Theme.spacing().xs(), Theme.spacing().sm(),
				Theme.spacing().xs(), Theme.spacing().sm()));

		if (isSelected) {
			root.setBackground(Theme.color().selection());
			label.setForeground(Theme.color().text());
		} else {
			root.setBackground(Theme.color().surface());
			label.setForeground(Theme.color().textSecondary());
		}

		root.add(label, BorderLayout.CENTER);
		return root;
	}
}
