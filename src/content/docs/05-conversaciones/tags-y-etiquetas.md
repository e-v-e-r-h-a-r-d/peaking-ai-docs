---
title: Tags y etiquetas
description: Cómo crear y usar tags para clasificar conversaciones, filtrar por tipo de consulta y obtener datos más precisos de tu operación.
sidebar:
  order: 2
---

Los **tags** (etiquetas) son marcadores que puedes aplicar a las conversaciones para clasificarlas por tipo de consulta, estado del proceso, canal de origen o cualquier otra categoría útil para tu negocio. Ayudan a filtrar el panel, asignar prioridades y analizar patrones en las consultas de tus clientes.

---

## Para qué sirven los tags

| Uso | Ejemplo |
|-----|---------|
| **Clasificar por tipo de consulta** | Cotización, Soporte, Queja, Pedido, Información |
| **Marcar el estado del proceso** | Seguimiento pendiente, En revisión, Escalado |
| **Identificar origen o campaña** | WhatsApp Ads, Referido, Orgánico |
| **Priorizar atención manual** | Urgente, VIP, Segunda llamada |

---

## Cómo crear tags

1. Abre **Configuraciones** en el panel lateral.
2. Navega a la sección de **Tags** (dentro de Configuraciones generales).
3. Haz clic en **+ Nuevo Tag**.
4. Escribe el nombre del tag y elige un color identificador.
5. Guarda.

Los tags creados estarán disponibles para aplicarlos en cualquier conversación.

:::tip[Menos tags, más útiles]
Un sistema de 5–8 tags bien definidos es más poderoso que una lista de 30 que nadie recuerda. Empieza con los tipos de consulta más frecuentes y agrega solo cuando identifiques una necesidad real.
:::

---

## Cómo aplicar un tag a una conversación

1. Abre la conversación en el Panel de Conversaciones.
2. Haz clic en el ícono de etiqueta (🏷) en la fila de la conversación o en el menú de opciones dentro del hilo.
3. Se abre el panel de **Gestionar Etiquetas de Conversación**.
4. Selecciona el tag usando el campo de búsqueda o elige de la lista de **Etiquetas Populares** o **Usadas Recientemente**.
5. El tag queda guardado de inmediato y aparece visible en la lista de conversaciones.

Desde el mismo panel puedes también hacer clic en **Convertir a Lead** para registrar la conversación como una oportunidad en el CRM.

![Panel de Gestionar Etiquetas de Conversación con etiquetas populares y opción Lead Conversion](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/05-conversaciones/gestion-etiquetas-conversacion.png)

Una conversación puede tener **múltiples tags** simultáneamente.

---

## Filtrar conversaciones por tag

En el Panel de Conversaciones, usa el filtro **Tag** para ver solo las conversaciones con una etiqueta específica. Útil para:

- Revisar todas las conversaciones marcadas como "Cotización" al inicio del día de ventas.
- Identificar cuántas conversaciones están marcadas "Seguimiento pendiente" sin resolver.
- Delegar a un miembro del equipo todas las conversaciones de una categoría.

---

## Tags y reportería

Los tags aparecen en el módulo de **Analytics** como una dimensión de análisis. Puedes ver qué tipos de consultas generan más volumen, identificar picos por categoría y tomar decisiones de capacidad con datos reales.

:::note[Consistencia = datos útiles]
Para que los datos de Analytics sean confiables, el equipo debe aplicar los tags de manera consistente. Define con tu equipo cuándo aplica cada tag antes de empezar a usarlos en producción.
:::

---

## Eliminar o editar un tag

1. Ve a _Configuraciones › Tags_.
2. Encuentra el tag en la lista.
3. Haz clic en **Editar** para cambiar el nombre o el color.
4. Para eliminarlo, usa la opción **Eliminar** — las conversaciones que ya lo tenían perderán ese tag.

---

## Preguntas frecuentes

**¿El agente de IA puede aplicar tags automáticamente?**

Sí — mediante la función **Auto-tagging** del Estudio de Prompts. Dentro de cada prompt puedes configurar una regla en lenguaje natural (ej. "cuando el cliente mencione un problema con su envío") y la IA aplicará la etiqueta correspondiente de forma automática cuando la conversación cumpla ese criterio. Consulta la sección de [Auto-tagging en el Estudio de Prompts](/03-prompt-studio/crea-tu-primer-prompt/#configuración-avanzada-auto-tagging-y-escalación) para más detalles.

**¿Hay un límite de tags por conversación?**

No hay un límite establecido, pero aplicar más de 3 tags por conversación raramente aporta valor adicional.

**¿Los tags son visibles para el cliente?**

No. Los tags son etiquetas internas — el cliente nunca los ve.
