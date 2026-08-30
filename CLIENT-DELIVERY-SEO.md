# Entrega al cliente — SEO de las landings  
# Client delivery — Landing page SEO

**Fecha / Date:** 2026-08-30  
**Proyectos / Projects:** Goval TPA · AA Corredores  
**Previews:**  
- https://hectortorrese.github.io/goval-tpa/  
- https://hectortorrese.github.io/aa-corredores/  

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
- `robots.txt` + `sitemap.xml`
- Datos estructurados JSON-LD (Schema.org)
- Encabezados (H1/H2/H3) alineados a los temas SEO sin relleno artificial
- Idioma por defecto: español (mercado RD)

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

## 5. Hosting
- **Ahora:** GitHub Pages (gratis, para revisión).  
- **Largo plazo:** a acordar tras aprobación (dominio propio + Pages / Cloudflare / Vercel, etc.).

---

## 6. Archivo en vault (Helix)
Copia de seguimiento:  
`HermesVault/LifeOS/freelance/clients/goval-aa/artifacts/CLIENT-DELIVERY-SEO.md`
