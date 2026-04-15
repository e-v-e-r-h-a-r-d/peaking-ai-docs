---
title: Añadir y gestionar documentos
description: Cómo añadir documentos, URLs y preguntas frecuentes a tu Base de Conocimientos, y cómo gestionarlos con categorías y estados.
sidebar:
  order: 2
---

Añadir contenido a la Base de Conocimientos es el proceso de darle a tu agente de IA la información que necesita para responder con precisión. Puedes subir distintos tipos de documentos, organizarlos por categorías y controlar cuáles están activos usando los estados de cada documento.

---

## Cómo añadir un documento

### Paso 1 — Abre la Base de Conocimientos

En el panel lateral izquierdo, haz clic en **Base de Conocimientos**.

### Paso 2 — Haz clic en "+ Añadir Documento"

El botón azul **+ Añadir Documento** está en la esquina superior derecha. Al hacer clic se abrirá el formulario de creación.

### Paso 3 — Elige el tipo de documento

Selecciona el tipo de contenido que vas a agregar. Cada tipo tiene su propio formato de entrada:

| Tipo | Cuándo usarlo | Cómo se ingresa |
|------|---------------|-----------------|
| **Preguntas y Respuestas** | Preguntas frecuentes con su respuesta exacta | Campo de pregunta + campo de respuesta |
| **Guía de Productos** | Fichas de producto con nombre, descripción, precio y SKU | Formulario estructurado por producto |
| **Documento de texto** | Políticas, procedimientos, guías o cualquier texto libre | Editor de texto libre |
| **URL** | Páginas web públicas de tu negocio (sitio web, menú, catálogo online) | Campo de URL — Peaking extrae el contenido automáticamente |

:::tip[Preguntas y Respuestas es el tipo más efectivo]
Para información que recibes frecuentemente (preguntas sobre precios, horarios, políticas), el formato **Preguntas y Respuestas** produce los mejores resultados porque el agente puede mapear directamente la pregunta del cliente con la respuesta correcta.
:::

### Paso 4 — Completa el contenido

Rellena los campos según el tipo de documento elegido. Sé específico y usa el mismo vocabulario que usan tus clientes cuando preguntan. Cuanto más claro y directo sea el texto, mejores serán las respuestas del agente.

### Paso 5 — Asigna una categoría

Las **categorías** te ayudan a organizar tu Base de Conocimientos a medida que crece. Puedes crear categorías como: *Productos*, *Preguntas Frecuentes*, *Políticas*, *Servicios*, *Horarios*, etc.

Si no asignas una categoría, el documento quedará en **All Documents**.

### Paso 6 — Define el estado

Elige si el documento debe estar disponible para el agente de inmediato o guardarlo como borrador:

| Estado | Cuándo usarlo |
|--------|---------------|
| **Activo** | El documento está listo y quieres que el agente lo use de inmediato |
| **Borrador** | El contenido todavía está en revisión — el agente no lo consulta |

### Paso 7 — Guarda el documento

Haz clic en **Guardar**. El documento aparecerá en la lista con el estado que definiste.

---

## Gestionar documentos existentes

### Cambiar el estado de un documento

Puedes cambiar el estado de cualquier documento en cualquier momento:

- **Activo → Archivado:** cuando la información ya no es relevante pero quieres conservarla como referencia.
- **Borrador → Activo:** cuando terminas de revisar el contenido y está listo para que el agente lo use.
- **Activo → Borrador:** cuando necesitas editar información crítica sin que el agente use la versión incorrecta mientras editas.

:::caution[Los documentos Archivados no desaparecen]
Archivar un documento no lo elimina — simplemente deja de estar disponible para el agente. Puedes reactivarlo en cualquier momento.
:::

### Editar un documento

Haz clic en el documento que quieres editar. Modifica el contenido y guarda. El agente usará la versión actualizada de inmediato si el documento está en estado **Activo**.

### Eliminar un documento

Para eliminar un documento de forma permanente, entra al documento y usa la opción de eliminar. Esta acción no se puede deshacer. Si no estás seguro, usa **Archivar** en su lugar.

---

## Organizar con categorías

A medida que la Base de Conocimientos crece, las categorías te permiten encontrar documentos rápidamente y entender de qué trata cada sección.

**Categorías recomendadas según el tipo de negocio:**

| Negocio | Categorías sugeridas |
|---------|----------------------|
| Tienda / E-commerce | Productos, Envíos, Devoluciones, Preguntas Frecuentes |
| Clínica / Consultorio | Servicios, Precios, Citas, Seguros, Preguntas Frecuentes |
| Restaurante | Menú, Horarios, Pedidos a Domicilio, Alérgenos |
| Agencia Inmobiliaria | Propiedades en Venta, Propiedades en Renta, Proceso de Compra, Documentación |
| Academia / Escuela | Cursos, Precios, Horarios, Inscripciones, Preguntas Frecuentes |

---

## Buscar documentos

La barra **"Buscar por título, categoría o contenido..."** busca en tiempo real entre todos tus documentos. Útil cuando tienes decenas de entradas y necesitas encontrar una específica para editarla.

---

## Preguntas frecuentes

**¿Cuántos documentos puedo añadir?**

El límite depende del plan de Peaking que tengas contratado. Consulta la sección de **Billing** en Configuración para ver los límites de tu plan.

**¿Puedo subir un archivo PDF directamente?**

El método principal para añadir contenido es a través de los tipos de documento disponibles en el formulario. Para documentos extensos en PDF, copia el contenido relevante en un documento de texto dentro de la Base de Conocimientos o usa la URL si el PDF está publicado en línea.

**¿Cuánto tiempo tarda el agente en usar un documento recién añadido?**

Los documentos en estado **Activo** están disponibles para el agente de forma casi inmediata después de guardarlos.

**¿Puedo añadir contenido en inglés si mi agente responde en español?**

Sí. El agente puede consultar documentos en inglés y responder al cliente en español. Sin embargo, para mejores resultados, se recomienda tener el contenido en el mismo idioma en que responderá el agente.

**¿Qué pasa si añado una URL que después cambia su contenido?**

Peaking extrae el contenido en el momento en que añades la URL. Los cambios posteriores en la página no se reflejan automáticamente — tendrás que actualizar el documento manualmente o volver a añadir la URL.
