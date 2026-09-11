"use client";

import "./layout.css";
import { useState } from "react";
import Link from "next/link";
import { Poppins} from "next/font/google";
import {
  LayoutDashboard,
  BarChart3,
  Package,
  ShoppingCart,
  WalletCards,
  Users,
  Box,
  Settings,
  LogOut,
  Menu,
  CreditCard,
  Shield,
  Bell,
  Store,
  User,
  Search
} from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"], // Mengatur ketebalan font yang dibutuhkan
});

export default function LayoutAdmin({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarKecil, setSidebarKecil] = useState(false);
  const [pengaturanBuka, setPengaturanBuka] = useState(false);

   <button
    className="tombol-pengaturan-header"
    onClick={() => setPengaturanBuka(!pengaturanBuka)}
  >
    <Settings size={24} />
  </button>

  {pengaturanBuka && (
    <div className="panel-pengaturan-header">

    
      <Link
        href="/pengaturan/profil"
        className="item-panel-pengaturan"
      >
        <User size={20} />
        <span>Profil Admin</span>
      </Link>

      <Link
        href="/pengaturan/keamanan"
        className="item-panel-pengaturan"
      >
        <Shield size={20} />
        <span>Keamanan</span>
      </Link>

      <Link
        href="/pengaturan/notifikasi"
        className="item-panel-pengaturan"
      >
        <Bell size={20} />
        <span>Notifikasi</span>
      </Link>

      <Link
        href="/pengaturan/toko"
        className="item-panel-pengaturan"
      >
        <Store size={20} />
        <span>Toko</span>
      </Link>

      <Link
        href="/pengaturan/pembayaran"
        className="item-panel-pengaturan"
      >
        <CreditCard size={20} />
        <span>Pembayaran</span>
      </Link>

    </div>
  )}

  return (
    <div className= {`halaman-admin   ${
    sidebarKecil ? "sidebar-collapse" : ""
    } ${poppins.className}`}>

      <aside className="sidebar-admin">

        <h2 className="judul-sidebar">
        <Box color="#4F6FE8" />
          Admin Panel
        </h2>

        <nav className="menu-admin">

          <Link href="/dashboard" className="item-menu">
          <LayoutDashboard />
            Dashboard Admin
          </Link>

          <Link href="/produk" className="item-menu">
          <BarChart3 />
            Manajemen Produk
          </Link>

          <Link href="/pesanan" className="item-menu">
          <Package />
            Manajamen Pesanan
          </Link>

          <Link href="/datapelanggan" className="item-menu">
          <Users />
            Data Pelanggan
          </Link>

          <Link href="/laporankeuangan" className="item-menu">
          <WalletCards />
            Laporan Keuangan
          </Link>

          <Link href="/" className="item-menu keluar">
          <LogOut />
            Logout
          </Link>

        </nav>

      </aside>

      <main className="konten-admin">

        <div className="header-admin">

          <Menu className="menu-toggle" 
          size={30} 
          onClick={() => setSidebarKecil(!sidebarKecil)}
        />
        
        <div className="search-admin">
          <Search />
          <input type="text" placeholder="Search Produk..." />
        </div>

         <button
    className="tombol-pengaturan-header"
    onClick={() => setPengaturanBuka(!pengaturanBuka)}
  >
    <Settings size={24} />
  </button>

  {pengaturanBuka && (
    <div className="panel-pengaturan-header">

      <div className="judul-panel-pengaturan">
        <Settings size={22} />
        <span>Pengaturan</span>
      </div>

      <Link
        href="/pengaturan/profil"
        className="item-panel-pengaturan"
      >
        <User size={20} />
        <span>Profil Admin</span>
      </Link>

      <Link
        href="/pengaturan/keamanan"
        className="item-panel-pengaturan"
      >
        <Shield size={20} />
        <span>Keamanan</span>
      </Link>

      <Link
        href="/pengaturan/notifikasi"
        className="item-panel-pengaturan"
      >
        <Bell size={20} />
        <span>Notifikasi</span>
      </Link>

      <Link
        href="/pengaturan/toko"
        className="item-panel-pengaturan"
      >
        <Store size={20} />
        <span>Toko</span>
      </Link>

      <Link
        href="/pengaturan/pembayaran"
        className="item-panel-pengaturan"
      >
        <CreditCard size={20} />
        <span>Pembayaran</span>
      </Link>

    </div>
  )}
        </div>

      <div className="rectangle-admin">
        {children}
      </div>
      </main>



    </div>
  );
}