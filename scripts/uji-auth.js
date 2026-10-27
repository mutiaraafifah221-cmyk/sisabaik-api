import assert from "node:assert/strict";
import { randomBytes } from "node:crypto";
import { pool } from "../src/db/pool.js";
import { verifikasiPenyedia } from "./verifikasi-penyedia.js";

const base = process.argv[2] ?? "http://127.0.0.1:3000";
const tujuan = new URL(base);

if (
  tujuan.protocol !== "http:" ||
  !["localhost", "127.0.0.1"].includes(tujuan.hostname) ||
  !["localhost", "127.0.0.1"].includes(process.env.PGHOST) ||
  process.env.PGDATABASE !== "sisabaik_dev"
) {
  throw new Error(
    "Uji ini hanya untuk HTTP dan database praktikum lokal."
  );
}

const password = randomBytes(18).toString("hex");
const marker = `Uji Auth ${Date.now()}-${randomBytes(3).toString("hex")}`;
const suffix = marker.replace(/[^a-z0-9-]/gi, "").toLowerCase();

const emailRina = `rina.${suffix}@example.test`;
const emailBudi = `budi.${suffix}@example.test`;
const emailSiti = `siti.${suffix}@example.test`;
const emailAndi = `andi.${suffix}@example.test`;

let checks = 0;

async function api(path, method = "GET", body, token) {
  const headers = {};

  if (body !== undefined) {
    headers["Content-Type"] = "application/json";
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(new URL(path, base), {
    method,
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  return {
    status: response.status,
    headers: response.headers,
    body: response.status === 204 ? null : await response.json(),
  };
}

function status(response, expected) {
  assert.equal(
    response.status,
    expected,
    `HTTP ${response.status}; code=${
      response.body?.error?.code ?? "-"
    }; expected=${expected}`
  );

  checks++;
}

async function login(email) {
  const response = await api("/api/auth/login", "POST", {
    email,
    kataSandi: password,
  });

  status(response, 200);
  return response.body.data;
}

try {
  status(await api("/api/pesanan"), 401);

  status(
    await api("/api/auth/saya", "GET", undefined, "rusak"),
    401
  );

  const database = await pool.query(
    "SELECT current_database() AS nama"
  );

  assert.equal(database.rows[0].nama, "sisabaik_dev");

  for (const [email, nama] of [
    [emailRina, "Rina Uji"],
    [emailBudi, "Budi Uji"],
  ]) {
    const registrasi = await api(
      "/api/auth/registrasi-penyedia",
      "POST",
      {
        namaLengkap: nama,
        email,
        kataSandi: password,
        namaUsaha: `Dapur ${nama}`,
        alamat: "Jl. Kampus No. 8, Padang",
        nomorTelepon: "+6281234567890",
      }
    );

    status(registrasi, 201);
    assert.equal(registrasi.body.data.peran, "penyedia");
    assert.equal(registrasi.body.data.statusVerifikasi, "menunggu");
    assert.equal(
      registrasi.body.data.namaUsaha,
      `Dapur ${nama}`
    );

    const sesi = await login(email);

    const pending = await api(
      "/api/penawaran/milik-saya",
      "GET",
      undefined,
      sesi.accessToken
    );

    status(pending, 403);
    assert.equal(
      pending.body.error.code,
      "PROVIDER_NOT_VERIFIED"
    );

    const dbAkun = (
      await pool.query(
        `SELECT id, kata_sandi_hash
         FROM pengguna
         WHERE email = $1`,
        [email]
      )
    ).rows[0];

    assert.equal(
      String(dbAkun?.id),
      String(registrasi.body.data.id),
      "Server HTTP dan script harus memakai database yang sama."
    );

    assert.ok(
      dbAkun?.kata_sandi_hash &&
      dbAkun.kata_sandi_hash !== password,
      "Kata sandi harus disimpan dalam bentuk hash."
    );

    await verifikasiPenyedia(pool, email);

    const fresh = await api(
      "/api/auth/saya",
      "GET",
      undefined,
      sesi.accessToken
    );

    status(fresh, 200);
    assert.equal(
      fresh.body.data.statusVerifikasi,
      "terverifikasi"
    );
  }

  const rina = await login(emailRina);
  const budi = await login(emailBudi);

  const daftar = {
    namaLengkap: "Pembeli Uji",
    email: emailSiti,
    kataSandi: password,
  };

  const registrasiSiti = await api(
    "/api/auth/registrasi",
    "POST",
    daftar
  );

  status(registrasiSiti, 201);
  assert.equal(registrasiSiti.body.data.peran, "pembeli");
  assert.ok(!("kata_sandi_hash" in registrasiSiti.body.data));

  status(
    await api(
      "/api/auth/registrasi",
      "POST",
      { ...daftar, peran: "penyedia" }
    ),
    400
  );

  status(
    await api("/api/auth/registrasi", "POST", daftar),
    409
  );

  status(
    await api("/api/auth/registrasi", "POST", {
      ...daftar,
      namaLengkap: "Andi Uji",
      email: emailAndi,
    }),
    201
  );

  const siti = await login(emailSiti);
  const siti2 = await login(emailSiti);
  const andi = await login(emailAndi);

  const kosong = await api(
    "/api/pesanan",
    "GET",
    undefined,
    andi.accessToken
  );

  status(kosong, 200);
  assert.equal(kosong.body.meta.jumlah, 0);

  const salah = await api("/api/auth/login", "POST", {
    email: daftar.email,
    kataSandi: "ini kata sandi yang salah",
  });

  const asing = await api("/api/auth/login", "POST", {
    email: `tidak.ada.${suffix}@example.test`,
    kataSandi: password,
  });

  status(salah, 401);
  status(asing, 401);
  assert.deepEqual(salah.body, asing.body);

  const payload = {
    nama: marker,
    kategori: "roti",
    hargaNormal: 10000,
    hargaPenawaran: 5000,
    stok: 5,
    satuan: "paket",
    status: "aktif",
    berakhirPada: new Date(
      Date.now() + 86400000
    ).toISOString(),
  };

  status(
    await api(
      "/api/penawaran",
      "POST",
      payload,
      siti.accessToken
    ),
    403
  );

  status(
    await api(
      "/api/penawaran",
      "POST",
      {
        ...payload,
        penyediaId: budi.pengguna.penyediaId,
      },
      rina.accessToken
    ),
    400
  );

  const buat = await api(
    "/api/penawaran",
    "POST",
    payload,
    rina.accessToken
  );

  status(buat, 201);

  const id = buat.body.data.id;

  assert.equal(
    String(buat.body.data.penyediaId),
    String(rina.pengguna.penyediaId)
  );

  status(
    await api(
      `/api/penawaran/${id}`,
      "PUT",
      payload,
      budi.accessToken
    ),
    404
  );

  status(
    await api(
      `/api/penawaran/${id}`,
      "DELETE",
      undefined,
      budi.accessToken
    ),
    404
  );

  const orderBody = {
    items: [{ penawaranId: id, kuantitas: 1 }],
  };

  status(
    await api(
      "/api/pesanan",
      "POST",
      orderBody,
      rina.accessToken
    ),
    403
  );

  status(
    await api(
      "/api/pesanan",
      "POST",
      {
        ...orderBody,
        emailPembeli: daftar.email,
      },
      siti.accessToken
    ),
    400
  );

  const order = await api(
    "/api/pesanan",
    "POST",
    orderBody,
    siti.accessToken
  );

  status(order, 201);

  const orderId = order.body.data.id;

  assert.equal(
    String(order.body.data.pembeliId),
    String(siti.pengguna.id)
  );

  assert.equal(Number(order.body.data.total), 5000);

  status(
    await api(
      `/api/pesanan/${orderId}`,
      "GET",
      undefined,
      andi.accessToken
    ),
    404
  );

  status(
    await api(
      `/api/pesanan/${orderId}`,
      "GET",
      undefined,
      budi.accessToken
    ),
    404
  );

  status(
    await api(
      `/api/pesanan/${orderId}`,
      "GET",
      undefined,
      rina.accessToken
    ),
    200
  );

  const list = await api(
    "/api/pesanan?limit=50",
    "GET",
    undefined,
    siti.accessToken
  );

  status(list, 200);

  assert.ok(
    list.body.data.every(
      (pesanan) =>
        String(pesanan.pembeliId) === String(siti.pengguna.id)
    )
  );

  const own = await api(
    "/api/penawaran/milik-saya?limit=50",
    "GET",
    undefined,
    budi.accessToken
  );

  status(own, 200);

  assert.ok(
    own.body.data.every(
      (penawaran) =>
        String(penawaran.penyediaId) ===
        String(budi.pengguna.penyediaId)
    )
  );

  status(
    await api(
      `/api/penawaran/${id}`,
      "PUT",
      {
        ...payload,
        stok: 4,
        hargaPenawaran: 6000,
      },
      rina.accessToken
    ),
    200
  );

  const snapshot = await api(
    `/api/pesanan/${orderId}`,
    "GET",
    undefined,
    siti.accessToken
  );

  status(snapshot, 200);
  assert.equal(
    Number(snapshot.body.data.items[0].hargaSatuan),
    5000
  );

  status(
    await api(
      `/api/penawaran/${id}`,
      "DELETE",
      undefined,
      rina.accessToken
    ),
    409
  );

  const draft = await api(
    "/api/penawaran",
    "POST",
    {
      ...payload,
      nama: `${marker} draft`,
      status: "draft",
    },
    rina.accessToken
  );

  status(draft, 201);

  status(
    await api(`/api/penawaran/${draft.body.data.id}`),
    404
  );

  status(
    await api(
      `/api/penawaran/${draft.body.data.id}`,
      "DELETE",
      undefined,
      rina.accessToken
    ),
    204
  );

  status(
    await api(
      "/api/auth/logout",
      "POST",
      {},
      siti.accessToken
    ),
    204
  );

  status(
    await api(
      "/api/auth/saya",
      "GET",
      undefined,
      siti.accessToken
    ),
    401
  );

  status(
    await api(
      "/api/auth/saya",
      "GET",
      undefined,
      siti2.accessToken
    ),
    401
  );

  console.log(
    `PASS: ${checks} pemeriksaan HTTP dan assertion kepemilikan/snapshot.`
  );

  console.log(
    `Bukti: penawaran ${id}, pesanan ${orderId}; fixture dipertahankan.`
  );

  console.log(
    "Empat akun uji dibuat dengan sandi acak yang tidak dicetak. " +
    "Gunakan akun pendaftaran manual untuk pengujian browser."
  );
} catch (error) {
  console.error("FAIL:", error.message);
  process.exitCode = 1;
} finally {
  await pool.end();
}