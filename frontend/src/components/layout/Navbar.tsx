import { useState } from 'react';
import fgeSymbol from '../../assets/images/fge-symbol.png';
import fgeWordmark from '../../assets/images/fge-wordmark.png';
import { navigateTo } from '../../utils/router';

interface NavbarProps {
  currentPath?: string;
}

export const Navbar = ({ currentPath = '/' }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isPrivacyPage = currentPath === '/kebijakan-privasi';

  const handleNavClick = (e: React.MouseEvent, targetHash: string) => {
    if (isPrivacyPage) {
      e.preventDefault();
      setIsOpen(false);
      navigateTo(`/${targetHash}`);
    } else {
      setIsOpen(false);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (isPrivacyPage) {
      e.preventDefault();
      navigateTo('/');
    }
  };

  return (
    <header className="site-header" id="beranda">
      <nav className="navigation wrap" aria-label="Navigasi utama">
        <a
          href={isPrivacyPage ? '/' : '#beranda'}
          className="brand"
          aria-label="Fajar Green Energy, beranda"
          onClick={handleLogoClick}
        >
          <img src={fgeSymbol} className="brand-symbol" alt="" width="670" height="672" />
          <img src={fgeWordmark} className="brand-wordmark" alt="Fajar Green Energy" width="2121" height="524" />
        </a>

        <div className="nav-links">
          <a href={isPrivacyPage ? '/#tentang' : '#tentang'} onClick={(e) => handleNavClick(e, '#tentang')}>
            Tentang Kami
          </a>
          <a href={isPrivacyPage ? '/#solusi' : '#solusi'} onClick={(e) => handleNavClick(e, '#solusi')}>
            Solusi SPKLU
          </a>
          <a href={isPrivacyPage ? '/#projects' : '#projects'} onClick={(e) => handleNavClick(e, '#projects')}>
            Projects
          </a>
          <a href={isPrivacyPage ? '/#proses' : '#proses'} onClick={(e) => handleNavClick(e, '#proses')}>
            Proses Pengembangan
          </a>
          <a href={isPrivacyPage ? '/#faq' : '#faq'} onClick={(e) => handleNavClick(e, '#faq')}>
            Pertanyaan Umum
          </a>
        </div>

        <div className="nav-actions">
          <a
            href={isPrivacyPage ? '/#kontak' : '#kontak'}
            className="button button-small nav-cta-btn"
            onClick={(e) => handleNavClick(e, '#kontak')}
          >
            Hubungi Kami
          </a>
        </div>

        <button
          className="menu-toggle"
          aria-label="Buka menu"
          type="button"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu" aria-hidden="true"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: '#ffffff',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            padding: '20px 24px 32px',
            gap: '20px',
            borderTop: '1px solid #edf0ee',
            zIndex: 99
          }}
        >
          <a href={isPrivacyPage ? '/#tentang' : '#tentang'} onClick={(e) => handleNavClick(e, '#tentang')} style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '16px', textDecoration: 'none' }}>Tentang Kami</a>
          <a href={isPrivacyPage ? '/#solusi' : '#solusi'} onClick={(e) => handleNavClick(e, '#solusi')} style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '16px', textDecoration: 'none' }}>Solusi SPKLU</a>
          <a href={isPrivacyPage ? '/#projects' : '#projects'} onClick={(e) => handleNavClick(e, '#projects')} style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '16px', textDecoration: 'none' }}>Projects</a>
          <a href={isPrivacyPage ? '/#proses' : '#proses'} onClick={(e) => handleNavClick(e, '#proses')} style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '16px', textDecoration: 'none' }}>Proses Pengembangan</a>
          <a href={isPrivacyPage ? '/#faq' : '#faq'} onClick={(e) => handleNavClick(e, '#faq')} style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '16px', textDecoration: 'none' }}>Pertanyaan Umum</a>
          <a href={isPrivacyPage ? '/#kontak' : '#kontak'} className="button" onClick={(e) => handleNavClick(e, '#kontak')} style={{ marginTop: '10px' }}>Hubungi Kami</a>
        </div>
      )}
    </header>
  );
};

