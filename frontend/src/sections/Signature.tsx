import signatureDestination from '../assets/images/signature-destination.webp';

export const Signature = () => {
  return (
    <section id="signature" className="signature-section">
      <div className="wrap">
        <div className="signature-panel">
          <figure className="signature-image">
            <img
              src={signatureDestination}
              alt="Visualisasi arsitektur konsep SPKLU Signature dengan café dan lounge"
              loading="lazy"
              width="1672"
              height="941"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

