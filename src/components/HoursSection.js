import { business } from "@/data/business";

export default function HoursSection() {
  return (
    <section className="info-section" id="hours">
      <div className="section-title">
        <h2>Horarios</h2>
        <p>Atención compacta para pedidos y retiro.</p>
      </div>
      <div className="hours-compact">
        <div>
          <span>Abierto</span>
          <strong>Lun · Vie · Sáb · Dom</strong>
        </div>
        <div>
          <span>Cerrado</span>
          <strong>Mar · Mié · Jue</strong>
        </div>
        <div>
          <span>Horario</span>
          <strong>{business.hoursText}</strong>
        </div>
      </div>
    </section>
  );
}
