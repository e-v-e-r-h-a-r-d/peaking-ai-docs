---
title: Plantillas de WhatsApp
description: Qué son las plantillas de mensajes aprobadas por Meta, cómo crearlas en WhatsApp Business Manager y cómo enviarlas desde Peaking.
sidebar:
  order: 6
---

Las **Plantillas de WhatsApp** (Message Templates) son mensajes pre-aprobados por Meta que te permiten iniciar o retomar conversaciones con clientes fuera de la ventana de 24 horas. Son el único tipo de mensaje que puedes enviar cuando no ha habido actividad reciente del cliente.

Usarlas correctamente es clave para el seguimiento de leads, notificaciones importantes y campañas de mensajería saliente.

---

## Por qué existen las plantillas

WhatsApp Business Platform tiene una regla de **ventana de 24 horas**: una vez que el cliente envía un mensaje, tienes 24 horas para responderle libremente. Pasado ese tiempo, solo puedes contactarlo usando una plantilla aprobada por Meta.

Las plantillas garantizan que las comunicaciones cumplan las políticas de WhatsApp, protegiendo la integridad de los números y evitando el bloqueo de tu cuenta.

---

## Características de una plantilla

| Elemento | Descripción |
|----------|-------------|
| **Nombre** | Identificador único en minúsculas y sin espacios (ej. `seguimiento_cotizacion`) |
| **Categoría** | Marketing · Utilidad · Autenticación |
| **Idioma** | El idioma en que está escrita (ej. `es` para español) |
| **Cuerpo del mensaje** | El texto de la plantilla, puede incluir variables `{{1}}`, `{{2}}`… |
| **Encabezado** | Opcional — texto, imagen, video o documento |
| **Pie de página** | Texto corto adicional al final del mensaje |
| **Botones** | Opcionales — llamada a la acción o respuestas rápidas |

---

## Tutorial: Crear y sincronizar plantillas en Peaking

### A — Crear la plantilla en WhatsApp Business Manager (WABA)

Las plantillas deben crearse en el **WhatsApp Business Manager** de Meta y ser aprobadas antes de poder usarlas en Peaking.

1. Entra a [business.facebook.com](https://business.facebook.com) con tu cuenta de Meta Business.
2. Ve a **WhatsApp Manager › Herramientas de cuenta › Plantillas de mensajes**.
3. Haz clic en **Crear plantilla**.
4. Completa los campos:
   - Selecciona la **categoría** (Marketing, Utilidad, Autenticación).
   - Escribe el **nombre** de la plantilla.
   - Selecciona el **idioma**.
   - Redacta el **cuerpo del mensaje**. Usa `{{1}}`, `{{2}}`… para variables dinámicas (ej. nombre del cliente, monto, fecha).
5. Agrega encabezado, pie de página y botones si los necesitas.
6. Envía a revisión. Meta puede tardar desde unos minutos hasta 24 horas en aprobarla.

:::caution[Plantillas rechazadas]
Meta rechaza plantillas con contenido promocional agresivo, palabras sensibles o variables sin contexto claro. Si tu plantilla es rechazada, revisa las guías de Meta y ajusta el redactado antes de reenviar.
:::

### B — Sincronizar las plantillas en Peaking

Una vez que tus plantillas estén aprobadas en Meta:

1. Inicia sesión en tu cuenta de Peaking.
2. Ve a **Canales › Plantillas de WhatsApp** en el panel lateral.
3. Haz clic en **Sincronizar Plantillas** (botón en la esquina superior derecha de la pantalla).
4. Peaking cargará automáticamente todas las plantillas aprobadas de tu cuenta de WABA.

![Panel de Plantillas de WhatsApp con filtros por idioma y categoría, mostrando plantilla aprobada](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/09-integraciones/plantillas-whatsapp.png)

La tabla muestra las columnas: **Nombre**, **Idioma** (badge con código de idioma, ej. `es_MX`), **Categoría** (MARKETING, UTILITY, AUTHENTICATION), **Estado** (Aprobado / Pendiente / Rechazado), **Actualizado** y **Acciones** — desde donde puedes previsualizar la plantilla (👁) o enviarla directamente (✈).

Usa los filtros **Todos los idiomas** y **Todas las categorías** en la parte superior para encontrar plantillas específicas cuando tienes varias activas.

---

## Enviar una plantilla en lote (nuevos contactos, existentes o audiencias)

El ícono ✈ de la tabla de plantillas abre el panel **Enviar Template**, que te permite mandar la plantilla a mucho más que una sola conversación.

### Estado y límite de envío

En la parte superior del panel verás tres indicadores:

| Indicador | Qué significa |
|-----------|----------------|
| **Idioma** | El idioma en el que está aprobada la plantilla (ej. `es`) |
| **Estado del número** (ej. `GREEN` · `6 msg/seg`) | La calidad de tu número de WhatsApp según Meta, y la velocidad máxima de envío que te permite |
| **Límite de contactos/24h** | Cuántas plantillas puedes enviar en las próximas 24 horas y cuántas te quedan |

![Panel Enviar Template mostrando idioma, estado del número y límite de 250 contactos por 24 horas](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/02-canales/plantillas-envio-nuevos-contactos.png)

:::tip[El límite crece con tu reputación en Meta]
Conforme Meta apruebe más plantillas y tu número mantenga buena calidad, el límite de 24 horas aumenta automáticamente. No es algo que configures en Peaking.
:::

### Las cuatro formas de enviar

| Pestaña | Para qué sirve |
|---------|-----------------|
| **Nuevos Contactos** | Agrega contactos manualmente o carga un Excel/CSV que aún no existen en Peaking |
| **Contactos Existentes** | Selecciona contactos que ya están en tu base de datos |
| **Audiencias** | Envía a un grupo filtrado dinámicamente por etiquetas, actividad reciente o tipo de lead |
| **Programar** | Define fecha, hora y zona horaria para que el envío salga automáticamente |

#### Nuevos Contactos

Puedes agregar contactos con **+ Agregar Contacto** uno por uno, o con **Cargar Excel / CSV** para varios a la vez.

:::caution[Formato exacto del Excel]
Las columnas del archivo deben ser exactamente **teléfono** (celda A1) y **nombre** (celda B1), en ese orden. El país por defecto se aplica a los teléfonos que no traigan código de país — puedes cambiarlo entre México (+52), Estados Unidos, Colombia, Argentina, Perú, Chile, España y Brasil. El teléfono necesita mínimo 12 dígitos para ser válido.
:::

Si un contacto tiene un error (teléfono vacío o inválido), el panel lo marca en rojo y no te deja continuar hasta corregirlo:

![Tabla de contactos con un error de teléfono vacío detectado antes del envío](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/02-canales/plantillas-envio-validacion-errores.png)

#### Audiencias

Filtra dinámicamente a quién le llega la plantilla, sin tener que armar una lista manualmente:

![Filtros de audiencia: Oportunidades o Conversaciones, etiquetas, tiempo desde el último mensaje y tipo de contacto](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/02-canales/plantillas-envio-audiencias.png)

| Filtro | Opciones |
|--------|----------|
| **Origen** | Oportunidades (del CRM) o Conversaciones |
| **Etiquetas de conversación** | Igual que los tags de [Mensajes](/05-conversaciones/tags-y-etiquetas/) |
| **Tiempo desde último mensaje** | En horas o en días, un valor personalizado |
| **Tipo de contacto** | Solo Leads o Solo No-Leads |

Haz clic en **Calcular Audiencia** antes de continuar — el panel necesita saber a cuántos contactos aplican tus filtros antes de dejarte avanzar al envío.

### Completar los parámetros de la plantilla

Si la plantilla tiene variables (`{{1}}`, `{{2}}`…), decides cómo se llena cada una: con el **nombre del contacto** (distinto para cada destinatario) o con un **valor fijo para todos**.

![Mapeo de variables del template: nombre del contacto o valor fijo por cada parámetro](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/02-canales/plantillas-envio-mapeo-variables.png)

Al final de cada pestaña puedes revisar la **Preview del Template** con los valores ya aplicados, antes de enviar:

![Preview del template renderizado con los valores de las variables ya aplicados](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/02-canales/plantillas-envio-preview.png)

### Programar el envío

En vez de enviar de inmediato, usa la pestaña **Programar** para elegir cuándo sale la plantilla:

![Calendario para programar el envío con hora y zona horaria, por defecto Ciudad de México GMT-6](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/02-canales/plantillas-envio-programar.png)

La zona horaria por defecto es **Ciudad de México (GMT-6)** — cámbiala si tu audiencia está en otro huso horario. El resumen del envío programado solo está disponible para **Nuevos Contactos** y **Contactos Existentes**, no para Audiencias.

:::caution[La mayoría de los problemas de plantillas vienen de Meta, no de Peaking]
Para enviar plantillas de forma confiable, tu **Portafolio Comercial de Meta** debe estar verificado (te piden datos oficiales y el acta constitutiva de la empresa). Revisa las guías de Meta: [Verificación de empresa](https://www.facebook.com/business/help/2058515294227817) y [Portafolios comerciales](https://www.facebook.com/business/help/1095661473946872). Si tu cuenta no está verificada, es la causa más común de plantillas que no se envían o números con calidad baja — no un problema de Peaking.
:::

---

## Enviar una plantilla desde el Panel de Mensajes

Una vez sincronizadas, tu equipo puede enviar plantillas directamente desde el Panel de Mensajes:

### Paso 1 — Accede al Panel de Mensajes

En el panel lateral, haz clic en **Mensajes** (o **Conversaciones**). Navega a la conversación del cliente al que deseas enviar la plantilla.

### Paso 2 — Ubica la conversación

Asegúrate de que la conversación está en estado fuera de ventana (han pasado más de 24 horas desde el último mensaje del cliente) — en ese caso verás el aviso de ventana expirada y el input normal estará deshabilitado.

### Paso 3 — Enviar la plantilla

1. Busca el botón **"Plantilla de WhatsApp"** (ícono de papel o identificado con el ícono de la plantilla, junto al botón de envío).
2. Se desplegará una lista con todas las plantillas aprobadas y sincronizadas.
3. **Selecciona la plantilla** que deseas enviar.
4. Si la plantilla tiene **campos dinámicos** (variables `{{1}}`, `{{2}}`…), la plataforma te pedirá completarlos antes del envío.
5. Confirma el envío. El mensaje será entregado al destinatario incluso si la ventana de 24 horas está cerrada.

---

## Envío desde el agente de IA

El agente puede enviar plantillas automáticamente dentro de flujos de seguimiento. Para habilitarlo, declara en el Estudio de Prompts cuándo debe usar una plantilla específica:

```
Cuando han pasado más de 24 horas sin respuesta del cliente que solicitó
una cotización, envía la plantilla "seguimiento_cotizacion" con su nombre
y el monto cotizado como variables.
```

---

## Preguntas frecuentes

**¿Por qué mis plantillas no aparecen en Peaking?**

Puede deberse a dos razones:
1. Las plantillas aún no han sido aprobadas por Meta.
2. No se ha hecho la sincronización — haz clic en **Sincronizar Plantillas** en la configuración de WhatsApp.

**¿Puedo enviar cualquier mensaje cuando la ventana de 24 horas ha expirado?**

No. Una vez expirada la ventana, solo puedes enviar plantillas aprobadas. Intentar enviar un mensaje libre resultará en error de WhatsApp.

**¿Cómo personalizo el mensaje de la plantilla con el nombre del cliente?**

Usa variables dinámicas al crear la plantilla en WABA: escribe `{{1}}` donde quieres que aparezca el nombre del cliente. Al enviar desde Peaking, la plataforma te pedirá completar ese campo antes de enviarlo.

**¿Quién aprueba las plantillas y cuánto tarda?**

Las plantillas son aprobadas o rechazadas por **Meta (WhatsApp Business API)**. El proceso suele tardar entre algunos minutos y 24 horas. Una vez aprobadas, no necesitas re-enviarlas a menos que modifiques su contenido.

**¿Puedo editar una plantilla en Peaking?**

No. Las plantillas solo se pueden crear y modificar en el **WhatsApp Business Manager (WABA)** de Meta. Una vez modificadas allá, deben ser sincronizadas nuevamente en Peaking para que los cambios apliquen.

**¿Por qué tengo un límite de contactos por 24 horas?**

Es un límite que impone Meta según la calidad y el historial de tu número de WhatsApp, no una restricción de Peaking. Empieza bajo (ej. 250 contactos/24h) y crece automáticamente conforme tu número mantiene buena reputación y Meta aprueba más plantillas.

**¿Puedo usar otro código de país distinto a México?**

Sí. El selector **País por defecto** solo aplica a los teléfonos del archivo o formulario que no incluyan su propio código de país. Actualmente puedes elegir entre México, Estados Unidos, Colombia, Argentina, Perú, Chile, España y Brasil — o escribir el código directamente en el número de cada contacto.
