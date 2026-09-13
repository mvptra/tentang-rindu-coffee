"use client";

// app/(customer)/layout.tsx
import { ShoppingBag, UserRound } from "lucide-react";
import "./customer.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Poppins,
  Yellowtail,
  League_Spartan,
  Kaushan_Script,
} from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const yellowtail = Yellowtail({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-yellowtail",
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-league",
});

const kaushan = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kaushan",
});

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [sudahLogin, setSudahLogin] = useState<boolean | null>(null);
  const [fotoProfil, setFotoProfil] = useState("/kopisusu.png");

  // TAMBAHAN UNTUK AKUN
  const [akunTerbuka, setAkunTerbuka] = useState(false);

  useEffect(() => {
    const ambilDataProfil = () => {
      const statusLogin = localStorage.getItem("sudahLogin");
      const fotoTersimpan = localStorage.getItem("fotoProfil");

      console.log("STATUS LOGIN:", statusLogin);
      console.log("FOTO TERSIMPAN:", fotoTersimpan);

      if (statusLogin === "true") {
        setSudahLogin(true);
      } else {
        setSudahLogin(false);
      }

      if (fotoTersimpan) {
        setFotoProfil(fotoTersimpan);
      }
    };

    ambilDataProfil();

    window.addEventListener("fotoProfilBerubah", ambilDataProfil);
    window.addEventListener("statusLoginBerubah", ambilDataProfil);
    window.addEventListener("pageshow", ambilDataProfil);

    return () => {
      window.removeEventListener("fotoProfilBerubah", ambilDataProfil);
      window.removeEventListener("statusLoginBerubah", ambilDataProfil);
      window.removeEventListener("pageshow", ambilDataProfil);
    };
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("sudahLogin");
    localStorage.removeItem("fotoProfil");
    setSudahLogin(false);
    setAkunTerbuka(false);
    window.dispatchEvent(new Event("statusLoginBerubah"));
  };

  console.log("SUDAH LOGIN:", sudahLogin);

  return (
    <div
      className={`layout-customer ${poppins.className} ${yellowtail.variable} ${leagueSpartan.variable} ${kaushan.variable}`}
    >

      <div className="navbar-line"></div>

      {/* NAVBAR / MENU ATAS */}
      <nav className="navbar-container">

        <div className="toko-logo">
          Tentang Rindu Coffee
        </div>

        <div className="navbar-links">

          <Link
            href="/"
            className={`nav-link ${pathname === "/" ? "nav-link-aktif" : ""}`}
          >
            Beranda
          </Link>

          <Link
            href="/halamanproduk"
            className={`nav-link ${
              pathname === "/halamanproduk" ? "nav-link-aktif" : ""
            }`}
          >
            Produk
          </Link>

          <Link
            href="/tentangkami"
            className={`nav-link ${
              pathname === "/tentangkami" ? "nav-link-aktif" : ""
            }`}
          >
            Tentang Kami
          </Link>

        </div>

        <Link href="/keranjang" className="link-keranjang">
          <ShoppingBag
            size={28}
            className="icon-keranjang"
            strokeWidth={2}
          />
        </Link>

        {/* AKUN */}
        <div className="akun-container">

         {sudahLogin ? (
            /* Jika sudah login, klik foto profil LANGSUNG pindah ke halaman profil */
            <Link href="/profile" className="btn-profil">
              <img src={fotoProfil} alt="Foto Profil" />
            </Link>
          ) : (
            /* Jika belum login, klik tombol untuk buka dropdown login/daftar */
            <button
              type="button"
              className="akun-trigger"
              onClick={() => setAkunTerbuka(!akunTerbuka)}
            >
              <UserRound size={22} strokeWidth={2} />
              <span>Akun</span>
            </button>
          )}

          {akunTerbuka && (
            <div className="akun-panel">
              {sudahLogin ? (
                <>
                  <Link
                    href="/profil"
                    className="akun-panel-item"
                    onClick={() => setAkunTerbuka(false)}
                  >
                    Profil Saya
                  </Link>

                  <button
                    type="button"
                    className="akun-panel-item"
                    onClick={handleLogout}
                  >
                    Keluar
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="akun-panel-item"
                    onClick={() => setAkunTerbuka(false)}
                  >
                    Masuk
                  </Link>

                  <Link
                    href="/daftar"
                    className="akun-panel-item"
                    onClick={() => setAkunTerbuka(false)}
                  >
                    Daftar
                  </Link>
                </>
              )}
            </div>
          )}

        </div>

      </nav>

      {/* Tempat masuknya isi konten dari page.tsx */}
      <main className="konten-halaman">
        {children}
      </main>

    </div>
  );
}