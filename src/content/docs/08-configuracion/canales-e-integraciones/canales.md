---
title: Canales
description: "Conecta WhatsApp, Instagram, Messenger, correo y el chat de tu sitio web, silencia la IA por canal y revisa el estado de cada conexión."
sidebar:
  order: 1
---

**Canales** es donde conectas por dónde te escriben tus clientes: **WhatsApp**, **Instagram**, **Messenger**, **correo** y el **chat de tu sitio web**. Lo abres desde **Configuración › Canales** (o desde la tarjeta **Canales** de [Integraciones](/08-configuracion/canales-e-integraciones/integraciones/)).

[CAPTURA PENDIENTE: pantalla Canales con "Estado de conexión", "Conectar nueva plataforma" y el bloque de plantillas]

:::tip[¿Prefieres que lo configuremos contigo?]
Los canales se conectan siempre a mano, también cuando usas el [Paquete de implementación](/01-primeros-pasos/paquete-de-implementacion/).
:::

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Conectar mi WhatsApp Business | [WhatsApp](#whatsapp) |
| Conectar un segundo número de WhatsApp | [Más de un número](#más-de-un-número) |
| Usar el mismo número en la app de WhatsApp Business y en Peaking | [Coexistencia](#coexistencia-con-la-app-de-whatsapp-business) |
| Conectar Instagram o Messenger | [Instagram y Messenger](#instagram-y-messenger) |
| Poner un chat en mi página web | [Sitio web](#sitio-web-chat-widget) |
| Conectar Gmail, Outlook u otro correo | [Correo](#correo) |
| Comprobar que un canal funciona | [Verifica tu canal](#verifica-que-un-canal-funciona) |
| Que la IA deje de responder en un canal | [Silenciar la IA](#silenciar-la-ia-en-un-canal) |
| Ver si mi número tiene buena calidad | [Calidad y límite](#calidad-y-límite-de-whatsapp) |
| Ver «Token expirado – Reconectar» | [Token expirado](#token-expirado-instagram-y-messenger) |
| Crear o enviar plantillas de WhatsApp | [Plantillas](/14-audiencias/plantillas/) |

## Cómo se organiza la pantalla

De arriba hacia abajo:

1. **Estado de conexión**: una fila por cada cuenta conectada (WhatsApp, Instagram y Messenger).
2. **Conectar nueva plataforma**: tarjetas para **WhatsApp Business**, **Instagram Business**, **Facebook Messenger** y **Sitio Web**. Si Peaking habilitó los formularios de leads para tu organización, también aparece su tarjeta.
3. **Correo (Gmail / Outlook)**: aparece solo si el canal de correo está habilitado para tu organización.
4. **Plantillas de WhatsApp**: sincronizar, buscar y enviar plantillas.

### Estado de conexión

Cada fila muestra el canal, la cuenta conectada y su última actividad, con estas piezas:

| Elemento | Qué significa |
|---|---|
| **Conectado** / **No conectado** | Si el canal está activo |
| **Calidad alta / media / baja** | Solo WhatsApp: la calificación de calidad de tu número en Meta |
| **N destinatarios/24h** | Solo WhatsApp: cuántas personas distintas puedes contactar cada 24 horas |
| **AI Silenciado** | La IA no responde automáticamente en ese canal |
| **N días restantes** / **Token expirado – Reconectar** | Solo Instagram y Messenger: el acceso está por vencer o ya venció |
| Interruptor **AI Activo / AI Silenciado** | Enciende o apaga las respuestas de la IA en ese canal |
| **Desconectar** | Quita la cuenta de Peaking |

:::caution[Algunos textos están en inglés]
En esta pantalla verás textos como *AI Activo*, *AI Silenciado* y el mensaje de confirmación al desconectar en inglés. Aquí los nombramos como aparecen.
:::

## WhatsApp

1. En **Conectar nueva plataforma**, haz clic en **Conectar WhatsApp**.
2. Sigue el proceso de registro de Meta (inicia sesión, elige o crea tu cuenta de WhatsApp Business y tu número).
3. Al volver a Peaking, la fila de WhatsApp aparece como **Conectado**, con el nombre de tu número.

Cuando el botón dice **Conectado**, ya no hay nada más que conectar; para agregar otro número usa **Conectar otra cuenta de WhatsApp**.

### Más de un número

Con WhatsApp ya conectado aparece, debajo de la lista, el botón **Conectar otra cuenta de WhatsApp**. Cada número queda como una fila independiente en **Estado de conexión**, con su propio interruptor de IA y su propio botón **Desconectar**.

### Coexistencia con la app de WhatsApp Business

Si tu número también vive en la app de WhatsApp Business del teléfono, debajo de su fila aparece un bloque **«Coexistencia con la app de WhatsApp Business»**. Desde ahí puedes traer a Peaking **hasta 180 días de chats y los contactos**:

1. Haz clic en **Sincronizar historial**.
2. Verás *«Sincronización solicitada»*: Meta envía el historial por partes durante los siguientes minutos y los chats van apareciendo en **Mensajes**.
3. El bloque muestra el avance como **Historial: …**.

:::caution[Solo una vez y dentro de las primeras 24 horas]
Meta acepta esta sincronización **una sola vez** y **dentro de las 24 horas** siguientes a conectar el número. Si ves *«No se pudo solicitar la sincronización»*, desconecta el número desde la app del teléfono y vuelve a conectarlo aceptando compartir el historial.
:::

### Calidad y límite de WhatsApp

Junto al estado de tu número ves dos insignias de solo lectura:

- **Calidad alta, media o baja**: la calificación que Meta da a tu número.
- **N destinatarios/24h**: tu límite de mensajería, es decir, las personas distintas que puedes contactar cada 24 horas. Se amplía verificando tu negocio en Meta.

Si no hay datos todavía, las insignias simplemente no aparecen.

## Instagram y Messenger

1. En **Conectar nueva plataforma**, haz clic en **Conectar Instagram** o **Conectar Messenger**.
2. Serás enviado a Facebook para autorizar el acceso con la cuenta que administra tu página o tu cuenta de Instagram Business.
3. Al volver, la fila aparece como **Conectado**: Instagram con tu `@usuario` y Messenger con el nombre de tu página.

Puedes tener varias cuentas de Instagram o páginas de Messenger; cada una es una fila con su propio interruptor de IA.

### Token expirado (Instagram y Messenger)

El acceso de Instagram y Messenger dura aproximadamente **60 días**. Desde **7 días antes** de que venza, la fila muestra **«N días restantes»**; cuando vence, muestra **«Token expirado – Reconectar»** y el agente deja de enviar y recibir mensajes por ese canal aunque siga marcado como **Conectado**.

Para renovarlo:

1. En la fila del canal, haz clic en **Desconectar** y confirma.
2. Haz clic otra vez en **Conectar Instagram** o **Conectar Messenger** y autoriza de nuevo.

:::tip[No pierdes tus conversaciones]
Desconectar y reconectar solo renueva el acceso; el historial de chats se conserva.
:::

WhatsApp no tiene este vencimiento: no verás avisos de token en sus filas.

## Sitio web (chat widget)

1. En **Conectar nueva plataforma**, haz clic en **Activar Widget**.
2. El botón cambia a **Conectado** y aparece a su lado un botón de engrane. Haz clic para abrir **Personaliza tu Widget de Chat**.

Lo que puedes personalizar (con vista previa a la derecha):

| Opción | Detalle |
|---|---|
| **Idioma del widget** | Español o English. Cambia botones y etiquetas, no tu mensaje de bienvenida ni el nombre del bot |
| **Logo (opcional)** | Recomendado 200×200 px, PNG o JPG. Máximo 2 MB |
| **Color primario** / **Color de fondo** | Selector de color o código hexadecimal |
| **Mensaje de bienvenida** | Hasta 200 caracteres |
| **Nombre del bot** | Hasta 50 caracteres |
| **Texto del input** | Hasta 100 caracteres |
| **Permitir adjuntos** | Deja que los visitantes envíen fotos (hasta 10 MB) y documentos (hasta 20 MB) |
| **Icono del botón flotante** | Recomendado 80×80 px, PNG con fondo transparente. Máximo 2 MB |

Termina con **Guardar Configuración**.

### Instalar el código en tu página

Al final del mismo cuadro tienes dos fragmentos listos para copiar, que incluyen tu clave de widget:

- **Código de instalación (modo flotante)**: pégalo antes de `</body>` o dentro del `<head>`. Aparece un botón flotante de chat en tu sitio.
- **Modo embebido**: pega un contenedor `<div id="peaking-chat">` con el tamaño que quieras y el segundo fragmento, para que el chat quede **dentro** de la página.

Para apagarlo, usa **Desconectar** en la esquina inferior izquierda del cuadro.

## Correo

Si el canal de correo está habilitado para tu organización, verás el bloque **Correo (Gmail / Outlook)**:

1. Elige **Conectar Gmail**, **Conectar Outlook** o **Conectar otro correo (IMAP)**.
2. Gmail y Outlook te llevan a la pantalla de permiso de Google o Microsoft.
3. Con IMAP (hosting como cPanel/HostGator, Zoho o correo corporativo) escribe tu correo completo y la contraseña de tu buzón. El servidor se detecta solo; si la conexión falla, se muestran **Servidor**, **Puerto IMAP** y **Puerto SMTP** para ajustarlos. La contraseña solo se usa para conectar y no se guarda.

Cada persona conecta **su propio** buzón. Ya conectado verás el correo y el proveedor, y estas opciones:

| Opción | Qué hace |
|---|---|
| **¿Quién más puede ver y responder este buzón?** | **Solo yo (buzón personal)**, **Todo el equipo (buzón compartido)** o **Usuarios seleccionados**. Quienes tienen acceso ven los correos en **Correos**, aprueban borradores y responden; cada respuesta queda registrada con el nombre de quien la envió |
| **Modo de la IA para este buzón** | **Borrador — la IA prepara, tú apruebas**, o **Apagado — tú cotizas manual** |
| **Desconectar** | Quita el buzón |

Los administradores ven además **Buzones del equipo** para decidir con quién se comparte cada buzón, aunque no sean suyos.

## Verifica que un canal funciona

Cuando la fila diga **Conectado**, haz siempre una prueba de extremo a extremo y confirma que el mensaje llega a **Mensajes**:

| Canal | Prueba |
|---|---|
| **WhatsApp** | Desde otro teléfono, envía un mensaje al número conectado. Debe aparecer en menos de 30 segundos |
| **Instagram** | Desde otra cuenta, envía un mensaje directo a la cuenta conectada. Debe aparecer en menos de 60 segundos |
| **Messenger** | Desde otra cuenta de Facebook, escribe a tu Página por Messenger. Debe aparecer en menos de 60 segundos |
| **Sitio web** | Abre tu página, haz clic en el botón del chat y envía un mensaje |

:::tip[Prueba antes de activar al agente]
Verifica que los mensajes llegan **antes** de activar tu agente. Si el canal no recibe, el agente no podrá responder aunque esté bien configurado. Si no llegan, ver [Configuraciones frecuentes](/17-soporte/configuraciones-frecuentes/#mi-canal-no-recibe-mensajes).
:::

## Silenciar la IA en un canal

Cada fila conectada tiene un interruptor **AI Activo / AI Silenciado**:

- **AI Activo**: el agente responde automáticamente en ese canal.
- **AI Silenciado**: el agente **no** responde automáticamente; tu equipo atiende desde Mensajes. Aparece la insignia **AI Silenciado**.

Es por canal y por cuenta: puedes silenciar un solo número de WhatsApp y dejar los demás activos. El cambio se guarda al instante.

## Desconectar un canal

Haz clic en **Desconectar** en la fila y confirma. En WhatsApp, Peaking además cancela la suscripción de avisos con Meta antes de quitar el número.

## Preguntas frecuentes

**Mi agente dejó de responder en Instagram o Messenger.**
Revisa si la fila muestra **Token expirado – Reconectar** y renueva el acceso como se explica arriba.

**Mi agente no responde en un canal, pero todo dice «Conectado».**
Revisa el interruptor: si dice **AI Silenciado**, la IA está apagada en ese canal.

**¿Dónde veo las plantillas de WhatsApp?**
En el bloque inferior de esta misma pantalla. Guía completa en [Plantillas de WhatsApp](/14-audiencias/plantillas/).

**No veo el bloque de Correo.**
Aparece solo si el canal de correo está habilitado para tu organización. Pídele a Peaking que lo active.
