---
title: CRM
description: "Tu pipeline de ventas: oportunidades en Kanban, lista, pivote, gráfica, actividad y calendario; filtros, actividades, ganar o perder, fusionar duplicados y conversación vinculada."
sidebar:
  order: 1
---

El **CRM** (*Gestiona tus oportunidades y pipeline de ventas*) es donde das seguimiento a cada oportunidad desde que entra hasta que se gana o se pierde. Las oportunidades pueden llegar solas (el agente, un formulario web, una importación) o las creas tú. Lo encuentras en el menú lateral como **CRM**.

:::note[Cuándo está disponible]
El CRM es un módulo. Si ves *«CRM No Disponible — El módulo CRM no está habilitado para tu organización»*, actívalo en [Módulos](/08-configuracion/cuenta/modulos/).
:::

[CAPTURA PENDIENTE: pipeline en vista Kanban con las métricas arriba, el selector de vistas, los filtros y una oportunidad abierta en el panel de detalle]

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Crear una oportunidad | [Nueva oportunidad](#crear-una-oportunidad) |
| Mover una oportunidad de etapa | [Kanban](#kanban) |
| Ver el CRM como tabla, gráfica o calendario | [Vistas](#vistas) |
| Buscar o filtrar | [Buscar y filtrar](#buscar-y-filtrar) |
| Programar una llamada o reunión | [Actividades](#actividades-y-comentarios) |
| Marcar una oportunidad como ganada o perdida | [Ganar o perder](#ganar-o-perder) |
| Evitar o resolver duplicados | [Duplicados](#duplicados) |
| Recuperar una oportunidad eliminada | [Eliminadas](/06-crm-audiencias/ajustes-del-pipeline/#oportunidades-eliminadas) |
| Cambiar etapas, motivos o importar y exportar | [Ajustes del pipeline](/06-crm-audiencias/ajustes-del-pipeline/) |
| Cotizar desde una oportunidad | [Copilot de cotizaciones](/05-conversaciones/copilot-cotizaciones/) |

## Primera vez: crea tus etapas

Si aún no hay etapas verás *«Bienvenido al CRM de Peaking»*. Las **etapas** son los pasos de tu proceso (por ejemplo, Prospecto → Contacto → Propuesta → Negociación → Ganada o Perdida). Haz clic en **Crear primera etapa**; más en [Ajustes del pipeline](/06-crm-audiencias/ajustes-del-pipeline/#etapas).

## El pipeline de un vistazo

Arriba ves el resumen del embudo: oportunidades **abiertas**, **en juego** (monto esperado), **ganado** y **prob. promedio**. Al lado, los botones **Nueva Oportunidad**, el selector de **Vistas del CRM**, la búsqueda, los filtros y **Ajustes**.

### Crear una oportunidad

1. Haz clic en **Nueva Oportunidad**.
2. Completa los datos (los obligatorios dependen de tu configuración):

| Campo | Detalle |
|---|---|
| **Nombre**, **Empresa**, **Industria** | Identifican la oportunidad |
| **Contacto**, **Email**, **Teléfono** | A quién se vende |
| **Etapa** | Dónde entra en el pipeline |
| **Revenue Esperado**, **Probabilidad de Cierre**, **Fecha de Cierre Esperada** | El pronóstico |
| **Prioridad** | **Baja**, **Media**, **Alta** o **Urgente** |
| **Asignado a** | El responsable |
| **Fuente**, **Campaña**, **Notas**, **Etiquetas** | Origen y contexto |
| **Campos adicionales** | Los campos personalizados que definiste en [Campos del CRM](/08-configuracion/operacion/campos-del-crm/) |

Si una etapa **requiere correo** y la oportunidad no lo tiene, se te pide capturarlo (*«Guardar y mover»*) antes de continuar.

## Vistas

El selector **Vistas del CRM** cambia cómo ves las mismas oportunidades:

| Vista | Para qué |
|---|---|
| **Kanban** | Columnas por etapa; arrastra para mover |
| **Lista** | Tabla con **Columnas visibles** que puedes elegir (**Restablecer columnas**) |
| **Pivote** | Tabla dinámica por **Filas** y **Columnas**; **Medida**: cantidad, ingreso esperado, ponderado, promedio o probabilidad promedio; descarga a Excel |
| **Gráfica** | Barras, línea o pastel con totales por etapa, con los filtros activos |
| **Actividad** | Oportunidades agrupadas por estado de su próxima actividad: **Vencidas**, **Para hoy**, **Planificadas** o **Sin actividad** |
| **Calendario** | Las actividades programadas en un calendario |

Las vistas Lista, Pivote y Gráfica trabajan sobre las oportunidades **cargadas**; si ves *«Esta vista usa las N oportunidades cargadas»*, usa **Cargar más**.

### Kanban

- Cada tarjeta muestra la oportunidad, el responsable, la prioridad, los **días en la etapa** y su próxima actividad.
- **Arrastra** una tarjeta a otra columna para cambiarla de etapa. **Plegar / Desplegar** una columna la comprime.
- Si arrastras a una etapa **Ganada** o **Perdida**, se te pregunta el motivo (ver [Ganar o perder](#ganar-o-perder)).
- Cada columna carga más tarjetas al bajar, hasta *«No hay más oportunidades en esta etapa»*.
- El menú de la tarjeta ofrece **Ver Detalles**, **Ver Historial de Auditoría** y **Eliminar Oportunidad**.

## Buscar y filtrar

- **Búsqueda inteligente**: escribe nombre, empresa, industria o país; elige si buscar en **todos los campos** o en uno.
- **Filtros y agrupar por** reúne:

| Filtro | Opciones |
|---|---|
| **Etapa** | Una o varias |
| **Prioridad** | Baja, Media, Alta, Urgente |
| **Asignado a** | Personas o **Sin asignar** |
| **Estado** | **Abierta**, **Ganada**, **Perdida** |
| **Fuente** | Las fuentes de tus oportunidades |
| **Canal** | **WhatsApp**, **Messenger**, **Instagram**, **Sitio Web** |
| **Creada desde / hasta** | Rango de fechas |
| **Sin leer** | Solo con mensajes sin leer |
| **Agrupar por** | Cambia cómo se agrupan las tarjetas |

Los filtros activos aparecen como **chips** que puedes modificar o quitar. Exportar y el reporte comercial **respetan** estos filtros.

## La ficha de una oportunidad

Al abrir una oportunidad ves un panel con pestañas:

| Pestaña | Contenido |
|---|---|
| **Actividad** | Actividades planeadas, comentarios y el historial de cambios |
| **Conversación** | El chat vinculado, con **Abrir en Mensajes**; si no hay: *«Esta oportunidad no tiene una conversación vinculada»* |
| **Detalles** | Datos, financiero, dirección, **Notas internas**, **Información extra** y **Campos personalizados** |

Con **Editar datos** modificas la ficha. Verás la etapa, la probabilidad, el **próximo paso** (con aviso **Vencida** si ya pasó), el **ingreso ponderado** y los **días abierta**. Si tu organización usa Copilot, aquí está **Cotizar con Copilot**.

### Actividades y comentarios

En **Actividad**:

1. **Nueva Actividad**: **Título**, **Tipo de actividad** (Llamada, Correo, Reunión, Tarea, Nota… y los que agregues), **Descripción** y **Fecha y hora programada**; asigna a quien corresponda. Guarda con **Crear Actividad**.
2. Marca **Completar** cuando se haga. Las actividades muestran **Vence hoy**, **Vence mañana** o **Vence en N días**, y se agrupan en **Vencidas**, **Próximas** y completadas.
3. Escribe un comentario y **Comentar**. Filtra el timeline por **Todos**, **Actividades**, **Comentarios** o **Cambios**.

Los tipos de actividad se gestionan en [Ajustes del pipeline](/06-crm-audiencias/ajustes-del-pipeline/#tipos-de-actividad).

## Ganar o perder

Marca **Ganada** o **Perdida** en la ficha, o arrastra la tarjeta a esa etapa:

- Al **perder**, eliges el **Motivo de Pérdida** (obligatorio) y puedes agregar detalles; confirma con **Confirmar Pérdida**.
- Al **ganar**, si definiste motivos de ganada, eliges uno (**Confirmar ganada**). Si no definiste ninguno, no se pregunta nada.
- Las etapas ganada y perdida pueden **enviar una conversión a Meta** al entrar la oportunidad: ver [Meta CAPI](/08-configuracion/canales-e-integraciones/meta-ads-y-capi/).

## Duplicados

- **Al crear a mano**: si el contacto ya tiene una oportunidad activa verás *«Prospecto duplicado»* con el nombre y el responsable, y puedes **Abrir oportunidad existente**. Si no es tuya, **Solicitar reasignación** avisa al responsable y a los gerentes.
- **Fusionar duplicado**: en la ficha, **Fusionar duplicado** busca candidatos (mismo contacto o nombre). Eliges cuáles unir a esta oportunidad con **Fusionar seleccionadas**; la que abriste es la que se conserva.

## Quién puede qué

| Acción | Quién |
|---|---|
| Ver y trabajar oportunidades | Equipo con acceso al módulo |
| Asignar responsable y eliminar oportunidades | **Master** y **Administrador** (otros verán *«No tienes permisos para eliminar esta oportunidad»*) |
| Ajustes del pipeline | Quienes administran |

## Preguntas frecuentes

**No puedo mover una oportunidad a una etapa.**
Si la etapa **requiere correo**, la oportunidad debe tener uno. El agente, los workflows, el formulario web y la importación no se bloquean por esto.

**¿Dónde veo las oportunidades borradas?**
En [Ajustes del pipeline › Oportunidades eliminadas](/06-crm-audiencias/ajustes-del-pipeline/#oportunidades-eliminadas); se pueden **Restaurar**.

**¿Qué diferencia hay entre CRM y Tareas?**
El CRM sigue oportunidades de venta; [Tareas](/10-tareas/) sigue lo que el equipo y el agente tienen por hacer.
