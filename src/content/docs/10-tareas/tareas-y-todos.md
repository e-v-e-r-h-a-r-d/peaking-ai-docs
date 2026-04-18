---
title: Tareas (TODOs)
description: Cómo usar el módulo de Tareas para gestionar el trabajo interno del equipo vinculado a clientes y conversaciones.
sidebar:
  order: 1
---

El módulo de **TODOs** es el centro de tareas internas de tu equipo. A diferencia del CRM (que gestiona el pipeline de ventas), los TODOs son para el trabajo del equipo: hacer seguimiento de compromisos internos, coordinar entre miembros y asegurarse de que nada quede sin atender.

Cada TODO queda vinculado al contacto y a la conversación de origen, lo que da a tu equipo el contexto completo sin necesidad de copiar información a herramientas externas.

:::note[TODOs vs CRM]
**CRM** → pipeline de oportunidades de venta (principalmente gestionado por la IA).
**TODOs** → tareas internas del equipo vinculadas a clientes: seguimientos, asistencias, coordinaciones. Son para organizar el trabajo del equipo, no para calificar leads.
:::

---

## Activar el módulo de TODOs

El módulo de TODOs no aparece en la navegación hasta que esté activado.

1. Ve a _Configuraciones › Funcionalidades_.
2. Localiza **Módulo TODOs**.
3. Activa el toggle.

Una vez activo, el ícono de **TODOs** aparece en el panel lateral izquierdo.

---

## Vista general del módulo

Al abrir TODOs desde el panel lateral verás:

### Métricas en la parte superior

| Métrica | Qué mide |
|---------|----------|
| **Tasa de Completación** | Porcentaje de TODOs completados vs. creados |
| **TODOs Vencidos** | Tareas cuya fecha de vencimiento ya pasó sin completarse |
| **TODOs Activos** | Tareas en curso que aún no están completadas |
| **Resolución Promedio** | Tiempo promedio que tarda el equipo en completar un TODO |

### Barra de búsqueda

El campo de búsqueda busca en tiempo real dentro de: título, descripción, comentarios y conversaciones vinculadas.

### Botones de acción

En la esquina superior derecha encontrarás:

| Botón | Función |
|-------|---------|
| **Gestionar Etapas** | Crea, edita o reordena las etapas del Kanban de TODOs |
| **Tipos de Actividad** | Gestiona los tipos de tarea disponibles para clasificar TODOs |
| **+ Nuevo TODO** | Abre el formulario para crear un TODO manualmente |

---

## Vistas del Kanban

Los TODOs se organizan en columnas por etapa. Las etapas predeterminadas son:

| Etapa | Color | Descripción |
|-------|-------|-------------|
| **Pendiente** | Azul | Tareas nuevas sin iniciar |
| **En Progreso** | Naranja | Tareas en las que alguien está trabajando activamente |
| **En Revisión** | Morado | Tareas esperando aprobación o revisión |
| **Completado** | Verde | Tareas finalizadas |

Puedes arrastrar tarjetas entre columnas para cambiar la etapa visualmente. Las etapas son configurables desde **Gestionar Etapas** — puedes crear nuevas, editar las existentes o cambiar su orden.

También puedes cambiar a **Vista de Lista** con el selector en la parte superior del Kanban.

---

## Qué contiene un TODO

Al abrir un TODO desde el Kanban o la lista verás el formulario de detalle:

| Campo | Descripción |
|-------|-------------|
| **Título** | Descripción breve de la tarea |
| **Estado** | La etapa actual (Pendiente · En Progreso · En Revisión · Completado) |
| **Prioridad** | `low` · `medium` · `high` · `urgent` |
| **Asignado a** | Miembro del equipo responsable |
| **Departamento** | Área o departamento al que pertenece la tarea |
| **Fecha de vencimiento** | Fecha límite para completar la tarea |
| **Descripción** | Detalle completo del contexto o pasos necesarios |
| **Razón** | Origen o motivo del TODO (ej. "Created by AI Agent from conversation") |

En la parte superior del detalle encontrarás los botones:
- **Completar** — marca el TODO como finalizado directamente.
- **Guardar** — guarda cambios sin cambiar el estado.
- **Eliminar** — elimina el TODO permanentemente.

### Conversación vinculada

El panel derecho del TODO muestra la **conversación de origen** — el hilo de mensajes con el cliente que generó esta tarea. Puedes ver el contexto completo y, si la ventana de 24 horas de WhatsApp sigue activa, también responder directamente al cliente desde ahí.

---

## Tipos de Actividad

Los tipos de actividad clasifican el trabajo que representa cada TODO. Accede a su gestión desde el botón **Tipos de Actividad** en la parte superior del módulo.

Si es la primera vez que los configuras, la pantalla mostrará la opción **Crear Tipos Predeterminados** para generar automáticamente los más comunes. También puedes crear tipos propios con **+ Crear Nuevo Tipo de Actividad**.

:::tip[Personaliza según tu equipo]
Define tipos que reflejen el trabajo real de tu equipo — por ejemplo: "Llamada de seguimiento", "Envío de cotización", "Coordinación interna". Esto permite filtrar y reportar con más precisión.
:::

---

## Cómo crear un TODO

### Desde el módulo de TODOs

1. Haz clic en **TODOs** en el panel lateral.
2. Haz clic en **+ Nuevo TODO**.
3. Completa los campos: título, estado, prioridad, asignado a, departamento, fecha de vencimiento y descripción.
4. Guarda.

### Desde una conversación

La forma más frecuente: directamente desde el hilo de mensajes con el cliente.

1. Abre la conversación en el Panel de Mensajes o en tu Bandeja.
2. En el panel de acciones, haz clic en **Crear TODO**.
3. El contacto y la conversación quedan vinculados automáticamente.
4. Completa el formulario y guarda.

---

## Asignación automática de TODOs

Si tienes configurada la asignación automática, cuando se crea un TODO el sistema lo asigna al miembro correcto sin intervención manual.

**Round Robin** — los TODOs nuevos se distribuyen en rotación equitativa entre todos los miembros habilitados.

**Reglas inteligentes** — la IA analiza el título y descripción del TODO, compara con las reglas configuradas y asigna al departamento o miembro más adecuado.

---

## TODOs y el agente de IA

El agente puede crear TODOs automáticamente durante una conversación si el prompt lo instruye. Ejemplo:

```
Cuando un cliente reporte un problema técnico, crea un TODO
con título "Soporte técnico - [nombre del cliente]"
y asígnalo al departamento de Soporte.
```

El campo **Razón** del TODO quedará como "Created by AI Agent from conversation", y el TODO aparecerá vinculado a la conversación de origen.

---

## Preguntas frecuentes

**¿Un cliente puede ver sus TODOs?**

No. Los TODOs son internos — el cliente nunca los ve.

**¿Qué diferencia hay entre un TODO y una oportunidad en el CRM?**

Las **oportunidades del CRM** son prospectos de venta que siguen un pipeline. Los **TODOs** son tareas del equipo — compromisos internos de seguimiento. Un mismo cliente puede tener una oportunidad abierta en el CRM y varios TODOs de atención activos.

**¿Los TODOs completados desaparecen?**

No, permanecen en la columna **Completado**. Puedes consultarlos en cualquier momento para revisar el historial de acciones con un cliente.

**¿Puedo crear mis propias etapas en el Kanban?**

Sí. Ve a **Gestionar Etapas** y haz clic en **Crear Nueva Etapa**. Define el nombre, color y descripción. Las etapas son arrastrables para reordenarlas.

**¿Puedo crear TODOs desde el CRM?**

Sí. Desde el panel de detalle de una oportunidad en el CRM también puedes crear TODOs vinculados a ese contacto.
