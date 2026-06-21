"use client";

import CartItem from "@/components/CartItem";
import CustomerForm from "@/components/CustomerForm";
import { formatPrice, getCartTotal, getWhatsappUrl } from "@/lib/order";

export default function CartDrawer({
  isOpen,
  items,
  customer,
  setCustomer,
  error,
  onClose,
  onIncrement,
  onDecrement,
  onRemove,
  onSend
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="drawer-backdrop" role="dialog" aria-modal="true" aria-label="Carrito">
      <aside className="cart-drawer">
        <div className="drawer-header">
          <div>
            <p>Tu pedido</p>
            <h2>{formatPrice(getCartTotal(items))}</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Cerrar carrito">X</button>
        </div>

        {items.length ? (
          <div className="cart-list">
            {items.map((item) => (
              <CartItem
                key={item.cartId}
                item={item}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onRemove={onRemove}
              />
            ))}
          </div>
        ) : (
          <div className="empty-cart">
            <strong>El carrito esta vacio</strong>
            <p>Agrega productos del menu para enviar tu pedido.</p>
          </div>
        )}

        <CustomerForm customer={customer} setCustomer={setCustomer} />

        {error ? <div className="form-error">{error}</div> : null}

        <button className="send-button" type="button" onClick={onSend}>
          Enviar pedido por WhatsApp
        </button>
      </aside>
    </div>
  );
}
