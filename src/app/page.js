"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryNav from "@/components/CategoryNav";
import ProductSection from "@/components/ProductSection";
import ProductModal from "@/components/ProductModal";
import CartDrawer from "@/components/CartDrawer";
import HoursSection from "@/components/HoursSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import { products } from "@/data/menu";
import { getCartQuantity, getWhatsappUrl } from "@/lib/order";

const initialCustomer = {
  name: "",
  mode: "pickup",
  address: "",
  payment: "",
  generalNote: ""
};

export default function Home() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [customer, setCustomer] = useState(initialCustomer);
  const [error, setError] = useState("");

  const openProduct = (product) => {
    setSelectedProduct(product);
  };

  const addToCart = (item) => {
    setCartItems((current) => [...current, item]);
    setSelectedProduct(null);
    setCartOpen(true);
    setError("");
  };

  const increment = (cartId) => {
    setCartItems((current) =>
      current.map((item) =>
        item.cartId === cartId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (cartId) => {
    setCartItems((current) =>
      current
        .map((item) =>
          item.cartId === cartId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const remove = (cartId) => {
    setCartItems((current) => current.filter((item) => item.cartId !== cartId));
  };

  const validateOrder = () => {
    if (!cartItems.length) return "Agrega al menos un producto al carrito.";
    if (!customer.name.trim()) return "Indica tu nombre antes de enviar.";
    if (customer.mode === "delivery" && !customer.address.trim()) return "Indica la dirección para delivery.";
    if (!customer.payment) return "Elegí un método de pago.";
    return "";
  };

  const sendOrder = () => {
    const validationError = validateOrder();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    window.open(getWhatsappUrl(cartItems, customer), "_blank", "noopener,noreferrer");
  };

  const burgerProducts = products.filter((product) => product.category === "burgers");
  const sideProducts = products.filter((product) => product.category === "sides");
  const drinkProducts = products.filter((product) => product.category === "drinks");
  const quantity = getCartQuantity(cartItems);

  return (
    <>
      <Header cartItems={cartItems} onOpenCart={() => setCartOpen(true)} />
      <main>
        <Hero hasItems={cartItems.length > 0} onCartClick={() => setCartOpen(true)} />
        <div className="app-shell">
          <CategoryNav />
          <ProductSection
            id="burgers"
            title="Burgers"
            description="Todas las burgers incluyen papas."
            products={burgerProducts}
            onAdd={openProduct}
          />
          <ProductSection
            id="sides"
            title="Acompañamientos"
            products={sideProducts}
            onAdd={openProduct}
          />
          <ProductSection
            id="drinks"
            title="Bebidas"
            products={drinkProducts}
            onAdd={openProduct}
          />
          <HoursSection />
          <LocationSection />
        </div>
      </main>
      <Footer />

      {quantity > 0 ? (
        <button className="floating-cart" type="button" onClick={() => setCartOpen(true)}>
          Ver pedido <span>{quantity}</span>
        </button>
      ) : null}

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
      />
      <CartDrawer
        isOpen={cartOpen}
        items={cartItems}
        customer={customer}
        setCustomer={setCustomer}
        error={error}
        onClose={() => setCartOpen(false)}
        onIncrement={increment}
        onDecrement={decrement}
        onRemove={remove}
        onSend={sendOrder}
      />
    </>
  );
}
