---
title: CRM
description: "Tu pipeline de oportunidades: vistas, fichas, actividades y los ajustes del pipeline."
sidebar:
  order: 1
---

El **CRM** (*Gestiona tus oportunidades y pipeline de ventas*) es donde das seguimiento a cada oportunidad desde que entra hasta que se gana o se pierde. Las oportunidades pueden llegar solas (el agente, un formulario web, una importación) o las creas tú. Lo encuentras en el menú lateral como **CRM**.

:::note[Cuándo está disponible]
El CRM es un módulo. Si ves *«CRM No Disponible — El módulo CRM no está habilitado para tu organización»*, actívalo en [Módulos](/08-configuracion/cuenta/).
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
| Recuperar una oportunidad eliminada | [Eliminadas](/06-crm-audiencias/#oportunidades-eliminadas) |
| Cambiar etapas, motivos o importar y exportar | [Ajustes del pipeline](/06-crm-audiencias/#ajustes-del-pipeline) |
| Cotizar desde una oportunidad | [Copilot de cotizaciones](/05-conversaciones/copilot-cotizaciones/) |
| Crear, ordenar o cambiar etapas | [Etapas](#etapas) |
| Pedir correo para entrar a una etapa | [Requiere correo](#requiere-correo) |
| Enviar una conversión a Meta al llegar a una etapa | [Conversión a Meta](#enviar-conversión-a-meta) |
| Agregar tipos de actividad | [Tipos de actividad](#tipos-de-actividad) |
| Pedir un motivo al ganar o perder | [Motivos](#motivos-de-ganada-y-de-pérdida) |
| Exportar o importar oportunidades | [Importar y exportar](#importar-y-exportar) |
| Sacar un reporte de ventas en Excel | [Reporte comercial](#reporte-comercial) |
| Recuperar una oportunidad borrada | [Eliminadas](#oportunidades-eliminadas) |

## CRM

### Primera vez: crea tus etapas

Si aún no hay etapas verás *«Bienvenido al CRM de Peaking»*. Las **etapas** son los pasos de tu proceso (por ejemplo, Prospecto → Contacto → Propuesta → Negociación → Ganada o Perdida). Haz clic en **Crear primera etapa**; más en [Ajustes del pipeline](/06-crm-audiencias/#etapas).

### El pipeline de un vistazo

Arriba ves el resumen del embudo: oportunidades **abiertas**, **en juego** (monto esperado), **ganado** y **prob. promedio**. Al lado, los botones **Nueva Oportunidad**, el selector de **Vistas del CRM**, la búsqueda, los filtros y **Ajustes**.

#### Crear una oportunidad

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
| **Campos adicionales** | Los campos personalizados que definiste en [Campos del CRM](/08-configuracion/operacion/#campos-del-crm) |

Si una etapa **requiere correo** y la oportunidad no lo tiene, se te pide capturarlo (*«Guardar y mover»*) antes de continuar.

### Vistas

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

#### Kanban

- Cada tarjeta muestra la oportunidad, el responsable, la prioridad, los **días en la etapa** y su próxima actividad.
- **Arrastra** una tarjeta a otra columna para cambiarla de etapa. **Plegar / Desplegar** una columna la comprime.
- Si arrastras a una etapa **Ganada** o **Perdida**, se te pregunta el motivo (ver [Ganar o perder](#ganar-o-perder)).
- Cada columna carga más tarjetas al bajar, hasta *«No hay más oportunidades en esta etapa»*.
- El menú de la tarjeta ofrece **Ver Detalles**, **Ver Historial de Auditoría** y **Eliminar Oportunidad**.

### Buscar y filtrar

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

### La ficha de una oportunidad

Al abrir una oportunidad ves un panel con pestañas:

| Pestaña | Contenido |
|---|---|
| **Actividad** | Actividades planeadas, comentarios y el historial de cambios |
| **Conversación** | El chat vinculado, con **Abrir en Mensajes**; si no hay: *«Esta oportunidad no tiene una conversación vinculada»* |
| **Detalles** | Datos, financiero, dirección, **Notas internas**, **Información extra** y **Campos personalizados** |

Con **Editar datos** modificas la ficha. Verás la etapa, la probabilidad, el **próximo paso** (con aviso **Vencida** si ya pasó), el **ingreso ponderado** y los **días abierta**. Si tu organización usa Copilot, aquí está **Cotizar con Copilot**.

#### Actividades y comentarios

En **Actividad**:

1. **Nueva Actividad**: **Título**, **Tipo de actividad** (Llamada, Correo, Reunión, Tarea, Nota… y los que agregues), **Descripción** y **Fecha y hora programada**; asigna a quien corresponda. Guarda con **Crear Actividad**.
2. Marca **Completar** cuando se haga. Las actividades muestran **Vence hoy**, **Vence mañana** o **Vence en N días**, y se agrupan en **Vencidas**, **Próximas** y completadas.
3. Escribe un comentario y **Comentar**. Filtra el timeline por **Todos**, **Actividades**, **Comentarios** o **Cambios**.

Los tipos de actividad se gestionan en [Ajustes del pipeline](/06-crm-audiencias/#tipos-de-actividad).

### Ganar o perder

Marca **Ganada** o **Perdida** en la ficha, o arrastra la tarjeta a esa etapa:

- Al **perder**, eliges el **Motivo de Pérdida** (obligatorio) y puedes agregar detalles; confirma con **Confirmar Pérdida**.
- Al **ganar**, si definiste motivos de ganada, eliges uno (**Confirmar ganada**). Si no definiste ninguno, no se pregunta nada.
- Las etapas ganada y perdida pueden **enviar una conversión a Meta** al entrar la oportunidad: ver [Meta CAPI](/08-configuracion/canales-e-integraciones/meta-ads-y-capi/).

### Duplicados

- **Al crear a mano**: si el contacto ya tiene una oportunidad activa verás *«Prospecto duplicado»* con el nombre y el responsable, y puedes **Abrir oportunidad existente**. Si no es tuya, **Solicitar reasignación** avisa al responsable y a los gerentes.
- **Fusionar duplicado**: en la ficha, **Fusionar duplicado** busca candidatos (mismo contacto o nombre). Eliges cuáles unir a esta oportunidad con **Fusionar seleccionadas**; la que abriste es la que se conserva.

### Quién puede qué

| Acción | Quién |
|---|---|
| Ver y trabajar oportunidades | Equipo con acceso al módulo |
| Asignar responsable y eliminar oportunidades | **Master** y **Administrador** (otros verán *«No tienes permisos para eliminar esta oportunidad»*) |
| Ajustes del pipeline | Quienes administran |

## Ajustes del pipeline

**Ajustes del pipeline** (*Etapas, actividades y motivos de pérdida que usa todo el equipo*) se abre con el botón **Ajustes** del [CRM](/06-crm-audiencias/). Reúne todo lo que se configura una vez para todo el equipo.

[CAPTURA PENDIENTE: pantalla Ajustes del pipeline con los bloques Etapas, Tipos de actividad, Motivos, Importar y exportar y Oportunidades eliminadas]

### Etapas

Las **etapas** son las columnas de tu pipeline. En **Etapas** ves cada una con su marca de **Ganada** o **Perdida**; **Editar etapas** abre **Gestionar Etapas**. El orden se cambia **arrastrando en el Pipeline**.

#### Crear o editar una etapa

En **Gestionar Etapas**, **Crear Nueva Etapa**:

| Campo | Qué es |
|---|---|
| **Nombre** | Ej. *Prospecto*, *Calificado*, *Propuesta* |
| **Descripción** | Opcional |
| **Color** | Para distinguirla en el tablero |
| **Etapa ganada** / **Etapa perdida** | Marca el cierre. Una etapa **no puede ser ganada y perdida** a la vez |
| **Por defecto** | La etapa donde entran las oportunidades nuevas |

Eliminar una etapa pide confirmar: sus oportunidades **deben reasignarse** a otra etapa.

#### Requiere correo

Con **Requiere correo**, el equipo no puede mover ni crear oportunidades en esa etapa sin correo (la etapa muestra la insignia **Correo**). **No bloquea** al agente de IA, los workflows, el formulario web ni la importación.

#### Enviar conversión a Meta

Cada etapa puede **Enviar conversión a Meta**: cuando una oportunidad entra, se envía un evento a tu dataset de Conversions API (con el click id del anuncio si existe). Configura **Nombre del evento en Meta**, **Valor (opcional)** y **Moneda**. Requiere [Meta CAPI](/08-configuracion/canales-e-integraciones/meta-ads-y-capi/).

### Tipos de actividad

**Tipos de actividad** son las categorías de las actividades que programas (Llamada, Correo, Reunión, Tarea, Nota…). **Agregar o editar tipos** abre **Gestionar Tipos de Actividad**:

- **Crear Nuevo Tipo** con un nombre (hasta 50 caracteres; ej. *Llamada, Email, Reunión, Demo*), o **Crear por defecto** para cargar los básicos.
- Eliminar un tipo que ya se usó **lo desactiva** en lugar de borrarlo.

### Motivos de ganada y de pérdida

**Configurar motivos** abre dos listas:

| Lista | Cuándo se pide |
|---|---|
| **Motivos de pérdida** | **Siempre**, al mover una oportunidad a una etapa de pérdida (desde el kanban o la ficha) |
| **Motivos de ganada** | Solo si hay **al menos uno activo**; entonces es obligatorio al ganar |

En cada lista: **Agregar**, **Subir / Bajar** para ordenar, **Activo** y **Eliminar**. Si no personalizas, la cuenta usa los **Predeterminados**; **Usar los predeterminados como base** los copia para editarlos. En el bloque verás también cuántas oportunidades perdidas o ganadas tiene cada motivo (*«de las perdidas»*, *«de las ganadas»*).

### Importar y exportar

| Opción | Qué hace |
|---|---|
| **Exportar a Excel** | Exporta oportunidades **respetando la búsqueda y los filtros** del Pipeline |
| **Importar oportunidades** | **Sube un Excel o CSV** con empresa, contacto, monto, etapa y responsable |

### Reporte comercial

**Reporte comercial › Generar** crea un Excel con monto, tipo de alta, fechas, motivos y un **resumen por vendedor** (segunda hoja). Siempre incluye: oportunidad, responsable, etapa, estado, monto, fecha de entrada a Peaking, motivo de no venta, motivo de ganada y fecha de cierre. Eliges qué campo de tu cuenta alimenta columnas como **Tipo de alta**, **Tribu**, **Fecha de contacto** y **Motivo de no compra** (o **no incluir**); se recuerda para la próxima vez. Respeta los filtros del Pipeline y se descarga con **Descargar Excel**. Si tu cuenta no tiene campos personalizados activos esas columnas saldrán vacías.

### Oportunidades eliminadas

**Oportunidades eliminadas** lista lo que se borró, con **Borrada por** y **Restaurar** (*«Oportunidad restaurada»*). **Ver todas** abre la lista completa (la papelera).

## Preguntas frecuentes

### CRM: preguntas

**No puedo mover una oportunidad a una etapa.**
Si la etapa **requiere correo**, la oportunidad debe tener uno. El agente, los workflows, el formulario web y la importación no se bloquean por esto.

**¿Dónde veo las oportunidades borradas?**
En [Ajustes del pipeline › Oportunidades eliminadas](/06-crm-audiencias/#oportunidades-eliminadas); se pueden **Restaurar**.

**¿Qué diferencia hay entre CRM y Tareas?**
El CRM sigue oportunidades de venta; [Tareas](/10-tareas/) sigue lo que el equipo y el agente tienen por hacer.

### Ajustes del pipeline: preguntas

**Mis oportunidades no se mueven a «Ganada».**
Si definiste motivos de ganada se piden antes de confirmar; elige uno.

**¿Quién puede cambiar los ajustes?**
Quienes administran la cuenta.

**Importé oportunidades y no aparecen.**
Revisa que el archivo tenga empresa, contacto, monto, etapa y responsable, y limpia los filtros del Pipeline.
