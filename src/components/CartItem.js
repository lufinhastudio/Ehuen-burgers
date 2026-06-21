import { formatPrice, getCartItemSubtotal } from "@/lib/order";
import ProductMedia from "@/components/ProductMedia";

export default function CartItem({ item, onIncrement, onDecrement, onRemove }) {
  return (
    <article className="cart-item">
      <ProductMedia product={item} className="cart-thumb" size="thumb" />
      <div className="cart-item-body">
        <div className="cart-item-head">
          <div>
            <h4>{item.name}</h4>
            {item.variantName || item.option ? (
              <p>{[item.variantName, item.option].filter(Boolean).join(" · ")}</p>
            ) : null}
          </div>
          <strong>{formatPrice(getCartItemSubtotal(item))}</strong>
        </div>
        {item.extras?.length ? <p>Extras: {item.extras.map((extra) => extra.name).join(", ")}</p> : null}
        {item.notes ? <p>Notas: {item.notes}</p> : null}
        <div className="cart-controls">
          <div className="stepper small">
            <button type="button" onClick={() => onDecrement(item.cartId)}>-</button>
            <strong>{item.quantity}</strong>
            <button type="button" onClick={() => onIncrement(item.cartId)}>+</button>
          </div>
          <button className="remove-button" type="button" onClick={() => onRemove(item.cartId)}>
            Eliminar
          </button>
        </div>
      </div>
    </article>
  );
}
