---
title: Meta Conversions API
description: Cómo conectar Meta Conversions API para enviar conversiones de tus conversaciones de vuelta a Meta y optimizar el rendimiento de tus anuncios.
sidebar:
  order: 6
---

**Meta Conversions API** envía de vuelta a Meta (Facebook e Instagram Ads) las conversiones que ocurren dentro de tus conversaciones — por ejemplo, cuando un cliente pide un presupuesto o confirma una compra. Meta usa esa información para optimizar la entrega de tus anuncios hacia las personas con mayor probabilidad de convertir.

:::note[Para quién es útil]
Esta integración solo aporta valor si inviertes en anuncios de Meta (Facebook o Instagram) y quieres que la plataforma de anuncios aprenda de tus resultados reales de ventas, no solo de clics o mensajes iniciados.
:::

---

## Cómo funciona

1. Configuras en Peaking qué **auto-tags** (etiquetas automáticas del agente) representan una conversión — por ejemplo, la etiqueta que se aplica cuando el agente confirma una cotización o cierre de venta.
2. Cuando una conversación recibe esa etiqueta, Peaking envía el evento de conversión al **dataset** de Meta que configuraste.
3. Meta asocia esa conversión con la campaña o anuncio de origen y ajusta la optimización de entrega en consecuencia.

---

## Conectar Meta Conversions API

![Tarjeta de Meta Conversions API en Integraciones › Herramientas, con el botón Conectar dataset](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/09-integraciones-partner/meta-conversions-api.png)

### Paso 1 — Obtén el Dataset ID y el token de acceso

Pide al administrador del **Business de Meta** los dos datos que necesitas:

1. Entra a **Events Manager** en Meta Business Suite.
2. Ve a **Orígenes de datos** y selecciona tu dataset.
3. Entra a **Configuración › Conversions API**.
4. Haz clic en **Generar token de acceso**.

### Paso 2 — Conecta el dataset en Peaking

1. En el panel lateral, ve a **Integraciones › Herramientas**.
2. Localiza la tarjeta **Meta Conversions API**.
3. Haz clic en **Conectar dataset**.
4. Ingresa el **Dataset ID** y el **token de acceso** que obtuviste en el paso anterior.

### Paso 3 — Elige qué auto-tags envían conversiones

Una vez conectado, define en la configuración de tags (en **Mensajes**) qué etiquetas automáticas deben disparar el envío de una conversión a Meta. No todas las etiquetas tienen que reportarse — normalmente solo las que representan una acción de negocio real (cotización enviada, venta cerrada, cita agendada).

:::tip[Usa las mismas etiquetas que ya monitoreas]
Si ya tienes auto-tags configurados en el Estudio de Prompts para clasificar conversaciones (ver [Auto-tagging en el Estudio de Prompts](/03-prompt-studio/crea-tu-primer-prompt/#configuración-avanzada-agrupación-auto-tagging-y-escalación)), reutilízalos aquí en lugar de crear etiquetas nuevas solo para Meta — mantiene tu taxonomía de tags consistente en toda la plataforma.
:::

---

## Preguntas frecuentes

**¿Necesito el Pixel de Meta además de esta integración?**

No es obligatorio, pero se complementan. El Pixel captura eventos del lado del navegador (visitas a tu sitio); Conversions API envía eventos del lado del servidor con datos de tus conversaciones. Usar ambos mejora la calidad de la señal que recibe Meta.

**¿Qué pasa si desconecto el dataset?**

Peaking deja de enviar eventos de conversión a Meta de inmediato. Las conversiones ya enviadas no se eliminan retroactivamente de Meta Ads Manager.

**¿Esta integración envía datos personales del cliente a Meta?**

Puede incluir datos de contacto asociados al evento (como teléfono o email, según cómo esté configurado tu dataset), siguiendo los estándares de Meta para atribución. Revisa la configuración de tu dataset en Events Manager para confirmar exactamente qué campos se envían.

**¿Por qué no veo conversiones reflejadas en Meta Ads Manager?**

Verifica primero que el token de acceso no haya expirado y que al menos un auto-tag esté configurado para disparar el envío. Meta también puede tardar algunas horas en reflejar eventos nuevos en los reportes de la campaña.
