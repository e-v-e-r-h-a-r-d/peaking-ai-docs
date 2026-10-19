---
title: Tareas
description: "Lo que tu equipo y el agente tienen por hacer: tablero por etapas, lista, calendario, ajustes, actividades y asignación."
sidebar:
  order: 1
---

**Tareas** (*Gestiona tus tareas y asignaciones de equipo*) es el tablero de lo que el equipo —y el agente— tiene **por hacer**. Cada tarea se llama también **TODO**. El agente puede crearlas solo, por ejemplo cuando una conversación necesita seguimiento humano. Lo encuentras en el menú lateral como **Tareas**.

:::note[Cuándo está disponible]
Tareas es un módulo. Si ves *«TODOs No Disponibles — El módulo de TODOs no está habilitado para tu organización»*, actívalo en [Módulos](/08-configuracion/cuenta/).
:::

[CAPTURA PENDIENTE: Tareas en vista Kanban con el resumen del encabezado, el selector de vistas y una tarea abierta]

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Crear una tarea | [Nuevo TODO](#crear-una-tarea) |
| Moverla entre etapas | [Kanban](#vistas) |
| Ver tareas vencidas o por completar | [Resumen del encabezado](#resumen-del-encabezado) |
| Ver tareas en calendario | [Vistas](#vistas) |
| Cambiar las etapas del tablero | [Ajustes](#ajustes-de-tareas) |
| Programar una actividad en una tarea | [Actividades](#detalle-de-una-tarea) |
| Que las tareas se repartan solas | [Asignación](/08-configuracion/operacion/#reparto-de-tareas) |

## Vistas

El selector **Vistas** ofrece cuatro:

| Vista | Para qué |
|---|---|
| **Kanban** | Columnas por etapa; arrastra tarjetas para cambiar de etapa y **Suelta aquí** |
| **Lista** | Tabla de tareas con filtros y búsqueda |
| **Calendario** | Las tareas y actividades por fecha |
| **Ajustes** | Etapas y tipos de actividad |

En Kanban puedes **Colapsar / Expandir** una etapa y reordenar arrastrando. Las columnas vacías muestran *«Sin tareas»*.

## Resumen del encabezado

Bajo el título **Tareas** verás una línea de resumen con **N para hoy**, **N urgentes** y cuántas tareas **creó el agente desde conversaciones esta semana**. Los indicadores completos (pendientes, vencidas, completadas, canceladas y tiempo para completar) están en el [Panel de control](/01-primeros-pasos/tour-del-dashboard/#tareas).

## Filtros

Los filtros avanzados combinan estos campos: **Estado**, **Prioridad**, **Asignado a** (incluye **Sin asignar**), **Etapa**, **Departamento** (incluye **Sin departamento**), **Sucursal** y **Sin responder**. Puedes quitar cada filtro con **Quitar**.


## Crear una tarea

1. Haz clic en **Nuevo TODO**.
2. Completa:

| Campo | Detalle |
|---|---|
| **Título** * | Obligatorio |
| **Descripción** | Qué hay que hacer |
| **Razón** | *¿Por qué es necesario este TODO?* |
| **Estado** * | La etapa donde entra |
| **Prioridad** | **Baja**, **Media**, **Alta** o **Urgente** |
| **Fecha de vencimiento** | Cuándo debe estar lista |
| **Asignado a** | Persona responsable |
| **Departamento** | Equipo al que pertenece (o *Sin departamento*) |

3. Haz clic en **Crear TODO**. Verás *«TODO creado exitosamente»*.

## Buscar y filtrar

La barra de búsqueda y los **filtros avanzados** funcionan como los del CRM: por etapa, prioridad, responsable, departamento y fechas, con chips que puedes modificar o quitar.

## Detalle de una tarea

Al abrir una tarea ves **Detalles del TODO**: título, descripción, prioridad, vencimiento, responsable, departamento y su **Origen**:

- **Desde una conversación**, con **Abrir origen** (puede ser un correo, una llamada o un mensaje).
- **Creada a mano**.

Incluye el **Timeline** con actividades y comentarios, **Información adicional** y **Completada el** cuando aplica. Puedes **Marcar como completado**, editar o eliminar. Las **actividades** (llamadas, reuniones…) se programan igual que en el [CRM](/06-crm-audiencias/#actividades-y-comentarios).

## Ajustes de tareas

**Ajustes de tareas** (*Etapas y tipos de actividad que usa todo el equipo*):

- **Etapas**: las columnas del tablero, en orden. **Gestionar Etapas** permite crear (ej. *Por Atender, En Proceso*), editar, colorear, marcar como **Completado** y elegir la **Por Defecto**.
- **Tipos de actividad**: las categorías de actividad de las tareas.

## Reparto automático

Las tareas pueden asignarse solas por **Round Robin** o con **reglas inteligentes** según el contenido. Se configura en [Asignación](/08-configuracion/operacion/#reparto-de-tareas).

## Preguntas frecuentes

**El agente creó una tarea. ¿Por qué?**
Normalmente porque una conversación necesitaba seguimiento humano. Abre **Origen** para ver la conversación.

**No veo Tareas en el menú.**
El módulo debe estar activo en [Módulos](/08-configuracion/cuenta/).

**¿Cómo evito que una tarea quede sin dueño?**
Activa el reparto en [Asignación](/08-configuracion/operacion/#reparto-de-tareas).
