import { useState } from 'react';

export const Solutions = () => {
  const [activeDialog, setActiveDialog] = useState<string | null>(null);

  const closeDialog = () => setActiveDialog(null);

  return (
    <section id="solusi" className="section solutions-section">
      <div className="wrap">
        <div className="section-intro">
          <div className="section-heading">
            <p className="eyebrow">SOLUSI SPKLU</p>
            <h2>
              Format yang tepat
              <br />
              <em>untuk setiap rencana.</em>
            </h2>
          </div>
          <p>
            Dari satu mesin pengisian hingga destinasi dengan café dan lounge.
            Temukan pendekatan yang sesuai dengan kebutuhan lokasi Anda.
          </p>
        </div>
        <div className="solutions-grid">
          <article className="solution-card solution-single">
            <div className="solution-top">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-plug-zap"
                aria-hidden="true"
              >
                <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path>
                <path d="m2 22 3-3"></path>
                <path d="M7.5 13.5 10 11"></path>
                <path d="M10.5 16.5 13 14"></path>
                <path d="m18 3-4 4h6l-4 4"></path>
              </svg>
              <span>01</span>
            </div>
            <p className="card-eyebrow">SATU MESIN</p>
            <h3>SPKLU</h3>
            <p className="solution-intro">
              Fasilitas pengisian kendaraan listrik dengan kebutuhan ruang
              yang ringkas.
            </p>
            <div className="solution-spec">
              <strong>
                ±50<small>m²</small>
              </strong>
              <span>1 mesin · 2 nozzle</span>
            </div>
            <ul>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                Pilihan dengan atau tanpa kanopi
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                Acuan mesin fast charging 120 kW
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                Konfigurasi mengikuti hasil survei
              </li>
            </ul>
            <button
              className="button button-outline"
              onClick={() => setActiveDialog('spklu')}
            >
              Lihat Detail
            </button>
          </article>
          <article className="solution-card solution-center">
            <div className="solution-top">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-building2 lucide-building-2"
                aria-hidden="true"
              >
                <path d="M10 12h4"></path>
                <path d="M10 8h4"></path>
                <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
              </svg>
              <span>02</span>
            </div>
            <p className="card-eyebrow">BEBERAPA TITIK PENGISIAN</p>
            <h3>SPKLU Center</h3>
            <p className="solution-intro">
              Pengembangan fasilitas dengan beberapa mesin pengisian dalam
              satu lokasi.
            </p>
            <div className="solution-spec">
              <strong>
                ±900<small>m²</small>
              </strong>
              <span>Min. 6 mesin · 12 nozzle</span>
            </div>
            <ul>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                Area pengisian menggunakan kanopi
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                Skema mencantumkan mesin PSO 22 kW
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                Fasilitas pendukung terencana
              </li>
            </ul>
            <button
              className="button button-outline"
              onClick={() => setActiveDialog('center')}
            >
              Lihat Detail
            </button>
          </article>
          <article className="solution-card solution-signature">
            <div className="solution-top">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-coffee"
                aria-hidden="true"
              >
                <path d="M10 2v2"></path>
                <path d="M14 2v2"></path>
                <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path>
                <path d="M6 2v2"></path>
              </svg>
              <span>03</span>
            </div>
            <p className="card-eyebrow">CHARGING + CAFÉ / LOUNGE</p>
            <h3>SPKLU Signature</h3>
            <p className="solution-intro">
              Konsep pengisian kendaraan yang terintegrasi dengan fasilitas
              untuk pengunjung.
            </p>
            <div className="solution-spec">
              <strong>
                Café<small>+ lounge</small>
              </strong>
              <span>Charging station berkanopi</span>
            </div>
            <ul>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                Café dan lounge dalam satu area
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                Fasilitas untuk kenyamanan pengunjung
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                Rancangan sesuai karakter lokasi
              </li>
            </ul>
            <button
              className="button button-outline"
              onClick={() => setActiveDialog('signature')}
            >
              Lihat Detail
            </button>
          </article>
        </div>
        <p className="section-note">
          Luas dan konfigurasi merupakan acuan dalam company profile. Kebutuhan
          akhir mengikuti hasil survei dan perencanaan teknis.
        </p>
      </div>

      {activeDialog && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
            onClick={closeDialog}
            style={{ pointerEvents: 'auto' }}
            data-state="open"
          ></div>

          {activeDialog === 'spklu' && (
            <div
              role="dialog"
              id="radix-_R_li_"
              data-state="open"
              data-slot="dialog-content"
              className="fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg solution-dialog"
              tabIndex={-1}
              aria-describedby="radix-_R_liH2_"
              aria-labelledby="radix-_R_liH1_"
              style={{ pointerEvents: 'auto' }}
            >
              <div data-slot="dialog-header" className="flex flex-col gap-2 text-center sm:text-left">
                <p className="eyebrow">SOLUSI FAJAR GREEN ENERGY</p>
                <h2 id="radix-_R_liH1_" data-slot="dialog-title" className="text-lg leading-none font-semibold">
                  SPKLU
                </h2>
                <p id="radix-_R_liH2_" data-slot="dialog-description" className="text-sm text-muted-foreground">
                  Fasilitas pengisian kendaraan listrik dengan kebutuhan ruang yang ringkas.
                </p>
              </div>
              <div className="dialog-spec">
                <strong>
                  ±50 <small>m²</small>
                </strong>
                <span>1 mesin · 2 nozzle</span>
              </div>
              <p>
                Format satu mesin menjadi pilihan untuk mengembangkan titik pengisian kendaraan listrik pada lokasi
                dengan ruang yang terbatas. Company profile menggunakan acuan lahan sekitar 50 m² dengan satu mesin
                dan dua nozzle.
              </p>
              <ul className="dialog-features">
                <li>
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
                    className="lucide lucide-check"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Pilihan dengan atau tanpa kanopi
                </li>
                <li>
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
                    className="lucide lucide-check"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Acuan mesin fast charging 120 kW
                </li>
                <li>
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
                    className="lucide lucide-check"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Konfigurasi mengikuti hasil survei
                </li>
              </ul>
              <p className="dialog-note">
                Daya yang disebutkan merupakan acuan mesin, bukan jaminan daya per nozzle. Ketersediaan daya, tata
                letak, dan fasilitas ditentukan melalui pemeriksaan lokasi.
              </p>
              <button className="button" onClick={() => { closeDialog(); document.querySelector<HTMLAnchorElement>('a[href="#kontak"]')?.click(); }}>Diskusikan Format Ini</button>
              <button
                type="button"
                data-slot="dialog-close"
                onClick={closeDialog}
                className="absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x"
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
                <span className="sr-only">Close</span>
              </button>
            </div>
          )}

          {activeDialog === 'center' && (
            <div
              role="dialog"
              id="radix-_R_li_"
              data-state="open"
              data-slot="dialog-content"
              className="fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg solution-dialog"
              tabIndex={-1}
              aria-describedby="radix-_R_liH2_"
              aria-labelledby="radix-_R_liH1_"
              style={{ pointerEvents: 'auto' }}
            >
              <div data-slot="dialog-header" className="flex flex-col gap-2 text-center sm:text-left">
                <p className="eyebrow">SOLUSI FAJAR GREEN ENERGY</p>
                <h2 id="radix-_R_liH1_" data-slot="dialog-title" className="text-lg leading-none font-semibold">
                  SPKLU Center
                </h2>
                <p id="radix-_R_liH2_" data-slot="dialog-description" className="text-sm text-muted-foreground">
                  Pengembangan fasilitas dengan beberapa mesin pengisian dalam satu lokasi.
                </p>
              </div>
              <div className="dialog-spec">
                <strong>
                  ±900 <small>m²</small>
                </strong>
                <span>Min. 6 mesin · 12 nozzle</span>
              </div>
              <p>
                SPKLU Center menggunakan acuan area sekitar 900 m² dengan minimal enam mesin dan dua belas nozzle.
                Dalam skema company profile, fasilitas ini menggunakan kanopi dan mencantumkan satu mesin PSO 22 kW.
              </p>
              <ul className="dialog-features">
                <li>
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
                    className="lucide lucide-check"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Area pengisian menggunakan kanopi
                </li>
                <li>
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
                    className="lucide lucide-check"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Skema mencantumkan mesin PSO 22 kW
                </li>
                <li>
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
                    className="lucide lucide-check"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Fasilitas pendukung terencana
                </li>
              </ul>
              <p className="dialog-note">
                Komposisi mesin utama dan PSO, kapasitas pasokan listrik, serta kebutuhan ruang akhir ditetapkan
                dalam perencanaan teknis.
              </p>
              <button className="button" onClick={() => { closeDialog(); document.querySelector<HTMLAnchorElement>('a[href="#kontak"]')?.click(); }}>Diskusikan Format Ini</button>
              <button
                type="button"
                data-slot="dialog-close"
                onClick={closeDialog}
                className="absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x"
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
                <span className="sr-only">Close</span>
              </button>
            </div>
          )}

          {activeDialog === 'signature' && (
            <div
              role="dialog"
              id="radix-_R_li_"
              data-state="open"
              data-slot="dialog-content"
              className="fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg solution-dialog"
              tabIndex={-1}
              aria-describedby="radix-_R_liH2_"
              aria-labelledby="radix-_R_liH1_"
              style={{ pointerEvents: 'auto' }}
            >
              <div data-slot="dialog-header" className="flex flex-col gap-2 text-center sm:text-left">
                <p className="eyebrow">SOLUSI FAJAR GREEN ENERGY</p>
                <h2 id="radix-_R_liH1_" data-slot="dialog-title" className="text-lg leading-none font-semibold">
                  SPKLU Signature
                </h2>
                <p id="radix-_R_liH2_" data-slot="dialog-description" className="text-sm text-muted-foreground">
                  Konsep pengisian kendaraan yang terintegrasi dengan fasilitas untuk pengunjung.
                </p>
              </div>
              <div className="dialog-spec">
                <strong>
                  Café <small>+ lounge</small>
                </strong>
                <span>Charging station berkanopi</span>
              </div>
              <p>
                SPKLU Signature menggabungkan area pengisian berkanopi dengan café atau lounge. Konsep ini memberi ruang
                bagi pengunjung untuk beristirahat dan beraktivitas selama berada di fasilitas.
              </p>
              <ul className="dialog-features">
                <li>
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
                    className="lucide lucide-check"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Café dan lounge dalam satu area
                </li>
                <li>
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
                    className="lucide lucide-check"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Fasilitas untuk kenyamanan pengunjung
                </li>
                <li>
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
                    className="lucide lucide-check"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Rancangan sesuai karakter lokasi
                </li>
              </ul>
              <p className="dialog-note">
                Luas lahan, jumlah mesin, fasilitas, serta status lokasi Signature akan mengikuti rencana proyek masing-masing.
              </p>
              <button className="button" onClick={() => { closeDialog(); document.querySelector<HTMLAnchorElement>('a[href="#kontak"]')?.click(); }}>Diskusikan Format Ini</button>
              <button
                type="button"
                data-slot="dialog-close"
                onClick={closeDialog}
                className="absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x"
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
                <span className="sr-only">Close</span>
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
};
