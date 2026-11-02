# SisaBaik API

SisaBaik adalah proyek pengembangan web pada mata kuliah Pengembangan Web. Pada Chapter 7, proyek ini dikembangkan menggunakan Node.js, Express, dan PostgreSQL untuk mengelola data penawaran makanan berlebih dan pemesanan melalui REST API. Pengembangan ini melanjutkan proyek sebelumnya dengan menghubungkan aplikasi ke basis data dan menambahkan validasi serta pengelolaan transaksi pemesanan.

## Capaian Chapter 7

- Menghubungkan aplikasi dengan PostgreSQL dari Chapter 6.
- Mengembangkan REST API untuk mengelola penawaran dan pemesanan.
- Menerapkan validasi data pada request.
- Menggunakan `emailPembeli` pada request pemesanan sebagai pengganti `namaPemesan`.
- Menggunakan transaksi database untuk menjaga konsistensi data dan stok.
- Menangani respons dan kesalahan HTTP.
- Menguji fungsi API dan pemesanan saat stok diakses secara bersamaan.

## Bagian Proyek

- `server.js`: menjalankan server aplikasi.
- `src/app.js`: mengatur aplikasi Express.
- `src/routes/`: mengatur rute API.
- `src/controllers/`: menangani request dan response.
- `src/services/`: menangani proses bisnis aplikasi.
- `src/repositories/`: mengelola akses data.
- `src/db/`: mengatur koneksi dan transaksi database.
- `src/lib/`: berisi fungsi pendukung aplikasi.
- `public/`: berisi halaman pengujian API.
- `scripts/`: berisi script pengujian API dan konkurensi.
- `docs/`: berisi dokumentasi API dan hasil pengujian.

## Menjalankan Proyek

Pastikan Node.js, npm, dan PostgreSQL sudah tersedia. Database `sisabaik_dev` dari Chapter 6 harus sudah disiapkan dan konfigurasi koneksinya disesuaikan dengan pengaturan lokal.

Buka terminal pada folder proyek, lalu jalankan pemeriksaan koneksi database:

```bash
npm run db:check -- 0
```

Untuk menjalankan server dan script pengujian, gunakan perintah yang tersedia pada `package.json`.

## Dokumentasi dan Pengujian

Dokumentasi endpoint, format request, parameter query, contoh response, dan status error dicatat dalam `docs/API.md`. Hasil pengujian API dan konkurensi dicatat dalam `docs/hasil-uji-chapter7.md`.

ID yang diterima melalui request API diperlakukan sebagai string dan divalidasi sebelum diproses. Satu pesanan hanya dapat berisi penawaran dari satu penyedia.

## Batasan Aplikasi

Aplikasi masih digunakan untuk pengembangan dan pengujian secara lokal. Autentikasi pengguna belum diterapkan sehingga aplikasi belum ditujukan untuk penggunaan produksi.
## Chapter 9 — Frontend Vue

Frontend SisaBaik dikembangkan menggunakan Vue 3 dan Vite. Frontend berada di folder `frontend/` dan menggunakan komponen untuk menampilkan katalog penawaran serta formulir penyedia.

### Persyaratan dan Instalasi

Gunakan Node.js versi 22 atau lebih baru. Versi npm mengikuti instalasi Node.js yang digunakan.

Untuk memasang dependensi frontend, jalankan perintah berikut dari folder `frontend/`:

```bash
npm install
```

Jika ingin memasang dependensi berdasarkan lockfile, gunakan:

```bash
npm ci
```

### Menjalankan Frontend

Jalankan perintah berikut dari folder `frontend/` sesuai kebutuhan:

```bash
npm run dev
npm run build
npm run preview
```

Perintah `npm run dev` menjalankan server pengembangan. `npm run build` membuat hasil build produksi di folder `frontend/dist/`, sedangkan `npm run preview` menyajikan hasil build untuk diperiksa melalui browser.

### Aset dan Data Frontend

Aset ilustrasi atau identitas merek menggunakan file SVG yang tersedia pada folder aset frontend.

Pada Chapter 9, data penawaran masih menggunakan fixture latihan di memori. Perubahan data melalui formulir tidak disimpan secara permanen dan dapat hilang setelah halaman dimuat ulang.

Browser pada modul ini belum memanggil REST API backend. Integrasi frontend dengan backend akan dilakukan pada pertemuan 11.

Backend Modul 8 tetap memiliki pendaftaran mandiri, verifikasi penyedia, autentikasi, dan otorisasi.