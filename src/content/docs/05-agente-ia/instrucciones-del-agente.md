---
title: Instrucciones del agente (mini prompts)
description: "Dónde le escribes al agente una instrucción corta para que haga algo: usar una herramienta, enviar un archivo, etiquetar una conversación o escalar a una persona."
sidebar:
  order: 2
---

Además del prompt principal, el agente tiene varias **instrucciones cortas** repartidas por la plataforma. Funcionan como **mini prompts**: son una frase tuya que le dice **cuándo** hacer algo. Si no escribes la instrucción, ese elemento **no se activa**.

:::tip[La regla general]
Casi todo lo que le das al agente (archivos, herramientas, etiquetas) necesita un campo de **«cuándo»**. Piensa en él como una orden: *«Cuando el cliente pregunte por el catálogo, envíale el PDF»*. Cuanto más claro el cuándo, mejor acierta.
:::

[CAPTURA PENDIENTE: collage de los cinco campos «cuándo»: herramienta en el prompt, documento del prompt, adjunto de la Base de conocimientos, etiqueta con «Cuándo aplicar» y criterio de escalación]

## Qué quieres hacer

| Quiero que el agente… | Dónde lo configuro | Campo de instrucción |
|---|---|---|
| Use una herramienta (calendario, CRM, productos…) | Estudio de Prompts › editor › **Canales y herramientas** | **Cuándo y cómo usarla** |
| Envíe un PDF de ventas por WhatsApp | Estudio de Prompts › editor › **Canales y herramientas** › **Documentos de ventas** | **Cuándo enviar este documento** |
| Envíe una imagen o PDF de la biblioteca | Base de Conocimientos › **Adjuntos** | **Cuándo enviar** |
| Ponga etiquetas solo | Mensajes › **Gestionar Etiquetas de Conversación** › **Auto-tagging** | **Cuándo aplicar** |
| Escale a una persona con mi criterio | Mensajes › **Gestionar Etiquetas de Conversación** › **Escalación a humano** | **Criterio personalizado** |
| Cumpla siempre ciertas reglas | Estudio de Prompts › editor › **General** | **Reglas innegociables** |
| Extraiga datos del cliente al CRM | Configuración › **Extracción de datos** | **Descripción para el agente IA** |
| Pida ciertos datos al crear un contacto en Odoo | Configuración › **Herramientas** › Odoo | **Instrucción para el AI** |

## Herramientas del prompt

En el editor del prompt, pestaña **Canales y herramientas › Herramientas**, cada herramienta conectada tiene el campo **Cuándo y cómo usarla**.

*Ejemplo:* en Google Calendar, *«Consulta disponibilidad antes de proponer horarios. Agenda solo cuando el cliente confirme el horario de forma explícita»*.

Sin instrucciones, la herramienta **no se menciona en el prompt**. Ver [Crear y editar un prompt](/05-agente-ia/estudio-de-prompts/#herramientas).

## Documentos de ventas del prompt

Los **Documentos de ventas** son PDFs que el agente puede mandar **por WhatsApp**. Se agregan en el editor del prompt, pestaña **Canales y herramientas › Documentos de ventas**, **después de publicar** el prompt.

1. Haz clic en **Añadir Documento**.
2. Arrastra un PDF (solo PDF, máximo **50 MB**).
3. Completa **Nombre del documento** y **Descripción**.
4. Escribe **Cuándo enviar este documento**. Ejemplo: *«Cuando el cliente pregunte por el catálogo, lista de precios o productos disponibles»*.
5. Haz clic en **Guardar Documento**.

El nombre, el archivo y la instrucción de envío son **obligatorios**: sin la instrucción no puedes guardar. Cada documento muestra su *Cuándo enviar* y un interruptor para **activarlo o desactivarlo**. Al eliminarlo, el agente ya no podrá enviarlo.

:::note[Solo en WhatsApp]
Los documentos del prompt solo se envían por WhatsApp.
:::

## Adjuntos de la Base de conocimientos

Los **Adjuntos** son imágenes o PDFs que **cualquier agente de tus workflows** puede enviar. Están en **Base de Conocimientos › Adjuntos** (*«Adjuntos disponibles para todos los agentes»*).

1. Haz clic en **Agregar adjunto**.
2. Sube una imagen (JPG, PNG, WEBP o GIF) o un PDF, máximo **50 MB**.
3. Completa **Nombre** y **Descripción**.
4. Escribe **Cuándo enviar**. Ejemplo: *«Cuando el cliente pregunte cómo se ve el frasco o pida foto del producto»*. El agente lee esta instrucción para decidir si lo envía.
5. Guarda con **Guardar adjunto**.

Necesitas un archivo, un nombre y la condición de envío. Cada adjunto puede estar **Activo** o **Pausado**; **el agente solo envía adjuntos activos**. Los adjuntos también funcionan solo en WhatsApp. Puedes buscar por nombre, descripción o *cuándo enviar*, y activar, pausar o eliminar varios a la vez.

## Auto-tagging de mensajes

Las **etiquetas** de conversación pueden ponerse solas. Cada etiqueta tiene un campo **Cuándo aplicar** que funciona como mini prompt: la IA revisa la conversación y, si coincide con tu descripción, la etiqueta.

Dónde: en **Mensajes**, abre una conversación y entra a **Gestionar Etiquetas de Conversación**. En la sección **Auto-tagging**, por cada etiqueta:

| Control | Qué hace |
|---|---|
| Interruptor **Activo / Inactivo** | Enciende o apaga el etiquetado automático de esa etiqueta |
| **Cuándo aplicar** | Describe cuándo debe ponerse. Ejemplo: *«Aplicar cuando el cliente pide precio, cotización o presupuesto»* |

Las conversaciones etiquetadas por la IA muestran **Aplicado automáticamente**.

:::caution[Puede no aparecerte]
Auto-tagging es una función habilitada por organización y no aplica a la etiqueta **Lead**. Si no ves la sección, pídele a Peaking que la active.
:::

Las etiquetas también pueden disparar una conversión hacia Meta; ver [Meta CAPI](/08-configuracion/canales-e-integraciones/integraciones/).

## Criterio de escalación a humano

En la misma ventana, la sección **Escalación a humano** (visible para Master y Administrador) te deja definir **cuándo el agente debe escalar la conversación a una persona**.

- **Criterio personalizado**: escribe tu regla. Si lo dejas vacío se usa el criterio por defecto.
- **Guardar criterio** y **Restaurar default**.
- La detección de frustración del cliente funciona como **red de seguridad independiente**: aplica aunque tu criterio no la mencione.

## Reglas innegociables

En el editor del prompt, pestaña **General**, las **Reglas innegociables** son 3 a 5 reglas que el agente cumple siempre. Se repiten al inicio y al final del prompt para darles máxima prioridad. Ver [Crear y editar un prompt](/05-agente-ia/estudio-de-prompts/#pestaña-general).

## Cómo escribir un buen «cuándo»

| Haz esto | Evita esto |
|---|---|
| Describe la **situación** del cliente: *«cuando pida precio o cotización»* | Frases vagas: *«cuando sea útil»* |
| Menciona **palabras o intenciones** que el cliente suele usar | Un «cuándo» que se parece al de otro elemento |
| Una instrucción por elemento | Mezclar varias acciones en una sola |

Si dos elementos se pisan (por ejemplo, dos adjuntos con el mismo «cuándo»), el agente puede elegir el equivocado. Ver [Evitar colisiones](/19-mejores-practicas/evitar-colisiones-agentes-herramientas/).

## Preguntas frecuentes

**Subí un documento o adjunto y el agente nunca lo envía.**
Revisa que esté **Activo**, que su **Cuándo enviar** sea claro y que la conversación sea por **WhatsApp**.

**¿Por qué no me deja guardar un documento?**
Faltan el nombre, el archivo o la instrucción de envío; los tres son obligatorios.

**¿Cuál es la diferencia entre documentos del prompt y adjuntos?**
Los **documentos del prompt** pertenecen a un prompt concreto; los **adjuntos** de la Base de conocimientos están disponibles para todos los agentes de tus workflows.
