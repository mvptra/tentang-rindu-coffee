// app/(customer)/page.tsx 
'use client';

import { useEffect, useState } from "react";
import { Playfair_Display, Poppins } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"], // Mengatur ketebalan font yang dibutuhkan
});

const daftarGambar = [
  "/bg1.png",
  "/bg2.png",
  "/bg3.png",
  "/bg4.png",
];

const daftarGambar2 = [
  "/butterscotch.png",
  "/arenlatte.png",
  "/kopisusu.png",
  "/americano.png",
];

const daftarNamaProduk2 = [
  "Butterscotch",
  "Aren Latte",
  "Kopi Susu",
  "Americano",
];

const daftarHargaGambar2 = [
 "Rp 30.000",
  "Rp 22.000",
  "Rp 18.000",
  "Rp 15.000",
];

export default function Beranda() {

  const [gambarAktif, setGambarAktif] = useState(0);

  // Slide otomatis
  useEffect(() => {

    const interval = setInterval(() => {
      setGambarAktif((sebelumnya) => (sebelumnya + 1) % daftarGambar.length);
    }, 5000);

    return () => clearInterval(interval);

  }, []);

  // Tombol Selanjutnya
  const gambarSelanjutnya = () => {
    setGambarAktif((sebelumnya) => (sebelumnya + 1) % daftarGambar.length);
  };

  // Tombol Sebelumnya
  const gambarSebelumnya = () => {
    setGambarAktif((sebelumnya) =>
      sebelumnya === 0
        ? daftarGambar.length - 1
        : sebelumnya - 1
    );
  };

  return (
    <div className="beranda">

      <section className="bagian-slider">

        <div
            className="wadah-slider"
            style={{
              transform: `translateX(-${gambarAktif * 100}%)`,
            }}
          >
            {daftarGambar.map((gambar, index) => (
              <img
                key={index}
                src={gambar}
                alt={`Banner ${index + 1}`}
                className="gambar-slider"
              />
            ))}
          </div>

        {/* Tombol Kiri */}
        <button
          className="tombol-kiri"
          onClick={gambarSebelumnya}
        >
          &#10094;
        </button>

        {/* Tombol Kanan */}
        <button
          className="tombol-kanan"
          onClick={gambarSelanjutnya}
        >
          &#10095;
        </button>

        {/* Indikator */}
        <div className="wadah-indikator">

          {daftarGambar.map((_, index) => (

            <span
              key={index}
              className={
                gambarAktif === index
                  ? "indikator aktif"
                  : "indikator"
              }
              onClick={() => setGambarAktif(index)}
            ></span>

          ))}

        </div>

      </section>
      
        {/* ========================= */}
        {/* PRODUK BEST SELLER */}
        {/* ========================= */}

        <section className={`produk-best-seller ${poppins.className} ${playfair.variable} `}>

          <h2 className="judul-produk-best-seller">
            Produk Best Seller Kami
          </h2>

        

          <div className="wadah-produk-best-seller">

            {daftarGambar2.map((gambar, index) => (

              <div
                key={index}
                className="item-produk-best-seller"
              >
              
              <div className="kartu-produk-best-seller">

                <img
                  src={gambar}
                  alt={`Produk ${index + 1}`}
                  className="gambar-produk-best-seller"
                />
              
              </div>
              
                <h3 className="nama-produk-best-seller">
                  {daftarNamaProduk2[index]}
                </h3>

                <p className="harga-produk-best-seller">
                  {daftarHargaGambar2[index]}
                </p>

              </div>

            ))}
          </div>

        </section>

    </div>
    
  );
}