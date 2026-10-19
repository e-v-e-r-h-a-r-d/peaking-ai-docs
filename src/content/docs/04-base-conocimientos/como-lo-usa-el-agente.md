---
title: Cómo usa el agente tu Base de Conocimientos
description: "Cómo el agente consulta la Base de Conocimientos y cómo escribir contenido que responda bien."
sidebar:
  order: 2
---

Una vez que tienes documentos en la Base de Conocimientos, el agente de IA los consulta de forma **automática y transparente** durante cada conversación. No hay pasos de configuración adicionales — el sistema decide cuándo buscar y qué información es relevante para cada pregunta del cliente.

---

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Entender cómo consulta el agente mi base | [La conexión es automática](#la-conexión-es-automática) |
| Saber qué puede y qué no puede hacer con ella | [Qué NO puede hacer](#qué-no-puede-hacer-el-agente-con-la-base-de-conocimientos) |
| Comprobar que usa mi información | [Verificar](#verificar-que-el-agente-usa-la-información-correctamente) |
| Escribir documentos que funcionen | [Mejores prácticas](#mejores-prácticas-para-tu-base-de-conocimientos) |
| Revisar si mi base está lista para producción | [Lista de verificación](#lista-de-verificación-base-de-conocimientos-lista-para-producción) |

## Cómo tu agente consulta la Base de Conocimientos

### La conexión es automática

El agente tiene acceso a la Base de Conocimientos por defecto. Cada vez que el cliente hace una pregunta, el sistema evalúa si la respuesta requiere buscar en los documentos:

- Si la pregunta es sobre información de tu negocio (precios, servicios, horarios, productos), **busca en la Base de Conocimientos**.
- Si la pregunta es conversacional o de saludo, **responde directamente** con base en el prompt.
- Si no encuentra información relevante, **reconoce que no tiene esa información** (si así lo indican las instrucciones del prompt) en lugar de inventar datos.

:::note[Confirma que la Base de Conocimientos está activa en Peaking Lab]
Cuando pruebes tu agente en **Peaking Lab**, verás el indicador **"Context Active"** en el encabezado del panel. Esto confirma que el agente tiene acceso a la Base de Conocimientos durante la prueba. Si no aparece, verifica que tengas al menos un documento en estado **Activo**.
:::

---

### Para qué usa el agente la Base de Conocimientos

Estos son los casos de uso más comunes donde el agente consulta la Base de Conocimientos automáticamente:

#### Catálogo de productos y servicios

Cuando un cliente pregunta por un producto específico, el agente busca la ficha correspondiente para responder con el nombre exacto, precio, SKU, descripción y disponibilidad — sin inventar ni aproximar datos.

**Ejemplo de conversación:**

> Cliente: "¿Tienen la crema hidratante en presentación de 500ml?"
>
> Agente: *(busca en la Base de Conocimientos)* "Sí, contamos con la Crema Hidratante Intensive en presentación de 500ml a [monto]. También la tenemos en 250ml a [monto]. ¿Te ayudo a realizar el pedido?"

---

#### Preguntas frecuentes y políticas

El agente responde preguntas sobre horarios, métodos de pago, políticas de devolución, zonas de entrega y cualquier otro tema que hayas documentado — sin desviarse de lo que dice la fuente oficial.

**Ejemplo de conversación:**

> Cliente: "¿Hacen envíos a Guadalajara?"
>
> Agente: *(consulta política de envíos)* "Sí, enviamos a toda la República Mexicana. Los envíos a Guadalajara tienen un costo de [monto] y llegan en 3–5 días hábiles con paquetería Estafeta."

---

#### Glosario de términos y nombres propios

Si tu negocio usa términos técnicos, siglas o nombres de productos propios, puedes documentarlos en la Base de Conocimientos para que el agente los use correctamente y los explique cuando el cliente no los entienda.

**Ejemplo:**

> Base de Conocimientos incluye: "SKU: código único de identificación de producto. Ejemplo: CREAM-500-HYD"
>
> Cliente: "¿Cuál es el SKU de la crema?"
>
> Agente: "El SKU de la Crema Hidratante Intensive 500ml es CREAM-500-HYD."

---

#### Procedimientos y guías paso a paso

El agente puede guiar al cliente a través de procesos complejos usando las instrucciones documentadas — sin saltarse pasos ni dar información incorrecta.

**Ejemplo:**

> Cliente: "¿Cómo hago para reagendar mi cita?"
>
> Agente: *(consulta guía de reagendamiento)* "Para reagendar tu cita necesitas hacerlo con al menos 24 horas de anticipación. Puedes hacerlo escribiéndome aquí mismo — dime tu nombre, la fecha de tu cita actual y la nueva fecha que prefieres."

---

#### Información de sucursales y ubicaciones

Si tienes múltiples ubicaciones, documenta cada una con su dirección, horario y teléfono. El agente puede orientar al cliente a la sucursal más conveniente.

---

### Qué NO puede hacer el agente con la Base de Conocimientos

| Limitación | Por qué | Alternativa |
|------------|---------|-------------|
| Consultar stock en tiempo real | La Base de Conocimientos es estática, no conecta a tu inventario en vivo | Integra tu sistema de inventario vía API o actualiza los documentos regularmente |
| Acceder a datos de clientes previos | La Base de Conocimientos no tiene acceso al CRM | Gestiona el historial de clientes desde el módulo de Contactos |
| Saber si una cita específica está disponible | La KB no tiene conexión con calendarios en tiempo real | Integra Google Calendar para disponibilidad en vivo |
| Procesar devoluciones o reembolsos | Son transacciones que requieren intervención humana | Instrúyelo en el prompt para escalar estos casos a tu equipo |

---

### Verificar que el agente usa la información correctamente

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

## Mejores prácticas para tu Base de Conocimientos

La calidad de las respuestas de tu agente depende directamente de la calidad del contenido en la Base de Conocimientos. Un documento mal escrito, contradictorio o desactualizado produce respuestas incorrectas — aunque el prompt esté perfectamente configurado. Esta guía te enseña a construir una Base de Conocimientos que realmente funcione.

---

### Principio fundamental: una fuente de verdad por tema

**El error más costoso** en una Base de Conocimientos es tener dos documentos que digan cosas diferentes sobre el mismo tema. El agente puede tomar cualquiera de los dos y dar respuestas contradictorias al cliente.

**Regla:** para cada tema (precios, horarios, política de devoluciones, etc.) debe existir **un solo documento activo** con esa información. Cuando actualices algo, archiva la versión anterior antes de activar la nueva.

---

### Qué incluir en la Base de Conocimientos

#### Lo que sí debes documentar

| Tipo de contenido | Por qué es útil |
|-------------------|-----------------|
| **Lista completa de productos o servicios** con precio y descripción | El agente puede recomendar y cotizar sin inventar datos |
| **Preguntas frecuentes reales** — las que más te hacen los clientes | Respuestas estandarizadas que el agente aplica de forma consistente |
| **Políticas vigentes** (devoluciones, garantías, envíos, cancelaciones) | El agente informa correctamente sin prometer cosas que no corresponden |
| **Horarios de atención y sucursales** | El cliente siempre recibe información actualizada |
| **Proceso de compra o contratación paso a paso** | El agente puede guiar al cliente sin perderlo en el camino |
| **Glosario de términos técnicos o internos** | El agente usa y explica correctamente el vocabulario de tu industria |
| **Preguntas de calificación de prospectos** | Si tu negocio necesita calificar antes de vender, documenta qué preguntar y cómo |

#### Lo que NO debes poner en la Base de Conocimientos

| Qué evitar | Por qué |
|------------|---------|
| **Instrucciones de comportamiento para el agente** | Eso va en el prompt, no en la KB. La KB es solo información factual |
| **Información confidencial** (contraseñas, datos bancarios, datos internos) | La KB puede ser consultada en contexto de conversación; no es un lugar seguro para secretos |
| **Contenido duplicado** | Confunde al agente y produce respuestas inconsistentes |
| **Versiones antiguas de documentos** | Archívalos en lugar de dejarlos activos junto a la versión nueva |
| **Texto muy largo y no estructurado** | El agente recupera fragmentos; un texto de 10,000 palabras sin estructura produce fragmentos poco útiles |

---

### Cómo escribir documentos que el agente pueda usar bien

#### Usa el mismo vocabulario que usan tus clientes

Si tus clientes preguntan "¿cuánto cuesta el envío?", tu documento debe decir "envío", no "flete" o "logística". El sistema de búsqueda es semántico, pero cuanto más cercano sea el vocabulario al de las preguntas reales, mejor será la recuperación.

**Mal:** *"El costo de transporte y manejo de mercancía varía según destino geográfico."*

**Bien:** *"¿Cuánto cuesta el envío? Los envíos dentro de la Ciudad de México cuestan [monto]. Al interior de la República cuestan [monto] con entrega en 3–5 días hábiles."*

---

#### Prefiere el formato Pregunta–Respuesta para FAQs

El formato más efectivo para preguntas frecuentes es escribir exactamente cómo preguntaría un cliente, seguido de la respuesta completa.

```
¿Aceptan pagos en efectivo?
Sí, aceptamos efectivo solo en pagos presenciales en nuestras sucursales.
Para pedidos en línea, aceptamos tarjeta de crédito o débito, transferencia bancaria y Mercado Pago.

¿Puedo cancelar mi pedido después de haberlo pagado?
Puedes cancelar dentro de las primeras 2 horas de realizado el pago.
Pasado ese tiempo, el pedido ya está en proceso y no puede cancelarse.
Para cancelaciones, escríbenos con tu número de pedido.
```

---

#### Documenta los casos de borde

Los casos de borde son las situaciones que no son "la norma" pero que los clientes preguntan con frecuencia. Documentarlos evita que el agente improvise.

```
¿Qué pasa si mi pedido llega dañado?
Si el producto llega dañado, toma fotos del daño y del empaque antes de abrirlo completamente.
Contáctanos dentro de las 48 horas siguientes a la recepción con las fotos.
Hacemos el cambio sin costo adicional si el daño es atribuible al transporte.
```

---

#### Usa listas y estructura, no párrafos largos

El sistema recupera fragmentos del texto. Los párrafos largos y sin estructura producen fragmentos que mezclan información de temas distintos. Los documentos con listas cortas y puntos claros generan fragmentos más útiles.

**Mejor estructura:**

```
Métodos de pago aceptados:
- Tarjeta de crédito o débito (Visa, Mastercard, American Express)
- Transferencia bancaria (CLABE: XXXXXXXXXXXXXXXX)
- Mercado Pago
- Efectivo solo en sucursal

No aceptamos: PayPal, criptomonedas ni pagos en especie.
```

---

### Cómo mantener la Base de Conocimientos actualizada

Una Base de Conocimientos desactualizada es peor que no tener una — el agente comparte información incorrecta con confianza.

**Cuándo actualizar:**

| Evento | Qué actualizar |
|--------|----------------|
| Cambio de precios | Todos los documentos con precios afectados |
| Nuevos productos o servicios | Añadir la nueva ficha en estado Activo |
| Producto discontinuado | Archivar el documento o actualizar indicando que ya no está disponible |
| Cambio en política de envíos o devoluciones | Actualizar el documento de política y archivar la versión anterior |
| Cambio de horarios o sucursales | Actualizar inmediatamente — es de las preguntas más frecuentes |
| Nueva pregunta frecuente detectada en conversaciones | Crear un nuevo documento de Pregunta–Respuesta |

:::tip[Agenda una revisión mensual]
Dedica 30 minutos al mes a revisar tu Base de Conocimientos. Busca documentos con información que pueda haber cambiado y actualiza los que ya no estén vigentes. Una KB activa y precisa es una de las mejores inversiones en la calidad de tu agente.
:::

---

### Lista de verificación: Base de Conocimientos lista para producción

Antes de activar tu agente con clientes reales, verifica que la Base de Conocimientos cumpla estos puntos:

- [ ] **Catálogo completo** — todos los productos o servicios principales tienen su ficha con precio actualizado
- [ ] **FAQ documentadas** — las 10–15 preguntas más frecuentes están respondidas
- [ ] **Políticas vigentes** — devoluciones, garantías, envíos y condiciones de pago están documentadas
- [ ] **Horarios y ubicaciones** actualizados
- [ ] **Sin duplicados activos** — no hay dos documentos activos con información contradictoria sobre el mismo tema
- [ ] **Probado en Peaking Lab** — el agente responde correctamente preguntas clave usando la información de la KB

---

## Preguntas frecuentes

### Cómo tu agente consulta la Base de Conocimientos: preguntas

**¿Cuántos documentos puede consultar el agente en una sola respuesta?**

El sistema recupera los fragmentos más relevantes de múltiples documentos si la pregunta lo requiere, y los combina en una sola respuesta coherente.

**¿El agente menciona de qué documento sacó la información?**

No, a menos que las instrucciones del prompt se lo indiquen explícitamente. El agente integra la información de forma natural en su respuesta.

**¿Funciona igual en todos los canales?**

Sí. La Base de Conocimientos está disponible en WhatsApp, Instagram, Messenger y Widget por igual, siempre que estén usando el mismo prompt activo.

**¿Qué pasa si el cliente pregunta algo que no está documentado?**

El agente responderá de acuerdo a las instrucciones del prompt. Si el prompt incluye una regla de fallback ("si no tienes la información, dilo honestamente"), el agente la seguirá. Si no, puede intentar responder con conocimiento general — lo cual puede producir respuestas incorrectas. Por eso es importante documentar todas las áreas clave y añadir una regla de fallback en el prompt.

### Mejores prácticas para tu Base de Conocimientos: preguntas

**¿Cuántos documentos debería tener antes de activar el agente?**

No hay un número mínimo, pero como referencia: un agente funcional para un negocio mediano suele necesitar entre 15 y 40 documentos (catálogo + FAQs + políticas). Puedes empezar con menos y agregar más conforme identifiques qué preguntas hace el agente incorrectamente.

**¿Es mejor tener muchos documentos pequeños o pocos documentos grandes?**

Documentos pequeños y enfocados en un solo tema producen mejores resultados que documentos grandes con múltiples temas mezclados. Un documento por tema es la regla general.

**¿El agente puede aprender de las conversaciones y actualizar la KB automáticamente?**

No. La Base de Conocimientos se actualiza manualmente. El agente no escribe ni modifica documentos por su cuenta.

**¿Hay algún tipo de contenido que no funcione bien en la Base de Conocimientos?**

Las tablas de precios muy extensas con decenas de variantes pueden ser difíciles de recuperar con precisión. Para catálogos grandes, considera dividir por categoría de producto o usar el tipo "Guía de Productos" para cada línea por separado.
