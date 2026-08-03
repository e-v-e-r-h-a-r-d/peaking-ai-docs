---
title: Resolución de configuraciones frecuentes
description: Guía práctica para resolver por tu cuenta las dudas más comunes sobre prompts, workflows, tags, variables y canales en Peaking.
sidebar:
  order: 1
---

Esta guía cubre las situaciones que más frecuentemente generan dudas — y que en la mayoría de los casos tienen solución directa desde la propia plataforma, sin necesidad de contactar al equipo de soporte.

---

## El agente responde de forma incorrecta o inesperada

**Síntoma:** El agente da respuestas genéricas, se equivoca en un tema específico, omite información importante o ignora una instrucción.

**Causa más común:** El prompt no tiene instrucciones claras para ese escenario, o la Base de Conocimientos no tiene la información que el agente necesita.

**Cómo resolverlo:**

1. Ve al **Estudio de Prompts** y abre el prompt activo.
2. Identifica si hay una regla o instrucción que cubra ese escenario — si no la hay, agrégala.
3. Usa disparadores explícitos: en lugar de "responde preguntas de envíos", escribe *"SI el cliente pregunta por el tiempo de entrega → responde con el rango de X a Y días hábiles según la política vigente"*.
4. Si el problema es información específica (precios, productos, políticas), agrégala a la **Base de Conocimientos** como documento activo.
5. Prueba el cambio en **Peaking Lab** antes de guardarlo — simula la conversación donde el agente falló y confirma que la nueva instrucción resuelve el caso.

:::tip[Las reglas más importantes van al tope]
Las instrucciones críticas deben estar al inicio del prompt con disparadores explícitos. Una regla enterrada al final del texto tiene menos peso que una al principio con una condición clara.
:::

---

## El agente no aplica tags automáticamente

**Síntoma:** El auto-tagging está configurado pero el agente no aplica las etiquetas, o las aplica en casos equivocados.

**Causa más común:** El criterio "Cuándo aplicar" es demasiado amplio o ambiguo.

**Cómo resolverlo:**

1. Ve al panel de **Gestionar Etiquetas de Conversación** (desde cualquier conversación) y revisa la sección **Auto-tagging**.
2. Lee el criterio actual del tag que no funciona.
3. Hazlo más específico con frases concretas que el cliente usa. Ejemplo: en lugar de *"cuando el cliente quiere comprar"*, escribe *"cuando el cliente dice frases como 'lo quiero', 'me lo llevaré', 'envíenme la factura' o da señales claras de decisión de compra"*.
4. Activa el toggle si está desactivado.
5. Prueba enviando mensajes de prueba en el Peaking Lab con las frases objetivo.

---

## Mi workflow no se activa

**Síntoma:** El workflow está publicado pero nunca se ejecuta, o se ejecuta solo a veces.

**Cómo resolverlo:**

1. Ve a **Workflows** y abre el workflow en cuestión. Confirma que el estado es **Activo** (no borrador).
2. Revisa el nodo **Trigger** — es el primer nodo del workflow. Verifica:
   - ¿El tipo de trigger es el correcto? (Inbound message, keyword, scheduled, etc.)
   - ¿El canal del trigger coincide con el canal desde donde llegan los mensajes?
3. Si el trigger es por keyword, prueba la palabra exacta que debe detectar — los triggers de keyword son sensibles al texto.
4. Revisa la pestaña **Execution Runs** del workflow para ver si hubo intentos de ejecución y por qué fallaron.
5. Si hay un nodo de **Condition** temprano en el flujo, verifica que la condición no esté bloqueando todas las conversaciones por un criterio demasiado restrictivo.

:::note[Editar un workflow no lo activa]
Recuerda que los cambios en el grafo de un workflow **no aplican hasta que hagas clic en Publicar**. Un workflow en modo borrador no se ejecuta aunque esté guardado.
:::

---

## Las variables del workflow no pasan el valor correcto

**Síntoma:** Un nodo downstream del workflow recibe un valor vacío, null o incorrecto en una variable que se definió antes.

**Cómo resolverlo:**

1. Revisa el nodo donde se define la variable — usa el nodo **Manage Variables** para asegurarte de que la operación es `Custom` y el valor está correctamente asignado.
2. Verifica que el nombre de la variable es exactamente igual en el nodo que la define y en el nodo que la consume (son case-sensitive).
3. En el nodo **Agent**, confirma que las variables a recolectar están declaradas en el campo **Variables a Recolectar** con el nombre y descripción correctos.
4. Usa el modo **Test** del workflow para ver el valor de las variables en cada paso de la ejecución — ahí puedes ver exactamente en qué nodo se rompe el flujo.
5. Si una variable proviene del cliente (ej. nombre, email), el agente debe haberla recolectado antes de que el flujo intente usarla — verifica el orden de los nodos.

---

## Mi canal (WhatsApp / Instagram / Facebook) no recibe mensajes

**Síntoma:** Los mensajes de los clientes no aparecen en el Panel de Conversaciones.

**Cómo resolverlo:**

1. Ve a **Integraciones › Canales de Mensajería** y revisa el panel **Estado de Conexión**.
2. Si el canal muestra el badge **Token expirado - Reconectar** (en rojo/rosa), el token de Meta venció. Haz clic en **Desconectar** y vuelve a conectar la cuenta. Ver [Reconexión de tokens](/09-integraciones-partner/reconexion-tokens/).
3. Si el canal muestra **Conectado** pero no llegan mensajes, verifica que el toggle **Al Activo** esté encendido.
4. Comprueba que el número o cuenta está correctamente vinculado al prompt activo en el Estudio de Prompts.
5. Envía un mensaje de prueba desde un número externo y espera 60 segundos — si no aparece, el problema puede estar en la configuración del webhook de Meta.

---

## El agente no usa una herramienta (CRM, Calendar, catálogo)

**Síntoma:** La integración está conectada pero el agente no la usa, o la usa en momentos equivocados.

**Causa más común:** La herramienta no está declarada en el prompt, o el criterio "Cuándo ejecutar" es demasiado vago.

**Cómo resolverlo:**

1. Ve al **Estudio de Prompts** → sección **Configuración de Herramientas**.
2. Confirma que la integración aparece en la lista de herramientas activas del prompt.
3. Revisa el campo **¿Cuándo ejecutar esta herramienta?** — debe ser específico. Ejemplo: en lugar de *"cuando el cliente quiera una cita"*, escribe *"cuando el cliente pida agendar, reagendar o cancelar una cita y ya tenga confirmados su nombre, email y la fecha deseada"*.
4. Si la herramienta no aparece en la lista, ve a **Integraciones › Herramientas** y verifica que la integración está en estado **Conectado**.
5. Prueba desde Peaking Lab enviando exactamente el mensaje que debería activar la herramienta.

---

## El agente no encuentra información de la Base de Conocimientos

**Síntoma:** El agente responde que no tiene información sobre un tema que sí está en la Base de Conocimientos.

**Cómo resolverlo:**

1. Ve a **Base de Conocimientos** y busca el documento relacionado.
2. Verifica que el estado del documento es **Activo** — los documentos en **Borrador** o **Archivado** no los consulta el agente.
3. Revisa el contenido del documento — si está escrito de forma muy diferente a como los clientes preguntan, el agente puede no conectarlo. Usa el vocabulario que usan tus clientes.
4. Si el documento es un PDF subido, considera copiar el contenido clave directamente en el editor de texto para mayor precisión.
5. Prueba desde Peaking Lab con la pregunta exacta que el cliente hizo — el agente debería citar información del documento.

---

## Las plantillas de WhatsApp no aparecen o no se pueden enviar

**Síntoma:** Las plantillas no aparecen en la lista de Peaking, o al intentar enviarlas da error.

**Cómo resolverlo:**

1. Ve a **Integraciones › Plantillas de WhatsApp**.
2. Verifica el estado de cada plantilla — solo las que tienen badge **Aprobado** se pueden enviar.
3. Si tienes plantillas aprobadas en Meta pero no aparecen en Peaking, haz clic en **Sincronizar Plantillas**.
4. Si una plantilla muestra **Rechazado**, debes corregirla en el **WhatsApp Business Manager (WABA)** de Meta y esperar nueva aprobación — no se puede editar desde Peaking.
5. Si el envío falla con un error de Meta, revisa el Histórico en **Envíos WhatsApp** — la columna de error te indica la causa exacta.

---

## Preguntas rápidas

**¿Puedo cambiar el tono o personalidad del agente?**
Sí, directamente desde el **Estudio de Prompts**. Edita la sección de personalidad e instrucciones generales. Los cambios aplican de inmediato.

**¿Cómo evito que el agente hable de temas fuera de mi negocio?**
Agrega una regla explícita en el prompt: *"No respondas preguntas que no estén relacionadas con [tu negocio]. Si el cliente pregunta algo fuera de contexto, redirige amablemente la conversación."*

**¿Puedo tener varios prompts activos al mismo tiempo?**
Sí — cada canal o workflow puede tener su propio prompt asignado. Puedes segmentar el comportamiento del agente por canal o tipo de conversación.

**¿Cómo sé si un workflow se ejecutó correctamente?**
Ve al workflow y revisa la pestaña **Execution Runs** — muestra cada ejecución con su estado (completado / error), duración y los nodos que se ejecutaron.

**¿Puedo deshacer un cambio en un prompt?**
Sí — el Prompt Studio guarda un historial de versiones. Ve al prompt, busca la opción de versiones y restaura la que necesites con **Rollback**.
