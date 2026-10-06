import { useState } from 'react';
import signatureDestination from '../assets/images/signature-destination.webp';
import sitePlanImage from '../assets/images/site-plan.png';
import denahPdf from '../assets/SPKLU-Signature-Konsep-Denah.pdf';

export const Signature = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section id="signature" className="signature-section">
      <div className="signature-panel">
        <div className="signature-copy">
          <div className="section-heading heading-light">
            <p className="eyebrow">CHARGING &amp; LIFESTYLE</p>
            <h2>
              Konsep
              <br />
              <em>SPKLU Signature.</em>
            </h2>
          </div>
          <p>
            Area pengisian yang terhubung dengan ruang untuk beristirahat,
            bertemu, dan menikmati waktu.
          </p>
          <div className="amenities">
            <span>
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
                className="lucide lucide-plug-zap"
                aria-hidden="true"
              >
                <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path>
                <path d="m2 22 3-3"></path>
                <path d="M7.5 13.5 10 11"></path>
                <path d="M10.5 16.5 13 14"></path>
                <path d="m18 3-4 4h6l-4 4"></path>
              </svg>
              Charging area
            </span>
            <span>
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
                className="lucide lucide-coffee"
                aria-hidden="true"
              >
                <path d="M10 2v2"></path>
                <path d="M14 2v2"></path>
                <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path>
                <path d="M6 2v2"></path>
              </svg>
              Café &amp; lounge
            </span>
            <span>
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
                className="lucide lucide-car"
                aria-hidden="true"
              >
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                <circle cx="7" cy="17" r="2"></circle>
                <path d="M9 17h6"></path>
                <circle cx="17" cy="17" r="2"></circle>
              </svg>
              Parkir pengunjung
            </span>
            <span>
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
                className="lucide lucide-cable"
                aria-hidden="true"
              >
                <path d="M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2-2v2a1 1 0 0 1-1 1z"></path>
                <path d="M17 21v-2"></path>
                <path d="M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10"></path>
                <path d="M21 21v-2"></path>
                <path d="M3 5V3"></path>
                <path d="M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z"></path>
                <path d="M7 5V3"></path>
              </svg>
              Area battery swap*
            </span>
          </div>
          <button
            className="button button-bright"
            onClick={() => setIsDialogOpen(true)}
          >
            Lihat Denah Konsep
          </button>
          <p className="signature-note">
            *Sesuai denah konsep yang tersedia. Fasilitas akhir mengikuti rencana
            proyek.
          </p>
        </div>
        <figure className="signature-image">
          <img
            src={signatureDestination}
            alt="Visualisasi arsitektur konsep SPKLU Signature dengan café dan lounge"
            loading="lazy"
            width="1672"
            height="941"
          />
          <figcaption>Visualisasi konsep SPKLU Signature</figcaption>
        </figure>
      </div>

      {isDialogOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
            onClick={() => setIsDialogOpen(false)}
            style={{ pointerEvents: 'auto' }}
            data-state="open"
          ></div>
          <div
            role="dialog"
            id="radix-_R_pi_"
            data-state="open"
            data-slot="dialog-content"
            className="fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg plan-dialog"
            tabIndex={-1}
            aria-describedby="radix-_R_piH2_"
            aria-labelledby="radix-_R_piH1_"
            style={{ pointerEvents: 'auto' }}
          >
            <div
              data-slot="dialog-header"
              className="flex flex-col gap-2 text-center sm:text-left"
            >
              <p className="eyebrow">RANCANGAN FASILITAS</p>
              <h2
                id="radix-_R_piH1_"
                data-slot="dialog-title"
                className="text-lg leading-none font-semibold"
              >
                Denah konsep SPKLU
              </h2>
              <p
                id="radix-_R_piH2_"
                data-slot="dialog-description"
                className="text-sm text-muted-foreground"
              >
                14 petak EV dan 7 parkir mobil umum, dengan café/lounge serta
                fasilitas pendukung. Jumlah petak tidak menyatakan jumlah mesin
                pengisian.
              </p>
            </div>
            <div className="plan-scroll">
              <img
                alt="Denah konsep SPKLU: petak EV1 sampai EV14, parkir P1 sampai P7, café dan lounge, gardu PLN, toilet, teras, area merokok, battery swap dan parkir motor"
                width="1092"
                height="1544"
                src={sitePlanImage}
              />
            </div>
            <a
              href={denahPdf}
              className="button button-outline"
              target="_blank"
              rel="noreferrer"
              download
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-download"
                aria-hidden="true"
              >
                <path d="M12 15V3"></path>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <path d="m7 10 5 5 5-5"></path>
              </svg>
              Unduh PDF Denah
            </a>
            <button
              type="button"
              onClick={() => setIsDialogOpen(false)}
              data-slot="dialog-close"
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
        </>
      )}
    </section>
  );
};
