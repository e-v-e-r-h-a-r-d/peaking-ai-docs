---
title: Organización interna
description: "Crea los departamentos de tu equipo y define cuánto espera el agente de IA para agrupar los mensajes de un cliente antes de responder."
sidebar:
  order: 2
---

**Organización interna** reúne dos ajustes sobre cómo funciona tu operación por dentro: los **departamentos** de tu equipo y la **agrupación de respuestas del agente**.

[CAPTURA PENDIENTE: pantalla Organización interna con Departamentos y Agrupación de respuestas]

## Departamentos

Los departamentos agrupan a tu equipo por área (Ventas, Soporte, Operaciones…) y se usan como criterio para asignar tareas de forma inteligente.

### Crear un departamento

1. Ve a **Configuración › Operación › Organización interna**.
2. En **Departamentos**, haz clic en **Nuevo Departamento**.
3. Escribe el nombre y guarda.

Si aún no tienes ninguno, verás: *"Crea tu primer departamento para comenzar a organizar tu equipo"*.

### Asignar personas a un departamento

Cada miembro del equipo se asigna a su departamento desde [Equipo y roles](/08-configuracion/empresa-y-equipo/equipo-y-roles/), ya sea al invitarlo o en la columna **Departamento** de la tabla.

### Eliminar un departamento

Haz clic en **Eliminar** y confirma. Un departamento **no se puede eliminar mientras tenga usuarios asignados**: Peaking te avisará cuántos hay. Reasígnalos primero a otro departamento.

:::tip[Crea los departamentos antes de invitar al equipo]
Si los departamentos ya existen, puedes asignar a cada persona desde el momento en que la invitas.
:::

## Agrupación de respuestas del agente

Cuando un cliente escribe varios mensajes seguidos, el agente puede esperar unos segundos para juntarlos y contestar **una sola vez**, en lugar de responder a cada mensaje por separado.

El ajuste **Ventana de espera** controla cuánto espera:

| Opción | Efecto |
|--------|--------|
| **Inmediato (sin espera)** | El agente responde en cuanto llega cada mensaje |
| **Un número de segundos** | El agente espera ese tiempo tras el último mensaje antes de contestar |

:::tip[¿Qué valor elegir?]
Si tus clientes suelen escribir varios mensajes seguidos, una ventana de **8 a 20 segundos** evita que el agente conteste fragmentos de una idea que aún no terminó.
:::

<!-- VERIFICAR: (1) "Departamento" requiere el módulo TODOs? el texto dice "para asignación inteligente de tareas"; (2) rango mínimo/máximo de segundos permitido; (3) que esta ventana NO esté duplicada también en Estudio de Prompts del UI nuevo — el artículo crea-tu-primer-prompt la documenta ahí. Si sigue en ambos lugares, enlazar en vez de repetir. -->
