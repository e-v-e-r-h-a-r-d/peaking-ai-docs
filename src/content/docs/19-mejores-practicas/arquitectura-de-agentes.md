---
title: "Arquitectura de agentes: cuántos necesitas"
description: Por qué el patrón que mejor funciona es máximo 2 agentes principales + 1 agente de seguimiento, y cómo decidir cuándo consolidar o separar.
sidebar:
  order: 2
---

Al diseñar un Workflow, la primera decisión de diseño — antes de escribir una sola línea de prompt — es cuántos agentes necesita el flujo. Aquí es donde más se sobre-construye: es tentador crear un agente por cada tema, por cada segmento de cliente, por cada paso del embudo de ventas.

La regla que mejor ha funcionado en la práctica: **máximo 2 agentes principales, más 1 agente de seguimiento dedicado.**

---

## Por qué no "un agente por tema"

El patrón que parece más ordenado — un agente para Clientes Nuevos, otro para Clientes Existentes, otro por cada línea de producto o segmento comercial — en realidad multiplica el riesgo. Cada agente adicional necesita un nodo **Condition** que decida a cuál mandar la conversación. Cada nodo Condition es una nueva oportunidad de que:

- el mensaje se enrute al agente equivocado,
- dos agentes interpreten la misma frase de forma distinta,
- el cliente "rebote" entre agentes que no comparten memoria completa de la conversación.

En más de una implementación real, la arquitectura empezó como varios agentes especializados por segmento (cada uno con su propio prompt, enrutados por una cadena de nodos Condition) y terminó consolidada en **un solo agente principal** que trae la lógica de clasificación integrada — sabe internamente qué segmento es, qué información necesita según el caso, y cuándo usar cada herramienta, sin depender de que nodos externos lo enruten correctamente turno a turno.

:::note[Clasificar no requiere un segundo agente]
Detectar el tema o el segmento de un cliente es trabajo de **lógica interna del prompt**, no de un agente aparte. El propio nodo Agent puede usar **Silent mode** para clasificar en silencio y guardar una variable (ej. `tipo_cliente = Existente`) que un nodo Condition posterior lee para ramificar solo lo estrictamente necesario — ver [Cómo funcionan los Workflows](/11-workflows/como-funcionan-los-workflows/#agent). Eso no cuenta como un segundo agente principal: es el mismo agente resolviendo su propia clasificación antes de responder.
:::

![Configuración del nodo Agent — prompt, herramientas disponibles y modo silencioso](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/11-workflows/workflow-agent-config.png)

---

## Cuándo sí se justifica un segundo agente principal

El segundo agente principal no se justifica por "es un tema distinto" — se justifica cuando el **tipo de turno** es genuinamente distinto, no solo el contenido. La señal más clara: el disparador que activa a cada agente no es una lectura de intención sobre lenguaje libre, sino un momento estructuralmente diferente de la conversación.

Un ejemplo real y frecuente: un agente conversacional que resuelve toda la interacción con el cliente (identifica necesidad, cotiza, escala), y un **segundo agente separado que solo se activa cuando el cliente envía sus datos de contacto en un formato estructurado** — sin necesidad de buscar productos, sin necesidad de conversar, solo de mapear campos y registrarlos. A este segundo agente directamente **no se le declara la herramienta de catálogo** — no la necesita, y no tenerla disponible elimina por completo la posibilidad de que la use por error sobre un mensaje que en realidad son datos de contacto.

Esa es la prueba práctica antes de crear un segundo agente principal:

> ¿Este agente necesita un conjunto de herramientas genuinamente distinto al del primero? Si la respuesta es "las mismas herramientas, solo que para otro tema", no es un segundo agente — es una rama de lógica dentro del primero.

---

## El agente de Seguimiento es siempre aparte

El tercer agente (y el único que casi siempre vale la pena separar del principal) es el de **seguimiento**: el que reactiva una conversación cuando el cliente dejó de responder. Tiene una responsabilidad tan distinta al resto — no está resolviendo la conversación en curso, está decidiendo si vale la pena reabrirla — que mezclarlo con el agente principal solo le agrega ramas de "¿es primer contacto o reactivación?" a un prompt que ya tiene bastante que resolver.

Patrones que se repiten en agentes de seguimiento bien diseñados:

- **Un solo mensaje por activación**, nunca una secuencia.
- **Silencio total si el cliente ya respondió** — el agente de seguimiento debe poder verificar esa condición y, si no aplica, no generar ningún texto (ni explicaciones internas, ni "no voy a enviar nada" visible).
- **Retoma el contexto real de la conversación** (qué faltaba: ¿un dato?, ¿una confirmación?, ¿elegir un producto?) en vez de un mensaje genérico de reactivación.
- **Entrega el control de vuelta al agente principal** en cuanto el cliente responde con algo que no sea desinterés — el agente de seguimiento no debe intentar resolver la conversación completa, solo reabrirla.
- Comparte las reglas críticas de marca/tono/prohibiciones con el agente principal (nunca inventar, nunca filtrar variables internas), pero su flujo es propio y mucho más corto.

---

## Dos arquetipos que funcionan en producción

**Arquetipo A — Agente comercial con catálogo y cotizador** (típico en B2B con inventario): 2 agentes principales + 1 seguimiento.
- *Agente de conversación* — identifica el producto, arma un borrador, clasifica al cliente, cotiza. Tiene declaradas todas las herramientas: catálogo, búsqueda de contacto, integración de cotización, escalación.
- *Agente de captura de datos* — solo se activa cuando llegan datos de contacto en formato estructurado. No tiene catálogo declarado. Su única salida es registrar al cliente y devolver el control.
- *Agente de seguimiento* — reactiva conversaciones truncadas retomando el punto exacto donde se quedaron (eligiendo producto, faltaban datos, o solo faltaba confirmar).

**Arquetipo B — Agente único de atención** (típico en servicios con varias especialidades/tratamientos/categorías): 1 agente principal + 1 seguimiento.
- Un único agente detecta internamente de qué tema se trata (con un árbol de palabras clave o intención dentro del propio prompt, nunca con nodos Condition externos por tema) y responde con el bloque de conocimiento correspondiente.
- El agente de seguimiento es el único agente adicional — no hay necesidad de un segundo agente principal porque no existe un tipo de turno estructuralmente distinto al de la conversación normal.

Ninguno de los dos arquetipos llega a 3 agentes principales. Si tu diseño actual tiene más, es una señal para revisar si de verdad son turnos distintos o si es clasificación que puede vivir dentro de un solo agente — y de paso, revisar el siguiente artículo sobre colisiones.

→ Sigue con [Evitar colisiones entre agentes y herramientas](/19-mejores-practicas/evitar-colisiones-agentes-herramientas/)
