package com.muratkagan.differ.ui.view;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;

import com.muratkagan.differ.ui.model.FileEntryModel;

import javafx.collections.ObservableList;
import javafx.geometry.Pos;
import javafx.scene.control.Label;
import javafx.scene.control.TreeCell;
import javafx.scene.control.TreeItem;
import javafx.scene.control.TreeView;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.HBox;
import javafx.scene.paint.Color;
import javafx.scene.shape.SVGPath;

public class SidebarTreeView {
	private final BorderPane root;
	private final TreeView<FileEntryModel> treeView;
	private final TreeItem<FileEntryModel> rootItem;
	private SidebarHeader header;

	public SidebarTreeView(ObservableList<FileEntryModel> items) {
		this(items, null);
	}

	public SidebarTreeView(ObservableList<FileEntryModel> items, SidebarHeader header) {
		this.rootItem = new TreeItem<>(null);
		this.rootItem.setExpanded(true);
		this.header = header;

		this.treeView = new TreeView<>(rootItem);
		this.root = new BorderPane(treeView);
		
		if (header != null) {
			root.setTop(header.getRoot());
		}

		configure();
		populateTree(items);
	}

	private void configure() {
		treeView.setShowRoot(false);

		treeView.setCellFactory(tv -> new TreeCell<>() {
			private final HBox container = new HBox(8);
			private final SVGPath icon = new SVGPath();
			private final Label label = new Label();
			private final Label badge = new Label();

			{
				container.setAlignment(Pos.CENTER_LEFT);
				container.getChildren().addAll(icon, label);
				icon.setFill(Color.web("#94a3b8"));
				icon.setScaleX(0.8);
				icon.setScaleY(0.8);
			}

			@Override
			protected void updateItem(FileEntryModel item, boolean empty) {
				super.updateItem(item, empty);
				getStyleClass().removeAll("file-modified", "file-unchanged", "folder-node", "file-added", "file-deleted");

				if (empty || item == null) {
					setText(null);
					setGraphic(null);
				} else {
					String displayName = getDisplayName(item);
					label.setText(displayName);

					TreeItem<FileEntryModel> treeItem = getTreeItem();
					boolean isFolder = treeItem != null && !treeItem.getChildren().isEmpty();

					if (isFolder) {
						// Folder icon
						icon.setContent(getFolderIconPath(treeItem.isExpanded()));
						icon.setFill(Color.web("#64748b"));
						getStyleClass().add("folder-node");
						
						// Update folder icon on expand/collapse
						treeItem.expandedProperty().addListener((obs, wasExpanded, isNowExpanded) -> {
							icon.setContent(getFolderIconPath(isNowExpanded));
						});
					} else {
						// File icon with color based on status and type
						String fileName = item.getPath();
						icon.setContent(getFileIconPath(fileName));
						
						if (item.isModified()) {
							icon.setFill(Color.web("#facc15")); // yellow
							getStyleClass().add("file-modified");
						} else {
							icon.setFill(Color.web("#94a3b8")); // slate
							getStyleClass().add("file-unchanged");
						}
					}

					setGraphic(container);
					setText(null);
				}
			}

			private String getDisplayName(FileEntryModel item) {
				String path = item.getPath();
				int lastSlash = Math.max(path.lastIndexOf('/'), path.lastIndexOf('\\'));
				return lastSlash >= 0 ? path.substring(lastSlash + 1) : path;
			}

			private String getFolderIconPath(boolean expanded) {
				if (expanded) {
					// Open folder icon
					return "M 10 4 H 4 C 2.9 4 2.01 4.9 2.01 6 L 2 18 C 2 19.1 2.9 20 4 20 H 20 C 21.1 20 22 19.1 22 18 V 8 C 22 6.9 21.1 6 20 6 H 12 L 10 4 Z M 4 6 H 9.17 L 11.17 8 H 20 V 18 H 4 V 6 Z";
				} else {
					// Closed folder icon
					return "M 10 4 H 4 C 2.9 4 2.01 4.9 2.01 6 L 2 18 C 2 19.1 2.9 20 4 20 H 20 C 21.1 20 22 19.1 22 18 V 8 C 22 6.9 21.1 6 20 6 H 12 L 10 4 Z";
				}
			}

			private String getFileIconPath(String fileName) {
				String ext = getFileExtension(fileName).toLowerCase();
				
				// Java files
				if (ext.equals("java")) {
					return "M 14 2 H 6 C 4.9 2 4 2.9 4 4 V 20 C 4 21.1 4.9 22 6 22 H 18 C 19.1 22 20 21.1 20 20 V 8 L 14 2 Z M 16 18 H 8 V 16 H 16 V 18 Z M 16 14 H 8 V 12 H 16 V 14 Z M 13 9 V 3.5 L 18.5 9 H 13 Z";
				}
				// XML/HTML files
				else if (ext.equals("xml") || ext.equals("html") || ext.equals("fxml")) {
					return "M 14 2 H 6 C 4.9 2 4 2.9 4 4 V 20 C 4 21.1 4.9 22 6 22 H 18 C 19.1 22 20 21.1 20 20 V 8 L 14 2 Z M 16 18 H 8 V 16 H 16 V 18 Z M 16 14 H 8 V 12 H 16 V 14 Z M 13 9 V 3.5 L 18.5 9 H 13 Z";
				}
				// CSS files
				else if (ext.equals("css")) {
					return "M 14 2 H 6 C 4.9 2 4 2.9 4 4 V 20 C 4 21.1 4.9 22 6 22 H 18 C 19.1 22 20 21.1 20 20 V 8 L 14 2 Z M 13 9 V 3.5 L 18.5 9 H 13 Z";
				}
				// JSON/Config files
				else if (ext.equals("json") || ext.equals("properties") || ext.equals("yml") || ext.equals("yaml")) {
					return "M 14 2 H 6 C 4.9 2 4 2.9 4 4 V 20 C 4 21.1 4.9 22 6 22 H 18 C 19.1 22 20 21.1 20 20 V 8 L 14 2 Z M 13 9 V 3.5 L 18.5 9 H 13 Z";
				}
				// Markdown files
				else if (ext.equals("md")) {
					return "M 14 2 H 6 C 4.9 2 4 2.9 4 4 V 20 C 4 21.1 4.9 22 6 22 H 18 C 19.1 22 20 21.1 20 20 V 8 L 14 2 Z M 13 9 V 3.5 L 18.5 9 H 13 Z";
				}
				// Default document icon
				else {
					return "M 14 2 H 6 C 4.9 2 4 2.9 4 4 V 20 C 4 21.1 4.9 22 6 22 H 18 C 19.1 22 20 21.1 20 20 V 8 L 14 2 Z M 16 18 H 8 V 16 H 16 V 18 Z M 16 14 H 8 V 12 H 16 V 14 Z M 13 9 V 3.5 L 18.5 9 H 13 Z";
				}
			}
			
			private String getFileExtension(String fileName) {
				int lastDot = fileName.lastIndexOf('.');
				return lastDot > 0 ? fileName.substring(lastDot + 1) : "";
			}
		});

		treeView.getStyleClass().add("sidebar-tree");
	}

	private void populateTree(ObservableList<FileEntryModel> items) {
		Map<String, TreeItem<FileEntryModel>> folderCache = new HashMap<>();

		for (FileEntryModel item : items) {
			String path = item.getPath();
			String[] parts = path.split("[/\\\\]");

			TreeItem<FileEntryModel> currentParent = rootItem;
			StringBuilder currentPath = new StringBuilder();

			for (int i = 0; i < parts.length - 1; i++) {
				if (currentPath.length() > 0) {
					currentPath.append("/");
				}
				currentPath.append(parts[i]);

				String folderPath = currentPath.toString();
				TreeItem<FileEntryModel> folderItem = folderCache.get(folderPath);

				if (folderItem == null) {
					FileEntryModel folderModel = createFolderModel(folderPath);
					folderItem = new TreeItem<>(folderModel);
					folderItem.setExpanded(true);
					currentParent.getChildren().add(folderItem);
					folderCache.put(folderPath, folderItem);
				}

				currentParent = folderItem;
			}

			TreeItem<FileEntryModel> fileItem = new TreeItem<>(item);
			currentParent.getChildren().add(fileItem);
		}

		sortTreeItems(rootItem);
	}

	private void sortTreeItems(TreeItem<FileEntryModel> parent) {
		if (parent.getChildren().isEmpty()) {
			return;
		}

		parent.getChildren().sort((a, b) -> {
			boolean aIsFolder = !a.getChildren().isEmpty();
			boolean bIsFolder = !b.getChildren().isEmpty();

			if (aIsFolder && !bIsFolder)
				return -1;
			if (!aIsFolder && bIsFolder)
				return 1;

			String aName = a.getValue() != null ? a.getValue().getPath() : "";
			String bName = b.getValue() != null ? b.getValue().getPath() : "";
			return aName.compareToIgnoreCase(bName);
		});

		for (TreeItem<FileEntryModel> child : parent.getChildren()) {
			sortTreeItems(child);
		}
	}

	private FileEntryModel createFolderModel(String path) {
		return new FileEntryModel(path, false);
	}

	public void onSelectionChanged(Consumer<FileEntryModel> handler) {
		treeView.getSelectionModel().selectedItemProperty().addListener((obs, oldVal, newVal) -> {
			if (newVal != null && newVal.getValue() != null) {
				if (newVal.getChildren().isEmpty()) {
					handler.accept(newVal.getValue());
				}
			}
		});
	}

	public BorderPane getRoot() {
		return root;
	}

	public TreeView<FileEntryModel> getTreeView() {
		return treeView;
	}
}
