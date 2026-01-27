package com.muratkagan.differ.ui.view;

import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.control.Label;
import javafx.scene.layout.HBox;
import javafx.scene.layout.Priority;

public class SidebarHeader {

	private final HBox root;
	private final Label titleLabel;
	private final Label addedBadge;
	private final Label modifiedBadge;
	private final Label deletedBadge;
	private final HBox badgeContainer;

	public SidebarHeader() {
		root = new HBox(12);
		root.setPadding(new Insets(12, 12, 12, 12));
		root.setAlignment(Pos.CENTER_LEFT);
		root.getStyleClass().add("sidebar-header");

		titleLabel = new Label("Changed Files");
		titleLabel.getStyleClass().add("sidebar-header-title");
		HBox.setHgrow(titleLabel, Priority.ALWAYS);

		badgeContainer = new HBox(6);
		badgeContainer.setAlignment(Pos.CENTER_RIGHT);

		addedBadge = createBadge("0 A", "badge-added");
		modifiedBadge = createBadge("0 M", "badge-modified");
		deletedBadge = createBadge("0 D", "badge-deleted");

		badgeContainer.getChildren().addAll(addedBadge, modifiedBadge, deletedBadge);

		root.getChildren().addAll(titleLabel, badgeContainer);
	}

	private Label createBadge(String text, String styleClass) {
		Label badge = new Label(text);
		badge.getStyleClass().addAll("file-count-badge", styleClass);
		return badge;
	}

	public void setFileCounts(int added, int modified, int deleted) {
		addedBadge.setText(added + " A");
		modifiedBadge.setText(modified + " M");
		deletedBadge.setText(deleted + " D");
		
		// Hide badges if count is 0
		addedBadge.setVisible(added > 0);
		addedBadge.setManaged(added > 0);
		modifiedBadge.setVisible(modified > 0);
		modifiedBadge.setManaged(modified > 0);
		deletedBadge.setVisible(deleted > 0);
		deletedBadge.setManaged(deleted > 0);
	}

	public HBox getRoot() {
		return root;
	}
}
