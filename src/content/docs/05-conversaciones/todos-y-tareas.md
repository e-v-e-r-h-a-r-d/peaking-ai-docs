---
title: TODOs y tareas
description: Cómo crear, asignar y dar seguimiento a tareas vinculadas a conversaciones usando el módulo de TODOs de Peaking.
sidebar:
  order: 5
---

El módulo de **TODOs** te permite crear tareas de seguimiento directamente desde las conversaciones con clientes. Cada TODO queda vinculado al contacto y a la conversación de origen, lo que da a tu equipo el contexto completo sin necesidad de copiar información a herramientas externas.

---

## Activar el módulo de TODOs

El módulo de TODOs no aparece en la navegación hasta que esté activado.

1. Ve a _Configuraciones › Funcionalidades_.
2. Localiza **Módulo TODOs**.
3. Activa el toggle.

Una vez activo, el ícono de **TODOs** aparece en el panel lateral izquierdo.

:::note[TODOs y asignación automática]
Cuando el módulo está activo, también puedes configurar reglas de asignación inteligente desde _Configuraciones › Funcionalidades_. Consulta el artículo [Activa y configura los módulos](/01-primeros-pasos/activa-tus-modulos/) para los detalles.
:::

---

## Qué es un TODO

Un TODO es una tarea con:

| Campo | Descripción |
|-------|-------------|
| **Título** | Descripción breve de la tarea |
| **Descripción** | Detalle adicional o contexto |
| **Prioridad** | `low` · `medium` · `high` · `urgent` |
| **Asignado a** | Miembro del equipo responsable |
| **Vencimiento** | Fecha límite para completar la tarea |
| **Contacto vinculado** | El cliente al que se refiere esta tarea |
| **Estado** | Pendiente · En progreso · Completado |

---

## Cómo crear un TODO

### Desde una conversación

La forma más común de crear TODOs es directamente desde el hilo de conversación:

1. Abre la conversación en el Panel de Conversaciones o en tu Bandeja.
2. Busca la opción **Crear TODO** en el panel de acciones (ícono de tarea o botón en la barra lateral).
3. Completa el título, la descripción y la prioridad.
4. Asigna a un miembro del equipo (o deja que el sistema lo asigne automáticamente si hay reglas configuradas).
5. Define una fecha de vencimiento si aplica.
6. Haz clic en **Crear**.

El TODO queda vinculado a ese contacto y conversación.

### Desde el módulo de TODOs

1. Haz clic en **TODOs** en el panel lateral.
2. Haz clic en **+ Nuevo TODO**.
3. Completa los campos del formulario.
4. Guarda.

---

## Vista del módulo de TODOs

Desde **TODOs** en el panel lateral, verás todos los TODOs de la organización (o los tuyos, según tu rol y filtros activos).

### Vistas disponibles

| Vista | Cómo usarla |
|-------|-------------|
| **Lista** | Todos los TODOs en formato tabla — ideal para revisar por prioridad o vencimiento |
| **Kanban** | Columnas por estado: Pendiente · En progreso · Completado |

### Filtros disponibles

- Por **miembro asignado** — ver solo los TODOs de un vendedor o agente específico
- Por **prioridad** — filtrar urgentes primero
- Por **vencimiento** — identificar tareas atrasadas
- Por **contacto** — ver todos los TODOs asociados a un cliente

---

## Actualizar el estado de un TODO

1. Abre el TODO desde la lista o el Kanban.
2. Cambia el estado al que corresponda: **En progreso** cuando empiezas · **Completado** cuando termines.
3. Guarda los cambios.

En la vista Kanban, puedes arrastrar la tarjeta entre columnas para cambiar el estado visualmente.

---

## Asignación automática de TODOs

Si tienes configurada la asignación automática (Round Robin o reglas inteligentes), cuando se crea un TODO el sistema lo asigna al miembro del equipo correcto sin intervención manual.

**Round Robin**: los TODOs nuevos se distribuyen en rotación equitativa entre todos los miembros habilitados.

**Reglas inteligentes**: la IA analiza el título y descripción del TODO, compara con las reglas configuradas y asigna al departamento o miembro más adecuado.

---

## TODOs y el agente de IA

El agente de IA puede crear TODOs automáticamente durante una conversación si el prompt lo instruye. Ejemplo de instrucción en el prompt:

```
Cuando un cliente solicite una cotización de más de $10,000 MXN,
crea un TODO con título "Cotización alta valor - [nombre del cliente]"
y asígnalo al equipo de Ventas.
```

Esto permite que el agente opere como primer filtro y derive automáticamente los casos que necesitan seguimiento humano.

---

## Preguntas frecuentes

**¿Un cliente puede ver sus TODOs?**

No. Los TODOs son internos — el cliente nunca los ve.

**¿Puedo vincular un TODO a más de una conversación?**

Cada TODO se vincula a un contacto y a la conversación de origen. Si el mismo cliente genera múltiples conversaciones, cada una puede tener su propio TODO.

**¿Se pueden crear TODOs desde el CRM?**

Sí. Desde el perfil de una oportunidad en el CRM también puedes crear TODOs vinculados a ese contacto.

**¿Los TODOs completados desaparecen?**

No, se archivan en la vista de **Completados**. Puedes consultarlos en cualquier momento para revisar el historial de seguimiento con un cliente.
