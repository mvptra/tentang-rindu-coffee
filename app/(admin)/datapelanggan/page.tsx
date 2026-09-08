"use client";

import "./pelanggan.css";

export default function Pelanggan() {
  return (
    <div className="halaman-pelanggan">

      {/* =========================================
          JUDUL
      ========================================= */}

      <div className="judul-pelanggan">
        <h1 className="kata-kata-pelanggan">
          Data Pelanggan
        </h1>
      </div>


      {/* =========================================
          TABEL PELANGGAN
      ========================================= */}

      <div className="tabel-pelanggan">

        <table>

          <thead>
            <tr>
              <th>Nama</th>
              <th>Email</th>
              <th>No. Telepon</th>
              <th>Total Pesanan</th>
              <th>Total Belanja</th>
            </tr>
          </thead>


          <tbody>

            {/* Data pelanggan dari API nanti
                akan ditampilkan di bagian ini */}

            <tr>

              <td>
                <div className="kotak-nama">
                  <div className="isi-nama">
                    -
                  </div>
                </div>
              </td>


              <td>
                <div className="kotak-email">
                  <div className="isi-email">
                    -
                  </div>
                </div>
              </td>


              <td>
                <div className="kotak-no-telepon">
                  <div className="isi-no-telepon">
                    -
                  </div>
                </div>
              </td>


              <td>
                <div className="kotak-total-pesanan">
                  <div className="isi-total-pesanan">
                    -
                  </div>
                </div>
              </td>


              <td>
                <div className="kotak-total-belanja">
                  <div className="isi-total-belanja">
                    -
                  </div>
                </div>
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

