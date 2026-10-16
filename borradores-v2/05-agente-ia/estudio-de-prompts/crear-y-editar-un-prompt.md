---
title: Crear y editar un prompt
description: "El editor del Estudio de Prompts pestaña por pestaña: datos generales, instrucciones, flujo, ejemplos, canales y herramientas, y cómo publicar."
sidebar:
  order: 2
---

El **editor de prompts** arma tu prompt por secciones y las une en un solo Markdown. Para abrirlo, haz clic en **Nuevo prompt** o en **Editar** desde [Estudio de Prompts](/05-agente-ia/estudio-de-prompts/).

[CAPTURA PENDIENTE: editor de prompts con las cuatro pestañas, el botón Publicar y el panel «Para publicar»]

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Ponerle nombre, idioma y reglas que nunca se rompan | [General](#pestaña-general) |
| Decir quién es el agente y cuándo escala | [Instrucciones](#pestaña-instrucciones) |
| Ordenar la conversación paso a paso | [Flujo de la conversación](#flujo-de-la-conversación) |
| Mostrar cómo debe responder | [Ejemplos](#pestaña-ejemplos) |
| Elegir qué canales usan el prompt | [Canales y herramientas](#pestaña-canales-y-herramientas) |
| Decirle cuándo usar cada herramienta | [Herramientas](#herramientas) |
| Que el agente envíe PDFs por WhatsApp | [Documentos de ventas](#documentos-de-ventas) |
| Partir de una base en lugar de una hoja en blanco | [Generar, plantilla y mejorar con IA](#generar-usar-plantilla-y-mejorar-con-ia) |
| Ver el Markdown final | [Ver Markdown](#ver-markdown) |
| Publicar | [Publicar](#publicar) |

## El editor de un vistazo

Arriba: **Todos los prompts** (volver a la lista), el título y una etiqueta **cambios sin publicar** o **publicado**. A la derecha: **Ver Markdown**, **Probar agente** y **Publicar**.

Las pestañas son **General**, **Instrucciones**, **Ejemplos** y **Canales y herramientas** (con **Anterior** y **Siguiente** al pie). A un lado, el panel **Para publicar** lista lo que falta y una **Vista previa** de cómo respondería el agente. Cada sección tiene un botón **¿Por qué es importante?** con una explicación y un ejemplo.

## Pestaña General

| Campo | Para qué sirve |
|---|---|
| **Nombre del prompt** | Te ayuda a reconocerlo al asignarlo en canales y workflows. Ej.: *Ventas por WhatsApp* |
| **Descripción** | Opcional: para qué sirve |
| **Idioma del agente** | **Español** o **Inglés**. Es el idioma de respuesta del agente de **toda la organización** |
| **Longitud de respuesta** | **Sin preferencia**, **Concisa** (1-3 oraciones), **Balanceada** (2-4) o **Detallada** |
| **Formato de presentación de productos** | **Compacta** (nombre y precio), **Estándar** (nombre, precio y descripción breve) o **Completa** (nombre, SKU, precio y descripción) |
| **Reglas innegociables** | Las 3 a 5 reglas que el agente debe cumplir siempre. Se repiten al inicio y al final del prompt para darles máxima prioridad |

## Pestaña Instrucciones

Cuatro bloques fijos, más los que quieras agregar:

| Bloque | Qué escribes |
|---|---|
| **Identidad y tono** | Quién es el agente y cómo habla |
| **Objetivos principales** | Lo que busca lograr en cada conversación |
| **Restricciones** | Lo que nunca debe hacer |
| **Reglas de escalación** | Cuándo pasa la conversación a una persona |
| **Personalizada** | Con **Nueva instrucción** agregas un bloque con nombre propio (por ejemplo, *Formas de pago*). **Eliminar instrucción** lo quita |

:::tip[Sin instrucciones, el agente improvisa]
Sin estas secciones el agente cambia de tono, promete lo que no puede cumplir o no sabe cuándo escalar.
:::

### Flujo de la conversación

Debajo de los bloques está el flujo: los pasos que sigue el agente, en orden. Cada paso tiene:

- **Nombre del paso** (ej. *Saludo*).
- **Tipo de respuesta**: **Literal** (el agente lo dice tal cual) o **Estilo** (le describes cómo responder y él redacta).
- **Respuesta esperada del cliente** (opcional).

Con **Agregar paso**, **Subir paso**, **Bajar paso** y **Eliminar paso** lo ordenas. Si tu prompt venía de una versión anterior en texto libre, verás un aviso con **Convertir a pasos** (y **Deshacer conversión**); el texto anterior queda como referencia y **no se publica**.

## Pestaña Ejemplos

Conversaciones modelo que muestran el tono y el largo de respuesta. Cada ejemplo lleva un **título** y mensajes alternados de **Cliente** y **Agente** (**+ Cliente**, **+ Agente**). Incluye al menos un caso típico y uno difícil (un descuento, una queja). Se agregan con **Agregar ejemplo**.

## Pestaña Canales y herramientas

### Canales

Los canales marcados responden con este prompt cuando **ningún workflow toma la conversación**. Cada canal usa un solo prompt; si marcas uno que ya usa otro, el editor avisa *«Al publicar, N canal(es) dejarán de usar su prompt actual y usarán este»*. Si no ves canales, conéctalos en [Canales](/08-configuracion/canales-e-integraciones/canales/). Para usar el prompt dentro de un workflow, elígelo en el nodo de agente.

### Herramientas

Muestra las herramientas que conectaste en [Integraciones](/08-configuracion/canales-e-integraciones/integraciones/). Para cada una escribes **Cuándo y cómo usarla** (por ejemplo, *«Consulta disponibilidad antes de proponer horarios»*).

:::caution[Sin instrucción, la herramienta no se menciona]
Una herramienta sin instrucciones **no aparece en el prompt**: el agente no sabe cuándo usarla. Es la misma regla que con documentos, adjuntos y etiquetas: ver [Instrucciones del agente](/05-agente-ia/instrucciones-del-agente/).
:::

Si hay instrucciones de herramientas que ya no están conectadas, se listan como **Instrucciones de herramientas no conectadas** y puedes **Quitar** cada una.

### Documentos de ventas

PDFs que el agente puede enviar **por WhatsApp**. Disponible cuando el prompt ya está publicado (antes verás *«Publica el prompt para poder adjuntar documentos»*). Detalle en [Instrucciones del agente](/05-agente-ia/instrucciones-del-agente/#documentos-de-ventas-del-prompt).

## Generar, usar plantilla y mejorar con IA

En el editor tienes tres atajos:

| Botón | Qué hace |
|---|---|
| **Generar con IA** | Chat con un asistente que te pregunta por tu negocio y arma el prompt (**Constructor de Prompts con IA**) |
| **Usar plantilla** | Un buscador de plantillas por palabra clave (ej. clínica, EPP, reservas). Reemplaza los marcadores `{{…}}` antes de publicar |
| **Mejorar con IA** | Propone una versión mejorada con buenas prácticas; compara y elige **Aplicar Prompt Mejorado** o **Re-mejorar** |

Cada uno pregunta *«¿Reemplazar el contenido actual?»*: se reemplazan Instrucciones, Flujo y Ejemplos; **no** cambian los datos generales, canales ni herramientas.

## Ver Markdown

**Ver Markdown** muestra el prompt completo unido. Puedes **Copiar**, **Descargar .md** o editar ahí y usar **Aplicar cambios** para reflejarlos en las secciones. Las reglas innegociables y la configuración de respuestas se envían al agente por separado; los canales se configuran en su pestaña.

## Publicar

**Publicar** guarda el prompt y lo pone en uso en sus canales y workflows. El panel **Para publicar** muestra los pendientes; solo los puntos ámbar impiden publicar, el resto son sugerencias. Los pendientes típicos:

- Escribir el nombre y elegir el idioma.
- Agregar las reglas innegociables.
- Completar Identidad, Objetivos, Restricciones y Escalación.
- Agregar al menos un paso con nombre y respuesta, y un ejemplo completo.
- Reemplazar los marcadores `{{…}}` de una plantilla.

Al publicar verás *«Prompt publicado»*. Si sales con cambios, el editor pregunta *«¿Salir sin publicar?»*.

## Preguntas frecuentes

**¿Por qué no puedo publicar?**
Revisa el panel **Para publicar**: lista cada pendiente. También verás *«Faltan N pendientes para publicar»*.

**¿Por qué no puedo probar el agente?**
**Probar agente** prueba la versión **publicada**. En un prompt nuevo verás *«Publica el prompt para poder probarlo»*.

**Tengo texto que el editor «confunde con la estructura».**
Líneas que empiezan con `#`, con un número de lista o con «Cliente:» pueden confundirse. Ajusta el texto para que se guarde tal cual.
