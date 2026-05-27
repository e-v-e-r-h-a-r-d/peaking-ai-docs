---
title: Reconexión de tokens — WhatsApp, Instagram y Facebook
description: Qué hacer cuando aparece el aviso "Token expirado - Reconectar" en tus canales de mensajería y cómo volver a conectarlos en minutos.
sidebar:
  order: 3
---

Los canales de Instagram Business y Facebook Messenger usan tokens de acceso de Meta que **expiran periódicamente** (aproximadamente cada 60 días). Cuando un token expira, la plataforma sigue mostrando el canal como "Conectado" pero el agente deja de poder enviar y recibir mensajes por ese canal hasta que se renueve.

:::caution[Síntoma más común]
Si tu agente deja de responder en Instagram o Facebook Messenger sin ningún otro cambio, lo primero que debes revisar es el estado del token en Integraciones.
:::

---

## Cómo identificar un token expirado

1. En el panel lateral, haz clic en **Integraciones**.
2. Selecciona la pestaña **Canales de Mensajería**.
3. Revisa el panel **Estado de Conexión**.

![Panel de Estado de Conexión con badges de Token expirado en Instagram y Facebook Messenger](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/09-integraciones/tokens-expirados.png)

Cuando un token está vencido, el canal muestra dos badges simultáneos:
- **Conectado** — la configuración del canal sigue activa en Peaking
- **Token expirado - Reconectar** *(badge rosa/rojo)* — el token de Meta ya no es válido

WhatsApp Business usa un mecanismo distinto y generalmente no requiere reconexión periódica de token.

---

## Cómo reconectar un canal

El proceso es idéntico para Instagram y Facebook Messenger:

1. En **Integraciones › Canales de Mensajería**, localiza el canal con el badge **Token expirado - Reconectar**.
2. Haz clic en **Desconectar** (botón en rojo, a la derecha del toggle).
3. Confirma la desconexión.
4. Una vez desconectado, aparecerá el botón de conexión. Haz clic en **Conectar** y sigue el flujo de autorización de Meta.
5. Inicia sesión con la cuenta de Facebook o Instagram Business y autoriza el acceso.
6. El canal volverá a mostrar solo el badge **Conectado**, sin la advertencia de token expirado.

:::tip[Sin pérdida de historial]
Desconectar y reconectar un canal **no elimina el historial de conversaciones**. Solo renueva el token de acceso — todos los chats previos siguen disponibles.
:::

---

## Frecuencia de vencimiento

Los tokens de usuario de Meta (los que usa Instagram y Facebook Messenger) tienen una vigencia de aproximadamente **60 días**. Peaking muestra el aviso en el panel de Estado de Conexión cuando el token está próximo a vencer o ya expiró.

No es necesario configurar recordatorios manuales: revisa el panel de Integraciones si notas que el agente deja de responder en alguno de estos canales.

---

## Preguntas frecuentes

**¿Afecta esto a WhatsApp Business?**

Generalmente no. WhatsApp usa tokens de acceso de sistema que no tienen vencimiento periódico. Si WhatsApp deja de funcionar, la causa suele ser otra — revisa la configuración de la API de Meta o contacta al soporte de Peaking.

**¿Puedo reconectar sin perder los workflows que usan ese canal?**

Sí. Los workflows que tienen a Instagram o Facebook como canal de entrada siguen funcionando normalmente después de la reconexión. El token es solo el puente de autenticación — no afecta la configuración de workflows ni de prompts.

**¿Qué pasa si no reconecto a tiempo?**

Los mensajes que lleguen al canal mientras el token está expirado no serán procesados por el agente. Dependiendo de la plataforma, pueden perderse o quedar en cola. Reconecta lo antes posible cuando aparezca el aviso.

**¿Necesito ser administrador de la página de Facebook para reconectar?**

Sí. El proceso de autorización de Meta requiere que el usuario que reconecta tenga permisos de administrador en la Página de Facebook o la cuenta de Instagram Business asociada.
