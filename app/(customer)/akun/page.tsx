"use client";

import Link from "next/link";
import "./akun.css";

export default function AkunPage() {
  return (
    <div className="halaman-akun">
      <div className="akun-card">

        <div className="akun-judul">
          Akun
        </div>

        <div className="garis-akun"></div>

        <div className="akun-menu">

          <Link href="/daftar" className="akun-menu-item">
            Daftar
          </Link>

          <Link href="/login" className="akun-menu-item">
            Masuk
          </Link>

        </div>

      </div>
    </div>
  );
}