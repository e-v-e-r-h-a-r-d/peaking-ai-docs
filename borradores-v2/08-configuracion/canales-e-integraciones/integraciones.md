---
title: Integraciones
description: "El centro donde conectas WhatsApp y demás canales, tu ERP o CRM, pagos, marketing y herramientas para desarrolladores."
sidebar:
  order: 1
---

**Integraciones** es el centro donde conectas todo lo que el agente y tu equipo usan **fuera de Peaking**: canales de mensajería, ERP y CRM, pagos, anuncios y herramientas para desarrolladores. Lo encuentras en **Configuración › Integraciones**.

[CAPTURA PENDIENTE: pantalla Integraciones con el filtro "Conectadas" y la cuadrícula de tarjetas]

## Qué quieres hacer

| Quiero… | Abre la tarjeta… |
|---|---|
| Conectar WhatsApp, Instagram, Messenger o correo | **Canales** |
| Sincronizar contactos, productos y cotizaciones con Odoo | **Odoo** (abre *Herramientas*) |
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

## Cómo se ve la pantalla

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

## Qué hace cada tarjeta

| Tarjeta | Para qué sirve |
|---|---|
| **Odoo** | Contactos, productos y cotizaciones. Al abrirla entras a **Herramientas** |
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

## Conectar o configurar una integración

1. En **Configuración › Integraciones**, haz clic en la tarjeta.
2. La integración se abre **dentro de Configuración**, con el menú lateral a la vista. Arriba aparece el nombre y su descripción.
3. Sigue los pasos de esa integración.
4. Para volver al listado, haz clic en la flecha **‹ Integraciones** de arriba a la izquierda. Al volver, los estados se actualizan.

:::note[Atajos del menú]
Algunas integraciones también tienen su propia entrada en el menú de Configuración: **Canales**, **Herramientas**, **Formularios de leads** y **Claves de API**. Abren el mismo panel.
:::

## Preguntas frecuentes

**¿Dónde configuro Odoo?**
En **Herramientas**. La tarjeta **Odoo** de este listado te lleva directo ahí.

**Mi tarjeta dice «Revisar permisos». ¿Qué hago?**
Haz clic en **Revisar** y completa lo que falte (hoy se muestra, por ejemplo, cuando el alta en Stripe quedó a medias).

**Tenía un enlace guardado a una pestaña antigua de Integraciones.**
Los enlaces antiguos siguen funcionando: abren el panel equivalente.
