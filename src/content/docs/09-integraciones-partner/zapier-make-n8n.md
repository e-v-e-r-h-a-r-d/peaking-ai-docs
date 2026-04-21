---
title: Zapier / Make / n8n
description: Cómo conectar Peaking con Zapier, Make o n8n para automatizar flujos de trabajo con miles de aplicaciones externas.
sidebar:
  order: 3
---

Las integraciones con **Zapier**, **Make** (antes Integromat) y **n8n** te permiten conectar Peaking con miles de aplicaciones sin necesidad de código. Cuando ocurre un evento en Peaking — una nueva conversación, un contacto creado, una oportunidad actualizada — puedes disparar automáticamente una acción en cualquier herramienta: enviar un email en Gmail, crear una tarea en Notion, notificar a tu equipo en Slack, registrar una fila en Google Sheets, entre otros.

---

## Cómo funcionan estas integraciones

Estas plataformas funcionan mediante **webhooks** — una URL que Peaking notifica cada vez que ocurre un evento. El flujo es:

1. Peaking detecta un evento (ej. nueva conversación entrante).
2. Envía los datos del evento a la URL de tu Zap, Escenario o Flujo.
3. La plataforma de automatización procesa esos datos y ejecuta las acciones que configuraste.

---

## Eventos disponibles desde Peaking

Peaking puede enviar notificaciones a Zapier / Make / n8n cuando ocurre cualquiera de estos eventos:

| Evento | Descripción |
|--------|-------------|
| **Nueva conversación** | Un nuevo contacto inicia un chat en cualquier canal |
| **Conversación resuelta** | Un agente marca una conversación como resuelta |
| **Nuevo contacto creado** | Se crea un contacto nuevo (manual o automáticamente) |
| **Nueva oportunidad en CRM** | El agente de IA crea una nueva oportunidad de venta |
| **Cambio de etapa en CRM** | Una oportunidad avanza o retrocede de etapa en el pipeline |
| **Nuevo mensaje recibido** | Llega un mensaje nuevo en cualquier canal |
| **Contacto con nueva etiqueta** | Se asigna una etiqueta a un contacto |

---

## Cómo conectar Zapier

### Paso 1 — Obtén la URL del webhook

1. En Zapier, crea un nuevo **Zap**.
2. Selecciona **Webhooks by Zapier** como trigger (disparador).
3. Elige el tipo **Catch Hook**.
4. Zapier te dará una **URL de webhook** — cópiala.

### Paso 2 — Configura el webhook en Peaking

1. En Peaking, ve a **Configuración › Integraciones**.
2. Localiza la tarjeta de **Zapier / Webhooks** y haz clic en **Conectar** (o **Gestionar webhooks**).
3. Pega la URL del webhook de Zapier.
4. Selecciona el **evento** que quieres escuchar.
5. Haz clic en **Guardar**.

### Paso 3 — Prueba la conexión

Genera un evento de prueba en Peaking (ej. crea un contacto de prueba). Zapier recibirá los datos y podrás continuar configurando las acciones del Zap.

---

## Cómo conectar Make (Integromat)

### Paso 1 — Crea un Escenario con módulo Webhook

1. En Make, crea un nuevo **Escenario**.
2. Agrega un módulo **Webhooks › Custom webhook**.
3. Make generará una **URL de webhook** — cópiala.

### Paso 2 — Configura el webhook en Peaking

Sigue el mismo proceso que con Zapier: pega la URL en **Configuración › Integraciones › Webhooks** y selecciona el evento.

### Paso 3 — Define la estructura de datos

En Make, ejecuta el escenario una vez para que reciba los datos de prueba. Make detectará automáticamente la estructura (JSON) de los datos que envía Peaking.

---

## Cómo conectar n8n

### Si usas n8n Cloud o self-hosted

1. En n8n, crea un nuevo **Workflow**.
2. Agrega un nodo **Webhook** como trigger.
3. Copia la **URL de producción** del nodo.
4. Pégala en Peaking › **Configuración › Integraciones › Webhooks**.
5. Activa el workflow en n8n.

:::tip[n8n self-hosted]
Si tienes n8n en un servidor propio, asegúrate de que la URL sea accesible públicamente (no desde localhost). Peaking necesita poder hacer llamadas HTTP a esa URL.
:::

---

## Ejemplos de automatizaciones

### Notificar en Slack cuando llega un lead nuevo

**Trigger:** Nueva conversación en Peaking  
**Acción:** Enviar mensaje a canal #leads de Slack con nombre, canal de origen y primer mensaje del contacto.

### Crear fila en Google Sheets al resolver una conversación

**Trigger:** Conversación resuelta en Peaking  
**Acción:** Agregar fila en la hoja "Atenciones" con fecha, agente responsable, duración y calificación.

### Sincronizar contactos nuevos con Mailchimp

**Trigger:** Nuevo contacto creado en Peaking  
**Acción:** Suscribir el email del contacto a una lista de Mailchimp y asignar el tag correspondiente.

### Crear tarea en Notion cuando una oportunidad avanza de etapa

**Trigger:** Cambio de etapa en CRM  
**Acción:** Crear página en Notion con los datos de la oportunidad para hacer seguimiento del deal.

---

## Preguntas frecuentes

**¿Cuántos webhooks puedo configurar en Peaking?**

Puedes configurar múltiples webhooks, uno por cada evento o por cada destino. Por ejemplo, puedes tener un webhook que envía nuevas conversaciones a Zapier y otro que envía oportunidades del CRM a Make.

**¿Los datos se envían en tiempo real?**

Sí. Los webhooks se activan en tiempo real — en cuanto ocurre el evento en Peaking, los datos se envían inmediatamente a la URL configurada.

**¿Qué formato tienen los datos que envía Peaking?**

Peaking envía un objeto **JSON** con los campos del evento. El contenido varía según el tipo de evento (conversación, contacto, oportunidad), pero siempre incluye un identificador único, timestamp y los datos principales del registro.

**¿Qué pasa si el webhook falla?**

Si la URL destino no responde o devuelve un error, Peaking registra el fallo. Verifica en tu plataforma de automatización que el escenario o Zap esté activo y que la URL sea correcta.

**¿Puedo usar Zapier para enviar datos a Peaking (no solo recibirlos)?**

Las integraciones de webhook son principalmente salientes (Peaking → Zapier). Para enviar datos hacia Peaking desde una automatización externa, usa la **API de Peaking** — consulta a tu equipo de soporte para acceso a la documentación técnica de la API.
