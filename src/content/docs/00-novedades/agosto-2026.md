---
title: "Agosto 2026: Bandeja de entrada v2, Papelera del CRM y WhatsApp multi-número"
description: Agosto rediseñó la Bandeja de entrada, sumó papelera con restauración al CRM, permitió operar varios números de WhatsApp sin que las conversaciones se mezclen, y evitó que una cotización se duplique cuando el cliente cambia de opinión.
sidebar:
  order: 2
---

Cambios publicados entre el 28 de julio y el 31 de agosto de 2026.

---

## Bandeja de entrada v2

Rediseño completo del Panel de Mensajes:

- 🆕 **No leídos por usuario** — el contador cuenta lo que tú no has visto; que la IA conteste no marca la conversación como leída.
- 🆕 **Tiempo real** en el hilo abierto, con scroll infinito que no repite ni salta conversaciones.
- 🆕 **Estado de atención** (bot, sin asignar, asignado, escalado), filtro «Mías» y acciones en lote.
- 🆕 **Notas del asesor** bajo el Resumen IA — no se envían al cliente, las ve todo el equipo y sobreviven a una reasignación.
- 🆕 **Firma del asesor** en cada mensaje humano («Emilio · 10:38 PM»; «Tú» para ti mismo).
- 🆕 **Bandeja compartida** como permiso independiente de la visibilidad del CRM.
- 🔧 Filtros usables en ventanas no maximizadas, y como panel inferior en móvil con un solo scroll.
- 🆕 **Editar el contacto sin salir de Mensajes**, con el mismo formulario de la sección Contactos.
- 🐛 Las notificaciones bajan al leer, no sólo al responder.
- 🐛 Los adjuntos que envía el agente ahora se ven en la conversación.
- 🔧 El rol usuario puede reasignar y tomar control de conversaciones (antes sólo administradores y managers); los límites de visibilidad siguen aplicando.

→ [Panel de Mensajes](/05-conversaciones/panel-de-conversaciones/)

---

## CRM

### 🆕 Papelera con restauración

Lista lo eliminado, con quién lo eliminó y cuándo, búsqueda y botón Restaurar. Disponible para administradores y managers en `CRM → Configuración → Papelera`.

- 🐛 Fin del «borrado fantasma»: un vendedor sin permiso veía «Oportunidad eliminada» y la tarjeta reaparecía al recargar. Ahora el sistema avisa y oculta el botón Eliminar a quien no tiene permiso.
- 🐛 Tablero en cero corregido en organizaciones grandes; se quitó el aviso global y el tablero carga más rápido.

### 🔧 Tablero que carga por scroll

Cada columna trae más tarjetas al bajar, en lugar de mostrar «96 de 13,104». La carga inicial pesa cuatro veces menos y el reparto por etapa quedó corregido. Los contadores por etapa ahora son instantáneos y las tarjetas ya no se repintan completas al actualizarse.

- 🐛 Pantalla en negro al abrir el CRM, corregida.

→ [CRM — vista general](/06-crm-audiencias/crm-vista-general/)

---

## WhatsApp

### 🆕 Varios números sin que se mezclen

Si una persona escribe a dos números de tu empresa, ahora son dos conversaciones independientes: la respuesta sale siempre por el número correcto y la ventana de 24 horas se respeta por número. La bandeja suma una franja de números con contador de no leídos por número y un distintivo «vía «número»» antes de escribir; cada usuario elige su vista predeterminada en `Ajustes → Usuarios`. Con un solo número la pantalla no cambia.

- 🔧 Pausar la IA aplica al cliente, no al hilo: tomar control en un número también pausa la IA si ese cliente escribe al otro.
- 🐛 Los avisos de «sin responder» ahora cuentan todas las conversaciones reales en organizaciones grandes (el número visible puede subir respecto a antes).
- 🐛 Acuse de lectura restaurado en números en coexistencia, y corregido un error que impedía enviar plantillas.

### 🆕 Calidad y límite de mensajería en la tarjeta de conexión

Ves la calidad del número (alta, media, baja) y cuántos destinatarios únicos puedes alcanzar en 24 horas — explica por qué un envío masivo no llega completo.

### 🆕 «Escribiendo…» mientras la IA responde

El cliente ve el indicador en su WhatsApp mientras se prepara la respuesta.

### 🔧 PDF de cotización con entrega confiable

En cotizadores industriales, el envío del PDF por WhatsApp ahora es confiable incluso cuando el ERP tarda en generarlo.

→ [WhatsApp](/15-whatsapp/)

---

## Agente y voz

### 🔧 Búsquedas largas ya no agotan el turno

El agente tiene un tope de búsqueda por turno y responde aunque una consulta se alargue.

### 🆕 Panel de uso de voz

Con medición por llamada.

→ [Agentes de Voz](/09-integraciones-partner/agentes-de-voz/)

---

## Exportaciones y búsqueda

### 🆕 Campos inteligentes y personalizados en el Excel

Una columna por campo en la exportación de contactos y del CRM.

### 🔧 Búsqueda de productos más precisa

Sólo rankea lo que tiene evidencia real; el primer resultado correcto pasó de 83% a 100% en las consultas de prueba, y las listas de 40 a 100 códigos se leen completas.

### 🆕 Cotizadores industriales: PDF por WhatsApp y atención a vendedores internos

El agente envía el PDF de la cotización por WhatsApp y atiende a vendedores internos desde el mismo número (copiloto).

---

## Cotización

### 🆕 Actualizar la cotización en vez de duplicarla

Si el cliente cambia cantidades o productos después de cotizar, la cotización viva del hilo se actualiza con el mismo folio y el mismo enlace, y se reenvía el PDF vigente. Opcional por organización.

### 🆕 Condiciones por cliente en cotizadores de bandas industriales

Incremento porcentual y cargos fijos, reflejados tanto en la línea de cotización como en el PDF de Odoo.

### 🔧 Agentes de cotización a la medida

Reglas de forma de pago sin ambigüedad, medidas en milímetros, redondeo, PDF integrado y cliente obligatorio antes de cotizar.

→ [Copilot — cotizaciones desde la conversación](/05-conversaciones/copilot-cotizaciones/)

---

## Plataforma

### 🐛 Zona horaria de tu organización

Corregida en analíticas y en fechas de correo.

### 🔧 La plataforma se siente más rápida

El aviso de mensajes sin responder dejó de sobrecargar la base de datos.

---

## Help Center

### 🆕 Nueva sección: Mejores Prácticas

Publicamos una sección nueva en este Help Center con guías sobre arquitectura de agentes, cómo evitar que agentes y herramientas se pisen entre sí, cómo escribir prompts efectivos, y cómo versionar cambios de forma segura.

→ [Resumen de mejores prácticas](/19-mejores-practicas/resumen-de-mejores-practicas/)
