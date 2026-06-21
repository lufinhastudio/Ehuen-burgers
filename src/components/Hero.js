"use client";

import { business } from "@/data/business";
import BusinessStatus from "@/components/BusinessStatus";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <img className="hero-logo" src="/images/ehuen/logo-ehuen.jpg" alt="Logo de Ehuen" />
        <h1>{business.name}</h1>
        <p className="hero-copy">{business.address}</p>
        <BusinessStatus variant="hero" />
        <div className="hero-actions">
          <a className="primary-button" href="#burgers">Ver menú</a>
        </div>
      </div>
    </section>
  );
}
