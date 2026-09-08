"use client";

// app/(customer)/layout.tsx
import { ShoppingBag } from "lucide-react";
import "./customer.css"; // <--- Mengubungkan ke file CSS terpisah
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Poppins, Yellowtail,  League_Spartan , Kaushan_Script} from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"], // Mengatur ketebalan font yang dibutuhkan
});

// Konfigurasi font Yellowtail untuk logo
const yellowtail = Yellowtail({
  subsets: ["latin"],
  weight: ["400"], // Yellowtail bawaannya cuma ada weight 400
  variable: "--font-yellowtail", // Kita bikin variabel CSS-nya
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
  children: React.ReactNode ;
  }) {
  const pathname = usePathname();
  const [sudahLogin, setSudahLogin] = useState<boolean | null>(null);
  const [fotoProfil, setFotoProfil] = useState("/kopisusu.png");

  useEffect(() => {
    const ambilDataProfil = () => {
    const statusLogin = localStorage.getItem("sudahLogin");
    const fotoTersimpan = localStorage.getItem("fotoProfil");

    console.log("STATUS LOGIN:", statusLogin);
    console.log("FOTO TERSIMPAN:", fotoTersimpan);

    if (statusLogin === "true") {
      setSudahLogin(true);
    } 
    
    else {
      setSudahLogin(false);
    }

    if (fotoTersimpan) {
    setFotoProfil(fotoTersimpan);
    }
  };

    ambilDataProfil();

    window.addEventListener(
      "fotoProfilBerubah",
       ambilDataProfil
    );

    window.addEventListener(
      "statusLoginBerubah",
       ambilDataProfil
    );

    window.addEventListener(
      "pageshow",
       ambilDataProfil
    );

    return () => {

    window.removeEventListener(
      "fotoProfilBerubah",
       ambilDataProfil
    );

    window.removeEventListener(
      "statusLoginBerubah",
       ambilDataProfil
    );

    window.removeEventListener(
      "pageshow",
       ambilDataProfil
    );


  };

  }, []);
    console.log("SUDAH LOGIN:", sudahLogin);

  return (
    <div className={`layout-customer ${poppins.className} ${yellowtail.variable} ${leagueSpartan.variable} ${kaushan.variable}`}>
      <div className="toko-logo">
         Tentang Rindu Coffee
      </div>

      <div className="navbar-line"></div>
      
      <Link href="/keranjang">
          <ShoppingBag
            size={28}
            className="icon-keranjang"
            strokeWidth={2}
          />
      </Link>

      {/* NAVBAR / MENU ATAS */}
      <nav className="navbar-container">
        <div className="navbar-links">
          <Link
            href="/"
            className={`nav-link ${pathname === "/" ? "nav-link-aktif" : ""}`}
          >
            Beranda
          </Link>

          <Link
            href="/halamanproduk"
            className={`nav-link ${pathname === "/halamanproduk" ? "nav-link-aktif" : ""}`}
          >
            Produk
          </Link>

          <Link
            href="/tentangkami"
            className={`nav-link ${pathname === "/tentangkami" ? "nav-link-aktif" : ""}`}
          >
            Tentang Kami
          </Link>
        </div>

        <div className="login-container">

          {sudahLogin === null ?  null : !sudahLogin ? (
              <>
                <a href="/login" className="btn-masuk">
                  Masuk
                </a>

                <a href="/daftar" className="btn-navbar-daftar">
                  Daftar
                </a>
              </>
              ) : (
              <>
                <a href="/profile" className="btn-profil">
                  <img src={fotoProfil} alt="Foto profil" />
                </a>

              </>
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