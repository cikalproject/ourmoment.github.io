const util = {
    copy: function(button, feedbackText) {
        // Ambil teks dari atribut data-copy
        const textToCopy = button.getAttribute('data-copy');
        
        // Buat elemen textarea untuk menyalin teks
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        
        // Pilih teks di dalam textarea
        textarea.select();
        textarea.setSelectionRange(0, 99999); // Untuk mobile
        
        // Salin teks ke clipboard
        try {
            const successful = document.execCommand('copy');
            const msg = successful ? feedbackText : 'Gagal menyalin teks!';
            document.getElementById('feedback').innerText = msg;
        } catch (err) {
            document.getElementById('feedback').innerText = 'Terjadi kesalahan!';
        }
        
        // Hapus elemen textarea setelah menyalin
        document.body.removeChild(textarea);
    }
};