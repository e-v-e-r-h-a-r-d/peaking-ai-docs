---
title: Herramientas — CRM, Pagos y más
description: Cómo conectar Peaking con Go HighLevel, HubSpot, Odoo, Stripe y otras herramientas externas desde la pestaña Herramientas de Integraciones.
sidebar:
  order: 1
---

La pestaña **Herramientas (CRM, Mesa de Ayuda, Calendarios)** de Integraciones centraliza los conectores que permiten al agente de IA interactuar con sistemas externos en tiempo real — CRMs, pasarelas de pago, calendarios y cualquier herramienta propia.

Para que el agente use una integración activa, debes **declarar la herramienta en el Estudio de Prompts** — indicarle cuándo y cómo usarla. Ver [Declarar herramientas](/03-prompt-studio/declarar-herramientas/).

---

## Integraciones nativas disponibles

| Herramienta | Categoría | Estado |
|-------------|-----------|--------|
| **Stripe Connect** | Pagos | Disponible |
| **Mercado Pago** | Pagos | Próximamente |
| **Google Calendar** | Calendario | Disponible |
| **Go HighLevel** | CRM | Disponible |
| **Integraciones Personalizadas** | Cualquier API | Disponible |

---

## Stripe Connect

Conecta tu cuenta de Stripe para que el agente de IA pueda generar links de pago, consultar el estado de transacciones y procesar cobros directamente desde la conversación.

### Cómo conectar Stripe

1. Ve a **Integraciones › Herramientas**.
2. Localiza la tarjeta de **Stripe Connect**.
3. En **Tipo de Cuenta**, selecciona **OAuth (Recomendado)** para conectar tu cuenta existente de forma segura.
4. Haz clic en **Conectar con OAuth**.
5. Inicia sesión en Stripe y autoriza el acceso.

:::tip[Stripe en Pedidos y Carritos]
Para la configuración completa de Stripe — productos, dashboard de ventas, métodos de pago y flujo de carritos — consulta [Stripe — Configuración](/12-pedidos-carritos/stripe-configuracion/).
:::

---

## Go HighLevel

Go HighLevel es un CRM completo. Con la integración, el agente puede gestionar oportunidades y sincronizar contactos automáticamente durante las conversaciones.

### Qué puedes hacer con la integración

- **Gestión de oportunidades** — crear y actualizar deals en el pipeline de Go HighLevel.
- **Sincronización de contactos** — crear o actualizar contactos desde la conversación.

### Cómo conectar Go HighLevel

1. Ve a **Integraciones › Herramientas**.
2. Localiza la tarjeta de **Go HighLevel** (etiquetada como CRM).
3. Haz clic en **Conectar Go HighLevel**.
4. Serás redirigido para autorizar el acceso desde tu cuenta de Go HighLevel.
5. Una vez autorizado, el estado cambiará a **Conectado**.

### Configura la herramienta en el Prompt

```
Usa la herramienta Go HighLevel para crear o actualizar un contacto
cuando el cliente proporcione su nombre y correo electrónico.
Si el cliente expresa interés en comprar, crea una oportunidad en
el pipeline con el valor estimado y la etapa "Interesado".
```

---

## HubSpot

### Qué puedes hacer con la integración

- Crear **contactos** en HubSpot automáticamente cuando el agente recopila datos de un lead.
- Crear y actualizar **deals** (oportunidades) en el pipeline de HubSpot.
- Consultar si un contacto ya existe antes de crear uno nuevo.
- Registrar la conversación como actividad en el historial del contacto.

### Cómo conectar HubSpot

1. Ve a **Integraciones › Herramientas**.
2. Haz clic en **+ Añadir Integración**.
3. Selecciona **HubSpot** del listado de tipos de integración disponibles.
4. Ingresa tu **API Key** de HubSpot y el **Account Identifier**.
5. Haz clic en **Crear Integración**.

### Configura la herramienta en el Prompt

```
Usa la herramienta HubSpot para crear un nuevo lead cuando el cliente
exprese interés en comprar. Antes de crear el lead, asegúrate de tener:
nombre completo, correo electrónico y el producto de interés.
```

:::tip[Evita duplicados]
Instrúyele al agente que consulte si el contacto ya existe en HubSpot antes de crear uno nuevo. Esto evita registros duplicados cuando un cliente regresa con una nueva consulta.
:::

---

## Odoo

### Qué puedes hacer con la integración

- **Consultar inventario** — el agente verifica disponibilidad de productos en tiempo real.
- **Crear cotizaciones** — genera presupuestos en Odoo desde la conversación.
- **Crear órdenes de venta** — convierte una cotización en orden de venta confirmada.
- **Consultar el estado de una orden** — el cliente puede preguntar "¿cuándo llega mi pedido?" y el agente responde con datos reales de Odoo.

### Cómo conectar Odoo

1. Ve a **Integraciones › Herramientas › + Añadir Integración**.
2. Selecciona **Odoo** como tipo de integración.
3. Ingresa la **API Key de Odoo** (la encuentras en Odoo › Configuración › Usuarios › tu usuario › API Keys).
4. En **API URL**, ingresa la URL de tu instancia (ej. `https://miempresa.odoo.com`).
5. Haz clic en **Crear Integración**.

### Configura la herramienta en el Prompt

```
Cuando el cliente solicite una cotización, usa la herramienta Odoo para:
1. Verificar disponibilidad del producto solicitado.
2. Crear la cotización con los SKUs, cantidades y datos del cliente.
3. Confirmar la cotización si el cliente aprueba el precio.
```

---

## Zoho CRM

### Qué puedes hacer con la integración

- Crear y actualizar **leads** y **contactos** en Zoho.
- Registrar **actividades** (llamadas, emails, notas) desde la conversación.
- Consultar el estado de deals existentes.

### Cómo conectar Zoho CRM

1. Ve a **Integraciones › Herramientas › + Añadir Integración**.
2. Selecciona **Zoho CRM** como tipo de integración.
3. Ingresa tu **API Key** y el identificador de tu cuenta de Zoho.
4. Haz clic en **Crear Integración**.

---

## Integraciones Personalizadas

Si tu herramienta no está en la lista de conectores nativos, puedes crear una **Integración Personalizada** conectando cualquier API externa.

### Cómo agregar una integración personalizada

1. Ve a **Integraciones › Herramientas**.
2. Desplázate hasta la sección **Integraciones Personalizadas** y haz clic en **+ Añadir Integración**.
3. Completa el formulario:

| Campo | Descripción |
|-------|-------------|
| **Nombre de Integración** | Nombre identificador (ej. "Mi ERP interno") |
| **Tipo de Integración** | Selecciona la categoría que más se acerque |
| **API Key** | Clave de autenticación de la API externa |
| **Account Identifier** | Correo o ID de la cuenta en el sistema externo |
| **API Secret** *(opcional)* | Clave adicional si la API requiere doble autenticación |
| **API URL** | Endpoint base de la API (ej. `https://api.example.com/v1`) |
| **Descripción** *(opcional)* | Describe qué hace esta integración para documentación interna |

4. Haz clic en **Crear Integración**.

![Panel de Integraciones Personalizadas con formulario de configuración de API](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/09-integraciones/integraciones-personalizados.png)

Una vez creada, la integración aparecerá en la lista de herramientas disponibles para declarar en el Estudio de Prompts.

:::caution[Permisos necesarios]
La API Key que configures debe tener permisos suficientes en el sistema externo para las acciones que el agente ejecutará (crear registros, leer datos, actualizar campos).
:::

---

## Consideraciones generales

**Herramientas activas vs. declaradas** — Conectar una integración la hace *disponible*, pero el agente no la usa hasta que la declares explícitamente en el Estudio de Prompts con instrucciones sobre cuándo y cómo usarla.

**Datos en tránsito** — La información que el agente envía a integraciones externas (nombre, email, teléfono del cliente) viaja encriptada. Revisa las políticas de datos de cada plataforma para cumplimiento normativo.

---

## Preguntas frecuentes

**¿Puedo tener varias integraciones activas al mismo tiempo?**

Sí. Puedes tener Go HighLevel, Google Calendar y una integración personalizada activas simultáneamente. El agente usará la que corresponda según las instrucciones del prompt.

**¿Qué pasa si la integración falla durante una conversación?**

El agente detecta el error y puede notificar al cliente que habrá un seguimiento manual. El error queda registrado en los logs de la integración para que tu equipo pueda revisarlo.

**¿Peaking sincroniza datos históricos de mi CRM?**

No automáticamente. Peaking opera en tiempo real — el agente lee y escribe datos durante la conversación. Para migrar datos históricos, usa las herramientas de importación propias de cada plataforma.

**¿Cómo sé si una integración está funcionando correctamente?**

En **Integraciones › Herramientas** cada tarjeta muestra el estado (Conectado / No Conectado) y el botón para desconectar si es necesario.
