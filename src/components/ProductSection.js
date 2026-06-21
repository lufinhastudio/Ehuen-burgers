import ProductCard from "@/components/ProductCard";

export default function ProductSection({ id, title, description, products, onAdd, children }) {
  return (
    <section className="product-section" id={id}>
      <div className="section-title">
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      {children}
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}
