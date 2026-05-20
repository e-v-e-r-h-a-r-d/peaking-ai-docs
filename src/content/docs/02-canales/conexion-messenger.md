---
title: Conexión con Messenger
description: Cómo conectar tu Página de Facebook a Peaking para gestionar conversaciones de Messenger con tu agente de IA.
sidebar:
  order: 3
---

Facebook Messenger es uno de los canales con mayor base instalada en Latinoamérica. Al conectarlo a Peaking, todos los mensajes que lleguen al chat de tu Página de Facebook serán atendidos automáticamente por tu agente de IA — sin intervención manual.

:::caution[Requisito previo]
Para conectar Messenger necesitas una **Página de Facebook** (no un perfil personal). Si tu negocio solo tiene perfil personal de Facebook, primero deberás crear una Página.
:::

---

## Pasos para conectar Messenger

### 1. Accede a la configuración de canales

1. En el panel lateral izquierdo de Peaking, haz clic en **Integraciones**.
2. Selecciona la pestaña **Canales de Mensajería**.
3. Haz clic en **Facebook Messenger**.

### 2. Inicia la autenticación con Facebook

1. Haz clic en el botón **Conectar Messenger**.
2. Se abrirá una ventana de autenticación de Meta. Inicia sesión con la cuenta de Facebook que administra tu Página.
3. Revisa los permisos que Peaking solicita para gestionar los mensajes de tu Página.

:::tip[Usa la cuenta administradora]
Inicia sesión con la cuenta de Facebook que tiene rol de **Administrador** en la Página que quieres conectar. Los roles de Editor o Moderador pueden no tener los permisos suficientes para completar la integración.
:::

### 3. Selecciona tu Página de Facebook

1. Meta te mostrará todas las Páginas de Facebook a las que tienes acceso.
2. Selecciona la Página que quieres conectar a Peaking.
3. Otorga **todos los permisos** que Peaking solicita — si desmarcas alguno, el agente de IA no podrá enviar ni recibir mensajes correctamente.
4. Haz clic en **Guardar**.

### 4. Confirma la conexión en Peaking

1. Regresarás automáticamente a la sección de Canales en Peaking.
2. Tu Página de Facebook aparecerá como canal activo con estado **Conectado**.

---

## Verificar que la conexión funciona

1. Abre Messenger desde otra cuenta de Facebook (o desde la cuenta personal de cualquier persona) y envía un mensaje a tu Página.
2. Ve al módulo de **Mensajes** en Peaking.
3. El mensaje debe aparecer en la bandeja de entrada en menos de un minuto.

---

## Restricciones de la ventana de 24 horas

Al igual que WhatsApp e Instagram, Messenger opera bajo la **política de ventana de mensajería de Meta**: tu negocio puede responder libremente durante las 24 horas posteriores al último mensaje del cliente. Después de ese plazo, solo puedes usar **plantillas de mensaje aprobadas** por Meta para retomar el contacto.

En Peaking, las conversaciones fuera de ventana aparecen con la etiqueta **Fuera de Ventana (24h)** en el Panel de Control y en la bandeja de Mensajes.

---

## Preguntas frecuentes

**¿Puedo conectar varias Páginas de Facebook?**

Sí. Puedes conectar múltiples Páginas, cada una como un canal independiente. Todos los mensajes se unificarán en la bandeja de Mensajes de Peaking, identificados con el ícono azul de Messenger y el nombre de la Página de origen.

**¿El agente de IA puede responder en Messenger igual que en WhatsApp?**

Sí. El mismo agente que configuras en el Estudio de Prompts atiende todos los canales conectados. El comportamiento y tono son consistentes sin importar desde qué canal escriba el cliente.

**¿Puedo seguir respondiendo manualmente desde la app de Facebook?**

Sí, pero no es recomendable hacerlo en paralelo. Si respondes manualmente desde Facebook mientras Peaking también intenta responder, pueden generarse respuestas duplicadas. Lo ideal es dejar que Peaking gestione los mensajes y usar el módulo de Mensajes de Peaking para intervenir manualmente cuando sea necesario.

**¿Messenger funciona con Grupos de Facebook?**

No. La integración de Peaking es exclusivamente con el chat de **Páginas de Facebook** (Messenger de Página), no con mensajes en Grupos ni con perfiles personales.

**El estado del canal dice "Error", ¿qué hago?**

Los errores más comunes son:
- El administrador de la Página revocó los permisos de Peaking en Facebook.
- La Página fue desvinculada del Business Manager.
- Los permisos otorgados durante la conexión estaban incompletos.

Ve a _Configuración › Canales_, haz clic en **Reconectar** y vuelve a completar el proceso de autenticación otorgando todos los permisos.

**¿Puedo desconectar Messenger sin perder el historial de conversaciones?**

Sí. Al desconectar el canal, el historial de conversaciones existente en Peaking se conserva. Solo dejarás de recibir mensajes nuevos de ese canal hasta que lo vuelvas a conectar.
