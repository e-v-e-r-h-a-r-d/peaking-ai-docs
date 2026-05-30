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
├── 06-crm-audiencias/           ← Solo CRM (pipeline). Contactos y Audiencias en secciones propias
├── 07-productos-pagos/          ← Solo catálogo de productos (Stripe/MP/Orders en 12-pedidos)
├── 08-analytics/                ← Dashboard, KPIs, Información de Conversaciones (sidebar: Insights)
├── 09-integraciones-partner/    ← 3 tabs reales: Canales (→02-canales), Catálogos de Datos, Herramientas
├── 10-tareas/                   ← Tareas/TODOs como sección independiente
├── 11-workflows/                ← Editor visual de flujos por nodos
├── 12-pedidos-carritos/         ← Pedidos, Carritos, Stripe, Mercado Pago, Flujo de compra
├── 13-contactos/                ← Contactos (sección propia, separada del CRM)
├── 14-audiencias/               ← Audiencias y Campañas (sección propia)
└── admin-interno/               ← Solo equipo Peaking (sidebar.hidden: true)
```

**Regla crítica:** Toda sección nueva debe registrarse también en `astro.config.mjs` con `autogenerate: { directory: 'XX-nombre' }`.

---

## Sidebar actual (astro.config.mjs)

| Label | Directorio / Estructura |
|-------|------------------------|
| Primeros pasos | `01-primeros-pasos` |
| Base de Conocimientos | `04-base-conocimientos` |
| Mensajes | `05-conversaciones` |
| Insights | `08-analytics` |
| **CRM y Gestión** *(grupo anidado)* | — |
| → CRM | `06-crm-audiencias` |
| → Contactos | `13-contactos` |
| → Tareas | `10-tareas` |
| Estudio de Prompts | `03-prompt-studio` |
| Integraciones | `09-integraciones-partner` |
| Productos | `07-productos-pagos` |
| Workflows | `11-workflows` |
| Pedidos y Carritos | `12-pedidos-carritos` |
| Audiencias y Campañas | `14-audiencias` |
| Conecta tus canales | `02-canales` |

`admin-interno/` no aparece en el sidebar — artículos ocultos con `sidebar.hidden: true`.

**Artículos ocultos dentro de secciones públicas** (sidebar.hidden: true):
- `09-integraciones-partner/zapier-make-n8n.md` — desactualizado, guardado por si se necesita
- `09-integraciones-partner/api-de-peaking.md` — interno/técnico
- `09-integraciones-partner/partner-portal-que-es.md` — para resellers
- `09-integraciones-partner/gestion-de-clientes-como-partner.md` — para resellers
- `08-analytics/reporteria-de-conversaciones.md` — cubierto en 05-conversaciones

---

## Estado del contenido (2026-04-22)

### Todo en git — rama `max's-branch`

El working tree está limpio. Todos los cambios están commiteados y pusheados.

### Artículos con contenido real completo

| Archivo | Sección | Notas |
|---------|---------|-------|
| `06-crm-audiencias/crm-vista-general.md` | CRM | Panel detalle, Timeline, Conversación, tipos de actividad, Nueva oportunidad |
| `14-audiencias/audiencias-y-segmentos.md` | Audiencias | Segmentos dinámicos/estáticos, flujo de creación, buenas prácticas |
| `14-audiencias/campanas-y-broadcasts.md` | Audiencias | Flujo de creación, variables en plantillas, estados, métricas, FAQ |
| `10-tareas/tareas-y-todos.md` | Tareas | 4 etapas reales, KPIs, Gestionar Etapas, Tipos de Actividad, detalle del TODO |
| `07-productos-pagos/catalogo-de-productos.md` | Productos | Panel, creación manual, campos dinámicos, categorías, declaración en Prompt |
| `11-workflows/como-funcionan-los-workflows.md` | Workflows | 7 tipos de nodo (Trigger/Agent/Condition/Outbound/Delay/Webhook/Contact Lookup), Projects, versiones, Execution Runs, Test |
| `12-pedidos-carritos/pedidos-y-carritos.md` | Pedidos | Órdenes, carritos abandonados, filtros, recuperación |
| `12-pedidos-carritos/stripe-configuracion.md` | Pedidos | Conexión OAuth, productos, dashboard ventas, métodos, carrito, tarifas |
| `12-pedidos-carritos/mercado-pago-configuracion.md` | Pedidos | Autenticación MP, IVA, dashboard, métodos por país, tarifas |
| `09-integraciones-partner/odoo-hubspot-zoho.md` | Integraciones | Go HighLevel nativo, HubSpot, Odoo, Zoho, Integraciones Personalizadas, Stripe OAuth |
| `09-integraciones-partner/google-calendar.md` | Integraciones | Conexión, autenticación Google, declaración en Prompt Studio |
| `09-integraciones-partner/catalogos-de-datos.md` | Integraciones | Catálogos de Datos Externos — form completo, declaración en Prompt, FAQ |
| `02-canales/plantillas-whatsapp.md` | Canales | WABA, sincronización, envío desde Panel de Mensajes |
| `03-prompt-studio/declarar-herramientas.md` | Prompt Studio | Configuración de Herramientas, ejemplo HubSpot, FAQ |
| `05-conversaciones/panel-de-conversaciones.md` | Mensajes | Panel de Mensajes, filtros, estados, intervención humana |
| `08-analytics/dashboard-overview.md` | Insights | 5 KPIs, badges, gráfica Análisis de Conversaciones, Asistencia Requerida |
| `08-analytics/peaking-insights.md` | Insights | Información de Conversaciones — agente IA, preguntas de ejemplo, preguntas avanzadas |
| `08-analytics/metricas-clave-y-kpis.md` | Insights | Definición e interpretación de los 5 KPIs, 3 escenarios de lectura combinada |
| `13-contactos/gestion-de-contactos.md` | Contactos | Panel KPIs, tabla, ficha con 5 pestañas, Nuevo Contacto, editar, etiquetas |
| `01-primeros-pasos/tour-del-dashboard.md` | Primeros pasos | Completo |
| `01-primeros-pasos/configuraciones-iniciales.md` | Primeros pasos | Completo |
| `01-primeros-pasos/bienvenido-a-peaking.md` | Primeros pasos | Completo |
| `02-canales/conexion-whatsapp.md` | Canales | Completo (sin screenshots aún) |
| `02-canales/conexion-instagram.md` | Canales | Verificar estado |
| `02-canales/conexion-messenger.md` | Canales | Verificar estado |
| `02-canales/widget-sitio-web.md` | Canales | Verificar estado |
| `03-prompt-studio/variables-y-funciones-avanzadas.md` | Prompt Studio | Completo (renombrado a Plantillas de Prompt) |
| `05-conversaciones/tags-y-etiquetas.md` | Mensajes | Completo |
| `05-conversaciones/escalamiento-a-humano.md` | Mensajes | Completo |
| `05-conversaciones/bandeja-de-mensajes.md` | Mensajes | Completo |
| `admin-interno/` (7 archivos) | Interno | Todos con `sidebar.hidden: true` + admin gate de contraseña |

### Único placeholder real público (`:::note[Artículo en construcción]`)

- `12-pedidos-carritos/flujo-de-compra-con-ia.md` — pendiente de screenshots y contenido

### Admin gate (contraseña)

- Implementado en `src/components/MarkdownContent.astro`
- Páginas de `admin-interno/` requieren contraseña para ver el contenido
- **Contraseña actual:** `peaking2026` — editar la constante `PASSWORD` en el componente
- Token almacenado en `localStorage` (o `sessionStorage` si no se activa "Recordar")
- Botón "Bloquear" visible en páginas admin para cerrar sesión

---

## Google Analytics 4

GA4 está configurado en `astro.config.mjs` con el ID real:

```js
const GA_MEASUREMENT_ID = 'G-XTN1FD69HK';
```

**Panel de GA4:** analytics.google.com — ver Pages and screens para artículos más visitados.

---

## Flujo de trabajo para generar contenido

1. Tomar screenshot de la plataforma Peaking (Win+Shift+S → clipboard)
2. Guardar con `.\guardar-screenshot.ps1 -seccion "XX-nombre" -nombre "descripcion"`
3. Ejecutar `/generate-docs` en Claude Code con el screenshot como contexto
4. Revisar el `.md` generado, hacer commit y push a `max's-branch`
5. GitHub Actions despliega automáticamente

**Script de screenshots:** `guardar-screenshot.ps1` — guarda como JPEG comprimido (85% calidad, max 1440px). Parámetros: `-calidad 90`, `-png` (fuerza PNG), `-maxAncho 1920`.

**Mapa completo de screenshots pendientes:** ver `SCREENSHOTS-PENDIENTES.md` en la raíz del proyecto.

---

## Convenciones de contenido

- **Idioma:** Español neutro latinoamericano
- **Voz:** "Experto empático" — directo, orientado a tareas, sin jerga innecesaria
- **Frontmatter obligatorio:** `title`, `description`, `sidebar.order` en todos los artículos públicos
- **Admin interno:** añadir `sidebar.hidden: true` en el frontmatter
- **Imágenes:** URL pública GitHub Raw → `https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots/[seccion]/[imagen.jpg]`
- **Extensión de imágenes:** `.jpg` por defecto (el script guarda JPEG). Usar `.png` solo si se pasó el flag `-png`
- **Nombres propios respetados:** Prompt Studio, Command Center, Knowledge Base, Pedidos y Carritos, TODOs, Tareas, Stripe (nunca "Stipe"), Mercado Pago, Workflows, Go HighLevel

---

## Secciones internas (admin-interno)

Estos artículos existen pero **no son visibles en el sidebar público**:

| Archivo | Propósito |
|---------|-----------|
| `command-center.md` | Panel maestro de operaciones internas |
| `admin-organizations.md` | Gestión de organizaciones desde el lado admin |
| `sales-trials.md` | Gestión de trials y demos de ventas |
| `data-editor.md` | Editor de datos internos |
| `announcements.md` | Sistema de anuncios internos |
| `settings-internos.md` | Configuraciones solo visibles para el equipo |

También ocultos (en `09-integraciones-partner/`):
- `api-de-peaking.md`, `partner-portal-que-es.md`, `gestion-de-clientes-como-partner.md`, `zapier-make-n8n.md`

---

## Roadmap de ejecución

> **Revisado 2026-04-27** — La auditoría de contenido confirmó que la mayoría de artículos listados como placeholders ya están completos. Solo queda 1 placeholder público real.

### Abril 27-30 (cierre del mes)
- [x] Light/dark toggle implementado y afinado (sombras, transiciones, tokens por tema)
- [x] Admin gate con contraseña para sección `admin-interno/`
- [ ] Auditoría de `02-canales/`: verificar instagram, messenger, widget (pueden ya estar completos)
- [ ] Verificar `01-primeros-pasos/activa-tus-modulos.md` y `glosario.md`
- [ ] Tomar screenshots de Workflows y Prompt Studio (SCREENSHOTS-PENDIENTES.md — 🔴)

### Mayo Semana 1-2 (1–16) — Único pendiente real + screenshots
- [ ] Completar `12-pedidos-carritos/flujo-de-compra-con-ia.md` — único placeholder público
- [ ] Insertar screenshots disponibles en artículos de Workflows y Prompt Studio
- [ ] Insertar screenshots en `02-canales/` cuando se tomen

### Mayo Semana 3-4 (17–31) — Calidad y preparación de skin
- [ ] Auditoría completa: links internos, sidebar.order, FAQs consistentes
- [ ] Revisión GA4: páginas más visitadas, tiempo en página, fuentes de tráfico
- [ ] Preparar lista de ajustes para nuevo skin — NO tomar más screenshots antes del cambio de diseño

### Continuo (post-skin)
- 40 screenshots documentados en `SCREENSHOTS-PENDIENTES.md`
- Tomar y actualizar imágenes cuando el nuevo skin esté publicado
