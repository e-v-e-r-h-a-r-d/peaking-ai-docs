---
title: Crea tu primer prompt
description: Guía paso a paso para crear y configurar el prompt de tu agente de IA en el Estudio de Prompts de Peaking.
sidebar:
  order: 1
---

El **Estudio de Prompts** es donde defines quién es tu agente de IA: cómo se llama, en qué idioma responde, qué tan largas son sus respuestas y — lo más importante — qué instrucciones sigue para atender a tus clientes.

Crear un prompt es el paso más crítico del onboarding. Un agente bien configurado resuelve consultas, vende y agenda citas de forma autónoma. Uno mal configurado frustra a tus clientes y escala todo a tu equipo.

---

## La Biblioteca de Prompts

Al acceder al Estudio de Prompts verás la **Biblioteca de Prompts** — el listado de todos los prompts creados en tu cuenta. Cada fila muestra:

| Columna | Descripción |
|---------|-------------|
| **Título** | Nombre del prompt (ej. "Distribuidor A", "Prompt Menudeo") |
| **Descripción** | Texto opcional para identificar el propósito del prompt |
| **Canales Asignados** | Qué canales usan este prompt activamente |
| **Última Actualización** | Fecha del último cambio guardado |
| **Acciones** | Editar, duplicar o eliminar el prompt |

![Biblioteca de Prompts con múltiples prompts por segmento de cliente](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/03-prompt-studio/prompt-studio-editor.png)

:::tip[Un prompt por segmento]
Puedes crear prompts distintos para diferentes tipos de cliente o canal. Por ejemplo: un prompt para distribuidores mayoristas, otro para clientes finales y otro para soporte técnico. Asigna cada uno al canal correspondiente o selecciónalo en el nodo Agent de tus Workflows.
:::

---

## Acceder al Estudio de Prompts

1. En el panel lateral izquierdo de Peaking, haz clic en **Estudio de Prompts**.
2. Verás el listado de prompts existentes (si es tu primera vez, estará vacío).
3. Haz clic en **Crear Nuevo Prompt**.

---

## Opciones para empezar

Al crear un nuevo prompt, Peaking te ofrece dos puntos de partida:

| Opción | Cuándo usarla |
|--------|---------------|
| **Desde cero** | Cuando tienes claro lo que quieres y prefieres escribir las instrucciones tú mismo |
| **Desde una Plantilla** | Cuando quieres un punto de partida estructurado — más rápido y menos propenso a errores |

Si es tu primera vez, se recomienda partir de una **Plantilla**. Puedes editarla completamente después. Consulta [Plantillas de Prompt](/03-prompt-studio/variables-y-funciones-avanzadas/) para más detalles.

---

## Campos de configuración del prompt

### Idioma del Agente

Define en qué idioma responderá tu agente a los clientes.

| Opción | Descripción |
|--------|-------------|
| **Español** | El agente responde siempre en español |
| **Inglés** | Respuestas siempre en inglés |

:::tip[Recomendación]
Si la mayoría de tus clientes escriben en español, selecciona **Español** directamente. La detección automática puede generar inconsistencias cuando el cliente mezcla idiomas.
:::

---

### Configuración de Respuestas del Agente

Esta sección controla el **formato y extensión** de las respuestas. Tiene dos configuraciones independientes:

#### Longitud de Respuesta Conversacional

Controla qué tan largas son las respuestas de texto del agente en conversaciones generales.

| Valor | Comportamiento |
|-------|----------------|
| **Sin preferencia** | La IA decide la extensión según el contexto de cada pregunta |
| **Corta** | Respuestas concisas de 1–2 oraciones; ideal para mensajería rápida |
| **Media** | Respuestas balanceadas con algo de detalle; la opción más versátil |
| **Larga** | Respuestas completas con contexto adicional; útil para preguntas complejas |

#### Formato de Presentación de Productos

Controla cómo presenta el agente los productos de tu catálogo cuando un cliente pregunta por ellos.

| Valor | Qué incluye en la respuesta |
|-------|-----------------------------|
| **Sin preferencia** | La IA decide según el contexto |
| **Compacta** | Solo nombre y precio |
| **Estándar** | Nombre, precio y descripción breve |
| **Completa** | Todos los detalles: nombre, SKU, precio y descripción completa |

:::tip[¿Cuál elegir?]
- **Compacta** funciona bien en WhatsApp, donde los mensajes largos se leen menos.
- **Estándar** es el equilibrio ideal para la mayoría de los negocios.
- **Completa** es útil si tus clientes necesitan toda la información para decidir (ej. productos técnicos o de alta gama).
:::

---

### Contenido del Prompt

El campo **Contenido del Prompt** es el corazón de la configuración. Aquí escribes en lenguaje natural las instrucciones que el agente seguirá en cada conversación.

Un prompt efectivo generalmente incluye:

1. **Identidad** — quién es el agente, cómo se llama y a qué negocio representa
2. **Objetivo** — qué debe lograr en cada conversación (vender, informar, agendar citas…)
3. **Personalidad y tono** — formal, amigable, directo, empático…
4. **Límites** — qué temas NO debe abordar y cómo redirigir al cliente
5. **Escalamiento** — en qué situaciones debe transferir a un agente humano

**Estructura básica de ejemplo:**

```
Eres [Nombre], el asistente virtual de [Nombre del Negocio].
Tu objetivo es [objetivo principal: encontrar productos, agendar citas, resolver dudas].

Personalidad: [describe el tono — amigable, profesional, directo, empático…]

Cuando un cliente pregunte por [tema específico], responde con [instrucción concreta].

Si el cliente quiere hablar con una persona, indícale que puede escribir
"humano" para ser transferido a nuestro equipo.

Nunca compartas información sobre [limitación: competidores, precios confidenciales…].
```

:::caution[No hagas el prompt demasiado largo desde el inicio]
Un prompt de 3,000 palabras lleno de reglas contradictorias produce un agente confuso. Empieza con instrucciones esenciales y ajusta con base en conversaciones reales.
:::

---

### Mejorar con IA

El botón **Mejorar con IA** (esquina superior derecha del campo de Contenido) analiza tu prompt y lo reescribe para hacerlo más claro, estructurado y efectivo.

Úsalo cuando:
- Terminaste de escribir tu prompt y quieres pulirlo antes de guardarlo
- Sientes que el agente no responde bien y quieres una sugerencia de mejora
- Editaste una plantilla y quieres validar la coherencia del resultado

:::note[El texto se reemplaza]
Al usar **Mejorar con IA**, el contenido actual del campo se reemplaza por la versión mejorada. Copia el original antes de hacer clic si quieres conservarlo.
:::

---

## Configuración avanzada: Auto-tagging y Escalación

Dentro de cada prompt encontrarás dos configuraciones avanzadas que complementan el comportamiento del agente:

### Auto-tagging

Permite que la IA aplique etiquetas automáticamente a conversaciones que cumplan un criterio que definas en lenguaje natural.

- Escribe una descripción del criterio (ej. "cuando el cliente mencione un problema con su envío o haga un reclamo")
- Selecciona la etiqueta que se aplicará
- Activa o desactiva la regla con el toggle

La IA detecta cuándo la conversación coincide con el criterio y aplica la etiqueta sin intervención manual. Útil para clasificar conversaciones en tiempo real y facilitar filtros en el Panel de Mensajes.

### Escalación a humano

Define el criterio que determina cuándo el agente debe transferir la conversación a un miembro del equipo.

- Si dejas el campo vacío, el comportamiento por defecto aplica: escalar cuando el usuario pide explícitamente hablar con un humano o la consulta es muy compleja o sensible.
- Puedes escribir un **criterio personalizado** para ajustar cuándo ocurre el escalamiento (ej. "si el cliente menciona un pedido dañado o quiere una devolución mayor a $1,000").
- Haz clic en **Guardar criterio** para aplicar el cambio.

![Sección de Auto-tagging y criterio de Escalación a humano en la configuración del prompt](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/05-conversaciones/escalamiento-a-humano.png)

:::tip[Usa el criterio por defecto primero]
El criterio por defecto cubre la mayoría de los casos. Solo personalízalo si tienes reglas de negocio específicas que el agente no está detectando correctamente.
:::

---

## Guardar y activar el prompt

1. Una vez configurados todos los campos, haz clic en **Guardar**.
2. El prompt quedará en el listado del Estudio de Prompts.
3. Asegúrate de que esté marcado como **activo** para que el agente empiece a usarlo.

---

## Preguntas frecuentes

**¿Puedo tener varios prompts creados al mismo tiempo?**

Sí. Puedes tener múltiples prompts guardados — por ejemplo, uno para WhatsApp y otro para el Widget. Solo uno puede estar activo a la vez por canal.

**¿El agente sigue el prompt exactamente como lo escribí?**

El modelo de IA interpreta las instrucciones como guías de comportamiento, no como reglas absolutas. Instrucciones claras, directas y sin contradicciones producen comportamientos más predecibles.

**¿Cuánto tarda el agente en aplicar los cambios después de guardar?**

Los cambios aplican de forma inmediata. La próxima conversación que llegue usará la versión actualizada del prompt.

**¿Puedo cambiar el idioma del agente después de activarlo?**

Sí. Edita el prompt, cambia el idioma y guarda. El cambio aplica de inmediato.
