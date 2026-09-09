---
title: Correo — Gmail, Outlook e IMAP
description: Cómo conectar tu buzón de correo (Gmail, Outlook o cualquier proveedor IMAP) a Peaking, compartirlo con tu equipo, y personalizar firmas y estilo de respuesta.
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

## Bandeja de correo compartida

Un buzón conectado puede configurarse como:

- **Privado** — solo lo ve la persona que lo conectó.
- **De toda la organización** — cualquier usuario con acceso a Mensajes lo ve.
- **De usuarios seleccionados** — solo el equipo que elijas.

El selector de buzón muestra la etiqueta **«Compartido»** en los que aplica. Cualquier persona con acceso a un buzón compartido puede responder y armar cotizaciones desde ahí, igual que con un buzón propio.

### Quién respondió cada correo

Cuando varias personas tienen acceso al mismo buzón, cada respuesta enviada manualmente queda marcada con quién la mandó: **«Tú»** si fuiste tú, el **nombre del compañero** si fue otra persona del equipo, o **«Enviado desde el buzón»** si se mandó sin un usuario asociado. Esto también evita que dos personas aprobando el mismo borrador terminen enviándolo dos veces.

### Firmas personales y del buzón

Puedes definir una firma personal (la tuya) y una firma del buzón (con el logo de la empresa, por ejemplo), y elegir cuál usar al redactar una respuesta. La firma se anexa automáticamente al enviar — la IA nunca la reescribe ni la modifica.

### Estilo de respuesta por remitente

Define un estilo general de redacción para el buzón, y reglas más específicas por dominio o por correo puntual (tono, instrucciones, si usar emojis o no). Estas reglas aplican tanto a los borradores que arma la IA como al botón **«Regenerar»** y al agente de ventas cuando cotiza por correo.

### Imágenes y adjuntos en correos entrantes

Los correos que llegan con logos, fotos pegadas en el cuerpo o archivos adjuntos se ven en Peaking con vista previa y opción de descarga. Las fotos que manda el cliente también las ve el agente — igual que cuando llegan por WhatsApp.

---

## Preguntas frecuentes

**¿Puedo conectar más de un buzón?**

La tarjeta soporta conectar Gmail, Outlook o IMAP — si necesitas varios buzones activos al mismo tiempo, repite el proceso de conexión con cada cuenta.

**¿Qué proveedores cubre la opción IMAP?**

Cualquier correo con acceso IMAP habilitado: hosting compartido (cPanel/HostGator), Zoho Mail, y la mayoría de los correos corporativos que no sean Gmail u Outlook nativos.

**¿El agente puede enviar correos, o solo responder?**

El agente responde dentro del hilo de correo conectado siguiendo las instrucciones de tu prompt, de la misma forma en que atiende WhatsApp o el Widget web.

**¿Puede más de una persona atender el mismo buzón?**

Sí, si el buzón está configurado como [compartido](#bandeja-de-correo-compartida) — de toda la organización o de usuarios seleccionados. Cada respuesta manual queda marcada con quién la envió, para que el equipo no se pise.

**¿La firma que se anexa la puede cambiar la IA?**

No. La firma (personal o del buzón) se anexa tal cual al enviar; el agente nunca la reescribe ni la genera como parte de su respuesta.

**¿Puedo definir un tono distinto según a quién le estoy respondiendo?**

Sí, con el [estilo de respuesta por remitente](#estilo-de-respuesta-por-remitente) — define un estilo general y reglas específicas por dominio o por correo individual.
