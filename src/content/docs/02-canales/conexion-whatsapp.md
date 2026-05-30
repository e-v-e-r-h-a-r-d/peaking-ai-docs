---
title: Conexión con WhatsApp
description: Cómo conectar tu número de WhatsApp Business a Peaking paso a paso para que tu agente de IA empiece a atender mensajes.
sidebar:
  order: 1
---

WhatsApp es el canal de mayor volumen para la mayoría de los negocios en Latinoamérica. Al conectarlo a Peaking, tu agente de IA puede recibir y responder mensajes automáticamente, calificar leads y procesar pagos — todo dentro de la misma conversación.

:::caution[Requisito previo]
Para conectar WhatsApp necesitas un **número de teléfono dedicado** que no esté vinculado a una cuenta de WhatsApp personal ni a la app de WhatsApp Business en ningún dispositivo. Si el número ya está activo en WhatsApp, deberás desvincularlo primero.
:::

---

## Requisitos antes de empezar

- Una cuenta de **Facebook Business Manager** activa
- Un número de teléfono que pueda recibir llamadas o SMS (para verificación)
- Acceso de administrador a tu cuenta de Peaking

---

## Pasos para conectar WhatsApp

### 1. Accede a la configuración de canales

1. En el panel lateral izquierdo de Peaking, haz clic en **Integraciones**.
2. Selecciona la pestaña **Canales de Mensajería**.
3. Haz clic en el canal **WhatsApp Business**.

![Panel de Integraciones mostrando el estado de conexión de WhatsApp, Instagram y Messenger](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/02-canales/canal-wa-conectado.png)

### 2. Inicia la conexión con Meta

1. Haz clic en el botón **Conectar WhatsApp**.
2. Se abrirá una ventana emergente de autenticación de Meta. Inicia sesión con el **usuario y contraseña de Facebook** del administrador de tu cuenta de Business Manager.
3. Acepta los permisos que Peaking solicita para administrar tus mensajes de WhatsApp.

:::tip[Usa la cuenta correcta]
Inicia sesión con la cuenta de Facebook que tiene acceso de administrador a tu Business Manager. Si tienes varias cuentas, asegúrate de seleccionar la correcta desde el selector de perfiles de Meta.
:::

### 3. Selecciona o crea tu cuenta de WhatsApp Business

1. Meta te mostrará las cuentas de WhatsApp Business disponibles en tu Business Manager.
2. Selecciona la cuenta existente o elige **Crear una nueva cuenta** si aún no tienes una.
3. Si estás creando una cuenta nueva, ingresa el nombre de tu negocio y confirma.

### 4. Agrega o selecciona el número de teléfono

1. Selecciona el número de teléfono que usarás como canal de WhatsApp en Peaking.
2. Si no tienes un número registrado, haz clic en **Agregar número de teléfono** e ingresa el número que quieres usar.
3. Elige el método de verificación: **SMS** o **Llamada telefónica**.
4. Ingresa el código de 6 dígitos que recibirás.

### 5. Finaliza la configuración en Peaking

1. Una vez verificado el número, Meta enviará la confirmación a Peaking automáticamente.
2. Verás el número de WhatsApp aparece como canal activo en _Configuración › Canales_.
3. El estado del canal debe cambiar a **Conectado**.

---

## Verificar que la conexión funciona

Para confirmar que todo está bien:

1. Envía un mensaje de prueba al número de WhatsApp que acabas de conectar desde otro teléfono.
2. Ve al módulo de **Mensajes** en Peaking.
3. El mensaje debe aparecer en tu bandeja de entrada en menos de 30 segundos.

:::tip[Si el mensaje no aparece]
Espera 1–2 minutos y recarga la página. Si el problema persiste, revisa que el número no siga vinculado a la app de WhatsApp Business en algún dispositivo.
:::

---

## Preguntas frecuentes

**¿Puedo conectar mi número de WhatsApp personal?**

No. WhatsApp solo permite conectar números a través de la API oficial de Business (Meta). Los números personales no son compatibles. Necesitas un número dedicado para tu negocio.

**¿Puedo seguir usando la app de WhatsApp Business en mi teléfono?**

No al mismo tiempo. Un número solo puede estar activo en un lugar: o en la app de WhatsApp Business o en la API (Peaking). Si lo conectas a Peaking, el número se desvincula de la app.

**¿Cuántos números de WhatsApp puedo conectar?**

Puedes conectar múltiples números según el plan de Peaking que tengas. Cada número aparece como un canal separado en tu bandeja de Mensajes.

**¿Las conversaciones tienen algún límite?**

Meta tiene límites de volumen que se amplían automáticamente según el historial de calidad de tu número. Las cuentas nuevas empiezan con un límite de 250 conversaciones únicas por día, que sube a 1,000 y luego a 10,000+ conforme tu número gana historial positivo.

**¿Qué pasa si mi número tiene mala reputación en Meta?**

Meta puede restringir o suspender el número si recibe muchos reportes de spam. Mantén una tasa de reportes baja enviando mensajes relevantes y usando plantillas aprobadas para contactos fuera de la ventana de 24 horas.

**¿Puedo desconectar el número y volver a la app de WhatsApp Business?**

Sí. Ve a _Configuración › Canales_, selecciona el canal de WhatsApp y haz clic en **Desconectar**. Después podrás volver a vincular el número a la app de WhatsApp Business en tu teléfono.
