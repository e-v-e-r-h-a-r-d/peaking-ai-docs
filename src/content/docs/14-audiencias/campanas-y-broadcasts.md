---
title: Campañas y broadcasts
description: Cómo crear y enviar campañas de mensajería masiva a segmentos específicos de tu base de contactos.
sidebar:
  order: 2
---

Una **Campaña** (también llamada **Broadcast**) es un envío masivo de mensajes a una audiencia predefinida. En lugar de escribirle a cada contacto uno por uno, seleccionas una audiencia, defines el mensaje o plantilla, y lo envías a todos sus miembros en un solo disparo.

:::note[Requisito para WhatsApp]
Los broadcasts de WhatsApp requieren una **plantilla aprobada por Meta** (WhatsApp Template). No puedes enviar mensajes de texto libre a contactos que no hayan iniciado conversación en las últimas 24 horas. Consulta [Plantillas de WhatsApp](/02-canales/plantillas-whatsapp/) para crearlas y sincronizarlas.
:::

---

## Acceder a Campañas

En el panel lateral, ve a **Audiencias y Campañas** y selecciona la pestaña **Campañas** (o **Broadcasts**). Verás la lista de todas las campañas creadas, con su estado y métricas de envío.

---

## Crear una campaña

1. Haz clic en **+ Nueva Campaña** (esquina superior derecha).
2. Asigna un **nombre descriptivo** a la campaña (ej. "Promoción Abril — Leads WhatsApp").
3. Selecciona la **Audiencia** de destino — la lista de audiencias creadas en la sección de Audiencias.
4. Selecciona el **Canal de envío**:
   - **WhatsApp** — requiere plantilla aprobada.
   - **Widget web** — mensaje de texto libre.
   - Otros canales conectados en tu cuenta.
5. Si el canal es WhatsApp, selecciona la **Plantilla** que usarás.
6. Si la plantilla tiene **variables** (ej. `{{1}}` para el nombre), define cómo se rellenarán — con atributos del contacto o con texto fijo.
7. Define el **momento de envío**:
   - **Enviar ahora** — el broadcast sale inmediatamente al guardar.
   - **Programar** — elige fecha y hora de envío.
8. Haz clic en **Revisar y enviar** para ver un resumen antes de confirmar.

:::tip[Programa en horario útil]
Los mensajes recibidos fuera de horario laboral tienen menor tasa de respuesta. Programa los broadcasts para horarios donde tus contactos estén activos — generalmente martes a jueves entre 10am y 2pm.
:::

---

## Variables en plantillas

Si la plantilla incluye variables (ej. `Hola {{1}}, te contactamos de {{2}}`), puedes mapear cada variable a:

| Opción | Descripción |
|--------|-------------|
| **Atributo del contacto** | Nombre, email, ciudad u otro campo del perfil del contacto |
| **Texto fijo** | El mismo texto para todos los destinatarios |

Si un contacto no tiene el atributo configurado, el campo quedará vacío. Verifica la cobertura de datos en la vista previa de la audiencia antes de enviar.

---

## Estados de una campaña

| Estado | Descripción |
|--------|-------------|
| **Borrador** | Guardada pero no enviada |
| **Programada** | Enviará automáticamente en la fecha/hora definida |
| **Enviando** | En proceso de envío (puede tardar según el tamaño de la audiencia) |
| **Completada** | Todos los mensajes procesados |
| **Pausada** | Detenida manualmente antes de completarse |
| **Fallida** | Error en el envío — revisa los logs para identificar la causa |

---

## Métricas de una campaña

Después del envío, la campaña muestra:

| Métrica | Qué mide |
|---------|---------|
| **Total enviados** | Número de mensajes que salieron de Peaking |
| **Entregados** | Mensajes confirmados como recibidos en el dispositivo del contacto |
| **Leídos** | Mensajes con confirmación de lectura (doble palomita azul en WhatsApp) |
| **Respondidos** | Contactos que respondieron el mensaje después del broadcast |
| **Fallidos** | Mensajes no entregados (número inválido, bloqueado, sin conexión) |

:::note[Disponibilidad de métricas]
Las tasas de lectura solo están disponibles para canales que reportan confirmación de lectura (como WhatsApp). Otros canales pueden mostrar solo entregados y respondidos.
:::

---

## Cancelar o editar una campaña

- **Borrador** — puedes editar todos los campos antes de enviar.
- **Programada** — puedes cancelarla o reprogramarla mientras no haya comenzado el envío.
- **Enviando / Completada** — no se puede modificar ni detener una vez iniciada.

Para editar una campaña en estado Borrador, haz clic en el ícono de lápiz en la lista de campañas.

---

## Buenas prácticas

**Segmenta bien antes de enviar.** Un broadcast a una audiencia mal definida genera respuestas irrelevantes y puede aumentar las tasas de bloqueo. Usa la vista previa de la audiencia para validar quién recibirá el mensaje.

**Personaliza siempre que puedas.** Usar el nombre del contacto en la plantilla (`Hola {{1}}`) aumenta la tasa de respuesta respecto a mensajes genéricos.

**No repitas broadcasts seguidos a la misma audiencia.** Enviar múltiples mensajes en días consecutivos al mismo grupo cansa a los contactos y puede provocar que bloqueen el número.

**Prueba antes de lanzar.** Si la plataforma lo permite, envíate el mensaje a ti mismo como prueba antes de disparar el broadcast completo.

---

## Preguntas frecuentes

**¿Cuántos contactos puede incluir un broadcast?**

No hay un límite fijo documentado, pero broadcasts muy grandes (miles de contactos) pueden tardar más en procesarse. Peaking los distribuye en lotes para cumplir con las políticas de cada canal.

**¿Qué pasa si un contacto bloqueó el número?**

Peaking excluye automáticamente a los contactos que han bloqueado el número o solicitado no recibir mensajes, incluso si están en la audiencia seleccionada.

**¿Puedo enviar un broadcast por WhatsApp sin plantilla aprobada?**

No. WhatsApp requiere plantillas aprobadas para mensajes iniciados por la empresa fuera de la ventana de 24 horas. Si el contacto te escribió en las últimas 24 horas, la conversación está activa y puedes enviar mensajes libres desde el Panel de Mensajes.

**¿Cómo sé si mi plantilla de WhatsApp está disponible para usar?**

Las plantillas aprobadas aparecen en el selector de plantillas al crear la campaña. Si no ves tu plantilla, asegúrate de sincronizarla desde **Configuración › Canales › WhatsApp › Sincronizar Plantillas**.

**¿Puedo reutilizar una campaña?**

Sí. Puedes duplicar una campaña existente, cambiar la audiencia o la fecha de envío, y lanzarla como nueva campaña.
