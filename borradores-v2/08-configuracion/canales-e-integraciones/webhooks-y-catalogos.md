---
title: Webhooks y Catálogos de datos
description: "Conecta tus sistemas: recibe en un webhook los mensajes y eventos de WhatsApp, y sincroniza listas de precios o existencias desde una URL externa."
sidebar:
  order: 8
---

Dos integraciones de la categoría **Desarrolladores** en **Configuración › Integraciones** para conectar Peaking con tus propios sistemas:

| Tarjeta | Para qué sirve |
|---|---|
| **Webhooks** | Avisa a tus sistemas (por ejemplo, n8n) de los mensajes y eventos de WhatsApp |
| **Catálogos de datos** | Sincroniza listas de precios y existencias desde una URL |

[CAPTURA PENDIENTE: panel Webhooks con la URL y el botón de prueba, y panel Catálogos de datos con la tabla de catálogos y su frecuencia de sincronización]

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Recibir en mi sistema los mensajes de WhatsApp | [Webhook](#webhook-n8n) |
| Probar que mi URL responde | [Probar la conexión](#probar-la-conexión) |
| Que el agente consulte una lista de precios o existencias | [Catálogos de datos](#catálogos-de-datos) |
| Elegir cada cuánto se actualiza un catálogo | [Frecuencia](#frecuencia-de-sincronización) |
| Conectar una API como herramienta del agente | [Herramientas](/08-configuracion/canales-e-integraciones/herramientas/#otras-herramientas) |

## Webhook (n8n)

El panel **N8N Webhook Configuration** guarda **una URL** que recibe **todos los mensajes y eventos de WhatsApp** de tu organización. Si lo dejas vacío, la integración queda desactivada.

1. En n8n, crea un nodo *webhook* en tu flujo y copia su URL.
2. Pégala en **N8N Webhook URL** (ej. `https://tu-n8n.com/webhook/whatsapp`).
3. Haz clic en **Save Configuration**.
4. Verifica con **Test Connection**.

### Probar la conexión

**Test Connection** envía una petición de prueba a tu URL con `test: true`, la hora y el identificador de tu organización. Si responde bien verás *«Webhook test successful!»*; si no, *«Webhook returned status N»* o *«Could not reach the webhook URL»*; revisa que la URL sea correcta y accesible. El botón aparece solo cuando hay una URL válida.

:::note[Textos en inglés]
Este panel del producto aún está en inglés (*Save Configuration*, *Test Connection*, *Setup Instructions*). Los nombramos como aparecen.
:::

## Catálogos de datos

**Catálogos de Datos Externos** conecta APIs o fuentes de datos para **sincronizar** su información automáticamente: listas de precios, existencias o cualquier consulta que el agente necesite. Para usarlos en el agente, decláralos en el prompt: ver [Instrucciones del agente](/05-agente-ia/instrucciones-del-agente/#herramientas-del-prompt).

### Añadir un catálogo

1. Haz clic en **Añadir Catálogo de Datos** (o **Añadir Tu Primer Catálogo de Datos** si no tienes ninguno).
2. En **Add Data Catalog** completa:

| Campo | Qué es |
|---|---|
| **Name** y **Description** | Cómo lo reconoces |
| **API Endpoint URL** | La dirección de donde se leen los datos |
| **HTTP Method** | El método de la petición (por ejemplo POST) |
| **Authentication Type** | **API Key**, **Bearer Token** o **Custom Header** |
| **API Key/Token** y **Authentication Header** | Credencial y encabezado, según el tipo elegido |

3. Guarda. Verás *«Catalog created»*.

### La tabla de catálogos

Cada fila muestra **Name**, **Description**, **Endpoint**, **Status**, **Sync Info** (última y próxima sincronización, o *Never synced* / *Due now*) y **Actions**. Desde ahí puedes:

- **Sincronizar** el catálogo al momento (*«Sync started»*; al terminar, *«Sync completed successfully»* o *«Sync completed with issues»* si procesó datos parciales).
- Cambiar la **frecuencia de sincronización**.
- **Eliminar** el catálogo (pide confirmación).

### Frecuencia de sincronización

**Auto-sync Frequency**: **Manual Only**, cada **15** o **30 minutos**, cada **hora**, **2**, **4**, **8** o **12 horas**, o **Daily**.

:::note[Textos en inglés]
La pantalla de catálogos está en inglés en el producto; documentamos los nombres tal como aparecen.
:::

## Preguntas frecuentes

**El webhook no recibe nada.**
Revisa que la URL esté guardada, que sea accesible desde internet y usa **Test Connection**.

**El catálogo muestra «Sync failed».**
Verifica la URL, el método y la credencial; luego sincroniza de nuevo.

**¿Un catálogo reemplaza a Odoo?**
No. Odoo se conecta en [Herramientas](/08-configuracion/canales-e-integraciones/herramientas/); los catálogos son para fuentes por URL.
