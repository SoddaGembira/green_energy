import React, { useState } from 'react';
import companyProfilePdf from '../assets/Fajar-Green-Energy-Company-Profile.pdf';
import { WEB3FORMS_CONFIG } from '../config/web3forms';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    location: '',
    format: 'Belum menentukan',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Cegah pengiriman ganda jika sedang dalam proses
    if (isSubmitting) return;

    // Validasi field wajib
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      setStatusMessage('Mohon lengkapi field bertanda bintang (*) sebelum mengirim formulir.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    try {
      const submissionData = new FormData();
      submissionData.append('access_key', WEB3FORMS_CONFIG.accessKey);
      submissionData.append('subject', `${WEB3FORMS_CONFIG.defaultSubject} - ${formData.name}`);
      submissionData.append('from_name', WEB3FORMS_CONFIG.fromName);
      submissionData.append('name', formData.name);
      submissionData.append('company', formData.company || '-');
      submissionData.append('email', formData.email);
      submissionData.append('replyto', formData.email);
      submissionData.append('location', formData.location || '-');
      submissionData.append('format', formData.format);
      submissionData.append('message', formData.message);
      // Honeypot spam protection
      submissionData.append('botcheck', '');

      const response = await fetch(WEB3FORMS_CONFIG.apiUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: submissionData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setStatusMessage(
          result.message ||
            'Pesan konsultasi Anda berhasil dikirim! Tim Fajar Green Energy akan segera mempelajari kebutuhan Anda dan menghubungi kembali.'
        );
        // Reset formulir setelah berhasil terkirim
        setFormData({
          name: '',
          company: '',
          email: '',
          location: '',
          format: 'Belum menentukan',
          message: '',
        });
      } else {
        setSubmitStatus('error');
        setStatusMessage(
          result.message ||
            'Gagal mengirim formulir. Silakan periksa kembali data Anda atau hubungi kami melalui telepon/email.'
        );
      }
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitStatus('error');
      setStatusMessage(
        'Terjadi kendala jaringan saat mengirim formulir. Pastikan koneksi internet Anda aktif dan silakan coba lagi.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontak" className="section contact-section">
      <div className="wrap contact-grid">
        <div className="contact-copy">
          <div className="section-heading">
            <p className="eyebrow">HUBUNGI KAMI</p>
            <h2>
              Mari bicarakan
              <br />
              <em>rencana SPKLU Anda.</em>
            </h2>
          </div>
          <p>
            Bagikan informasi awal tentang lokasi dan kebutuhan Anda. Tim Fajar
            Green Energy siap menjadi kontak untuk pembicaraan berikutnya.
          </p>
          <div className="contact-methods">
            <a href="mailto:admin@fajargreen.id">
              <span className="contact-icon">
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
                  className="lucide lucide-mail"
                  aria-hidden="true"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                </svg>
              </span>
              <span>
                <small>Email</small>
                <strong>admin@fajargreen.id</strong>
              </span>
            </a>
            <a href="tel:+62217375523">
              <span className="contact-icon">
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
                  className="lucide lucide-phone"
                  aria-hidden="true"
                >
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                </svg>
              </span>
              <span>
                <small>Telepon</small>
                <strong>021-7375523</strong>
              </span>
            </a>
          </div>
          <div
            style={{
              marginTop: '2.5rem',
              padding: '24px',
              backgroundColor: 'rgba(0, 0, 0, 0.03)',
              borderRadius: '16px',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              display: 'flex',
              gap: '20px',
              alignItems: 'flex-start',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <strong style={{ fontSize: '18px', color: 'var(--navy)', fontWeight: 600 }}>
                Kenali Fajar Green Energy
              </strong>
              <p style={{ color: 'var(--body)', fontSize: '14px', margin: 0, lineHeight: 1.6 }}>
                Profil perusahaan dan informasi pengembangan SPKLU.
              </p>
              <a
                href={companyProfilePdf}
                target="_blank"
                rel="noreferrer"
                className="button button-small"
                style={{ alignSelf: 'flex-start', marginTop: '14px' }}
              >
                Unduh PDF
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-download"
                  aria-hidden="true"
                >
                  <path d="M12 15V3"></path>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <path d="m7 10 5 5 5-5"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <h3>Diskusi pengembangan</h3>
          <p>Ceritakan kebutuhan dan rencana lokasi Anda.</p>

          {submitStatus === 'success' && (
            <div className="form-alert alert-success" role="alert">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <div>
                <strong>Pesan Berhasil Terkirim!</strong>
                <span>{statusMessage}</span>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="form-alert alert-error" role="alert">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <div>
                <strong>Pengiriman Gagal</strong>
                <span>{statusMessage}</span>
              </div>
            </div>
          )}

          <div className="form-row">
            <label htmlFor="contact-name">
              Nama lengkap <span>*</span>
              <input
                id="contact-name"
                autoComplete="name"
                required
                maxLength={100}
                placeholder="Nama Anda"
                name="name"
                disabled={isSubmitting}
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="contact-company">
              Perusahaan
              <input
                id="contact-company"
                autoComplete="organization"
                maxLength={120}
                placeholder="Nama perusahaan"
                name="company"
                disabled={isSubmitting}
                value={formData.company}
                onChange={handleChange}
              />
            </label>
          </div>
          <label htmlFor="contact-email">
            Email <span>*</span>
            <input
              id="contact-email"
              type="email"
              autoComplete="email"
              required
              maxLength={160}
              placeholder="nama@perusahaan.com"
              name="email"
              disabled={isSubmitting}
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="contact-location">
            Lokasi yang diusulkan
            <input
              id="contact-location"
              maxLength={200}
              placeholder="Kota / kawasan lokasi"
              name="location"
              disabled={isSubmitting}
              value={formData.location}
              onChange={handleChange}
            />
          </label>
          <div className="form-field">
            <label id="format-label" htmlFor="contact-format">
              Format yang diminati
            </label>
            <select
              id="contact-format"
              name="format"
              disabled={isSubmitting}
              className="flex w-full items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 form-select"
              value={formData.format}
              onChange={handleChange}
            >
              <option value="Belum menentukan">Belum menentukan</option>
              <option value="SPKLU">SPKLU</option>
              <option value="SPKLU Center">SPKLU Center</option>
              <option value="SPKLU Signature">SPKLU Signature</option>
            </select>
          </div>
          <label htmlFor="contact-message">
            Pesan <span>*</span>
            <textarea
              id="contact-message"
              name="message"
              required
              maxLength={2500}
              rows={4}
              disabled={isSubmitting}
              placeholder="Perkiraan luas, kondisi lokasi, atau hal yang ingin Anda diskusikan…"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </label>
          <button className="button form-submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <svg
                  className="form-spinner"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                </svg>
                Mengirim Pesan...
              </>
            ) : (
              <>
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
                  className="lucide lucide-mail"
                  aria-hidden="true"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                </svg>
                Kirim Email Konsultasi
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};
