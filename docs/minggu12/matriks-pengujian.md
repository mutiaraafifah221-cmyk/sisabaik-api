\# Matriks Pengujian Chapter 11 – SisaBaik



\## 1. Lingkungan Pengujian



\- Aplikasi: SisaBaik

\- Teknologi: Node.js, Express, Vue, Vite, dan PostgreSQL

\- Branch deployment: `feature/fullstack-vue`

\- URL publik: https://sisabaik-api-7wty.onrender.com

\- Server: Render

\- Database: Neon



\## 2. Matriks Hasil Pengujian



| No. | Pengujian | Hasil Aktual | Status |

|---|---|---|---|

| 1 | Pemeriksaan deployment melalui skrip `deploy:test` | Sepuluh pemeriksaan deployment berhasil (PASS). | Berhasil |

| 2 | Pemeriksaan endpoint kesehatan `/healthz` | Termasuk dalam pemeriksaan deployment. | Berhasil |

| 3 | Pendaftaran akun pembeli | Alur pendaftaran telah dilakukan. | Berhasil |

| 4 | Pendaftaran akun penyedia | Alur pendaftaran telah dilakukan. | Berhasil |

| 5 | Verifikasi profil usaha | Profil usaha berhasil diverifikasi. | Berhasil |

| 6 | Pembuatan penawaran oleh penyedia | Penawaran berhasil dibuat. | Berhasil |

| 7 | Pengubahan penawaran | Penawaran berhasil diperbarui. | Berhasil |

| 8 | Pembelian penawaran oleh pembeli | Pembelian berhasil dilakukan. | Berhasil |

| 9 | Pengujian penawaran makanan gratis | Alur pembelian penawaran gratis berhasil dilakukan. | Berhasil |

| 10 | Pembatalan pesanan dan pemulihan stok | Belum dicatat sebagai pengujian terpisah pada dokumen ini. | Perlu konfirmasi |

| 11 | Konfirmasi penyedia dan pengambilan pesanan | Belum dicatat sebagai pengujian terpisah pada dokumen ini. | Perlu konfirmasi |

| 12 | Pembaruan dashboard pembeli dan penyedia | Dashboard kedua peran telah diperiksa. | Berhasil |

| 13 | Pemeriksaan navigasi keyboard dan fokus | Belum dilakukan pengujian ulang khusus Chapter 11. | Belum diuji |

| 14 | Pemeriksaan formulir dan pesan validasi | Belum dilakukan pengujian ulang khusus Chapter 11. | Belum diuji |

| 15 | Pemeriksaan responsivitas | Belum dilakukan pengujian ulang khusus Chapter 11. | Belum diuji |

| 16 | Audit aksesibilitas Lighthouse | Tidak dilakukan. | Belum diuji |

| 17 | Pengukuran performa sebelum dan sesudah | Tidak dilakukan. | Belum diuji |



\## 3. Kegagalan dan Perbaikan



Hasil pemeriksaan deployment menunjukkan sepuluh pemeriksaan berhasil. Pemeriksaan keamanan dependensi melalui `npm audit` menemukan empat kerentanan, yaitu satu kategori moderate dan tiga kategori high. Simulasi `npm audit fix --dry-run` menunjukkan beberapa pembaruan yang dapat dilakukan, tetapi belum diterapkan.



\## 4. Catatan Pengujian



Pengujian dilakukan pada layanan publik SisaBaik yang telah berhasil di-deploy. Hasil pengujian dicatat berdasarkan aktivitas yang telah dilakukan. Pemeriksaan yang belum dilakukan tetap ditandai sebagai belum diuji dan tidak dianggap berhasil.





