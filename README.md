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

## Integrasi Chapter 10

### 1. Lingkungan Pengembangan

- Node.js: v24.21.0
- Backend: Express
- Frontend: Vue 3 dan Vite
- Database: PostgreSQL
- Port backend: 3000
- Port frontend: 5173
- Port preview: 4173

### 2. Perintah Menjalankan Aplikasi

**Mode pengembangan backend:**

```bash
npm run dev
```

**Mode pengembangan frontend:**

```bash
npm --prefix frontend run dev
```

**Build frontend:**

```bash
npm run build
```

**Preview hasil build frontend:**

```bash
npm --prefix frontend run preview
```

**Menjalankan hasil build secara lokal:**

```bash
npm run start:local
```

### 3. Konfigurasi Proxy API

Pada mode pengembangan, frontend dijalankan menggunakan Vite pada port 5173, sedangkan backend berjalan pada port 3000.

Permintaan dari frontend dengan awalan `/api` diteruskan ke backend melalui konfigurasi proxy Vite. Konfigurasi ini memungkinkan frontend berkomunikasi dengan backend tanpa harus mengubah alamat API pada setiap proses pengembangan.

Pada mode preview, permintaan `/api` juga diteruskan ke backend agar fitur aplikasi tetap dapat diuji.

### 4. Pendaftaran Akun

Pengguna dapat membuat akun melalui halaman pendaftaran pada aplikasi SisaBaik. Pendaftaran dilakukan dengan mengisi data yang diminta sesuai formulir. Akun yang berhasil didaftarkan dapat digunakan untuk masuk ke aplikasi sesuai peran pengguna.

Aplikasi menyediakan peran pembeli dan penyedia usaha. Setiap peran memiliki hak akses dan fitur yang berbeda sesuai fungsinya.

### 5. Aturan Peninjauan Usaha

Akun penyedia usaha harus melalui proses peninjauan sebelum dapat menggunakan seluruh fitur pengelolaan penawaran. Proses ini bertujuan memastikan informasi usaha telah diisi sesuai ketentuan aplikasi.

Status peninjauan menentukan akses penyedia terhadap fitur pengelolaan penawaran dan transaksi.

### 6. Payload Foto, Versi, dan Aksi

Pengelolaan penawaran mendukung pengiriman data foto dan informasi versi. Data tersebut digunakan untuk mendukung proses penambahan dan perubahan penawaran.

Setiap perubahan penawaran dilakukan melalui aksi yang sesuai dengan hak akses pengguna. Backend melakukan validasi terhadap data yang diterima sebelum perubahan disimpan ke database.
### 7. Reservasi dan Pemulihan Stok

Ketika pembeli membuat pesanan, stok penawaran akan disesuaikan dengan jumlah produk yang dipesan. Sistem memastikan jumlah pesanan tidak melebihi stok yang tersedia.

Jika pesanan dibatalkan sebelum transaksi selesai, stok yang telah direservasi akan dikembalikan. Dengan demikian, stok dapat tersedia kembali untuk pembeli lain.
### 8. Pembayaran di Tempat

SisaBaik menerapkan mekanisme pembayaran di tempat saat pembeli mengambil pesanan dari penyedia usaha.

Penyedia usaha dapat mencatat penyelesaian pembayaran setelah pembeli melakukan pengambilan pesanan. Proses ini memerlukan konfirmasi pengambilan dan pembayaran sebelum pesanan dinyatakan selesai.

Aplikasi belum menggunakan payment gateway sehingga pencatatan pembayaran dilakukan secara manual melalui sistem.
### 9. Definisi Metrik Dashboard

Dashboard pembeli menampilkan ringkasan aktivitas transaksi dengan definisi metrik sebagai berikut:

- Total pengeluaran: akumulasi nilai transaksi yang telah selesai dan dibayar.
- Total penghematan: selisih antara harga normal dan harga penawaran dikalikan jumlah produk yang berhasil dibeli.
- Total unit dibeli: jumlah produk dari transaksi yang telah selesai.

Perhitungan metrik didasarkan pada data transaksi yang tersimpan di database.
### 10. Hasil Pengujian dan Perbaikan

Pengujian integrasi Chapter 10 dilakukan pada fitur utama aplikasi SisaBaik. Hasil pengujian yang telah dilakukan meliputi:

- Pendaftaran dan login akun pengguna berhasil dilakukan.
- Penambahan dan perubahan penawaran berhasil dilakukan.
- Foto penawaran berhasil diunggah.
- Katalog menampilkan penawaran dan mendukung penyaringan kategori serta pembatasan jumlah data.
- Pembeli berhasil membuat pesanan dan membatalkan pesanan.
- Penyedia usaha berhasil menerima pesanan dan mengubah status pesanan menjadi siap diambil.
- Konfirmasi pengambilan dan pembayaran berhasil dilakukan.
- Dashboard pembeli menampilkan perubahan total pengeluaran, penghematan, dan unit yang dibeli setelah transaksi selesai.
- Hasil build frontend berhasil dijalankan bersama backend melalui perintah `npm run start:local`.

Dalam proses pengujian, ditemukan kendala validasi data foto ketika penawaran dikirim dengan nilai foto null. Validasi kemudian disesuaikan agar data foto dan versi dapat diproses sesuai kebutuhan aplikasi.

### 11. Batasan Aplikasi

Dalam implementasi Chapter 10, masih terdapat beberapa keterbatasan yang belum dikembangkan, yaitu:

- Sesi pengguna dapat hilang ketika halaman di-refresh.
- Aplikasi belum menggunakan payment gateway.
- Fitur reset kata sandi belum tersedia.
- Verifikasi email belum tersedia.
- Sistem belum menggunakan idempotency key untuk mencegah pemrosesan permintaan transaksi berulang.
- Pembaruan data secara realtime belum tersedia.
- Penghematan biaya penjual belum dihitung dalam dashboard.

Keterbatasan tersebut menjadi bagian yang dapat dikembangkan pada tahap selanjutnya.