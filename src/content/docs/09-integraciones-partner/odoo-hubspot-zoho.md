---
title: Integraciones — HubSpot, Odoo y más
description: Cómo conectar Peaking con HubSpot, Odoo y otras plataformas externas para sincronizar clientes, leads y datos de negocio.
sidebar:
  order: 1
---

Peaking se integra con las principales plataformas de CRM y ERP del mercado. Cuando conectas una integración, el agente de IA puede **leer y escribir datos** en esas plataformas durante las conversaciones — creando leads en HubSpot, consultando órdenes en Odoo, o actualizando registros sin que el equipo tenga que hacerlo manualmente.

---

## Cómo funcionan las integraciones

Las integraciones en Peaking se gestionan desde **Configuración › Integraciones**. Cada integración conecta Peaking con un sistema externo y expone sus funciones como **herramientas disponibles para el agente de IA**.

Para que el agente use una integración activa, debes **declarar la herramienta en el Estudio de Prompts** — indicarle cuándo y cómo usarla. Ver [Declarar herramientas](/03-prompt-studio/declarar-herramientas/).

### Tipos de integraciones disponibles

| Integración | Categoría | Qué permite |
|-------------|-----------|-------------|
| **HubSpot** | CRM | Crear/actualizar contactos y deals desde el chat |
| **Odoo** | ERP | Consultar inventario, crear cotizaciones y órdenes |
| **Zoho CRM** | CRM | Sincronizar leads y actividades de ventas |
| **Zapier / Make / n8n** | Automatización | Disparar flujos en miles de apps externas |
| **Google Calendar** | Productividad | Agendar citas y verificar disponibilidad |
| **API de Peaking** | Desarrollo | Integración personalizada con cualquier sistema |

---

## HubSpot

### Qué puedes hacer con la integración

- Crear **contactos** en HubSpot automáticamente cuando el agente recopila datos de un lead.
- Crear y actualizar **deals** (oportunidades) en el pipeline de HubSpot.
- Consultar si un contacto ya existe antes de crear uno nuevo.
- Registrar la conversación como actividad en el historial del contacto.

### Cómo conectar HubSpot

1. Ve a **Configuración › Integraciones**.
2. Localiza la tarjeta de **HubSpot** y haz clic en **Conectar**.
3. Inicia sesión en tu cuenta de HubSpot y autoriza el acceso.
4. Selecciona el portal de HubSpot que quieres usar (si tienes varios).
5. La integración aparecerá como **Activa**.

### Configura la herramienta en el Prompt

Una vez conectado, declara la herramienta HubSpot en el Estudio de Prompts. Ejemplo de instrucción:

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

1. Ve a **Configuración › Integraciones**.
2. Localiza la tarjeta de **Odoo** y haz clic en **Conectar**.
3. Ingresa la **URL de tu instancia de Odoo** (ej. `https://miempresa.odoo.com`).
4. Ingresa tu **API Key de Odoo** (la encuentras en Odoo › Configuración › Usuarios › tu usuario › API Keys).
5. Selecciona la base de datos si tu instancia tiene múltiples.
6. Haz clic en **Guardar**. La integración aparecerá como **Activa**.

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

1. Ve a **Configuración › Integraciones › Zoho CRM**.
2. Haz clic en **Conectar** y autoriza el acceso con tu cuenta de Zoho.
3. Selecciona el módulo de Zoho que quieres usar (Leads, Contactos, o ambos).
4. Guarda la configuración.

---

## Consideraciones generales

**Permisos necesarios** — La cuenta que uses para autorizar cada integración debe tener permisos suficientes en el sistema externo para las acciones que el agente ejecutará (crear registros, leer datos, actualizar campos).

**Herramientas activas vs. declaradas** — Conectar una integración la hace *disponible*, pero el agente no la usa hasta que la declares explícitamente en el Estudio de Prompts con instrucciones sobre cuándo y cómo usarla.

**Datos en tránsito** — La información que el agente envía a integraciones externas (nombre, email, teléfono del cliente) viaja encriptada. Revisa las políticas de datos de cada plataforma para cumplimiento normativo.

---

## Preguntas frecuentes

**¿Puedo tener varias integraciones activas al mismo tiempo?**

Sí. Puedes tener HubSpot, Odoo y otras integraciones activas simultáneamente. El agente usará la que corresponda según las instrucciones del prompt.

**¿Qué pasa si la integración falla durante una conversación?**

El agente detecta el error y puede notificar al cliente que habrá un seguimiento manual. El error queda registrado en los logs de la integración para que tu equipo pueda revisarlo.

**¿Peaking sincroniza datos históricos de mi CRM?**

No automáticamente. Peaking opera en tiempo real — el agente lee y escribe datos durante la conversación. Para migrar datos históricos, usa las herramientas de importación propias de cada plataforma.

**¿Cómo sé si una integración está funcionando correctamente?**

En **Configuración › Integraciones** cada tarjeta muestra el estado (Activo/Error) y la fecha de la última sincronización exitosa. Si hay errores frecuentes, revisa los permisos de la cuenta conectada.
