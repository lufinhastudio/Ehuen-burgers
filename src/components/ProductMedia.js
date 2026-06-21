export default function ProductMedia({ product, className = "", size = "card" }) {
  if (!product?.image) {
    return (
      <div className={`product-placeholder ${className}`} data-size={size}>
        <img src="/images/ehuen/logo-ehuen.jpg" alt="" />
        <span className="burger-mark">EH</span>
        <strong>Foto próximamente</strong>
      </div>
    );
  }

  return (
    <img
      className={className}
      src={product.image}
      alt={product.name}
      style={{ objectPosition: product.imagePosition ?? "center center" }}
    />
  );
}
