---
title: Estudio de Prompts
description: "La biblioteca donde creas, ordenas y administras los prompts de tu agente de IA: qué prompts tienes, cuáles se usan y dónde."
sidebar:
  order: 1
---

**Estudio de Prompts** es la biblioteca donde viven todos los prompts de tu agente. Aquí los creas, los buscas, ves cuáles se están usando y los asignas a tus canales. Lo encuentras en el menú lateral como **Estudio de Prompts**.

:::note[Quién lo ve]
Solo los usuarios **Master** y **Administrador** pueden crear, editar, asignar o eliminar prompts. Si tu rol es Usuario verás el aviso *«Se requieren permisos de administrador»*.
:::

[CAPTURA PENDIENTE: pantalla Estudio de Prompts con la lista de tarjetas, el buscador, los filtros y el botón Nuevo prompt]

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Crear mi primer prompt | [Nuevo prompt](#crear-un-prompt) |
| Encontrar un prompt | [Buscar, filtrar y ordenar](#buscar-filtrar-y-ordenar) |
| Saber si un prompt se está usando | [Qué muestra cada tarjeta](#qué-muestra-cada-tarjeta) |
| Cambiar qué canal usa qué prompt | [Asignar canales](#acciones-de-cada-prompt) |
| Volver a una versión anterior | [Historial de versiones](/05-agente-ia/estudio-de-prompts/probar-publicar-y-versiones/) |
| Probar cómo responde el agente | [Laboratorio de pruebas](/05-agente-ia/estudio-de-prompts/probar-publicar-y-versiones/) |
| Escribir o mejorar el contenido | [Crear y editar un prompt](/05-agente-ia/estudio-de-prompts/crear-y-editar-un-prompt/) |
| Hacer que el agente envíe archivos, etiquete o escale con una instrucción | [Instrucciones del agente](/05-agente-ia/instrucciones-del-agente/) |

## Cómo se organiza

Un **prompt** es el conjunto de instrucciones que le dice al agente quién es, qué busca lograr, cómo conversa y qué herramientas usa. Tienes varios prompts y decides **dónde se usa cada uno**:

- En un **canal** (por ejemplo, tu WhatsApp): responde con el prompt asignado cuando ningún workflow toma la conversación. Cada canal usa **un solo prompt**.
- En un **workflow**: eliges el prompt en el nodo de agente. Ver [Workflows](/05-agente-ia/workflows/).

## Crear un prompt

Haz clic en **Nuevo prompt**. Se abre el editor, donde escribes el contenido por secciones y lo publicas. Todo el detalle está en [Crear y editar un prompt](/05-agente-ia/estudio-de-prompts/crear-y-editar-un-prompt/).

Si aún no tienes ninguno verás *«No se encontraron prompts. Crea tu primer prompt para comenzar.»*

## Buscar, filtrar y ordenar

Arriba de la lista:

| Control | Qué hace |
|---|---|
| **Buscar prompt…** | Filtra por nombre |
| **Todos / Usados (30 días) / Sin uso** | Muestra todos, solo los que el agente usó en los últimos 30 días, o los que no tuvieron uso. Cada opción trae su conteo |
| **Ordenar** | **Editados recientemente**, **Alfabético**, **Más usados**, **Publicados primero** o **Más conectados (workflows + canales)** |
| Botón de **invertir orden** | Cambia el sentido del orden elegido |
| **Abrir el laboratorio de prompts** | Abre el chat de pruebas |

Si ningún prompt coincide verás *«Sin prompts con esos filtros»*; prueba otro nombre o filtro.

## Qué muestra cada tarjeta

| Dato | Significa |
|---|---|
| **Estado** | **Publicado**, **Borrador** o **No activo** |
| **Editado hace…** | Cuándo se modificó por última vez |
| **Descripción** | La que escribiste (o *«Sin descripción»*) |
| **Workflows** | Los workflows que usan este prompt, o *«Sin workflows todavía»*. Cada uno indica su estado: *publicado y activo* (el agente usa este prompt), *activo pero con cambio sin publicar*, o *inactivo / sin publicar* |
| **N usos en 30 días** | Cuántas veces lo usó el agente en el último mes, o *«Sin usos en 30 días»* |

## Acciones de cada prompt

En la tarjeta, **Editar** abre el editor. El menú **Más acciones** (⋯) ofrece:

| Acción | Qué hace |
|---|---|
| **Editar** | Abre el prompt en el editor |
| **Asignar canales** | Abre la pestaña *Canales y herramientas* del editor, donde eliges qué canales usan este prompt |
| **Historial de versiones** | Compara versiones y permite revertir |
| **Eliminar** | Borra el prompt. Pide confirmación y no se puede deshacer |

## Preguntas frecuentes

**No veo Estudio de Prompts en el menú.**
Es exclusivo de Master y Administrador.

**¿Cuántos prompts puede usar un canal?**
Uno. Para repartir una conversación entre varios agentes, usa un [workflow](/05-agente-ia/workflows/).

**Eliminé un prompt por error.**
La eliminación es definitiva. Si solo querías volver a un contenido anterior, usa el [historial de versiones](/05-agente-ia/estudio-de-prompts/probar-publicar-y-versiones/) antes de eliminar.
