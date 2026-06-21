export const extras = [
  { id: "extra-carne", name: "Extra carne", price: 3000 },
  { id: "extra-queso", name: "Extra queso", price: 1000 },
  { id: "extra-panceta", name: "Extra panceta", price: 1500 },
  { id: "extra-pepinillo", name: "Extra pepinillo", price: 500 },
  { id: "huevo", name: "Huevo", price: 1000 },
  { id: "pileta-cheddar", name: "Pileta de cheddar", price: 2500 }
];

export const categories = [
  { id: "burgers", label: "Burgers" },
  { id: "sides", label: "Acompañamientos" },
  { id: "drinks", label: "Bebidas" },
  { id: "location", label: "Ubicación" }
];

export const products = [
  {
    id: "cheeseburger",
    category: "burgers",
    name: "Cheeseburger",
    description: "Medallón de carne, cheddar, aderezo Ehuen",
    image: "/images/ehuen/cheeseburger.jpg",
    imagePosition: "center 62%",
    includesFries: true,
    variants: [
      { id: "simple", name: "Simple", price: 10500 },
      { id: "doble", name: "Doble", price: 13000 }
    ]
  },
  {
    id: "cuarto-libra",
    category: "burgers",
    name: "Cuarto de Libra",
    description: "Medallón de carne, cheddar, cebolla brunoise, ketchup, mostaza",
    image: "/images/ehuen/cuarto-libra.jpg",
    imagePosition: "center 64%",
    includesFries: true,
    variants: [
      { id: "simple", name: "Simple", price: 11000 },
      { id: "doble", name: "Doble", price: 13500 }
    ]
  },
  {
    id: "bacon",
    category: "burgers",
    name: "Bacon",
    description: "Medallón de carne, cheddar, panceta, cebolla caramelizada, aderezo Ehuen",
    image: "/images/ehuen/bacon.jpg",
    imagePosition: "center 62%",
    includesFries: true,
    variants: [
      { id: "simple", name: "Simple", price: 13000 },
      { id: "doble", name: "Doble", price: 15500 }
    ]
  },
  {
    id: "american",
    category: "burgers",
    name: "American",
    description: "Medallón de carne, cheddar, panceta, cebolla morada, tomate, lechuga, aderezo Ehuen",
    image: "/images/ehuen/american.jpg",
    imagePosition: "center 64%",
    includesFries: true,
    variants: [
      { id: "simple", name: "Simple", price: 13500 },
      { id: "doble", name: "Doble", price: 16000 }
    ]
  },
  {
    id: "ehuen",
    category: "burgers",
    name: "Ehuen",
    description: "Medallón de carne, queso azul, tomate confit, cebolla morada, rúcula, aderezo alioli",
    image: "/images/ehuen/ehuen.jpg",
    imagePosition: "center 65%",
    includesFries: true,
    recommended: true,
    variants: [
      { id: "simple", name: "Simple", price: 13500 },
      { id: "doble", name: "Doble", price: 16000 }
    ]
  },
  {
    id: "veggie",
    category: "burgers",
    name: "Veggie",
    description: "Ehuen con medallón veggie",
    image: "/images/ehuen/veggie.jpg",
    imagePosition: "center 64%",
    includesFries: true,
    variants: [{ id: "simple", name: "Simple", price: 14500 }]
  },
  {
    id: "argenta",
    category: "burgers",
    name: "Argenta del mes",
    description: "Medallón de carne, cheddar blanco, cebolla crispy, morrones asados, aderezo chimichurri",
    image: null,
    includesFries: true,
    variants: [
      { id: "simple", name: "Simple", price: 13000 },
      { id: "doble", name: "Doble", price: 15000 }
    ]
  },
  {
    id: "bastones-pollo",
    category: "sides",
    name: "Bastones de pollo",
    description: "Con dip de barbacoa",
    image: null,
    price: 7000
  },
  {
    id: "papas-fritas",
    category: "sides",
    name: "Porción de papas fritas",
    description: "Papas doradas para compartir",
    image: null,
    price: 3000
  },
  {
    id: "gaseosa",
    category: "drinks",
    name: "Gaseosa",
    description: "CocaCola, CocaCola ZERO, Sprite, Fanta, Schweppes",
    image: null,
    price: 2500,
    optionsLabel: "Variedad",
    options: ["CocaCola", "CocaCola ZERO", "Sprite", "Fanta", "Schweppes"]
  },
  {
    id: "agua",
    category: "drinks",
    name: "Agua",
    description: "Agua fresca",
    image: null,
    price: 2000
  },
  {
    id: "cerveza",
    category: "drinks",
    name: "Cerveza",
    description: "Golden, Red, Honey, IPA",
    image: null,
    price: 5000,
    optionsLabel: "Variedad",
    options: ["Golden", "Red", "Honey", "IPA"]
  }
];
