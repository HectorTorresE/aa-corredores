# Entrega al cliente — SEO de las landings  
# Client delivery — Landing page SEO

**Fecha / Date:** 2026-08-30  
**Proyectos / Projects:** Goval TPA · AA Corredores  
**Previews:**  
- https://hectortorrese.github.io/goval-tpa/  
- https://hectortorrese.github.io/aa-corredores/  

**Presentación HTML para el cliente / Client HTML slides:**  
- https://hectortorrese.github.io/goval-tpa/CLIENT-DELIVERY-SLIDES.html  
- https://hectortorrese.github.io/aa-corredores/CLIENT-DELIVERY-SLIDES.html  

(Detalle SEO escrito abajo; la presentación cubre la entrega completa + dónde revisar.)

---

## 1. Enfoque SEO aprobado / Approved SEO focus

### Goval TPA
**Tema central:** TPA (Third Party Administrator) de asistencia médica y al viajero en República Dominicana.

| ES | EN |
|----|----|
| Third Party Administrator / TPA República Dominicana | Third Party Administrator / TPA Dominican Republic |
| asistencia médica | medical assistance |
| asistencia al viajero 24/7 | traveler assistance 24/7 |
| emergencias médicas y siniestros | medical emergencies and claims |
| red de prestadores médicos | medical provider network |
| TPA para aseguradoras | TPA for insurers |

**No priorizamos:** corretaje de seguros general (eso es AA).

### AA Corredores
**Tema central:** Corredora de seguros en República Dominicana / Santo Domingo.

| ES | EN |
|----|----|
| corredora de seguros República Dominicana | insurance brokerage Dominican Republic |
| corretaje de seguros y reaseguros | insurance & reinsurance brokerage |
| seguros de salud, ARS, AFP | health insurance, ARS, AFP |
| seguros de viaje | travel insurance |
| Superintendencia de Seguros | Insurance Superintendency |
| intermediación con aseguradoras | intermediation with insurers |

**No priorizamos:** TPA / gestión de siniestros operativos (eso es Goval).

---

## 2. Qué se implementó / What was implemented

En **ambas** páginas:

- Títulos y meta descriptions en ES y EN (cambian con el idioma)
- Open Graph + Twitter cards (para compartir en redes / WhatsApp)
- `canonical` + `hreflang` (`?lang=es` / `?lang=en`)
- `robots.txt` + `sitemap.xml` (ver §2.1)
- Datos estructurados JSON-LD (Schema.org)
- Encabezados (H1/H2/H3) alineados a los temas SEO sin relleno artificial
- Idioma por defecto: español (mercado RD)
- Modo claro / modo oscuro (toggle en el encabezado; respeta preferencia del sistema)

### 2.1 Qué son `robots.txt` y `sitemap.xml` / What they are

Son dos archivos estándar que usan **Google y otros buscadores** para descubrir y recorrer el sitio. No los ve el visitante normal; son para los “bots” de búsqueda.

| Archivo | Qué hace (ES) | What it does (EN) |
|---------|---------------|-------------------|
| **`robots.txt`** | Instrucciones para crawlers: qué pueden indexar. En estas landings: **permitir todo** el sitio y señalar dónde está el sitemap. | Rules for crawlers: what they may index. Here: **allow the whole site** and point to the sitemap. |
| **`sitemap.xml`** | Lista oficial de URLs importantes (página principal + variantes ES/EN) para que el buscador las encuentre más rápido y sepa que hay dos idiomas. | Official list of important URLs (home + ES/EN variants) so search engines find them faster and know both languages exist. |

**Ejemplo en Goval (igual idea en AA):**
- `https://hectortorrese.github.io/goval-tpa/robots.txt`
- `https://hectortorrese.github.io/goval-tpa/sitemap.xml`

Cuando exista **dominio propio**, hay que actualizar las URLs dentro de ambos archivos (y en Search Console se puede “enviar” el sitemap).

### Schema específico
| Sitio | Tipo Schema.org |
|-------|-----------------|
| Goval TPA | `Organization` (+ knowsAbout TPA / medical / travel assistance) |
| AA Corredores | `InsuranceAgency` (+ dirección, teléfono, fundador) |

---

## 3. URLs para el cliente / Client URLs

| Sitio | Preview | Repo |
|-------|---------|------|
| Goval TPA | https://hectortorrese.github.io/goval-tpa/ | https://github.com/HectorTorresE/goval-tpa |
| AA Corredores | https://hectortorrese.github.io/aa-corredores/ | https://github.com/HectorTorresE/aa-corredores |

Probar idiomas: agregar `?lang=en` o `?lang=es` a la URL.

---

## 4. Pendiente del cliente / Needs from client

1. **Goval:** teléfono, correo y dirección oficiales (hoy hay email provisional).  
2. **Dominios finales** tras aprobación (ej. `govaltpa.com`, `aacorredores.com`) — actualizar canonical, sitemap y Schema.  
3. Confirmar logo vectorial de AA si el SVG actual debe reemplazarse.  
4. Opcional: Google Search Console + Analytics cuando exista dominio propio.

---

## 5. Hosting y formulario — costos / opciones

### Formulario de contacto
**Hoy:** FormSubmit (gratis). El mensaje va al correo del cliente. **No requiere infraestructura ni costo mensual.**

| Opción | Costo típico | Notas |
|--------|--------------|--------|
| FormSubmit (actual) | $0 | Formulario → inbox; confirmar correo la 1ª vez |
| Formspree / Web3Forms / similar | Gratis limitado, luego ~US$8–15/mes | Panel, más antispam / volumen |

**Preguntar al cliente:** ¿basta el gratis o prefieren plan de pago?

### Hosting (después de aprobar)
| Opción | Hosting | Dominio |
|--------|---------|---------|
| **A** GitHub Pages / Cloudflare Pages / Vercel | $0 | ~US$10–15/año por marca |
| **B** Su proveedor actual (cPanel, etc.) | Lo que ya paguen | El suyo |
| **C** Nosotros configuramos A | $0 hosting | Dominio aparte |

**Preguntar al cliente:** preferencia A / B / C, y si ya tienen dominio u hosting.

---

## 6. Archivo en vault (Helix)
Copia de seguimiento:  
`HermesVault/LifeOS/freelance/clients/goval-aa/artifacts/CLIENT-DELIVERY-SEO.md`
