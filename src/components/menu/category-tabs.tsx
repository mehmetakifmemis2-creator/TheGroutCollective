import { categories, type CategoryName } from "@/content/menu";

type CategoryTabsProps = {
  selected: CategoryName;
  isSearching: boolean;
  onSelect: (category: CategoryName) => void;
};

export function CategoryTabs({ selected, isSearching, onSelect }: CategoryTabsProps) {
  return (
    <nav className="gm-tabs" aria-label="Menü kategorileri">
      {categories.map((category, index) => (
        <button
          key={category}
          type="button"
          aria-pressed={selected === category && !isSearching}
          onClick={() => onSelect(category)}
        >
          <small>{String(index + 1).padStart(2, "0")}</small>
          {category}
        </button>
      ))}
    </nav>
  );
}
