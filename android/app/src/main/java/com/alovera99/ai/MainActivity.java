package com.alovera99.ai;

import android.content.ContentValues;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.provider.MediaStore;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;

import com.getcapacitor.BridgeActivity;

import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class MainActivity extends BridgeActivity {

    @Override
    public void onStart() {
        super.onStart();

        WebView webView = getBridge().getWebView();

        webView.getSettings().setJavaScriptEnabled(true);

        webView.addJavascriptInterface(
                new AndroidDownloadInterface(),
                "AndroidDownload"
        );
    }

    public class AndroidDownloadInterface {

        @JavascriptInterface
        public void saveImage(String imageUrl, String fileName) {

            new Thread(() -> {

                HttpURLConnection connection = null;
                InputStream inputStream = null;
                OutputStream outputStream = null;

                try {
                    URL url = new URL(imageUrl);

                    connection = (HttpURLConnection) url.openConnection();
                    connection.setRequestMethod("GET");
                    connection.setConnectTimeout(30000);
                    connection.setReadTimeout(30000);
                    connection.setDoInput(true);
                    connection.connect();

                    int responseCode = connection.getResponseCode();

                    if (responseCode != HttpURLConnection.HTTP_OK) {
                        sendResult(false, "Gagal mengunduh gambar");
                        return;
                    }

                    inputStream = connection.getInputStream();

                    String mimeType = connection.getContentType();

                    if (mimeType == null || !mimeType.startsWith("image/")) {
                        mimeType = "image/png";
                    }

                    // Buat nama file baru yang final/effectively final
                    final String safeFileName;

                    if (fileName == null || fileName.trim().isEmpty()) {
                        safeFileName = "alovera-image.png";
                    } else {
                        safeFileName = fileName.trim();
                    }

                    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {

                        ContentValues values = new ContentValues();

                        values.put(
                                MediaStore.Images.Media.DISPLAY_NAME,
                                safeFileName
                        );

                        values.put(
                                MediaStore.Images.Media.MIME_TYPE,
                                mimeType
                        );

                        values.put(
                                MediaStore.Images.Media.RELATIVE_PATH,
                                Environment.DIRECTORY_PICTURES + "/Alovera"
                        );

                        values.put(
                                MediaStore.Images.Media.IS_PENDING,
                                1
                        );

                        Uri imageUri = getContentResolver().insert(
                                MediaStore.Images.Media.EXTERNAL_CONTENT_URI,
                                values
                        );

                        if (imageUri == null) {
                            sendResult(
                                    false,
                                    "Tidak dapat membuat file gambar"
                            );
                            return;
                        }

                        try {

                            outputStream = getContentResolver()
                                    .openOutputStream(imageUri);

                            if (outputStream == null) {
                                throw new Exception(
                                        "Output stream tidak tersedia"
                                );
                            }

                            byte[] buffer = new byte[8192];
                            int bytesRead;

                            while ((bytesRead = inputStream.read(buffer)) != -1) {
                                outputStream.write(buffer, 0, bytesRead);
                            }

                            outputStream.flush();

                            ContentValues completed = new ContentValues();

                            completed.put(
                                    MediaStore.Images.Media.IS_PENDING,
                                    0
                            );

                            getContentResolver().update(
                                    imageUri,
                                    completed,
                                    null,
                                    null
                            );

                            sendResult(
                                    true,
                                    "Gambar tersimpan di Pictures/Alovera"
                            );

                        } catch (Exception e) {

                            getContentResolver().delete(
                                    imageUri,
                                    null,
                                    null
                            );

                            sendResult(
                                    false,
                                    "Gagal menyimpan gambar"
                            );

                        } finally {

                            if (outputStream != null) {
                                try {
                                    outputStream.close();
                                } catch (Exception ignored) {
                                }
                            }
                        }

                    } else {

                        sendResult(
                                false,
                                "Versi Android terlalu lama"
                        );
                    }

                } catch (Exception e) {

                    sendResult(
                            false,
                            "Gagal mengunduh gambar"
                    );

                } finally {

                    if (inputStream != null) {
                        try {
                            inputStream.close();
                        } catch (Exception ignored) {
                        }
                    }

                    if (connection != null) {
                        connection.disconnect();
                    }
                }

            }).start();
        }

        private void sendResult(
                boolean success,
                String message
        ) {

            runOnUiThread(() -> {

                WebView webView = getBridge().getWebView();

                String js =
                        "window.onAndroidDownloadResult(" +
                        success + "," +
                        JSONObjectEscape(message) +
                        ");";

                webView.evaluateJavascript(js, null);
            });
        }

        private String JSONObjectEscape(String text) {

            if (text == null) {
                return "\"\"";
            }

            return "\"" +
                    text
                            .replace("\\", "\\\\")
                            .replace("\"", "\\\"")
                            .replace("\n", "\\n")
                            .replace("\r", "\\r") +
                    "\"";
        }
    }
}
