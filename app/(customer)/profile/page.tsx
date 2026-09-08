"use client";

import "./profile.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Camera,
  Edit3,
  Package,
  Clock3,
  CheckCircle2,
} from "lucide-react";

export default function HalamanProfil() {
  const router = useRouter();

  const [modeEdit, setModeEdit] = useState(false);

  const [namaLengkap, setNamaLengkap] = useState("Nama Pengguna");
  const [username, setUsername] = useState("username");
  const [email, setEmail] = useState("pengguna@email.com");
  const [noTelepon, setNoTelepon] = useState("0812-3456-7890");
  const [fotoProfil, setFotoProfil] = useState("/kopisusu.png");

  useEffect(() => {
    const statusLogin = localStorage.getItem("sudahLogin");

    if (statusLogin !== "true") {
      router.replace("/");
    }
  }, [router]);


  return (
    <div className="halaman-profil">
      <section className="bagian-profil">

        <div className="kepala-profil">

          <div className="avatar-profil">
            <img
              src={fotoProfil}
              alt="Foto profil"
            />
            <label
              htmlFor="pilih-foto-profil"
              className="tombol-ganti-avatar"
            >
              <Camera size={16} />
            </label>

            <input
              type="file"
              id="pilih-foto-profil"
              accept="image/*"
              hidden
              onChange={(e) => {
                const file = e.target.files?.[0];

                if (file) {
                  const pembacaFile = new FileReader();

                  pembacaFile.onload = () => {
                    const fotoBaru = pembacaFile.result as string;

                    setFotoProfil(fotoBaru);
                    localStorage.setItem("fotoProfil", fotoBaru);

                    window.dispatchEvent(new Event("fotoProfilBerubah"));
                  };

                  pembacaFile.readAsDataURL(file);
                }
              }}  
            />
          </div>

          <div className="identitas-profil">
            <h1>{namaLengkap}</h1>
            <p>@{username}</p>
            <p className="telepon-profil">{noTelepon}</p>
            <span>Member Tentang Rindu Coffee</span>
          </div>
          
          <button
            className="tombol-edit-profil"
            onClick={() => setModeEdit(true)}
          >
            <Edit3 size={17} />
            Edit Profil
          </button>

          <button
            className="tombol-keluar-profil"
            onClick={() => {
            localStorage.removeItem("sudahLogin");
            window.dispatchEvent(new Event("statusLoginBerubah"));
            router.replace("/");
            }}
          >
            Keluar
        </button>
        
        </div>

        <div className="informasi-profil">
          <div className="judul-bagian-profil">
            <h2>Informasi Pribadi</h2>
            <p>Kelola informasi akun kamu</p>
          </div>

          {!modeEdit ? (
            <div className="grid-informasi-profil">

              <div className="item-informasi-profil">
                <span>Nama Lengkap</span>
                <strong>{namaLengkap}</strong>
              </div>

              <div className="item-informasi-profil">
                <span>Username</span>
                <strong>@{username}</strong>
              </div>

              <div className="item-informasi-profil">
                <span>Email</span>
                <strong>{email}</strong>
              </div>

              <div className="item-informasi-profil">
                <span>No. Telepon</span>
                <strong>{noTelepon}</strong>
              </div>

            </div>
          ) : (
            <div className="form-edit-profil">

              <div className="kolom-edit-profil">
                <label>Nama Lengkap</label>

                <input
                  type="text"
                  value={namaLengkap}
                  onChange={(e) => setNamaLengkap(e.target.value)}
                />
              </div>

              <div className="kolom-edit-profil">
                <label>Username</label>

                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="kolom-edit-profil">
                <label>Email</label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="kolom-edit-profil">
                <label>No. Telepon</label>

                <input
                  type="text"
                  value={noTelepon}
                  onChange={(e) => setNoTelepon(e.target.value)}
                />
              </div>

              <div className="tombol-aksi-edit-profil">

                <button
                  className="tombol-batal-edit"
                  onClick={() => setModeEdit(false)}
                >
                  Batal
                </button>

                <button
                  className="tombol-simpan-edit"
                  onClick={() => setModeEdit(false)}
                >
                  Simpan Perubahan
                </button>

              </div>
            </div>
          )}
        </div>

        <div className="pesanan-profil">
          <div className="judul-bagian-profil">
            <h2>Pesanan Saya</h2>
            <p>Lihat aktivitas pesanan kamu</p>
          </div>

          <div className="status-pesanan">

            <div className="kartu-status-pesanan">
              <div className="ikon-status-pesanan">
                <Clock3 size={22} />
              </div>

              <div>
                <strong>Pesanan Diproses</strong>
                <span>0 Pesanan</span>
              </div>
            </div>

            <div className="kartu-status-pesanan">
              <div className="ikon-status-pesanan">
                <Package size={22} />
              </div>

              <div>
                <strong>Siap Diambil</strong>
                <span>0 Pesanan</span>
              </div>
            </div>

            <div className="kartu-status-pesanan">
              <div className="ikon-status-pesanan">
                <CheckCircle2 size={22} />
              </div>

              <div>
                <strong>Pesanan Selesai</strong>
                <span>0 Pesanan</span>
              </div>
            </div>

          </div>
        </div>

        <div className="riwayat-profil">
          <div className="judul-bagian-profil">
            <h2>Riwayat Pesanan</h2>
            <p>Pesanan yang pernah kamu lakukan</p>
          </div>

          <div className="pesanan-kosong">
            <Package size={42} />

            <h3>Belum Ada Pesanan</h3>

            <p>
              Pesanan kamu akan muncul di sini setelah melakukan
              pembelian.
            </p>

            <a
              href="/halamanproduk"
              className="tombol-mulai-pesan"
            >
              Mulai Pesan
            </a>
          </div>
        </div>

      </section>
    </div>
  );
}