"use client";

import "./laporankeuangan.css";
import { useState } from "react";

type Periode = "harian" | "mingguan" | "bulanan" | "tahunan";

type Transaksi = {
  tanggal: string;
  keterangan: string;
  pendapatan: number;
  pengeluaran: number;
};

type DataDiagram = {
  label: string;
  tanggal?: string;
  pendapatan: number;
  pengeluaran: number;
};

export default function LaporanKeuangan() {
  // =========================
  // PERIODE
  // =========================

  const [periode, setPeriode] =
    useState<Periode>("harian");

  const [tanggalDipilih, setTanggalDipilih] =
    useState("2026-08-20");

  const [bulanDipilih, setBulanDipilih] =
    useState(8);

  const [tahunDipilih, setTahunDipilih] =
    useState(2026);

  // =========================
  // NAMA BULAN
  // =========================

  const semuaBulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  // =========================
  // DATA DUMMY TRANSAKSI
  // =========================

  const dataTransaksi: Transaksi[] = [
    {
      tanggal: "2026-08-01",
      keterangan: "Pesanan P001 - Nugget",
      pendapatan: 50000,
      pengeluaran: 0,
    },

    {
      tanggal: "2026-08-02",
      keterangan: "Pesanan P002 - Sosis",
      pendapatan: 75000,
      pengeluaran: 0,
    },

    {
      tanggal: "2026-08-03",
      keterangan: "Pembelian bahan baku",
      pendapatan: 0,
      pengeluaran: 30000,
    },

    {
      tanggal: "2026-08-05",
      keterangan: "Pesanan P003 - Bakso",
      pendapatan: 100000,
      pengeluaran: 0,
    },

    {
      tanggal: "2026-08-07",
      keterangan: "Pesanan P004 - Nugget",
      pendapatan: 125000,
      pengeluaran: 0,
    },

    {
      tanggal: "2026-08-09",
      keterangan: "Pembelian bahan baku",
      pendapatan: 0,
      pengeluaran: 50000,
    },

    {
      tanggal: "2026-08-10",
      keterangan: "Pesanan P005 - Sosis",
      pendapatan: 80000,
      pengeluaran: 0,
    },

    {
      tanggal: "2026-08-12",
      keterangan: "Pesanan P006 - Bakso",
      pendapatan: 90000,
      pengeluaran: 0,
    },

    {
      tanggal: "2026-08-15",
      keterangan: "Pembelian bahan baku",
      pendapatan: 0,
      pengeluaran: 40000,
    },

    {
      tanggal: "2026-08-16",
      keterangan: "Pesanan P007 - Nugget",
      pendapatan: 150000,
      pengeluaran: 0,
    },

    {
      tanggal: "2026-08-18",
      keterangan: "Pesanan P008 - Sosis",
      pendapatan: 85000,
      pengeluaran: 0,
    },

    {
      tanggal: "2026-08-20",
      keterangan: "Pesanan P009 - Bakso",
      pendapatan: 120000,
      pengeluaran: 0,
    },

    {
      tanggal: "2026-08-22",
      keterangan: "Pembelian bahan baku",
      pendapatan: 0,
      pengeluaran: 45000,
    },

    {
      tanggal: "2026-08-23",
      keterangan: "Pesanan P010 - Nugget",
      pendapatan: 130000,
      pengeluaran: 0,
    },

    {
      tanggal: "2026-08-25",
      keterangan: "Pesanan P011 - Sosis",
      pendapatan: 95000,
      pengeluaran: 0,
    },

    {
      tanggal: "2026-08-27",
      keterangan: "Pembelian bahan baku",
      pendapatan: 0,
      pengeluaran: 35000,
    },

    {
      tanggal: "2026-08-28",
      keterangan: "Pesanan P012 - Bakso",
      pendapatan: 110000,
      pengeluaran: 0,
    },

    {
      tanggal: "2026-08-30",
      keterangan: "Pesanan P013 - Nugget",
      pendapatan: 145000,
      pengeluaran: 0,
    },
  ];

  // =========================
  // DATA TERFILTER
  // =========================

  let dataTerfilter: Transaksi[] = [];

  // =========================
  // HARIAN
  // =========================

  if (periode === "harian") {
    dataTerfilter = [
      {
        tanggal: tanggalDipilih,
        keterangan: "Ringkasan transaksi harian",
        pendapatan: 900000,
        pengeluaran: 125000,
      },
    ];
  }
  // =========================
  // MINGGUAN
  // =========================

  if (periode === "mingguan") {
    dataTerfilter = [
      {
        tanggal: `${tahunDipilih}-M1`,
        keterangan: "Minggu 1 (1–7)",
        pendapatan: 900000,
        pengeluaran: 900000,
      },
      {
        tanggal: `${tahunDipilih}-M2`,
        keterangan: "Minggu 2 (8–14)",
        pendapatan: 900000,
        pengeluaran: 900000,
      },
      {
        tanggal: `${tahunDipilih}-M3`,
        keterangan: "Minggu 3 (15–21)",
        pendapatan: 900000,
        pengeluaran: 900000,
      },
      {
        tanggal: `${tahunDipilih}-M4`,
        keterangan: "Minggu 4 (22–28)",
        pendapatan: 900000,
        pengeluaran: 900000,
      },
      {
        tanggal: `${tahunDipilih}-M5`,
        keterangan: "Minggu 5 (29–31)",
        pendapatan: 900000,
        pengeluaran: 900000,
      },
    ];
  }

  // =========================
  // BULANAN
  // =========================

   if (periode === "bulanan") {
    dataTerfilter = [
      {
        tanggal: `${tahunDipilih}-${String(bulanDipilih).padStart(2, "0")}`,
        keterangan: `Ringkasan transaksi bulanan ${semuaBulan[bulanDipilih - 1]}`,
        pendapatan: 900000,
        pengeluaran: 900000,
      },
    ];
  }


  // =========================
  // TAHUNAN
  // =========================

  if (periode === "tahunan") {
    dataTerfilter = [{
      tanggal: String(tahunDipilih),
      keterangan: `Ringkasan transaksi tahunan ${tahunDipilih}`,
      pendapatan: 10800000,
      pengeluaran: 10800000,
    }];
  }
  // =========================
  // FORMAT RUPIAH
  // =========================

  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(angka);
  };

  // =========================
  // TOTAL
  // =========================

  const totalPendapatan =
    dataTerfilter.reduce(
      (total, item) =>
        total + item.pendapatan,
      0
    );

  const totalPengeluaran =
    dataTerfilter.reduce(
      (total, item) =>
        total + item.pengeluaran,
      0
    );

  const labaBersih =
    totalPendapatan -
    totalPengeluaran;

  // =========================
  // DATA DIAGRAM
  // =========================

  let dataDiagram: DataDiagram[] = [];

  // =========================
  // DIAGRAM HARIAN
  // =========================

  if (periode === "harian") {
    dataDiagram = [
      {
        label:
          tanggalDipilih.slice(8, 10),

        pendapatan: 900000,

        pengeluaran: 125000,
      },
    ];
  }

  // =========================
  // DIAGRAM MINGGUAN
  // =========================

  if (periode === "mingguan") {
    dataDiagram = [
      {
        label: "M1",
        tanggal: "1–7",
        pendapatan: 900000,
        pengeluaran: 900000,
      },

      {
        label: "M2",
        tanggal: "8–14",
        pendapatan: 900000,
        pengeluaran: 900000,
      },

      {
        label: "M3",
        tanggal: "15–21",
        pendapatan: 900000,
        pengeluaran: 900000,
      },

      {
        label: "M4",
        tanggal: "22–28",
        pendapatan: 900000,
        pengeluaran: 900000,
      },

      {
        label: "M5",
        tanggal: "29–31",
        pendapatan: 900000,
        pengeluaran: 900000,
      },
    ];
  }

  // =========================
  // DIAGRAM BULANAN
  // =========================

  if (periode === "bulanan") {
    dataDiagram = [
      {
        label: semuaBulan[bulanDipilih - 1],
        pendapatan: 900000,
        pengeluaran: 900000,
      },
    ];
  }

  // =========================
  // DIAGRAM TAHUNAN
  // =========================

  if (periode === "tahunan") {
    dataDiagram = [
      {
        label: String(tahunDipilih),
        pendapatan: 10800000,
        pengeluaran: 10800000,
      },
      
    ];
  }
  // =========================
  // NILAI TERBESAR
  // =========================

  const nilaiTerbesar =
    Math.max(
      ...dataDiagram.flatMap(
        (item) => [
          item.pendapatan,
          item.pengeluaran,
        ]
      ),
      1
    );

  // =========================
  // GANTI PERIODE
  // =========================

  const gantiPeriode = (
    periodeBaru: Periode
  ) => {
    setPeriode(periodeBaru);
  };

  return (
    <div className="halaman-laporan-keuangan">

      {/* =========================
          JUDUL
      ========================= */}

      <div className="judul-laporan-keuangan">

        <h1>
          Laporan Keuangan
        </h1>

      </div>


      {/* =========================
          SUMMARY CARD
      ========================= */}

      <div className="container-card-keuangan">

        <div className="card-keuangan">

          <span className="judul-card-keuangan">
            Total Pendapatan
          </span>

          <span className="nilai-card-keuangan">
            {formatRupiah(
              totalPendapatan
            )}
          </span>

        </div>


        <div className="card-keuangan">

          <span className="judul-card-keuangan">
            Total Pengeluaran
          </span>

          <span className="nilai-card-keuangan">
            {formatRupiah(
              totalPengeluaran
            )}
          </span>

        </div>


        <div className="card-keuangan">

          <span className="judul-card-keuangan">
            Laba Bersih
          </span>

          <span className="nilai-card-keuangan">
            {formatRupiah(
              labaBersih
            )}
          </span>

        </div>

      </div>


      {/* =========================
          DIAGRAM
      ========================= */}

      <div className="container-diagram-keuangan">

        <div className="header-diagram-keuangan">

          <div>

            <h2>
              Pendapatan & Pengeluaran
            </h2>

            <p>
              Ringkasan kondisi keuangan toko
            </p>

          </div>


          {/* =========================
              KONTROL
          ========================= */}

          <div className="kontrol-keuangan">

            {/* PERIODE */}

            <select
              value={periode}
              onChange={(e) =>
                gantiPeriode(
                  e.target.value as Periode
                )
              }
            >

              <option value="harian">
                Harian
              </option>

              <option value="mingguan">
                Mingguan
              </option>

              <option value="bulanan">
                Bulanan
              </option>

              <option value="tahunan">
                Tahunan
              </option>

            </select>


            {/* HARIAN */}

            {periode === "harian" && (

              <input
                type="date"
                value={tanggalDipilih}
                onChange={(e) =>
                  setTanggalDipilih(
                    e.target.value
                  )
                }
              />

            )}


            {/* MINGGUAN */}

            {periode === "mingguan" && (

              <>

                <select
                  value={bulanDipilih}
                  onChange={(e) =>
                    setBulanDipilih(
                      Number(
                        e.target.value
                      )
                    )
                  }
                >

                  {semuaBulan.map(
                    (bulan, index) => (

                      <option
                        key={index}
                        value={index + 1}
                      >
                        {bulan}
                      </option>

                    )
                  )}

                </select>


                <select
                  value={tahunDipilih}
                  onChange={(e) =>
                    setTahunDipilih(
                      Number(
                        e.target.value
                      )
                    )
                  }
                >

                  <option value="2026">
                    2026
                  </option>

                  <option value="2027">
                    2027
                  </option>

                  <option value="2028">
                    2028
                  </option>

                </select>

              </>

            )}


            {/* BULANAN */}

            {periode === "bulanan" && (

              <>

                <select
                  value={bulanDipilih}
                  onChange={(e) =>
                    setBulanDipilih(
                      Number(
                        e.target.value
                      )
                    )
                  }
                >

                  {semuaBulan.map(
                    (bulan, index) => (

                      <option
                        key={index}
                        value={index + 1}
                      >
                        {bulan}
                      </option>

                    )
                  )}

                </select>


                <select
                  value={tahunDipilih}
                  onChange={(e) =>
                    setTahunDipilih(
                      Number(
                        e.target.value
                      )
                    )
                  }
                >

                  <option value="2026">
                    2026
                  </option>

                  <option value="2027">
                    2027
                  </option>

                  <option value="2028">
                    2028
                  </option>

                </select>

              </>

            )}


            {/* TAHUNAN */}

            {periode === "tahunan" && (

              <select
                value={tahunDipilih}
                onChange={(e) =>
                  setTahunDipilih(
                    Number(
                      e.target.value
                    )
                  )
                }
              >

                <option value="2026">
                  2026
                </option>

                <option value="2027">
                  2027
                </option>

                <option value="2028">
                  2028
                </option>

              </select>

            )}

          </div>

        </div>


        {/* =========================
            INFO PERIODE
        ========================= */}

        <div className="info-periode-keuangan">

          {periode === "harian" && (

            <span>
              Data harian -{" "}
              {tanggalDipilih}
            </span>

          )}


          {periode === "mingguan" && (

            <span>
              Data mingguan -{" "}
              {semuaBulan[
                bulanDipilih - 1
              ]}{" "}
              {tahunDipilih}
            </span>

          )}


          {periode === "bulanan" && (

            <span>
              Data bulanan -{" "}
              {semuaBulan[
                bulanDipilih - 1
              ]}{" "}
              {tahunDipilih}
            </span>

          )}


          {periode === "tahunan" && (

            <span>
              Data tahunan -{" "}
              {tahunDipilih}
            </span>

          )}

        </div>


        {/* =========================
            DIAGRAM BATANG
        ========================= */}

        <div className="diagram-keuangan">

          <div className="batang-container-keuangan">

            {dataDiagram.map(
              (item, index) => {

                const tinggiPendapatan =
                  item.pendapatan > 0
                    ? (
                        item.pendapatan /
                        nilaiTerbesar
                      ) * 200
                    : 0;

                const tinggiPengeluaran =
                  item.pengeluaran > 0
                    ? (
                        item.pengeluaran /
                        nilaiTerbesar
                      ) * 200
                    : 0;

                return (

                  <div
                    className="kelompok-batang-keuangan"
                    key={index}
                  >

                    <div className="batang-ganda-keuangan">

                      <div
                        className="batang-pendapatan"
                        style={{
                          height:
                            `${tinggiPendapatan}px`,
                        }}
                      >

                        {item.pendapatan > 0 && (

                          <span>
                            {formatRupiah(
                              item.pendapatan
                            )}
                          </span>

                        )}

                      </div>


                      <div
                        className="batang-pengeluaran"
                        style={{
                          height:
                            `${tinggiPengeluaran}px`,
                        }}
                      >

                        {item.pengeluaran > 0 && (

                          <span>
                            {formatRupiah(
                              item.pengeluaran
                            )}
                          </span>

                        )}

                      </div>

                    </div>


                    <div className="label-batang-keuangan">

                      <strong>
                        {item.label}
                      </strong>

                      {periode === "mingguan" && (

                        <small>
                          {item.tanggal}
                        </small>

                      )}

                    </div>

                  </div>

                );

              }
            )}

          </div>


          {/* LEGEND */}

          <div className="legend-keuangan">

            <span>
              <i className="legend-pendapatan"></i>
              Pendapatan
            </span>

            <span>
              <i className="legend-pengeluaran"></i>
              Pengeluaran
            </span>

          </div>

        </div>

      </div>


      {/* =========================
          DETAIL TRANSAKSI
      ========================= */}

      <div className="container-transaksi-keuangan">

        <div className="header-section-keuangan">

          <h2>
            Detail Transaksi
          </h2>

        </div>


        <div className="tabel-keuangan">

          <table>

            <thead>

              <tr>

                <th>
                  Tanggal
                </th>

                <th>
                  Keterangan
                </th>

                <th>
                  Pendapatan
                </th>

                <th>
                  Pengeluaran
                </th>

              </tr>

            </thead>


            <tbody>

              {dataTerfilter.length === 0 ? (

                <tr>

                  <td
                    colSpan={4}
                    className="data-kosong"
                  >
                    Tidak ada transaksi
                  </td>

                </tr>

              ) : (

                dataTerfilter.map(
                  (item, index) => (

                    <tr key={index}>

                      <td>
                        {item.tanggal}
                      </td>

                      <td>
                        {item.keterangan}
                      </td>

                      <td className="nilai-pendapatan">

                        {item.pendapatan > 0
                          ? formatRupiah(
                              item.pendapatan
                            )
                          : "-"
                        }

                      </td>

                      <td className="nilai-pengeluaran">

                        {item.pengeluaran > 0
                          ? formatRupiah(
                              item.pengeluaran
                            )
                          : "-"
                        }

                      </td>

                    </tr>

                  )
                )

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}