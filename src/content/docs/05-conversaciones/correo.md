---
title: Correo
description: "Atiende tu correo desde Peaking: carpetas, borradores de la IA que apruebas, respuestas, firmas, estilo de redacción y remitentes bloqueados."
sidebar:
  order: 3
---

La pantalla **Correo** reúne los correos de tu buzón (Gmail, Outlook o IMAP) para leerlos, responder y aprobar los borradores que prepara la IA. Para conectar o compartir un buzón, ve primero a [Canales › Correo](/08-configuracion/canales-e-integraciones/canales/#correo).

[CAPTURA PENDIENTE: pantalla Correo con la lista de hilos, la carpeta Borradores y un borrador de la IA pendiente de aprobar]

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Conectar mi buzón | [Conectar](#conectar-tu-buzón) |
| Revisar y enviar el borrador de la IA | [Borradores](#borradores-de-la-ia) |
| Responder yo mismo | [Responder](#responder) |
| Poner mi firma | [Firmas](#firmas) |
| Cambiar cómo redacta la IA | [Estilo de respuestas](#estilo-de-respuestas) |
| Dejar de ver a un remitente | [Bloquear remitente](#bloquear-un-remitente) |
| Buscar un correo | [Buscar y ordenar](#buscar-y-ordenar) |
| Ver el buzón compartido del equipo | [Buzones compartidos](#buzones-compartidos) |

## Conectar tu buzón

Si aún no conectas uno verás *«Conecta tu buzón»*: **Conectar Gmail** o **Conectar Outlook** (o **Conectar mi buzón**). Solo tú ves los correos de tu buzón y puedes desconectarlo cuando quieras. Para IMAP y para elegir con quién se comparte, usa [Canales › Correo](/08-configuracion/canales-e-integraciones/canales/#correo).

## La pantalla

Arriba verás **Correo**, el proveedor conectado (*Gmail conectado*) y los botones **Firmas**, **Estilo de respuestas** (solo Master y Administrador) y **Bloquear remitente** (cuando hay un hilo abierto). A la izquierda, la lista; a la derecha, el correo abierto.

### Buscar y ordenar

- **Buscar correos…** con alcance **Todo**, **Remitente**, **Asunto** o **Cuerpo**.
- **Carpetas**: **Todos** y **Borradores**.
- **Ordenar**: **Más recientes** o **Más antiguos**.
- Paginación con **Anterior** / **Siguiente**.

### Buzones compartidos

Si tu equipo comparte un buzón, aparece el selector **Buzón** y una marca **Compartido**. Cada respuesta indica **Enviado por** quién la mandó y desde qué buzón. Lo configura quien administra el buzón en [Canales › Correo](/08-configuracion/canales-e-integraciones/canales/#correo).

## Borradores de la IA

Según el **modo de la IA** de tu buzón, la IA prepara una respuesta como **borrador**. Lo ves con la insignia *«Borrador · pendiente de tu aprobación»* y las acciones:

| Acción | Qué hace |
|---|---|
| **Editar** | Ajusta el texto antes de enviar (no puede ir vacío) |
| **Aprobar y enviar** | Envía el correo |
| **Descartar** | No se envía respuesta a ese correo |
| **Regenerar** | Pide a la IA una respuesta nueva |

Si otra persona ya lo envió o descartó verás *«Este borrador ya fue enviado o descartado por otra persona»*. También hay un **Resumen** generado por IA de lo que pide el cliente (**Generar** / **Actualizar**).

:::note[Modo Borrador o Apagado]
En [Canales › Correo](/08-configuracion/canales-e-integraciones/canales/#correo) eliges **Borrador — la IA prepara, tú apruebas** o **Apagado — tú cotizas manual**.
:::

### Cotizaciones por correo

Si el borrador acompaña una cotización de Odoo: **Crea la cotización en Odoo primero**; luego puedes **Enviar directo por Peaking** (adjunta el PDF y un link del portal) o **Enviar por Odoo**. Más en [Copilot de cotizaciones](/05-conversaciones/copilot-cotizaciones/).

## Responder

Con **Responder** (o **Responder a todos**) escribes en el editor: negrita, cursiva, listas, enlaces e imágenes, con **Adjuntar** para archivos. Puedes **Agregar CC** y **Agregar CCO** y elegir con qué firma enviar (**Firmar como**: **Mi firma**, **Firma del buzón** o **Sin firma**). Envía con **Enviar correo**.

## Firmas

**Firmas** agrega automáticamente tu firma al final de cada correo que envías desde Peaking (texto, enlaces y tu logo):

- **Mi firma**: personal.
- **Firma del buzón**: firma general de un buzón compartido (por ejemplo *Equipo de Ventas*). La edita el dueño del buzón o Master.

Guarda con **Guardar firma**.

## Estilo de respuestas

Solo Master y Administrador. **Estilo de respuestas** define cómo redacta la IA los borradores: tono, emojis y qué incluir. Hay un **Estilo general (todos los remitentes)** y **Estilos por remitente**, con reglas **por dominio** o **por correo** que puedes activar o eliminar. Ej.: *«Responde cercano y directo, tutea, da precio y disponibilidad en el mismo correo… Máximo 6 líneas»*. Guarda con **Guardar estilo**; aplica a los próximos borradores y a **Regenerar**.

## Bloquear un remitente

Con un hilo abierto, **Bloquear remitente** hace que sus próximos correos ya no aparezcan en el inbox. Pide confirmación. Para revertir usa **Desbloquear remitente**.

## Preguntas frecuentes

**No veo el botón de estilo.**
Solo lo ven Master y Administrador.

**No me aparecen borradores.**
Revisa el modo de la IA de tu buzón: con **Apagado** la IA no prepara borradores.

**¿Quién ve mis correos?**
Solo tú, salvo que compartas el buzón con el equipo.
