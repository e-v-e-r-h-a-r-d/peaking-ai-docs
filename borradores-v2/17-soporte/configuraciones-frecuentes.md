---
title: Configuraciones frecuentes
description: Soluciones directas a las dudas más comunes sobre el agente, etiquetas, workflows, canales, herramientas, Base de Conocimientos y plantillas.
sidebar:
  order: 2
---

Los problemas que más se repiten y cómo resolverlos tú mismo, con la ubicación actual de cada pantalla.

## Qué quieres hacer

| Mi problema… | Ve a… |
|---|---|
| El agente responde mal | [Respuestas incorrectas](#el-agente-responde-de-forma-incorrecta-o-inesperada) |
| No se aplican etiquetas | [Auto-tagging](#el-agente-no-aplica-etiquetas-automáticamente) |
| Un workflow no corre | [Workflow](#mi-workflow-no-se-activa) |
| Las variables llegan vacías | [Variables](#las-variables-del-workflow-llegan-vacías) |
| No llegan mensajes | [Canal](#mi-canal-no-recibe-mensajes) |
| No usa una herramienta | [Herramientas](#el-agente-no-usa-una-herramienta) |
| No encuentra algo de la Base de Conocimientos | [Base de Conocimientos](#el-agente-no-encuentra-información-de-la-base-de-conocimientos) |
| Una plantilla no sale | [Plantillas](#las-plantillas-de-whatsapp-no-aparecen-o-no-se-envían) |

## El agente responde de forma incorrecta o inesperada

**Causa común:** el prompt no cubre ese escenario o la Base de Conocimientos no tiene el dato.

1. Abre el prompt en el [Estudio de Prompts](/05-agente-ia/estudio-de-prompts/) y busca la instrucción que cubre ese caso; si no existe, añádela.
2. Usa disparadores claros: *«SI el cliente pregunta por tiempos de entrega → responde con el rango de X a Y días hábiles»*.
3. Si falta información (precios, políticas), súbela a la [Base de Conocimientos](/04-base-conocimientos/).
4. Prueba en el **Laboratorio** del Estudio de Prompts antes de publicar. Ver [Probar, publicar y versiones](/05-agente-ia/estudio-de-prompts/probar-publicar-y-versiones/).

:::tip[Lo más importante, arriba]
Las reglas críticas deben ir al inicio del prompt con una condición explícita.
:::

## El agente no aplica etiquetas automáticamente

**Causa común:** el criterio **Cuándo aplicar** es demasiado amplio o ambiguo.

1. En **Mensajes**, abre la ventana de etiquetas y ve a **Auto-tagging**. Ver [Etiquetas y escalamiento](/05-conversaciones/etiquetas-y-escalamiento/).
2. Haz el criterio más específico, con frases reales de tus clientes (*«lo quiero», «envíenme la factura»*).
3. Verifica que la etiqueta tenga el auto-tagging activo y que el interruptor de **Auto-tagging** esté encendido en tu organización.
4. Prueba con esas frases en el Laboratorio.

## Mi workflow no se activa

1. En **Agente IA › Workflows** confirma que el flujo esté **publicado** y activo; los cambios no aplican hasta **Publicar**.
2. Revisa el nodo **Trigger**: tipo y canal deben coincidir con tus mensajes.
3. Si es por palabra clave, prueba la palabra exacta.
4. Revisa **Ejecuciones** para ver si hubo intentos y por qué fallaron. Ver [Publicar, probar y ejecuciones](/05-agente-ia/workflows/publicar-probar-y-ejecuciones/).
5. Revisa que un nodo **Condition** temprano no bloquee todas las conversaciones.

## Las variables del workflow llegan vacías

1. El nombre debe ser **idéntico** en el nodo que la define y en el que la usa.
2. En el nodo **Agent**, confirma que la variable esté declarada para recolectarse.
3. El cliente debe haber dado el dato antes de que el flujo lo use: revisa el orden de los nodos.
4. Usa el **Chat de Prueba** y revisa la **Traza de Nodos**. Ver [Editor y nodos](/05-agente-ia/workflows/editor-y-nodos/).

## Mi canal no recibe mensajes

1. Ve a **Configuración › Canales** y revisa el estado del canal. Ver [Canales](/08-configuracion/canales-e-integraciones/canales/).
2. Si dice **Token expirado – Reconectar** (Instagram y Messenger), reconéctalo: aunque aparezca *Conectado*, el agente deja de enviar y recibir.
3. Si el canal está conectado, revisa que no tengas la IA **silenciada** en ese canal.
4. Comprueba que el prompt esté asignado a ese canal.
5. Envía un mensaje de prueba desde otro número y espera un minuto.

## El agente no usa una herramienta

1. En el prompt, revisa que la herramienta esté declarada y que su campo **«cuándo»** sea específico. Ver [Instrucciones del agente](/05-agente-ia/instrucciones-del-agente/).
2. Si no aparece, verifica que la integración esté **Conectada** en [Herramientas](/08-configuracion/canales-e-integraciones/herramientas/) o [Integraciones](/08-configuracion/canales-e-integraciones/integraciones/).
3. Prueba en el Laboratorio con el mensaje exacto que debería activarla.

## El agente no encuentra información de la Base de Conocimientos

1. Busca el documento y verifica que esté activo. Ver [Base de Conocimientos](/04-base-conocimientos/).
2. Escríbelo con las palabras con que preguntan tus clientes.
3. Para archivos o fichas que el agente debe *enviar*, usa [Adjuntos y fichas técnicas](/04-base-conocimientos/adjuntos-y-fichas-tecnicas/) y completa su **«cuándo»**.
4. Prueba con la pregunta exacta en el Laboratorio.

## Las plantillas de WhatsApp no aparecen o no se envían

1. Ve a **Campañas › Plantillas**. Ver [Plantillas](/14-audiencias/plantillas/).
2. Solo las **Aprobadas** se pueden enviar.
3. Si no ves una plantilla que sí existe en Meta, usa **Sincronizar Plantillas**.
4. Si una plantilla está **Rechazada**, lee el motivo en la lista, corrígela y vuelve a enviarla.
5. Si un envío falla, revisa el motivo en [Envíos masivos](/14-audiencias/envios-masivos/).

## Preguntas rápidas

**¿Puedo cambiar el tono del agente?**
Sí, en el Estudio de Prompts.

**¿Puedo tener varios prompts?**
Sí; cada canal puede usar uno distinto.

**¿Puedo deshacer un cambio en un prompt?**
Sí: el Estudio de Prompts guarda versiones y permite revertir. Ver [Probar, publicar y versiones](/05-agente-ia/estudio-de-prompts/probar-publicar-y-versiones/#revertir-a-una-versión).
