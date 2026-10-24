import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero';
import { IdentityStrip } from './sections/IdentityStrip';
import { About } from './sections/About';
import { Solutions } from './sections/Solutions';
import { Signature } from './sections/Signature';
import { Process } from './sections/Process';
import { Projects } from './sections/Projects';
import { PartnerBand } from './sections/PartnerBand';
import { FAQ } from './sections/FAQ';
import { Contact } from './sections/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { navigateTo } from './utils/router';

function App() {
  const checkIsPrivacy = () => {
    const path = window.location.pathname;
    const hash = window.location.hash;
    return path === '/kebijakan-privasi' || hash === '#/kebijakan-privasi' || hash === '#kebijakan-privasi';
  };

  const [currentPath, setCurrentPath] = useState(() => (checkIsPrivacy() ? '/kebijakan-privasi' : '/'));

  useEffect(() => {
    const handleLocationChange = () => {
      const isPrivacy = checkIsPrivacy();
      const newPath = isPrivacy ? '/kebijakan-privasi' : '/';
      setCurrentPath(newPath);

      if (isPrivacy) {
        document.title = 'Kebijakan Privasi | PT Fajar Green Energy';
      } else {
        document.title = 'Fajar Green Energy | Pengembangan SPKLU';
        if (window.location.hash) {
          const targetId = window.location.hash.replace('#', '');
          const el = document.getElementById(targetId);
          if (el) {
            setTimeout(() => {
              el.scrollIntoView({ behavior: 'smooth' });
            }, 60);
          }
        }
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    if (checkIsPrivacy()) {
      document.title = 'Kebijakan Privasi | PT Fajar Green Energy';
    }

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  useEffect(() => {
    if (currentPath === '/kebijakan-privasi') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            // observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Apply specific animations to elements dynamically
    const animations = [
      { selector: '.section-heading', class: 'reveal-up' },
      { selector: '.hero-copy', class: 'reveal-left' },
      { selector: '.hero-art', class: 'reveal-right delay-200' },
      { selector: '.about-image', class: 'reveal-scale delay-200' },
      { selector: '.signature-image', class: 'reveal-scale' },
      { selector: '.contact-form', class: 'reveal-up delay-200' },
      { selector: '.contact-profile', class: 'reveal-left' }
    ];

    animations.forEach(({ selector, class: animClass }) => {
      document.querySelectorAll(selector).forEach((el) => {
        el.classList.add('reveal');
        animClass.split(' ').forEach(c => el.classList.add(c));
        observer.observe(el);
      });
    });

    // Apply staggered animations to grids/lists
    const staggeredSelectors = ['.feature-box', '.solution-card', '.process-stage', '.project-card', '.faq-list > div'];
    staggeredSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach((el, index) => {
        el.classList.add('reveal', 'reveal-up');
        const delay = (index % 4) * 100;
        if (delay > 0) el.classList.add(`delay-${delay}`);
        observer.observe(el);
      });
    });

    return () => observer.disconnect();
  }, [currentPath]);

  return (
    <div className="antialiased">
      <a className="skip-link" href="#konten">Langsung ke konten</a>
      <Navbar currentPath={currentPath} />
      <main id="konten">
        {currentPath === '/kebijakan-privasi' ? (
          <PrivacyPolicy onBack={() => navigateTo('/')} />
        ) : (
          <>
            <Hero />
            <IdentityStrip />
            <About />
            <Solutions />
            <Signature />
            <Process />
            <Projects />
            <PartnerBand />
            <FAQ />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
