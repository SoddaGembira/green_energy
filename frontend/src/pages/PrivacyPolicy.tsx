import React from 'react';
import { navigateTo } from '../utils/router';

interface PrivacyPolicyProps {
  onBack?: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onBack) {
      onBack();
    } else {
      navigateTo('/');
    }
  };

  const sections = [
    { id: 'pendahuluan', title: '1. Pendahuluan' },
    { id: 'jenis-data', title: '2. Jenis Data yang Dapat Kami Proses' },
    { id: 'tujuan', title: '3. Tujuan Pemrosesan Data Pribadi' },
    { id: 'dasar-hukum', title: '4. Dasar Pemrosesan Data Pribadi' },
    { id: 'cookies', title: '5. Cookies dan Teknologi Sejenis' },
    { id: 'pengungkapan', title: '6. Pengungkapan kepada Pihak Ketiga' },
    { id: 'penyimpanan', title: '7. Penyimpanan dan Keamanan Data' },
    { id: 'transfer-lintas-negara', title: '8. Pemrosesan atau Transfer Lintas Negara' },
    { id: 'hak-subjek', title: '9. Hak Subjek Data Pribadi' },
    { id: 'tautan-pihak-ketiga', title: '10. Tautan ke Situs Pihak Ketiga' },
    { id: 'perubahan', title: '11. Perubahan Pernyataan Privasi' },
    { id: 'kontak-perusahaan', title: '12. Kontak Perusahaan' },
  ];

  return (
    <article className="privacy-page section">
      <div className="wrap">
        {/* Navigation Breadcrumb & Back Button */}
        <div className="privacy-top-bar">
          <a href="/" onClick={handleBack} className="privacy-back-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            <span>Kembali ke Beranda</span>
          </a>
        </div>

        {/* Hero / Header Card */}
        <header className="privacy-header">
          <div className="privacy-badge">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <span>DOKUMEN RESMI · KEBIJAKAN PRIVASI</span>
          </div>

          <h1 className="privacy-title">PERNYATAAN PRIVASI</h1>
          <p className="privacy-subtitle">PT Fajar Green Energy</p>
          <div className="privacy-meta">
            <span className="privacy-date">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Terakhir diperbarui: <strong>21 Oktober 2026</strong>
            </span>
            <span className="privacy-divider" aria-hidden="true">•</span>
            <span>Berlaku untuk pengunjung situs www.fajargreen.id</span>
          </div>
        </header>

        {/* Table of Contents / Quick Jump */}
        <nav className="privacy-toc" aria-label="Daftar isi kebijakan privasi">
          <p className="privacy-toc-title">Daftar Isi Dokumen</p>
          <div className="privacy-toc-grid">
            {sections.map((sec) => (
              <a key={sec.id} href={`#${sec.id}`} className="privacy-toc-item">
                {sec.title}
              </a>
            ))}
          </div>
        </nav>

        {/* Main Document Content */}
        <div className="privacy-content-card">
          {/* Section 1 */}
          <section id="pendahuluan" className="privacy-section-item">
            <div className="privacy-section-header">
              <h2>1. Pendahuluan</h2>
            </div>
            <div className="privacy-body">
              <p>
                PT Fajar Green Energy (&quot;Perusahaan&quot; atau &quot;Kami&quot;) menghormati dan berkomitmen untuk melindungi privasi pengunjung website <strong>www.fajargreen.id</strong> (&quot;Situs&quot;).
              </p>
              <p>
                Pernyataan Privasi ini menjelaskan jenis data pribadi yang dapat Kami proses, tujuan dan dasar pemrosesannya, penggunaan penyedia layanan, langkah pelindungan, serta hak pengunjung. Pernyataan ini disusun dengan mengacu pada <strong>Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi</strong>, <strong>Peraturan Pemerintah Nomor 71 Tahun 2019 tentang Penyelenggaraan Sistem dan Transaksi Elektronik</strong>, dan peraturan terkait yang berlaku di Indonesia.
              </p>
              <p>
                Situs terutama berfungsi sebagai sarana informasi mengenai profil, kegiatan, dan layanan Perusahaan, termasuk pengembangan infrastruktur pengisian kendaraan listrik (SPKLU), serta sebagai saluran awal komunikasi dan kerja sama bisnis.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="jenis-data" className="privacy-section-item">
            <div className="privacy-section-header">
              <h2>2. Jenis Data yang Dapat Kami Proses</h2>
            </div>
            <div className="privacy-body">
              <p>
                Pengunjung dapat membaca informasi pada Situs tanpa harus membuat akun atau secara langsung menyerahkan data pribadi. Namun, data berikut dapat diproses dalam keadaan tertentu:
              </p>
              <div className="privacy-subcards">
                <div className="privacy-subcard">
                  <div className="privacy-subcard-badge">a</div>
                  <div>
                    <h3>Data komunikasi yang Anda sampaikan secara sukarela</h3>
                    <p>
                      Ketika Anda menghubungi Kami melalui email, telepon, atau saluran kontak lain yang disediakan, Kami dapat menerima nama, alamat email, nomor telepon, nama perusahaan atau instansi, isi pesan, dan informasi lain yang Anda pilih untuk sampaikan.
                    </p>
                  </div>
                </div>

                <div className="privacy-subcard">
                  <div className="privacy-subcard-badge">b</div>
                  <div>
                    <h3>Data teknis kunjungan</h3>
                    <p>
                      Ketika Situs diakses, penyedia hosting atau infrastruktur pendukung dapat memproses informasi teknis seperti alamat IP, jenis browser dan perangkat, waktu kunjungan, halaman yang diakses, dan catatan keamanan atau kesalahan sistem, sesuai konfigurasi layanan yang digunakan.
                    </p>
                  </div>
                </div>
              </div>
              <p className="privacy-note">
                <strong>Catatan Penting:</strong> Kami tidak meminta data pribadi yang bersifat spesifik atau sensitif sebagai persyaratan untuk mengakses konten informasi pada Situs.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="tujuan" className="privacy-section-item">
            <div className="privacy-section-header">
              <h2>3. Tujuan Pemrosesan Data Pribadi</h2>
            </div>
            <div className="privacy-body">
              <p>
                Data pribadi diproses secara terbatas untuk tujuan yang relevan, antara lain:
              </p>
              <ul className="privacy-list">
                <li>
                  <span className="privacy-bullet" aria-hidden="true"></span>
                  <span>Menjawab pertanyaan, permintaan informasi, dan komunikasi yang disampaikan kepada Perusahaan.</span>
                </li>
                <li>
                  <span className="privacy-bullet" aria-hidden="true"></span>
                  <span>Menindaklanjuti permintaan kerja sama, kemitraan, atau hubungan bisnis.</span>
                </li>
                <li>
                  <span className="privacy-bullet" aria-hidden="true"></span>
                  <span>Menjaga fungsi, ketersediaan, kinerja, dan keamanan Situs.</span>
                </li>
                <li>
                  <span className="privacy-bullet" aria-hidden="true"></span>
                  <span>Menangani gangguan teknis, mendeteksi penyalahgunaan, dan memenuhi kewajiban hukum yang berlaku.</span>
                </li>
              </ul>
              <p>
                Kami tidak menggunakan data pribadi untuk tujuan yang tidak terkait tanpa dasar pemrosesan yang sah.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="dasar-hukum" className="privacy-section-item">
            <div className="privacy-section-header">
              <h2>4. Dasar Pemrosesan Data Pribadi</h2>
            </div>
            <div className="privacy-body">
              <p>
                Sesuai keadaan dan tujuan pemrosesan, Kami mengandalkan dasar hukum yang relevan berdasarkan peraturan yang berlaku, termasuk persetujuan yang sah apabila diperlukan, pelaksanaan tindakan atas permintaan Anda sebelum suatu perjanjian, pemenuhan kewajiban hukum, atau kepentingan sah Perusahaan dengan memperhatikan keseimbangan kepentingan dan hak subjek data pribadi.
              </p>
              <p>
                Kunjungan ke Situs tidak dengan sendirinya dianggap sebagai persetujuan untuk setiap jenis pemrosesan data pribadi.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section id="cookies" className="privacy-section-item">
            <div className="privacy-section-header">
              <h2>5. Cookies dan Teknologi Sejenis</h2>
            </div>
            <div className="privacy-body">
              <p>
                Situs dapat menggunakan cookies atau teknologi sejenis yang diperlukan untuk fungsi dasar, keamanan, atau pengoperasian layanan. Apabila Kami menggunakan cookies analitik atau cookies non-esensial, Kami akan memberikan informasi yang sesuai dan meminta persetujuan jika diwajibkan oleh hukum.
              </p>
              <p>
                Anda dapat mengatur atau membatasi cookies melalui pengaturan browser. Pembatasan tertentu mungkin memengaruhi fungsi Situs.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section id="pengungkapan" className="privacy-section-item">
            <div className="privacy-section-header">
              <h2>6. Pengungkapan kepada Pihak Ketiga</h2>
            </div>
            <div className="privacy-body">
              <p>
                Kami tidak menjual atau memperdagangkan data pribadi pengunjung. Untuk tujuan yang sah dan terbatas, data dapat diproses oleh pihak yang mendukung pengoperasian Situs atau komunikasi Perusahaan, seperti penyedia hosting, layanan email, dan penyedia infrastruktur teknologi.
              </p>
              <p>
                Kami mengambil langkah yang wajar untuk memastikan pihak-pihak tersebut memproses data sesuai kebutuhan layanan dan ketentuan pelindungan data yang berlaku. Data juga dapat diungkapkan apabila diperlukan untuk memenuhi kewajiban hukum atau permintaan yang sah dari otoritas berwenang.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section id="penyimpanan" className="privacy-section-item">
            <div className="privacy-section-header">
              <h2>7. Penyimpanan dan Keamanan Data</h2>
            </div>
            <div className="privacy-body">
              <p>
                Kami menyimpan data pribadi selama diperlukan untuk mencapai tujuan pemrosesan, menindaklanjuti komunikasi atau hubungan bisnis, dan memenuhi kewajiban hukum yang berlaku. Lama penyimpanan dapat berbeda bergantung pada jenis data, kebutuhan operasional yang sah, serta ketentuan layanan infrastruktur terkait.
              </p>
              <p>
                Setelah tidak lagi diperlukan dan tidak terdapat dasar hukum untuk mempertahankannya, data akan dihapus, dimusnahkan, atau dianonimkan sesuai ketentuan yang berlaku.
              </p>
              <p>
                Kami menerapkan langkah-langkah teknis dan organisasi yang wajar untuk melindungi data dari akses, penggunaan, perubahan, pengungkapan, kehilangan, atau kerusakan yang tidak sah. Jika terjadi kegagalan pelindungan data pribadi yang wajib diberitahukan, Kami akan melakukan pemberitahuan sesuai ketentuan hukum yang berlaku.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section id="transfer-lintas-negara" className="privacy-section-item">
            <div className="privacy-section-header">
              <h2>8. Pemrosesan atau Transfer Data Lintas Negara</h2>
            </div>
            <div className="privacy-body">
              <p>
                Layanan hosting atau teknologi yang mendukung Situs dapat melibatkan pemrosesan data di luar wilayah Indonesia. Apabila terjadi transfer data pribadi lintas negara, Kami akan memperhatikan persyaratan dan mekanisme pelindungan sebagaimana ditentukan dalam peraturan perundang-undangan yang berlaku.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section id="hak-subjek" className="privacy-section-item">
            <div className="privacy-section-header">
              <h2>9. Hak Subjek Data Pribadi</h2>
            </div>
            <div className="privacy-body">
              <p>
                Sesuai peraturan perundang-undangan yang berlaku, Anda dapat memiliki hak untuk memperoleh informasi mengenai pemrosesan data pribadi, mengakses data pribadi, meminta perbaikan data yang tidak akurat, meminta penghapusan atau pemusnahan data, menarik persetujuan apabila pemrosesan didasarkan pada persetujuan, serta menggunakan hak lain yang diatur oleh hukum.
              </p>
              <p>
                Untuk menggunakan hak tersebut, silakan hubungi <a href="mailto:admin@fajargreen.id" className="privacy-link">admin@fajargreen.id</a>. Kami dapat meminta informasi yang wajar untuk memverifikasi identitas dan akan menindaklanjuti permintaan sesuai persyaratan, batas waktu, dan pengecualian yang berlaku.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section id="tautan-pihak-ketiga" className="privacy-section-item">
            <div className="privacy-section-header">
              <h2>10. Tautan ke Situs Pihak Ketiga</h2>
            </div>
            <div className="privacy-body">
              <p>
                Situs dapat memuat tautan menuju website atau layanan yang dikelola oleh pihak ketiga. Praktik pelindungan data pada layanan tersebut berada di luar pengendalian Kami. Kami menyarankan Anda membaca kebijakan privasi masing-masing layanan sebelum menyerahkan data pribadi.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section id="perubahan" className="privacy-section-item">
            <div className="privacy-section-header">
              <h2>11. Perubahan Pernyataan Privasi</h2>
            </div>
            <div className="privacy-body">
              <p>
                Kami dapat memperbarui Pernyataan Privasi ini apabila terdapat perubahan pada layanan, proses pengelolaan data, teknologi yang digunakan, atau ketentuan hukum. Versi terbaru akan ditampilkan di Situs beserta tanggal pembaruannya. Apabila diwajibkan oleh hukum, Kami akan memberikan pemberitahuan tambahan.
              </p>
            </div>
          </section>

          {/* Section 12 */}
          <section id="kontak-perusahaan" className="privacy-section-item">
            <div className="privacy-section-header">
              <h2>12. Kontak Perusahaan</h2>
            </div>
            <div className="privacy-body">
              <p>
                Pertanyaan mengenai Pernyataan Privasi atau permintaan sehubungan dengan data pribadi dapat disampaikan melalui kontak resmi berikut:
              </p>

              <div className="privacy-contact-card">
                <div className="privacy-company-brand">
                  <h3>PT FAJAR GREEN ENERGY</h3>
                  <p>Infrastruktur SPKLU &amp; Solusi Energi Terbarukan</p>
                </div>

                <div className="privacy-contact-details">
                  <div className="privacy-contact-row">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <div>
                      <strong>Alamat Kantor</strong>
                      <p>Jalan Taman Bintaro No. 10, Bintaro, Pesanggrahan, Jakarta Selatan 12330</p>
                    </div>
                  </div>

                  <div className="privacy-contact-row">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                    </svg>
                    <div>
                      <strong>Email Resmi</strong>
                      <p>
                        <a href="mailto:admin@fajargreen.id">admin@fajargreen.id</a>
                      </p>
                    </div>
                  </div>

                  <div className="privacy-contact-row">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <div>
                      <strong>Telepon</strong>
                      <p>
                        <a href="tel:+62217375523">021-7375523</a>
                      </p>
                    </div>
                  </div>

                  <div className="privacy-contact-row">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" x2="22" y1="12" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    <div>
                      <strong>Website</strong>
                      <p>
                        <a href="https://www.fajargreen.id" target="_blank" rel="noopener noreferrer">
                          www.fajargreen.id
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom Navigation */}
        <div className="privacy-bottom-bar">
          <a href="/" onClick={handleBack} className="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Kembali ke Beranda
          </a>
        </div>
      </div>
    </article>
  );
};
