const navigationButton = document.querySelector("[data-navigation-button]");
const navigation = document.querySelector("[data-navigation]");

if (navigationButton && navigation) {
  navigationButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    navigationButton.setAttribute("aria-expanded", String(isOpen));
  });
}

const transitionRoot = document.documentElement;
const transitionClasses = [
  "page-transition-active",
  "page-transition-cover",
  "page-transition-reveal",
  "page-transition-from-menu",
  "page-transition-from-site",
  "page-transition-to-menu",
  "page-transition-to-site",
];

function clearPageTransition() {
  transitionRoot.classList.remove(...transitionClasses);
}

if (transitionRoot.classList.contains("page-transition-reveal")) {
  const revealDuration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 180 : 1250;
  window.setTimeout(clearPageTransition, revealDuration);
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[href]");

  if (
    !link ||
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    link.target === "_blank" ||
    link.hasAttribute("download")
  ) {
    return;
  }

  const destination = new URL(link.href, window.location.href);
  const currentIsMenu = document.body.classList.contains("gm");
  const destinationIsMenu = /\/menu(?:\.html|\/)?$/.test(destination.pathname);

  if (destination.origin !== window.location.origin || currentIsMenu === destinationIsMenu) {
    return;
  }

  event.preventDefault();
  const currentTheme = currentIsMenu ? "menu" : "site";
  const destinationTheme = destinationIsMenu ? "menu" : "site";

  try {
    sessionStorage.setItem("grout-page-transition", destinationTheme);
  } catch {
    // The outgoing animation still works when storage is unavailable.
  }

  clearPageTransition();
  transitionRoot.classList.add(
    "page-transition-active",
    `page-transition-from-${currentTheme}`,
    `page-transition-to-${destinationTheme}`,
    "page-transition-cover",
  );

  const coverDuration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 180 : 2200;
  window.setTimeout(() => window.location.assign(destination.href), coverDuration);
});

window.addEventListener("pageshow", (event) => {
  if (event.persisted) clearPageTransition();
});
