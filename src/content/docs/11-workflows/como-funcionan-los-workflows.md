---
title: Cómo funcionan los Workflows
description: Editor visual de flujos de conversación — nodos, tipos de nodo, proyectos, versiones, ejecuciones y publicación.
sidebar:
  order: 1
---

Los **Workflows** de Peaking son flujos de conversación construidos visualmente con un editor de nodos. Defines qué ocurre paso a paso cuando un cliente escribe: qué agente de IA responde, qué condición evalúa la intención, cuánto tiempo espera antes de hacer seguimiento, y cuándo se pasa a otro nodo del flujo.

---

## Proyectos y Flows

La sección de Workflows está organizada en dos niveles:

- **Proyecto** — agrupa flows de una misma cuenta o cliente. En el panel lateral izquierdo aparece el nombre del proyecto con su icono de carpeta.
- **Flow** — es el workflow en sí. Un proyecto puede tener múltiples flows, siempre que cada uno esté conectado a un **canal diferente** en el nodo Trigger.

Para agregar un flow dentro de un proyecto, haz clic en **+ Add flow** bajo el nombre del proyecto.

:::tip[Cuándo crear múltiples flows]
Si tienes WhatsApp y Messenger activos, puedes tener un flow por canal. Esto te permite personalizar el comportamiento de cada canal por separado sin mezclar lógica en un solo flujo.
:::

---

## El canvas y la barra de herramientas

Al abrir un flow, verás el **canvas** — un espacio infinito donde conectas los nodos que forman el flujo. En la parte superior hay una barra de herramientas:

| Ícono | Nodo que agrega |
|-------|----------------|
| ⚡ Trigger | Punto de inicio del flow |
| 🤖 Agent | Agente de IA que procesa y responde |
| 🔀 Condition | Evalúa una condición para ramificar el flujo |
| 📣 Outbound | Envía un mensaje estático al usuario |
| 🌐 Webhook | Llama a una URL externa |
| ⏱ Delay | Pausa el flujo por un tiempo definido |
| 🔍 Contact Lookup | Busca un contacto en la base de datos |

A la derecha de los íconos de nodos:

| Botón | Función |
|-------|---------|
| **Undo / Redo** | Deshacer o rehacer el último cambio en el canvas |
| **Save** | Guarda el estado actual como borrador |
| **Publish** | Publica el flow — a partir de este momento el workflow está activo |
| **v36** *(badge azul)* | Versión publicada actualmente |
| **Historial** *(ícono reloj)* | Abre el historial de versiones anteriores |
| **Test** | Abre el panel de prueba del flujo completo |
| **Ejecuciones** *(ícono pulso)* | Abre el panel de Execution Runs |

---

## Tipos de nodo

### Trigger

El nodo **Trigger** es el punto de inicio del flow. Toda conversación entra por aquí.

**Configuración:**

| Campo | Descripción |
|-------|-------------|
| **Label** | Nombre del nodo (para identificarlo en el canvas) |
| **Channel** | Canal que activa el trigger: un canal específico (ej. WhatsApp, Messenger, Instagram), **Website (input)** para el widget web, o **Webhook (External)** para disparadores desde sistemas externos |

Un flow solo puede tener un nodo Trigger. Si necesitas que el mismo flujo responda en dos canales, crea dos flows dentro del mismo proyecto.

---

### Agent

El nodo **Agent** ejecuta un agente de IA — lee el mensaje del usuario, procesa la información con el prompt asignado y puede usar herramientas para enriquecer su respuesta.

**Configuración:**

| Campo | Descripción |
|-------|-------------|
| **Label** | Nombre del nodo |
| **Silent mode** | Si está activo, el agente procesa y usa herramientas pero **no envía respuesta visible al usuario**. Útil para nodos intermedios que solo recopilan o clasifican información |
| **Prompt** | Selector del prompt del Estudio de Prompts que usará este agente |
| **Available Tools** | Herramientas activas para este agente. Cada herramienta tiene su propia instrucción de uso (ej. "SIEMPRE que el cliente solicite precios") y puede tener parámetros fijos (Fixed params) |
| **Custom Tools** | Agrega herramientas personalizadas adicionales con **+ Add Custom Tool** |
| **Variables to Collect** | Define las variables que el agente puede guardar durante la conversación. Si el campo está vacío, el agente puede guardar cualquier variable. Si defines claves, solo acepta esas |
| **Mensaje mientras se ejecuta** | Texto que se envía al usuario si el nodo tarda más de lo esperado (solo aplica en WhatsApp e Instagram, no en widget ni en Test) |

:::note[Silent mode para clasificar intención]
Un patrón común es usar un agente en silent mode al inicio del flujo para que detecte la intención del usuario y guarde una variable (ej. `intencion = bioestimuladores`). El siguiente nodo Condition lee esa variable para ramificar el flujo.
:::

---

### Condition

El nodo **Condition** evalúa una expresión y ramifica el flow según el resultado. Cada condición tiene dos salidas posibles: **verdadero** (rama verde) y **falso** (rama roja).

**Evaluation Mode — tres opciones:**

| Modo | Cómo evalúa |
|------|-------------|
| **Simple (keyword match)** | Busca si el mensaje del usuario contiene una palabra o frase exacta |
| **AI (semantic evaluation)** | Usa IA para evaluar si el mensaje expresa una intención específica, aunque no use las palabras exactas |
| **Variable (exact match)** | Compara el valor de una variable guardada por un agente con un valor definido |

**Configuración (ejemplo con Variable exact match):**
- Campo: `intencion`
- Operador: `equals`
- Valor: `informacion_general`

El nodo se activa cuando la variable `intencion` tiene exactamente el valor `informacion_general`.

Puedes agregar múltiples condiciones con **+ Add condition**.

---

### Outbound

El nodo **Outbound** (Send Response) envía un mensaje al usuario sin intervención del agente de IA.

**Configuración:**

| Campo | Descripción |
|-------|-------------|
| **Label** | Nombre del nodo |
| **Outbound Type** | Tipo de mensaje: **Static Message** (texto fijo) u otros tipos disponibles |
| **Output Channel** | Canal por el que se envía el mensaje |
| **Message** | Texto del mensaje estático que recibirá el usuario |

---

### Delay

El nodo **Delay** pausa el flujo por un tiempo definido antes de continuar al siguiente nodo.

**Configuración:**

| Campo | Descripción |
|-------|-------------|
| **Label** | Nombre del nodo |
| **Delay (minutes)** | Tiempo de espera en minutos. Mínimo: 1 min · Máximo: 10,080 min (7 días) |
| **Cancel if user replies** | Si está activo, el delay se cancela automáticamente si el usuario envía un mensaje antes de que se cumpla el tiempo |
| **Fallback Template ID** | Plantilla de WhatsApp que se envía si la ventana de 24h de Meta expiró mientras el flujo estaba en pausa. Esto evita que el mensaje falle por restricciones de WhatsApp |

:::tip[Cuándo usar Delay]
Combina Delay + Outbound para flujos de seguimiento: si el cliente no responde en 30 minutos, el flow continúa y envía un recordatorio automático.
:::

---

### Webhook

El nodo **Webhook** hace una llamada HTTP a una URL externa cuando el flujo llega a ese punto. Úsalo para notificar sistemas externos, disparar automatizaciones en Zapier o Make, o registrar datos en una base de datos propia.

---

### Contact Lookup

El nodo **Contact Lookup** busca un contacto en la base de datos de Peaking y carga su información en el contexto del flujo.

**Search By — opciones de búsqueda:**

| Opción | Busca por |
|--------|-----------|
| **Auto-detect** | Detecta automáticamente qué campo usar según el dato disponible |
| **RFC (VAT)** | Registro fiscal del contacto |
| **Email** | Correo electrónico |
| **Phone** | Número de teléfono |
| **Reference** | Código de referencia interna |
| **Name** | Nombre del contacto |

---

## Publicar y versiones

### Guardar vs. Publicar

- **Save** guarda el estado actual como borrador. El flow activo en producción no cambia.
- **Publish** publica el flow. A partir de ese momento, todas las nuevas conversaciones usan la versión publicada. El badge de versión (ej. v36) se actualiza con cada publicación.

### Historial de versiones

Haz clic en el ícono de reloj junto al badge de versión para ver el historial de versiones anteriores. Puedes revisar cómo era el flujo en una versión específica y, si es necesario, restaurarla.

---

## Test — probar el flujo completo

El botón **Test** abre un panel de prueba donde puedes simular una conversación completa a través del flow sin que afecte conversaciones reales. Es equivalente al Peaking Lab del Estudio de Prompts, pero ejecuta todo el workflow — triggers, condiciones, agentes, delays y outbounds.

---

## Execution Runs

El panel de **Execution Runs** muestra el historial reciente de ejecuciones del flow:

| Columna | Descripción |
|---------|-------------|
| **Estado** | `Completed` (el flow terminó) · `Paused` (el flow está en espera, ej. dentro de un Delay) |
| **Versión** | Qué versión del flow procesó esa ejecución (ej. v35) |
| **Tiempo** | Hace cuánto ocurrió la ejecución |
| **Mensaje** | Primer mensaje del cliente que disparó la ejecución |
| **Duration** | Tiempo total que tardó en completarse el flujo |

Haz clic en cualquier ejecución para expandir el detalle y ver qué nodos se ejecutaron, en qué orden y cuánto tardó cada uno. Útil para detectar cuellos de botella o nodos que fallan.

---

## Ejemplo: flujo de atención en clínica

El siguiente es un ejemplo real del tipo de flujo que puedes construir:

```
TRIGGER
└─ Canal: Messenger

AGENT (Recepcionista de intención) [Silent mode]
└─ Detecta la intención del cliente y guarda variable "intencion"

OUTBOUND → Send Response
└─ Mensaje de bienvenida

CONDITION → "Informacion General"
   ├─ (verde) intencion = informacion_general → AGENT Información General
   └─ (rojo) → CONDITION "Bioestimuladores"
                  ├─ (verde) intencion = bioestimuladores → AGENT Bioestimuladores
                  └─ (rojo) → ...más condiciones

AGENT (nodo de atención)
└─ Responde con el prompt especializado
└─ Tools: Catálogo de Productos + Tareas Peaking (para agendar cita)

DELAY → Wait 30 min (cancel if user replies)
└─ Si no hay respuesta en 30 min:

OUTBOUND → Mensaje de seguimiento
```

---

## Preguntas frecuentes

**¿Cuántos flows puedo tener en un proyecto?**

No hay un límite documentado. Puedes crear tantos flows como necesites, siempre que cada uno tenga un trigger con un canal válido.

**¿Puedo tener el mismo agente en varios nodos del flow?**

Sí. Puedes asignar el mismo prompt a múltiples nodos Agent — por ejemplo, un agente "Información General" que aparece en varias ramas del flujo. Cada nodo puede tener sus propias herramientas activas aunque compartan el mismo prompt.

**¿Qué pasa si el flujo llega a un Condition y ninguna rama es verdadera?**

Si ninguna condición se cumple, el flujo puede quedar sin continuar. Asegúrate de cubrir siempre el caso alternativo — usa la salida roja de la última condición como rama por defecto (ej. respuesta genérica o escalamiento a humano).

**¿Los delays se cuentan en tiempo real?**

Sí. Si configuras un Delay de 30 minutos, el flujo espera exactamente 30 minutos desde que llega a ese nodo. Si el usuario responde antes (con "Cancel if user replies" activo), el delay se cancela y el flujo continúa por la salida correspondiente.

**¿Publish afecta conversaciones que ya están en curso?**

Las conversaciones activas que ya están dentro de un flujo continúan con la versión que inició su ejecución. Las nuevas conversaciones usan la versión publicada más reciente.
