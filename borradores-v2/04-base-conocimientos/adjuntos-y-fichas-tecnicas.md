---
title: Adjuntos y fichas técnicas
description: "Los archivos que tu agente envía al cliente: adjuntos con una condición «cuándo enviar» y fichas técnicas ligadas a tus productos."
sidebar:
  order: 2
---

Además de los documentos que el agente **lee**, la [Base de Conocimientos](/04-base-conocimientos/) guarda archivos que el agente **envía**: los **Adjuntos** y las **Fichas técnicas**.

[CAPTURA PENDIENTE: pestaña Adjuntos con la lista y la vista previa, y pestaña Fichas técnicas con la columna «Vinculada a»]

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Que el agente mande una foto o PDF cuando el cliente la pida | [Adjuntos](#adjuntos) |
| Pausar un archivo sin borrarlo | [Activar y pausar](#activar-y-pausar) |
| Ligar una ficha técnica a un producto | [Fichas técnicas](#fichas-técnicas) |
| Saber por qué la ficha no se envía | [Preguntas frecuentes](#preguntas-frecuentes) |

## Adjuntos

**Adjuntos disponibles para todos los agentes.** Son imágenes o PDFs que cualquier agente de tus workflows puede enviar. El agente decide cuándo hacerlo según el campo **Cuándo enviar**. **Solo funcionan en WhatsApp.**

### Agregar un adjunto

1. En la pestaña **Adjuntos**, haz clic en **Agregar adjunto**.
2. Arrastra una imagen (JPG, PNG, WEBP o GIF) o un PDF, máximo **50 MB**.
3. Escribe el **Nombre** (ej. *Frasco OBS pastillas*) y la **Descripción**.
4. Escribe **Cuándo enviar**: la condición con la que el agente lo manda. Ej.: *«Cuando el cliente pregunte cómo se ve el frasco o pida foto del producto»*.
5. Guarda con **Guardar adjunto**.

Necesitas un archivo, un nombre y la condición; sin ellos verás *«Campos requeridos»*. El agente usa la nueva información desde el siguiente mensaje.

:::tip[El «cuándo» es una instrucción para la IA]
Es un mini prompt. Cómo escribir uno bueno y dónde más se usa: [Instrucciones del agente](/05-agente-ia/instrucciones-del-agente/#adjuntos-de-la-base-de-conocimientos).
:::

### Activar y pausar

Cada adjunto está **Activo** o **Pausado**. **El agente solo envía adjuntos activos.** En la lista, filtra por **Todos los adjuntos**, **Activos** o **Pausados**, y busca por nombre, descripción o *cuándo enviar*. Al elegir un adjunto ves su vista previa, su **Tipo**, cuándo se **Agregó** y *«El agente lo envía cuando…»*, con **Activar** / **Pausar**. También puedes activar, pausar o eliminar varios a la vez.

Al eliminar uno, el agente deja de poder enviarlo. No se puede deshacer.

## Fichas técnicas

Una **ficha técnica** es un PDF que el agente puede compartir de un producto. Viven en una biblioteca y se **vinculan** a lo que corresponda.

### Agregar una ficha

1. En la pestaña **Fichas técnicas**, agrega una ficha con un **PDF** y un **Nombre** (ej. *Extintor CO₂ 10 lb*).
2. Al guardar verás *«Ficha agregada. Ya está en la biblioteca. Vincúlala a un producto/familia/categoría»*.

### Vincularla

Abre **Vinculada a** en la ficha y elige a qué se liga, con tres pestañas:

| Se liga a… | Cómo |
|---|---|
| **Producto** | Busca por nombre o SKU |
| **Familia** | Elige de la lista de familias |
| **Categoría** | Elige de la lista de categorías |

Una ficha puede tener varios vínculos (se muestran como *Producto +2*, por ejemplo). Desvincúlala desde **Vínculos actuales**.

:::caution[Sin vínculo, el agente no la usa]
Una ficha sin producto muestra el aviso *«Esta ficha no tiene producto. El agente no la usará hasta vincularla.»*
:::

También puedes buscar (**Buscar ficha o producto…**), activar o eliminar varias a la vez. Al eliminar una ficha se quita de la biblioteca y de todos sus productos.

## Preguntas frecuentes

**El agente no manda mi adjunto.**
Revisa que esté **Activo**, que el **Cuándo enviar** sea claro y que la conversación sea por WhatsApp.

**El agente no usa mi ficha técnica.**
Verifica que esté vinculada a un producto, familia o categoría.

**¿Adjunto o documento del prompt?**
Los adjuntos sirven a todos los agentes; los documentos del prompt son de un solo prompt. Ver [Instrucciones del agente](/05-agente-ia/instrucciones-del-agente/).
