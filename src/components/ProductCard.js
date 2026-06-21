import { formatPrice } from "@/lib/order";
import ProductMedia from "@/components/ProductMedia";

export default function ProductCard({ product, onAdd }) {
  const price = product.variants?.[0]?.price ?? product.price;

  return (
    <article className={`product-card ${product.recommended ? "recommended" : ""}`}>
      <div className="product-image">
        <ProductMedia product={product} />
        {product.recommended ? <span className="recommended-badge">Recomendada</span> : null}
      </div>
      <div className="product-info">
        <div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
        <div className="product-meta">
          <div>
            <strong>{formatPrice(price)}</strong>
            {product.includesFries ? <span>Incluye papas</span> : null}
          </div>
          <button type="button" onClick={() => onAdd(product)}>
            Agregar
          </button>
        </div>
      </div>
    </article>
  );
}
