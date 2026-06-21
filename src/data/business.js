export const business = {
  name: "Ehuen Burger & Co",
  tagline: "La verdadera hamburguesa",
  address: "Av. del Valle 310",
  mode: "Delivery & Take Away",
  whatsappNumber: "5493446375280",
  whatsappDisplay: "3446375280",
  whatsappBaseUrl: "https://wa.me/5493446375280?text=",
  mapsQuery: "Av. del Valle 310 Ehuen Burger",
  hoursText: "20:00 a 23:30 hs",
  openDays: [1, 5, 6, 0],
  schedule: [
    { day: "Lunes", open: true },
    { day: "Martes", open: false },
    { day: "Miércoles", open: false },
    { day: "Jueves", open: false },
    { day: "Viernes", open: true },
    { day: "Sábado", open: true },
    { day: "Domingo", open: true }
  ]
};

export const getMapsUrl = () =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    business.mapsQuery
  )}`;
