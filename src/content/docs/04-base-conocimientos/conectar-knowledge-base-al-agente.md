---
title: Cómo tu agente consulta la Base de Conocimientos
description: Cómo el agente de IA accede automáticamente a la Base de Conocimientos para responder con información precisa de tu negocio.
sidebar:
  order: 4
---

Una vez que tienes documentos en la Base de Conocimientos, el agente de IA los consulta de forma **automática y transparente** durante cada conversación. No hay pasos de configuración adicionales — el sistema decide cuándo buscar y qué información es relevante para cada pregunta del cliente.

---

## La conexión es automática

El agente tiene acceso a la Base de Conocimientos por defecto. Cada vez que el cliente hace una pregunta, el sistema evalúa si la respuesta requiere buscar en los documentos:

- Si la pregunta es sobre información de tu negocio (precios, servicios, horarios, productos), **busca en la Base de Conocimientos**.
- Si la pregunta es conversacional o de saludo, **responde directamente** con base en el prompt.
- Si no encuentra información relevante, **reconoce que no tiene esa información** (si así lo indican las instrucciones del prompt) en lugar de inventar datos.

:::note[Confirma que la Base de Conocimientos está activa en Peaking Lab]
Cuando pruebes tu agente en **Peaking Lab**, verás el indicador **"Context Active"** en el encabezado del panel. Esto confirma que el agente tiene acceso a la Base de Conocimientos durante la prueba. Si no aparece, verifica que tengas al menos un documento en estado **Activo**.
:::

---

## Para qué usa el agente la Base de Conocimientos

Estos son los casos de uso más comunes donde el agente consulta la Base de Conocimientos automáticamente:

### Catálogo de productos y servicios

Cuando un cliente pregunta por un producto específico, el agente busca la ficha correspondiente para responder con el nombre exacto, precio, SKU, descripción y disponibilidad — sin inventar ni aproximar datos.

**Ejemplo de conversación:**

> Cliente: "¿Tienen la crema hidratante en presentación de 500ml?"
>
> Agente: *(busca en la Base de Conocimientos)* "Sí, contamos con la Crema Hidratante Intensive en presentación de 500ml a $420 MXN. También la tenemos en 250ml a $260 MXN. ¿Te ayudo a realizar el pedido?"

---

### Preguntas frecuentes y políticas

El agente responde preguntas sobre horarios, métodos de pago, políticas de devolución, zonas de entrega y cualquier otro tema que hayas documentado — sin desviarse de lo que dice la fuente oficial.

**Ejemplo de conversación:**

> Cliente: "¿Hacen envíos a Guadalajara?"
>
> Agente: *(consulta política de envíos)* "Sí, enviamos a toda la República Mexicana. Los envíos a Guadalajara tienen un costo de $120 MXN y llegan en 3–5 días hábiles con paquetería Estafeta."

---

### Glosario de términos y nombres propios

Si tu negocio usa términos técnicos, siglas o nombres de productos propios, puedes documentarlos en la Base de Conocimientos para que el agente los use correctamente y los explique cuando el cliente no los entienda.

**Ejemplo:**

> Base de Conocimientos incluye: "SKU: código único de identificación de producto. Ejemplo: CREAM-500-HYD"
>
> Cliente: "¿Cuál es el SKU de la crema?"
>
> Agente: "El SKU de la Crema Hidratante Intensive 500ml es CREAM-500-HYD."

---

### Procedimientos y guías paso a paso

El agente puede guiar al cliente a través de procesos complejos usando las instrucciones documentadas — sin saltarse pasos ni dar información incorrecta.

**Ejemplo:**

> Cliente: "¿Cómo hago para reagendar mi cita?"
>
> Agente: *(consulta guía de reagendamiento)* "Para reagendar tu cita necesitas hacerlo con al menos 24 horas de anticipación. Puedes hacerlo escribiéndome aquí mismo — dime tu nombre, la fecha de tu cita actual y la nueva fecha que prefieres."

---

### Información de sucursales y ubicaciones

Si tienes múltiples ubicaciones, documenta cada una con su dirección, horario y teléfono. El agente puede orientar al cliente a la sucursal más conveniente.

---

## Qué NO puede hacer el agente con la Base de Conocimientos

| Limitación | Por qué | Alternativa |
|------------|---------|-------------|
| Consultar stock en tiempo real | La Base de Conocimientos es estática, no conecta a tu inventario en vivo | Integra tu sistema de inventario vía API o actualiza los documentos regularmente |
| Acceder a datos de clientes previos | La Base de Conocimientos no tiene acceso al CRM | Gestiona el historial de clientes desde el módulo de Contactos |
| Saber si una cita específica está disponible | La KB no tiene conexión con calendarios en tiempo real | Integra Google Calendar para disponibilidad en vivo |
| Procesar devoluciones o reembolsos | Son transacciones que requieren intervención humana | Instrúyelo en el prompt para escalar estos casos a tu equipo |

---

## Verificar que el agente usa la información correctamente

Usa **Peaking Lab** para probar que el agente consulta bien la Base de Conocimientos:

1. Abre Peaking Lab desde el ícono de matraz en el Estudio de Prompts.
2. Confirma que el encabezado muestra **"Context Active"**.
3. Pregunta algo que solo debería saber si leyó un documento específico — por ejemplo, el precio exacto de un producto o una política particular.
4. Verifica que la respuesta sea precisa y coincida con el documento.

Si el agente da información incorrecta o inventada, revisa:
- Que el documento relevante esté en estado **Activo** (no Borrador ni Archivado).
- Que el contenido del documento sea claro y no contradiga otro documento.
- Que el prompt no incluya instrucciones que entren en conflicto con la información de la KB.

---

## Preguntas frecuentes

**¿Cuántos documentos puede consultar el agente en una sola respuesta?**

El sistema recupera los fragmentos más relevantes de múltiples documentos si la pregunta lo requiere, y los combina en una sola respuesta coherente.

**¿El agente menciona de qué documento sacó la información?**

No, a menos que las instrucciones del prompt se lo indiquen explícitamente. El agente integra la información de forma natural en su respuesta.

**¿Funciona igual en todos los canales?**

Sí. La Base de Conocimientos está disponible en WhatsApp, Instagram, Messenger y Widget por igual, siempre que estén usando el mismo prompt activo.

**¿Qué pasa si el cliente pregunta algo que no está documentado?**

El agente responderá de acuerdo a las instrucciones del prompt. Si el prompt incluye una regla de fallback ("si no tienes la información, dilo honestamente"), el agente la seguirá. Si no, puede intentar responder con conocimiento general — lo cual puede producir respuestas incorrectas. Por eso es importante documentar todas las áreas clave y añadir una regla de fallback en el prompt.
