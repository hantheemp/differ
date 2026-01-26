package com.muratkagan.differ.ui.app;

import com.muratkagan.differ.ui.controller.AppController;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.image.Image;
import javafx.stage.Stage;

public class MainApp extends Application {

	@Override
	public void start(Stage primaryStage) throws Exception {

		MainView mainView = new MainView();

		AppController controller = new AppController(mainView);
		controller.initialize();

		Scene scene = new Scene(mainView.getRoot(), 1200, 760);
		scene.getStylesheets().add(getClass().getResource("/theme.css").toExternalForm());

		primaryStage.setTitle("Differ");
		primaryStage.getIcons().add(new Image("/Logo.png"));
		primaryStage.setScene(scene);
		primaryStage.show();

	}

}
