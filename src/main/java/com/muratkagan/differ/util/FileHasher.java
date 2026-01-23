package com.muratkagan.differ.util;

import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.security.MessageDigest;

public class FileHasher {

	public static String sha256(Path file) {

		try (InputStream is = Files.newInputStream(file)) {

			MessageDigest digest = MessageDigest.getInstance("SHA-256");
			byte[] buffer = new byte[8192];
			int read;

			while ((read = is.read(buffer)) != -1) {
				digest.update(buffer, 0, read);
			}

			return bytesToHex(digest.digest());

		} catch (Exception e) {
			throw new RuntimeException("Failed to hash file: " + file, e);
		}

	}

	private static String bytesToHex(byte[] bytes) {
		StringBuilder sb = new StringBuilder(bytes.length * 2);
		for (byte b : bytes) {
			sb.append(String.format("%02x", b));
		}
		return sb.toString();
	}

}
