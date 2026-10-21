const categorySections = [...document.querySelectorAll("[data-menu-section]")];
const searchInput = document.querySelector("[data-menu-search]");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLocaleLowerCase("tr");
  categorySections.forEach((section) => {
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
