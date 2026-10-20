const navigationButton = document.querySelector("[data-navigation-button]");
const navigation = document.querySelector("[data-navigation]");

if (navigationButton && navigation) {
  navigationButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    navigationButton.setAttribute("aria-expanded", String(isOpen));
  });
}
