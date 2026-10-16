---
title: Probar, versiones y laboratorio
description: "Prueba cómo responde tu agente en el laboratorio y compara o revierte versiones de un prompt desde el historial."
sidebar:
  order: 3
---

Antes y después de publicar un prompt puedes **probarlo** en el laboratorio y, si algo sale mal, **volver a una versión anterior**.

[CAPTURA PENDIENTE: laboratorio de pruebas abierto sobre el editor y el historial de versiones con dos versiones comparadas]

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Ver cómo responde el agente | [Laboratorio de pruebas](#laboratorio-de-pruebas) |
| Comparar dos versiones de un prompt | [Historial de versiones](#historial-de-versiones) |
| Volver a una versión anterior | [Revertir](#revertir-a-una-versión) |

## Laboratorio de pruebas

El **Laboratorio de Pruebas** es un chat flotante para simular una conversación con tus prompts y tu base de conocimientos. Se abre de dos formas:

- Desde la lista, con **Abrir el laboratorio de prompts**.
- Desde el editor, con **Probar agente**.

Para usarlo:

1. En **Selecciona un prompt para probar**, elige el prompt.
2. Escribe un mensaje en **Escribe aquí tu mensaje** y envíalo. Verás *«IA está pensando…»*.
3. Arriba se indica con qué estás probando: *Prompt: …* y cuántos documentos de conocimiento se usan.

Otros controles: **Limpiar Chat**, **Cerrar** y arrastrar la ventana para moverla.

:::caution[Prueba la versión publicada]
**Probar agente** usa la versión **publicada** del prompt. Si acabas de editar, publica primero. Si no hay documentos en la base de conocimientos verás *«La respuesta será básica»*.
:::

## Historial de versiones

Cada vez que editas un prompt queda registrada una versión. Para verlas, en la lista abre **Más acciones › Historial de versiones**.

- Elige una versión **Base** y otra para **Comparar**; se resaltan las diferencias (*«No hay diferencias entre estas dos versiones»* si son iguales).
- Cada versión indica la más **actual** y desde dónde se editó (**Prompt Studio** o **MCP**).
- Si aún no hay versiones: *«El historial empieza a registrarse desde la próxima edición»*.

## Revertir a una versión

1. Abre el historial y elige la versión.
2. Haz clic en **Revertir a esta versión** y confirma.

Se crea una **nueva versión** con el contenido de la elegida y el prompt se actualiza **de inmediato en todos los canales asignados**. El contenido anterior no se pierde: queda en el historial. Si hay cambios sin publicar en el editor, se descartan al revertir.

## Preguntas frecuentes

**¿Revertir borra versiones?**
No. Crea una versión nueva; todo queda en el historial.

**El historial está vacío.**
Solo registra a partir de la siguiente edición después de que se activó.
