(function () {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  function setOpen(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    const lang = document.documentElement.lang === "en" ? "en" : "es";
    const pack = (window.dict && window.dict[lang]) || {};
    toggle.setAttribute(
      "aria-label",
      open ? pack["nav.close"] || "Cerrar menú" : pack["nav.menu"] || "Menú"
    );
  }

  toggle.addEventListener("click", () => {
    setOpen(!nav.classList.contains("is-open"));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });

  document.addEventListener("click", (e) => {
    if (!nav.classList.contains("is-open")) return;
    if (nav.contains(e.target) || toggle.contains(e.target)) return;
    setOpen(false);
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 861px)").matches) setOpen(false);
  });
})();
