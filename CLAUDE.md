# CLAUDE.md — Documentación Peaking AI

## ¿Qué es este proyecto?

Help Center de **Peaking AI** — documentación orientada al usuario final (en español), migrada de docs técnicas en inglés a un portal de ayuda guiado por customer journey.

**Stack:** Astro + Starlight · Hosting: GitHub Pages · CI/CD: GitHub Actions

**Repo:** `https://github.com/e-v-e-r-h-a-r-d/peaking-ai-docs`
**Rama de trabajo activa:** `main` (desde 2026-09-08). `max's-branch` quedó igualada a `main` en el commit `b7adf4f` y se dejó inactiva — el deploy se sigue activando en `main` y `max's-branch`, pero el trabajo nuevo va directo a `main` para simplificar el flujo.

---

## Estructura de contenido

```
src/content/docs/
├── index.mdx                    ← Landing page del Help Center
├── 00-novedades/                ← Release notes: anuncios de features nuevas, mejoras y correcciones
├── 01-primeros-pasos/           ← Onboarding (bienvenida, dashboard, config, glosario)
├── 02-canales/                  ← "Otros canales" (nested bajo Integraciones): Instagram, Messenger, Widget web, verificación, reconexión de tokens
├── 03-prompt-studio/            ← Prompt Studio: prompt, variables, herramientas, test
├── 04-base-conocimientos/       ← Knowledge Base
├── 05-conversaciones/           ← Mensajes: panel, escalamiento, bandeja, tags, copilot
├── 06-crm-audiencias/           ← Solo CRM (pipeline). Contactos y Audiencias en secciones propias
├── 07-productos-pagos/          ← Solo catálogo de productos (Stripe/MP/Orders en 12-pedidos)
├── 08-analytics/                ← Dashboard, KPIs, Información de Conversaciones (sidebar: Insights)
├── 09-integraciones-partner/    ← "Catálogos y Herramientas" (nested bajo Integraciones): Catálogos de Datos, Odoo/HubSpot/Zoho, Calendar, Correo, Meta Conversions, Agentes de Voz
├── 10-tareas/                   ← Tareas/TODOs como sección independiente
├── 11-workflows/                ← Editor visual de flujos por nodos
├── 12-pedidos-carritos/         ← Pedidos, Carritos, Stripe, Mercado Pago, Flujo de compra
├── 13-contactos/                ← Contactos (sección propia, separada del CRM)
├── 14-audiencias/               ← "Audiencias y Campañas" (nested bajo Integraciones, junto a WhatsApp — los broadcasts son casi siempre por WhatsApp)
├── 15-whatsapp/                 ← "WhatsApp" (nested bajo Integraciones): conexión, plantillas, histórico de envíos masivos — antes repartido entre 02-canales y 15-envios-whatsapp
├── 17-soporte/                  ← "Soporte y Soluciones": bug vs. solicitud de implementación + configuraciones frecuentes (antes 18-how-to, fusionado aquí)
├── 19-mejores-practicas/        ← Mejores prácticas de arquitectura de agentes, prompts y workflows
└── admin-interno/               ← Solo equipo Peaking (sidebar.hidden: true)
```

**Secciones retiradas (2026-09-08):** `16-guia-devs/` (Peaking MCP) — su contenido se movió a `01-primeros-pasos/configuraciones-iniciales.md` (subsección "Conexión MCP con Claude Code", dentro de la pestaña API). `18-how-to/` — su único artículo se movió a `17-soporte/`.

**Regla crítica:** Toda sección nueva debe registrarse también en `astro.config.mjs` con `autogenerate: { directory: 'XX-nombre' }`.

---

## Sidebar actual (astro.config.mjs)

Reordenado el 2026-09-08 (dos pasadas, ver sesión de esa fecha más abajo) siguiendo el customer journey real. 13 secciones de primer nivel (antes 18):

| # | Label | Directorio / Estructura |
|---|-------|------------------------|
| 1 | Novedades | `00-novedades` |
| 2 | Primeros pasos | `01-primeros-pasos` |
| 3 | **Integraciones** *(grupo anidado)* | — |
| | → WhatsApp | `15-whatsapp` |
| | → Audiencias y Campañas | `14-audiencias` |
| | → Otros canales | `02-canales` |
| | → Catálogos y Herramientas | `09-integraciones-partner` |
| 4 | Estudio de Prompts | `03-prompt-studio` |
| 5 | Base de Conocimientos | `04-base-conocimientos` |
| 6 | Mensajes | `05-conversaciones` |
| 7 | **CRM y Gestión** *(grupo anidado)* | — |
| | → CRM | `06-crm-audiencias` |
| | → Contactos | `13-contactos` |
| | → Tareas | `10-tareas` |
| 8 | Productos | `07-productos-pagos` |
| 9 | Pedidos y Carritos | `12-pedidos-carritos` |
| 10 | Insights | `08-analytics` |
| 11 | Workflows | `11-workflows` |
| 12 | Mejores Prácticas | `19-mejores-practicas` |
| 13 | Soporte y Soluciones | `17-soporte` |

`admin-interno/` no aparece en el sidebar — artículos ocultos con `sidebar.hidden: true`.

**Nota sobre grupos anidados sin landing propia:** "Integraciones" (como ya pasaba con "CRM y Gestión") es una etiqueta paraguas sin página propia de un clic — al hacer clic solo expande sus subgrupos. El `index.md` de `09-integraciones-partner` sigue existiendo y es el primer artículo dentro de su subgrupo "Catálogos y Herramientas", un nivel más adentro que antes. "Mensajes" sí volvió a tener landing directa de un clic (se le quitó el subgrupo "Otros canales" en la segunda pasada de reordenamiento).

**Por qué Reconexión de tokens y Otros canales viven en Integraciones y no en Mensajes:** en la primera pasada de reordenamiento se habían puesto ahí porque conceptualmente "sirven a Mensajes". El usuario corrigió esto — en el producto real, conectar canales (incluida la reconexión de tokens) es parte del panel de **Integraciones**, no de Mensajes. Aplica también a por qué Audiencias y Campañas quedó anidada junto a WhatsApp: los broadcasts casi siempre se envían por WhatsApp.

**Nota sobre labels anidados vía Starlight `autogenerate`:** cuando un `autogenerate` va dentro de un `items: []` (subgrupo), el `label` que le pongas en `astro.config.mjs` SIEMPRE se respeta — no hace falta (ni funciona de forma confiable) nombrar la carpeta física igual al label deseado.

**Artículos ocultos dentro de secciones públicas** (sidebar.hidden: true):
- `09-integraciones-partner/zapier-make-n8n.md` — desactualizado, guardado por si se necesita
- `09-integraciones-partner/api-de-peaking.md` — interno/técnico
- `09-integraciones-partner/partner-portal-que-es.md` — para resellers
- `09-integraciones-partner/gestion-de-clientes-como-partner.md` — para resellers
- `08-analytics/reporteria-de-conversaciones.md` — cubierto en 05-conversaciones

---

## Estado del contenido (2026-08-12)

### Sesión 2026-08-12 — procesamiento de `peaking_new_images`

Se analizaron 27 screenshots nuevas (tema oscuro) contra todo `src/content/docs`. Resultado:

**Artículos nuevos:**
- `08-analytics/reportes-y-analisis.md` — pestaña Reportes de Insights (8 tipos de reporte IA + reportes guardados con KPIs/gráficas)
- `09-integraciones-partner/meta-conversions-api.md` — integración de conversiones a Meta Ads

**Artículos expandidos con contenido/imágenes nuevas:**
- `01-primeros-pasos/configuraciones-iniciales.md` — antes sin imágenes; ahora cubre las pestañas **Contactos** (extracción automática), **CRM** (etiquetas de campos, campos personalizados, notificaciones, Round Robin) y **Funcionalidades** (14 módulos activables) que faltaban por completo, más el campo **Industria del catálogo** y capturas en Organización/Team/Horario
- `04-base-conocimientos/que-es-y-como-funciona.md` — nueva pestaña **Fichas técnicas**
- `03-prompt-studio/crea-tu-primer-prompt.md` — nueva config **Agrupación de respuestas del agente** (ventana de espera)
- `10-tareas/tareas-y-todos.md` — primeras imágenes del artículo (panel Kanban + Configuración de Asignación TODO)
- `15-envios-whatsapp/envios-whatsapp.md` — capturas refrescadas a tema oscuro; columnas actualizadas de Destinatarios/Fallidos a **Entregados/No entregados** (cambio real de la UI) con nota sobre datos históricos pre-julio 2026
- `13-contactos/gestion-de-contactos.md`, `09-integraciones-partner/odoo-hubspot-zoho.md` — capturas refrescadas a tema oscuro (mismo encuadre, sin cambio de contenido)

**Descartado deliberadamente:** captura de "Team Members" (tabla con correos internos reales del equipo Peaking) — no se publicó por exponer PII interna. Documentado en texto sin captura.

**Pendiente / no tocado en esta sesión:** ~10 capturas nuevas de pantallas ya bien documentadas (Mensajes, TODOs Kanban simple, Integraciones/Canales, Plantillas WA, CRM full) donde la versión clara existente ya mostraba un estado más completo o representativo — quedaron sin usar. Un refresh completo de tema claro→oscuro en el resto del sitio (~10+ artículos) sigue pendiente como tarea aparte.

### Sesión 2026-08-20 — Copilot (cotizaciones)

Se creó `05-conversaciones/copilot-cotizaciones.md` documentando el panel **Copilot**: herramienta manual (no automática) para que el equipo de ventas arme cotizaciones desde el Panel de Mensajes o desde una oportunidad del CRM, usando el catálogo de productos existente (Odoo Sync o Excel) y generando la cotización final en Odoo.

### Sesión 2026-08-21 — cierre de pendientes de Copilot + correo + glosario

Se completaron los pendientes que había dejado la sesión 2026-08-20:

- **Enlazado Copilot** desde `05-conversaciones/panel-de-conversaciones.md` (bullet en "Panel de conversación") y desde `06-crm-audiencias/crm-vista-general.md` (botón "Cotizar con Copilot" en la ficha del lead, con captura).
- **Integradas 4 capturas pendientes de CRM** en `06-crm-audiencias/crm-vista-general.md`: nueva subsección **Vista Calendario** (tercera vista del pipeline, junto a Kanban y Lista), captura del modal **Gestionar Tipos de Actividad**, y captura + pasos reales del modal **Nueva Actividad** (Título, Tipo de actividad, Descripción, Fecha y hora programada, Asignado a).
- **Artículo nuevo:** `09-integraciones-partner/correo-electronico.md` — integración de **Correo (Gmail / Outlook / IMAP)**, registrada en `09-integraciones-partner/index.md`.
- **Imagen agregada:** `config-crm-notificaciones-asignacion.png` en `01-primeros-pasos/configuraciones-iniciales.md` (sección "Notificaciones de asignación", antes solo texto).
- **Glosario actualizado** (`01-primeros-pasos/glosario-de-terminos.md`): términos nuevos **Copilot**, **Correo electrónico (integración)**, **Tipo de Actividad**, **Vista Calendario**.

### Estado en git — rama `max's-branch`

Cambios de las sesiones 2026-08-20 y 2026-08-21 (Copilot, integración de Correo, expansión de CRM, glosario) commiteados y pusheados a `max's-branch` al cierre de esta sesión.

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
| `19-mejores-practicas/resumen-de-mejores-practicas.md` | Mejores Prácticas | Cheat sheet de entrada, 4 reglas madre con enlaces |
| `19-mejores-practicas/arquitectura-de-agentes.md` | Mejores Prácticas | Patrón 2 agentes principales + 1 seguimiento, 2 arquetipos, cuándo consolidar vs. separar |
| `19-mejores-practicas/evitar-colisiones-agentes-herramientas.md` | Mejores Prácticas | 3 tipos de solapamiento (agente↔agente, herramienta↔herramienta, agente↔herramienta), checklist pre-publicación |
| `19-mejores-practicas/escribir-prompts-efectivos.md` | Mejores Prácticas | Estructura TRIGGER→ACCIÓN→PROHIBIDO, guardrails anti-alucinación, formato de salida |
| `19-mejores-practicas/ciclo-de-mejora-y-versionado.md` | Mejores Prácticas | Diagnosticar→cambio único→probar→documentar, versionado aditivo con rollback |
| `09-integraciones-partner/catalogos-de-datos.md` | Integraciones | Catálogos de Datos Externos — form completo, declaración en Prompt, FAQ |
| `15-whatsapp/plantillas-whatsapp.md` | Integraciones › WhatsApp | WABA, sincronización, envío desde Panel de Mensajes |
| `03-prompt-studio/declarar-herramientas.md` | Prompt Studio | Configuración de Herramientas, ejemplo HubSpot, FAQ |
| `05-conversaciones/panel-de-conversaciones.md` | Mensajes | Panel de Mensajes, filtros, estados, intervención humana |
| `08-analytics/dashboard-overview.md` | Insights | 5 KPIs, badges, gráfica Análisis de Conversaciones, Asistencia Requerida |
| `08-analytics/peaking-insights.md` | Insights | Información de Conversaciones — agente IA, preguntas de ejemplo, preguntas avanzadas |
| `08-analytics/metricas-clave-y-kpis.md` | Insights | Definición e interpretación de los 5 KPIs, 3 escenarios de lectura combinada |
| `13-contactos/gestion-de-contactos.md` | Contactos | Panel KPIs, tabla, ficha con 5 pestañas, Nuevo Contacto, editar, etiquetas |
| `08-analytics/reportes-y-analisis.md` | Insights | 8 tipos de reporte IA, reportes guardados con KPIs/gráfica/desglose por canal, FAQ |
| `09-integraciones-partner/meta-conversions-api.md` | Integraciones | Conexión de dataset, auto-tags como disparador de conversión, FAQ |
| `05-conversaciones/copilot-cotizaciones.md` | Mensajes | Panel Copilot (manual), dónde aparece, catálogo Odoo/Excel, flujo de cotización, FAQ |
| `09-integraciones-partner/correo-electronico.md` | Integraciones | Conexión Gmail/Outlook/IMAP, qué hace el agente con el correo, FAQ |
| `01-primeros-pasos/configuraciones-iniciales.md` | Primeros pasos | Ahora cubre las 10 pestañas reales de Configuración (antes solo 7, sin Contactos/CRM/API) |
| `01-primeros-pasos/tour-del-dashboard.md` | Primeros pasos | Completo |
| `01-primeros-pasos/bienvenido-a-peaking.md` | Primeros pasos | Completo |
| `15-whatsapp/conexion-whatsapp.md` | Integraciones › WhatsApp | Completo (sin screenshots aún) |
| `02-canales/conexion-instagram.md` | Mensajes › Otros canales | Verificar estado |
| `02-canales/conexion-messenger.md` | Mensajes › Otros canales | Verificar estado |
| `02-canales/widget-sitio-web.md` | Mensajes › Otros canales | Verificar estado |
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

### Sesión 2026-08-26 — Recap del founder + 40 screenshots nuevas

Se procesó `Documentación Recap.md` (notas del founder sobre cómo funciona cada módulo) contra 40 screenshots nuevas en `nuevas_screenshots_peaking/` (sin organizar, formato `Screenshot AAAA-MM-DD at HH-MM-SS Peaking AI.png`). Se catalogó cada captura, se recortaron/renombraron 26 de ellas a la convención del proyecto y se integraron en 8 artículos:

- `05-conversaciones/panel-de-conversaciones.md` — selección múltiple de conversaciones (asignar/etiquetar/silenciar en lote), Contexto del Lead desglosado
- `05-conversaciones/copilot-cotizaciones.md` — cruce con TODOs auto-generados por el agente
- `06-crm-audiencias/crm-vista-general.md` — sección nueva **Papelera de oportunidades**, búsqueda avanzada completa (Fuente, Canal, rango de fechas)
- `10-tareas/tareas-y-todos.md` — búsqueda avanzada, campo Departamento en Nuevo TODO, sección nueva **Crear una regla inteligente de asignación** (AI-Powered)
- `02-canales/plantillas-whatsapp.md` — sección nueva **Enviar una plantilla en lote** (Nuevos Contactos, Contactos Existentes, Audiencias, Programar), límites de envío por calidad de número, verificación de Meta Business
- `09-integraciones-partner/google-calendar.md` — sección nueva **Modos de Agendamiento** (Estricto, Flexible, AI Calendar Routing) + configuración por calendario
- `07-productos-pagos/catalogo-de-productos.md` — formulario "Agregar Producto" reescrito con los campos reales (Tipo de Producto, Imagen, Dimensiones, Atributos, Productos Opcionales); se corrigió el concepto de "campos dinámicos" `{{talla}}` que no existe en la UI actual
- `01-primeros-pasos/configuraciones-iniciales.md` — captura de Team Members (columna de correo redactada — ver nota de privacidad abajo), modal completo de "Nuevo campo" en Contactos, sección nueva de Configuración de Asignación TODO

**Nota de privacidad:** una de las 40 capturas mostraba la tabla completa de Team Members con correos internos reales del equipo. Se usó una versión recortada (nombres/roles visibles, columna de correo tapada con un bloque gris) en vez de excluirla por completo, a pedido explícito del usuario tras confirmar el riesgo. Otra captura de Google Calendar exponía un banner de admin ("Viendo como: X") y un Gmail personal de un miembro del equipo — se descartaron ambos elementos recortando la imagen a solo la fila genérica de calendario.

**Bugs de UI detectados (no corregidos, son del producto no de la doc):** la pestaña Organización de Configuración muestra llaves de traducción sin traducir (`settings.businessContext`); las pestañas Profile/Security y los paneles de asignación Round Robin/TODO están en inglés dentro de una app en español. Documentados tal cual, reflejando la realidad actual.

Build de Astro verificado sin errores tras los cambios (80 páginas). Cambios commiteados y pusheados a `max's-branch`. La carpeta `nuevas_screenshots_peaking/` y `Documentación Recap.md` quedaron sin comitear (son insumos de trabajo, no contenido del sitio).

### Sesión 2026-08-28 — Sección nueva: Mejores Prácticas (arquitectura de agentes, prompts, workflows)

Se creó la sección pública `19-mejores-practicas/` (sidebar: **Mejores Prácticas**, entre Workflows y Pedidos y Carritos) con 5 artículos, generalizando aprendizajes de implementaciones reales de clientes de Peaking (Forza EPP/JAD, Más Sicarú, BAJAJ Torito Motos, EasyFit/Vivo47, Mexbelt — revisadas en `C:\Users\guerr\onedrive\desktop\Peaking\`, fuera de este repo) sin usar nombres de cliente, marcas, precios ni texto de prompt copiado literal:

- `resumen-de-mejores-practicas.md` — cheat sheet de entrada con las 4 reglas madre
- `arquitectura-de-agentes.md` — patrón de máximo 2 agentes principales + 1 de seguimiento; cuándo consolidar vs. separar
- `evitar-colisiones-agentes-herramientas.md` — las 3 formas de solapamiento (agente↔agente, herramienta↔herramienta, agente↔herramienta), incluyendo un caso real generalizado de un nodo Condition ciego al contexto que "robaba" la conversación entre dos agentes
- `escribir-prompts-efectivos.md` — estructura TRIGGER → ACCIÓN OBLIGATORIA → PROHIBIDO, reglas críticas al tope, casos reales fechados, guardrails anti-alucinación
- `ciclo-de-mejora-y-versionado.md` — diagnosticar → un cambio a la vez → probar en Peaking Lab → documentar

Reutiliza screenshots ya existentes de `03-prompt-studio/` y `11-workflows/` (no se tomaron capturas nuevas). Se agregaron 3 sugerencias de capturas específicas del tema + 1 idea de video a `SCREENSHOTS-PENDIENTES.md` (sección "Mejores Prácticas") para un futuro refuerzo visual — no bloquean la sección, que ya es completa en texto.

Build de Astro verificado sin errores (85 páginas). Sidebar registrado en `astro.config.mjs` según la regla crítica del proyecto.

### Sesión 2026-09-03 — Sección nueva: Novedades (release notes)

Se creó la sección pública `00-novedades/` (sidebar: **Novedades**, primer ítem del menú, antes de "Primeros pasos") — historial de anuncios oficiales para que los clientes verifiquen qué cambió en la plataforma, con tres categorías: 🆕 Nuevo, 🔧 Mejora, 🐛 Corrección.

- `index.md` — landing de la sección: qué es, cómo leer un release, lista de entregas publicadas
- `agosto-2026.md` — **v1**, primera entrega: todo lo agregado al producto desde julio 2026 (alcance: solo features/mejoras, sin correcciones — pendiente una siguiente entrega para bugs). Cubre Copilot, Correo (Gmail/Outlook/IMAP), envío de plantillas WhatsApp en lote, métricas Entregados/No entregados, Vista Calendario + Papelera de oportunidades + búsqueda avanzada en CRM, reglas de asignación AI-Powered en Tareas, selección múltiple de conversaciones, Reportes y Análisis con IA, Meta Conversions API, Modos de Agendamiento en Google Calendar, Fichas técnicas en Base de Conocimientos, Agrupación de respuestas del agente, formulario de producto renovado, nuevas pestañas de Configuración, y el lanzamiento de la sección Mejores Prácticas del Help Center.

**Convención para futuros releases:** cada entrega nueva es un archivo `mes-año.md` (ej. `septiembre-2026.md`) dentro de `00-novedades/`. `index.md` mantiene siempre `sidebar.order: 0`. El release más reciente entra con `sidebar.order: 1`, y los anteriores se re-numeran +1 (el más nuevo siempre arriba, justo debajo del índice).

Build de Astro verificado sin errores (87 páginas). Sidebar registrado en `astro.config.mjs`. Todos los enlaces internos del release verificados contra el build.

**Pendiente:** revisión completa de las ~19 secciones públicas contra este release y contra el inventario de este CLAUDE.md, para confirmar que no falte nada ni haya inconsistencias (fase 2 solicitada por el usuario, aún no ejecutada). De paso, esta sesión notó que las tablas "Estructura de contenido" y "Sidebar actual" de este archivo ya estaban desactualizadas antes de este cambio (no reflejaban `15-envios-whatsapp`, `16-guia-devs`, `17-soporte`, `18-how-to`) — corregirlo queda dentro del alcance de esa revisión.

### Sesión 2026-09-08 — Reorganización de secciones + rediseño de portada + flujo de git a `main`

Ejecutó la "fase 2" pendiente de la sesión anterior: reordenó el sidebar completo siguiendo el customer journey real, unificó WhatsApp en una sola sección, y rediseñó la portada para que no tenga links falsos ni contenido desactualizado.

**Reestructuración de contenido — primera pasada:**
- **WhatsApp unificado:** `15-envios-whatsapp/` se renombró a `15-whatsapp/` y ahí se movieron `conexion-whatsapp.md` y `plantillas-whatsapp.md` (antes en `02-canales/`). Nueva sección **WhatsApp**, con las 3 piezas juntas (Conexión, Plantillas, Histórico de envíos) — a pedido explícito del usuario, por ser "el mayor compendio" de contenido y el canal de mayor inversión.
- Redirects agregados en `astro.config.mjs` para las URLs que cambiaron de lugar — Astro genera páginas estáticas de meta-refresh, compatibles con GitHub Pages. Verificado en `dist/` tras cada build.

**Reestructuración de contenido — segunda pasada (corrección del usuario tras revisar):**
- El usuario corrigió el destino de **Reconexión de tokens** e **Instagram/Messenger/Widget**: no van con Mensajes, van con **Integraciones** — es ahí donde se conectan los canales en el producto real. `02-canales` ("Otros canales") y `15-whatsapp` (WhatsApp) quedaron como subgrupos de **Integraciones**, junto con `09-integraciones-partner` ("Catálogos y Herramientas"). "Mensajes" volvió a ser un grupo simple con landing directa (`05-conversaciones`).
- **`14-audiencias` (Audiencias y Campañas)** se anidó también dentro de Integraciones, junto a WhatsApp — los broadcasts se envían casi siempre por WhatsApp. Se agregaron cross-links recíprocos entre `14-audiencias/index.md` / `campanas-y-broadcasts.md` y `15-whatsapp/envios-whatsapp.md`.
- **Soporte + How To fusionados** en una sola sección **"Soporte y Soluciones"** (nombre elegido por Claude, a pedido del usuario): `18-how-to/configuraciones-frecuentes.md` se movió a `17-soporte/`, se creó `17-soporte/index.md`, y se retiró `18-how-to/` del sidebar y del proyecto.
- **Guía para Devs retirada:** el contenido de `16-guia-devs/peaking-mcp.md` (conexión MCP de Claude Code) se movió a `01-primeros-pasos/configuraciones-iniciales.md`, como subsección "Conexión MCP con Claude Code (equipos técnicos y partners)" dentro de la pestaña **API** — la misma API key de esa pestaña es la que se usa para `claude mcp add`. Se retiró `16-guia-devs/` del sidebar y del proyecto.
- 2 redirects adicionales agregados para las rutas retiradas.

**Sidebar final (18 → 13 secciones de primer nivel):** ver tabla completa en "Sidebar actual" arriba. Orden: Novedades → Primeros pasos → Integraciones (WhatsApp, Audiencias y Campañas, Otros canales, Catálogos y Herramientas) → Estudio de Prompts → Base de Conocimientos → Mensajes → CRM y Gestión → Productos → Pedidos y Carritos → Insights → Workflows → Mejores Prácticas → Soporte y Soluciones.

**Portada (`index.mdx`) rediseñada — dos pasadas:**
- Los 4 "recuadros" de `.step-card` (Sigue el camino recomendado) eran `<div>` sin `href` — parecían clicables pero no llevaban a ningún lado. Se convirtieron en `<a>` reales manteniendo el texto y la numeración originales exactos (1. Primeros pasos, 2. Conecta tus canales, 3. Configura tu IA, 4. Opera y crece) — en la primera pasada Claude había reescrito ese texto sin que se pidiera; el usuario pidió restaurarlo.
- La sección "Explora por módulo" (9 tarjetas desactualizadas) se reemplazó por **"El recorrido completo"**: una línea del tiempo de 8 nodos en **zigzag/serpentina** (fila 1 → baja → fila 2 en reversa, con flecha `▶` al final) dibujada con un `<svg class="timeline-path">` superpuesto al grid — la primera versión (sin línea visible, solo tarjetas en grid) no se sentía como línea de tiempo. Los nombres de los 8 nodos se reescribieron con tono ambicioso/enérgico a pedido del usuario: Arranca tu cuenta, Enciende WhatsApp, Entrena tu agente, Vuélvelo experto, Conversa sin límites, Convierte cada lead, Monta tu escaparate, Domina tus números (el subtítulo de cada tarjeta mantiene la descripción literal de la sección).
- Debajo, lista compacta **"Más secciones"** (`.more-sections-grid`) con las 7 secciones restantes que no son parte del core — ninguna sección del sitio queda sin link en la portada.
- **Bug encontrado y corregido:** el zigzag se implementó con `.journey-node:nth-child(N)` para ubicar cada nodo en su columna/fila del grid, pero el `<svg>` de la línea también cuenta como hijo dentro de `.journey-timeline`, corriendo el conteo en 1 y desordenando los 8 nodos. Se corrigió usando `:nth-of-type(N)` (cuenta solo entre elementos `<a>`, ignorando el `<svg>`). Verificado visualmente con captura de pantalla vía `chrome-devtools` MCP antes de dar por terminado.
- CSS en `src/styles/custom.css`: `.journey-timeline`, `.timeline-path` (SVG + flecha), `.journey-node`, `.node-dot`, `.node-card`, `.more-sections-grid` — reutiliza los tokens glass/gradient existentes (`--sl-color-gray-4` para el trazo de la línea, muy sutil con `--pk-glass-border`), sin librerías nuevas.

**Flujo de trabajo de esta sesión:** el usuario pidió expresamente hacer preguntas de aclaración antes de ejecutar la segunda pasada (`AskUserQuestion` con 4 preguntas: relación Audiencias-WhatsApp, nombre de Soporte+HowTo, ubicación de la guía MCP, estilo de la línea de tiempo) y luego subir directo a `main` sin pasar por revisión local con `npm run dev` — a diferencia de la primera pasada de esta misma sesión.

**Flujo de git:** se migró la rama de trabajo de `max's-branch` a `main` (ver nota al inicio del archivo). `origin/main` y `origin/max's-branch` estaban exactamente en el mismo commit (`b7adf4f`) al momento del cambio, así que no hubo nada que fusionar.

Build de Astro verificado sin errores (88 páginas, antes 87). Redirects verificados en `dist/`. Las dos pasadas de esta sesión se commitearon y pushearon a `main` (`35f383c`, `bccedd1`) a pedido explícito del usuario.

### Sesión 2026-09-09 — Pulido de experiencia, corrección de enlaces y glosario

Continuación directa de la sesión anterior (mismo trabajo, día siguiente). El usuario pidió ejecutar en paralelo las 4 ideas de pulido que se habían dejado pendientes, más una revisada de redacción del sitio y una actualización del glosario.

**1. Tema claro verificado:** capturas de pantalla vía `chrome-devtools` MCP con `emulate({colorScheme: 'light'})` — la línea del tiempo en zigzag y la flecha se ven bien en ambos temas, sin cambios de CSS necesarios.

**2. GA4:** no se pudo revisar — la extensión `claude-in-chrome` no está conectada en este entorno (requiere el Chrome real del usuario con su sesión de Google). Pendiente: el usuario conecta la extensión, o comparte manualmente el reporte de "Pages and screens" para que se interprete.

**3. Badges en el sidebar:** se agregó `badge: {text: 'Más usado', variant: 'success'}` a WhatsApp y `badge: {text: 'Secundario', variant: 'note'}` a Otros canales, dentro del grupo Integraciones en `astro.config.mjs` — usa el campo nativo `badge` de Starlight (`I18nBadgeConfigSchema`), no requirió CSS nuevo. Verificado en `dist/`.

**4. Revisión de profundidad de anidación:** Integraciones y CRM y Gestión tienen la misma profundidad (grupo → subgrupo → artículo, 3 clics hasta el contenido). Es consistente entre ambos y "Otros canales" — contenido genuinamente secundario — es exactamente lo que debería estar más escondido. Conclusión: no se necesita restructurar, la profundidad actual es apropiada.

**Revisión de redacción — enlaces rotos por la reorganización de la sesión anterior:**
- `01-primeros-pasos/index.md` e `01-primeros-pasos/bienvenido-a-peaking.md` — el tip/paso "Conecta tus canales" enlazaba a `/02-canales/`, que ya no cubre WhatsApp (ahora es "Otros canales"). Corregido para enlazar WhatsApp y Otros canales por separado.
- `17-soporte/bug-vs-implementacion.md` — 5 links a la ruta vieja `/18-how-to/configuraciones-frecuentes/` (funcionaban por el redirect, pero no apuntaban a la ruta canónica) y una mención a la "sección How To" que ya no existe como tal. Corregidos.
- Se descartaron como falsos positivos varias menciones de "Canales › ..." — son breadcrumbs del producto real (dónde está un botón dentro de la app), no links de esta documentación, y no cambiaron.
- Barrido adicional sin hallazgos: sin placeholders/TODOs de desarrollo olvidados, sin restos de `16-guia-devs`/`18-how-to`/`15-envios-whatsapp` fuera de los redirects y el historial de este archivo.

**Glosario actualizado** (`01-primeros-pasos/glosario-de-terminos.md`): términos nuevos **Audiencia**, **Campaña (Broadcast)**, **Funcionalidades**, **MCP (Peaking MCP)**, **Token de acceso**. Entradas revisadas: **Integración** (ahora describe las 3 áreas reales del panel, no solo "herramienta externa"), **Auto Assignment** (menciona explícitamente Round Robin vs. AI-Powered).

Build de Astro verificado sin errores (88 páginas). Pusheado a `main` a pedido del usuario.

### Sesión 2026-09-09 (tarde) — Novedades dividido por mes a partir del changelog oficial

El usuario entregó `novedades-peaking-2026-Q3.html` — el changelog oficial semanal de Peaking (8 jun – 8 sep 2026, 13 semanas, con etiquetas 🆕 Nuevo / 🔧 Mejora / 🐛 Corrección) — y pidió reorganizar Novedades dividiéndolo por mes y luego por segmento (área de producto).

**Restructuración completa de `00-novedades/`:**
- El único release existente hasta ahora, `agosto-2026.md` (v1, publicado 2026-09-03), era en realidad un resumen sintetizado de memoria interna que mezclaba julio y agosto bajo un solo archivo con el nombre del mes equivocado. Se reemplazó por 4 releases reales, uno por mes calendario, usando el changelog oficial como fuente autoritativa:
  - `junio-2026.md` (nuevo) — semanas 8–29 jun.
  - `julio-2026.md` (nuevo) — semanas 30 jun–27 jul.
  - `agosto-2026.md` (reescrito por completo) — semanas 28 jul–31 ago.
  - `septiembre-2026.md` (nuevo) — semana 1–8 sep (entrega parcial, se ampliará con las próximas semanas del mes).
- **Regla de asignación semana → mes:** cada semana del changelog se asignó al mes de su último día (ej. la semana "28 jul – 3 ago" quedó en agosto). Las semanas no coinciden con el calendario, así que se necesitaba una regla consistente.
- Dentro de cada archivo, los cambios se agruparon por segmento de producto (WhatsApp, CRM, Correo, Meta, Agente de IA, etc.) en vez de por semana — replicando la agrupación por área que ya usa el changelog fuente, pero consolidada a nivel mes.
- `sidebar.order` renumerado: 1 = septiembre (más reciente) … 4 = junio (más antiguo), siguiendo la convención ya documentada arriba.
- `index.md` de la sección actualizado con los 4 releases en la lista "Releases publicados", del más reciente al más antiguo.
- Un solo ítem del `agosto-2026.md` original no venía en el changelog HTML (el anuncio, no-producto, de la sección Mejores Prácticas del Help Center, publicada 2026-08-28 según el historial de este archivo) — se conservó como segmento "Help Center" dentro del agosto-2026.md reescrito, ya que su fecha real sí se conoce. El resto del contenido del v1 original que no aparecía en el HTML (pestañas Contactos/CRM/Funcionalidades de Configuración, formulario de producto renovado) se descartó de Novedades: por las notas de la sesión 2026-08-12/2026-08-26, ambas eran UI ya existente que se estaba documentando por primera vez, no cambios de producto ocurridos en la ventana jun–sep — no correspondía anunciarlas como "novedad".

**Pendiente (resuelto en la sesión siguiente, misma tarde):** varias funciones nuevas anunciadas en el changelog no tenían artículo propio con el paso a paso — ver sesión de abajo.

Build de Astro verificado sin errores (91 páginas, antes 88). Cambios pusheados a `main` a pedido del usuario.

### Sesión 2026-09-09 (tarde, continuación) — Artículos pendientes + curva de la portada

Cerró los 3 pendientes que había dejado la sesión anterior, y ajustó la línea de tiempo de la portada a pedido del usuario (varias iteraciones en vivo, verificadas con capturas vía `chrome-devtools` MCP antes de cada confirmación).

**Artículos completados:**
- `15-whatsapp/conexion-whatsapp.md` — dos secciones nuevas: **Varios números de WhatsApp** (conversaciones aisladas por número, franja de números en la Bandeja, aislamiento opcional por número, calidad y límite de mensajería) y **Coexistencia con la app de WhatsApp Business** (importar hasta 180 días de historial, atribución de campaña conservada). Se corrigieron 2 respuestas de la FAQ que la nueva función de coexistencia había dejado **contradictorias con el producto real** ("¿puedo seguir usando la app...? No al mismo tiempo" → ahora explica ambos modos).
- `15-whatsapp/plantillas-whatsapp.md` — sección nueva **Crea, edita y elimina plantillas sin salir de Peaking** (antes la FAQ decía explícitamente que no se podía), subsección **Una plantilla en todas tus cuentas** y **Elige el número emisor**. FAQ corregida y ampliada.
- `09-integraciones-partner/meta-ads.md` (nuevo) — integración de Meta Ads (sincronización de campañas/anuncios cada 10 min, chip "Llegó por un anuncio"), con nota cruzada aclarando que es distinta de Meta Conversions API (una trae datos hacia Peaking, la otra los envía hacia Meta). Registrado en `09-integraciones-partner/index.md` y enlazado recíprocamente desde `meta-conversions-api.md`.
- `09-integraciones-partner/correo-electronico.md` — sección nueva **Bandeja de correo compartida** (privado/organización/usuarios seleccionados, quién respondió cada correo, firmas personales y del buzón, estilo de respuesta por remitente, imágenes y adjuntos entrantes). FAQ ampliada.
- Enlaces de `00-novedades/septiembre-2026.md` actualizados para apuntar a las secciones nuevas en vez de a la página general de cada artículo.
- Glosario actualizado: **Bandeja compartida**, **Coexistencia (WhatsApp)**, **Meta Ads**.

**Portada (`index.mdx` + `custom.css`) — ajuste de la línea de tiempo, con corrección en vivo del usuario en 3 pasadas:**
1. Se reemplazó el tramo recto entre los nodos 4 y 5 (un corner de 90°) por una curva sinusoidal (dos cubic bézier).
2. El usuario notó que, con el nodo 5 alineado bajo el nodo 4 (fila 2 invertida, patrón "serpentina" original del diseño), la curva se veía rara. Se cambió el grid para que la fila 2 lea de izquierda a derecha igual que la fila 1 (nodo 5 bajo el nodo 1, `nth-of-type(5..8)` ya no invertido) y la curva ahora barre de derecha a izquierda conectando el final de la fila 1 con el inicio de la fila 2; la flecha final se volteó para apuntar a la derecha (antes apuntaba a la izquierda).
3. El usuario pidió que el gancho de salida del nodo 4 y el de entrada al nodo 5 fueran **reflejo exacto uno del otro** (curva punto-simétrica respecto al punto medio entre ambos nodos) — la primera versión curveaba bien pero no era simétrica. Se recalculó el segundo cubic bézier como la reflexión matemática exacta del primero respecto al punto medio (200, 106.5 en el viewBox), garantizando continuidad de tangente automática en el punto de unión.

**Gotcha de esta sesión:** los `npm run dev` lanzados en background para verificar cambios visuales no siempre mueren con `TaskStop` en Windows — quedaron 5 procesos `node` huérfanos escuchando en puertos 4321–4325 que hubo que matar manualmente con `taskkill`. Revisar con `netstat -ano | grep LISTENING` si un puerto "ya está en uso" en la próxima sesión.

Build de Astro verificado sin errores (92 páginas, antes 91).

---

### Sesión 2026-09-11 — Novedades consolidado en una sola página

El usuario pidió que Novedades dejara de ser 4 páginas separadas (una por mes) y pasara a ser **una sola página** navegable con el menú lateral derecho ("On this page" nativo de Starlight), con resúmenes de una línea por función que enlazan directo al artículo correspondiente — mostró un boceto en Excalidraw con "Mes → segmentos" anidados en el menú. Se preguntó primero (`AskUserQuestion`, 4 preguntas) antes de ejecutar.

**Cambios:**
- `junio-2026.md`, `julio-2026.md`, `agosto-2026.md` y `septiembre-2026.md` se eliminaron y su contenido se fusionó dentro de `00-novedades/index.md`, un mes por sección `## Mes Año` (ancla estable, ej. `#agosto-2026` — igual a la URL vieja) con los segmentos de producto como `### Segmento` anidados debajo. El TOC nativo de Starlight (min/maxHeadingLevel por defecto: H2–H3) arma automáticamente el menú "Mes → segmentos" del boceto, sin componentes nuevos.
- Cada función se condensó a **una línea** (`🆕/🔧/🐛 **Nombre** — qué cambió. [Ver cómo →](enlace#ancla)`), en vez de los párrafos de 2-4 líneas que tenía cada archivo mensual. Cuando varias funciones de un mismo segmento apuntan al mismo artículo sin ancla propia (ej. Bandeja de entrada v2, 9 funciones → un solo artículo), el link queda una sola vez junto al encabezado del segmento en vez de repetirse en cada bullet.
- Al inicio de la página, una línea compacta `Ir a: [Septiembre 2026](#septiembre-2026) · ...` sirve de índice rápido en vista móvil (donde el TOC lateral se colapsa arriba de la página).
- 4 redirects nuevos en `astro.config.mjs` (`/00-novedades/agosto-2026/` → `/00-novedades/#agosto-2026`, y lo mismo para los otros 3 meses) — mismo patrón de redirects que ya usa el proyecto. No se encontró ningún otro artículo del sitio enlazando a las URLs viejas de cada mes.
- Como solo queda `index.md` en el directorio, el sidebar izquierdo (`autogenerate: { directory: '00-novedades' }`) pasó de mostrar 5 ítems a mostrar un solo link "Novedades", sin tocar `astro.config.mjs` para eso.

**Convención para futuros releases (reemplaza la de la sesión 2026-09-03):** cada entrega nueva es una sección `## Mes Año` agregada **arriba** dentro de `00-novedades/index.md` (justo después de la línea "Ir a: ..."), no un archivo nuevo. El mes más reciente siempre queda primero (orden cronológico inverso dentro del mismo archivo, ya no vía `sidebar.order` por archivo).

Build de Astro verificado sin errores (88 páginas, antes 92 — los 4 archivos fusionados). Anchors y redirects verificados en `dist/`.

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
- **Imágenes:** URL pública GitHub Raw → `https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/[seccion]/[imagen.png]`
- **Extensión de imágenes:** `.png` por defecto en las capturas actuales. Usar `.jpg` solo si vienen del flujo antiguo de `guardar-screenshot.ps1` sin el flag `-png`
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

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
