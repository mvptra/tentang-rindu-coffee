"use client";

import "./layout.css";
import { useState } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";

import {
  Settings,
  User,
  Shield,
  Bell,
  Store,
  CreditCard,
  ArrowLeft,
  Menu,
  Search,
} from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export default function LayoutPengaturan({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarKecil, setSidebarKecil] = useState(false);

  return (
    <div
      className={`halaman-pengaturan ${
        sidebarKecil ? "sidebar-collapse" : ""
      } ${poppins.className}`}
    >

      {/* ========================= */}
      {/* SIDEBAR PENGATURAN */}
      {/* ========================= */}

      <aside className="sidebar-pengaturan">

        <h2 className="judul-sidebar">
          <Settings color="#4F6FE8" />
          Pengaturan
        </h2>

        <nav className="menu-pengaturan">

          <Link
            href="/pengaturan/profil"
            className="item-menu"
          >
            <User />
            Profil Admin
          </Link>

          <Link
            href="/pengaturan/keamanan"
            className="item-menu"
          >
            <Shield />
            Keamanan
          </Link>

          <Link
            href="/pengaturan/notifikasi"
            className="item-menu"
          >
            <Bell />
            Notifikasi
          </Link>

          <Link
            href="/pengaturan/toko"
            className="item-menu"
          >
            <Store />
            Toko
          </Link>

          <Link
            href="/pengaturan/pembayaran"
            className="item-menu"
          >
            <CreditCard />
            Pembayaran
          </Link>

          <Link
            href="/dashboard"
            className="item-menu keluar"
          >
            <ArrowLeft />
            Kembali
          </Link>

        </nav>

      </aside>


      {/* ========================= */}
      {/* KONTEN PENGATURAN */}
      {/* ========================= */}

      <main className="konten-pengaturan">

        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}

        <div className="header-pengaturan">

          <Menu
            className="menu-toggle"
            size={30}
            onClick={() =>
              setSidebarKecil(!sidebarKecil)
            }
          />

          <div className="search-pengaturan">

            <Search />

            <input
              type="text"
              placeholder="Search Pengaturan..."
            />

          </div>

        </div>


        {/* ========================= */}
        {/* ISI HALAMAN */}
        {/* ========================= */}

        <div className="rectangle-pengaturan">
          {children}
        </div>

      </main>

    </div>
  );
}