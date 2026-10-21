try {
  const transitionTheme = sessionStorage.getItem("grout-page-transition");

  if (transitionTheme === "menu" || transitionTheme === "site") {
    document.documentElement.classList.add(
      "page-transition-active",
      `page-transition-to-${transitionTheme}`,
      "page-transition-reveal",
    );
    sessionStorage.removeItem("grout-page-transition");
  }
} catch {
  // Depolama kullanılamıyorsa sayfa normal şekilde açılır.
}
