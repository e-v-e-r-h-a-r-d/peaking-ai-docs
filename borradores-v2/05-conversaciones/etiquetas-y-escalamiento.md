---
title: Etiquetas, leads y escalamiento
description: "Etiqueta conversaciones a mano o con IA, conviértelas en lead, envía conversiones a Meta y define cuándo el agente escala a una persona."
sidebar:
  order: 2
---

Las **etiquetas** te ayudan a clasificar conversaciones (por interés, etapa, tema…). Pueden ponerse a mano o **automáticamente por la IA**, y también sirven para disparar un evento de conversión en Meta. Todo se maneja desde **Gestionar Etiquetas de Conversación**, en cualquier conversación de [Mensajes](/05-conversaciones/).

[CAPTURA PENDIENTE: ventana «Gestionar Etiquetas de Conversación» con etiquetas aplicadas, populares y la sección Auto-tagging]

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Ponerle una etiqueta a una conversación | [Aplicar etiquetas](#aplicar-etiquetas) |
| Crear una etiqueta nueva | [Crear una etiqueta](#crear-una-etiqueta) |
| Que la IA etiquete sola | [Auto-tagging](#auto-tagging-etiquetas-con-ia) |
| Que la IA vuelva a revisar una conversación | [Re-analizar tags](#re-analizar-tags) |
| Mandar una conversión a Meta al etiquetar | [Enviar conversión a Meta](#enviar-conversión-a-meta) |
| Convertir la conversación en lead | [Convertir a Lead](#convertir-a-lead) |
| Definir cuándo se escala a una persona | [Escalación a humano](#escalación-a-humano) |
| Quitar o borrar una etiqueta | [Quitar o eliminar](#quitar-o-eliminar-una-etiqueta) |

## Aplicar etiquetas

1. En la conversación, abre **Gestionar Etiquetas de Conversación**.
2. Escribe en **Buscar etiquetas existentes o crear nuevas…**.
3. Elige una de las listas: **Etiquetas Aplicadas** (ya puestas), **Etiquetas Populares** o **Usadas Recientemente**, y haz clic para **Agregar a la conversación**.

La ventana indica cuántas etiquetas hay **aplicadas**. Para etiquetar varias conversaciones a la vez usa las [acciones en lote](/05-conversaciones/#acciones-en-lote).

### Crear una etiqueta

Escribe un nombre que no exista y elige **Crear nueva etiqueta**. Si todavía no tienes ninguna verás *«Aún no hay etiquetas disponibles. Comienza a escribir para crear tu primera etiqueta»*.

### Quitar o eliminar una etiqueta

| Acción | Qué hace |
|---|---|
| **Quitar de la conversación** | Solo la quita de esa conversación |
| **Eliminar permanentemente** | Borra la etiqueta de **todas** las conversaciones donde está. Pide confirmación y no se puede deshacer |

## Auto-tagging (etiquetas con IA)

Cada etiqueta puede tener una instrucción **Cuándo aplicar** para que la IA la ponga sola. En la sección **Auto-tagging** de la ventana, por etiqueta:

- Interruptor **Activo / Inactivo**.
- **Cuándo aplicar**: describe el criterio. Ej.: *«Aplicar cuando el cliente pide precio, cotización o presupuesto»*. La IA necesita un «cuándo» claro para acertar.

Las etiquetas puestas por la IA muestran **Aplicado automáticamente**.

:::caution[Puede no aparecerte]
Auto-tagging está habilitado por organización y no aplica a la etiqueta **Lead**. Sin él no verás esta sección ni el botón de re-analizar. Pídele a Peaking que lo active.
:::

Esta es una de las instrucciones tipo «mini prompt» del agente; ver [Instrucciones del agente](/05-agente-ia/instrucciones-del-agente/#auto-tagging-de-mensajes).

### Re-analizar tags

Con auto-tagging activo, el encabezado de la conversación tiene un botón con destellos (**Re-analizar tags**). La IA revisa la conversación de nuevo y aplica lo que corresponda: *«N tags aplicados automáticamente»* o *«Sin nuevos tags sugeridos»*. Si lo pulsas de nuevo muy rápido verás que debes esperar un momento.

### Enviar conversión a Meta

Si tienes conectada [Meta CAPI](/08-configuracion/canales-e-integraciones/integraciones/), cada etiqueta con auto-tagging puede **Enviar conversión a Meta**: cuando la IA la aplica, se manda un evento a tu dataset de Meta (Conversions API). Configuras:

| Campo | Qué es |
|---|---|
| **Enviar conversión a Meta** | Interruptor |
| **Nombre del evento en Meta** | El evento que recibirá Meta |
| **Valor (opcional)** y **Moneda** | El valor de la conversión |

## Convertir a Lead

**Convertir a Lead** marca la conversación como lead (*«Esta conversación ha sido marcada exitosamente como lead»*). Desde entonces aparece en el filtro **Leads** de la bandeja.

## Escalación a humano

Master y Administrador ven, al final de la misma ventana, la sección **Escalación a humano**. Ahí defines **cuándo el agente debe escalar la conversación a una persona**:

- **Criterio personalizado**: escribe tu regla. Vacío = criterio por defecto (se muestra como *Default*).
- **Guardar criterio** y **Restaurar default**.
- La detección de frustración del cliente funciona como **red de seguridad independiente**.

Una conversación escalada aparece como **Escalada** y en el filtro **Escalados**. También puedes escalar a mano con el botón **Escalar**.

## Preguntas frecuentes

**No veo la sección Auto-tagging.**
Está habilitada por organización y solo aparece si ya tienes etiquetas creadas distintas de «Lead».

**La IA no etiqueta como espero.**
Reescribe el **Cuándo aplicar** con una situación concreta del cliente.

**Borré una etiqueta sin querer.**
Eliminar es definitivo y la quita de todas las conversaciones. Vuelve a crearla y aplícala.
