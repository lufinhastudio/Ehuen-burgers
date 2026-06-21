"use client";

import { useEffect, useState } from "react";
import { business } from "@/data/business";
import { drawerLinks } from "@/data/navigation";
import { getCartQuantity } from "@/lib/order";
import { getMapsUrl } from "@/data/business";

export default function Header({ cartItems, onOpenCart }) {
  const quantity = getCartQuantity(cartItems);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.body.classList.add("menu-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
        <a href="#top" className="brand" aria-label="Ir al inicio">
          <img src="/images/ehuen/logo-ehuen.jpg" alt="Logo de Ehuen" />
          <span>
            <strong>Ehuen Burger</strong>
            <small>{business.tagline}</small>
          </span>
        </a>
        <div className="header-actions">
          <button className="cart-pill" type="button" onClick={onOpenCart}>
            Pedido <span>{quantity}</span>
          </button>
        </div>
      </div>
      {menuOpen ? (
        <div className="menu-backdrop" onClick={closeMenu}>
          <aside
            className="menu-drawer"
            aria-label="Navegación principal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="menu-drawer-head">
              <img src="/images/ehuen/logo-ehuen.jpg" alt="Logo de Ehuen" />
              <div>
                <strong>{business.name}</strong>
                <p>{business.tagline}</p>
              </div>
              <button type="button" onClick={closeMenu} aria-label="Cerrar menú">
                X
              </button>
            </div>
            <nav className="drawer-nav">
              {drawerLinks.map((link) => (
                <a key={link.id} href={`#${link.id}`} onClick={closeMenu}>
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="drawer-contact">
              <a href={`https://wa.me/${business.whatsappNumber}`} target="_blank" rel="noreferrer">
                WhatsApp {business.whatsappDisplay}
              </a>
              <a href={getMapsUrl()} target="_blank" rel="noreferrer">
                {business.address}
              </a>
            </div>
          </aside>
        </div>
      ) : null}
    </header>
  );
}
