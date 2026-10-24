import { useState } from 'react';

const faqData = [
  {
    id: 'faq-1',
    question: 'Apa perbedaan SPKLU, Center, dan Signature?',
    answer:
      'SPKLU adalah fasilitas ringkas untuk 1 mesin. SPKLU Center merupakan fasilitas dengan beberapa titik pengisian (minimal 5 mesin). Adapun SPKLU Signature adalah konsep stasiun pengisian kendaraan yang terintegrasi dengan social hub dan fasilitas café atau lounge.',
  },
  {
    id: 'faq-2',
    question: 'Berapa luas lahan yang perlu disiapkan?',
    answer:
      'Luas lahan bervariasi mulai dari ±50m² untuk satu mesin,  ±300m² untuk SPKLU Center, hingga ±900m² untuk Signature.',
  },
  {
    id: 'faq-3',
    question: 'Bagaimana memulai pembicaraan kerja sama?',
    answer:
      'Sampaikan lokasi yang diusulkan, perkiraan luas lahan, dan kebutuhan Anda melalui kontak Fajar Green Energy. Informasi awal tersebut menjadi bahan pembicaraan sebelum proses peminatan dan pemeriksaan lokasi.',
  },
  {
    id: 'faq-4',
    question: 'Bagaimana hubungan proses ini dengan IconGreen dan PLN Mobile?',
    answer:
      'Proses penyediaan melibatkan evaluasi teknis dan administratif bersama IconGreen serta pendaftaran fasilitas pada jaringan PLN Mobile.',
  },
  {
    id: 'faq-5',
    question: 'Apa arti On Grid dan Soon to Be pada Projects?',
    answer:
      'On Grid digunakan untuk proyek yang telah beroperasi. Soon to Be digunakan untuk proyek mendatang yang telah diumumkan. Informasi lokasi, fasilitas, dan status akan ditampilkan sesuai perkembangan masing-masing proyek.',
  },
  {
    id: 'faq-6',
    question: 'Bagaimana mendapatkan estimasi biaya pengembangan?',
    answer:
      'Kebutuhan biaya bergantung pada kondisi lokasi, kapasitas listrik, konfigurasi mesin, konstruksi, dan fasilitas pendukung. Hubungi tim Fajar Green Energy dengan informasi lokasi Anda untuk membahas ruang lingkup pengembangan.',
  },
];

export const FAQ = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="faq" className="section faq-section">
      <div className="wrap faq-grid">
        <div>
          <div className="section-heading">
            <p className="eyebrow">PERTANYAAN UMUM</p>
            <h2>
              Kenali prosesnya.
              <br />
              <em>Rencanakan langkahnya.</em>
            </h2>
          </div>
          <p>
            Informasi awal untuk membantu Anda memahami pilihan dan proses
            pengembangan SPKLU.
          </p>
          <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '15px', color: 'var(--body)' }}>Ada pertanyaan lain?</span>
            <a
              href="#kontak"
              className="button button-small"
              style={{ margin: 0, padding: '10px 22px' }}
            >
              Hubungi kami
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </a>
          </div>
        </div>
        <div data-slot="accordion" className="faq-list" data-orientation="vertical">
          {faqData.map((item) => {
            const isOpen = openItems[item.id];
            return (
              <div
                key={item.id}
                data-state={isOpen ? 'open' : 'closed'}
                data-orientation="vertical"
                data-slot="accordion-item"
                className="border-b last:border-b-0"
              >
                <h3 data-orientation="vertical" data-state={isOpen ? 'open' : 'closed'} className="flex">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    data-state={isOpen ? 'open' : 'closed'}
                    data-orientation="vertical"
                    id={`trigger-${item.id}`}
                    data-slot="accordion-trigger"
                    className="flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 faq-question"
                    data-radix-collection-item=""
                    onClick={() => toggleItem(item.id)}
                  >
                    {item.question}
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
                      className="lucide lucide-chevron-down pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                </h3>
                <div
                  data-state={isOpen ? 'open' : 'closed'}
                  id={`content-${item.id}`}
                  hidden={!isOpen}
                  role="region"
                  aria-labelledby={`trigger-${item.id}`}
                  data-orientation="vertical"
                  data-slot="accordion-content"
                  className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                >
                  <div className="pb-4 pt-0">{item.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
