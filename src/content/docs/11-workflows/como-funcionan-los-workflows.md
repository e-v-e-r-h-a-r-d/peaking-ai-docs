---
title: Cómo funcionan los Workflows
description: Qué son los Workflows en Peaking, cómo configurarlos y ejemplos prácticos de automatización de flujos de trabajo.
sidebar:
  order: 1
---

Los **Workflows** son reglas de automatización que definen qué debe ocurrir cuando se dispara un evento en Peaking. En lugar de que alguien del equipo monitoree cada conversación o acción, el sistema ejecuta la respuesta correcta de forma automática.

---

## Conceptos clave

| Concepto | Descripción |
|----------|-------------|
| **Trigger** | El evento que inicia el workflow (ej. mensaje recibido, etapa de CRM cambiada, tarea creada) |
| **Condición** | Filtro opcional que determina si el workflow aplica (ej. solo si el canal es WhatsApp, solo si la prioridad es alta) |
| **Acción** | Lo que ocurre cuando el trigger se activa y las condiciones se cumplen (ej. asignar a un agente, crear un TODO, enviar una plantilla) |

---

## Dónde encontrar los Workflows

1. En el panel lateral, haz clic en **Workflows**.
2. Verás la lista de todos los workflows configurados en tu cuenta con su estado (activo/inactivo).
3. Haz clic en **+ Nuevo Workflow** para crear uno.

---

## Cómo crear un Workflow

### Paso 1 — Define el Trigger

Selecciona el evento que disparará el workflow:

| Trigger | Cuándo se activa |
|---------|-----------------|
| **Conversación iniciada** | Cuando llega el primer mensaje de un contacto nuevo |
| **Mensaje recibido** | Cuando llega cualquier mensaje nuevo en una conversación |
| **Conversación asignada** | Cuando una conversación se asigna a un agente específico |
| **Etapa de CRM cambiada** | Cuando una oportunidad avanza o retrocede en el pipeline |
| **Tarea creada** | Cuando se crea un nuevo TODO en el sistema |
| **Tarea completada** | Cuando un TODO es marcado como completado |
| **Carrito abandonado** | Cuando un cliente inicia pero no completa una compra |

### Paso 2 — Agrega condiciones (opcional)

Las condiciones filtran cuándo aplica el workflow. Por ejemplo:
- Canal = WhatsApp
- Prioridad de tarea = Alta o Urgente
- Etapa del CRM = Propuesta enviada
- Asignado a = Sin asignar

Combina condiciones con los operadores **Y** (todos deben cumplirse) u **O** (basta con uno).

### Paso 3 — Define la Acción

Selecciona qué hace el sistema cuando el workflow se dispara:

| Acción | Qué ocurre |
|--------|------------|
| **Asignar conversación** | Asigna la conversación a un agente o equipo específico |
| **Aplicar tag** | Agrega una etiqueta a la conversación o contacto |
| **Crear TODO** | Genera automáticamente una tarea con título y asignado predefinidos |
| **Cambiar etapa en CRM** | Mueve la oportunidad a una etapa específica del pipeline |
| **Enviar plantilla** | Envía una plantilla de WhatsApp aprobada al cliente |
| **Notificar al equipo** | Envía una notificación interna a un miembro o canal del equipo |
| **Webhook** | Llama a una URL externa con los datos del evento |

### Paso 4 — Activa el Workflow

1. Revisa el resumen del workflow (trigger → condiciones → acciones).
2. Ponle un nombre descriptivo (ej. "Asignar leads de WhatsApp al equipo Ventas").
3. Activa el toggle para que empiece a funcionar.

---

## Ejemplos prácticos

### Ejemplo 1 — Asignación automática de conversaciones nuevas

```
Trigger: Conversación iniciada
Condición: Canal = WhatsApp
Acción: Asignar a equipo "Ventas" en Round Robin
```

Cada vez que un nuevo cliente escribe por WhatsApp, el sistema distribuye la conversación entre los agentes de Ventas automáticamente.

### Ejemplo 2 — Crear tarea cuando se abandona un carrito

```
Trigger: Carrito abandonado
Condición: Monto del carrito > $500
Acción: Crear TODO con título "Seguimiento carrito abandonado - [nombre del cliente]"
         Asignar a: equipo Ventas
         Prioridad: Alta
```

### Ejemplo 3 — Notificar al equipo cuando una oportunidad llega a propuesta

```
Trigger: Etapa de CRM cambiada
Condición: Nueva etapa = "Propuesta enviada"
Acción: Notificar al slack del equipo con el nombre del lead y el vendedor asignado
```

---

## Activar y desactivar Workflows

Desde la lista de Workflows puedes activar o desactivar cualquier workflow con el toggle sin necesidad de eliminarlo. Desactívalo temporalmente si vas a hacer ajustes o si no aplica por temporada.

---

## Preguntas frecuentes

**¿Un workflow puede ejecutar más de una acción?**

Sí. Puedes encadenar múltiples acciones en un solo workflow. Por ejemplo: aplicar un tag Y crear un TODO Y notificar al equipo.

**¿Qué pasa si dos workflows tienen el mismo trigger?**

Ambos se ejecutan. Si hay conflicto (ej. los dos asignan la conversación a agentes distintos), el último en ejecutarse prevalece. Organiza tus workflows con condiciones específicas para evitar conflictos.

**¿Puedo ver el historial de ejecuciones de un Workflow?**

Sí. Desde el detalle de cada workflow puedes ver el log de ejecuciones recientes: cuántas veces se disparó, con qué datos y si hubo errores.

**¿Los Workflows funcionan con todos los canales?**

Sí, a menos que uses condiciones que filtren por canal específico. Por defecto, un workflow sin condición de canal aplica a todos (WhatsApp, Instagram, Messenger, Widget).
