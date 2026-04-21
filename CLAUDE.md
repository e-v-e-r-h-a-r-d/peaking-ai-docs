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
├── 02-canales/                  ← WhatsApp, Instagram, Messenger, Widget web, Plantillas WA
├── 03-prompt-studio/            ← Prompt Studio: prompt, variables, herramientas, test
├── 04-base-conocimientos/       ← Knowledge Base
├── 05-conversaciones/           ← Mensajes (sidebar label), panel, escalamiento, bandeja
├── 06-crm-audiencias/           ← Solo CRM (pipeline). Contactos y Audiencias movidos
├── 07-productos-pagos/          ← Solo catálogo de productos (Stripe/MP/Orders movidos)
├── 08-analytics/                ← Dashboard, KPIs, reportería (sidebar label: Insights)
├── 09-integraciones-partner/    ← HubSpot, Odoo, Zapier, GCal, API, Partner Portal
├── 10-tareas/                   ← Tareas/TODOs como sección independiente
├── 11-workflows/                ← Automatización de flujos de trabajo
├── 12-pedidos-carritos/         ← Pedidos, Carritos, Stripe, Mercado Pago, Flujo de compra
├── 13-contactos/                ← Contactos (sección propia, separada del CRM)
├── 14-audiencias/               ← Audiencias y Campañas (sección propia)
└── admin-interno/               ← Solo equipo Peaking (sidebar.hidden: true)
```

**Total:** ~70 archivos. Cada sección tiene un `index.md` y artículos específicos.

**Regla crítica:** Toda sección nueva debe registrarse también en `astro.config.mjs` con `autogenerate: { directory: 'XX-nombre' }`.

---

## Sidebar actual (astro.config.mjs)

Orden del sidebar tal como aparece en la navegación de Peaking:

| Label | Directorio |
|-------|------------|
| Primeros pasos | `01-primeros-pasos` |
| Base de Conocimientos | `04-base-conocimientos` |
| Mensajes | `05-conversaciones` |
| Insights | `08-analytics` |
| CRM | `06-crm-audiencias` |
| Contactos | `13-contactos` |
| Tareas | `10-tareas` |
| Estudio de Prompts | `03-prompt-studio` |
| Integraciones | `09-integraciones-partner` |
| Productos | `07-productos-pagos` |
| Workflows | `11-workflows` |
| Pedidos y Carritos | `12-pedidos-carritos` |
| Audiencias y Campañas | `14-audiencias` |
| Conecta tus canales | `02-canales` |

`admin-interno/` no aparece en el sidebar — artículos ocultos con `sidebar.hidden: true`.

---

## Estado del contenido (2026-04-18)

### Todo en git — rama `max's-branch`

El working tree está limpio. Todos los cambios están commiteados y pusheados.

### Artículos con contenido real completo

| Archivo | Sección | Notas |
|---------|---------|-------|
| `06-crm-audiencias/crm-vista-general.md` | CRM | Panel detalle, Timeline, Conversación, tipos de actividad, Nueva oportunidad |
| `06-crm-audiencias/audiencias-y-segmentos.md` | CRM | Segmentos dinámicos/estáticos, flujo de creación, buenas prácticas |
| `10-tareas/tareas-y-todos.md` | Tareas | 4 etapas reales, KPIs, Gestionar Etapas, Tipos de Actividad, detalle del TODO |
| `07-productos-pagos/catalogo-de-productos.md` | Productos | Panel, creación manual, campos dinámicos, categorías, declaración en Prompt |
| `11-workflows/como-funcionan-los-workflows.md` | Workflows | Triggers, condiciones, acciones, 3 ejemplos prácticos |
| `12-pedidos-carritos/pedidos-y-carritos.md` | Pedidos | Órdenes, carritos abandonados, filtros, recuperación |
| `12-pedidos-carritos/stripe-configuracion.md` | Pedidos | Conexión, productos, dashboard ventas, métodos, carrito, tarifas |
| `12-pedidos-carritos/mercado-pago-configuracion.md` | Pedidos | Autenticación MP, IVA, dashboard, métodos por país, tarifas |
| `09-integraciones-partner/odoo-hubspot-zoho.md` | Integraciones | HubSpot, Odoo, Zoho — conexión y declaración en Prompt |
| `09-integraciones-partner/google-calendar.md` | Integraciones | Conexión, autenticación Google, declaración en Prompt Studio |
| `02-canales/plantillas-whatsapp.md` | Canales | WABA, sincronización, envío desde Panel de Mensajes |
| `03-prompt-studio/declarar-herramientas.md` | Prompt Studio | Configuración de Herramientas, ejemplo HubSpot, FAQ |
| `05-conversaciones/panel-de-conversaciones.md` | Mensajes | Panel de Mensajes (renombrado), filtros, estados, intervención humana |
| `01-primeros-pasos/tour-del-dashboard.md` | Primeros pasos | Completo |
| `01-primeros-pasos/configuraciones-iniciales.md` | Primeros pasos | Completo |
| `admin-interno/` (7 archivos) | Interno | Todos con `sidebar.hidden: true` |

### Placeholders activos (`:::note[Artículo en construcción]`)

Aprox. 30 artículos públicos aún en placeholder. Pendientes principales:
- `01-primeros-pasos/` — bienvenido, activa-tus-modulos, glosario
- `02-canales/` — conexion-whatsapp, instagram, messenger, widget
- `03-prompt-studio/` — variables-y-funciones-avanzadas, mejores-practicas
- `05-conversaciones/` — tags-y-etiquetas, escalamiento-a-humano, bandeja-de-mensajes
- `06-crm-audiencias/` — gestion-de-contactos, campanas-y-broadcasts
- `08-analytics/` — todos
- `09-integraciones-partner/` — zapier-make-n8n, api-de-peaking, partner-portal
- `12-pedidos-carritos/flujo-de-compra-con-ia.md`

---

## Flujo de trabajo para generar contenido

1. Tomar screenshot de la plataforma Peaking (Win+Shift+S → clipboard)
2. Guardar con `.\guardar-screenshot.ps1 -seccion "XX-nombre" -nombre "descripcion"`
3. Ejecutar `/generate-docs` en Claude Code con el screenshot como contexto
4. Revisar el `.md` generado, hacer commit y push a `max's-branch`
5. GitHub Actions despliega automáticamente

**Script de screenshots:** `guardar-screenshot.ps1` — guarda como JPEG comprimido (85% calidad, max 1440px). Parámetros: `-calidad 90`, `-png` (fuerza PNG), `-maxAncho 1920`.

---

## Convenciones de contenido

- **Idioma:** Español neutro latinoamericano
- **Voz:** "Experto empático" — directo, orientado a tareas, sin jerga innecesaria
- **Frontmatter obligatorio:** `title`, `description`, `sidebar.order` en todos los artículos públicos
- **Admin interno:** añadir `sidebar.hidden: true` en el frontmatter
- **Imágenes:** URL pública GitHub Raw → `https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots/[seccion]/[imagen.jpg]`
- **Extensión de imágenes:** `.jpg` por defecto (el script guarda JPEG). Usar `.png` solo si se pasó el flag `-png`
- **Nombres propios respetados:** Prompt Studio, Command Center, Knowledge Base, Pedidos y Carritos, TODOs, Tareas, Stripe (nunca "Stipe"), Mercado Pago, Workflows

---

## Secciones internas (admin-interno)

Estos artículos existen pero **no son visibles en el sidebar público**. Son documentación interna del equipo Peaking:

| Archivo | Propósito |
|---------|-----------|
| `command-center.md` | Panel maestro de operaciones internas |
| `admin-organizations.md` | Gestión de organizaciones desde el lado admin |
| `sales-trials.md` | Gestión de trials y demos de ventas |
| `data-editor.md` | Editor de datos internos |
| `announcements.md` | Sistema de anuncios internos |
| `settings-internos.md` | Configuraciones solo visibles para el equipo |

También son documentación interna (aunque están en `09-integraciones-partner/`):
- `api-de-peaking.md` — API pública (pero técnica, no para usuarios finales)
- `partner-portal-que-es.md` y `gestion-de-clientes-como-partner.md` — para resellers

---

## Próximos pasos

3. Completar `06-crm-audiencias/` (gestion-de-contactos, campanas-y-broadcasts)
4. Completar `08-analytics/` (todos los artículos de Insights)
5. Completar `12-pedidos-carritos/flujo-de-compra-con-ia.md`
6. Subir screenshots de la plataforma para usar el skill `generate-docs`
