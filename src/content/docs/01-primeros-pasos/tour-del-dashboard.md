---
title: Tour del Panel de Control
description: "Guía completa del Panel de Control de Peaking: métricas clave, análisis de conversaciones, asistencia requerida y conversaciones recientes."
sidebar:
  order: 2
---

El **Panel de Control** es la primera pantalla que ves al ingresar a Peaking. Desde aquí tienes una vista de todo lo que está sucediendo con tu asistente de IA: cuántas conversaciones está atendiendo, cuántos leads generó, qué conversaciones necesitan tu atención y cómo evolucionaron tus resultados en el tiempo.

:::tip[Acceso rápido]
Para volver al Panel de Control en cualquier momento, haz clic en el ícono de inicio en el panel lateral izquierdo de Peaking.
:::

---

## Resumen del Panel

La sección **Resumen del Panel** concentra las métricas más importantes de tu operación. En la esquina superior derecha encontrarás dos filtros:

| Filtro | Descripción |
|--------|-------------|
| **Canal** ("Todos los...") | Filtra las métricas por canal: WhatsApp, Instagram, Messenger o Widget |
| **Período** ("Esta Semana") | Selecciona el rango de tiempo: esta semana, este mes, personalizado, etc. |

### Tarjetas de métricas (KPIs)

Debajo de los filtros verás cinco tarjetas con los indicadores principales. Cada una muestra el valor del período actual y una comparación **vs. previous** (vs. período anterior) en color rojo (bajó) o verde (subió).

| Métrica | Ícono | Qué mide |
|---------|-------|----------|
| **Conversaciones Totales** | Burbuja de chat | Total de conversaciones iniciadas en el período seleccionado |
| **Preguntas Respondidas** | Gráfica de barras | Preguntas que tu agente de IA respondió de forma autónoma |
| **Leads Generados** | Personas | Contactos que la IA identificó como prospectos calificados |
| **Tasa de Conversión** | Círculo con check | Porcentaje de conversaciones que resultaron en una venta o cita agendada |
| **Requirió Asistencia** | Persona con menos | Conversaciones en las que el cliente solicitó o necesitó atención humana |

:::note[Nota sobre Leads Generados]
La tarjeta de **Leads Generados** tiene una flecha `>` que te lleva directamente al listado de leads en el módulo de CRM.
:::

---

## Análisis de Conversaciones

La sección **Análisis de Conversaciones** muestra una gráfica de área con la evolución de tus conversaciones a lo largo del tiempo. En la esquina superior derecha puedes cambiar el tipo de visualización (Área, Línea, Barras).

La gráfica tiene tres series de datos:

| Serie | Color | Qué representa |
|-------|-------|----------------|
| **Conversaciones** | Azul oscuro | Total de conversaciones iniciadas |
| **Respondidas** | Azul claro | Conversaciones que la IA respondió sin intervención humana |
| **Leads** | Rojo | Conversaciones en las que se identificó un prospecto calificado |

Al pasar el cursor sobre la gráfica verás el detalle de cada fecha. Usa esta vista para identificar picos de actividad, caídas en el volumen y el impacto de cambios en la configuración de tu agente.

---

## Asistencia Requerida

El panel **Asistencia Requerida** (esquina inferior izquierda) lista las conversaciones que tu agente de IA no pudo resolver de forma autónoma y que necesitan revisión de tu equipo.

Cada fila muestra:
- **Nombre del contacto** y el canal desde el que escribió (Instagram, Messenger, WhatsApp)
- **Tiempo transcurrido** desde el último mensaje ("1d ago", "46d ago"…)
- **Estado** — la etiqueta `Fuera de Ventana (24h)` indica que ya venció el período de respuesta libre de Meta y la conversación no puede retomarse con mensajes de texto libre sin usar una plantilla aprobada

Haz clic en la flecha `→` de cualquier fila para ir directamente a esa conversación en el módulo de Mensajes.

:::caution[Atiende las conversaciones con etiqueta "Fuera de Ventana"]
Una vez vencida la ventana de 24 horas, solo puedes contactar al cliente usando una **plantilla de mensaje aprobada** por Meta. Si no tienes plantillas configuradas, el contacto queda bloqueado hasta que el cliente te vuelva a escribir.
:::

---

## Conversaciones Recientes

El panel **Conversaciones Recientes** (esquina inferior derecha) muestra el flujo en tiempo real de los últimos chats que llegaron a tu bandeja.

Cada fila muestra:
- **Nombre del contacto**
- **Ícono del canal** — verde (WhatsApp), rosa/morado (Instagram), azul (Messenger)
- **Estado** — "New conversation" cuando es la primera vez que ese contacto escribe
- **Tiempo** desde el último mensaje
- **Check verde** — indica que la conversación fue atendida o cerrada

Haz clic en **Ver Todas las Conversaciones** al final del panel para ir al módulo de Mensajes con la vista completa.

---

## Preguntas frecuentes

**¿Cada cuánto se actualizan los datos del panel?**

Los datos se actualizan en tiempo real. Si no ves los cambios más recientes, recarga la página.

**¿Puedo filtrar las métricas por canal específico?**

Sí. Usa el filtro **"Todos los..."** en la esquina superior derecha del Resumen del Panel para ver métricas separadas por WhatsApp, Instagram, Messenger o Widget.

**¿Qué significa "Tasa de Conversión"?**

Es el porcentaje de conversaciones que terminaron en una acción concreta: una compra completada o una cita agendada. Una tasa alta indica que tu agente está logrando convertir interés en resultados reales.

**¿Por qué hay conversaciones en "Asistencia Requerida" con muchos días de antigüedad?**

Esas son conversaciones que nunca fueron atendidas o resueltas. El contador sigue corriendo desde el último mensaje del cliente. Es recomendable revisarlas y, si ya no tienen vigencia, cerrarlas manualmente.

**¿El dashboard muestra datos de todos mis canales juntos?**

Por defecto sí. Usa el filtro de canal para ver las métricas separadas por WhatsApp, Instagram, Messenger o Widget.

**¿Por qué no veo datos recién configuré mi cuenta?**

Los datos aparecen cuando empiezan a llegar conversaciones. Si acabas de conectar un canal, el panel mostrará ceros hasta que llegue el primer mensaje.
