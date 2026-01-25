package com.muratkagan.differ.ui.view;

import java.awt.BorderLayout;
import java.util.List;
import java.util.function.Consumer;

import javax.swing.DefaultListModel;
import javax.swing.JList;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.ListSelectionModel;

import com.muratkagan.differ.ui.model.FileEntryModel;
import com.muratkagan.differ.ui.theme.Theme;

public class SidebarListView {

	private final JPanel root;
	private final JList<FileEntryModel> list;
	private final DefaultListModel<FileEntryModel> listModel;

	private Consumer<FileEntryModel> onSelect;

	public SidebarListView() {
		root = new JPanel(new BorderLayout());
		root.setBackground(Theme.color().surface());

		listModel = new DefaultListModel<>();
		list = new JList<>(listModel);
		list.setSelectionMode(ListSelectionModel.SINGLE_SELECTION);
		list.setBackground(Theme.color().surface());

		list.addListSelectionListener(e -> {
			if (!e.getValueIsAdjusting() && onSelect != null) {
				onSelect.accept(list.getSelectedValue());
			}
		});

		list.setCellRenderer(new SidebarFileCellRenderer());

		root.add(new JScrollPane(list), BorderLayout.CENTER);
	}

	public void setFiles(List<FileEntryModel> files) {
		listModel.clear();
		for (FileEntryModel file : files) {
			listModel.addElement(file);
		}
	}

	public void setSelected(FileEntryModel entry) {
		list.setSelectedValue(entry, true);
	}

	public void onSelect(Consumer<FileEntryModel> handler) {
		this.onSelect = handler;
	}

	public JPanel getRoot() {
		return root;
	}
}
