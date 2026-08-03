---
title: Histórico de envíos masivos
description: Cómo revisar el resultado de tus campañas de plantillas de WhatsApp — entregas exitosas, fallidos y reenvío en un clic.
sidebar:
  order: 1
---

El **Histórico de envíos masivos** registra todas las campañas de plantillas de WhatsApp enviadas a múltiples destinatarios. Desde aquí puedes verificar cuántos mensajes se entregaron, cuántos fallaron y reenviar los fallidos sin recrear la campaña.

---

## Acceder al histórico

En el panel lateral, haz clic en **Envíos WhatsApp**.

![Histórico de envíos masivos con lista de campañas, status Completado y Fallido, y contadores de destinatarios](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/15-envios-whatsapp/envios-whatsapp.png)

---

## La tabla de envíos

Cada fila representa un envío masivo individual. Las columnas son:

| Columna | Descripción |
|---------|-------------|
| **Fecha** | Cuándo se realizó el envío (fecha y hora exacta) |
| **Plantilla** | Nombre de la plantilla usada e idioma (ej. `expotransporte_2026 · ES_MX`) |
| **Status** | **Completado** (verde) · **Fallido** (rojo) |
| **Destinatarios** | Formato `X / Y` — enviados exitosamente / total de destinatarios |
| **Fallidos** | Número de contactos que no recibieron el mensaje (en naranja si hay fallos) |
| **Acción** | 👁 vista previa · **Detalle** — abre el desglose contacto por contacto |

### Interpretar el status

- **Completado** — el proceso de envío terminó. Puede haber fallidos individuales (revisa la columna Fallidos y el Detalle).
- **Fallido** — el envío completo no pudo procesarse. Generalmente por un error de configuración o de la plantilla.

:::tip[Completado ≠ 100% entregado]
Un envío puede tener status "Completado" pero con fallidos parciales — por ejemplo, 57/97 enviados y 40 fallidos. Siempre revisa la columna **Fallidos** y entra al Detalle para ver las razones.
:::

---

## Detalle de un envío

Haz clic en **Detalle** para abrir el desglose completo de ese envío.

![Vista de detalle de envío con KPIs Total/Enviados/Fallidos, opción Reenviar fallidos y tabla por contacto con motivo de error](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/15-envios-whatsapp/fallidos-completados-reenvio-whatsapp.png)

### KPIs del detalle

| Métrica | Descripción |
|---------|-------------|
| **Total** | Número total de destinatarios del envío |
| **Enviados** | Contactos que recibieron el mensaje exitosamente |
| **Fallidos** | Contactos que no recibieron el mensaje |

### Tabla de contactos

Muestra cada destinatario con:
- **Teléfono** — número en formato internacional
- **Nombre** — nombre del contacto en Peaking
- **Status** — **Enviado** (verde) · **Fallido** (rojo)
- **Motivo de error** — razón del fallo si aplica (ej. `(#130429) Rate limit hit`)
- **Fecha/hora** — cuándo se procesó ese contacto

Puedes filtrar por **teléfono o nombre** y por **status** (Todos · Enviado · Fallido) para encontrar contactos específicos rápidamente.

---

## Reenviar fallidos

Cuando hay contactos fallidos, aparece el banner:

> *"X contactos fallaron y se pueden reenviar (excluye cooldown 24h)."*

Haz clic en **Reenviar fallidos** para volver a enviar la misma plantilla solo a los contactos que fallaron. El sistema excluye automáticamente los contactos que aún están en período de cooldown (24 horas desde el intento anterior).

:::note[Cooldown de 24 horas]
WhatsApp impone un límite de frecuencia por contacto. Si un contacto falla por `Rate limit hit`, debe esperar 24 horas antes de poder recibir otro mensaje de plantilla. El botón **Reenviar fallidos** respeta este límite automáticamente.
:::

---

## Causas comunes de fallos

| Código de error | Causa | Qué hacer |
|----------------|-------|-----------|
| `#130429 Rate limit hit` | Demasiados mensajes enviados al mismo contacto en poco tiempo | Esperar 24h y usar **Reenviar fallidos** |
| Número inválido | El número del contacto no existe o no tiene WhatsApp | Verificar y corregir el número en Contactos |
| Ventana cerrada sin plantilla | Se intentó enviar sin plantilla aprobada | Verificar que la plantilla está aprobada en Meta |

---

## Preguntas frecuentes

**¿Puedo reenviar un envío completo (no solo los fallidos)?**

No directamente desde el Histórico. Para reenviar a todos los destinatarios, crea un nuevo envío masivo desde **Audiencias y Campañas** seleccionando la misma audiencia y plantilla.

**¿Por cuánto tiempo se guardan los envíos en el histórico?**

El histórico no tiene una ventana de tiempo límite documentada. Todos los envíos realizados desde la cuenta permanecen disponibles para consulta.

**¿El histórico muestra envíos de todos los usuarios de la cuenta?**

Sí. El Histórico de envíos masivos es compartido por toda la organización — muestra todos los envíos realizados independientemente de qué usuario los inició.

**¿Cómo sé si una plantilla fue rechazada por Meta?**

El rechazo de plantillas se gestiona desde **Integraciones › Plantillas de WhatsApp** — ahí puedes ver el estado de cada plantilla (Aprobado / Pendiente / Rechazado). Un envío fallará completamente si la plantilla usada fue rechazada por Meta después de haber sido aprobada.
