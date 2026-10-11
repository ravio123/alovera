// ============================================================
// DOWNLOAD VIDEO KE GALERI ANDROID
// ============================================================
function downloadVideoToGallery(url, filename = 'alovera-video.mp4') {
    if (!url) {
        showNotification('Link video tidak tersedia', 'error');
        return;
    }

    // Pastikan ekstensi video
    if (!/\.(mp4|webm|mov|m4v|ogv)$/i.test(filename)) {
        filename += '.mp4';
    }

    if (window.AndroidDownload && typeof window.AndroidDownload.saveVideo === 'function') {
        showNotification('Mengunduh video...', 'info');
        window.onAndroidDownloadResult = function(success, message) {
            if (success) {
                showNotification(message || 'Video berhasil disimpan ke Galeri', 'success');
            } else {
                showNotification(message || 'Gagal menyimpan video', 'error');
            }
        };
        try {
            window.AndroidDownload.saveVideo(url, filename);
            return;
        } catch (error) {
            console.error('AndroidDownload.saveVideo error:', error);
            showNotification('Gagal mengakses penyimpanan Android', 'error');
            return;
        }
    }

    // Fallback browser
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('HTTP ' + response.status);
            return response.blob();
        })
        .then(blob => {
            const blobUrl = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
            showNotification('Video berhasil diunduh', 'success');
        })
        .catch(error => {
            console.error('Browser download error:', error);
            window.open(url, '_blank');
            showNotification('Video dibuka di browser', 'info');
        });
}





async function downloadFile(url, filename) {
    if (!url) {
        showNotification('Link tidak tersedia', 'error');
        return;
    }

    const btn = document.querySelector('.btn-download');
    if (btn) {
        btn.classList.add('loading');
        btn.innerHTML = '<span class="spinner"></span> Mengunduh...';
    }

    try {
        const lowerName = (filename || '').toLowerCase();
        const lowerUrl = (url || '').split('?')[0].toLowerCase();

        // Cek video DULU (prioritas)
        const isVideo = /\.(mp4|webm|mov|m4v|ogv)$/i.test(lowerName) ||
                        /\.(mp4|webm|mov|m4v|ogv)$/i.test(lowerUrl);

        if (isVideo) {
            downloadVideoToGallery(url, filename || 'alovera-video.mp4');
            return;
        }

        // Cek gambar
        if (isImageFile(url, filename)) {
            downloadImageToGallery(url, filename || 'alovera-image.png');
            return;
        }

        // File lain (PDF dll)
        const response = await fetch(url);
        if (!response.ok) throw new Error('Gagal mengunduh');
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = filename || 'alovera-download';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
        showNotification('Unduhan selesai', 'success');

    } catch (err) {
        console.error('Download error:', err);
        window.open(url, '_blank');
        showNotification('File dibuka untuk diunduh', 'info');
    } finally {
        if (btn) {
            btn.classList.remove('loading');
            btn.innerHTML = '<i class="fas fa-download"></i> Unduh';
        }
    }
}