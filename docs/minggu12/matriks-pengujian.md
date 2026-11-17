# Matriks Pengujian Chapter 11 – SisaBaik

## 1. Lingkungan Pengujian

- Aplikasi: SisaBaik
- Teknologi: Node.js, Express, Vue, Vite, dan PostgreSQL
- Branch deployment: `feature/fullstack-vue`
- URL publik: https://sisabaik-api-7wty.onrender.com
- Server: Render
- Database: Neon
- Tanggal pengujian: 17 November 2026

## 2. Matriks Hasil Pengujian

| No. | Pengujian | Hasil Aktual | Status |
|---|---|---|---|
| 1 | Pemeriksaan deployment melalui skrip `deploy:test` | Sepuluh pemeriksaan deployment berhasil (PASS). | Berhasil |
| 2 | Pemeriksaan endpoint kesehatan `/healthz` | Endpoint berhasil merespons dengan status 200. | Berhasil |
| 3 | Pendaftaran akun pembeli | Alur pendaftaran telah dilakukan. | Berhasil |
| 4 | Pendaftaran akun penyedia | Alur pendaftaran telah dilakukan. | Berhasil |
| 5 | Verifikasi profil usaha | Profil usaha berhasil diverifikasi. | Berhasil |
| 6 | Pembuatan penawaran oleh penyedia | Penawaran berhasil dibuat. | Berhasil |
| 7 | Pengubahan penawaran | Penawaran berhasil diperbarui. | Berhasil |
| 8 | Pembelian penawaran oleh pembeli | Pembelian berhasil dilakukan. | Berhasil |
| 9 | Pengujian penawaran makanan gratis | Alur pembelian penawaran gratis berhasil dilakukan. | Berhasil |
| 10 | Pembatalan pesanan dan pemulihan stok | Belum dicatat sebagai pengujian terpisah. | Perlu konfirmasi |
| 11 | Konfirmasi penyedia dan pengambilan pesanan | Belum dicatat sebagai pengujian terpisah. | Perlu konfirmasi |
| 12 | Pembaruan dashboard pembeli dan penyedia | Dashboard kedua peran telah diperiksa. | Berhasil |
| 13 | Pemeriksaan navigasi keyboard dan fokus | Fokus dapat berpindah menggunakan Tab dan Shift + Tab. Tombol aman dapat diaktifkan menggunakan Enter. | Berhasil |
| 14 | Pemeriksaan formulir dan pesan validasi | Formulir kosong menampilkan peringatan.