import { menuSettings } from "@/content/menu/settings";

type MenuSearchProps = {
  heading: string;
  count: number;
  query: string;
  onQueryChange: (value: string) => void;
};

export function MenuSearch({ heading, count, query, onQueryChange }: MenuSearchProps) {
  const labels = menuSettings.search;

  return (
    <div className="gm-toolbar">
      <div>
        <p className="gm-kicker">{labels.eyebrow}</p>
        <h2>
          {heading}
          <sup>{String(count).padStart(2, "0")}</sup>
        </h2>
      </div>
      <label className="gm-search">
        <span>{labels.label}</span>
        <div>
          <input
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder={labels.placeholder}
          />
          {query && (
            <button
              type="button"
              aria-label={labels.clear}
              onClick={() => onQueryChange("")}
            >
              ×
            </button>
          )}
          <span aria-hidden="true">⌕</span>
        </div>
      </label>
    </div>
  );
}
