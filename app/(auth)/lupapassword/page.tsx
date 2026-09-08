"use client";

import "./lupapassword.css";
import { useState } from "react";
import Link from "next/link";
import { League_Spartan, Playfair_Display, Poppins } from "next/font/google";

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

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"], // Mengatur ketebalan font yang dibutuhkan
  variable: "--font-poppins",
});

export default function HalamanLupaPassword() {

  const [emailAtauUsername, setEmailAtauUsername] = useState("");

  const tanganiResetPassword = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      emailAtauUsername,
    });
  };

  return (

    <div className={`pembungkus-lupa-password ${playfair.variable} ${leagueSpartan.variable} ${poppins.variable}`}>

      <div className="kartu-lupa-password">

        <h1 className="judul-lupa-password">
          Lupa Password?
        </h1>

        <p className="subjudul-lupa-password">
          Masukkan alamat email yang terdaftar.
          kami akan mengirimkan tautan untuk
          mengatur ulang sandi anda
        </p>
        
        <form
          onSubmit={tanganiResetPassword}
          className="form-lupa-password"
        >

          {/* Input Email / Username */}

          <div className="grup-input">

            <input
              type="text"
              placeholder="Masukkan Email Anda"
              value={emailAtauUsername}
              onChange={(e) => setEmailAtauUsername(e.target.value)}
            />

          </div>

          {/* Tombol Kirim */}

          <button
            type="submit"
            className="btn-reset-password"
          >
            Kirim Link
          </button>

        </form>

       

      </div>

    </div>

  );
}