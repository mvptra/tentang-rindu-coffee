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

          <Link href="/pengaturan" className="item-menu">
           <Settings />
            Pengaturan
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
        </div>

      <div className="rectangle-admin">
        {children}
      </div>
      </main>



    </div>
  );
}