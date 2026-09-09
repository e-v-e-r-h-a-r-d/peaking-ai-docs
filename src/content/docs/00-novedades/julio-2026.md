---
title: "Julio 2026: Copilot, Correo electrónico y Fichas técnicas"
description: Julio trajo el modo Copilot para cotizar acompañado por un vendedor, la conexión de correo (Gmail, Outlook e IMAP), fichas técnicas en la Base de Conocimientos, y una ronda grande de mejoras en CRM y Tareas.
sidebar:
  order: 3
---

Cambios publicados entre el 30 de junio y el 27 de julio de 2026.

---

## Cotización y Copilot

### 🆕 Modo Copilot

El vendedor toma control de la conversación, la IA arma un carrito editable a partir de lo que pidió el cliente, y el humano revisa y envía la cotización con un clic. La IA nunca cotiza sola en este modo. Opcional por organización, requiere Odoo.

- **«Cotizar con Copilot»** disponible desde una oportunidad en el CRM y desde una tarea, con la conversación y el panel de cotización lado a lado.
- **Alertas de sesiones atascadas:** aviso al vendedor a las 3 horas de tomar control sin cerrar la cotización, resumen diario a managers y resumen semanal a administradores.

→ [Copilot — cotizaciones desde la conversación](/05-conversaciones/copilot-cotizaciones/)

---

## Correo electrónico

### 🆕 Canal de correo: Gmail, Outlook e IMAP

Conecta un buzón y elige el modo de la IA: responde sola, deja el borrador para que lo apruebes, o queda apagada. Los correos entran a la Bandeja como cualquier otro canal; el historial previo a la conexión no se responde automáticamente.

- **Outlook / Microsoft 365** conectable como buzón (semana del 14 al 20 de julio).
- **Cualquier correo por IMAP** — hosting compartido, Zoho, corporativo — con sólo correo y contraseña, y una opción avanzada para servidor y puertos. La contraseña no se guarda.

→ [Correo — Gmail, Outlook e IMAP](/09-integraciones-partner/correo-electronico/)

---

## CRM y Tareas

### 🆕 Calendario de actividades

Vista por mes, semana o día, con filtro por tipo de actividad y por vendedor; un clic sobre una actividad abre la oportunidad. Incluye indicadores por vendedor.

### 🆕 Búsqueda y organización del pipeline

Búsqueda por campo, vista a todo el ancho con kanban más alto, filtro por rango de fechas y «Ordenar por» creación, modificación o etapa.

### 🆕 Sucursal como lista desplegable

Se acabaron las variantes de texto libre para la sucursal — ahora es una lista desplegable por organización. Todo cambio sobre una oportunidad queda auditado en su historial.

### 🆕 Sin leads duplicados por contacto

El mismo teléfono o correo que llega por otro canal o en otro día evoluciona la oportunidad existente en vez de crear una nueva. Opcional por organización.

### 🆕 Filtro «Sin asignar»

Para que ningún lead se quede sin dueño.

### 🆕 Lead duplicado: reasignación con un clic

Si un lead ya existe, ahora puedes ver quién es el dueño y su última actividad, y solicitar la reasignación — se notifica por correo y actividad in-app al dueño actual y a los managers. El correo de asignación incluye nombre, teléfono, sucursal y notas del cliente.

### 🆕 Permiso «ver todo el CRM, editar sólo lo propio»

Pensado para vendedores: pueden detectar duplicados antes de crear una oportunidad nueva, sin poder editar las de sus compañeros.

### 🆕 «Aplicar a todas las tareas» en las reglas de asignación

Toda tarea automática que se genere va a un usuario fijo, sin tener que configurar regla por regla.

### 🐛 La sucursal del formulario web llega al campo correcto del CRM

→ [CRM — vista general](/06-crm-audiencias/crm-vista-general/) · [Tareas (TODOs)](/10-tareas/tareas-y-todos/)

---

## Base de Conocimientos

### 🆕 Fichas técnicas

Una biblioteca central de fichas técnicas por producto: filtra entre Todas, Sin vincular, Por revisar y Confirmadas, sube el PDF y vincúlalo por producto, familia o categoría. El agente sólo envía la ficha si el cliente la pide, y sólo cuando el vínculo está confirmado — la función se activa sola en cuanto cargas tu primera ficha.

→ [Qué es la Base de Conocimientos y cómo funciona](/04-base-conocimientos/que-es-y-como-funciona/)

---

## Agente de IA

### 🆕 Lee Excel y PDF renglón por renglón

Antes, de un Excel adjunto sólo llegaba el nombre del archivo al agente. Ahora las tablas de un pedido llegan limpias, línea por línea.

### 🆕 El agente recuerda a tus clientes

Razón social, correo, RFC y código postal capturados antes se reutilizan — no vuelve a preguntar lo que el cliente ya dio.

### 🆕 Consulta de contacto y factura desde el agente

Confirma el RFC por razón social y comparte el enlace de la factura del cliente. Opcional, requiere Odoo.

### 🔧 Vuelve a ver fotos recientes del historial

Incluso en turnos donde el cliente sólo escribe texto.

### 🔧 Cotizaciones grandes se comparten con nota de revisión

Cuando aplica un descuento que requiere revisión de un asesor, se lo indica — y se corrigió el enlace roto que esto generaba.

### 🔧 Auto-envío del correo de cotización

Respeta el umbral de revisión humana configurado, el vendedor del pedido es configurable, y un doble clic ya no genera cotizaciones duplicadas.

### 🐛 Sin cotizaciones inventadas

El agente no inventa números de cotización ni agrega productos fantasma; un carrito vacío no se puede cerrar.

### 🔧 Las preguntas de producto van al catálogo, no a la Base de Conocimiento

### 🐛 Mensajes duplicados y fugas de idioma eliminados

### 🐛 Fugas de razonamiento del modelo eliminadas

### 🐛 Instagram con varias páginas conecta la página correcta

El formulario embebible del widget también dejó de parpadear al ajustar tamaño.

---

## Meta e integraciones

### 🆕 Meta Conversions API por auto-etiquetas

Conecta tu dataset de conversiones y elige qué etiquetas automáticas disparan una conversión hacia Meta. Disponible en `Integraciones → Tools`.

### 🆕 Conversiones a Meta por etapa del CRM

En Gestionar Etapas, marca «Enviar conversión a Meta» con el nombre del evento y su valor; cuando una oportunidad entra a esa etapa — por arrastre, diálogo, la IA o una importación — se envía la conversión.

### 🆕 Adjuntos en el widget web

Tus visitantes pueden enviar fotos y documentos desde el widget del sitio. Se activa con «Permitir adjuntos»; los sitios que ya lo tienen embebido lo reciben automáticamente.

### 🐛 Auto-etiquetado ya no mezcla sucursales

Dejó de aplicar etiquetas de otras sucursales a una misma conversación.

### 🐛 Exportar contactos ya no expira en organizaciones grandes

→ [Meta Conversions API](/09-integraciones-partner/meta-conversions-api/) · [Widget de sitio web](/02-canales/widget-sitio-web/)
