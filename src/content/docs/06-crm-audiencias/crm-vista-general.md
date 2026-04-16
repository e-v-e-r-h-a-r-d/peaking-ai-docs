---
title: CRM — vista general
description: "Qué es el CRM de Peaking, cómo se organiza el pipeline de oportunidades y cómo usar los filtros para encontrar leads específicos."
sidebar:
  order: 1
---

El **CRM de Peaking** es el módulo donde gestionas tu pipeline de ventas — el seguimiento de todos los prospectos y oportunidades que tus canales generan. Cada conversación con un lead potencial puede convertirse en una oportunidad dentro del CRM, donde tu equipo de ventas le da seguimiento hasta el cierre.

---

## Activar el módulo CRM

El CRM aparece en la navegación solo cuando está activado.

1. Ve a _Configuraciones › Funcionalidades_.
2. Localiza **Módulo CRM** y activa el toggle.
3. El ícono de **CRM** aparece en el panel lateral izquierdo.

---

## Acceder al CRM

En el panel lateral, haz clic en **CRM**. Verás el dashboard principal con el pipeline de oportunidades.

---

## La barra de filtros

En la parte superior del CRM encontrarás una barra de búsqueda y filtros que te permiten segmentar el pipeline con precisión:

### Búsqueda por texto

El campo **"Buscar por nombre, empresa, industria, país..."** busca en tiempo real entre todas las oportunidades. Útil cuando conoces el nombre del lead o empresa que buscas.

### Combinador lógico

A la izquierda de los filtros encontrarás el combinador:

| Combinador | Comportamiento |
|------------|----------------|
| **Y (todos)** | La oportunidad debe cumplir **todos** los filtros activos al mismo tiempo |
| **O (cualquiera)** | La oportunidad puede cumplir **cualquiera** de los filtros activos |

Cambia entre Y y O según la lógica de búsqueda que necesites.

### Filtros disponibles

| Filtro | Descripción |
|--------|-------------|
| **Etapa** | Filtra por la etapa del pipeline donde está la oportunidad (ej. Prospecto, Calificado, Propuesta, Cierre) |
| **Prioridad** | Filtra por nivel de urgencia o valor: Alta · Media · Baja |
| **Asignado a** | Muestra solo las oportunidades asignadas a un vendedor específico |
| **Estado** | Filtra por el estado actual: Activo · Ganado · Perdido · En pausa |

### Chip de filtro rápido

El chip **"Sin responder"** es un filtro rápido que muestra todas las oportunidades que no han recibido respuesta del equipo. Úsalo al inicio del día para identificar leads que necesitan contacto inmediato.

---

## Vistas del pipeline

El CRM ofrece dos formas de visualizar las oportunidades:

### Vista Kanban

Las oportunidades se muestran como tarjetas organizadas en columnas, donde cada columna representa una etapa del pipeline.

- Arrastra tarjetas entre columnas para avanzar una oportunidad en el proceso.
- Cada tarjeta muestra: nombre del lead, etiqueta de prioridad, vendedor asignado y fecha de última actividad.
- La vista Kanban es ideal para sesiones de revisión del pipeline en equipo.

### Vista Lista

Las oportunidades se muestran en una tabla con todas las columnas visibles. Permite:

- Ordenar por cualquier columna (nombre, fecha, prioridad, etapa).
- Seleccionar múltiples oportunidades para acciones en lote.
- Ver más oportunidades al mismo tiempo sin necesidad de hacer scroll horizontal.

Usa el ícono de **Kanban / Lista** en la esquina superior del panel para cambiar entre vistas.

---

## Qué información tiene cada oportunidad

Al abrir una oportunidad desde el Kanban o la lista, verás:

| Sección | Contenido |
|---------|-----------|
| **Datos del contacto** | Nombre, empresa, canal de origen, teléfono, correo |
| **Etapa y estado** | En qué parte del pipeline está y su estado actual |
| **Asignación** | Vendedor responsable |
| **Historial de actividad** | Notas, mensajes, cambios de etapa con fecha y autor |
| **Conversación vinculada** | Link directo a la conversación de origen en Peaking |
| **TODOs vinculados** | Tareas de seguimiento pendientes o completadas |

---

## Cómo se crean las oportunidades

Las oportunidades en el CRM pueden originarse de tres maneras:

1. **Automáticamente desde el agente de IA** — si el prompt incluye una instrucción para crear oportunidades cuando se detecta intención de compra.
2. **Manualmente por el equipo** — cualquier miembro puede crear una oportunidad desde el CRM o desde una conversación activa.
3. **Por asignación automática** — cuando la asignación del CRM está activa, las nuevas oportunidades se distribuyen en Round Robin entre los vendedores habilitados.

:::tip[Conecta el agente con el CRM]
Agrega una instrucción en el prompt como: "Cuando el cliente exprese interés en comprar o solicite una cotización, crea una oportunidad en el CRM con su nombre y el producto de interés." Esto convierte el agente en tu primer filtro de ventas.
:::

---

## Preguntas frecuentes

**¿El CRM tiene etapas personalizables?**

Sí. Puedes configurar las etapas del pipeline según el proceso de ventas de tu negocio.

**¿Se puede exportar el pipeline a un archivo?**

Esta función depende del plan. Consulta la sección de Billing para confirmar si tu plan incluye exportación de datos del CRM.

**¿Qué diferencia hay entre el CRM y el módulo de Contactos?**

- **Contactos** es la base de datos de todos los clientes y prospectos — historial de mensajes, datos de contacto.
- **CRM** es el pipeline activo de ventas — oportunidades en proceso con etapas, prioridades y vendedores asignados.

Un mismo contacto puede tener cero, una o varias oportunidades abiertas en el CRM.
