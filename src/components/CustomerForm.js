"use client";

export default function CustomerForm({ customer, setCustomer }) {
  const updateField = (field, value) => {
    setCustomer((current) => ({ ...current, [field]: value }));
  };

  return (
    <div className="customer-form">
      <h3>Datos del pedido</h3>
      <label className="field">
        <span>Nombre</span>
        <input
          value={customer.name}
          onChange={(event) => updateField("name", event.target.value)}
          placeholder="Tu nombre"
        />
      </label>
      <div className="control-group">
        <span className="control-label">Modalidad</span>
        <div className="segmented">
          <button
            type="button"
            className={customer.mode === "pickup" ? "active" : ""}
            onClick={() => updateField("mode", "pickup")}
          >
            Retiro
          </button>
          <button
            type="button"
            className={customer.mode === "delivery" ? "active" : ""}
            onClick={() => updateField("mode", "delivery")}
          >
            Delivery
          </button>
        </div>
      </div>
      {customer.mode === "delivery" ? (
        <label className="field">
          <span>Dirección</span>
          <input
            value={customer.address}
            onChange={(event) => updateField("address", event.target.value)}
            placeholder="Calle, numero y referencias"
          />
        </label>
      ) : null}
      <div className="control-group">
        <span className="control-label">Pago</span>
        <div className="segmented">
          <button
            type="button"
            className={customer.payment === "cash" ? "active" : ""}
            onClick={() => updateField("payment", "cash")}
          >
            Efectivo
          </button>
          <button
            type="button"
            className={customer.payment === "transfer" ? "active" : ""}
            onClick={() => updateField("payment", "transfer")}
          >
            Transferencia
          </button>
        </div>
      </div>
      <label className="field">
        <span>Nota general opcional</span>
        <textarea
          value={customer.generalNote}
          onChange={(event) => updateField("generalNote", event.target.value)}
          placeholder="Aclaraciones para el pedido"
        />
      </label>
    </div>
  );
}
