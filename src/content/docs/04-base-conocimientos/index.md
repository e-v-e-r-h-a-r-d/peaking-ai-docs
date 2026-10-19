---
title: Base de Conocimientos
description: "Documentos, adjuntos y fichas técnicas que tu agente consulta para responder con precisión."
sidebar:
  order: 1
---

La **Base de Conocimientos** es la información de tu negocio que el agente lee para responder: tus políticas, precios, preguntas frecuentes, catálogos y fichas. Lo encuentras en el menú lateral como **Base de Conocimientos**, con tres pestañas: **Documentos**, **Adjuntos** y **Fichas técnicas**.

[CAPTURA PENDIENTE: Base de Conocimientos con las tres pestañas, la lista de documentos con categorías y la vista previa]

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Que el agente conozca mis políticas o preguntas frecuentes | [Crear un documento](#crear-un-documento) |
| Subir un PDF, Word o PowerPoint como conocimiento | [Subir un archivo](#subir-un-archivo) |
| Que el agente deje de usar un documento | [Estados](#estados-qué-lee-el-agente) |
| Organizar por temas | [Categorías](#categorías) |
| Recuperar un documento borrado | [Papelera](#papelera) |
| Que el agente envíe una foto o PDF al cliente | [Adjuntos](/04-base-conocimientos/#adjuntos) |
| Dar la ficha técnica de un producto | [Fichas técnicas](/04-base-conocimientos/#fichas-técnicas) |
| Probar si el agente usa lo que subí | [Laboratorio de pruebas](/05-agente-ia/estudio-de-prompts/probar-publicar-y-versiones/) |
| Que el agente mande una foto o PDF cuando el cliente la pida | [Adjuntos](#adjuntos) |
| Pausar un archivo sin borrarlo | [Activar y pausar](#activar-y-pausar) |
| Ligar una ficha técnica a un producto | [Fichas técnicas](#fichas-técnicas) |
| Saber por qué la ficha no se envía | [Preguntas frecuentes](#preguntas-frecuentes) |

## Base de Conocimientos

### Las tres pestañas

| Pestaña | Para qué sirve |
|---|---|
| **Documentos** | Texto que el agente **lee** para responder (políticas, precios, FAQ) |
| **Adjuntos** | Imágenes y PDFs que el agente **envía** al cliente por WhatsApp cuando se cumple una condición |
| **Fichas técnicas** | PDFs técnicos ligados a productos, familias o categorías |

:::note[Quién puede administrar]
Crear, editar, cambiar estados y eliminar lo hacen los usuarios **Master** y **Administrador**.
:::

### Documentos

La pestaña **Documentos** muestra, a la izquierda, tus **Categorías** y, al centro, la lista con **Documento** y **Estado**. Al elegir uno, a la derecha ves su **Contenido**. Arriba de la lista se lee cuánto contexto tiene el agente: *«El agente lee N de M documentos»*, y cuántos quedan fuera.

Puedes buscar con **Buscar por título, categoría o contenido…**. Para actuar sobre varios documentos, selecciónalos con las casillas (o **Seleccionar todos**); aparece una barra con **Cambiar estado a…**, mover a la papelera y **Quitar selección**.

#### Crear un documento

1. Haz clic en **Añadir Documento**.
2. Escribe el **título** y elige o crea una **categoría**.
3. Elige el **Modo de Contenido**: **Editor de Texto** (escribes ahí) o **Subir Archivo**.
4. Guarda.

:::tip[Texto directo = mejores respuestas]
El **Editor de Texto** da los mejores resultados porque el agente puede encontrar fragmentos exactos. **Subir Archivo** sirve para documentos largos que ya tienes listos; para preguntas frecuentes, políticas y catálogos conviene el texto estructurado.
:::

#### Subir un archivo

Con **Subir Archivo**, arrastra tu archivo o haz clic para seleccionarlo. Se aceptan **PDF, Word, PowerPoint, TXT, Markdown y JSON**, hasta **20 MB**. Peaking lo procesa en segundo plano (*«Procesando documento en segundo plano…»*); puedes cerrar el diálogo. Si tarda de más verás *«El procesamiento está tomando más tiempo del esperado»*; revisa más tarde.

#### Estados: qué lee el agente

Cada documento tiene un estado, y **la IA solo usa documentos activos**:

| Estado | Qué hace el agente |
|---|---|
| **Activo** | Lo lee al responder |
| **Borrador** | No lo toma en cuenta |
| **Archivado** | No lo toma en cuenta |
| **Desactivado** | No lo toma en cuenta |
| **En papelera** | No lo toma en cuenta; se puede restaurar |
| **Procesando / Error** | Aparecen al subir un archivo: *Procesando* mientras se lee y *Error* si falló |

Cambia el estado desde **Cambiar estado** en el documento, o en bloque desde la barra de selección.

#### Categorías

Las **Categorías** agrupan tus documentos. **Todas las categorías** muestra todo; usa **Buscar categoría** para encontrarlas. Crea una con **Nueva Categoría** o escribiendo una nueva al editar un documento.

#### Editar, copiar y eliminar

En un documento: **Editar Documento**, **Copiar Contenido** y **Mover a la papelera**.

#### Papelera

**Mover a la papelera** saca el documento del contexto del agente, pero **puedes restaurarlo**: abre **Ver papelera** y elige **Restaurar**. **Eliminar definitivamente** lo borra para siempre y no se puede deshacer.

## Adjuntos y fichas técnicas

Además de los documentos que el agente **lee**, la [Base de Conocimientos](/04-base-conocimientos/) guarda archivos que el agente **envía**: los **Adjuntos** y las **Fichas técnicas**.

[CAPTURA PENDIENTE: pestaña Adjuntos con la lista y la vista previa, y pestaña Fichas técnicas con la columna «Vinculada a»]

### Adjuntos

**Adjuntos disponibles para todos los agentes.** Son imágenes o PDFs que cualquier agente de tus workflows puede enviar. El agente decide cuándo hacerlo según el campo **Cuándo enviar**. **Solo funcionan en WhatsApp.**

#### Agregar un adjunto

1. En la pestaña **Adjuntos**, haz clic en **Agregar adjunto**.
2. Arrastra una imagen (JPG, PNG, WEBP o GIF) o un PDF, máximo **50 MB**.
3. Escribe el **Nombre** (ej. *Frasco OBS pastillas*) y la **Descripción**.
4. Escribe **Cuándo enviar**: la condición con la que el agente lo manda. Ej.: *«Cuando el cliente pregunte cómo se ve el frasco o pida foto del producto»*.
5. Guarda con **Guardar adjunto**.

Necesitas un archivo, un nombre y la condición; sin ellos verás *«Campos requeridos»*. El agente usa la nueva información desde el siguiente mensaje.

:::tip[El «cuándo» es una instrucción para la IA]
Es un mini prompt. Cómo escribir uno bueno y dónde más se usa: [Instrucciones del agente](/05-agente-ia/instrucciones-del-agente/#adjuntos-de-la-base-de-conocimientos).
:::

#### Activar y pausar

Cada adjunto está **Activo** o **Pausado**. **El agente solo envía adjuntos activos.** En la lista, filtra por **Todos los adjuntos**, **Activos** o **Pausados**, y busca por nombre, descripción o *cuándo enviar*. Al elegir un adjunto ves su vista previa, su **Tipo**, cuándo se **Agregó** y *«El agente lo envía cuando…»*, con **Activar** / **Pausar**. También puedes activar, pausar o eliminar varios a la vez.

Al eliminar uno, el agente deja de poder enviarlo. No se puede deshacer.

### Fichas técnicas

Una **ficha técnica** es un PDF que el agente puede compartir de un producto. Viven en una biblioteca y se **vinculan** a lo que corresponda.

#### Agregar una ficha

1. En la pestaña **Fichas técnicas**, agrega una ficha con un **PDF** y un **Nombre** (ej. *Extintor CO₂ 10 lb*).
2. Al guardar verás *«Ficha agregada. Ya está en la biblioteca. Vincúlala a un producto/familia/categoría»*.

#### Vincularla

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

### Base de Conocimientos: preguntas

**Subí un documento y el agente no lo usa.**
Revisa que su estado sea **Activo** y que ya haya terminado de procesarse.

**¿Qué diferencia hay entre Documentos y Adjuntos?**
Los documentos son lo que el agente **lee**; los adjuntos son archivos que **envía** al cliente.

**¿Dónde se prueba?**
En el [laboratorio de pruebas](/05-agente-ia/estudio-de-prompts/probar-publicar-y-versiones/): usa tu base de conocimientos al responder.

### Adjuntos y fichas técnicas: preguntas

**El agente no manda mi adjunto.**
Revisa que esté **Activo**, que el **Cuándo enviar** sea claro y que la conversación sea por WhatsApp.

**El agente no usa mi ficha técnica.**
Verifica que esté vinculada a un producto, familia o categoría.

**¿Adjunto o documento del prompt?**
Los adjuntos sirven a todos los agentes; los documentos del prompt son de un solo prompt. Ver [Instrucciones del agente](/05-agente-ia/instrucciones-del-agente/).
