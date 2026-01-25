package com.muratkagan.differ.ui.layout;

import javax.swing.JComponent;

import com.muratkagan.differ.ui.foundation.BaseSplitPane;

public final class SplitLayouts {

	private SplitLayouts() {
		// Prevent instantiation
	}

	public static BaseSplitPane horizontal(JComponent left, JComponent right, int dividerLocation) {
		return new BaseSplitPane(BaseSplitPane.HORIZONTAL_SPLIT, left, right).withDividerLocation(dividerLocation)
				.withResizeWeight(0.5);
	}

	public static BaseSplitPane vertical(JComponent top, JComponent bottom, int dividerLocation) {
		return new BaseSplitPane(BaseSplitPane.VERTICAL_SPLIT, top, bottom).withDividerLocation(dividerLocation)
				.withResizeWeight(0.5);
	}

	public static BaseSplitPane horizontal(JComponent left, JComponent right, int dividerLocation,
			double resizeWeight) {
		return new BaseSplitPane(BaseSplitPane.HORIZONTAL_SPLIT, left, right).withDividerLocation(dividerLocation)
				.withResizeWeight(resizeWeight);
	}

	public static BaseSplitPane vertical(JComponent top, JComponent bottom, int dividerLocation, double resizeWeight) {
		return new BaseSplitPane(BaseSplitPane.VERTICAL_SPLIT, top, bottom).withDividerLocation(dividerLocation)
				.withResizeWeight(resizeWeight);
	}

	public static BaseSplitPane withSidebar(JComponent sidebar, JComponent content, int sidebarWidth) {
		return new BaseSplitPane(BaseSplitPane.HORIZONTAL_SPLIT, sidebar, content).withDividerLocation(sidebarWidth)
				.withResizeWeight(0.0);
	}

	public static BaseSplitPane withDetailPanel(JComponent mainContent, JComponent detailPanel, int detailPanelWidth) {
		return new BaseSplitPane(BaseSplitPane.HORIZONTAL_SPLIT, mainContent, detailPanel)
				.withDividerLocation(-detailPanelWidth).withResizeWeight(1.0);
	}
}