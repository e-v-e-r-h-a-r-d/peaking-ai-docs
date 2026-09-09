---
title: "Junio 2026: API pública, auto-etiquetado y exportación de contactos"
description: Los primeros cambios de este historial — API pública de Peaking, auto-etiquetado automático cada 20 minutos, exportación de contactos a Excel y mejoras de precisión en el agente de IA.
sidebar:
  order: 4
---

Esta entrega cubre las semanas del 8 al 29 de junio de 2026 — el inicio del historial semanal de Novedades. No es necesariamente lo primero que lanzó Peaking, sino el punto donde arranca este registro.

---

## Integraciones y API

### 🆕 API pública de Peaking AI

Envía leads a Peaking desde Gravity Forms, Zapier o tu propio backend. El administrador de la organización genera su llave en **Configuración → API**, con un ejemplo de integración incluido para arrancar rápido.

---

## CRM y Contactos

### 🆕 Exportar contactos a Excel

Exporta tu base de contactos con filtros de fecha, canal y fuente, e incluye columnas de etiquetas, oportunidad y etapa — útil para cruces en Excel o para subir a otra herramienta.

### 🆕 Visibilidad por asignación

El rol **usuario** ahora ve sólo los contactos y conversaciones que tiene asignados; los managers definen el responsable desde la ficha del contacto o la conversación. Se activa por organización.

### 🆕 Filtros Fuente y Canal en el CRM

Dos filtros nuevos en el pipeline para acotar oportunidades por de dónde vinieron y por qué canal llegaron.

### 🐛 Formulario web embebible legible y sin cortes

Corregido un problema de layout que recortaba el formulario embebido en algunos sitios.

→ [Gestión de contactos](/13-contactos/gestion-de-contactos/) · [CRM — vista general](/06-crm-audiencias/crm-vista-general/)

---

## Agente de IA

### 🔧 Cotiza exactamente lo que el cliente pidió

El agente ya no cotiza productos ajenos ni omite renglones; el resumen de confirmación antes de cerrar la cotización muestra las tallas reales elegidas.

### 🆕 Agente y catálogo en inglés

Para organizaciones con idioma preferido en inglés, el agente y la búsqueda de catálogo ahora operan en ese idioma.

### 🆕 Auto-etiquetado para todas las organizaciones

Un barrido automático cada 20 minutos revisa las conversaciones y aplica las etiquetas configuradas, para que ninguna se quede sin aplicar por una falla puntual. Si no tienes reglas de etiquetado configuradas, no genera costo.

### 🔧 El agente ve las imágenes de verdad

Visión real sobre las fotos que envía el cliente, en lugar de trabajar sobre un resumen de texto generado a partir de la imagen.

### 🆕 Comando `/reset` por WhatsApp

Reinicia la conversación de prueba con tu agente enviando `/reset`, sin tener que borrar el historial a mano.

### 🔧 Editar o quitar un renglón del carrito apunta al producto exacto

Lo que se muestra en el carrito es exactamente lo que se va a cotizar, con color y talla incluidos.

### 🔧 Búsqueda con filtro de calidad siempre activo

Los teléfonos ya no se confunden con búsquedas de producto; los códigos de producto sí se reconocen como tales.

### 🐛 Checkout fallido ya no inventa un número de cotización

Además, las fracciones (½, ¼, ¾) ahora se buscan correctamente en el catálogo.

---

## Mensajes y canales

### 🐛 Instagram y Messenger sin retraso

La llegada de mensajes por Instagram y Messenger ya no se retrasa por el procesamiento del agente.

### 🐛 Envío por el número correcto

Con varios números de WhatsApp conectados, el envío de una respuesta sale siempre por el número que recibió el mensaje original.

→ [Otros canales](/02-canales/) · [WhatsApp](/15-whatsapp/)
