const meta = {
  es: {
    title: "AA Corredores | Corredora de seguros en República Dominicana",
    description:
      "AA Corredores es una corredora de seguros en Santo Domingo: corretaje de seguros, reaseguros, salud, ARS, AFP y seguros de viaje. Registrada ante la Superintendencia de Seguros.",
    ogTitle: "AA Corredores | Corredora de seguros en RD",
    ogDescription:
      "Corretaje de seguros, reaseguros, salud, ARS, AFP y seguros de viaje en Santo Domingo.",
  },
  en: {
    title: "AA Corredores | Insurance brokerage in the Dominican Republic",
    description:
      "AA Corredores is an insurance brokerage in Santo Domingo: insurance and reinsurance brokerage, health, ARS, AFP, and travel insurance. Registered with the Insurance Superintendency.",
    ogTitle: "AA Corredores | Insurance brokerage in the DR",
    ogDescription:
      "Insurance and reinsurance brokerage, health, ARS, AFP, and travel insurance in Santo Domingo.",
  },
};

const dict = {
  es: {
    "nav.about": "Nosotros",
    "nav.services": "Servicios",
    "nav.travel": "Viajes",
    "nav.contact": "Contacto",
    "nav.cta": "Asesoría",
    "hero.eyebrow": "Registrada ante la Superintendencia de Seguros",
    "hero.title": "AA Corredores",
    "hero.tagline":
      "Corredora de seguros en República Dominicana — corretaje claro, coberturas que sí encajan",
    "hero.lede":
      "Corredora de seguros dominicana dedicada al corretaje de seguros, reaseguros y valores, con asesoría técnica para personas y empresas.",
    "hero.cta1": "Solicitar cotización",
    "hero.cta2": "Ver coberturas",
    "about.title": "Confianza local, visión profesional",
    "about.p":
      "Intermediamos entre clientes y aseguradoras para conseguir las mejores coberturas — salud, ARS, AFP, viajes y más — con acompañamiento técnico en cada paso.",
    "about.founder": "Miguel A. Ramírez P. · Fundador",
    "services.title": "Servicios de corretaje de seguros",
    "services.lede":
      "Administración y comercialización de seguros, con intermediación seria y transparente ante aseguradoras.",
    "services.s1.t": "Seguros y reaseguros",
    "services.s1.p": "Corretaje registrado y asesoría técnica en seguros y reaseguros.",
    "services.s2.t": "Seguros de salud, ARS y AFP",
    "services.s2.p": "Orientación para personas y empresas que buscan protección adecuada.",
    "services.s3.t": "Valores e intermediación",
    "services.s3.p": "Puente entre usted y las aseguradoras para mejores condiciones de cobertura.",
    "travel.title": "Seguros de viaje",
    "travel.p":
      "Administración y comercialización de seguros de viaje para que salga con respaldo — antes, durante y después del trayecto.",
    "contact.title": "Contacto — corredora de seguros en Santo Domingo",
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
    "hero.tagline":
      "Insurance brokerage in the Dominican Republic — clear brokerage, coverage that fits",
    "hero.lede":
      "A Dominican insurance brokerage focused on insurance, reinsurance, and securities brokerage, with technical advice for individuals and companies.",
    "hero.cta1": "Request a quote",
    "hero.cta2": "Browse coverage",
    "about.title": "Local trust, professional guidance",
    "about.p":
      "We intermediate between clients and insurers to find the right coverage — health, ARS, AFP, travel, and more — with technical support at every step.",
    "about.founder": "Miguel A. Ramírez P. · Founder",
    "services.title": "Insurance brokerage services",
    "services.lede":
      "Insurance administration and sales, with serious, transparent intermediation with insurers.",
    "services.s1.t": "Insurance & reinsurance",
    "services.s1.p": "Registered brokerage and technical advice in insurance and reinsurance.",
    "services.s2.t": "Health insurance, ARS & AFP",
    "services.s2.p": "Guidance for people and companies seeking the right protection.",
    "services.s3.t": "Securities & intermediation",
    "services.s3.p": "A bridge between you and insurers for better coverage terms.",
    "travel.title": "Travel insurance",
    "travel.p":
      "Travel insurance administration and sales so you leave with backup — before, during, and after the trip.",
    "contact.title": "Contact — insurance brokerage in Santo Domingo",
    "contact.p": "Tell us what you need to protect. We’ll help you compare and choose.",
    "contact.addr":
      "Calle Crisantemos #1, Urb. Los Jardines. Santo Domingo, Dominican Republic",
    "footer": "© AA Corredores · Santo Domingo",
  },
};

function setMeta(name, content, attr = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function applyLang(lang) {
  const pack = dict[lang] || dict.es;
  const m = meta[lang] || meta.es;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (pack[key]) el.textContent = pack[key];
  });
  document.title = m.title;
  setMeta("description", m.description);
  setMeta("og:title", m.ogTitle, "property");
  setMeta("og:description", m.ogDescription, "property");
  setMeta("og:locale", lang === "en" ? "en_US" : "es_DO", "property");
  setMeta("twitter:title", m.ogTitle);
  setMeta("twitter:description", m.ogDescription);
  document.querySelectorAll(".lang button").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });
  try {
    localStorage.setItem("aa-lang", lang);
  } catch (_) {}
  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  history.replaceState({}, "", url);
}

document.querySelectorAll(".lang button").forEach((btn) => {
  btn.addEventListener("click", () => applyLang(btn.dataset.lang));
});

const params = new URLSearchParams(window.location.search);
const fromQuery = params.get("lang");
const saved = (() => {
  try {
    return localStorage.getItem("aa-lang");
  } catch (_) {
    return null;
  }
})();
const initial =
  fromQuery === "en" || fromQuery === "es"
    ? fromQuery
    : saved === "en" || saved === "es"
      ? saved
      : "es";
applyLang(initial);
