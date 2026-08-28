---
title: Ciclo de mejora y versionado de prompts
description: Cómo iterar sobre un agente en producción sin romper lo que ya funciona — diagnóstico, cambios aditivos, prueba en Peaking Lab y documentación.
sidebar:
  order: 5
---

Un detalle que cambia por completo cómo hay que editar un prompt: **en Peaking, publicar un prompt es producción inmediata.** No hay un paso de "build" ni un despliegue diferido — en cuanto guardas y publicas, el agente responde con la versión nueva en el siguiente mensaje. Eso hace que la forma de iterar importe tanto como el contenido de la corrección.

El ciclo que mejor funciona: **diagnosticar → un cambio a la vez → probar → documentar → volver a probar.**

---

## 1. Diagnóstico primero

No adivines el problema — léelo. Antes de tocar el prompt, localiza la conversación real donde el agente falló (el historial del Panel de Mensajes, o el reporte que te compartió el cliente/equipo). Describe exactamente qué hizo el agente y qué debió hacer en su lugar.

Diagnosticar primero evita el error más común al corregir un agente: reforzar una regla que en realidad no era la causa. Antes de escribir una corrección, confirma en qué punto exacto del flujo se originó el problema — a veces la causa no está en el prompt del agente que respondió mal, sino en un nodo Condition que lo enrutó ahí (ver [Evitar colisiones entre agentes y herramientas](/19-mejores-practicas/evitar-colisiones-agentes-herramientas/)).

## 2. Un cambio a la vez

No reescribas el prompt completo por un solo error. Localiza la regla exacta (o crea una nueva, siguiendo la estructura CASO DE USO → ACCIÓN OBLIGATORIA → PROHIBIDO) y corrígela quirúrgicamente. Cambiar varias cosas a la vez dificulta saber después qué corrección resolvió — o rompió — qué comportamiento.

## 3. Cambios aditivos, con rollback disponible

Antes de sobrescribir la versión publicada, guarda una copia de la versión anterior. Si algo sale mal con el cambio nuevo, necesitas poder volver exactamente al estado anterior sin reconstruirlo de memoria. En la práctica, esto se ve como un historial de versiones donde cada una queda intacta (nunca se edita una versión ya publicada, solo se crea la siguiente) — así el rollback es instantáneo si hace falta.

## 4. Prueba antes de aplicar en producción

Usa el **Peaking Lab** (dentro del Estudio de Prompts) o el panel **Test** del editor de Workflows para simular la conversación real que falló — y también su contraparte de "esto no debería activarse" — con el cambio propuesto, antes de publicarlo. Un prompt mal editado afecta a todos los clientes que conversen con ese agente desde el momento en que se publica.

## 5. Documenta el porqué

Cada corrección debería dejar rastro: qué pasó, cuándo, y por qué se corrigió de esa forma específica. Esto evita que, semanas después, alguien revierta la regla sin saber qué problema real resolvía — o que la vuelva a romper de otra manera. Anotar el caso real junto a la regla (como se describe en [Cómo escribir prompts efectivos](/19-mejores-practicas/escribir-prompts-efectivos/#ejemplos-concretos-anclados-a-casos-reales-no-solo-principios-abstractos)) cumple esta función directamente dentro del propio prompt.

## 6. Vuelve a probar

Después de varios cambios acumulados, revisa conversaciones nuevas para confirmar que el patrón de error no volvió a aparecer, y que ninguna corrección anterior quedó neutralizada por una posterior.

---

## Cuando el cambio afecta a más de un agente

Si tienes un agente principal y un agente de seguimiento (o dos agentes principales) que comparten una misma regla de negocio — un mensaje de confirmación, una promoción vigente, una condición de escalación — un cambio en uno **casi siempre debe revisarse en el otro**. Es fácil corregir el síntoma en el agente donde se reportó y olvidar que el mismo bloque de lógica vive, con su propio texto, en el segundo agente.

:::note[Buena práctica: lista de "qué revisar en el otro agente"]
Si tu arquitectura tiene un agente principal y uno de seguimiento, vale la pena mantener, aunque sea informalmente, la lista de qué bloques de reglas son compartidos entre ambos (identidad, promociones activas, condiciones de escalación) para no olvidar revisarlos en pareja cuando cambia uno.
:::

---

## Resumen en una frase

Un buen prompt de agente no es un texto persuasivo — es una especificación de comportamiento: reglas explícitas, priorizadas, ancladas a casos reales, con guardrails claros contra la invención de información, y con un ciclo de edición que prueba antes de publicar y documenta después de corregir.
