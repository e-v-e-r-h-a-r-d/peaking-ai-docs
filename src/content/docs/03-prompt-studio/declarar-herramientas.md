---
title: Declarar herramientas en el Prompt
description: Cómo activar integraciones en el Estudio de Prompts para que el agente de IA use herramientas externas como HubSpot, Odoo o Google Calendar.
sidebar:
  order: 5
---

La verdadera potencia del agente de IA no está solo en su capacidad de conversar, sino en poder **actuar** — interactuar con tus sistemas de negocio. Para que el agente use las integraciones que has conectado (como HubSpot, Odoo, Google Calendar, etc.), es fundamental que le indiques exactamente **cuándo ejecutar cada herramienta**.

Este proceso se llama **declaración de herramientas** y se hace en el Estudio de Prompts.

![Vista del Estudio de Prompts — Prompt Library con todos los prompts de la cuenta](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/03-prompt-studio/prompt-studio-editor.png)

:::note[Conectar ≠ Activar]
Conectar una integración en **Configuración › Integraciones** la hace disponible para el agente, pero no la activa automáticamente. Sin una declaración clara en el Prompt, el agente no sabrá cuándo ni cómo usarla.
:::

---

## Por qué es importante declarar las herramientas

Una declaración precisa es la diferencia entre un asistente que simplemente responde y uno que **ejecuta tareas** — crear leads, agendar citas, consultar inventario, confirmar órdenes.

La calidad de la acción depende directamente de la calidad de la instrucción. Una instrucción vaga puede llevar al agente a ejecutar la herramienta de forma incorrecta o incompleta.

---

## Cómo declarar una herramienta paso a paso

### Paso 1 — Conexión previa de la herramienta

Asegúrate de que la integración (ej. HubSpot, Odoo, Google Calendar) ya está conectada en **Configuración › Integraciones**. Si no está conectada, no aparecerá disponible en el Prompt.

### Paso 2 — Accede al Estudio de Prompts

Navega al **Estudio de Prompts** y selecciona el prompt donde deseas habilitar la funcionalidad de la herramienta. Haz clic en el ícono de ajustes (⚙️) de ese prompt.

### Paso 3 — Ubica la sección "Tools Configuration"

Dentro del editor del prompt, verás dos pestañas: **Tools** y **Documents**. Selecciona **Tools**. Aquí aparecen todas las herramientas disponibles para este prompt.

![Sección Tools Configuration con las herramientas disponibles para el prompt](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/03-prompt-studio/prompt-studio-herramientas.png)

### Paso 4 — Selecciona la herramienta

Haz clic en la herramienta que deseas habilitar (ej. Catálogo de Productos, Tareas Peaking, Odoo). La tarjeta se activará visualmente.

### Paso 5 — Define la lógica: ¿Cuándo ejecutar esta herramienta?

Al activar la herramienta, aparecerá un campo de texto donde defines las condiciones bajo las cuales el agente debe activarla. Este es el campo más importante.

### Paso 6 — Instrucción detallada

En este campo explica al agente de forma muy específica:
- **Qué condiciones** deben cumplirse en la conversación.
- **Qué información** debe recopilar y validar antes de ejecutar.
- **Qué hacer** exactamente con la herramienta.

Sé lo más específico posible — el agente actúa exactamente según lo que le indicas.

---

## Ejemplo: Declarar HubSpot para crear leads

```
Solo debes usar la herramienta HubSpot para crear un nuevo lead
cuando el cliente haya expresado su interés en una demostración,
una cotización o cualquier servicio de venta.

Antes de ejecutar la herramienta, debes asegurarte de haber
recopilado y confirmado los siguientes datos del cliente:
- Nombre completo
- Correo electrónico
- Teléfono
- Empresa (si aplica)
- Producto o servicio de interés

No crees el lead hasta tener todos estos datos confirmados.
```

**Resultado:** El agente no solo sabe que tiene acceso a HubSpot, sino también:
- **Cuándo** usarla (intención de compra expresada).
- **Qué datos** recopilar antes de actuar.
- **Cuándo NO** actuar (si faltan datos).

---

## Probar la herramienta con Peaking Lab

Después de declarar la herramienta, usa el **Peaking Lab** para simular una conversación real y verificar que el agente la ejecuta en el momento correcto con los datos correctos.

![Peaking Lab — panel de prueba integrado en el Estudio de Prompts](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/03-prompt-studio/prompt-studio-lab.png)

El Peaking Lab ejecuta el prompt activo con todas sus herramientas declaradas. Puedes ver en tiempo real si el agente consulta la herramienta y con qué datos.

:::tip[Prueba el caso de activación y el de no-activación]
Simula dos conversaciones: una donde el cliente sí expresa intención de compra y otra donde no. Verifica que la herramienta se dispara solo cuando debe hacerlo.
:::

---

## Declarar la misma herramienta en múltiples Prompts

Puedes declarar la misma herramienta (ej. Google Calendar) en distintos Prompts con lógicas diferentes. Por ejemplo:

- **Prompt de Ventas** — activa Google Calendar cuando el cliente pide una demo.
- **Prompt de Soporte** — activa Google Calendar cuando el cliente necesita una llamada de seguimiento técnico.

Esto es útil cuando tienes flujos distintos para distintos equipos o productos.

---

## Preguntas frecuentes

**¿Por qué el agente no usa la herramienta aunque está declarada?**

Lo más probable es que la instrucción no sea lo suficientemente específica. Sé más explícito en la condición de activación o en los datos que el agente debe recopilar antes de actuar.

**¿Qué pasa si mi instrucción no es suficientemente detallada?**

La falta de detalle puede llevar al agente a ejecutar incorrectamente — por ejemplo, podría crear un lead en HubSpot sin tener el correo electrónico del cliente, resultando en un registro incompleto.

**¿Puedo declarar la herramienta en varios Prompts diferentes?**

Sí. Puedes declarar la misma herramienta en distintos Prompts con lógicas de negocio diferentes — uno más agresivo para ventas y otro más reactivo para soporte.

**¿Puedo usar la herramienta para consultar datos (lectura) o solo para crear (escritura)?**

Depende de la integración. Peaking permite ambas funcionalidades cuando están disponibles. El Prompt debe reflejar la acción (ej. "usa la herramienta para consultar el inventario del producto X").

**¿Qué hacer si el agente no está usando la herramienta correctamente?**

Entra al Estudio de Prompts y refina la instrucción. Añade más contexto sobre las condiciones de activación y los datos que el agente debe validar antes de ejecutar. Usa el Peaking Lab para probar el ajuste antes de publicar.
