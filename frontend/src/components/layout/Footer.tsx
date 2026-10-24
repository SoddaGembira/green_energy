import { useState, useEffect } from 'react';
import fgeSymbol from '../../assets/images/fge-symbol.png';
import fgeWordmark from '../../assets/images/fge-wordmark.png';
import { navigateTo } from '../../utils/router';

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState(null, '', '#beranda');
  };

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-main">
          <div className="footer-brand-block">
            <a href="#beranda" className="brand brand-footer" aria-label="Fajar Green Energy, beranda">
              <img src={fgeSymbol} className="brand-symbol" alt="" width="670" height="672" />
              <img src={fgeWordmark} className="brand-wordmark" alt="Fajar Green Energy" width="2121" height="524" />
            </a>
            <p>Pengembangan SPKLU dan ekosistem energi yang menghubungkan mobilitas dengan teknologi.</p>
          </div>
          <div className="footer-links">
            <h3>Jelajahi</h3>
            <a href="#tentang">Tentang Kami</a>
            <a href="#solusi">Solusi SPKLU</a>
            <a href="#projects">Projects</a>
            <a href="#faq">Pertanyaan Umum</a>
          </div>
          <div className="footer-links footer-contact">
            <h3>Kontak Kami</h3>
            <a href="mailto:admin@fajargreen.id" className="footer-contact-item">
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
                aria-hidden="true"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
              </svg>
              <span>admin@fajargreen.id</span>
            </a>
            <a href="tel:+62217375523" className="footer-contact-item">
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
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>021-7375523</span>
            </a>
            <div className="footer-contact-item footer-contact-address">
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
                aria-hidden="true"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Jalan Taman Bintaro No. 10, Bintaro, Pesanggrahan, Jakarta Selatan 12330</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 PT Fajar Green Energy. All rights reserved.</p>
          <a
            href="/kebijakan-privasi"
            className="footer-privacy-link"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/kebijakan-privasi');
            }}
          >
            Kebijakan Privasi
          </a>
          <div id="back-to-top" style={{ display: isVisible ? 'block' : 'none' }}>
            <a
              href="#beranda"
              className="bg-green position-relative align-items-center rounded-circle d-block border border-4 border-grey"
              aria-label="Kembali ke atas"
              onClick={scrollToTop}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up" aria-hidden="true">
                <path d="m5 12 7-7 7 7"></path>
                <path d="M12 19V5"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

