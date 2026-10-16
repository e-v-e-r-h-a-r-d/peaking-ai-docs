---
title: Base de Conocimientos
description: "Dónde le das a tu agente la información de tu negocio: documentos, adjuntos y fichas técnicas. Cómo crearlos, activarlos y organizarlos."
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
| Que el agente envíe una foto o PDF al cliente | [Adjuntos](/04-base-conocimientos/adjuntos-y-fichas-tecnicas/#adjuntos) |
| Dar la ficha técnica de un producto | [Fichas técnicas](/04-base-conocimientos/adjuntos-y-fichas-tecnicas/#fichas-técnicas) |
| Probar si el agente usa lo que subí | [Laboratorio de pruebas](/05-agente-ia/estudio-de-prompts/probar-publicar-y-versiones/) |

## Las tres pestañas

| Pestaña | Para qué sirve |
|---|---|
| **Documentos** | Texto que el agente **lee** para responder (políticas, precios, FAQ) |
| **Adjuntos** | Imágenes y PDFs que el agente **envía** al cliente por WhatsApp cuando se cumple una condición |
| **Fichas técnicas** | PDFs técnicos ligados a productos, familias o categorías |

:::note[Quién puede administrar]
Crear, editar, cambiar estados y eliminar lo hacen los usuarios **Master** y **Administrador**.
:::

## Documentos

La pestaña **Documentos** muestra, a la izquierda, tus **Categorías** y, al centro, la lista con **Documento** y **Estado**. Al elegir uno, a la derecha ves su **Contenido**. Arriba de la lista se lee cuánto contexto tiene el agente: *«El agente lee N de M documentos»*, y cuántos quedan fuera.

Puedes buscar con **Buscar por título, categoría o contenido…**. Para actuar sobre varios documentos, selecciónalos con las casillas (o **Seleccionar todos**); aparece una barra con **Cambiar estado a…**, mover a la papelera y **Quitar selección**.

### Crear un documento

1. Haz clic en **Añadir Documento**.
2. Escribe el **título** y elige o crea una **categoría**.
3. Elige el **Modo de Contenido**: **Editor de Texto** (escribes ahí) o **Subir Archivo**.
4. Guarda.

### Subir un archivo

Con **Subir Archivo**, arrastra tu archivo o haz clic para seleccionarlo. Se aceptan **PDF, Word, PowerPoint, TXT, Markdown y JSON**, hasta **20 MB**. Peaking lo procesa en segundo plano (*«Procesando documento en segundo plano…»*); puedes cerrar el diálogo. Si tarda de más verás *«El procesamiento está tomando más tiempo del esperado»*; revisa más tarde.

### Estados: qué lee el agente

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

### Categorías

Las **Categorías** agrupan tus documentos. **Todas las categorías** muestra todo; usa **Buscar categoría** para encontrarlas. Crea una con **Nueva Categoría** o escribiendo una nueva al editar un documento.

### Editar, copiar y eliminar

En un documento: **Editar Documento**, **Copiar Contenido** y **Mover a la papelera**.

### Papelera

**Mover a la papelera** saca el documento del contexto del agente, pero **puedes restaurarlo**: abre **Ver papelera** y elige **Restaurar**. **Eliminar definitivamente** lo borra para siempre y no se puede deshacer.

## Preguntas frecuentes

**Subí un documento y el agente no lo usa.**
Revisa que su estado sea **Activo** y que ya haya terminado de procesarse.

**¿Qué diferencia hay entre Documentos y Adjuntos?**
Los documentos son lo que el agente **lee**; los adjuntos son archivos que **envía** al cliente.

**¿Dónde se prueba?**
En el [laboratorio de pruebas](/05-agente-ia/estudio-de-prompts/probar-publicar-y-versiones/): usa tu base de conocimientos al responder.
