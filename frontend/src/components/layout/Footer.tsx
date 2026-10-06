import fgeSymbol from '../../assets/images/fge-symbol.png';
import fgeWordmark from '../../assets/images/fge-wordmark.png';
import companyProfilePdf from '../../assets/Fajar-Green-Energy-Company-Profile.pdf';

export const Footer = () => {
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
            <a href="#signature">SPKLU Signature</a>
            <a href="#proses">Proses Pengembangan</a>
          </div>
          <div className="footer-links">
            <h3>Informasi</h3>
            <a href="#projects">Projects</a>
            <a href="#faq">Pertanyaan Umum</a>
            <a href={companyProfilePdf} target="_blank" rel="noreferrer">Company Profile</a>
            <a href="#kontak">Hubungi Kami</a>
          </div>
          <div className="footer-links footer-contact">
            <h3>Terhubung dengan kami</h3>
            <a href="mailto:admin@fajargreen.id">admin@fajargreen.id</a>
            <a href="tel:+62217375523">021-7375523</a>
            <span>PT Fajar Green Energy</span>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 PT Fajar Green Energy. All rights reserved.</p>
          <p>Clean Energy · Smart Mobility · Digital Ecosystem</p>
          <a 
            href="#beranda" 
            aria-label="Kembali ke atas"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              // Also update URL without jumping
              window.history.pushState(null, '', '#beranda');
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up" aria-hidden="true">
              <path d="m5 12 7-7 7 7"></path>
              <path d="M12 19V5"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

