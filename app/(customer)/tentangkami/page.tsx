"use client";

import "./tentangkami.css";

export default function TentangKami() {
  return (
    <div className="halaman-tentang">

      {/* ========================= */}
      {/* HERO */}
      {/* ========================= */}

      <section className="hero-tentang">

        <h1 className="judul-hero">
          Tentang Rindu Coffee
        </h1>

        <p className="deskripsi-hero">
          Tempat di mana setiap cangkir kopi membawa cerita,
          kehangatan, dan kenangan yang tak terlupakan.
        </p>

      </section>

      {/* ========================= */}
      {/* SECTION 1 */}
      {/* ========================= */}

      <section className="section-tentang">

        <div className="gambar-section">
          <img
            src="/tentang1.png"
            alt="Tentang Rindu Coffee"
          />
        </div>

        <div className="teks-section">

          <h2>
            Tentang Rindu Coffee
          </h2>

          <p>
            Tentang Rindu Coffee hadir untuk menghadirkan
            pengalaman menikmati kopi yang hangat,
            nyaman, dan penuh makna. Kami percaya bahwa
            setiap secangkir kopi mampu menjadi teman
            terbaik untuk berbagi cerita, bekerja,
            maupun menikmati waktu sendiri.
          </p>

        </div>

      </section>

      {/* ========================= */}
      {/* SECTION 2 */}
      {/* ========================= */}

      <section className="section-tentang reverse">

        <div className="gambar-section">
          <img
            src="/tentang2.png"
            alt="Kualitas Bahan"
          />
        </div>

        <div className="teks-section">

          <h2>
            Kualitas Bahan Terbaik
          </h2>

          <p>
            Kami menggunakan biji kopi pilihan yang
            diproses dengan standar kualitas tinggi.
            Setiap biji dipilih dengan teliti untuk
            menghasilkan aroma dan cita rasa yang
            konsisten di setiap sajian.
          </p>

        </div>

      </section>

      {/* ========================= */}
      {/* SECTION 3 */}
      {/* ========================= */}

      <section className="section-tentang">

        <div className="gambar-section">
          <img
            src="/tentang3.png"
            alt="Suasana Coffee Shop"
          />
        </div>

        <div className="teks-section">

          <h2>
            Tempat Untuk Berbagi Cerita
          </h2>

          <p>
            Tentang Rindu Coffee bukan hanya tempat
            menikmati kopi, tetapi juga ruang untuk
            berbagi cerita, bekerja, berdiskusi,
            maupun menikmati waktu santai bersama
            orang-orang terdekat.
          </p>

        </div>

      </section>

      {/* ========================= */}
      {/* SECTION 4 */}
      {/* ========================= */}

      <section className="section-tentang reverse">

        <div className="gambar-section">
          <img
            src="/tentang4.png"
            alt="Komitmen Kami"
          />
        </div>

        <div className="teks-section">

          <h2>
            Komitmen Kami
          </h2>

          <p>
            Kami berkomitmen untuk selalu memberikan
            pelayanan terbaik, menyajikan kopi
            berkualitas, serta menciptakan pengalaman
            yang berkesan bagi setiap pelanggan yang
            datang ke Tentang Rindu Coffee.
          </p>

        </div>

      </section>

      {/* ===== Ulasan Pelanggan ===== */}

        <div className="bagian-ulasan">

          <h2 className="judul-ulasan">
            Apa Kata Pelanggan
          </h2>

          <p className="subjudul-ulasan">
            Kepuasan pelanggan adalah prioritas utama kami.
          </p>

          <div className="wadah-kartu-ulasan">

            {/* Review 1 */}

            <div className="kartu-ulasan">

              <div className="header-ulasan">

                <div className="avatar-ulasan">
                  B
                </div>

                <div className="identitas-ulasan">

                  <h3>Budi</h3>

                  <div className="bintang-ulasan">
                    ⭐⭐⭐⭐⭐
                  </div>

                </div>

              </div>

              <p className="isi-ulasan">
                Makanannya enak, rasanya pas dan packing-nya juga rapi.
              </p>

            </div>

            {/* Review 2 */}

            <div className="kartu-ulasan">

              <div className="header-ulasan">

                <div className="avatar-ulasan">
                  V
                </div>

                <div className="identitas-ulasan">

                  <h3>Ativ</h3>

                  <div className="bintang-ulasan">
                    ⭐⭐⭐⭐⭐
                  </div>

                </div>

              </div>

              <p className="isi-ulasan">
                Memuaskan, pelayanannya cepat dan sangat ramah.
              </p>

            </div>

            {/* Review 3 */}

            <div className="kartu-ulasan">

              <div className="header-ulasan">

                <div className="avatar-ulasan">
                  S
                </div>

                <div className="identitas-ulasan">

                  <h3>Steven</h3>

                  <div className="bintang-ulasan">
                    ⭐⭐⭐⭐⭐
                  </div>

                </div>

              </div>

              <p className="isi-ulasan">
                Pelayanannya oke, ramah dan produknya selalu fresh.
              </p>

            </div>

          </div>

      </div>

    </div>

    
  );
}