"use client";

import { useState } from "react";
import { items, type CategoryName } from "@/content/menu";
import { menuSettings } from "@/content/menu/settings";
import { MenuHeader } from "./menu-header";
import { MenuIntro } from "./menu-intro";
import { CategoryTabs } from "./category-tabs";
import { MenuSearch } from "./menu-search";
import { MenuItemCard } from "./menu-item-card";
import { MenuFooter } from "./menu-footer";
import { normalizeSearch } from "@/lib/search";

// MENÜ SAYFASI: görünümün bölümleri. Ürünleri src/content/menu/ içinden düzenleyin.
export function CafeMenu() {
  const [category, setCategory] = useState<CategoryName>(menuSettings.defaultCategory);
  const [query, setQuery] = useState("");
  const searchTerm = normalizeSearch(query.trim());
  const isSearching = Boolean(searchTerm);

  const visibleItems = items.filter((item) =>
    isSearching
      ? normalizeSearch(`${item.name} ${item.description}`).includes(searchTerm)
      : item.group === category,
  );

  function selectCategory(nextCategory: CategoryName) {
    setCategory(nextCategory);
    setQuery("");
  }

  return (
    <div className="gm" id="menu-top">
      <a className="skip-link" href="#menu-list">
        Menüye geç
      </a>
      <MenuHeader />
      <main>
        <MenuIntro />
        <section className="gm-menu" id="menu-list">
          <CategoryTabs
            selected={category}
            isSearching={isSearching}
            onSelect={selectCategory}
          />
          <MenuSearch
            heading={isSearching ? menuSettings.search.results : category}
            count={visibleItems.length}
            query={query}
            onQueryChange={setQuery}
          />
          {!isSearching && category === "Tatlılar" && (
            <p className="gm-subtitle">{menuSettings.dessertNote}</p>
          )}
          <div className="gm-grid" aria-live="polite">
            {visibleItems.map((item, index) => (
              <MenuItemCard key={item.id} item={item} index={index} />
            ))}
          </div>
          {visibleItems.length === 0 && (
            <div className="gm-empty">
              <h3>{menuSettings.search.emptyTitle}</h3>
              <p>{menuSettings.search.emptyDescription}</p>
              <button type="button" onClick={() => setQuery("")}>
                {menuSettings.search.reset}
              </button>
            </div>
          )}
        </section>
      </main>
      <MenuFooter />
    </div>
  );
}
