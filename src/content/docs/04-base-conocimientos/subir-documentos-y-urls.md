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

El botón naranja **+ Añadir Documento** está en la esquina superior derecha. Al hacer clic se abrirá el formulario de creación.

![Modal Crear Nuevo Documento con campos de título, estado, categorías y editor de contenido](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/04-base-conocimientos/crear-nuevo-documento-kb.png)

### Paso 3 — Completa el formulario

| Campo | Descripción |
|-------|-------------|
| **Title** | Nombre del documento — úsalo para identificarlo fácilmente en la lista |
| **Status** | Estado inicial: **Active** (disponible para el agente inmediatamente) o **Borrador** (en revisión) |
| **Categories** | Organiza el documento en una categoría temática (ej. Productos, Políticas, FAQ). Escribe el nombre y presiona **+** para crearla |

### Paso 4 — Elige el modo de contenido

El formulario tiene dos modos:

| Modo | Cuándo usarlo |
|------|---------------|
| **Text Editor** | Escribe o pega el contenido directamente en el editor enriquecido (negrita, listas, código, links) |
| **File Upload** | Sube un archivo PDF, Word u otro documento — Peaking extrae el contenido automáticamente |

:::tip[Texto directo = mejores respuestas]
El **Text Editor** produce los mejores resultados porque el agente puede buscar fragmentos exactos. El File Upload es útil para documentos extensos que ya tienes listos, pero el texto estructurado y directo siempre es preferible para FAQs, políticas y catálogos.
:::

### Paso 5 — Guarda el documento

Haz clic en **Create Document**. El documento aparecerá en la lista con el estado que definiste y el agente podrá usarlo de inmediato si está en estado **Active**.

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

Sí. En el formulario de creación, selecciona el modo **File Upload** y arrastra o selecciona tu PDF. Peaking extrae el contenido automáticamente. Para documentos extensos, considera también copiar el contenido clave en el **Text Editor** para mayor control sobre qué fragmentos consulta el agente.

**¿Cuánto tiempo tarda el agente en usar un documento recién añadido?**

Los documentos en estado **Activo** están disponibles para el agente de forma casi inmediata después de guardarlos.

**¿Puedo añadir contenido en inglés si mi agente responde en español?**

Sí. El agente puede consultar documentos en inglés y responder al cliente en español. Sin embargo, para mejores resultados, se recomienda tener el contenido en el mismo idioma en que responderá el agente.

**¿Qué pasa si añado una URL que después cambia su contenido?**

Peaking extrae el contenido en el momento en que añades la URL. Los cambios posteriores en la página no se reflejan automáticamente — tendrás que actualizar el documento manualmente o volver a añadir la URL.

---

## Agregar adjuntos

Los **Adjuntos** son archivos (imágenes o PDFs) que el agente puede enviar al cliente directamente en el chat de WhatsApp — por ejemplo, una ficha técnica, un catálogo en PDF o una foto del producto.

![Pestaña Adjuntos con un adjunto PNG de ejemplo y botón Agregar adjunto](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/04-base-conocimientos/adjuntos-kb.png)

Para agregar un adjunto:

1. Ve a **Base de Conocimientos** y selecciona la pestaña **Adjuntos**.
2. Haz clic en **+ Agregar adjunto**.

![Modal Agregar adjunto con zona de carga, campos Nombre, Descripción y Cuándo enviar](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/04-base-conocimientos/menu-subir-adjuntos-kb.png)

3. Completa el formulario:

| Campo | Descripción |
|-------|-------------|
| **Archivo** | Arrastra o selecciona el archivo (JPG, PNG, WEBP, GIF o PDF · máx. 50 MB) |
| **Nombre** *(requerido)* | Identificador del adjunto — ej. "Frasco OBS pastillas" |
| **Descripción** | Breve descripción del contenido del archivo |
| **Cuándo enviar** *(requerido)* | Instrucción en lenguaje natural que le indica al agente cuándo enviar este archivo — ej. *"Cuando el cliente pregunte cómo se ve el frasco o pida foto del producto"* |

4. Haz clic en **Guardar adjunto**.

:::tip[La instrucción "Cuándo enviar" es la clave]
El agente usa este campo para decidir si enviar o no el adjunto en cada conversación. Sé específico: en lugar de "cuando pregunte por el producto", escribe "cuando el cliente pida una foto, imagen o ficha del producto X".
:::

:::note[Solo WhatsApp]
Los adjuntos solo funcionan en canales de **WhatsApp**. No están disponibles en Instagram, Messenger o el Widget.
:::
