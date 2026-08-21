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

## Auto-tagging — etiquetas aplicadas automáticamente por la IA

El **Auto-tagging** permite que el agente aplique etiquetas de forma automática cuando una conversación cumple un criterio definido en lenguaje natural, sin que ningún agente humano tenga que hacerlo manualmente.

Las reglas de auto-tagging se configuran dentro del panel **Gestionar Etiquetas de Conversación**, en la sección **Auto-tagging**:

![Panel Gestionar Etiquetas de Conversación mostrando la sección Auto-tagging con etiquetas configuradas y sus criterios](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/05-conversaciones/autotagging.png)

Cada etiqueta de auto-tagging tiene:
- **Nombre** — el tag que se aplicará (ej. "Cliente listo para comprar")
- **Cuándo aplicar** — instrucción en lenguaje natural que la IA usa para decidir cuándo poner la etiqueta
- **Toggle Activo** — puedes desactivar temporalmente una regla sin eliminarla

**Ejemplos reales de criterios bien definidos:**
- *"Aplicar cuando el cliente expresa intención clara y explícita de proceder con la compra (ej. 'lo quiero', 'envíenme la factura', 'procedan')"*
- *"Aplicar cuando el cliente pide precios, cotización o presupuesto, aunque todavía no haya enviado la lista completa de ítems"*
- *"Aplicar cuando faltan datos importantes (cantidades, modelo, especificaciones, dirección de entrega, RFC)"*

:::tip[La instrucción define la precisión]
Cuanto más específico sea el criterio, más preciso será el auto-tagging. Evita criterios vagos como "cuando hable de productos" — mejor usa "cuando el cliente pida el precio o disponibilidad de un producto específico por nombre o SKU".
:::

También puedes configurar las reglas de auto-tagging desde el **Estudio de Prompts**. Ver [Auto-tagging y Escalación en el Prompt Studio](/03-prompt-studio/crea-tu-primer-prompt/#configuración-avanzada-agrupación-auto-tagging-y-escalación).

---

## Preguntas frecuentes

**¿El agente de IA puede aplicar tags automáticamente?**

Sí — mediante la función **Auto-tagging**. Configura los criterios en el panel de **Gestionar Etiquetas de Conversación** (sección Auto-tagging) o desde el Estudio de Prompts. La IA aplica la etiqueta de forma automática cada vez que una conversación cumple el criterio definido.

**¿Hay un límite de tags por conversación?**

No hay un límite establecido, pero aplicar más de 3 tags por conversación raramente aporta valor adicional.

**¿Los tags son visibles para el cliente?**

No. Los tags son etiquetas internas — el cliente nunca los ve.
