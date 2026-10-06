import { useState } from 'react';

export const Projects = () => {
  const [activeTab, setActiveTab] = useState<'on-grid' | 'soon-to-be'>('on-grid');

  return (
    <section id="projects" className="section projects-section">
      <div className="wrap">
        <div className="section-intro">
          <div className="section-heading">
            <p className="eyebrow">OUR PROJECTS</p>
            <h2>
              Terhubung hari ini.
              <br />
              <em>Berkembang berikutnya.</em>
            </h2>
          </div>
          <p>
            Ikuti informasi proyek Fajar Green Energy melalui kategori lokasi
            yang beroperasi dan pengembangan berikutnya.
          </p>
        </div>
        <div
          dir="ltr"
          data-orientation="horizontal"
          data-slot="tabs"
          className="group/tabs flex gap-2 data-[orientation=horizontal]:flex-col project-tabs"
        >
          <div
            role="tablist"
            aria-orientation="horizontal"
            data-slot="tabs-list"
            data-variant="default"
            className="group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-[orientation=horizontal]/tabs:h-9 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none bg-muted project-tab-list"
            aria-label="Kategori status proyek"
            tabIndex={0}
            data-orientation="horizontal"
            style={{ outline: 'none' }}
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'on-grid'}
              aria-controls="radix-_R_2edi_-content-on-grid"
              data-state={activeTab === 'on-grid' ? 'active' : 'inactive'}
              id="radix-_R_2edi_-trigger-on-grid"
              data-slot="tabs-trigger"
              className="relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent data-[state=active]:bg-background data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100 project-tab"
              tabIndex={activeTab === 'on-grid' ? 0 : -1}
              data-orientation="horizontal"
              data-radix-collection-item=""
              onClick={() => setActiveTab('on-grid')}
            >
              <span className="tab-dot"></span>On Grid
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'soon-to-be'}
              aria-controls="radix-_R_2edi_-content-soon-to-be"
              data-state={activeTab === 'soon-to-be' ? 'active' : 'inactive'}
              id="radix-_R_2edi_-trigger-soon-to-be"
              data-slot="tabs-trigger"
              className="relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent data-[state=active]:bg-background data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100 project-tab"
              tabIndex={activeTab === 'soon-to-be' ? 0 : -1}
              data-orientation="horizontal"
              data-radix-collection-item=""
              onClick={() => setActiveTab('soon-to-be')}
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
                className="lucide lucide-timer"
                aria-hidden="true"
              >
                <line x1="10" x2="14" y1="2" y2="2"></line>
                <line x1="12" x2="15" y1="14" y2="11"></line>
                <circle cx="12" cy="14" r="8"></circle>
              </svg>
              Soon to Be
            </button>
          </div>
          <div
            data-state={activeTab === 'on-grid' ? 'active' : 'inactive'}
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-_R_2edi_-trigger-on-grid"
            id="radix-_R_2edi_-content-on-grid"
            tabIndex={0}
            data-slot="tabs-content"
            className="flex-1 outline-none project-panel"
            style={{ animationDuration: '0s' }}
            hidden={activeTab !== 'on-grid'}
          >
            <div className="project-empty empty-on-grid">
              <div className="empty-symbol">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
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
              </div>
              <div className="project-empty-copy">
                <span className="status-label status-live">
                  <span></span>On Grid
                </span>
                <h3>Informasi lokasi SPKLU</h3>
                <p>
                  Untuk informasi lokasi dan layanan SPKLU yang beroperasi,
                  silakan hubungi tim Fajar Green Energy.
                </p>
                <a className="text-link" href="#kontak">
                  Hubungi tim kami
                </a>
              </div>
              <div className="project-type-label">
                FAJAR
                <br />
                GREEN ENERGY
              </div>
            </div>
          </div>
          <div
            data-state={activeTab === 'soon-to-be' ? 'active' : 'inactive'}
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-_R_2edi_-trigger-soon-to-be"
            hidden={activeTab !== 'soon-to-be'}
            id="radix-_R_2edi_-content-soon-to-be"
            tabIndex={0}
            data-slot="tabs-content"
            className="flex-1 outline-none project-panel"
          >
            <div className="project-empty empty-soon-to-be">
              <div className="empty-symbol">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin" aria-hidden="true">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="project-empty-copy">
                <span className="status-label status-soon"><span></span>Soon to Be</span>
                <h3>Pengembangan lokasi berikutnya</h3>
                <p>Informasi lokasi baru dan rencana pembukaan akan ditampilkan setelah diumumkan. Diskusikan potensi lokasi Anda bersama kami.</p>
                <a className="text-link" href="#kontak">Usulkan lokasi Anda</a>
              </div>
              <div className="project-type-label">FAJAR<br />GREEN ENERGY</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
