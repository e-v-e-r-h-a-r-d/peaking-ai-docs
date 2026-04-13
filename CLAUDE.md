# CLAUDE.md — Documentación Peaking AI

## ¿Qué es este proyecto?

Help Center de **Peaking AI** — documentación orientada al usuario final (en español), migrada de docs técnicas en inglés a un portal de ayuda guiado por customer journey.

**Stack:** Astro + Starlight · Hosting: GitHub Pages · CI/CD: GitHub Actions

**Repo:** `https://github.com/e-v-e-r-h-a-r-d/peaking-ai-docs`
**Rama de trabajo activa:** `max's-branch` (el deploy se activa en `main` y `max's-branch`)

---

## Estructura de contenido

```
src/content/docs/
├── index.mdx                    ← Landing page del Help Center
├── 01-primeros-pasos/           ← Onboarding (bienvenida, dashboard, config, glosario)
├── 02-canales/                  ← WhatsApp, Instagram, Messenger, Widget web
├── 03-prompt-studio/            ← Configuración del agente de IA
├── 04-base-conocimientos/       ← Knowledge Base
├── 05-conversaciones/           ← Panel, mensajes, escalamiento, TODOs
├── 06-crm-audiencias/           ← CRM, contactos, audiencias, campañas
├── 07-productos-pagos/          ← Catálogo, Stripe, Mercado Pago, Orders
├── 08-analytics/                ← Dashboard, KPIs, reportería
├── 09-integraciones-partner/    ← Zapier, Odoo, API, Partner Portal
└── admin-interno/               ← Solo equipo Peaking (sidebar.hidden: true)
```

Cada sección tiene un `index.md` y entre 4–6 artículos específicos. Total: 57 archivos.

**Regla crítica:** Toda sección nueva debe registrarse también en `astro.config.mjs` con `autogenerate: { directory: 'XX-nombre' }`.

---

## Estado actual (2026-04-13)

### Comprometido en git
- `Initial commit` (2026-04-10): estructura base Astro + Starlight, tema oscuro personalizado con branding Peaking, `custom.css` (glassmorphism, 806 líneas), `ThemeSelect.astro`, `astro.config.mjs` con las 9 secciones públicas.

### Cambios pendientes de commit (working tree)
| Cambio | Descripción |
|--------|-------------|
| `M astro.config.mjs` | Reconfigurado: sidebar de 9 secciones en español, eliminadas secciones de API developer |
| `D src/content/docs/api-reference/`, `build/`, `core-concepts/`, `get-started/`, `guides/` | Eliminadas las docs técnicas en inglés (17 archivos) |
| `M src/content/docs/index.mdx` | Reescrita como landing page del Help Center en español |
| `?? src/content/docs/01-primeros-pasos/` ... `09-...` | 9 secciones nuevas + admin-interno (57 archivos) |
| `?? .claude/` | Skill `generate-docs` para generar artículos desde screenshots |
| `?? .github/` | GitHub Actions workflow `deploy.yml` |
| `?? guardar-screenshot.ps1` | Script PowerShell para guardar screenshots desde clipboard |

### Estado del contenido por artículo
- **Con contenido real (no placeholder):** `tour-del-dashboard.md`, `configuraciones-iniciales.md`, todos los artículos de `admin-interno/` (6)
- **Placeholders** (`:::note[Artículo en construcción]`): 38 de 46 artículos públicos

---

## Flujo de trabajo para generar contenido

1. Tomar screenshot de la plataforma Peaking
2. Ejecutar `/generate-docs` (invoca el skill en `.claude/skills/generate-docs/SKILL.md`)
3. El skill genera el `.md` listo para Starlight y lo guarda en la carpeta correcta
4. Revisar, hacer commit y push a `max's-branch` → GitHub Actions despliega automáticamente

**Script de screenshots:** `guardar-screenshot.ps1` — guarda el clipboard como PNG.

---

## Convenciones de contenido

- **Idioma:** Español neutro latinoamericano
- **Voz:** "Experto empático" — directo, orientado a tareas, sin jerga innecesaria
- **Frontmatter:** `title`, `description`, `sidebar.order` en todos los artículos públicos
- **Admin interno:** añadir `sidebar.hidden: true` en el frontmatter
- **Imágenes:** URL pública GitHub Raw → `https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/main/screenshots/[seccion]/[imagen.png]`
- **Nombres propios respetados:** Prompt Studio, Command Center, Knowledge Base, Orders & Carts, TODOs, Stripe (nunca "Stipe")

---

## Próximos pasos

1. Hacer commit de todos los cambios pendientes del working tree
2. Redactar artículos reales en `01-primeros-pasos/` (empezar por `bienvenido-a-peaking.md`)
3. Avanzar sección por sección siguiendo el orden numerado
4. Subir screenshots de la plataforma para usar el skill `generate-docs`
