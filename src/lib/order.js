import { business } from "@/data/business";

export const formatPrice = (value) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0
  }).format(value);

export const getProductBasePrice = (product, variantId) => {
  if (product.variants?.length) {
    return product.variants.find((variant) => variant.id === variantId)?.price ?? product.variants[0].price;
  }

  return product.price;
};

export const getCartItemSubtotal = (item) => {
  const extrasTotal = item.extras?.reduce((sum, extra) => sum + extra.price, 0) ?? 0;
  return (item.basePrice + extrasTotal) * item.quantity;
};

export const getCartTotal = (items) =>
  items.reduce((sum, item) => sum + getCartItemSubtotal(item), 0);

export const getCartQuantity = (items) =>
  items.reduce((sum, item) => sum + item.quantity, 0);

export const getBusinessStatus = (date = new Date()) => {
  const today = date.getDay();
  const isOpenDay = business.openDays.includes(today);
  return {
    isOpen: isOpenDay,
    label: isOpenDay
      ? `Hoy abierto · ${business.hoursText}`
      : "Hoy cerrado"
  };
};

export const generateWhatsappMessage = (items, customer) => {
  const lines = [
    "Hola Ehuen! Quiero hacer un pedido:",
    "",
    `Cliente: ${customer.name}`,
    `Modalidad: ${customer.mode === "delivery" ? "Delivery" : "Retiro en local"}`,
    customer.mode === "delivery" ? `Dirección: ${customer.address}` : null,
    `Pago: ${customer.payment === "cash" ? "Efectivo" : "Transferencia"}`,
    customer.generalNote ? `Nota general: ${customer.generalNote}` : null,
    "",
    "Pedido:"
  ].filter(Boolean);

  items.forEach((item) => {
    const variant = item.variantName ? ` ${item.variantName.toLowerCase()}` : "";
    const option = item.option ? ` ${item.option}` : "";
    lines.push(`${item.quantity}x ${item.name}${variant}${option} - ${formatPrice(getCartItemSubtotal(item))}`);

    if (item.extras?.length) {
      lines.push(`Extras: ${item.extras.map((extra) => extra.name).join(", ")}`);
    }

    if (item.notes) {
      lines.push(`Notas: ${item.notes}`);
    }

    lines.push("");
  });

  lines.push(`Total: ${formatPrice(getCartTotal(items))}`, "", "Gracias!");

  return lines.join("\n");
};

export const getWhatsappUrl = (items, customer) =>
  `${business.whatsappBaseUrl}${encodeURIComponent(generateWhatsappMessage(items, customer))}`;
