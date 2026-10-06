import heroEv from '../assets/images/hero-ev.webp';
import companyProfilePdf from '../assets/Fajar-Green-Energy-Company-Profile.pdf';

export const Hero = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-orbit orbit-one" aria-hidden="true"></div>
      <div className="hero-orbit orbit-two" aria-hidden="true"></div>
      <div className="wrap hero-inner">
        <div className="hero-heading">
          <p className="eyebrow">PT FAJAR GREEN ENERGY</p>
          <h1 id="hero-title">
            <span>INFRASTRUKTUR SPKLU</span>
            <br />
            UNTUK MOBILITAS LISTRIK.
          </h1>
        </div>
        <a
          className="hero-profile"
          href={companyProfilePdf}
          target="_blank"
          rel="noreferrer"
        >
          <svg
            id="rotatingText"
            viewBox="0 0 200 200"
            width="112"
            height="112"
            style={{ animation: 'spin 15s linear infinite' }}
          >
            <defs>
              <path
                id="circle"
                d="M 100, 100
                   m -75, 0
                   a 75, 75 0 1, 0 150, 0
                   a 75, 75 0 1, 0 -150, 0"
              ></path>
            </defs>
            <text fill="currentColor" fontSize="16.5" fontWeight="500">
              <textPath alignmentBaseline="hanging" xlinkHref="#circle" textLength="471" lengthAdjust="spacing">
                COMPANY PROFILE • COMPANY PROFILE •{" "}
              </textPath>
            </text>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-download"
            aria-hidden="true"
            style={{ position: 'absolute' }}
          >
            <path d="M12 15V3"></path>
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <path d="m7 10 5 5 5-5"></path>
          </svg>
        </a>
        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
        <div className="hero-lower">
          <div className="hero-art">
            <img
              src={heroEv}
              alt="Visualisasi kendaraan listrik putih dan perangkat pengisian daya"
              width="1536"
              height="1024"
              fetchPriority="high"
            />
          </div>
          <div className="hero-copy">
            <h2>
              Energi, mobilitas,
              <br />
              dan teknologi.
            </h2>
            <p>
              Kami mengembangkan SPKLU sebagai bagian dari ekosistem energi
              yang terhubung di Indonesia.
            </p>
            <a href="#kontak" className="button button-bright">
              Diskusikan Proyek Anda
            </a>
            <div className="hero-facts" style={{ display: 'grid', gap: '1rem', marginTop: '2rem', width: '100%' }}>
              <div
                className="feature-box"
                style={{
                  padding: '1.25rem',
                  borderRadius: '1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  color: '#fff',
                }}
              >
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <li style={{ display: 'flex', alignItems: 'baseline' }}>
                    <span style={{ fontSize: '2.5rem', fontWeight: 'bold', lineHeight: 1 }}>3</span>
                  </li>
                </ul>
                <span style={{ textTransform: 'uppercase', fontSize: '11px', fontWeight: 'bold', letterSpacing: '0.05em' }}>Format pengembangan</span>
              </div>
              <div
                className="feature-box"
                style={{
                  padding: '1.25rem',
                  borderRadius: '1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  color: '#fff',
                }}
              >
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <li style={{ display: 'flex', alignItems: 'baseline' }}>
                    <span style={{ fontSize: '2.5rem', fontWeight: 'bold', lineHeight: 1 }}>120</span>
                    <span style={{ marginLeft: '4px', fontSize: '1.25rem' }}>kW</span>
                  </li>
                </ul>
                <span style={{ textTransform: 'uppercase', fontSize: '11px', fontWeight: 'bold', letterSpacing: '0.05em' }}>Acuan mesin fast charging</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
