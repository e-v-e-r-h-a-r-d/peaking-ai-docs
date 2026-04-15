---
title: Estado y verificación de canales
description: Cómo interpretar el estado de tus canales conectados en Peaking y verificar que funcionan correctamente antes de activar tu agente de IA.
sidebar:
  order: 5
---

Una vez que conectas un canal a Peaking, la sección **Canales de Mensajería** te muestra en tiempo real el estado de cada integración. Desde aquí puedes verificar que todo funciona, activar o pausar canales sin desconectarlos, y detectar problemas antes de que afecten la atención a tus clientes.

---

## La pantalla de Canales de Mensajería

Para acceder:

1. En el panel lateral izquierdo, haz clic en **Configuración**.
2. Selecciona la pestaña **Canales**.

Verás la sección **Estado de Conexión** con un listado de los tres canales de Meta disponibles: **WhatsApp Business**, **Instagram Business** y **Facebook Messenger**.

Cada fila muestra:

| Elemento | Descripción |
|----------|-------------|
| **Ícono del canal** | Identifica visualmente el canal (WhatsApp verde, Instagram rosa, Messenger azul) |
| **Nombre del canal** | WhatsApp Business, Instagram Business o Facebook Messenger |
| **Badge de estado** | Indica si el canal está conectado o no (ver detalle abajo) |
| **Quién conectó y cuándo** | Nombre del miembro del equipo que realizó la conexión y hace cuánto tiempo |
| **Toggle Al Activo** | Controla si el canal está activo o en pausa, sin necesidad de desconectarlo |
| **Botón Desconectar** | Desvincula el canal de Peaking por completo |

---

## Estados posibles de un canal

### Conectado

```
Badge verde: Conectado
Toggle: Al Activo (encendido)
```

El canal está correctamente vinculado a Peaking y recibiendo mensajes. Tu agente de IA puede responder en este canal. Es el estado esperado una vez completada la conexión.

Debajo del badge verás el nombre del miembro del equipo que realizó la conexión y el tiempo transcurrido desde entonces (por ejemplo, *"Nayely TH • 2 days ago"*). Esto es útil para auditar quién gestionó cada integración.

---

### Conectado pero en pausa

```
Badge verde: Conectado
Toggle: Al Activo (apagado)
```

El canal está vinculado correctamente a Peaking, pero el toggle **Al Activo** está desactivado. El canal sigue conectado (no necesitas repetir el proceso de autenticación), pero Peaking no enviará respuestas automáticas hasta que lo vuelvas a activar.

**Cuándo usarlo:** cuando necesitas detener temporalmente las respuestas automáticas de un canal específico sin perder la conexión — por ejemplo, durante una migración, una pausa operativa o una prueba manual.

Para reactivarlo: simplemente activa el toggle **Al Activo**.

---

### No conectado

```
Badge gris: No conectado
Sin toggle ni información de conexión
```

El canal nunca ha sido vinculado a esta cuenta de Peaking, o fue desconectado. No hay ninguna integración activa.

Para conectarlo, haz clic sobre el canal y sigue el proceso de conexión correspondiente:
- [Conectar WhatsApp](/02-canales/conexion-whatsapp/)
- [Conectar Instagram](/02-canales/conexion-instagram/)
- [Conectar Messenger](/02-canales/conexion-messenger/)

---

### Error de conexión

```
Badge rojo: Error
```

El canal estuvo conectado en algún momento, pero la integración se rompió. Las causas más comunes son:

- Los permisos de Peaking fueron revocados desde la configuración de Facebook o Instagram
- La Página de Facebook fue eliminada o cambió de administrador
- El token de acceso de Meta expiró

**Qué hacer:** haz clic en **Reconectar** y vuelve a completar el proceso de autenticación con Meta. No perderás el historial de conversaciones existente.

---

## Cómo verificar que un canal funciona correctamente

Después de conectar un canal y confirmar que el badge muestra **Conectado**, realiza siempre una prueba de extremo a extremo:

### Prueba para WhatsApp

1. Desde otro teléfono, envía un mensaje de texto al número de WhatsApp conectado.
2. Ve al módulo de **Mensajes** en Peaking.
3. El mensaje debe aparecer en la bandeja en menos de 30 segundos.
4. Si tienes el agente de IA activo, debe responder automáticamente.

### Prueba para Instagram

1. Desde otra cuenta de Instagram, envía un mensaje directo a tu cuenta conectada.
2. Ve al módulo de **Mensajes** en Peaking.
3. El mensaje debe aparecer en la bandeja en menos de 60 segundos.

### Prueba para Messenger

1. Desde otra cuenta de Facebook (o en modo incógnito), visita tu Página de Facebook y envía un mensaje por Messenger.
2. Ve al módulo de **Mensajes** en Peaking.
3. El mensaje debe aparecer en la bandeja en menos de 60 segundos.

### Prueba para el Widget

1. Abre tu sitio web en un navegador.
2. Haz clic en el botón flotante del Widget.
3. Inicia una conversación por el canal **Chat**.
4. Verifica que el mensaje llegue a la bandeja de **Mensajes** en Peaking.

:::tip[Prueba antes de activar el agente de IA]
Verifica que los mensajes llegan correctamente a Peaking **antes** de activar tu agente de IA. Si hay un problema de conexión, el agente no podrá responder aunque esté bien configurado.
:::

---

## Activar y pausar un canal sin desconectarlo

El toggle **Al Activo** te permite controlar si Peaking responde mensajes en ese canal, sin romper la integración con Meta:

| Toggle | Qué ocurre |
|--------|------------|
| **Encendido** (verde) | Peaking recibe y responde mensajes en ese canal |
| **Apagado** (gris) | Peaking sigue recibiendo los mensajes, pero el agente de IA no responde automáticamente |

Esto es útil cuando necesitas pausar la IA en un canal específico y que tu equipo tome el control manualmente, sin tener que desconectar y volver a conectar el canal.

---

## Desconectar un canal

El botón **Desconectar** (en rojo) elimina la vinculación entre ese canal y Peaking:

:::caution[Antes de desconectar]
- Los mensajes que lleguen mientras el canal esté desconectado **no se registrarán** en Peaking.
- El historial de conversaciones previas **se conserva** en Peaking.
- Para volver a recibir mensajes, tendrás que repetir el proceso de conexión con Meta.
:::

---

## Preguntas frecuentes

**¿Puedo tener un canal conectado pero sin agente de IA?**

Sí. Puedes tener el canal **Conectado** y el toggle **Al Activo** encendido, pero sin haber publicado un agente en el Estudio de Prompts. En ese caso, los mensajes llegarán a la bandeja de Mensajes pero nadie responderá automáticamente — tu equipo deberá hacerlo manualmente.

**¿Qué significa el nombre y la fecha debajo del badge?**

Indica qué miembro del equipo realizó la conexión del canal y hace cuánto tiempo. Es un registro de auditoría para saber quién configuró cada integración.

**Conecté el canal pero el badge sigue en "No conectado", ¿qué hago?**

Recarga la página. Si el badge no cambia, puede ser que la autenticación con Meta no se completó correctamente. Intenta el proceso de conexión nuevamente desde el inicio, asegurándote de otorgar **todos** los permisos que Peaking solicita.

**¿Puedo tener los tres canales de Meta conectados al mismo tiempo?**

Sí. Puedes tener WhatsApp Business, Instagram Business y Facebook Messenger conectados simultáneamente. Todos los mensajes llegarán unificados al módulo de Mensajes, identificados por el ícono del canal de origen.
