"use client";

import { useEffect, useMemo, useState } from "react";
import { extras as burgerExtras } from "@/data/menu";
import { formatPrice, getProductBasePrice } from "@/lib/order";
import ProductMedia from "@/components/ProductMedia";

export default function ProductModal({ product, onClose, onAddToCart }) {
  const firstVariant = product?.variants?.[0]?.id;
  const [variantId, setVariantId] = useState(firstVariant);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [option, setOption] = useState(product?.options?.[0] ?? "");
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    setVariantId(product?.variants?.[0]?.id);
    setSelectedExtras([]);
    setOption(product?.options?.[0] ?? "");
    setQuantity(1);
    setNotes("");
  }, [product]);

  const selectedVariant = product?.variants?.find((variant) => variant.id === variantId);
  const selectedExtraData = burgerExtras.filter((extra) => selectedExtras.includes(extra.id));
  const basePrice = product ? getProductBasePrice(product, variantId) : 0;
  const extrasTotal = selectedExtraData.reduce((sum, extra) => sum + extra.price, 0);
  const total = (basePrice + extrasTotal) * quantity;

  const title = useMemo(() => product?.name ?? "", [product]);

  if (!product) {
    return null;
  }

  const toggleExtra = (id) => {
    setSelectedExtras((current) =>
      current.includes(id) ? current.filter((extraId) => extraId !== id) : [...current, id]
    );
  };

  const handleSubmit = () => {
    onAddToCart({
      cartId: `${product.id}-${Date.now()}`,
      productId: product.id,
      name: product.name,
      image: product.image,
      imagePosition: product.imagePosition,
      variantName: selectedVariant?.name ?? "",
      option,
      basePrice,
      extras: selectedExtraData,
      quantity,
      notes: notes.trim()
    });
  };

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={`Agregar ${title}`}>
      <div className="product-modal">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Cerrar">
          X
        </button>
        <ProductMedia product={product} className="modal-image" size="modal" />
        <div className="modal-body">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          {product.includesFries ? <div className="fries-note">Todas las burgers incluyen papas.</div> : null}

          {product.variants?.length ? (
            <div className="control-group">
              <span className="control-label">Tamaño</span>
              <div className="segmented">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    className={variant.id === variantId ? "active" : ""}
                    type="button"
                    onClick={() => setVariantId(variant.id)}
                  >
                    {variant.name} <small>{formatPrice(variant.price)}</small>
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          {product.category === "burgers" ? (
            <div className="control-group">
              <span className="control-label">Extras</span>
              <div className="extras-list">
                {burgerExtras.map((extra) => (
                  <label key={extra.id} className="check-row">
                    <input
                      type="checkbox"
                      checked={selectedExtras.includes(extra.id)}
                      onChange={() => toggleExtra(extra.id)}
                    />
                    <span>{extra.name}</span>
                    <strong>{formatPrice(extra.price)}</strong>
                  </label>
                ))}
              </div>
            </div>
          ) : null}

          {product.options?.length ? (
            <label className="field">
              <span>{product.optionsLabel ?? "Variedad"}</span>
              <select value={option} onChange={(event) => setOption(event.target.value)}>
                {product.options.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </label>
          ) : null}

          <div className="quantity-row">
            <span>Cantidad</span>
            <div className="stepper">
              <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>-</button>
              <strong>{quantity}</strong>
              <button type="button" onClick={() => setQuantity((value) => value + 1)}>+</button>
            </div>
          </div>

          <label className="field">
            <span>Notas opcionales</span>
            <textarea
              placeholder="Sin cebolla, sin aderezo, etc."
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
            />
          </label>

          <button className="add-order-button" type="button" onClick={handleSubmit}>
            Agregar al pedido · {formatPrice(total)}
          </button>
        </div>
      </div>
    </div>
  );
}
