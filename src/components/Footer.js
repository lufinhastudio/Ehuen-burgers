import { business, getMapsUrl } from "@/data/business";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <img src="/images/ehuen/logo-ehuen.jpg" alt="Logo de Ehuen" />
      <h2>{business.name}</h2>
      <p>{business.tagline}</p>
      <a href={`https://wa.me/${business.whatsappNumber}`} target="_blank" rel="noreferrer">
        WhatsApp {business.whatsappDisplay}
      </a>
      <a href={getMapsUrl()} target="_blank" rel="noreferrer">
        {business.address}
      </a>
      <span>{business.hoursText}</span>
      <small>Desarrollado por Lufinha</small>
    </footer>
  );
}
