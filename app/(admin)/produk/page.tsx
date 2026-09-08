"use client";

import "./produk.css";
import { Plus, X, Pencil, Trash2 } from "lucide-react";
import { useRef, useState } from "react";

export default function Produk() {
  // =========================
  // STATE
  // =========================

  const [tampilKotak, setTampilKotak] = useState(false);

  const [modeEdit, setModeEdit] = useState(false);

  const [indexEdit, setIndexEdit] = useState<number | null>(null);

  const [foto, setFoto] = useState<string | null>(null);

  const [produk, setProduk] = useState<any[]>([]);

  const [namaProduk, setNamaProduk] = useState("");

  const [hargaProduk, setHargaProduk] = useState("");

  const [stokProduk, setStokProduk] = useState("");

  const [notif, setNotif] = useState("");

  const inputFotoRef = useRef<HTMLInputElement>(null);


  // =========================
  // RESET FORM
  // =========================

  const resetForm = () => {
    setNamaProduk("");
    setHargaProduk("");
    setStokProduk("");
    setNotif("");
    setFoto(null);

    if (inputFotoRef.current) {
      inputFotoRef.current.value = "";
    }
  };


  // =========================
  // TOMBOL TAMBAH PRODUK
  // =========================

  const tambahKotak = () => {
    resetForm();

    setModeEdit(false);

    setIndexEdit(null);

    setTampilKotak(true);
  };


  // =========================
  // TOMBOL CLOSE
  // =========================

  const tutupKotak = () => {
    setTampilKotak(false);

    setModeEdit(false);

    setIndexEdit(null);

    resetForm();
  };


  // =========================
  // SIMPAN PRODUK BARU
  // =========================

  const simpanProduk = () => {

    if (!namaProduk.trim() || !hargaProduk.trim() || !stokProduk.trim()) {
      setNotif("Silahkan Isi Produk Terlebih Dahulu");

      setTimeout(() => {
        setNotif("");
      }, 3000);

    return;
  }

    const produkBaru = {
      nama: namaProduk,
      harga: hargaProduk,
      stok: stokProduk,
      foto: foto,
    };

    setProduk([...produk, produkBaru]);

    setTampilKotak(false);

    setModeEdit(false);

    setIndexEdit(null);

    resetForm();

    setNotif("");
  };


  // =========================
  // EDIT PRODUK
  // =========================

  const editProduk = (item: any, index: number) => {
    setNamaProduk(item.nama);

    setHargaProduk(item.harga);

    setStokProduk(item.stok);

    setFoto(item.foto);

    setIndexEdit(index);

    setModeEdit(true);

    setTampilKotak(true);
  };


  // =========================
  // UPDATE PRODUK
  // =========================

  const updateProduk = () => {
    if (indexEdit === null) {
      return;
    }

    const produkUpdate = {
      nama: namaProduk,
      harga: hargaProduk,
      stok: stokProduk,
      foto: foto,
    };

    const produkBaru = [...produk];

    produkBaru[indexEdit] = produkUpdate;

    setProduk(produkBaru);

    setTampilKotak(false);

    setModeEdit(false);

    setIndexEdit(null);

    resetForm();
  };

  // =========================
  // HAPUS PRODUK
  // =========================

  const hapusProduk = (index: number) => {
    const produkBaru = produk.filter((_, i) => i !== index);

    setProduk(produkBaru);
  };

  // =========================
  // RETURN
  // =========================

  return (
    <div className="halaman-produk">

      {/* =========================
          TABEL PRODUK
      ========================= */}

      <div className="tabel-produk">

        <table>

          <thead>
            <tr>
              <th>Foto</th>
              <th>Nama Produk</th>
              <th>Harga Produk</th>
              <th>Stok Barang</th>
              <th>Aksi</th>
            </tr>
          </thead>


          <tbody>

            {produk.map((item, index) => (

              <tr key={index}>

                {/* FOTO */}
                <td>

                  {item.foto && (
                    <img
                      src={item.foto}
                      alt="Produk"
                      className="foto-table"
                    />
                  )}

                </td>


                {/* NAMA PRODUK */}
                <td>

                  <div className="kotak">

                    <div className="kotak-input">
                      {item.nama}
                    </div>

                  </div>

                </td>


                {/* HARGA PRODUK */}
                <td>

                  <div className="kotak">

                    <div className="kotak-input">
                      Rp {item.harga}
                    </div>

                  </div>

                </td>


                {/* STOK */}
                <td>

                  <div className="kotak">

                    <div className="kotak-input">
                      {item.stok}
                    </div>

                  </div>

                </td>


                {/* AKSI */}
                <td>

                  <div className="aksi-produk">

                    {/* EDIT */}
                    <button
                      type="button"
                      className="tombol-edit"
                      onClick={() => editProduk(item, index)}
                    >
                      <Pencil size={18} />
                    </button>


                    {/* HAPUS */}
                    <button
                      type="button"
                      className="tombol-hapus"
                      onClick={() => hapusProduk(index)}
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>


      {/* =========================
          JUDUL
      ========================= */}

      <div className="tombol-tambah-produk">

        <div className="judul-produk">

          <h1 className="kata-kata">
            Daftar Produk Toko (Real-Time Server)
          </h1>

        </div>

      </div>


      {/* =========================
          TOMBOL TAMBAH PRODUK
      ========================= */}

      <div
        className="rectangle-tambah"
        onClick={tambahKotak}
      >

        <p className="tanda-plus">
          <Plus size={20} />
        </p>

        <h2 className="nambah-produk">
          Tambah Produk
        </h2>

      </div>


      {/* =========================
          RECTANGLE FORM
      ========================= */}

      {tampilKotak && (

        <div className="rectangle-melayang">

          {/* CLOSE */}
          <button
            type="button"
            className="tombol-close"
            onClick={tutupKotak}
          >
            <X size={20} />
          </button>


          {/* NAMA PRODUK */}
          <label>
            Nama Produk
          </label>

          <input
            type="text"
            className="nama-produk"
            placeholder="Nama Produk"
            value={namaProduk}
            onChange={(e) => setNamaProduk(e.target.value)}
          />


          {/* HARGA */}
          <label>
            Harga Produk
          </label>

          <input
            type="text"
            className="harga-produk"
            placeholder="Rp"
            value={hargaProduk}
            onChange={(e) => setHargaProduk(e.target.value)}
          />


          {/* STOK */}
          <label>
            Stok Barang
          </label>

          <input
            type="number"
            className="stok-produk"
            placeholder="Stok Barang"
            value={stokProduk}
            onChange={(e) => setStokProduk(e.target.value)}
          />


          {/* FOTO */}
          <label>
            Foto Produk
          </label>

          <div className="input-foto">

            {/* PREVIEW FOTO */}
            {foto && (
              <>

                <img
                  src={foto}
                  className="preview-foto"
                  alt="Preview Produk"
                />


                {/* HAPUS FOTO */}
                <button
                  type="button"
                  className="hapus-foto"
                  onClick={() => {
                    setFoto(null);

                    if (inputFotoRef.current) {
                      inputFotoRef.current.value = "";
                    }
                  }}
                >
                  <X size={18} />
                </button>

              </>
            )}


            {/* PILIH FILE */}
            {!foto && (

              <label
                htmlFor="pilih-foto"
                className="tombol-pilih-foto"
              >
                Pilih File
              </label>

            )}


            {/* INPUT FILE */}
            <input
              ref={inputFotoRef}
              id="pilih-foto"
              type="file"
              accept="image/*"
              onChange={(e) => {

                const file = e.target.files?.[0];

                if (file) {
                  setFoto(URL.createObjectURL(file));
                }

              }}
            />

          </div>


          {/* =========================
              SIMPAN / UPDATE
          ========================= */}

          {notif && (
            <p className="notif-produk">
              {notif}
            </p>
          )}

          <button
            type="button"
            className="tombol-simpan"
            onClick={modeEdit ? updateProduk : simpanProduk}
          >

            {modeEdit ? "Update" : "Simpan"}

          </button>

        </div>

      )}

    </div>
  );
}