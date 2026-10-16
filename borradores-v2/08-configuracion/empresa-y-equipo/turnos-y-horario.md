---
title: Turnos y horario
description: "Define qué persona de tu equipo recibe las conversaciones entrantes de cada número de WhatsApp según el día y la hora."
sidebar:
  order: 4
---

**Turnos y horario** decide **quién atiende** cada conversación nueva que llega a un número de WhatsApp, según el día y la hora. Así, la persona que cubre el turno recibe la conversación automáticamente, sin que nadie tenga que repartirlas a mano.

:::note[Antes de empezar]
Esta sección aparece solo cuando el módulo **Asignación por turnos** está activo. Un usuario **Master** puede activarlo en [Módulos](/08-configuracion/cuenta/modulos/). Necesitas además al menos un número de WhatsApp conectado — consulta [Canales](/08-configuracion/canales-e-integraciones/canales/).
:::

[CAPTURA PENDIENTE: tabla de turnos por número, con la columna "Ahora atiende"]

## Cómo se ve la pantalla

Verás una tabla por cada número de WhatsApp conectado. Cada número muestra:

| Elemento | Qué significa |
|----------|----------------|
| **Número** | El número de WhatsApp al que aplican los turnos |
| **Ahora atiende** | La persona que cubre el turno en este momento. Si ninguno aplica, aparece **nadie (sin turno)** |
| **Turnos** | Las franjas de día y hora configuradas para ese número |

Las horas se interpretan en la **hora local de la organización**.

## Agregar un turno

1. Ubica el número de WhatsApp al que quieres asignar el turno.
2. Haz clic en **Agregar turno**.
3. Elige el **Día**.
4. Indica la hora de inicio (**De**) y la de fin (**A**).
5. Selecciona el **Usuario** que atenderá en esa franja.
6. Guarda el turno.

Para quitar un turno, haz clic en **Eliminar** en su fila. Si un número aún no tiene turnos, verás: *"Este número aún no tiene turnos. Agrega uno por cada franja del día."*

:::caution[La hora final no se incluye]
Un turno de **15:00 a 23:00** cubre hasta las **22:59**. Para cubrir la noche completa, usa **23:59** como hora final. La hora final debe ser mayor que la inicial; de lo contrario, el turno no se guarda.
:::

## Cosas que conviene saber

- Si no hay usuarios en la organización, no habrá a quién asignar un turno. Invita primero a tu equipo en [Equipo y roles](/08-configuracion/empresa-y-equipo/equipo-y-roles/).
- Una franja sin turno deja la conversación sin responsable: la columna **Ahora atiende** mostrará **nadie (sin turno)**. Cubre todas las horas en las que recibes mensajes.

:::tip[No lo confundas con el horario de operación]
El [horario de operación](/08-configuracion/empresa-y-equipo/organizacion/#horario-de-operación) indica cuándo está abierto tu negocio. Los turnos indican **qué persona** atiende en cada franja.
:::

<!-- VERIFICAR: (1) si el turno asigna también a los números de Instagram/Messenger o solo WhatsApp (el texto del UI dice "por número de WhatsApp"); (2) si requiere "Aislamiento por número" para que cada persona vea solo sus números; (3) qué ocurre si hay dos usuarios con turnos superpuestos. No se leyó la lógica de asignación. -->
