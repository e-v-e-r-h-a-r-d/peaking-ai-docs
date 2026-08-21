---
title: Correo — Gmail, Outlook e IMAP
description: Cómo conectar tu buzón de correo (Gmail, Outlook o cualquier proveedor IMAP) a Peaking para que el agente lea, cotice y responda correos.
sidebar:
  order: 7
---

La integración de **Correo** conecta tu buzón de email a Peaking para que el agente de IA pueda leer, cotizar y responder correos igual que lo hace con WhatsApp, Instagram o el Widget.

![Tarjeta Correo (Gmail / Outlook) con las opciones Conectar Gmail, Conectar Outlook y Conectar otro correo (IMAP)](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/09-integraciones-partner/correo-conectar-plataformas.png)

---

## Dónde conectarlo

1. Ve a **Integraciones › Herramientas**.
2. Localiza la tarjeta **Correo (Gmail / Outlook)**.
3. Elige una de las tres formas de conexión según tu proveedor.

---

## Formas de conectar tu buzón

### Gmail

Haz clic en **Conectar Gmail**. Verás la pantalla estándar de permisos de Google — inicia sesión con la cuenta que quieres conectar y autoriza el acceso.

### Outlook

Haz clic en **Conectar Outlook**. Verás la pantalla de permisos de Microsoft — inicia sesión con tu cuenta corporativa o personal de Outlook / Microsoft 365 y autoriza el acceso.

### Otro correo (IMAP)

Úsalo para buzones de hosting (cPanel/HostGator), Zoho u otros correos corporativos que no sean Gmail ni Outlook.

![Formulario Conectar correo por IMAP con los campos Correo y Contraseña del buzón](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/09-integraciones-partner/correo-imap-conectar.png)

1. Haz clic en **Conectar otro correo (IMAP)**.
2. Ingresa el **Correo** completo (ej. `ventas@tuempresa.com.mx`).
3. Ingresa la **Contraseña del buzón** — la misma que usas para entrar a tu webmail.
4. Haz clic en **Conectar**.

:::note[Tu contraseña no se guarda]
Peaking usa el correo y la contraseña únicamente para establecer la conexión IMAP. La contraseña no queda almacenada en la plataforma.
:::

---

## Qué hace el agente con tu correo conectado

Una vez conectado, el agente de IA puede:

- Leer los correos entrantes de ese buzón.
- Responder automáticamente siguiendo las instrucciones del prompt asignado.
- Usar el correo como un canal más para armar cotizaciones (igual que en Mensajes o CRM vía [Copilot](/05-conversaciones/copilot-cotizaciones/)).

:::note[Conectar no es suficiente]
Como con cualquier integración, el correo conectado debe estar **declarado en el Estudio de Prompts** para que el agente sepa cuándo y cómo usarlo. Ver [Declarar herramientas](/03-prompt-studio/declarar-herramientas/).
:::

---

## Preguntas frecuentes

**¿Puedo conectar más de un buzón?**

La tarjeta soporta conectar Gmail, Outlook o IMAP — si necesitas varios buzones activos al mismo tiempo, repite el proceso de conexión con cada cuenta.

**¿Qué proveedores cubre la opción IMAP?**

Cualquier correo con acceso IMAP habilitado: hosting compartido (cPanel/HostGator), Zoho Mail, y la mayoría de los correos corporativos que no sean Gmail u Outlook nativos.

**¿El agente puede enviar correos, o solo responder?**

El agente responde dentro del hilo de correo conectado siguiendo las instrucciones de tu prompt, de la misma forma en que atiende WhatsApp o el Widget web.
