---
title: Cómo escribir prompts efectivos
description: La estructura que usamos para que un agente de IA siga reglas de negocio de forma literal y consistente — disparador, acción obligatoria y prohibiciones.
sidebar:
  order: 4
---

Escribir el prompt de un agente no es "escribirle bonito a la IA". Es diseñar una especificación de comportamiento: quién es el agente, qué información puede usar y de dónde, qué debe hacer en cada situación, qué tiene prohibido, y cómo debe verse su respuesta final.

El principio detrás de todo lo demás en este artículo: **un modelo de IA no infiere reglas de negocio por sentido común — las sigue de forma literal.** Si una regla no está escrita, o está escrita de forma ambigua, el modelo improvisa. Ahí es donde aparecen los errores más comunes: precios inventados, horarios que no existen, alternativas de producto que el agente "cree" que sirven igual.

---

## La estructura de una regla: CASO DE USO → ACCIÓN → PROHIBIDO

Cada regla crítica de un prompt debería tener esta forma:

```
CASO DE USO: <la condición exacta que la activa, con las variantes de lenguaje que la disparan>
ACCIÓN OBLIGATORIA: <qué debe hacer el agente, tan literal como sea posible>
PROHIBIDO: <qué no debe hacer en ese mismo caso, si aplica>
```

Ejemplo:

```
CASO DE USO: el cliente confirma que quiere la cotización real (cualquier forma
natural de "sí": "va", "sale", "dale", "correcto", "ok").
ACCIÓN OBLIGATORIA: genera la cotización de inmediato y comparte el enlace
en el mismo mensaje, con un agradecimiento breve.
PROHIBIDO: pedir otra confirmación antes de generar la cotización, o enviar
un mensaje de "espera" antes del enlace.
```

No basta con decir "sé amable y cotiza cuando corresponda" — eso es interpretable. "Genera la cotización de inmediato, sin pedir otra confirmación" no lo es.

:::note[Esto no es el nodo Trigger de un Workflow]
El nodo **Trigger** de un Workflow es otra cosa: el punto de entrada del flow, el canal que arranca la conversación (ver [Cómo funcionan los Workflows](/11-workflows/como-funcionan-los-workflows/#trigger)). Un **CASO DE USO** dentro de una regla de prompt vive en otra capa — es la condición puntual, dentro de una conversación que ya está en curso, que activa esa regla específica del agente. Para no mezclar los dos conceptos, esta sección usa "caso de uso" (algunos equipos lo llaman "path") en vez de "trigger" para referirse a la parte de la regla del prompt.
:::

---

## Las reglas críticas van al tope, no enterradas

Si una instrucción importante está en el párrafo 80 de un documento de 100, el modelo le da menos peso que a algo que lee en las primeras líneas. Los prompts que mejor sostienen su comportamiento en producción abren con una sección de reglas críticas — numeradas, antes incluso de la identidad del agente — que ganan sobre cualquier otra sección si hay contradicción.

**Regla práctica:** ordena el prompt por prioridad de negocio, no por el orden cronológico de la conversación ni por comodidad de escritura. Si agregas una regla de alto impacto, va en esa zona superior — no al final del documento.

---

## Ejemplos concretos anclados a casos reales, no solo principios abstractos

La forma más efectiva de corregir un agente que ya está en producción no es reforzar la regla en abstracto — es anclarla a un caso real, con fecha:

```
[ Corregido según feedback 2026-07: caso real donde el agente cotizó
un precio incorrecto a pesar de que esta regla ya estaba documentada. ]
```

¿Por qué funciona mejor? Le da al modelo un ejemplo concreto de qué "se ve" como la violación, señala que es un error que ya ocurrió, y sirve de historial para quien edite el prompt después — queda registro de por qué existe cada regla.

**Cuando corrijas un agente:** localiza la conversación real donde falló, describe exactamente qué hizo mal y qué debió hacer, y agrégalo junto a la regla — no hace falta reescribirla entera si con el caso real basta.

---

## Checklists NUNCA / SIEMPRE

Además de las reglas con disparador, mantén dos listas maestras:

- **🚫 NUNCA hacer** — comportamientos prohibidos, idealmente con el motivo.
- **✅ SIEMPRE hacer** — comportamientos obligatorios recurrentes.

Son la red de seguridad para todo lo que no amerita su propia sección numerada, y son fáciles de auditar contra una conversación real: "¿violó algo de esta lista, sí o no?".

---

## Guardrails contra la alucinación

Un agente sin restricciones va a "rellenar" información que no tiene, porque su entrenamiento lo empuja a dar una respuesta útil aunque no la sepa con certeza. Todo prompt de agente comercial necesita dos cosas:

1. Una **lista cerrada de fuentes autorizadas** — de dónde SÍ puede tomar información (el propio prompt, la Base de Conocimientos, el resultado literal de una herramienta). Nada fuera de esa lista.
2. Un **mensaje de fallback aprobado** para cuando no tiene el dato — nunca dejar que el modelo "adivine". La forma correcta casi siempre es redirigir con calidez a una fuente humana, no decir "no sé" de forma robótica.

---

## Separar la capa interna (razonamiento) de la capa externa (lo que ve el cliente)

Un error clásico: el modelo "piensa en voz alta" y se le escapan variables, nombres de herramientas o clasificaciones internas en el mensaje que le llega al cliente. La forma de prevenirlo es una autoverificación explícita antes de responder:

> ¿El mensaje contiene nombres de variables internas, JSON, o texto que parezca una nota para el sistema en vez de para el cliente? → elimínalo antes de enviar.

**Regla práctica:** si tu agente maneja variables internas, dile explícitamente que esas palabras jamás deben aparecer en el texto visible, y dale una prueba de autoverificación concreta antes de que se envíe cualquier respuesta.

---

## El formato de salida importa tanto como el contenido

No basta con que la respuesta sea correcta — tiene que sonar humana y caber en el canal. En WhatsApp, un agente "correcto pero que manda párrafos" pierde conversión igual que uno con datos mal. Define con la misma precisión que defines el contenido:

- Longitud máxima (oraciones, caracteres).
- Cuántos temas o ideas por mensaje (idealmente uno).
- Cuándo NO enviar dos mensajes seguidos sin que el cliente responda.
- Qué hacer con el resultado crudo de una herramienta antes de mostrarlo — casi nunca se debe copiar tal cual; se extrae el dato relevante y se redacta en una frase natural.

---

## Separar lo editable de lo core

Si el negocio va a tocar precios, promociones o disponibilidad directamente, aísla esa información en un bloque del prompt claramente delimitado, con sus propias reglas de "qué se puede editar aquí" y "qué no se debe borrar al editar" (normalmente, las reglas de seguridad y comportamiento que evitan errores ya reportados). Así minimizas el riesgo de que una edición de precio rompa, sin querer, una regla crítica de comportamiento.

---

## Errores comunes a evitar

- **Ser vago.** "Sé amable y resuelve la duda del cliente" no es una instrucción, es una aspiración. Escribe el disparador y la acción exacta.
- **Enterrar lo importante.** Si algo es crítico, va arriba, no al final del documento.
- **No poner ejemplos reales.** Las reglas abstractas se olvidan o se malinterpretan; los casos reales con fecha se recuerdan.
- **Mezclar contenido editable con lógica crítica.** Si el negocio edita precios y sin querer borra una regla de seguridad, el mismo error vuelve a aparecer semanas después.
- **No verificar el formato de la respuesta.** Un agente puede tener el dato correcto y aun así fallar por mandar un mensaje demasiado largo o dos mensajes seguidos.
- **Corregir el síntoma en vez de la causa.** Si el mismo tipo de error se repite, no basta con recordárselo una vez — hay que hacerlo estructuralmente obligatorio en el flujo (por ejemplo, integrando una condición dentro del mensaje de confirmación, no como un paso aparte y opcional).
- **Cambiar todo a la vez.** Dificulta saber qué corrección resolvió — o rompió — qué comportamiento. Ver el siguiente artículo.

→ Sigue con [Ciclo de mejora y versionado de prompts](/19-mejores-practicas/ciclo-de-mejora-y-versionado/)
