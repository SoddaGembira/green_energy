import { useState } from 'react';
import fgeSymbol from '../../assets/images/fge-symbol.png';
import fgeWordmark from '../../assets/images/fge-wordmark.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header" id="beranda">
      <nav className="navigation wrap" aria-label="Navigasi utama">
        <div className="nav-links nav-left">
          <a href="#tentang">Tentang Kami</a>
          <a href="#solusi">Solusi SPKLU</a>
          <a href="#projects">Projects</a>
        </div>
        
        <a href="#beranda" className="brand" aria-label="Fajar Green Energy, beranda">
          <img src={fgeSymbol} className="brand-symbol" alt="" width="670" height="672" />
          <img src={fgeWordmark} className="brand-wordmark" alt="Fajar Green Energy" width="2121" height="524" />
        </a>
        
        <div className="nav-links nav-right">
          <a href="#proses">Proses</a>
          <a href="#faq">FAQ</a>
          <a href="#kontak" className="button button-small">Hubungi Kami</a>
        </div>
        
        <button 
          className="menu-toggle" 
          aria-label="Buka menu" 
          type="button" 
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
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
          <a href="#tentang" onClick={() => setIsOpen(false)} style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '16px', textDecoration: 'none' }}>Tentang Kami</a>
          <a href="#solusi" onClick={() => setIsOpen(false)} style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '16px', textDecoration: 'none' }}>Solusi SPKLU</a>
          <a href="#projects" onClick={() => setIsOpen(false)} style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '16px', textDecoration: 'none' }}>Projects</a>
          <a href="#proses" onClick={() => setIsOpen(false)} style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '16px', textDecoration: 'none' }}>Proses Pengembangan</a>
          <a href="#faq" onClick={() => setIsOpen(false)} style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '16px', textDecoration: 'none' }}>Pertanyaan Umum</a>
          <a href="#kontak" className="button" onClick={() => setIsOpen(false)} style={{ marginTop: '10px' }}>Hubungi Kami</a>
        </div>
      )}
    </header>
  );
};
