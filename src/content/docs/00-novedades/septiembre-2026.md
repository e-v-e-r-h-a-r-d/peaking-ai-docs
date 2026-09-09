---
title: "Septiembre 2026: WhatsApp multi-cuenta, Meta Ads y correo compartido"
description: Primera entrega de septiembre (1–8 sep) — aislamiento por número y coexistencia con WhatsApp Business, integración de Meta Ads, bandeja de correo compartida con firmas y estilo por remitente, y conversiones de Google Ads desde tu formulario web.
sidebar:
  order: 1
---

Cambios publicados entre el 1 y el 8 de septiembre de 2026 — entrega parcial, se ampliará con las próximas semanas del mes.

---

## WhatsApp

### 🆕 Aislamiento por número

Con la opción activa, cada usuario — incluidos los administradores — ve sólo las conversaciones, plantillas y envíos masivos de sus propios números. Pensado para operar sucursales con números de WhatsApp distintos. Disponible en `Ajustes → Funcionalidades`, opcional por organización.

### 🆕 Coexistencia con la app de WhatsApp Business

Lo que tu equipo escribe desde el teléfono aparece en Peaking como mensaje saliente. Al conectar un número en coexistencia puedes importar hasta 180 días de historial (botón «Sincronizar historial», disponible 24 horas después de conectar), y se conserva el anuncio que trajo a cada cliente.

### 🆕 Plantillas de WhatsApp, administradas desde Peaking

- **Crea y elimina plantillas** sin entrar a Meta.
- **Una plantilla en todas tus cuentas:** la casilla «Crear también en las otras cuentas» la manda a revisión en cada cuenta; si Meta rechaza alguna, ves el motivo por cuenta y reintentas sólo esa.
- **Elige el número emisor** al enviar una plantilla o un masivo (si tienes más de uno), preseleccionado con el número de tu bandeja. Disponible en `Integraciones → WhatsApp → Plantillas`.
- **Variables por destinatario en envíos masivos:** cada variable se llena desde el remitente, el contacto, una columna de tu archivo, un campo del CRM o un texto fijo. Peaking sugiere el mapeo leyendo la plantilla, cuenta los campos vacíos, permite un texto de respaldo y muestra una vista previa. El mapeo se recuerda por plantilla.

→ [Varios números y Coexistencia](/15-whatsapp/conexion-whatsapp/#varios-números-de-whatsapp) · [Plantillas de WhatsApp](/15-whatsapp/plantillas-whatsapp/#crea-edita-y-elimina-plantillas-sin-salir-de-peaking)

---

## Meta

### 🔧 Conversions API con un clic

Al conectar Messenger, Instagram o WhatsApp, Peaking vincula el dataset de conversiones automáticamente — ya no hace falta pegar el dataset y el token desde Events Manager (esa opción sigue disponible como respaldo). La tarjeta de conexión muestra el estado por canal.

### 🆕 Integración con Meta Ads

Conecta tu cuenta publicitaria con el mismo inicio de sesión de Facebook. Peaking sincroniza campañas, anuncios y resultados cada 10 minutos, y el chip «Llegó por un anuncio» en el lead muestra la campaña y el conjunto de anuncios reales.

→ [Meta Conversions API](/09-integraciones-partner/meta-conversions-api/) · [Meta Ads](/09-integraciones-partner/meta-ads/)

---

## Correo electrónico

### 🆕 Bandeja de correo compartida

Un buzón puede ser privado, de toda la organización o de usuarios seleccionados. El selector de buzón muestra la etiqueta «Compartido»; quien tiene acceso puede responder y cotizar desde ese buzón.

- 🆕 **Quién respondió cada correo** — «Tú», el nombre del compañero, o «Enviado desde el buzón». Dos personas aprobando el mismo borrador ya no provocan un doble envío.
- 🆕 **Firmas personales y del buzón**, con logo, seleccionables al redactar. Se anexan al enviar; la IA nunca las reescribe.
- 🆕 **Imágenes y adjuntos en correos entrantes** — logos, fotos pegadas y adjuntos con vista previa y descarga. Las fotos también las ve el agente.
- 🆕 **Estilo de respuesta por remitente:** define un estilo general y reglas por dominio o correo (tono, instrucciones, emojis sí o no). Aplica a los borradores, a «Regenerar» y al agente de ventas en correo.

→ [Correo — Bandeja compartida](/09-integraciones-partner/correo-electronico/#bandeja-de-correo-compartida)

---

## Formularios web y workflows

### 🆕 Conversión de Google Ads desde tu formulario web

Pega tu ID de conversión y la etiqueta; cada envío del formulario dispara la conversión (con conversiones mejoradas opcionales) y el lead guarda el clic y los UTM. También publica un evento para Google Tag Manager. Disponible en `Integraciones → Formulario → Seguimiento de conversiones`.

### 🔧 Reasignar un canal a otro proyecto

Desde el diálogo de publicar, sin tener que desconectar y volver a conectar el canal.

→ [Cómo funcionan los Workflows](/11-workflows/como-funcionan-los-workflows/)

---

## Insights y agente de IA

### 🔧 Información de Conversaciones en tu idioma

El chat de Insights responde en el idioma de la interfaz, cuenta conversaciones (no mensajes) y nombra a cada cliente en vez de mostrar «Cliente N».

### 🐛 El agente ya no muestra su razonamiento interno

Se eliminó la fuga de planeación en inglés o spanglish, y de nombres de herramientas, en las respuestas al cliente.

### 🔧 Cotizadores industriales a la medida

Niveles de precio por tipo de cliente, cargos por urgencia y servicios de planta calculados de forma determinista.

→ [Información de Conversaciones](/08-analytics/peaking-insights/)
