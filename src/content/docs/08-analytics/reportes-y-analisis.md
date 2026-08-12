---
title: Reportes y análisis con IA
description: Genera reportes automáticos con IA sobre cotizaciones, urgencias, quejas y otros patrones de tus conversaciones, y consulta los reportes que ya guardaste.
sidebar:
  order: 4
---

La pestaña **Reportes** genera análisis automáticos con IA sobre la actividad de tu cuenta — desde cuántas cotizaciones se generaron hasta qué clientes expresaron una queja. A diferencia de [Información de Conversaciones](/08-analytics/peaking-insights/), donde tú escribes la pregunta, aquí eliges un reporte predefinido y la IA hace el análisis completo por ti.

---

## Acceder a Reportes

1. En el panel lateral, haz clic en **Insights**.
2. Selecciona la pestaña **Reportes** (junto a **Explorar**, donde vive Información de Conversaciones).
3. Elige el rango de fechas en el selector superior derecho (por defecto, **Últimos 14 días**).

---

## Tipos de reporte disponibles

![Tarjetas de reportes disponibles: Cotizaciones, Resumen de Conversaciones, Productos pedidos sin encontrar, Urgencias declaradas, Pidieron hablar con humano, Quejas o insatisfacción, Preguntas sin respuesta útil y Menciones de competencia](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/08-analytics/reportes-tipos.png)

Cada tarjeta representa un reporte distinto. Haz clic en **Generar** para que la IA analice el período seleccionado y produzca el resultado.

| Reporte | Qué responde |
|---------|---------------|
| **Cotizaciones** | Cuántas cotizaciones generó tu agente en el período: total, monto y desglose por día y canal |
| **Resumen de Conversaciones** | Volumen de conversaciones, leads generados, tasa de respuesta y traspaso a humano |
| **Productos pedidos sin encontrar** | Clientes que pidieron un producto que el agente no pudo cotizar o encontrar en el catálogo |
| **Urgencias declaradas** | Clientes que expresaron urgencia o una fecha límite en su mensaje |
| **Pidieron hablar con humano** | Conversaciones donde el cliente solicitó explícitamente atención humana |
| **Quejas o insatisfacción** | Clientes que expresaron queja o molestia con el producto, servicio o atención |
| **Preguntas sin respuesta útil** | Preguntas que el agente no pudo responder satisfactoriamente |
| **Menciones de competencia** | Conversaciones donde el cliente mencionó a un competidor |

:::tip[Empieza por Resumen de Conversaciones y Cotizaciones]
Son los dos reportes que dan una visión general más rápida de la salud de tu operación. Los demás son más útiles para investigar un problema específico (ej. por qué suben las quejas) una vez que detectas una alerta ahí.
:::

---

## Leer un reporte generado

![Reportes guardados con KPIs, gráfica de cotizaciones por día, desglose por canal y resumen escrito por IA](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/08-analytics/reportes-guardados.png)

Cada reporte generado queda archivado en **Reportes guardados**, con:

- **KPIs numéricos** en tarjetas — por ejemplo, en Cotizaciones verás Cotizaciones totales, Monto cotizado y Clientes.
- **Gráfica por día** — la evolución del indicador principal a lo largo del rango de fechas.
- **Desglose por canal** — qué proporción del resultado vino de WhatsApp, el Widget u otros canales conectados.
- **Resumen IA** — un párrafo interpretativo que explica qué significan los números y qué patrón detectó la IA, no solo el dato crudo.

Cada tarjeta guardada muestra el rango de fechas que cubre y la fecha en la que se guardó, para que puedas comparar reportes de distintos períodos sin volver a generarlos.

:::note[Un reporte en cero no siempre es un error]
Si un reporte muestra "0 conversaciones" o "0%", generalmente significa que no hubo actividad registrada en el rango de fechas elegido — revisa que el período seleccionado tenga tráfico real antes de asumir que algo falló.
:::

---

## Eliminar un reporte guardado

Cada tarjeta de **Reportes guardados** tiene un ícono de bote de basura en la esquina superior derecha. Haz clic para eliminar ese reporte del historial. Esta acción no afecta las conversaciones originales — solo borra el análisis guardado.

---

## Preguntas frecuentes

**¿Los reportes se generan en tiempo real?**

Sí. Cada vez que haces clic en **Generar**, la IA analiza las conversaciones del rango de fechas seleccionado en ese momento — no son reportes programados ni cacheados.

**¿Puedo cambiar el rango de fechas de un reporte ya guardado?**

No directamente. Si necesitas el mismo reporte con otro rango de fechas, cambia el selector de período y genera el reporte de nuevo — quedará guardado como una entrada independiente.

**¿En qué se diferencia un reporte de Información de Conversaciones?**

Un reporte es una plantilla fija con KPIs y gráficas sobre un tema específico (cotizaciones, quejas, urgencias…). [Información de Conversaciones](/08-analytics/peaking-insights/) es un chat abierto donde escribes cualquier pregunta en lenguaje natural. Usa los reportes para seguimiento recurrente y Información de Conversaciones para investigar algo puntual.

**¿Los reportes cuentan conversaciones de todos los canales?**

Sí, a menos que el reporte específico desglose por canal (como Cotizaciones). El análisis cubre todas las conversaciones de la cuenta en el rango de fechas seleccionado.
