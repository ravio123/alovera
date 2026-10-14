package com.aloveracom.app;

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
        webView.addJavascriptInterface(new AndroidDownloadInterface(), "AndroidDownload");
    }

    public class AndroidDownloadInterface {

        @JavascriptInterface
        public void saveImage(String imageUrl, String fileName) {
            saveMedia(imageUrl, fileName, false);
        }

        @JavascriptInterface
        public void saveVideo(String videoUrl, String fileName) {
            saveMedia(videoUrl, fileName, true);
        }
        
        
        
        @JavascriptInterface
public void saveBase64Image(String base64Data, String fileName) {
    new Thread(() -> {
        OutputStream outputStream = null;
        try {
            // Hapus prefix "data:image/png;base64,"
            String base64Image = base64Data;
            if (base64Data.contains(",")) {
                base64Image = base64Data.substring(base64Data.indexOf(",") + 1);
            }
            
            // Decode base64
            byte[] imageBytes = android.util.Base64.decode(base64Image, android.util.Base64.DEFAULT);
            
            // Tentukan MIME type
            String mimeType = "image/png";
            String lower = (fileName != null ? fileName : "").toLowerCase();
            if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) mimeType = "image/jpeg";
            else if (lower.endsWith(".webp")) mimeType = "image/webp";
            
            // Nama file default
            final String safeFileName = (fileName == null || fileName.trim().isEmpty())
                    ? "alovera-ai.png"
                    : fileName.trim();
            
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                ContentValues values = new ContentValues();
                values.put(MediaStore.Images.Media.DISPLAY_NAME, safeFileName);
                values.put(MediaStore.Images.Media.MIME_TYPE, mimeType);
                values.put(
                    MediaStore.Images.Media.RELATIVE_PATH,
                    Environment.DIRECTORY_PICTURES + "/Alovera"
                );
                values.put(MediaStore.Images.Media.IS_PENDING, 1);
                
                Uri imageUri = getContentResolver().insert(
                    MediaStore.Images.Media.EXTERNAL_CONTENT_URI,
                    values
                );
                
                if (imageUri == null) {
                    sendResult(false, "Tidak dapat membuat file gambar");
                    return;
                }
                
                try {
                    outputStream = getContentResolver().openOutputStream(imageUri);
                    if (outputStream == null) throw new Exception("Output stream null");
                    
                    outputStream.write(imageBytes);
                    outputStream.flush();
                    
                    ContentValues completed = new ContentValues();
                    completed.put(MediaStore.Images.Media.IS_PENDING, 0);
                    getContentResolver().update(imageUri, completed, null, null);
                    
                    sendResult(true, "Gambar tersimpan di Pictures/Alovera");
                    
                } catch (Exception e) {
                    getContentResolver().delete(imageUri, null, null);
                    sendResult(false, "Gagal menyimpan gambar");
                } finally {
                    if (outputStream != null) {
                        try { outputStream.close(); } catch (Exception ignored) {}
                    }
                }
            } else {
                sendResult(false, "Versi Android terlalu lama");
            }
            
        } catch (Exception e) {
            sendResult(false, "Gagal decode gambar");
        }
    }).start();
}
        
        
        
        
        
        
        
        

        private void saveMedia(String mediaUrl, String fileName, boolean isVideo) {
            new Thread(() -> {
                HttpURLConnection connection = null;
                InputStream inputStream = null;
                OutputStream outputStream = null;

                try {
                    URL url = new URL(mediaUrl);
                    connection = (HttpURLConnection) url.openConnection();
                    connection.setRequestMethod("GET");
                    connection.setConnectTimeout(30000);
                    connection.setReadTimeout(30000);
                    connection.setDoInput(true);
                    connection.connect();

                    int responseCode = connection.getResponseCode();
                    if (responseCode != HttpURLConnection.HTTP_OK) {
                        sendResult(false, "Gagal mengunduh file");
                        return;
                    }

                    inputStream = connection.getInputStream();

                    String mimeType = connection.getContentType();

                    // Tentukan MIME type yang benar
                    if (isVideo) {
                        if (mimeType == null || !mimeType.startsWith("video/")) {
                            // Deteksi dari ekstensi
                            String lower = (fileName != null ? fileName : "").toLowerCase();
                            if (lower.endsWith(".webm")) mimeType = "video/webm";
                            else if (lower.endsWith(".mov")) mimeType = "video/quicktime";
                            else mimeType = "video/mp4";
                        }
                    } else {
                        if (mimeType == null || !mimeType.startsWith("image/")) {
                            mimeType = "image/png";
                        }
                    }

                    final String safeFileName = (fileName == null || fileName.trim().isEmpty())
                            ? (isVideo ? "alovera-video.mp4" : "alovera-image.png")
                            : fileName.trim();

                    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {

                        ContentValues values = new ContentValues();
                        values.put(
                            isVideo ? MediaStore.Video.Media.DISPLAY_NAME : MediaStore.Images.Media.DISPLAY_NAME,
                            safeFileName
                        );
                        values.put(
                            isVideo ? MediaStore.Video.Media.MIME_TYPE : MediaStore.Images.Media.MIME_TYPE,
                            mimeType
                        );
                        values.put(
                            isVideo ? MediaStore.Video.Media.RELATIVE_PATH : MediaStore.Images.Media.RELATIVE_PATH,
                            (isVideo ? Environment.DIRECTORY_MOVIES : Environment.DIRECTORY_PICTURES) + "/Alovera"
                        );
                        values.put(
                            isVideo ? MediaStore.Video.Media.IS_PENDING : MediaStore.Images.Media.IS_PENDING,
                            1
                        );

                        Uri collection = isVideo
                                ? MediaStore.Video.Media.EXTERNAL_CONTENT_URI
                                : MediaStore.Images.Media.EXTERNAL_CONTENT_URI;

                        Uri mediaUri = getContentResolver().insert(collection, values);
                        if (mediaUri == null) {
                            sendResult(false, "Tidak dapat membuat file");
                            return;
                        }

                        try {
                            outputStream = getContentResolver().openOutputStream(mediaUri);
                            if (outputStream == null) throw new Exception("Output stream tidak tersedia");

                            byte[] buffer = new byte[8192];
                            int bytesRead;
                            while ((bytesRead = inputStream.read(buffer)) != -1) {
                                outputStream.write(buffer, 0, bytesRead);
                            }
                            outputStream.flush();

                            ContentValues completed = new ContentValues();
                            completed.put(
                                isVideo ? MediaStore.Video.Media.IS_PENDING : MediaStore.Images.Media.IS_PENDING,
                                0
                            );
                            getContentResolver().update(mediaUri, completed, null, null);

                            sendResult(true, (isVideo ? "Video" : "Gambar") +
                                    " tersimpan di " +
                                    (isVideo ? "Movies" : "Pictures") + "/Alovera");

                        } catch (Exception e) {
                            getContentResolver().delete(mediaUri, null, null);
                            sendResult(false, "Gagal menyimpan file");
                        } finally {
                            if (outputStream != null) {
                                try { outputStream.close(); } catch (Exception ignored) {}
                            }
                        }
                    } else {
                        sendResult(false, "Versi Android terlalu lama");
                    }

                } catch (Exception e) {
                    sendResult(false, "Gagal mengunduh file");
                } finally {
                    if (inputStream != null) {
                        try { inputStream.close(); } catch (Exception ignored) {}
                    }
                    if (connection != null) connection.disconnect();
                }
            }).start();
        }

        private void sendResult(boolean success, String message) {
            runOnUiThread(() -> {
                WebView webView = getBridge().getWebView();
                String js = "window.onAndroidDownloadResult(" + success + "," +
                        JSONObjectEscape(message) + ");";
                webView.evaluateJavascript(js, null);
            });
        }

        private String JSONObjectEscape(String text) {
            if (text == null) return "\"\"";
            return "\"" + text
                    .replace("\\", "\\\\")
                    .replace("\"", "\\\"")
                    .replace("\n", "\\n")
                    .replace("\r", "\\r") + "\"";
        }
    }
}



