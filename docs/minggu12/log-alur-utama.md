\# Log Alur Utama – SisaBaik



\## 1. Informasi Pengujian



\- Aplikasi: SisaBaik

\- Lingkungan: Deployment Render

\- URL: https://sisabaik-api-7wty.onrender.com

\- Tanggal pengujian: 17 November 2026



\## 2. Catatan Alur Pengujian



| No. | Alur | Hasil Pengamatan |

|---|---|---|

| 1 | Pendaftaran akun pembeli | Pendaftaran akun berhasil dilakukan. |

| 2 | Pendaftaran akun penyedia | Pendaftaran akun berhasil dilakukan. |

| 3 | Verifikasi profil usaha | Profil usaha berhasil diverifikasi. |

| 4 | Pengelolaan penawaran | Penyedia berhasil membuat dan mengubah penawaran. |

| 5 | Pembelian penawaran | Pembeli berhasil menyelesaikan proses pembelian. |

| 6 | Penawaran makanan gratis | Alur pembelian penawaran gratis berhasil dilakukan. |

| 7 | Dashboard | Dashboard pembeli dan penyedia berhasil diperiksa. |



\## 3. Penyaringan Informasi Sensitif



Catatan ini tidak menyertakan kata sandi, token autentikasi, alamat email akun pengujian, maupun informasi rahasia lainnya.



\## 4. Batasan Bukti



Dokumen ini merupakan rekap manual berdasarkan aktivitas pengujian yang telah dilakukan, bukan keluaran log teknis otomatis. Hasil yang tidak tercatat secara terpisah tidak dinyatakan sebagai bukti keberhasilan.

## 5. Log Aktual Deployment dan Pengujian Alur Utama SisaBaik
2026-11-17T07:14:56.275998091Z GET /api/dashboard 200 978ms

2026-11-17T07:15:04.399189346Z GET /api/pesanan 200 13ms

2026-11-17T07:15:09.535702001Z GET /api/pesanan 200 39ms

2026-11-17T07:15:12.651269183Z GET /api/pesanan 401 17ms

2026-11-17T07:15:18.349774004Z POST /api/auth/login 200 2042ms

2026-11-17T07:15:18.632192705Z GET /api/penawaran/milik-saya 200 20ms

2026-11-17T07:15:24.527579756Z GET /api/dashboard 200 13ms

2026-11-17T07:15:30.710163539Z GET /api/pesanan 200 10ms

2026-11-17T07:15:33.973415351Z GET /api/pesanan 200 11ms

2026-11-17T07:15:36.011929589Z GET /api/pesanan 200 10ms

2026-11-17T07:15:41.410191682Z GET /api/pesanan/1 200 20ms

2026-11-17T07:15:47.730862961Z GET /api/pesanan 200 10ms

2026-11-17T07:22:04.953200354Z GET /healthz 200 0ms

2026-11-17T07:22:05.779611335Z GET /api/health 200 565ms

2026-11-17T07:22:05.948071138Z GET / 200 6ms

2026-11-17T07:22:06.143882773Z GET /assets/index-CVfIAApy.js 200 2ms

2026-11-17T07:22:07.117019859Z GET /assets/Ikon-CrM\_NG7Q.js 200 2ms

2026-11-17T07:22:07.267144358Z GET /assets/food-bowl-DEzZdYsG.js 200 1ms

2026-11-17T07:22:07.381082819Z GET /assets/index-CsP8TOuW.css 200 2ms

2026-11-17T07:22:07.477609547Z GET /api/tidak-ada 404 0ms

2026-11-17T07:22:07.84295442Z GET /api/auth/saya 401 0ms

2026-11-17T07:22:07.986580775Z GET /api/dashboard 401 0ms

2026-11-17T07:22:08.315030345Z GET /api/pesanan 401 1ms

2026-11-17T07:22:08.536249781Z GET /.env 404 1ms

2026-11-17T07:22:08.741407333Z GET /server.js 404 1ms

2026-11-17T07:29:27.5404926Z GET /api/penawaran 200 1156ms

2026-11-17T07:29:30.186872319Z GET /api/penawaran 200 9ms

2026-11-17T07:30:31.774478117Z GET /api/health 200 32ms

2026-11-17T07:53:36.69559245Z ==> Deploying...

2026-11-17T07:53:36.89032016Z ==> Setting WEB\_CONCURRENCY=1 by default, based on available CPUs in the instance

2026-11-17T07:53:48.68781892Z ==> Running 'npm start'

2026-11-17T07:53:49.87672573Z 

2026-11-17T07:53:49.876762031Z > sisabaik-api@1.6.0 start

2026-11-17T07:53:49.876767681Z > node server.js

2026-11-17T07:53:49.876770331Z 

2026-11-17T07:53:53.979424819Z SisaBaik berjalan pada 0.0.0.0:10000

2026-11-17T07:53:54.292460712Z HEAD / 200 4ms

2026-11-17T07:53:57.632265891Z ==> Your service is live 🎉

2026-11-17T07:53:57.640123306Z GET / 200 3ms

2026-11-17T07:53:57.833724062Z ==> 

2026-11-17T07:53:57.840972095Z ==> ///////////////////////////////////////////////////////////

2026-11-17T07:53:57.845582099Z ==> 

2026-11-17T07:53:57.85092119Z ==> Available at your primary URL https://sisabaik-api-7wty.onrender.com

2026-11-17T07:53:57.857234693Z ==> 

2026-11-17T07:53:57.861035339Z ==> ///////////////////////////////////////////////////////////

2026-11-17T07:54:56.688879565Z GET / 200 1ms

2026-11-17T07:54:59.002167419Z GET /api/penawaran 200 1570ms

2026-11-17T07:55:03.834268102Z GET /api/penawaran 200 11ms

2026-11-17T07:55:18.186323486Z POST /api/auth/login 200 2167ms

2026-11-17T07:55:18.420120397Z GET /api/penawaran/milik-saya 200 16ms

2026-11-17T07:55:23.658063122Z POST /api/auth/logout 204 15ms

2026-11-17T07:55:29.879573695Z POST /api/auth/login 200 2133ms

2026-11-17T07:55:30.393515747Z GET /api/penawaran 200 10ms

2026-11-17T07:58:56.645468855Z ==> Detected service running on port 10000

2026-11-17T07:58:57.000043603Z ==> Docs on specifying a port: https://render.com/docs/web-services#port-binding

2026-11-17T08:05:16.51086271Z GET / 200 2ms

2026-11-17T08:05:18.338098904Z GET /api/penawaran 200 1012ms

2026-11-17T08:05:23.985881164Z POST /api/auth/login 200 2077ms

2026-11-17T08:05:24.430327737Z GET /api/penawaran 200 14ms

2026-11-17T08:05:27.295315717Z GET /api/dashboard 200 58ms

