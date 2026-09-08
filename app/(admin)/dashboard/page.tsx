"use client";

import "./dashboard.css";
import { useState } from "react";

type Periode = "harian" | "mingguan" | "bulanan" | "tahunan";

export default function Dashboard() {
  const [periode, setPeriode] = useState<Periode>("bulanan");

  // =========================
  // KALENDER
  // =========================

  const [tanggalDipilih, setTanggalDipilih] = useState("2026-09");
  const [animasiDiagram, setAnimasiDiagram] = useState(false);
  const tahunDipilih = Number(tanggalDipilih.split("-")[0]);
  const bulanDipilih = Number(tanggalDipilih.split("-")[1]);

  // =========================
  // DATA DUMMY HARIAN
  // =========================

  const dataHarian = [
    { label: "Sen", jumlah: 12 },
    { label: "Sel", jumlah: 18 },
    { label: "Rab", jumlah: 15 },
    { label: "Kam", jumlah: 22 },
    { label: "Jum", jumlah: 28 },
    { label: "Sab", jumlah: 35 },
    { label: "Min", jumlah: 25 },
  ];


  // =========================
  // DATA DUMMY MINGGUAN
  // =========================

 const dataMingguan = [
  { label: "M1", jumlah: 74 },
  { label: "M2", jumlah: 75 },
  { label: "M3", jumlah: 84 },
  { label: "M4", jumlah: 80 },
  { label: "M5", jumlah: 25 },
];

  // =========================
  // DATA DUMMY BULANAN
  // =========================

  const semuaBulan = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];

  const dataBulanan = [
  { label: "M1", jumlah: 74 },
  { label: "M2", jumlah: 75 },
  { label: "M3", jumlah: 84 },
  { label: "M4", jumlah: 80 },
  { label: "M5", jumlah: 25 },
];

  // =========================
  // DATA DUMMY TAHUNAN
  // =========================

  const dataTahunan = [
  { label: "Jan", jumlah: 45 },
  { label: "Feb", jumlah: 52 },
  { label: "Mar", jumlah: 48 },
  { label: "Apr", jumlah: 61 },
  { label: "Mei", jumlah: 55 },
  { label: "Jun", jumlah: 70 },
  { label: "Jul", jumlah: 64 },
  { label: "Agu", jumlah: 72 },
  { label: "Sep", jumlah: 80 },
  { label: "Okt", jumlah: 76 },
  { label: "Nov", jumlah: 88 },
  { label: "Des", jumlah: 95 },
];

  // =========================
  // DATA DIAGRAM
  // =========================

  const dataDiagram =
  periode === "harian"
      ? dataHarian
      :periode === "mingguan"
      ? dataMingguan
      : periode === "bulanan"
      ? dataBulanan
      : dataTahunan;

  // =========================
  // NILAI TERBESAR
  // =========================

  const nilaiTerbesar = Math.max(
    ...dataDiagram.map((item) => item.jumlah)
  );

  // =========================
  // DATA DUMMY PESANAN
  // =========================

  const pesananTerbaru = [
    {
      id: "P001",
      customer: "Budi",
      produk: "Nugget",
      total: "Rp50.000",
      status: "Selesai",
    },
    {
      id: "P002",
      customer: "Andi",
      produk: "Sosis",
      total: "Rp75.000",
      status: "Diproses",
    },
  ];

  // =========================
  // DATA DUMMY PRODUK
  // =========================

  const produkTerlaris = [
    {
      nama: "Nugget",
      jumlah: 20,
    },
    {
      nama: "Sosis",
      jumlah: 15,
    },
    {
      nama: "Bakso",
      jumlah: 10,
    },
  ];

  return (
    <div className="halaman-dashboard">

      {/* =========================
          JUDUL
      ========================= */}

      <div className="judul-dashboard">
        <h1>Dashboard</h1>
      </div>


      {/* =========================
          SUMMARY CARD
      ========================= */}

      <div className="container-card-dashboard">

        <div className="card-dashboard">
          <span className="judul-card">
            Total Pesanan
          </span>

          <span className="nilai-card">
            125
          </span>
        </div>


        <div className="card-dashboard">
          <span className="judul-card">
            Pesanan Masuk
          </span>

          <span className="nilai-card">
            12
          </span>
        </div>


        <div className="card-dashboard">
          <span className="judul-card">
            Total Produk
          </span>

          <span className="nilai-card">
            35
          </span>
        </div>


        <div className="card-dashboard">
          <span className="judul-card">
            Pendapatan
          </span>

          <span className="nilai-card">
            Rp5.200.000
          </span>
        </div>

      </div>


      {/* =========================
          DIAGRAM PESANAN
      ========================= */}

      <div className="container-diagram">

        <div className="header-diagram">

          <div>
            <h2>
              Jumlah Pesanan
            </h2>

            <p>
              Perkembangan jumlah pesanan
            </p>
          </div>


          {/* =========================
              KONTROL PERIODE
          ========================= */}

          <div className="kontrol-diagram">

            {/* KALENDER */}

            <div className="kalender-dashboard">

              <input
                type="month"
                value={tanggalDipilih}
                min="2026-09"
                max="2028-12"
                onChange={(e) => {
                  const bulanBaru = e.target.value;

                  setAnimasiDiagram(true);

                  setTimeout(() => {
                    setTanggalDipilih(bulanBaru);
                    setAnimasiDiagram(false);
                  }, 300);
                }}
              />

            </div>


            {/* TOMBOL PERIODE */}

            <div className="tombol-periode">
              
              <button
                className={
                  periode === "harian"
                    ? "aktif"
                    : ""
                }
                onClick={() => {
                  setAnimasiDiagram(true);

                  setTimeout(() => {
                    setPeriode("harian");
                    setAnimasiDiagram(false);
                  }, 300);
                }}
              >
                Harian
              </button>

              <button
                className={
                  periode === "mingguan"
                    ? "aktif"
                    : ""
                }
               onClick={() => {
                setAnimasiDiagram(true);

                setTimeout(() => {
                  setPeriode("mingguan");
                  setAnimasiDiagram(false);
                }, 300);
              }}
              >
                Mingguan
              </button>


              <button
                className={
                  periode === "bulanan"
                    ? "aktif"
                    : ""
                }
               onClick={() => {
                  setAnimasiDiagram(true);

                  setTimeout(() => {
                    setPeriode("bulanan");
                    setAnimasiDiagram(false);
                  }, 300);
                }}
              >
                Bulanan
              </button>


              <button
                className={
                  periode === "tahunan"
                    ? "aktif"
                    : ""
                }
                onClick={() => {
                setAnimasiDiagram(true);

                setTimeout(() => {
                  setPeriode("tahunan");
                  setAnimasiDiagram(false);
                }, 300);
              }}
              >
                Tahunan
              </button>

            </div>

          </div>

        </div>


        {/* =========================
            INFO PERIODE
        ========================= */}

        <div className="info-periode">

          {periode === "harian" && (
            <span>
              Data harian -{" "}
              {semuaBulan[bulanDipilih - 1]}{" "}
              {tahunDipilih}
            </span>
          )}

          {periode === "mingguan" && (
            <span>
              Data mingguan -{" "}
              {semuaBulan[bulanDipilih - 1]}{" "}
              {tahunDipilih}
            </span>
          )}

          {periode === "bulanan" && (
            <span>
              Data bulanan - Tahun {tahunDipilih}
            </span>
          )}

          {periode === "tahunan" && (
            <span>
              Data tahunan - 2026 sampai 2028
            </span>
          )}

        </div>


        {/* =========================
            DIAGRAM BATANG
        ========================= */}

        <div className={`diagram-batang ${
            animasiDiagram ? "animasi-mingguan" : ""
          }`}>

          <div className="batang-container">

            {dataDiagram.map(
              (item, index) => (

                <div
                  className="batang-item"
                  key={index}
                >

                  <span className="nilai-batang">
                    {item.jumlah}
                  </span>


                  <div
                    className="batang"
                    style={{
                      height: `${
                        (item.jumlah /
                          nilaiTerbesar) *
                        200
                      }px`,
                    }}
                  ></div>


                  <span className="label-batang">
                    {item.label}
                  </span>

                </div>

              )
            )}

          </div>

        </div>

      </div>


      {/* =========================
          BAGIAN BAWAH
      ========================= */}

      <div className="dashboard-bawah">


        {/* =========================
            PESANAN TERBARU
        ========================= */}

        <div className="container-pesanan-terbaru">

          <div className="header-section">

            <h2>
              Pesanan Terbaru
            </h2>

          </div>


          <div className="tabel-dashboard">

            <table>

              <thead>

                <tr>
                  <th>ID</th>
                  <th>Customer</th>
                  <th>Produk</th>
                  <th>Total</th>
                  <th>Status</th>
                </tr>

              </thead>


              <tbody>

                {pesananTerbaru.map(
                  (item) => (

                    <tr key={item.id}>

                      <td>
                        {item.id}
                      </td>

                      <td>
                        {item.customer}
                      </td>

                      <td>
                        {item.produk}
                      </td>

                      <td>
                        {item.total}
                      </td>

                      <td>

                        <span
                          className={
                            item.status ===
                            "Selesai"
                              ? "status-selesai"
                              : "status-diproses"
                          }
                        >
                          {item.status}
                        </span>

                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>

        </div>


        {/* =========================
            PRODUK TERLARIS
        ========================= */}

        <div className="container-produk-terlaris">

          <div className="header-section">

            <h2>
              Produk Terlaris
            </h2>

          </div>


          <div className="list-produk-terlaris">

            {produkTerlaris.map(
              (item, index) => (

                <div
                  className="item-produk"
                  key={index}
                >

                  <div className="info-produk">

                    <span className="ranking-produk">
                      {index + 1}
                    </span>

                    <span className="nama-produk-dashboard">
                      {item.nama}
                    </span>

                  </div>


                  <span className="jumlah-terjual">
                    {item.jumlah} terjual
                  </span>

                </div>

              )
            )}

          </div>

        </div>

      </div>

    </div>
  );
}