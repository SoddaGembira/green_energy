import { useEffect } from 'react';
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

function App() {
  useEffect(() => {
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
  }, []);

  return (
    <div className="antialiased">
      <a className="skip-link" href="#konten">Langsung ke konten</a>
      <Navbar />
      <main id="konten">
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
