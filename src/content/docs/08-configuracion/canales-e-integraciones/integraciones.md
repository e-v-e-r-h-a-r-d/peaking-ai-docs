---
title: Integraciones y herramientas
description: "El centro de integraciones de Peaking: la galería, las herramientas conectadas (HubSpot, Zoho, webhooks y APIs) y dónde está cada cosa."
sidebar:
  order: 2
---

**Integraciones** es el centro donde conectas todo lo que el agente y tu equipo usan **fuera de Peaking**: canales de mensajería, ERP y CRM, pagos, anuncios y herramientas para desarrolladores. Lo encuentras en **Configuración › Integraciones**.

[CAPTURA PENDIENTE: pantalla Integraciones con el filtro "Conectadas" y la cuadrícula de tarjetas]

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Conectar WhatsApp, Instagram, Messenger o correo | **Canales** |
| Sincronizar contactos, productos y cotizaciones con Odoo | **Odoo** ([guía paso a paso](/08-configuracion/canales-e-integraciones/odoo/)) |
| Enviar leads y oportunidades a Zoho o GoHighLevel | **Zoho CRM** / **GoHighLevel** |
| Dejar que el agente agende citas | **Google Calendar** |
| Cobrar con link de pago o tarjeta | **Mercado Pago** / **Stripe** |
| Ver qué conversaciones vienen de anuncios | **Meta Ads** |
| Enviar tus ventas a Meta para optimizar anuncios | **Meta CAPI** |
| Que el agente atienda llamadas | **Agentes de voz** |
| Avisar a tus sistemas de cada evento | **Webhooks** |
| Usar listas de precios o existencias por URL | **Catálogos de datos** |
| Conectar cualquier otra API como herramienta del agente | **Integración personalizada** |
| Recibir leads desde un formulario de tu sitio | **Formularios de leads** |
| Conectar Odoo por primera vez | [Conectar Odoo](/08-configuracion/canales-e-integraciones/odoo/) |
| Cambiar el usuario o la clave de Odoo | [Editar una conexión](#editar-o-quitar-una-herramienta) |
| Traer mis productos de Odoo a Peaking | [Sincronizar productos](/08-configuracion/canales-e-integraciones/odoo/#paso-3-sincroniza-productos-y-contactos) |
| Traer mis clientes de Odoo | [Sincronizar contactos](/08-configuracion/canales-e-integraciones/odoo/#paso-3-sincroniza-productos-y-contactos) |
| Que el agente cree cotizaciones en Odoo | [Crear cotizaciones](/08-configuracion/canales-e-integraciones/odoo/#crear-cotizaciones) |
| Elegir qué datos pide el agente al crear un contacto en Odoo | [Campos del contacto](/08-configuracion/canales-e-integraciones/odoo/#campos-del-contacto-en-odoo) |
| Conectar HubSpot, Zoho, un webhook o una API | [Otras herramientas](#otras-herramientas) |
| Eliminar una herramienta | [Editar o quitar](#editar-o-quitar-una-herramienta) |

## Integraciones

### Cómo se ve la pantalla

Arriba verás cuántas integraciones tienes **conectadas** y, a la derecha, un filtro con estas opciones:

| Filtro | Qué muestra |
|---|---|
| **Conectadas** | Solo las que ya conectaste. Es la que se abre por defecto |
| **Todas** | Todo el catálogo |
| **ERP y CRM** | Odoo, Zoho CRM, GoHighLevel, Formularios de leads y Google Calendar |
| **Pagos** | Mercado Pago y Stripe |
| **Marketing** | Meta Ads, Meta CAPI y Canales |
| **Desarrolladores** | Agentes de voz, Webhooks, Catálogos de datos e Integración personalizada |

Cada tarjeta muestra su nombre, una línea que explica para qué sirve, un **estado** y un botón:

| Estado | Botón | Significa |
|---|---|---|
| **Conectada** | **Configurar** | Ya está activa; entra para ajustarla |
| **Disponible** | **Conectar** | Aún no la conectas |
| **Revisar permisos** | **Revisar** | La conexión quedó a medias (por ejemplo, Stripe sin terminar el alta); entra para completarla |

:::tip[¿No ves una integración?]
Cambia el filtro a **Todas**. Si aun así no aparece, puede estar desactivada para tu organización: **Agentes de voz** y **Formularios de leads** solo se muestran cuando Peaking los habilitó para ti.
:::

### Qué hace cada tarjeta

| Tarjeta | Para qué sirve |
|---|---|
| **Odoo** | Contactos, productos y cotizaciones. Al abrirla entras a **Herramientas**; la guía completa está en [Conectar Odoo](/08-configuracion/canales-e-integraciones/odoo/) |
| **Zoho CRM** | Sincroniza leads y oportunidades |
| **GoHighLevel** | Envía oportunidades a tu pipeline |
| **Formularios de leads** | Formularios de tu sitio que mandan leads al CRM y al agente |
| **Google Calendar** | Calendarios y ruteo de citas |
| **Mercado Pago** | Links de pago y pedidos |
| **Stripe** | Cobros con tarjeta y órdenes |
| **Meta Ads** | Conversaciones que vienen de anuncios |
| **Meta CAPI** | Envía ventas a Meta para optimizar |
| **Canales** | WhatsApp, Instagram, Messenger y correo |
| **Agentes de voz** | Llamadas entrantes atendidas por el agente |
| **Webhooks** | Avisa a tus sistemas de cada evento |
| **Catálogos de datos** | Listas de precios y existencias por URL |
| **Integración personalizada** | Conecta cualquier API como herramienta del agente |

### Conectar o configurar una integración

1. En **Configuración › Integraciones**, haz clic en la tarjeta.
2. La integración se abre **dentro de Configuración**, con el menú lateral a la vista. Arriba aparece el nombre y su descripción.
3. Sigue los pasos de esa integración.
4. Para volver al listado, haz clic en la flecha **‹ Integraciones** de arriba a la izquierda. Al volver, los estados se actualizan.

:::note[Atajos del menú]
Algunas integraciones también tienen su propia entrada en el menú de Configuración: **Canales**, **Herramientas**, **Formularios de leads** y **Claves de API**. Abren el mismo panel.
:::

## Herramientas y Odoo

**Herramientas** es donde conectas tu ERP y otros sistemas para que el agente trabaje con tus datos reales. Arriba está la guía de **Odoo** (con su [página propia](/08-configuracion/canales-e-integraciones/odoo/)); abajo, la lista de **Herramientas conectadas** (Odoo incluido) y las demás a la medida: webhooks, APIs, HubSpot y Zoho. Lo abres desde **Configuración › Herramientas** o desde la tarjeta **Odoo** de [Integraciones](/08-configuracion/canales-e-integraciones/integraciones/).

[CAPTURA PENDIENTE: pantalla Herramientas con la guía de Odoo arriba y la lista de herramientas conectadas abajo]

### Odoo

Odoo tiene su propia guía paso a paso: [Conectar Odoo](/08-configuracion/canales-e-integraciones/odoo/). Ahí están los 4 datos, la clave de API, cómo sincronizar productos y contactos, las cotizaciones y los campos del contacto.

### Otras herramientas

Debajo de la guía de Odoo está **Herramientas conectadas**: tu conexión de Odoo y las demás a la medida (webhooks, API, HubSpot o Zoho). Cada fila muestra **Nombre**, **Tipo**, **Descripción**, **Estado** (Conectado / No conectado), **Creado** y **Acciones**.

Para sumar una nueva:

1. Haz clic en **Añadir Integración** (o **Añadir Tu Primera Integración** si aún no hay ninguna).
2. En **Agregar herramienta** elige el **tipo**: **Webhook**, **API**, **Odoo**, **HubSpot**, **Zoho CRM** u **Other**.
3. Completa los campos que pide ese tipo:

| Tipo | Qué te pide |
|---|---|
| **Webhook / API / Other** | Nombre, descripción, **API URL**, **API Key** y, de forma opcional, **API Secret** y **Account Identifier** |
| **HubSpot** | Nombre, descripción y **Token** |
| **Zoho CRM** | **ID de Cliente**, **Secreto de Cliente**, **Centro de Datos** (Global .com, Europa .eu, India .in, Australia .au o Japón .jp) y **Propietario de Lead**. Muestra la **URL de Página Principal** y los **URIs de Redirección Autorizados** para que los copies a tu aplicación OAuth de Zoho |
| **Odoo** | Los 4 datos de arriba |

4. Guarda.

:::note[Zoho se autoriza en un segundo paso]
Una fila de Zoho **No conectada** muestra un botón para completar la autorización OAuth2 con Zoho.
:::

#### Editar o quitar una herramienta

En la columna **Acciones**:

- **Lápiz**: edita la herramienta (para Odoo, ahí están el usuario, la clave y todos los controles de arriba).
- **Papelera**: elimina la herramienta. Te pide confirmar: *«¿Estás seguro de que quieres eliminar esta integración?»*. Al terminar verás *«Integración eliminada exitosamente»*.

:::tip[Después de conectar, díselo al agente]
Para que el agente use una herramienta, decláralo en el prompt. Consulta [Declarar herramientas](/05-agente-ia/instrucciones-del-agente/).
:::

## Preguntas frecuentes

### Integraciones: preguntas

**¿Dónde configuro Odoo?**
En **Herramientas**. La tarjeta **Odoo** de este listado te lleva directo ahí; sigue la guía [Conectar Odoo](/08-configuracion/canales-e-integraciones/odoo/).

**Mi tarjeta dice «Revisar permisos». ¿Qué hago?**
Haz clic en **Revisar** y completa lo que falte (hoy se muestra, por ejemplo, cuando el alta en Stripe quedó a medias).

**Tenía un enlace guardado a una pestaña antigua de Integraciones.**
Los enlaces antiguos siguen funcionando: abren el panel equivalente.

### Herramientas y Odoo: preguntas

**No encuentro dónde configuro Odoo.**
En **Configuración › Herramientas**. La tarjeta **Odoo** de Integraciones te lleva ahí.

**¿Por qué no veo las opciones de sincronizar productos y contactos?**
Aparecen al editar una conexión de Odoo **ya guardada**, y solo con **Odoo Sync** encendido en [Módulos](/08-configuracion/cuenta/).

**¿Cuándo uso «Sync completo»?**
Cuando quieras volver a traer todo el catálogo o todos los contactos. Sin él, solo se procesa lo nuevo o modificado.

**¿Dónde veo Zoho, GoHighLevel, Google Calendar, Meta o los pagos?**
Cada uno tiene su propia tarjeta en [Integraciones](/08-configuracion/canales-e-integraciones/integraciones/).
