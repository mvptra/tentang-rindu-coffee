"use client";

import "./pesanan.css";

export default function Pesanan() {
  return (
    <div className="halaman-pesanan">

      {/* =========================================
          JUDUL
      ========================================= */}

      <div className="judul-pesanan">
        <h1 className="kata-kata-pesanan">
          Pesanan Masuk
        </h1>
      </div>


      {/* =========================================
          TABEL PESANAN
      ========================================= */}

      <div className="tabel-pesanan">

        <table>

          <thead>
            <tr>
              <th>ID Pesanan</th>
              <th>Customer</th>
              <th>Produk</th>
              <th>Total</th>
              <th>Status</th>
              <th>Bukti Transaksi</th>
              <th>Aksi</th>
            </tr>
          </thead>


          <tbody>

            {/* Data pesanan dari API nanti
                akan ditampilkan di bagian ini */}

            <tr>
              <td>
                <div className="kotak-id-pesanan">
                  <div className="isi-id-pesanan">
                    -
                  </div>
                </div>
              </td>

              <td>
                <div className="kotak-customer">
                  <div className="isi-customer">
                    -
                  </div>
                </div>
              </td>

              <td>
                <div className="kotak-produk">
                  <div className="isi-produk">
                    -
                  </div>
                </div>
              </td>

              <td>
                <div className="kotak-total">
                  <div className="isi-total">
                    -
                  </div>
                </div>
              </td>

              <td>
                <div className="kotak-status">
                  <div className="isi-status">
                    -
                  </div>
                </div>
              </td>

              <td>
                <div className="kotak-bukti-transaksi">
                  <div className="isi-bukti-transaksi">
                    -
                  </div>
                </div>
              </td>
              <td>
                <div className="aksi-pesanan">
                  -
                </div>
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}