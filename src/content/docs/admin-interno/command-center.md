---
title: Command Center
description: Panel de monitoreo maestro para todas las cuentas de Peaking — salud de IA, conversaciones, workflows y análisis por organización.
sidebar:
  order: 6
---

El **Command Center** (Centro de Control de Clientes) es el panel de administración global de Peaking. Desde aquí el equipo interno puede monitorear el rendimiento de todas las cuentas activas en tiempo real — sin tener que entrar una a una.

---

## Vista principal — Lista de organizaciones

![Centro de Control de Clientes con tabla de organizaciones activas](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/admin-interno/command-center/command-center-panel.png)

La tabla principal muestra todas las organizaciones activas con sus métricas clave:

| Columna | Descripción |
|---------|-------------|
| **Organización** | Nombre de la cuenta y plan (ej. `peaking-pro`, `peaking-one`) |
| **Salud** | Puntuación de salud de 0 a 100. Verde = buena salud · Amarillo = alerta · Rojo = problema |
| **Conversaciones** | Total de conversaciones en el período seleccionado |
| **Éxito IA** | Porcentaje de conversaciones resueltas de forma autónoma por la IA |
| **Resp. Promedio** | Tiempo promedio de respuesta del agente (en ms) |
| **Leads** | Número de leads generados en el período |
| **Workflows** | Cantidad de workflows activos (y errores entre paréntesis si los hay) |
| **Errores** | Errores detectados — badge rojo indica problemas que requieren revisión |
| **Última Actividad** | Cuándo fue la última conversación registrada |
| **Acciones** | Entrar a la cuenta (→) o ver el detalle del perfil (↗) |

### Filtros del panel

- **Período** — selector en la esquina superior derecha: 7 días, 30 días, etc.
- **Ordenar por Puntuación de Salud** — dropdown que ordena la lista de peor a mejor salud para priorizar cuentas que necesitan atención.

### Puntuación de Salud

La Puntuación de Salud es un indicador compuesto de 0 a 100 que combina:
- Tasa de Éxito IA
- Tiempo de respuesta
- Errores en workflows
- Actividad reciente

Una puntuación baja es una señal temprana de que algo necesita revisión — antes de que el cliente lo reporte.

---

## Perfil de organización — Resumen

Al hacer clic en una organización (→ derecha o nombre), se abre su perfil con seis pestañas:

| Pestaña | Contenido |
|---------|-----------|
| **Resumen** | KPIs principales + gráfica de tendencia de conversaciones |
| **Rendimiento IA** | Gráfica de éxito IA y errores por día |
| **Workflows** | Lista de workflows activos + ejecuciones recientes |
| **Prompts** | Prompts configurados y su estado |
| **Análisis IA** | Herramientas de diagnóstico por IA |
| **Evaluador de Impacto** | Evaluación del impacto comercial de la IA en la cuenta |

Desde cualquier pestaña puedes hacer clic en **Entrar a la Cuenta** para acceder directamente a la cuenta del cliente.

### Pestaña Resumen

![Resumen de organización con KPIs y gráfica de tendencia](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/admin-interno/command-center/resumen-cc.png)

Muestra los 5 KPIs principales del período seleccionado:
- **Puntuación de Salud**
- **Conversaciones**
- **Éxito IA** (porcentaje)
- **Leads**
- **Errores**

La gráfica **Tendencia** muestra la evolución del volumen de conversaciones en el tiempo. Picos o caídas bruscas indican eventos que vale la pena investigar.

---

## Pestaña Rendimiento IA

![Gráfica de Rendimiento IA y Errores por día](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/admin-interno/command-center/rendimiento-ai.png)

Dos gráficas superpuestas:

**Rendimiento IA** — línea que muestra el porcentaje de éxito de la IA día a día. Lo ideal es que se mantenga cercano a 100%. Caídas sostenidas indican problemas con el prompt, la base de conocimientos o integraciones rotas.

**Errors per Day** — barras que muestran la cantidad de errores por día. Un pico de errores correlacionado con una caída de Rendimiento IA confirma un problema técnico. Un pico de errores sin caída de éxito puede ser un error de integración puntual.

---

## Pestaña Workflows

![Lista de workflows activos y ejecuciones recientes de la cuenta](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/admin-interno/command-center/workflows-cc.png)

Muestra todos los workflows configurados en la cuenta con:
- **Name** — nombre del workflow
- **Status** — Active / Inactive
- **Executions** — cuántas veces se ejecutó en el período
- **Updated** — última modificación

**Recent Executions** — tabla de las últimas ejecuciones con Workflow, Status (completed / error), Duration y Started. La columna **Error** muestra `—` cuando no hubo error, o el detalle del error si falló.

Úsala para detectar workflows con alta tasa de errores o workflows configurados pero sin ejecuciones (indicio de que el trigger no está funcionando).

---

## Pestaña Análisis IA

![Panel de Análisis IA con tres herramientas de diagnóstico](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/admin-interno/command-center/analisis-cc.png)

Tres herramientas de diagnóstico impulsadas por IA que analizan la cuenta:

| Herramienta | Para qué sirve |
|-------------|----------------|
| **Análisis de Errores** | Identifica patrones de error y sus causas raíz en los workflows y conversaciones |
| **Análisis de Prompts** | Evalúa la calidad y coherencia de los prompts configurados en la cuenta |
| **Análisis de Conversaciones** | Analiza un muestreo de conversaciones recientes para detectar problemas de comportamiento del agente |

Selecciona cuántos registros analizar (por defecto 50) y haz clic en el botón correspondiente. El análisis tarda unos segundos y genera un reporte interpretable.

---

## Preguntas frecuentes

**¿Con qué frecuencia se actualizan los datos del Command Center?**

Los datos se actualizan en tiempo real conforme llegan conversaciones y se ejecutan workflows. La columna "Última Actividad" confirma cuándo ocurrió el último evento registrado.

**¿Puedo hacer cambios en una cuenta desde el Command Center?**

No directamente. El Command Center es una vista de monitoreo de solo lectura. Para hacer cambios en una cuenta, usa el botón **Entrar a la Cuenta** que te lleva al panel de esa organización con acceso completo.

**¿Qué significa un badge de errores alto (ej. 36 errores)?**

Un número alto en la columna Errores indica que hay workflows fallando con frecuencia. Entra al perfil de la cuenta, ve a la pestaña Workflows y revisa la columna Error en Recent Executions para identificar cuál es el workflow problemático.
