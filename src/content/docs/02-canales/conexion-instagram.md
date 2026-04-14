---
title: Conexión con Instagram
description: Cómo vincular tu cuenta profesional de Instagram a Peaking para atender mensajes directos con tu agente de IA.
sidebar:
  order: 2
---

Al conectar Instagram a Peaking, tu agente de IA puede responder automáticamente los mensajes directos (DMs) que lleguen a tu cuenta — sin que tengas que abrir la app. Ideal para negocios que reciben consultas por Instagram pero no tienen capacidad de responder manualmente en tiempo real.

:::caution[Requisitos previos]
Para conectar Instagram a Peaking necesitas:
- Una cuenta de **Instagram de tipo Profesional** (Business o Creator) — las cuentas personales no son compatibles.
- La cuenta de Instagram debe estar **vinculada a una Página de Facebook**. Sin esta vinculación, la conexión no es posible.
- Acceso de administrador a esa Página de Facebook.
:::

---

## Cómo crear una cuenta profesional de Instagram

Si tu cuenta de Instagram es personal, puedes convertirla a profesional en pocos pasos:

1. En la app de Instagram, ve a tu perfil y toca el menú **≡** (tres líneas).
2. Entra a _Configuración y privacidad › Tipo de cuenta y herramientas_.
3. Toca **Cambiar a cuenta profesional**.
4. Selecciona **Empresa** (para negocios) o **Creador de contenido**.
5. Sigue los pasos para vincular tu cuenta a una **Página de Facebook**.

Una vez completado esto, vuelve a Peaking para continuar.

---

## Pasos para conectar Instagram

### 1. Accede a la configuración de canales

1. En el panel lateral izquierdo de Peaking, haz clic en **Configuración**.
2. Selecciona la pestaña **Canales**.
3. Haz clic en el canal **Instagram**.

### 2. Inicia la autenticación con Facebook

1. Haz clic en el botón **Conectar**.
2. Se abrirá una ventana de autenticación de Meta. Inicia sesión con la cuenta de **Facebook** que administra la Página vinculada a tu Instagram.
3. Revisa los permisos que Peaking solicita y haz clic en **Permitir**.

:::tip[¿Por qué se pide acceso a Facebook?]
Instagram es parte de Meta. La API que permite conectar Instagram a plataformas externas opera a través de Facebook. Por eso el proceso de autenticación pasa por tu cuenta de Facebook, aunque el canal que conectarás sea Instagram.
:::

### 3. Selecciona la Página de Facebook

1. Meta te mostrará las Páginas de Facebook a las que tienes acceso de administrador.
2. Selecciona la Página vinculada a tu cuenta de Instagram profesional.
3. Asegúrate de otorgar **todos los permisos** que Peaking solicita — si desmarcas alguno, la conexión puede quedar incompleta.

### 4. Selecciona la cuenta de Instagram

1. Meta mostrará las cuentas de Instagram vinculadas a la Página que seleccionaste.
2. Elige tu cuenta de Instagram profesional.
3. Haz clic en **Confirmar**.

### 5. Verifica la conexión en Peaking

1. Regresarás automáticamente a la sección de Canales en Peaking.
2. Tu cuenta de Instagram aparecerá como canal activo con estado **Conectado**.

---

## Verificar que la conexión funciona

1. Desde otro perfil de Instagram, envía un mensaje directo a tu cuenta de Instagram conectada.
2. Ve al módulo de **Mensajes** en Peaking.
3. El mensaje debe aparecer en la bandeja de entrada en menos de un minuto.

---

## Preguntas frecuentes

**¿Puedo conectar una cuenta de Instagram personal?**

No. Solo se pueden conectar cuentas de tipo **Profesional** (Business o Creator). Las cuentas personales no tienen acceso a la API de mensajería de Meta.

**¿Cuántas cuentas de Instagram puedo conectar a Peaking?**

Puedes conectar múltiples cuentas según tu plan. Cada cuenta aparece como un canal separado en tu bandeja de Mensajes.

**¿Peaking puede responder stories o comentarios de Instagram?**

Por el momento, Peaking gestiona únicamente los **mensajes directos (DMs)**. Las respuestas a stories y la moderación de comentarios están fuera del alcance actual del canal de Instagram.

**¿La IA puede enviar imágenes o archivos por Instagram DM?**

El soporte de medios por Instagram DM depende de los permisos que Meta habilite para tu cuenta. Actualmente el canal está optimizado para mensajes de texto.

**¿Qué pasa si desvinculo mi Instagram de Facebook?**

La conexión con Peaking se rompe automáticamente. Para restablecer el canal, tendrás que volver a vincular tu Instagram a una Página de Facebook y repetir el proceso de conexión.

**Mi cuenta de Instagram está conectada pero no recibo mensajes en Peaking, ¿qué hago?**

Verifica que:
1. Tu cuenta de Instagram siga siendo **Profesional** y esté vinculada a una Página de Facebook.
2. Peaking tenga todos los permisos habilitados en _Configuración de Facebook › Apps_.
3. El estado del canal en _Configuración › Canales_ sea **Conectado** (no "Error" ni "Desconectado").
