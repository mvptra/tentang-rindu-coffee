"use client";

import "./layout.css";
import Link from "next/link";
import {
  User,
  Shield,
  Bell,
  Store,
  CreditCard,
} from "lucide-react";

export default function Pengaturan() {
  return (
    <div className="halaman-utama-pengaturan">

      <div className="judul-halaman-pengaturan">
        <h1>Pengaturan</h1>
        <p>
          Kelola pengaturan sistem, akun admin, toko, notifikasi, dan pembayaran.
        </p>
      </div>

      <div className="daftar-pengaturan">

        <Link
          href="/pengaturan/profil"
          className="kartu-pengaturan"
        >
          <div className="ikon-pengaturan">
            <User size={28} />
          </div>

          <div className="isi-kartu-pengaturan">
            <h2>Profil Admin</h2>
            <p>
              Kelola informasi dan data profil administrator.
            </p>
          </div>
        </Link>


        <Link
          href="/pengaturan/keamanan"
          className="kartu-pengaturan"
        >
          <div className="ikon-pengaturan">
            <Shield size={28} />
          </div>

          <div className="isi-kartu-pengaturan">
            <h2>Keamanan</h2>
            <p>
              Kelola keamanan dan perlindungan akun administrator.
            </p>
          </div>
        </Link>


        <Link
          href="/pengaturan/notifikasi"
          className="kartu-pengaturan"
        >
          <div className="ikon-pengaturan">
            <Bell size={28} />
          </div>

          <div className="isi-kartu-pengaturan">
            <h2>Notifikasi</h2>
            <p>
              Atur pemberitahuan dan informasi yang diterima admin.
            </p>
          </div>
        </Link>


        <Link
          href="/pengaturan/toko"
          className="kartu-pengaturan"
        >
          <div className="ikon-pengaturan">
            <Store size={28} />
          </div>

          <div className="isi-kartu-pengaturan">
            <h2>Toko</h2>
            <p>
              Kelola informasi dan pengaturan toko.
            </p>
          </div>
        </Link>


        <Link
          href="/pengaturan/pembayaran"
          className="kartu-pengaturan"
        >
          <div className="ikon-pengaturan">
            <CreditCard size={28} />
          </div>

          <div className="isi-kartu-pengaturan">
            <h2>Pembayaran</h2>
            <p>
              Kelola metode dan informasi pembayaran toko.
            </p>
          </div>
        </Link>

      </div>

    </div>
  );
}