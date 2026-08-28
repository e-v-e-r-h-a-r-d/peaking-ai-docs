---
title: Resumen de mejores prácticas
description: Las reglas fundamentales para diseñar agentes de IA, prompts y workflows en Peaking sin fricciones ni comportamientos inesperados.
sidebar:
  order: 1
---

Esta sección reúne los aprendizajes acumulados construyendo agentes de IA reales sobre Peaking — prompts que atienden clientes por WhatsApp todos los días, con sus reglas de negocio, sus catálogos, sus escalaciones a humanos. No es teoría genérica de prompt engineering: son patrones que se repitieron una y otra vez en implementaciones distintas, y los errores que se repitieron cuando no se siguieron.

Si vas a diseñar o corregir un agente de IA en Peaking, estas cuatro reglas son el punto de partida.

---

## 1. Máximo 2 agentes principales + 1 agente de seguimiento

La tentación natural es crear un agente distinto por cada tema, segmento o tipo de cliente. En la práctica, cada agente adicional significa un nodo de ruteo adicional (un **Condition**) — y cada nodo de ruteo es un punto donde la conversación se puede perder o caer en el agente equivocado.

El patrón que mejor funciona: **un agente principal** que resuelve toda la conversación (detectando el tema internamente, sin depender de que un nodo externo lo enrute bien), más como mucho **un segundo agente principal** cuando de verdad hay un tipo de turno distinto (no solo un tema distinto), y **un agente de seguimiento** separado, dedicado exclusivamente a reactivar conversaciones que se quedaron a medias.

→ Ver [Arquitectura de agentes: cuántos necesitas](/19-mejores-practicas/arquitectura-de-agentes/)

## 2. Cero solapamiento entre agentes y herramientas

Un agente que solapa a otro, una herramienta que solapa a otra, o un agente que duplica lo que ya resuelve una herramienta: las tres son la misma familia de error, y las tres producen el mismo síntoma — el agente responde algo que no tiene sentido, repite preguntas, o "pierde memoria" de la conversación.

Antes de publicar un workflow con más de un agente, hay una lista de verificación concreta para descartar estas colisiones.

→ Ver [Evitar colisiones entre agentes y herramientas](/19-mejores-practicas/evitar-colisiones-agentes-herramientas/)

## 3. Cada regla es un caso de uso + una acción, no una aspiración

Un modelo de IA no infiere reglas de negocio por sentido común — las sigue de forma literal. "Sé amable y resuelve la duda del cliente" no es una instrucción, es un deseo. La estructura que sí funciona: **CASO DE USO** (la condición exacta que la activa) → **ACCIÓN OBLIGATORIA** (qué debe hacer, literal) → **PROHIBIDO** (qué no debe hacer en ese mismo caso). *(Se llama "caso de uso" y no "trigger" para no confundirlo con el nodo Trigger de un Workflow, que es otro concepto — ver el artículo enlazado abajo.)*

→ Ver [Cómo escribir prompts efectivos](/19-mejores-practicas/escribir-prompts-efectivos/)

## 4. Diagnosticar → un cambio a la vez → probar → documentar

Un prompt publicado en Peaking es producción inmediata. La forma segura de corregir un agente que ya está en vivo no es reescribirlo completo — es diagnosticar con una conversación real, aplicar un cambio quirúrgico, probarlo en el Peaking Lab, y dejar constancia de por qué se hizo el cambio.

→ Ver [Ciclo de mejora y versionado de prompts](/19-mejores-practicas/ciclo-de-mejora-y-versionado/)

---

:::tip[Esto complementa, no reemplaza, la documentación de producto]
Si todavía no sabes cómo declarar una herramienta en un Prompt o cómo funcionan los nodos de un Workflow, empieza por [Declarar herramientas en el Prompt](/03-prompt-studio/declarar-herramientas/) y [Cómo funcionan los Workflows](/11-workflows/como-funcionan-los-workflows/). Esta sección asume que ya conoces esa mecánica y se enfoca en las decisiones de diseño alrededor de ella.
:::
