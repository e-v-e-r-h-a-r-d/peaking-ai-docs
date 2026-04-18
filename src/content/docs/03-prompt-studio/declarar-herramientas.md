---
title: Declarar herramientas en el Prompt
description: Cómo activar integraciones en el Estudio de Prompts para que el agente de IA use herramientas externas como HubSpot, Odoo o Google Calendar.
sidebar:
  order: 5
---

La verdadera potencia del agente de IA no está solo en su capacidad de conversar, sino en poder **actuar** — interactuar con tus sistemas de negocio. Para que el agente use las integraciones que has conectado (como HubSpot, Odoo, Google Calendar, etc.), es fundamental que le indiques exactamente **cuándo ejecutar cada herramienta**.

Este proceso se llama **declaración de herramientas** y se hace en el Estudio de Prompts.

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

Navega al **Estudio de Prompts** y selecciona el Prompt principal o el prompt específico donde deseas habilitar la funcionalidad de la herramienta.

### Paso 3 — Ubica la Sección "Configuración de Herramientas"

Desplázate hasta la parte inferior del editor del Prompt. Encontrarás la sección titulada **Configuración de Herramientas**.

### Paso 4 — Selecciona la herramienta

Dentro de la sección, haz clic en la herramienta que deseas habilitar (ej. HubSpot, Google Calendar). La herramienta aparecerá listada en la configuración del prompt.

### Paso 5 — Define la lógica: ¿Cuándo ejecutar esta herramienta?

Al seleccionar la herramienta, verás el campo clave: **¿Cuándo ejecutar esta herramienta?** Este es el campo más importante — aquí defines las condiciones bajo las cuales el agente debe activar la integración.

### Paso 6 — Instrucción Detallada (Prompting para la herramienta)

En este campo debes explicar al agente de forma muy específica:
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

**Resultado:** El agente no solo sabe que tiene acceso a HubSpot, sino que también sabe:
- **Cuándo** usarla (intención de compra expresada).
- **Qué datos** recopilar antes de actuar.
- **Cuándo NO** actuar (si faltan datos).

:::tip[Prueba el flujo]
Después de declarar la herramienta, usa el **modo de prueba** del Estudio de Prompts para simular una conversación real y verificar que el agente ejecuta la herramienta en el momento correcto con los datos correctos.
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

Lo más probable es que la instrucción en el campo "¿Cuándo ejecutar esta herramienta?" no sea lo suficientemente específica. Sé más explícito en la condición de activación o en los datos que el agente debe recopilar antes de actuar.

**¿Qué pasa si mi instrucción en el Prompt no es suficientemente detallada?**

La falta de detalle puede llevar al agente a ejecutar incorrectamente — por ejemplo, podría crear un lead en HubSpot sin tener el correo electrónico del cliente, lo que resultaría en un registro incompleto.

**¿Puedo declarar la herramienta en varios Prompts diferentes?**

Sí. Puedes declarar la misma herramienta (ej. Google Calendar) en distintos Prompts con lógicas de negocio diferentes — uno más agresivo para ventas y otro más reactivo para soporte.

**¿Puedo usar la herramienta para consultar datos (lectura) o solo para crear (escritura)?**

Depende de la integración. Peaking permite ambas funcionalidades (lectura y escritura) cuando están disponibles en la integración. El Prompt debe reflejar esta acción (ej. "usa la herramienta para consultar el inventario de X producto").

**¿Qué hacer si el agente no está usando la herramienta correctamente?**

Entra al Estudio de Prompts y refina la instrucción en el campo "¿Cuándo ejecutar esta herramienta?". Añade más contexto sobre las condiciones de activación y los datos que el agente debe validar antes de ejecutar.
