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

## Qué ves al abrir una oportunidad

Al hacer clic en una tarjeta del Kanban o en una fila de la lista, se abre el panel de detalle de la oportunidad. El panel tiene dos áreas:

**Lado izquierdo — ficha del lead**, con tres pestañas:

| Pestaña | Contenido |
|---------|-----------|
| **Detalles** | Nombre, empresa, industria, email, teléfono, etapa, prioridad, fuente, campaña, asignado a, notas |
| **Financiero** | Revenue esperado, probabilidad de cierre |
| **Dirección** | Datos de ubicación del lead |

El campo **Fuente** registra el origen del lead — cuando el agente de IA lo creó, aparece `ai_agent`. Si vino de una campaña, aparece el nombre de la campaña.

**Lado derecho — contexto y comunicación**, con dos pestañas:

### Pestaña Timeline

Registro cronológico de todo lo que ha ocurrido con la oportunidad. Tiene dos sub-pestañas:

| Sub-pestaña | Qué contiene |
|-------------|-------------|
| **Comentario** | Campo de texto libre para dejar notas internas. Escribe y haz clic en **Comentar** para guardar. Los comentarios quedan visibles para todo el equipo. |
| **Actividad** | Log automático de eventos: cuándo se creó la oportunidad, cambios de etapa, actividades registradas (llamadas, correos, reuniones), con fecha y autor. |

### Pestaña Conversación

Muestra el **hilo de mensajes completo** con el lead — el mismo hilo que ves en el Panel de Mensajes, pero sin salir del CRM. Desde aquí puedes:

- Ver toda la conversación en contexto.
- **Escribir y enviar mensajes** directamente al lead (campo "Escribe tu mensaje al visitante…").
- Responder con Ctrl+Enter.

:::tip[Todo en un solo lugar]
No necesitas ir al Panel de Mensajes para atender al lead. Desde la tarjeta del CRM tienes la ficha completa, la conversación activa y el historial de actividad — todo sin cambiar de módulo.
:::

---

## Tipos de actividad

El CRM permite registrar distintos tipos de actividad en la pestaña **Timeline › Actividad** de cada oportunidad. Puedes gestionar y crear tus propios tipos desde el botón **Gestionar Tipos de Actividad** dentro del CRM.

Los tipos predeterminados disponibles son:

| Tipo | Cuándo usarlo |
|------|---------------|
| **Cierre** | Para documentar el avance o acuerdo final de la negociación |
| **Demostración** | Cuando se coordinó o realizó una demo del producto |
| **Email** | Para registrar correos enviados o recibidos con el lead |
| **Llamada** | Cuando tuviste contacto telefónico con el prospecto |
| **Nota** | Para observaciones internas sobre el lead |
| **Propuesta** | Cuando se envió o discutió una propuesta comercial |

Puedes crear tipos adicionales con **Crear Nuevo Tipo** (botón + en la pantalla de gestión).

Para agregar una actividad a una oportunidad:

1. Abre la oportunidad desde el Kanban o la lista.
2. Selecciona la pestaña **Timeline** en el panel derecho.
3. Usa la sub-pestaña **Actividad** y selecciona el tipo correspondiente.
4. Agrega el detalle o nota.
5. Guarda.

La actividad queda en el log con fecha y autor.

---

## Cómo se crean las oportunidades

La principal fuente de oportunidades es el **agente de IA** — detecta intención de compra durante las conversaciones y crea la oportunidad automáticamente. El pipeline del CRM está diseñado principalmente para **consultar y dar seguimiento** a lo que el agente ya calificó, no para la captura manual de cada lead.

Sin embargo, las oportunidades pueden originarse de tres maneras:

1. **Automáticamente desde el agente de IA** — si el prompt incluye una instrucción para crear oportunidades cuando se detecta intención de compra (la forma más común). El campo Fuente queda como `ai_agent`.
2. **Manualmente por el equipo** — cualquier miembro puede crear una oportunidad haciendo clic en **+ Nueva Oportunidad**. El formulario incluye: nombre, empresa, industria, email, teléfono, etapa, asignado a, prioridad, revenue esperado, probabilidad de cierre (%), fuente, campaña y notas.
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
