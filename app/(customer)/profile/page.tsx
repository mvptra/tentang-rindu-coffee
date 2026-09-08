"use client";

import "./profile.css";
import { Camera, Edit3, Package, Clock3, CheckCircle2 } from "lucide-react";

export default function HalamanProfil() {
  return (
    <div className="halaman-profil">
      <section className="bagian-profil">
        <div className="kepala-profil">
          <div className="avatar-profil">
            <img
              src="/avatar-default.png"
              alt="Foto profil"
            />

            <button className="tombol-ganti-avatar">
              <Camera size={16} />
            </button>
          </div>

          <div className="identitas-profil">
            <h1>Nama Pengguna</h1>
            <p>@username</p>
            <span>Member Tentang Rindu Coffee</span>
          </div>

          <button className="tombol-edit-profil">
            <Edit3 size={17} />
            Edit Profil
          </button>
        </div>

        <div className="informasi-profil">
          <div className="judul-bagian-profil">
            <h2>Informasi Pribadi</h2>
            <p>Kelola informasi akun kamu</p>
          </div>

          <div className="grid-informasi-profil">
            <div className="item-informasi-profil">
              <span>Nama Lengkap</span>
              <strong>Nama Pengguna</strong>
            </div>

            <div className="item-informasi-profil">
              <span>Username</span>
              <strong>@username</strong>
            </div>

            <div className="item-informasi-profil">
              <span>Email</span>
              <strong>pengguna@email.com</strong>
            </div>

            <div className="item-informasi-profil">
              <span>No. Telepon</span>
              <strong>0812-3456-7890</strong>
            </div>
          </div>
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

            <a href="/halamanproduk" className="tombol-mulai-pesan">
              Mulai Pesan
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}