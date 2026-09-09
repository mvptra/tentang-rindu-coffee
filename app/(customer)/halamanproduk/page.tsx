"use client";

import "./halamanproduk.css";
import { Playfair_Display } from "next/font/google";
import { useState } from "react";
import { Plus, Minus, Trash2, X } from "lucide-react";

const daftarProduk = [
  {
    nama: "Aren Latte",
    harga: "Rp18.000",
    gambar: "/arenlatte.png",
    kategori: "Kopi"
  },
  {
    nama: "Americano",
    harga: "Rp15.000",
    gambar: "/americano.png",
    kategori: "Kopi"
  },
  {
    nama: "Butterscotch",
    harga: "Rp22.000",
    gambar: "/butterscotch.png",
    kategori: "Kopi"
  },
  {
    nama: "Kopi Susu",
    harga: "Rp20.000",
    gambar: "/kopisusu.png",
    kategori: "Kopi"
  },
  {
    nama: "Matcha Latte",
    harga: "Rp20.000",
    gambar: "/nonkopi1.jpg",
    kategori: "Non-Kopi"
  },
  {
    nama: "Chocolate Latte",
    harga: "Rp20.000",
    gambar: "/nonkopi2.jpg",
    kategori: "Non-Kopi"
  },
  {
    nama: "Blueberry Milk",
    harga: "Rp20.000",
    gambar: "/nonkopi3.jpg",
    kategori: "Non-Kopi"
  },
  {
    nama: "Strawberry Milk",
    harga: "Rp20.000",
    gambar: "/nonkopi4.jpg",
    kategori: "Non-Kopi"
  },
  {
    nama: "Mineral Water — 500ml",
    harga: "Rp20.000",
    gambar: "/mineralbiasa.jpg",
    kategori: "Mineral"
  },
  {
    nama: "Mineral Water — 600ml",
    harga: "Rp20.000",
    gambar: "/mineralpremium.jpg",
    kategori: "Mineral"
  },
  {
    nama: "Creamy Chicken Pasta",
    harga: "Rp17.000",
    gambar: "/makanan2.jpg",
    kategori: "Makanan"
  },
  {
    nama: "Chicken Rice Bowl",
    harga: "Rp17.000",
    gambar: "/makanan3.jpg",
    kategori: "Makanan"
  },
  {
    nama: "Nasi Goreng",
    harga: "Rp17.000",
    gambar: "/makanan4.jpg",
    kategori: "Makanan"
  },
  {
    nama: "Spaghetti Bolognese",
    harga: "Rp17.000",
    gambar: "/makanan5.jpg",
    kategori: "Makanan"
  },
  {
    nama: "Croissant",
    harga: "Rp17.000",
    gambar: "/snack1.jpg",
    kategori: "Snack"
  },
  {
    nama: "Chocolate Cake",
    harga: "Rp25.000",
    gambar: "/snack2.jpg",
    kategori: "Snack"
  },
  {
    nama: "Chocolate Chip Cookies",
    harga: "Rp25.000",
    gambar: "/snack3.jpg",
    kategori: "Snack"
  },
  {
    nama: "Blueberry Muffin",
    harga: "Rp25.000",
    gambar: "/snack4.jpg",
    kategori: "Snack"
  },

];

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
});

type ProdukKeranjang = {
  nama: string;
  harga: string;
  gambar: string;
  kategori: string;
  jumlah: number;
};

export default function HalamanProduk() {

  const [keranjang, setKeranjang] = useState<ProdukKeranjang[]>([]);
  const [keranjangBuka, setKeranjangBuka] = useState(false);
  const [qrisBuka, setQrisBuka] = useState(false);
  const [buktiPembayaran, setBuktiPembayaran] = useState<File | null>(null);
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [pencarian, setPencarian] = useState("");

  // Menentukan produk yang akan ditampilkan
  const produkDitampilkan = daftarProduk.filter((produk) => {

    const sesuaiKategori =
      kategoriAktif === "Semua" ||
      produk.kategori === kategoriAktif;

    const sesuaiPencarian =
      produk.nama
        .toLowerCase()
        .includes(pencarian.toLowerCase());

    return sesuaiKategori && sesuaiPencarian;
  });

  // Menambahkan produk ke keranjang
  const tambahKeranjang = (
    produk: typeof daftarProduk[number]
  ) => {

    setKeranjang((keranjangSebelumnya) => {

      const produkSudahAda = keranjangSebelumnya.find(
        (item) => item.nama === produk.nama
      );

      if (produkSudahAda) {

        return keranjangSebelumnya.map((item) =>
          item.nama === produk.nama
            ? {
                ...item,
                jumlah: item.jumlah + 1
              }
            : item
        );
      }

      return [
        ...keranjangSebelumnya,
        {
          ...produk,
          jumlah: 1,
        },
      ];
    });
  };

  // Mengurangi jumlah produk
  const kurangiJumlah = (namaProduk: string) => {

    setKeranjang((keranjangSebelumnya) =>
      keranjangSebelumnya
        .map((item) =>
          item.nama === namaProduk
            ? {
                ...item,
                jumlah: item.jumlah - 1
              }
            : item
        )
        .filter((item) => item.jumlah > 0)
    );
  };

  // Menghapus produk dari keranjang
  const hapusProduk = (namaProduk: string) => {

    setKeranjang((keranjangSebelumnya) =>
      keranjangSebelumnya.filter(
        (item) => item.nama !== namaProduk
      )
    );
  };

  // Menghitung jumlah seluruh barang
  const jumlahKeranjang = keranjang.reduce(
    (total, item) => total + item.jumlah,
    0
  );

  return (
    <div className={`halaman-produk ${playfair.className}`}>

      <section className="bagian-produk">

        <div className="kepala-produk">

          <p className="label-produk">
            TENTANG RINDU COFFEE
          </p>

          <h1 className="judul-halaman-produk">
            Temukan Favoritmu
          </h1>

          <p className="deskripsi-halaman-produk">
            Nikmati pilihan kopi dan makanan yang kami siapkan
            untuk menemani setiap cerita dan rasa rindumu.
          </p>

        </div>

        <div className="kategori-produk">

          <button
            className={
              kategoriAktif === "Semua"
                ? "kategori-aktif"
                : ""
            }
            onClick={() => setKategoriAktif("Semua")}
          >
            Semua
          </button>

          <button
            className={
              kategoriAktif === "Kopi"
                ? "kategori-aktif"
                : ""
            }
            onClick={() => setKategoriAktif("Kopi")}
          >
            Kopi
          </button>

          <button
            className={
              kategoriAktif === "Non-Kopi"
                ? "kategori-aktif"
                : ""
            }
            onClick={() => setKategoriAktif("Non-Kopi")}
          >
            Non-Kopi
          </button>

          <button
            className={kategoriAktif === "Mineral" ? "kategori-aktif" : ""}
            onClick={() => setKategoriAktif("Mineral")}
          >
            Mineral
          </button>

          <button
            className={
              kategoriAktif === "Makanan"
                ? "kategori-aktif"
                : ""
            }
            onClick={() => setKategoriAktif("Makanan")}
          >
            Makanan
          </button>

          <button
            className={
              kategoriAktif === "Snack"
                ? "kategori-aktif"
                : ""
            }
            onClick={() => setKategoriAktif("Snack")}
          >
            Snack
          </button>

        </div>

        <div className="pencarian-produk">

          <input
            type="text"
            placeholder="Cari produk..."
            value={pencarian}
            onChange={(e) => setPencarian(e.target.value)}
          />

        </div>

        <div className="daftar-produk">

          {produkDitampilkan.map((produk, index) => (

            <div
              className="kartu-produk"
              key={index}
            >

              <div className="gambar-produk">

                <img
                  src={produk.gambar}
                  alt={produk.nama}
                />

              </div>

              <div className="informasi-produk">

                <h2 className="nama-produk">
                  {produk.nama}
                </h2>

                <p className="harga-produk">
                  {produk.harga}
                </p>

                <button
                  className="tombol-tambah-keranjang"
                  onClick={() => tambahKeranjang(produk)}
                >

                  <Plus
                    size={16}
                    strokeWidth={2.5}
                  />

                </button>

              </div>

            </div>

          ))}

        </div>

        {/* ICON KERANJANG */}

        {jumlahKeranjang > 0 && (

          <div
            className="icon-keranjang-halaman"
            onClick={() =>
              setKeranjangBuka(!keranjangBuka)
            }
          >

            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >

              <path
                d="M7 8H11L14 25C14.2 26.2 15.2 27 16.4 27H29"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M13 13H33L30 24H15"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <circle
                cx="17"
                cy="32"
                r="2.5"
                fill="currentColor"
              />

              <circle
                cx="28"
                cy="32"
                r="2.5"
                fill="currentColor"
              />

            </svg>

            <span className="jumlah-keranjang">
              {jumlahKeranjang}
            </span>

          </div>

        )}

        {/* RECTANGLE KERANJANG */}

        {keranjangBuka && (

          <div className="kotak-keranjang">

            <div className="kepala-keranjang">

              <h2>
                Keranjang Saya
              </h2>

              <button
                className="tombol-tutup-keranjang"
                onClick={() => setKeranjangBuka(false)}
              >

                <X size={22} />

              </button>

            </div>

            <div className="daftar-isi-keranjang">

              {keranjang.map((item) => (

                <div
                  className="item-keranjang"
                  key={item.nama}
                >

                  <img
                    src={item.gambar}
                    alt={item.nama}
                  />

                  <div className="informasi-keranjang">

                    <h3>
                      {item.nama}
                    </h3>

                    <p>
                      {item.harga}
                    </p>

                  </div>

                  <div className="jumlah-produk-keranjang">

                    <button
                      onClick={() =>
                        kurangiJumlah(item.nama)
                      }
                    >
                      <Minus size={15} />
                    </button>

                    <span>
                      {item.jumlah}
                    </span>

                    <button
                      onClick={() =>
                        tambahKeranjang(item)
                      }
                    >
                      <Plus size={15} />
                    </button>

                  </div>

                  <button
                    className="tombol-hapus-keranjang"
                    onClick={() =>
                      hapusProduk(item.nama)
                    }
                  >

                    <Trash2 size={17} />

                  </button>

                </div>

              ))}

            </div>

            <div className="bagian-checkout-keranjang">

              <div className="total-keranjang">

                <span>
                  Total Pembayaran
                </span>

                <strong>
                  Rp
                  {keranjang
                    .reduce((total, item) => {

                      const hargaAngka = Number(
                        item.harga
                          .replace("Rp", "")
                          .replace(".", "")
                      );

                      return total + hargaAngka * item.jumlah;

                    }, 0)
                    .toLocaleString("id-ID")}
                </strong>

              </div>

               <div className="total-keranjang">
                <span>
                  Metode Pembayaran
                </span>

                <strong
                className="qris-pembayaran"
                onClick={() => setQrisBuka(true)}
                >
                  QRIS
                </strong>
              </div>

              <div className="upload-bukti-pembayaran">

                <span className="teks-upload-bukti">
                  Upload Bukti Foto
                </span>

                <label className="kotak-upload-bukti">

                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];

                      if (file) {
                        setBuktiPembayaran(file);
                      }
                    }}
                  />

                  <span className="teks-dalam-upload">
                    {buktiPembayaran
                      ? buktiPembayaran.name
                      : "Upload Foto"}
                  </span>

                </label>

              </div>
        
              <button className="tombol-checkout">
                Checkout
              </button>

            </div>

          </div>

        )}

        {qrisBuka && (
          <div className="kotak-qris">

            <div className="kepala-qris">

              <h2>
                QRIS
              </h2>

              <button
                className="tombol-tutup-qris"
                onClick={() => setQrisBuka(false)}
              >
                <X size={22} />
              </button>

            </div>

            <div className="gambar-qris-sementara">
              <span>
                QRIS
              </span>
            </div>

          </div>
        )}

      </section>

    </div>
  );
}