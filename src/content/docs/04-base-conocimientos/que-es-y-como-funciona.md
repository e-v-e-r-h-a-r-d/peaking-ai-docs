---
title: Qué es la Base de Conocimientos y cómo funciona
description: Qué es la Base de Conocimientos de Peaking, cómo la consulta tu agente de IA automáticamente y qué tipos de información puedes almacenar.
sidebar:
  order: 1
---

La **Base de Conocimientos** es el repositorio de información que alimenta a tu agente de IA. Es el lugar donde guardas todo lo que tu negocio sabe: catálogo de productos, preguntas frecuentes, políticas de servicio, glosarios, guías y cualquier otro contenido que el agente necesite para responder con precisión.

Sin una Base de Conocimientos, el agente solo puede responder con base en las instrucciones generales del prompt. Con ella, puede consultar información específica y actualizada de tu negocio en tiempo real durante cada conversación.

---

## Cómo usa el agente la Base de Conocimientos

El agente **consulta la Base de Conocimientos automáticamente** cada vez que recibe una pregunta. No necesitas programar nada ni indicarle manualmente cuándo buscar — el sistema decide por su cuenta si la consulta del cliente requiere buscar en los documentos.

El proceso es el siguiente:

1. El cliente envía un mensaje.
2. El agente analiza la pregunta y determina si necesita información específica.
3. Si la necesita, **busca en la Base de Conocimientos** los fragmentos más relevantes.
4. Formula una respuesta combinando las instrucciones del prompt con la información encontrada.
5. Si no encuentra información suficiente, responde con base en el prompt o reconoce que no tiene esa información disponible.

:::tip[La Base de Conocimientos complementa al prompt, no lo reemplaza]
El prompt define la personalidad, el tono y el objetivo del agente. La Base de Conocimientos le da el "conocimiento factual" sobre tu negocio. Ambos trabajan juntos en cada respuesta.
:::

---

## La interfaz de la Base de Conocimientos

Para acceder: en el panel lateral izquierdo, haz clic en **Base de Conocimientos**.

La pantalla está dividida en tres secciones:

### Barra de búsqueda

En la parte superior encontrarás un campo de búsqueda: **"Buscar por título, categoría o contenido..."**. Úsalo para encontrar documentos específicos cuando la biblioteca crece.

### Panel izquierdo — Filtros

**Categorías:** organiza tus documentos en grupos temáticos (por ejemplo: Productos, Políticas, Preguntas Frecuentes). La categoría **All Documents** siempre muestra todos los documentos sin importar la categoría.

**Estado del Documento:** filtra por el estado actual de cada documento:

| Estado | Badge | Descripción |
|--------|-------|-------------|
| **Todos los Documentos** | — | Vista sin filtro |
| **Activo** | Verde "Active" | El agente puede consultar este documento |
| **Borradores** | Naranja "Borrador" | En edición, el agente no lo usa todavía |
| **Archivado** | Gris "Archivado" | Desactivado, el agente no lo consulta |

### Panel derecho — Documentos

Lista todos los documentos según los filtros activos. Cuando la base está vacía muestra el mensaje: *"No se encontraron documentos. Haz clic en 'Añadir Documento' para crear tu primer documento."*

El contador en la esquina superior derecha (**"0 documentos"**) muestra cuántos documentos hay en la categoría o filtro activo.

---

## Qué tipos de información puedes guardar

La Base de Conocimientos acepta distintos tipos de contenido. Estos son los más útiles según el tipo de negocio:

| Tipo de contenido | Para qué sirve | Ejemplos |
|-------------------|----------------|---------|
| **Catálogo de productos** | El agente puede recomendar y describir productos con precio, SKU y características | Lista de productos con precios, variantes de talla/color |
| **Preguntas frecuentes** | Respuestas estandarizadas a las preguntas más comunes de tus clientes | "¿Hacen envíos internacionales?", "¿Cuál es el tiempo de entrega?" |
| **Servicios y tarifas** | El agente puede informar sobre lo que ofreces y cuánto cuesta | Menú de servicios, tarifas por hora, paquetes disponibles |
| **Políticas del negocio** | El agente aplica las reglas correctas sin inventar condiciones | Política de devoluciones, garantías, condiciones de pago |
| **Guías y procedimientos** | El agente puede guiar paso a paso en procesos específicos | Cómo hacer un pedido, cómo reagendar una cita, cómo instalar un producto |
| **Glosario de términos** | El agente entiende y usa correctamente los términos propios de tu industria o empresa | Siglas internas, nombres de productos propios, términos técnicos |
| **Horarios y ubicaciones** | El agente informa correctamente sin datos desactualizados | Horario de atención, sucursales, zonas de entrega |

---

## Preguntas frecuentes

**¿El agente lee todos los documentos en cada conversación?**

No. El sistema usa búsqueda semántica para encontrar solo los fragmentos más relevantes para cada pregunta. No "lee" toda la base de conocimientos en cada mensaje — busca de forma inteligente lo que necesita.

**¿Qué pasa si hay información contradictoria en dos documentos?**

El agente puede generar respuestas inconsistentes. Evita tener dos documentos con información que se contradiga sobre el mismo tema. Mantén una sola fuente de verdad por tema y archiva las versiones desactualizadas.

**¿El agente puede acceder a la Base de Conocimientos desde todos los canales?**

Sí. Una vez conectada al prompt activo, la Base de Conocimientos está disponible en todos los canales donde ese prompt esté activo: WhatsApp, Instagram, Messenger y Widget.

**¿Con qué frecuencia debo actualizar la Base de Conocimientos?**

Siempre que cambien los precios, servicios, políticas u otra información relevante. Una Base de Conocimientos desactualizada hace que el agente comparta información incorrecta con los clientes.
