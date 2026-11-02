# Hasil Pengujian Chapter 9 — SisaBaik Vue Components

## 1. Lingkungan Pengujian

- Aplikasi: SisaBaik
- Teknologi: Vue, Vite, Node.js, dan npm
- Branch Git: `feature/vue-components`
- Versi Node.js: `v24.21.0`
- Versi npm: `11.19.0`
- Server pengembangan: `http://127.0.0.1:5173/`
- Server preview: `http://127.0.0.1:4173/`

## 2. Hasil Pengujian

| No. | Pengujian | Hasil |
|---|---|---|
| 1 | Menampilkan katalog penawaran | Berhasil; tiga kartu penawaran ditampilkan. |
| 2 | Pencarian penawaran | Berhasil; hasil katalog menyesuaikan kata kunci pencarian. |
| 3 | Filter kategori | Berhasil; katalog menampilkan penawaran sesuai kategori yang dipilih. |
| 4 | Kondisi katalog kosong | Berhasil; tampilan kondisi kosong dapat diperiksa. |
| 5 | Ringkasan pilihan pembeli | Berhasil; ringkasan diperbarui sesuai penawaran yang dipilih. |
| 6 | Tampilan penyedia | Berhasil; daftar penawaran dan ringkasan penyedia ditampilkan. |
| 7 | Validasi formulir kosong | Berhasil; pesan validasi muncul dan penawaran tidak ditambahkan. |
| 8 | Validasi harga penawaran | Berhasil; penawaran ditolak ketika harga penawaran melebihi harga normal. |
| 9 | Penambahan penawaran valid | Berhasil; penawaran baru ditambahkan ke tampilan. |
| 10 | Perpindahan tampilan pembeli dan penyedia | Berhasil. |
| 11 | Penyegaran halaman | Berhasil; data kembali ke data awal karena fixture disimpan di memori. |
| 12 | Batas waktu penawaran | Berhasil; katalog diperbarui setelah penawaran melewati batas waktu yang diuji. |
| 13 | Responsivitas | Berhasil; tampilan diperiksa pada lebar 375, 768, dan 1280 piksel. |
| 14 | Navigasi papan ketik dan fokus | Berhasil; navigasi dan fokus elemen diperiksa. |
| 15 | Build produksi | Berhasil; perintah `npm run build` selesai tanpa kesalahan. |
| 16 | Preview hasil build | Berhasil; katalog, filter, dan formulir penyedia dapat digunakan. |

## 3. Aliran Props dan Emits

Komponen Vue menggunakan props untuk menerima data atau nilai dari komponen induk. Emits digunakan untuk menyampaikan kejadian atau perubahan dari komponen anak kepada komponen induk.

Aliran data tersebut mendukung pemisahan tampilan dan pengelolaan interaksi antarkomponen. Nama props dan emits yang digunakan perlu disesuaikan dengan implementasi aktual pada berkas komponen Chapter 9.

## 4. Perhitungan Ringkasan Pembeli dan Penyedia

Ringkasan pembeli menampilkan jumlah penawaran, total unit yang tersedia, dan jumlah penyedia berdasarkan data penawaran yang ditampilkan.

Ringkasan penyedia menampilkan jumlah penawaran, jumlah penawaran yang masih tersedia, dan total unit berdasarkan data penawaran penyedia.

Data penawaran pada modul ini masih menggunakan fixture di memori. Penambahan penawaran selama pengujian tidak tersimpan secara permanen dan akan kembali ke data awal setelah halaman dimuat ulang.

## 5. Integrasi dengan Backend

Pada modul ini, browser belum melakukan pemanggilan API. Data katalog dan interaksi menggunakan fixture di memori.

Backend Modul 8 tetap memiliki fitur pendaftaran mandiri, verifikasi penyedia, autentikasi, dan otorisasi. Integrasi frontend dengan backend direncanakan pada pertemuan 11.

## 6. Bukti Pengujian

Lampirkan screenshot berikut:

1. Katalog penawaran.
2. Kondisi katalog kosong.
3. Formulir dengan input tidak valid.
4. Formulir dengan input valid.
5. Tampilan mobile.
6. Terminal saat menjalankan `npm run build`.

## 7. Kesimpulan

Berdasarkan pengujian yang dilakukan, komponen Vue SisaBaik dapat menampilkan katalog, menjalankan pencarian dan filter, mengelola interaksi pembeli dan penyedia, memvalidasi formulir, serta menampilkan hasil build produksi.

Data masih menggunakan fixture di memori dan belum terintegrasi dengan API backend. Seluruh hasil pengujian didasarkan pada perilaku aplikasi yang diamati selama pelaksanaan Chapter 9.

## 8. Informasi Pengujian

- Penguji: [Isi nama penguji]
- Commit: [Isi hash commit setelah perubahan disimpan]
