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

![Panel de TODOs con métricas superiores, filtros, Vista Kanban con columnas Pendiente, En Progreso, En Revisión y Completado](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/10-tareas/todos-panel-kanban.png)

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

#### Búsqueda avanzada

Haz clic en **Filtros** para desplegar el panel de búsqueda avanzada:

![Panel de filtros avanzados de TODOs con combinador Y/O, Etapa, Prioridad, Estado, Asignado a y Sucursal](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/10-tareas/tareas-busqueda-avanzada.png)

Igual que en el CRM, puedes combinar los filtros con **Y (todos)** o **O (cualquiera)**. Los filtros disponibles son: **Sin responder**, **Etapa**, **Prioridad**, **Estado**, **Asignado a** y **Sucursal** (si tu organización tiene sucursales activadas).

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

![TODO generado por el agente de IA con Timeline, conversación de WhatsApp vinculada y botón Cotizar con Copilot](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/10-tareas/tareas-todo-conversacion-vinculada.png)

En el ejemplo anterior, el agente de IA creó el TODO automáticamente al detectar una solicitud de cotización — la descripción y la razón quedan pre-llenadas con el contexto de la conversación, y el botón **Cotizar con Copilot** permite generar la cotización sin salir del TODO. Ver [Copilot — cotizaciones desde la conversación](/05-conversaciones/copilot-cotizaciones/).

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

![Formulario Nuevo TODO con los campos Título, Estado, Prioridad, Asignado a, Departamento, Fecha de vencimiento, Descripción y Razón](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/10-tareas/tareas-nuevo-todo-formulario.png)

### Desde una conversación

La forma más frecuente: directamente desde el hilo de mensajes con el cliente.

1. Abre la conversación en el Panel de Mensajes o en tu Bandeja.
2. En el panel de acciones, haz clic en **Crear TODO**.
3. El contacto y la conversación quedan vinculados automáticamente.
4. Completa el formulario y guarda.

---

## Asignación automática de TODOs

Si tienes configurada la asignación automática, cuando se crea un TODO el sistema lo asigna al miembro correcto sin intervención manual.

![Configuración de Asignación TODO con estrategia AI-Powered (Intelligent Rules) y botón Create First Rule](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/10-tareas/config-asignacion-todo.png)

Esta configuración vive en **TODO Auto-Assignment**, dentro de la configuración del módulo — sus campos aparecen en inglés en la interfaz actual. Actívala con el toggle **Enable Auto-Assignment** y elige la estrategia:

**Round Robin** — los TODOs nuevos se distribuyen en rotación equitativa entre todos los miembros habilitados.

**Reglas inteligentes (AI-Powered)** — la IA analiza el título y descripción del TODO, compara con las reglas configuradas y asigna al departamento o miembro más adecuado, usando Round Robin como respaldo si ninguna regla aplica. Crea reglas con **+ Add Rule** o **Create First Rule** si aún no tienes ninguna.

### Crear una regla inteligente de asignación

El formulario **Create Assignment Rule** (también en inglés en la interfaz actual) se completa en tres partes:

**1. Basic Information** — nombre y descripción de la regla, y el switch **"Aplicar a todas las tareas"**: si lo activas, ignora las palabras clave y la prioridad, y asigna *toda* tarea directamente al usuario o equipo elegido.

![Formulario Create Assignment Rule, sección Basic Information con nombre, descripción y switch Aplicar a todas las tareas](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/10-tareas/tareas-regla-asignacion-basica.png)

**2. Matching Conditions** — las condiciones que la IA evalúa para decidir si la regla aplica: palabras clave (busca coincidencias en título y descripción del TODO), niveles de prioridad (`low` · `medium` · `high` · `urgent`) y una pista de equipo/departamento en texto libre.

![Sección Matching Conditions con palabras clave, niveles de prioridad y pista de equipo/departamento](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/10-tareas/tareas-regla-asignacion-condiciones.png)

**3. Assignment Target** — a quién se asigna cuando la regla aplica: a un **Team/Department** completo o a un **Specific User** en particular.

![Sección Assignment Target con las opciones Team/Department y Specific User](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/10-tareas/tareas-regla-asignacion-destino.png)

Haz clic en **Create Rule** para guardar. Puedes crear varias reglas — la IA las evalúa en orden hasta encontrar una que aplique.

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
