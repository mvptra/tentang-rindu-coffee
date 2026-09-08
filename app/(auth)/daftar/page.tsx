"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./daftar.css"
import { FcGoogle } from "react-icons/fc";
import { League_Spartan, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-league",
});

export default function HalamanDaftar() {
  const router = useRouter();
  const [namaLengkap, setNamaLengkap] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [konfirmasiPassword, setKonfirmasiPassword] = useState("");

  const tanganiDaftar = (e: React.FormEvent) => {
    e.preventDefault();

    if (
    !namaLengkap ||
    !username ||
    !email ||
    !password ||
    !konfirmasiPassword
  ) {
    alert("Silakan lengkapi semua data");
    return;
  }

   if (password !== konfirmasiPassword) {
    alert("Konfirmasi password tidak sesuai");
    return;
  }

    console.log({
      namaLengkap,
      username,
      email,
      password,
      konfirmasiPassword,
    });

    alert("Akun berhasil dibuat. Silakan masuk.");
    router.replace("/login");
  };

  return (

    <div className={`pembungkus-daftar ${playfair.variable} ${leagueSpartan.variable}`}>

      <div className="kartu-daftar">

        <h1 className="judul-daftar">
          Buat Akun
        </h1>

        <div className="logo-kopi"></div>

        <form
          onSubmit={tanganiDaftar}
          className="form-daftar"
        >

          {/* Nama Lengkap */}

          <div className="grup-input">

            <input
              type="text"
              placeholder="Masukkan Nama Lengkap"
              value={namaLengkap}
              onChange={(e) => setNamaLengkap(e.target.value)}
            />

          </div>

          {/* Username */}

          <div className="grup-input">

            <input
              type="text"
              placeholder="Masukkan Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

          </div>

          {/* Email */}

          <div className="grup-input">

            <input
              type="email"
              placeholder="Masukkan Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

          </div>

          {/* Password */}

          <div className="grup-input">

            <input
              type="password"
              placeholder="Masukkan Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

          </div>

          {/* Konfirmasi Password */}

          <div className="grup-input">

            <input
              type="password"
              placeholder="Konfirmasi Password"
              value={konfirmasiPassword}
              onChange={(e) => setKonfirmasiPassword(e.target.value)}
            />

          </div>

          <button
            type="submit"
            className="btn-daftar"
          >
            Daftar
          </button>

        </form>

        <div className="metode-daftar">
          <span>Atau Daftar Dengan</span>
        </div>

       <FcGoogle
          size={35}
          className="icon-google"
          onClick={() => {
          console.log("Login Google diklik");
          }}
        />


      </div>

    </div>

  );
}