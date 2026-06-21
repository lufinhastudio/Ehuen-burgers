import { navigationLinks } from "@/data/navigation";

export default function CategoryNav() {
  return (
    <nav className="category-nav" aria-label="Categorías del menú">
      {navigationLinks.map((category) => (
        <a key={category.id} href={`#${category.id}`}>
          {category.label}
        </a>
      ))}
    </nav>
  );
}
