const categoryButtons = [...document.querySelectorAll("[data-menu-button]")];
const categorySections = [...document.querySelectorAll("[data-menu-section]")];
const searchInput = document.querySelector("[data-menu-search]");

function showCategory(category) {
  categoryButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.menuButton === category));
  });

  categorySections.forEach((section) => {
    section.hidden = section.dataset.menuSection !== category;
  });
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    searchInput.value = "";
    document.querySelectorAll("[data-menu-item]").forEach((item) => (item.hidden = false));
    showCategory(button.dataset.menuButton);
  });
});

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLocaleLowerCase("tr");

  if (!query) {
    const activeButton = categoryButtons.find(
      (button) => button.getAttribute("aria-pressed") === "true",
    );
    showCategory(activeButton?.dataset.menuButton || "tatlilar");
    return;
  }

  categorySections.forEach((section) => {
    section.hidden = false;
    const items = [...section.querySelectorAll("[data-menu-item]")];
    let visibleCount = 0;

    items.forEach((item) => {
      const matches = item.textContent.toLocaleLowerCase("tr").includes(query);
      item.hidden = !matches;
      if (matches) visibleCount += 1;
    });

    section.hidden = visibleCount === 0;
  });
});

showCategory("tatlilar");
