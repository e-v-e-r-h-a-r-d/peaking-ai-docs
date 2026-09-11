---
title: Novedades
description: Anuncios oficiales de Peaking — funciones nuevas, mejoras y correcciones, para que siempre sepas qué cambió en la plataforma.
sidebar:
  order: 0
---

Esta sección reúne los anuncios oficiales de Peaking: cada vez que lanzamos una función nueva, mejoramos algo existente o corregimos un problema reportado, queda documentado aquí. La idea es simple — si algo cambió en tu cuenta, lo puedes verificar en un solo lugar en vez de tener que preguntarnos.

---

## Cómo leer un release

Cada entrega agrupa los cambios por área de producto (CRM, WhatsApp, Tareas, etc.) y marca cada anuncio con una etiqueta:

- **🆕 Nuevo** — una función que no existía antes.
- **🔧 Mejora** — un cambio sobre algo que ya existía (más campos, mejor rendimiento, una vista adicional).
- **🐛 Corrección** — un problema reportado que ya está resuelto.

Las entregas se listan de la más reciente a la más antigua. Usa el menú de esta página (arriba en móvil, a la derecha en escritorio) para saltar directo al mes o al área que te interesa.

Ir a: [Septiembre 2026](#septiembre-2026) · [Agosto 2026](#agosto-2026) · [Julio 2026](#julio-2026) · [Junio 2026](#junio-2026)

---

## Septiembre 2026

**WhatsApp multi-cuenta, Meta Ads y correo compartido** · 1–8 de septiembre, entrega parcial

### WhatsApp

- 🆕 **Aislamiento por número** — cada usuario ve solo las conversaciones, plantillas y envíos de sus propios números; útil para sucursales. [Ver cómo →](/15-whatsapp/conexion-whatsapp/#varios-números-de-whatsapp)
- 🆕 **Coexistencia con WhatsApp Business** — lo que tu equipo escribe desde el teléfono aparece como saliente en Peaking; importa hasta 180 días de historial. [Ver cómo →](/15-whatsapp/conexion-whatsapp/#coexistencia-con-la-app-de-whatsapp-business)
- 🆕 **Plantillas administradas desde Peaking** — créalas, edítalas y elimínalas sin entrar a Meta; replícalas en todas tus cuentas y elige el número emisor al enviar. [Ver cómo →](/15-whatsapp/plantillas-whatsapp/#crea-edita-y-elimina-plantillas-sin-salir-de-peaking)

### Meta

- 🔧 **Conversions API con un clic** — se vincula solo al conectar Messenger, Instagram o WhatsApp; ya no hace falta pegar dataset y token a mano. [Ver cómo →](/09-integraciones-partner/meta-conversions-api/)
- 🆕 **Integración con Meta Ads** — sincroniza campañas y anuncios cada 10 minutos; el chip «Llegó por un anuncio» muestra la campaña real del lead. [Ver cómo →](/09-integraciones-partner/meta-ads/)

### Correo electrónico

- 🆕 **Bandeja compartida** — un buzón puede ser privado, de toda la organización o de usuarios seleccionados, con firmas propias y del buzón, estilo de respuesta por remitente, y quién respondió cada correo. [Ver cómo →](/09-integraciones-partner/correo-electronico/#bandeja-de-correo-compartida)

### Formularios web y workflows

- 🆕 **Conversión de Google Ads desde tu formulario** — pega tu ID y etiqueta; cada envío dispara la conversión y guarda clic y UTM. [Ver cómo →](/11-workflows/como-funcionan-los-workflows/)
- 🔧 Reasignar un canal a otro proyecto, directo desde el diálogo de publicar, sin desconectar.

### Insights y agente de IA

- 🔧 **Información de Conversaciones en tu idioma** — responde en el idioma de la interfaz, cuenta conversaciones (no mensajes) y nombra a cada cliente. [Ver cómo →](/08-analytics/peaking-insights/)
- 🐛 Sin fugas de razonamiento interno — ya no aparece planeación en inglés/spanglish ni nombres de herramientas en las respuestas al cliente.
- 🔧 Cotizadores industriales a la medida — niveles de precio por tipo de cliente, cargos por urgencia y cálculo determinista de servicios de planta.

---

## Agosto 2026

**Bandeja de entrada v2, Papelera del CRM y WhatsApp multi-número** · 28 de julio – 31 de agosto

### Bandeja de entrada v2

Rediseño completo del Panel de Mensajes. [Ver el panel →](/05-conversaciones/panel-de-conversaciones/)

- 🆕 **No leídos por usuario** — el contador cuenta lo que tú no viste; que la IA conteste no marca como leído.
- 🆕 **Tiempo real** en el hilo abierto, con scroll infinito que no repite ni salta conversaciones.
- 🆕 **Estado de atención** (bot, sin asignar, asignado, escalado), filtro «Mías» y acciones en lote.
- 🆕 **Notas del asesor** bajo el Resumen IA — internas, visibles para todo el equipo, sobreviven a una reasignación.
- 🆕 **Firma del asesor** en cada mensaje humano, y edición del contacto sin salir de Mensajes.
- 🆕 **Bandeja compartida** como permiso independiente de la visibilidad del CRM.
- 🔧 Filtros usables en ventana no maximizada; en móvil, panel inferior con un solo scroll.
- 🔧 El rol usuario ya puede reasignar y tomar control de conversaciones (antes solo admins/managers).
- 🐛 Notificaciones bajan al leer, no solo al responder; los adjuntos del agente ya se ven en la conversación.

### CRM

- 🆕 **Papelera con restauración** — lista lo eliminado con quién y cuándo, búsqueda y botón Restaurar, para admins y managers. [Ver cómo →](/06-crm-audiencias/crm-vista-general/)
- 🔧 **Tablero que carga por scroll** — cada columna trae más tarjetas al bajar en vez de mostrar «96 de 13,104»; carga inicial 4 veces más liviana.
- 🐛 Corregidos el «borrado fantasma» de oportunidades y la pantalla en negro al abrir el CRM en organizaciones grandes.

### WhatsApp

- 🆕 **Varios números sin que se mezclen** — conversaciones independientes por número, con franja de números y contador de no leídos en la bandeja. [Ver cómo →](/15-whatsapp/)
- 🆕 Calidad y límite de mensajería visibles en la tarjeta de conexión — explica por qué un envío masivo no llega completo.
- 🆕 «Escribiendo…» en WhatsApp mientras la IA prepara la respuesta.
- 🔧 PDF de cotización por WhatsApp con entrega confiable aunque el ERP tarde en generarlo.
- 🐛 Acuse de lectura restaurado en números en coexistencia; corregido un error que impedía enviar plantillas.

### Agente y voz

- 🔧 Búsquedas largas ya no agotan el turno — el agente tiene un tope por turno y responde aunque la consulta se alargue.
- 🆕 **Panel de uso de voz**, con medición por llamada. [Ver cómo →](/09-integraciones-partner/agentes-de-voz/)

### Exportaciones, búsqueda y cotización

- 🆕 Campos inteligentes y personalizados en la exportación de contactos y del CRM a Excel.
- 🔧 Búsqueda de productos más precisa — el primer resultado correcto pasó de 83% a 100% en las pruebas.
- 🆕 **Actualizar la cotización en vez de duplicarla** — si el cliente cambia cantidades, se actualiza el mismo folio y se reenvía el PDF vigente. [Ver cómo →](/05-conversaciones/copilot-cotizaciones/)
- 🆕 Condiciones por cliente y agentes de cotización a la medida en cotizadores industriales (bandas, milímetros, redondeo, PDF integrado).

### Plataforma

- 🐛 Zona horaria de tu organización corregida en analíticas y fechas de correo.
- 🔧 La plataforma se siente más rápida — el aviso de mensajes sin responder dejó de sobrecargar la base de datos.

### Help Center

- 🆕 **Nueva sección: Mejores Prácticas** — guías de arquitectura de agentes, cómo evitar que agentes y herramientas se pisen, prompts efectivos y versionado seguro. [Ver cómo →](/19-mejores-practicas/resumen-de-mejores-practicas/)

---

## Julio 2026

**Copilot, Correo electrónico y Fichas técnicas** · 30 de junio – 27 de julio

### Cotización y Copilot

- 🆕 **Modo Copilot** — el vendedor toma control, la IA arma un carrito editable y el humano revisa y envía con un clic; la IA nunca cotiza sola en este modo. Requiere Odoo. [Ver cómo →](/05-conversaciones/copilot-cotizaciones/)
- 🆕 «Cotizar con Copilot» disponible desde una oportunidad del CRM o desde una tarea, con alertas si una sesión queda atascada más de 3 horas.

### Correo electrónico

- 🆕 **Canal de correo: Gmail, Outlook e IMAP** — conecta un buzón y elige si la IA responde sola, deja el borrador para aprobar, o queda apagada. [Ver cómo →](/09-integraciones-partner/correo-electronico/)
- 🆕 Outlook/Microsoft 365 y cualquier correo por IMAP (hosting compartido, Zoho, corporativo) con solo usuario y contraseña.

### CRM y Tareas

- 🆕 **Calendario de actividades** por mes, semana o día, con filtro por tipo y por vendedor. [Ver cómo →](/06-crm-audiencias/crm-vista-general/)
- 🆕 Búsqueda por campo, filtro de fechas y «Ordenar por» en el pipeline; sucursal como lista desplegable auditada.
- 🆕 **Sin leads duplicados por contacto** — el mismo teléfono o correo evoluciona la oportunidad existente en vez de crear una nueva.
- 🆕 Filtro «Sin asignar», reasignación de lead duplicado con un clic, y permiso «ver todo el CRM, editar solo lo propio».
- 🆕 «Aplicar a todas las tareas» en las reglas de asignación automática. [Ver Tareas →](/10-tareas/tareas-y-todos/)

### Base de Conocimientos

- 🆕 **Fichas técnicas** — biblioteca central por producto, vinculada por producto, familia o categoría; el agente solo la envía si el cliente la pide y el vínculo está confirmado. [Ver cómo →](/04-base-conocimientos/que-es-y-como-funciona/)

### Agente de IA

- 🆕 **Lee Excel y PDF renglón por renglón** — las tablas de un pedido llegan limpias, línea por línea.
- 🆕 **El agente recuerda a tus clientes** — razón social, correo, RFC y código postal no se vuelven a preguntar.
- 🆕 Consulta de contacto y factura desde el agente (requiere Odoo); vuelve a ver fotos recientes del historial.
- 🔧 Auto-envío del correo de cotización respeta el umbral de revisión humana; un doble clic ya no duplica cotizaciones.
- 🐛 Sin cotizaciones inventadas ni productos fantasma; un carrito vacío no se puede cerrar.
- 🐛 Mensajes duplicados, fugas de idioma y de razonamiento interno eliminados.
- 🐛 Instagram con varias páginas conecta la página correcta; el widget dejó de parpadear al ajustar tamaño.

### Meta e integraciones

- 🆕 **Meta Conversions API por auto-etiquetas** — elige qué etiquetas automáticas disparan una conversión hacia Meta. [Ver cómo →](/09-integraciones-partner/meta-conversions-api/)
- 🆕 Conversión a Meta por etapa del CRM — marca «Enviar conversión a Meta» en Gestionar Etapas.
- 🆕 **Adjuntos en el widget web** — tus visitantes pueden enviar fotos y documentos. [Ver cómo →](/02-canales/widget-sitio-web/)
- 🐛 Auto-etiquetado ya no mezcla sucursales; exportar contactos ya no expira en organizaciones grandes.

---

## Junio 2026

**API pública, auto-etiquetado y exportación de contactos** · 8 – 29 de junio

*Punto donde arranca este historial semanal de Novedades — no es necesariamente lo primero que lanzó Peaking.*

### Integraciones y API

- 🆕 **API pública de Peaking AI** — envía leads desde Gravity Forms, Zapier o tu propio backend; genera tu llave en `Configuración → API`.

### CRM y Contactos

- 🆕 **Exportar contactos a Excel** — con filtros de fecha, canal y fuente, y columnas de etiquetas, oportunidad y etapa. [Ver cómo →](/13-contactos/gestion-de-contactos/)
- 🆕 **Visibilidad por asignación** — el rol usuario ve solo sus contactos y conversaciones asignadas. [Ver cómo →](/06-crm-audiencias/crm-vista-general/)
- 🆕 Filtros Fuente y Canal en el pipeline del CRM.
- 🐛 Formulario web embebible corregido — ya no se recorta en algunos sitios.

### Agente de IA

- 🔧 Cotiza exactamente lo que el cliente pidió — sin productos ajenos ni renglones omitidos.
- 🆕 Agente y catálogo disponibles en inglés para organizaciones con ese idioma preferido.
- 🆕 **Auto-etiquetado para todas las organizaciones** — barrido automático cada 20 minutos; sin costo si no tienes reglas configuradas.
- 🔧 El agente ve las imágenes de verdad (visión real, no un resumen de texto).
- 🆕 Comando `/reset` por WhatsApp para reiniciar la conversación de prueba.
- 🔧 El carrito muestra exactamente el producto, color y talla a cotizar; la búsqueda ya no confunde teléfonos con productos.
- 🐛 Checkout fallido ya no inventa un número de cotización; las fracciones (½, ¼, ¾) ya se buscan bien en el catálogo.

### Mensajes y canales

- 🐛 Instagram y Messenger sin retraso por el procesamiento del agente.
- 🐛 Con varios números de WhatsApp, la respuesta siempre sale por el número que recibió el mensaje original. [Ver cómo →](/15-whatsapp/)

---

:::note[¿Buscas cómo usar una función, no qué cambió?]
Esta sección es un historial de anuncios, no un manual. Para instrucciones de uso de cualquier función, consulta la sección correspondiente en el menú (CRM, Mensajes, Workflows, etc.) — cada anuncio de aquí enlaza directo al artículo con el paso a paso.
:::
