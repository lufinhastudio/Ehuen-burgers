import { business, getMapsUrl } from "@/data/business";

export default function LocationSection() {
  return (
    <section className="location-section" id="location">
      <div className="location-card">
        <div>
          <p className="eyebrow">Ubicación</p>
          <h2>{business.address}</h2>
          <p>{business.mode}</p>
        </div>
        <a className="primary-button" href={getMapsUrl()} target="_blank" rel="noreferrer">
          Cómo llegar
        </a>
      </div>
    </section>
  );
}
