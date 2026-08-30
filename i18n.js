const dict = {
  es: {
    "nav.about": "Nosotros",
    "nav.services": "Servicios",
    "nav.travel": "Viajes",
    "nav.contact": "Contacto",
    "nav.cta": "Asesoría",
    "hero.eyebrow": "Registrada ante la Superintendencia de Seguros",
    "hero.title": "AA Corredores",
    "hero.tagline": "Corretaje claro. Coberturas que sí encajan.",
    "hero.lede":
      "Corredora de seguros dominicana dedicada al corretaje de seguros, reaseguros y valores, con asesoría técnica para personas y empresas.",
    "hero.cta1": "Solicitar cotización",
    "hero.cta2": "Ver coberturas",
    "about.title": "Confianza local, visión profesional",
    "about.p":
      "Intermediamos entre clientes y aseguradoras para conseguir las mejores coberturas — salud, ARS, AFP, viajes y más — con acompañamiento técnico en cada paso.",
    "about.founder": "Miguel A. Ramírez P. · Fundador",
    "services.title": "Servicios",
    "services.lede":
      "Administración y comercialización de seguros, con intermediación seria y transparente.",
    "services.s1.t": "Seguros y reaseguros",
    "services.s1.p": "Corretaje registrado y asesoría técnica en seguros y reaseguros.",
    "services.s2.t": "Salud, ARS y AFP",
    "services.s2.p": "Orientación para personas y empresas que buscan protección adecuada.",
    "services.s3.t": "Valores e intermediación",
    "services.s3.p": "Puente entre usted y las aseguradoras para mejores condiciones de cobertura.",
    "travel.title": "Seguros de viaje",
    "travel.p":
      "Administración y comercialización de seguros de viaje para que salga con respaldo — antes, durante y después del trayecto.",
    "contact.title": "Contacto",
    "contact.p": "Cuéntenos qué necesita proteger. Le ayudamos a comparar y elegir.",
    "contact.addr":
      "Calle Crisantemos #1, Urb. Los Jardines. Santo Domingo, República Dominicana",
    "footer": "© AA Corredores · Santo Domingo",
  },
  en: {
    "nav.about": "About",
    "nav.services": "Services",
    "nav.travel": "Travel",
    "nav.contact": "Contact",
    "nav.cta": "Advice",
    "hero.eyebrow": "Registered with the Dominican Insurance Superintendency",
    "hero.title": "AA Corredores",
    "hero.tagline": "Clear brokerage. Coverage that fits.",
    "hero.lede":
      "A Dominican insurance brokerage focused on insurance, reinsurance, and securities brokerage, with technical advice for individuals and companies.",
    "hero.cta1": "Request a quote",
    "hero.cta2": "Browse coverage",
    "about.title": "Local trust, professional guidance",
    "about.p":
      "We intermediate between clients and insurers to find the right coverage — health, ARS, AFP, travel, and more — with technical support at every step.",
    "about.founder": "Miguel A. Ramírez P. · Founder",
    "services.title": "Services",
    "services.lede":
      "Insurance administration and sales, with serious, transparent intermediation.",
    "services.s1.t": "Insurance & reinsurance",
    "services.s1.p": "Registered brokerage and technical advice in insurance and reinsurance.",
    "services.s2.t": "Health, ARS & AFP",
    "services.s2.p": "Guidance for people and companies seeking the right protection.",
    "services.s3.t": "Securities & intermediation",
    "services.s3.p": "A bridge between you and insurers for better coverage terms.",
    "travel.title": "Travel insurance",
    "travel.p":
      "Travel insurance administration and sales so you leave with backup — before, during, and after the trip.",
    "contact.title": "Contact",
    "contact.p": "Tell us what you need to protect. We’ll help you compare and choose.",
    "contact.addr":
      "Calle Crisantemos #1, Urb. Los Jardines. Santo Domingo, Dominican Republic",
    "footer": "© AA Corredores · Santo Domingo",
  },
};

function applyLang(lang) {
  const pack = dict[lang] || dict.es;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (pack[key]) el.textContent = pack[key];
  });
  document.title =
    lang === "en"
      ? "AA Corredores — Insurance brokerage"
      : "AA Corredores — Corretaje de seguros";
  document.querySelectorAll(".lang button").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });
  try {
    localStorage.setItem("aa-lang", lang);
  } catch (_) {}
}

document.querySelectorAll(".lang button").forEach((btn) => {
  btn.addEventListener("click", () => applyLang(btn.dataset.lang));
});

const saved = (() => {
  try {
    return localStorage.getItem("aa-lang");
  } catch (_) {
    return null;
  }
})();
applyLang(saved === "en" || saved === "es" ? saved : "es");
