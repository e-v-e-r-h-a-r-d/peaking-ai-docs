---
title: Dashboard overview
description: Recorrido por el Resumen del Panel de Insights — KPIs principales, gráfica de conversaciones, asistencia requerida y conversaciones recientes.
sidebar:
  order: 1
---

El **Resumen del Panel** es la vista principal de Insights. Te da de un vistazo el estado de tu operación: cuántas conversaciones manejó la IA, cuántas generaron leads, cuántas escalaron a humanos y cómo se comparan con el período anterior.

---

## Filtros del panel

En la esquina superior derecha encontrarás dos selectores:

| Filtro | Opciones |
|--------|----------|
| **Canal** | Todos los canales · WhatsApp · Instagram · Messenger · Widget web |
| **Período** | Esta Semana · Este Mes · Últimos 7 días · Últimos 30 días · Rango personalizado |

Todos los indicadores del panel se actualizan en tiempo real según los filtros seleccionados.

---

## KPIs principales

La fila superior muestra cinco indicadores clave. Cada tarjeta incluye el valor actual y un badge de color con el porcentaje de cambio respecto al período anterior.

| KPI | Qué mide |
|-----|---------|
| **Conversaciones Totales** | Número de conversaciones iniciadas o activas en el período |
| **Preguntas Respondidas** | Mensajes del cliente que recibieron respuesta del agente de IA |
| **Leads Generados** | Contactos que el agente calificó como oportunidad de venta |
| **Tasa de Conversión** | Porcentaje de conversaciones que terminaron en una acción de venta |
| **Requirió Asistencia** | Conversaciones donde el agente solicitó intervención humana |

**Cómo leer los badges:**
- Badge **rojo** con porcentaje alto → caída respecto al período anterior
- Badge **verde** → crecimiento positivo
- El número muestra la variación porcentual, no el valor absoluto

:::tip[Leads Generados es clickable]
La tarjeta de Leads Generados tiene una flecha (`>`). Al hacer clic, te lleva directamente al CRM filtrado por los leads de ese período.
:::

---

## Análisis de Conversaciones

La gráfica de **Análisis de Conversaciones** muestra la evolución de tres métricas en el tiempo:

| Serie | Color | Qué representa |
|-------|-------|----------------|
| **Conversaciones** | Azul oscuro | Total de conversaciones por período |
| **Respondidas** | Azul claro | Conversaciones donde el agente respondió |
| **Leads** | Rojo | Conversaciones que generaron un lead |

### Tipos de gráfica

En la parte superior derecha de la gráfica puedes cambiar la visualización:

- **Área** — curva rellena, ideal para ver tendencias generales
- **Línea** — solo el trazo, útil para comparar series con valores muy distintos
- **Barras** — columnas por período, más fácil para comparar día a día

---

## Asistencia Requerida

Esta sección lista las conversaciones donde el agente de IA no pudo resolver la consulta por sí solo y marcó que necesita intervención humana.

Cada fila muestra:
- **Nombre del contacto** y canal de origen (ej. WhatsApp)
- **Tiempo transcurrido** desde que se marcó como asistencia requerida
- **Etiqueta de estado** — por ejemplo, `Fuera de Ventana (24h)` indica que el contacto salió de la ventana de conversación activa de 24 horas de WhatsApp

:::caution[Atención urgente]
Los contactos etiquetados como "Fuera de Ventana (24h)" en WhatsApp ya no pueden recibir mensajes de texto libre — solo mediante plantillas aprobadas. Prioriza estos casos para evitar perder el contacto.
:::

---

## Conversaciones Recientes

Lista de las últimas conversaciones registradas en el sistema. Cada fila incluye el nombre del contacto, el tipo de evento ("New conversation") y el tiempo transcurrido.

Haz clic en cualquier fila para ir directamente al hilo de la conversación en el **Panel de Mensajes**.

---

## Preguntas frecuentes

**¿Con qué frecuencia se actualiza el dashboard?**

Los datos se actualizan en tiempo real — cada vez que llega un mensaje o se resuelve una conversación, los KPIs se recalculan automáticamente.

**¿Puedo exportar los datos del dashboard?**

Los datos de conversaciones y agentes se pueden exportar desde el módulo de **Mensajes**. El dashboard de Insights es principalmente una vista de lectura.

**¿Por qué los porcentajes de cambio aparecen en rojo?**

Un badge rojo indica que el valor bajó respecto al período anterior. En contextos como "Requirió Asistencia", una caída (rojo) es positiva — significa que la IA necesitó menos ayuda humana. Interpreta siempre el porcentaje en función del KPI específico.
