---
title: Agente de voz
description: "Atiende llamadas con IA: compra o conecta un número, crea un agente de voz con las instrucciones de tu prompt o workflow, pruébalo y revisa el historial de llamadas."
sidebar:
  order: 3
---

El **Agente de voz** atiende **llamadas telefónicas** con IA en tu propio número. Está en **Configuración › Integraciones › Agentes de voz** (categoría Desarrolladores). Se acuerda con el equipo de Ventas de Peaking, que lo activa en tu organización; el uso se mide aparte de tu plan: ver [Plan › Plan de voz](/08-configuracion/cuenta/plan/#plan-de-voz).

:::note[Cuándo está disponible]
Es una función habilitada por organización. Si no ves la tarjeta **Agentes de voz**, pídele a Peaking que la active. Cuando la tienes, aparece también el canal **Llamadas** en [Mensajes](/05-conversaciones/#canales-y-números).
:::

[CAPTURA PENDIENTE: panel Agentes de voz con Números de teléfono, la lista de agentes, el diálogo de configuración y el historial de llamadas]

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Conseguir un número de teléfono | [Números de teléfono](#números-de-teléfono) |
| Crear el agente que contesta | [Crear un agente](#crear-un-agente) |
| Usar mi prompt o workflow como cerebro | [Instrucciones del agente](#instrucciones-del-agente) |
| Asignar el agente a un número | [Conectar agente y número](#conectar-agente-y-número) |
| Probarlo antes de publicar | [Probar](#probar-el-agente) |
| Ver llamadas y transcripciones | [Historial de llamadas](#historial-de-llamadas) |
| Controlar mis minutos | [Plan de voz](/08-configuracion/cuenta/plan/#uso-de-voz-del-periodo) |

## Números de teléfono

*Gestiona tus números de teléfono.* En **Números de Teléfono**:

1. **Buscar Números Disponibles**: elige **País** y **Código de Área**.
2. En los resultados verás **Costo Mensual**, **Capacidades** y **Región**. Haz clic en **Comprar** (*«Número de teléfono comprado exitosamente»*).
3. Para quitar uno, **Liberar** (pide confirmar; no se puede deshacer).

Si aún no tienes números: *«Sin Números de Teléfono. Busca y compra tu primer número para comenzar.»*

## Crear un agente

*Configura tus agentes conversacionales.* Con **Crear Agente** completas:

| Campo | Qué es |
|---|---|
| **Nombre del Agente** | Ej. *Asistente de Ventas* |
| **Primer Mensaje** | Lo primero que dice al contestar. Por defecto avisa que es un asistente virtual y que la llamada puede grabarse |
| **Voz** e **Idioma** | La voz y el idioma de la llamada |
| **Instrucciones del agente** | Ver abajo |

### Instrucciones del agente

Elige de dónde toma sus instrucciones:

| Fuente | Qué usa |
|---|---|
| **Texto propio** | Un *Prompt del Sistema* que escribes aquí |
| **Prompt de Prompt Studio** | Uno de tus [prompts](/05-agente-ia/estudio-de-prompts/) |
| **Agente de un workflow** | El nodo **Agente** de un [workflow](/05-agente-ia/workflows/) publicado |

Con las dos últimas, la llamada usa **el mismo prompt, reglas innegociables y herramientas que el chat**, adaptado a llamada. Si cambias el prompt o publicas el workflow, pulsa **Resincronizar** (*«Agente de voz actualizado»*); la lista muestra cuándo se **sincronizó** por última vez. Si un nodo usa herramientas que ya no existen, verás un aviso: tampoco funcionan en el chat; corrígelas en el workflow.

## Conectar agente y número

En un número, **Conectar Agente** y elige el agente (*«Selecciona un agente»*). Verás *«Agente conectado al número de teléfono»*; el número muestra **Conectado**. **Desconectar** los separa.

## Probar el agente

El panel de pruebas conecta una llamada de prueba con el agente (*«Connecting to agent…»*) para escucharlo antes de publicarlo.

## Historial de llamadas

**Historial de Llamadas** lista **Llamante**, **Duración** y **Fecha**, con registros y transcripciones. Aparecen al recibir llamadas (*«Sin llamadas aún»* si no hay). **Sincronizar** actualiza la lista. Las conversaciones de llamada también llegan a [Mensajes](/05-conversaciones/) como canal **Llamadas** y **no se pueden responder desde ahí**.

## Límites

Cada plan de voz incluye minutos y un tope mensual, según lo acordado con Ventas; al llegar al **límite duro** las llamadas nuevas se bloquean. Detalle en [Plan › Uso de voz](/08-configuracion/cuenta/plan/#uso-de-voz-del-periodo).

## Preguntas frecuentes

**El agente de voz responde distinto al chat.**
Si usa *Texto propio*, tiene sus propias instrucciones. Para igualarlo usa *Prompt de Prompt Studio* o *Agente de un workflow* y pulsa **Resincronizar** tras cada cambio.

**¿Puedo responder una llamada desde Mensajes?**
No. Son conversaciones de una llamada telefónica.

**Compré un número y no contesta nadie.**
Falta **Conectar Agente** al número.
