"use client";
import "./login.css";
import Link from "next/link";
import { League_Spartan, Playfair_Display} from "next/font/google";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useRouter } from "next/navigation";

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

export default function HalamanLogin() {
  const router = useRouter();
  const [identitas, setIdentitas  ] = useState("");
  const [kataKunci, setKataKunci] = useState("");

  const tanganiSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!identitas || !kataKunci) {
    alert("Silahkan masukan email dan password anda");
    return;
  }
    if (identitas.includes("@") && !identitas.includes(".")) {
    alert("Format email tidak valid");
    return;
  }

    console.log({
      identitas,
      kataKunci,
    });

    localStorage.setItem("sudahLogin", "true");
    router.replace("/");
  };

  return (
    
    <div className={`pembungkus-login ${playfair.variable} ${leagueSpartan.variable}`}>
      <div className="kartu-login">

        <h1 className="judul-login">
          Selamat Datang
        </h1>

        <p className="subjudul-login">
          Silakan masuk ke akun Anda
        </p>
        <div className="logo-kopi"></div>

        <form
          onSubmit={tanganiSubmit}
          className="form-login"
        >

          {/* Email */}

          <div className="grup-input">

            <input
              type="text"
              placeholder="Masukkan Email atau Username"
              value={identitas}
              onChange={(e) => setIdentitas(e.target.value)}
            />

          </div>

          {/* Password */}

          <div className="grup-input">

            <input
              type="password"
              placeholder="Masukkan Password"
              value={kataKunci}
              onChange={(e) => setKataKunci(e.target.value)}
            />

          </div>

         <Link href="/lupapassword" className="lupa-password">
              Lupa Password?
          </Link>   

          <button
            type="submit"
            className="btn-login"
          >
            Masuk
          </button>

          <div className="masuk-daftar">
            Belum Punya Akun?{" "}
            <Link
            href="/daftar"
            className="link-daftar"
            >
              Daftar
            </Link>
          </div>

          <div className="metode-masuk">
            Atau masuk dengan
          </div>
          
          <FcGoogle
            size={35}
            className="icon-google"
            onClick={() => {
              console.log("Login Google diklik");
            }}
          />
        </form>

      </div>

    </div>
  );
}