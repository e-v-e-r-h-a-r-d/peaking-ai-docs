---
title: Evitar colisiones entre agentes y herramientas
description: Cómo diseñar la declaración de herramientas y las condiciones de ruteo para que un agente, una herramienta o un nodo Condition nunca se solapen con otro.
sidebar:
  order: 3
---

Esta es, en la práctica, la causa más frecuente de que un agente "se comporte raro": no un mal prompt, sino un **solapamiento** — dos piezas del sistema (dos agentes, dos herramientas, o un agente y una herramienta) que sin querer intentan resolver la misma decisión, con reglas distintas.

Hay tres formas en las que esto pasa. Las tres producen síntomas parecidos desde el punto de vista del cliente: el bot responde algo sin relación, repite una pregunta que ya había hecho, o parece "reiniciar" la conversación.

---

## 1. Agente vs. Agente — el nodo Condition que "roba" la conversación

Este es el caso más común cuando hay más de un agente principal enrutado por nodos **Condition**. Un nodo Condition en modo **AI (semantic evaluation)** o por palabra clave se configura para detectar, por ejemplo, que el cliente se está despidiendo — y dispara con frases como "ok", "perfecto", "gracias", "muy amable".

El problema: esas mismas frases aparecen todo el tiempo **en medio de una venta normal**, como confirmación de un paso ("perfecto, ese color"), no como despedida. Cuando el Condition dispara mal, la conversación se desvía al agente equivocado (uno de cierre, por ejemplo) que no está diseñado para seguir la venta — responde una despedida fuera de lugar o, peor, deja de responder del todo. Si el cliente insiste, el agente de ventas retoma sin memoria de que ya había hecho esa pregunta, y el cliente lo percibe como que el bot "repite" o "se reinicia".

**La causa raíz no es el prompt de ningún agente — es que el Condition evalúa el último mensaje de forma aislada, sin saber si el agente anterior dejó una pregunta pendiente.** Un caso real documentado en una implementación: dos instancias del mismo nodo Condition (una en cada rama del flujo) compartían exactamente ese punto ciego, y corregirlo en una sola instancia no bastaba — había que aplicarlo a ambas.

**Cómo evitarlo:**
- Un nodo Condition que decide "¿esto es un cierre?" nunca debería depender solo del texto del último mensaje — necesita saber si el turno anterior del agente dejó una pregunta de negocio abierta. Si el mecanismo de ruteo lo permite, agrega esa salvedad explícita antes de clasificar como cierre.
- Si tienes el mismo nodo Condition duplicado en más de una rama del workflow (por ejemplo, una rama para cliente identificado y otra para cliente nuevo), cualquier corrección se aplica a **todas** las instancias — no asumas que una sola edición cubre el resto.
- Prueba el Condition específicamente con confirmaciones cortas ("ok", "va", "sale", "gracias") **en medio de un flujo activo**, no solo con mensajes de despedida reales, antes de publicar.

![Modos de evaluación de un nodo Condition — Simple, AI y Variable](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/11-workflows/workflow-condition-modos.png)

---

## 2. Herramienta vs. Herramienta — la misma integración, dos instrucciones incompatibles

Cuando dos agentes distintos tienen acceso a la misma herramienta (por ejemplo, la misma integración de CRM u órdenes), declarar la misma instrucción genérica en ambos abre la puerta a que cualquiera de los dos ejecute una operación que en realidad le corresponde solo al otro.

El patrón correcto: **la instrucción de una herramienta no es fija — se declara distinta para cada agente que la usa**, restringida exactamente a lo que ese agente debe poder hacer en ese punto del flujo. Un agente que solo captura datos de contacto debe tener la herramienta de integración limitada a la operación de registro — nunca a crear cotizaciones ni completar una compra, aunque técnicamente la herramienta pueda hacerlo. Ver [Declarar herramientas en el Prompt](/03-prompt-studio/declarar-herramientas/) para el mecanismo — este artículo es sobre la decisión de diseño detrás de esa instrucción.

**Cómo evitarlo:**
- Revisa, herramienta por herramienta, si la instrucción que declaraste en cada agente permite operaciones que en realidad son responsabilidad de otro agente. Si es así, restríngela.
- Si una herramienta soporta varias operaciones (leer, crear, actualizar), sé explícito en el prompt sobre cuáles puede usar ese agente específico — no asumas que "declarar la herramienta" ya implica solo la operación que tenías en mente.

---

## 3. Agente vs. Herramienta — dos fuentes de verdad para el mismo dato

El tercer tipo de colisión es más sutil: el prompt del agente intenta resolver algo (un precio, una disponibilidad, una clasificación) con su propia lógica, mientras la herramienta/integración conectada también aplica su propia versión de esa misma decisión. Cuando las dos no coinciden exactamente, el resultado es inconsistente — un precio que no cuadra, una condición que se aplica dos veces, una clasificación que el agente "cree" que ya sabe pero que la herramienta vuelve a decidir por su cuenta.

**Cómo evitarlo:**
- Para cada dato que importa (precio, disponibilidad, condiciones comerciales, clasificación del cliente), define **una sola fuente de verdad** — normalmente la herramienta/integración, nunca el razonamiento del modelo.
- El prompt debe orquestar alrededor de esa fuente (cuándo consultarla, qué hacer con el resultado), no re-derivar el mismo dato por su cuenta ni "completar" lo que la herramienta devolvió con su propio criterio.

---

## Checklist antes de publicar un workflow con más de un agente

- [ ] ¿Cada nodo Condition que enruta entre agentes puede distinguir un mensaje de cierre real de una confirmación de en medio del flujo?
- [ ] Si el mismo nodo Condition existe en más de una rama del workflow, ¿la corrección se aplicó a **todas** las instancias?
- [ ] ¿Dos agentes comparten un criterio de disparo (las mismas palabras, la misma intención) sin que uno sepa del otro?
- [ ] ¿La misma herramienta tiene una instrucción distinta y acotada en cada agente que la usa, o comparten una instrucción genérica?
- [ ] Para cada dato sensible (precio, disponibilidad, clasificación), ¿hay una sola fuente de verdad, o el agente y la herramienta pueden calcularlo cada uno por su lado?
- [ ] ¿Probaste ambas ramas (verdadero/falso) de cada Condition con mensajes ambiguos reales, no solo con el caso obvio?

:::tip[Usa el panel de Test antes de publicar]
El botón **Test** del editor de Workflows abre el panel de prueba del flujo completo — es el lugar para simular justo los mensajes ambiguos que suelen exponer estas colisiones (confirmaciones cortas a medio flujo, datos de contacto que podrían confundirse con una búsqueda de producto) antes de publicar en producción.
:::

→ Sigue con [Cómo escribir prompts efectivos](/19-mejores-practicas/escribir-prompts-efectivos/)
