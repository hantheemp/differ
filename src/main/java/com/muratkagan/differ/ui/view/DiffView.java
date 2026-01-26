package com.muratkagan.differ.ui.view;

import javafx.scene.control.ScrollPane;
import javafx.scene.control.TextArea;
import javafx.scene.layout.BorderPane;

public class DiffView {

	private final BorderPane root;
	private final TextArea leftArea;
	private final TextArea rightArea;

	public DiffView() {
		this.leftArea = new TextArea();
		this.rightArea = new TextArea();
		this.root = new BorderPane();

		configure();
	}

	private void configure() {
		leftArea.setEditable(false);
		rightArea.setEditable(false);

		leftArea.getStyleClass().add("diff-left");
		rightArea.getStyleClass().add("diff-right");

		ScrollPane leftScroll = new ScrollPane(leftArea);
		ScrollPane rightScroll = new ScrollPane(rightArea);

		leftScroll.setFitToWidth(true);
		rightScroll.setFitToWidth(true);

		root.setLeft(leftScroll);
		root.setCenter(rightScroll);

		root.getStyleClass().add("diff-root");
	}

	public void render(String leftContent, String rightContent, DiffViewMode mode) {
		if (mode == DiffViewMode.SIDE_BY_SIDE) {
			root.setLeft(leftArea);
			root.setCenter(rightArea);

			leftArea.setText(leftContent);
			rightArea.setText(rightContent);
		} else {
			root.setLeft(null);
			root.setCenter(leftArea);

			leftArea.setText("<< OLD >>\n" + leftContent + "\n\n<< NEW >>\n" + rightContent);
		}
	}

	public BorderPane getRoot() {
		return root;
	}
}
