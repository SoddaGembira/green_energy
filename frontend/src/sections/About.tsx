import chargingFacility from '../assets/images/charging-facility.webp';
import companyProfilePdf from '../assets/Fajar-Green-Energy-Company-Profile.pdf';

export const About = () => {
  return (
    <section id="tentang" className="section about-section">
      <div className="wrap about-grid">
        <div className="about-copy">
          <div className="section-heading">
            <p className="eyebrow">TENTANG FAJAR GREEN ENERGY</p>
            <h2>
              Membangun SPKLU.
              <br />
              <em>Menghubungkan ekosistem.</em>
            </h2>
          </div>
          <p className="lead">
            PT Fajar Green Energy berfokus pada pengembangan SPKLU dan solusi
            energi terbarukan yang terintegrasi.
          </p>
          <p>
            Kami melihat setiap titik pengisian sebagai bagian dari
            infrastruktur yang menghubungkan mobilitas, energi, dan teknologi.
            Lokasi yang tepat dan kolaborasi menjadi dasar pengembangannya.
          </p>
          <div className="commitments">
            <div>
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
                className="lucide lucide-check"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              <span>Pengembangan sesuai potensi lokasi</span>
            </div>
            <div>
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
                className="lucide lucide-check"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              <span>Infrastruktur dan fasilitas yang terencana</span>
            </div>
            <div>
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
                className="lucide lucide-check"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              <span>Integrasi dengan ekosistem digital</span>
            </div>
          </div>
          <a
            href={companyProfilePdf}
            target="_blank"
            rel="noreferrer"
            className="button"
            style={{ marginTop: '1rem' }}
          >
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
              className="lucide lucide-download"
              aria-hidden="true"
            >
              <path d="M12 15V3"></path>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <path d="m7 10 5 5 5-5"></path>
            </svg>
            Unduh Company Profile
          </a>
        </div>
        <figure className="about-image">
          <img
            src={chargingFacility}
            alt="Visualisasi konsep SPKLU dengan kanopi dan kendaraan listrik"
            width="1448"
            height="1086"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
};
