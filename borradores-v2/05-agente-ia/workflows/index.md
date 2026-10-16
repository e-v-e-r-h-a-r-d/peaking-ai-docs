---
title: Workflows
description: "Automatiza conversaciones con flujos visuales: organiza tus workflows por proyecto, actívalos o páusalos y revisa de un vistazo cómo les va."
sidebar:
  order: 1
---

Los **Workflows** son flujos visuales que definen lo que tu agente hace por su cuenta: qué agente responde, qué decisión toma según lo que escribe el cliente, cuánto espera antes de dar seguimiento y cuándo avisa a otro sistema.

Esta página explica la **lista de workflows**: cómo se organizan, cómo se activan y cómo ver si funcionan. Para construir uno, ve a [El editor y sus nodos](/05-agente-ia/workflows/editor-y-nodos/).

:::note[Antes de empezar]
Workflows aparece en el menú solo si el módulo **Workflows** está activo y tu rol es **Master** o **Administrador**. Un Master puede activarlo en [Módulos](/08-configuracion/cuenta/modulos/).
:::

[CAPTURA PENDIENTE: lista de workflows con los 4 indicadores arriba y los proyectos como carpetas]

## Los cuatro indicadores

Arriba de la lista verás un resumen de cómo está funcionando tu automatización:

| Indicador | Qué te dice |
|-----------|-------------|
| **Flujos activos** | Cuántos de tus flujos están activos, del total que tienes |
| **Ejecuciones este mes** | Cuántas veces se ejecutaron tus flujos, comparado con el mes pasado |
| **Terminaron con éxito** | Porcentaje de ejecuciones terminadas que llegaron al final (completadas ÷ completadas + fallidas). Indica también cuántas están en espera o detenidas por respuesta del cliente |
| **Última ejecución** | Qué flujo se ejecutó más recientemente |

<!-- VERIFICAR: periodo exacto de «este mes» (calendario o últimos 30 días); la fórmula del porcentaje está confirmada en dev1. -->

## Proyectos y flujos

Tus workflows se organizan en dos niveles:

- **Proyecto**: una carpeta que agrupa los flujos de una misma cuenta o línea de negocio. Cada carpeta indica cuántos de sus flujos están activos.
- **Flujo (workflow)**: la automatización en sí.

Los **canales se conectan por proyecto**. Eso significa que dos flujos del mismo proyecto no pueden atender el mismo canal a la vez.

### Crear un proyecto

1. Haz clic en **Nuevo Proyecto**.
2. Escribe el **Nombre del proyecto**.
3. Haz clic en **Crear**.

### Crear un workflow

1. Dentro del proyecto, haz clic en **Nuevo workflow en** *[nombre del proyecto]*.
2. Escribe el **nombre del flujo** y agrégalo.
3. Se abre el editor para que lo armes.

Si el proyecto está vacío, verás *"Carpeta vacía · crear un workflow"*. Y si aún no tienes ningún proyecto: *"Crea un proyecto para comenzar"*.

:::tip[Un flujo por canal]
Si tienes WhatsApp y Messenger activos, crea un flujo para cada canal. Así personalizas cada uno sin mezclar lógica.
:::

## Los tres estados de un flujo

| Estado | Qué significa |
|--------|---------------|
| **Activo** | Está atendiendo mensajes del canal que tiene conectado |
| **En pausa** | Está publicado pero no recibe mensajes |
| **Borrador** | Aún no se ha publicado |

## Activar o pausar un flujo

Cada flujo tiene un interruptor **Activar** en la lista. Hay dos reglas:

:::caution[Publica antes de activar]
Un flujo solo se puede activar después de **publicarlo**. Si intentas activarlo sin publicar, verás: *"Publica el workflow desde el editor para poder activarlo"*. Aprende cómo en [Publicar, probar y revisar ejecuciones](/05-agente-ia/workflows/publicar-probar-y-ejecuciones/).
:::

:::caution[Un canal, un flujo activo por proyecto]
Si otro flujo del mismo proyecto ya atiende ese canal, Peaking no te deja activar el nuevo y te indica cuál es. Pausa primero el flujo que ya lo atiende.
:::

## Ver el detalle de un flujo

Al seleccionar un flujo en la lista, aparece un panel con su detalle:

- **Ejecuciones · 30 días** y su porcentaje de **Éxito**.
- Los **pasos** que lo componen. Si aún no tiene pasos, verás *"Ábrelo en el editor para armarlo"*.
- El botón **Abrir editor**.

## Eliminar un workflow

En la lista de Workflows, selecciona el flujo y usa **Eliminar** en su panel de detalle (junto a **Abrir editor**). Al eliminar un workflow se pierden **todos sus nodos, conexiones y versiones publicadas**. Esta acción no se puede deshacer.

<!-- VERIFICAR: si se puede eliminar un flujo con versión publicada activa (el botón aparece siempre en dev1). -->

## Qué sigue

- [El editor y sus nodos](/05-agente-ia/workflows/editor-y-nodos/): arma el flujo.
- [Publicar, probar y revisar ejecuciones](/05-agente-ia/workflows/publicar-probar-y-ejecuciones/): ponlo en marcha.
