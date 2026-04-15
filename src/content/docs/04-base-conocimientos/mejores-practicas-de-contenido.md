---
title: Mejores prácticas para tu Base de Conocimientos
description: Cómo estructurar, escribir y mantener el contenido de tu Base de Conocimientos para que el agente responda con máxima precisión.
sidebar:
  order: 3
---

La calidad de las respuestas de tu agente depende directamente de la calidad del contenido en la Base de Conocimientos. Un documento mal escrito, contradictorio o desactualizado produce respuestas incorrectas — aunque el prompt esté perfectamente configurado. Esta guía te enseña a construir una Base de Conocimientos que realmente funcione.

---

## Principio fundamental: una fuente de verdad por tema

**El error más costoso** en una Base de Conocimientos es tener dos documentos que digan cosas diferentes sobre el mismo tema. El agente puede tomar cualquiera de los dos y dar respuestas contradictorias al cliente.

**Regla:** para cada tema (precios, horarios, política de devoluciones, etc.) debe existir **un solo documento activo** con esa información. Cuando actualices algo, archiva la versión anterior antes de activar la nueva.

---

## Qué incluir en la Base de Conocimientos

### Lo que sí debes documentar

| Tipo de contenido | Por qué es útil |
|-------------------|-----------------|
| **Lista completa de productos o servicios** con precio y descripción | El agente puede recomendar y cotizar sin inventar datos |
| **Preguntas frecuentes reales** — las que más te hacen los clientes | Respuestas estandarizadas que el agente aplica de forma consistente |
| **Políticas vigentes** (devoluciones, garantías, envíos, cancelaciones) | El agente informa correctamente sin prometer cosas que no corresponden |
| **Horarios de atención y sucursales** | El cliente siempre recibe información actualizada |
| **Proceso de compra o contratación paso a paso** | El agente puede guiar al cliente sin perderlo en el camino |
| **Glosario de términos técnicos o internos** | El agente usa y explica correctamente el vocabulario de tu industria |
| **Preguntas de calificación de prospectos** | Si tu negocio necesita calificar antes de vender, documenta qué preguntar y cómo |

### Lo que NO debes poner en la Base de Conocimientos

| Qué evitar | Por qué |
|------------|---------|
| **Instrucciones de comportamiento para el agente** | Eso va en el prompt, no en la KB. La KB es solo información factual |
| **Información confidencial** (contraseñas, datos bancarios, datos internos) | La KB puede ser consultada en contexto de conversación; no es un lugar seguro para secretos |
| **Contenido duplicado** | Confunde al agente y produce respuestas inconsistentes |
| **Versiones antiguas de documentos** | Archívalos en lugar de dejarlos activos junto a la versión nueva |
| **Texto muy largo y no estructurado** | El agente recupera fragmentos; un texto de 10,000 palabras sin estructura produce fragmentos poco útiles |

---

## Cómo escribir documentos que el agente pueda usar bien

### Usa el mismo vocabulario que usan tus clientes

Si tus clientes preguntan "¿cuánto cuesta el envío?", tu documento debe decir "envío", no "flete" o "logística". El sistema de búsqueda es semántico, pero cuanto más cercano sea el vocabulario al de las preguntas reales, mejor será la recuperación.

**Mal:** *"El costo de transporte y manejo de mercancía varía según destino geográfico."*

**Bien:** *"¿Cuánto cuesta el envío? Los envíos dentro de la Ciudad de México cuestan $80 MXN. Al interior de la República cuestan $150 MXN con entrega en 3–5 días hábiles."*

---

### Prefiere el formato Pregunta–Respuesta para FAQs

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

### Documenta los casos de borde

Los casos de borde son las situaciones que no son "la norma" pero que los clientes preguntan con frecuencia. Documentarlos evita que el agente improvise.

```
¿Qué pasa si mi pedido llega dañado?
Si el producto llega dañado, toma fotos del daño y del empaque antes de abrirlo completamente.
Contáctanos dentro de las 48 horas siguientes a la recepción con las fotos.
Hacemos el cambio sin costo adicional si el daño es atribuible al transporte.
```

---

### Usa listas y estructura, no párrafos largos

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

## Cómo mantener la Base de Conocimientos actualizada

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

## Lista de verificación: Base de Conocimientos lista para producción

Antes de activar tu agente con clientes reales, verifica que la Base de Conocimientos cumpla estos puntos:

- [ ] **Catálogo completo** — todos los productos o servicios principales tienen su ficha con precio actualizado
- [ ] **FAQ documentadas** — las 10–15 preguntas más frecuentes están respondidas
- [ ] **Políticas vigentes** — devoluciones, garantías, envíos y condiciones de pago están documentadas
- [ ] **Horarios y ubicaciones** actualizados
- [ ] **Sin duplicados activos** — no hay dos documentos activos con información contradictoria sobre el mismo tema
- [ ] **Probado en Peaking Lab** — el agente responde correctamente preguntas clave usando la información de la KB

---

## Preguntas frecuentes

**¿Cuántos documentos debería tener antes de activar el agente?**

No hay un número mínimo, pero como referencia: un agente funcional para un negocio mediano suele necesitar entre 15 y 40 documentos (catálogo + FAQs + políticas). Puedes empezar con menos y agregar más conforme identifiques qué preguntas hace el agente incorrectamente.

**¿Es mejor tener muchos documentos pequeños o pocos documentos grandes?**

Documentos pequeños y enfocados en un solo tema producen mejores resultados que documentos grandes con múltiples temas mezclados. Un documento por tema es la regla general.

**¿El agente puede aprender de las conversaciones y actualizar la KB automáticamente?**

No. La Base de Conocimientos se actualiza manualmente. El agente no escribe ni modifica documentos por su cuenta.

**¿Hay algún tipo de contenido que no funcione bien en la Base de Conocimientos?**

Las tablas de precios muy extensas con decenas de variantes pueden ser difíciles de recuperar con precisión. Para catálogos grandes, considera dividir por categoría de producto o usar el tipo "Guía de Productos" para cada línea por separado.
