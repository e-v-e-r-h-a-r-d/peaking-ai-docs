---
title: Métricas clave y KPIs
description: Definición e interpretación de los cinco indicadores principales del dashboard de Insights de Peaking.
sidebar:
  order: 2
---

El dashboard de Insights muestra cinco KPIs principales que miden la efectividad de tu agente de IA y la salud de tu operación de atención al cliente. Esta guía explica qué mide cada uno y cómo interpretarlo.

---

## Los cinco KPIs principales

### Conversaciones Totales

**Qué mide:** El número de conversaciones únicas que tuvieron actividad en el período seleccionado. Incluye conversaciones nuevas y conversaciones existentes con mensajes nuevos.

**Cómo interpretarlo:**
- Un volumen consistente indica operación estable.
- Picos inusuales pueden indicar una campaña activa, un problema de servicio o una mención viral.
- Caídas abruptas pueden señalar un problema de conectividad en algún canal.

**Buena señal:** El volumen crece gradualmente semana a semana, alineado con el crecimiento de tu negocio.

---

### Preguntas Respondidas

**Qué mide:** El número de mensajes del cliente que recibieron una respuesta del agente de IA. No incluye respuestas de agentes humanos.

**Cómo interpretarlo:**
- Una tasa alta de Preguntas Respondidas / Conversaciones Totales indica que el agente está manejando bien el volumen.
- Si este número es significativamente menor que Conversaciones Totales, muchas conversaciones pueden estar sin respuesta o escalando rápidamente a humanos.

**Buena señal:** Preguntas Respondidas ≈ Conversaciones Totales (el agente resuelve la mayoría sin necesitar ayuda).

---

### Leads Generados

**Qué mide:** El número de contactos que el agente calificó como oportunidades de venta y registró en el CRM durante el período.

**Cómo interpretarlo:**
- Este KPI conecta directamente el rendimiento de la IA con el impacto comercial.
- Un número bajo puede indicar que el agente no tiene instrucciones claras para calificar leads, o que el volumen de conversaciones con intención de compra es bajo.
- Haz clic en la tarjeta para ir directamente al CRM filtrado por estos leads.

**Buena señal:** El número de leads crece en proporción al volumen de conversaciones, o la tasa de conversión de conversación a lead mejora con el tiempo.

---

### Tasa de Conversión

**Qué mide:** El porcentaje de conversaciones que resultaron en una acción de venta (lead creado, cotización enviada, orden generada).

**Fórmula:** `(Leads Generados / Conversaciones Totales) × 100`

**Cómo interpretarlo:**
- La tasa de conversión varía mucho según el sector y el tipo de negocio. No hay un número universal "bueno".
- Lo importante es la tendencia: ¿está subiendo, bajando o estable?
- Una tasa baja con volumen alto puede ser normal si atiendes muchas consultas de soporte junto con consultas de ventas.

**Buena señal:** La tasa se mantiene estable o crece mientras el volumen también aumenta.

---

### Requirió Asistencia

**Qué mide:** El número de conversaciones donde el agente de IA detectó que no podía resolver la consulta por sí solo y solicitó intervención de un agente humano.

**Cómo interpretarlo:**
- Un número alto puede indicar que el prompt del agente no cubre los temas frecuentes, que hay preguntas fuera del alcance configurado, o que los clientes hacen solicitudes muy específicas.
- Un número bajo es generalmente positivo — significa que el agente resuelve más de forma autónoma.
- Revisa los temas recurrentes en **Información de Conversaciones** para identificar qué temas causan más escalamientos y mejorar el prompt.

**Buena señal:** El número de asistencias requeridas decrece semana a semana mientras el volumen de conversaciones crece.

---

## Badges de variación (vs. previous)

Cada KPI muestra un badge con el porcentaje de cambio respecto al período anterior:

| Color | Significado |
|-------|-------------|
| **Verde** | El valor aumentó respecto al período anterior |
| **Rojo** | El valor disminuyó respecto al período anterior |

:::note[El rojo no siempre es malo]
Para **Requirió Asistencia**, un badge rojo (caída) es positivo — significa que el agente necesitó menos ayuda humana. Para **Conversaciones Totales** o **Leads Generados**, un badge rojo sí indica una caída que vale la pena investigar.
:::

---

## Cómo usar estos KPIs en conjunto

Los cinco KPIs cuentan una historia completa cuando se leen juntos:

**Escenario 1 — IA funcionando bien:**
- Conversaciones Totales ↑ · Preguntas Respondidas ↑ · Leads Generados ↑ · Requirió Asistencia ↓

**Escenario 2 — El agente tiene gaps de conocimiento:**
- Conversaciones Totales normal · Preguntas Respondidas bajo · Requirió Asistencia ↑
- Acción: revisar el prompt y añadir casos no cubiertos en la Base de Conocimientos.

**Escenario 3 — Bajo rendimiento comercial:**
- Conversaciones Totales alto · Leads Generados bajo · Tasa de Conversión baja
- Acción: revisar las instrucciones de calificación de leads en el prompt y ajustar los criterios.
