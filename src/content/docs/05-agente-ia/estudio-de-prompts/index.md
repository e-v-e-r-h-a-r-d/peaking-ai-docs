---
title: Estudio de Prompts
description: "Crea, edita y publica los prompts de tu agente: la lista, el editor por pestañas y las plantillas para partir de un ejemplo."
sidebar:
  order: 1
---

**Estudio de Prompts** es la biblioteca donde viven todos los prompts de tu agente. Aquí los creas, los buscas, ves cuáles se están usando y los asignas a tus canales. Lo encuentras en el menú lateral como **Estudio de Prompts**.

:::note[Quién lo ve]
Solo los usuarios **Master** y **Administrador** pueden crear, editar, asignar o eliminar prompts. Si tu rol es Usuario verás el aviso *«Se requieren permisos de administrador»*.
:::

![Estudio de Prompts con la lista de tarjetas, el buscador, los filtros y el botón Nuevo prompt](/screenshots/v2/05-agente-ia/estudio-de-prompts-lista.png)

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Crear mi primer prompt | [Nuevo prompt](#crear-un-prompt) |
| Encontrar un prompt | [Buscar, filtrar y ordenar](#buscar-filtrar-y-ordenar) |
| Saber si un prompt se está usando | [Qué muestra cada tarjeta](#qué-muestra-cada-tarjeta) |
| Cambiar qué canal usa qué prompt | [Asignar canales](#acciones-de-cada-prompt) |
| Volver a una versión anterior | [Historial de versiones](/05-agente-ia/estudio-de-prompts/probar-publicar-y-versiones/) |
| Probar cómo responde el agente | [Laboratorio de pruebas](/05-agente-ia/estudio-de-prompts/probar-publicar-y-versiones/) |
| Escribir o mejorar el contenido | [Crear y editar un prompt](/05-agente-ia/estudio-de-prompts/#crear-y-editar-un-prompt) |
| Hacer que el agente envíe archivos, etiquete o escale con una instrucción | [Instrucciones del agente](/05-agente-ia/instrucciones-del-agente/) |
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
| Encontrar una plantilla para mi negocio | [Buscar una plantilla](#buscar-una-plantilla) |
| Usarla y dejarla lista | [Usar y personalizar](#usar-y-personalizar) |
| Entender de qué partes se compone | [Estructura de una plantilla](#estructura-de-una-plantilla) |
| Ver qué plantillas existen | [Plantillas disponibles](#plantillas-disponibles) |
| Partir de cero con ayuda de la IA | [Constructor de Prompts con IA](/05-agente-ia/estudio-de-prompts/#generar-usar-plantilla-y-mejorar-con-ia) |

## Estudio de Prompts

### Cómo se organiza

Un **prompt** es el conjunto de instrucciones que le dice al agente quién es, qué busca lograr, cómo conversa y qué herramientas usa. Tienes varios prompts y decides **dónde se usa cada uno**:

- En un **canal** (por ejemplo, tu WhatsApp): responde con el prompt asignado cuando ningún workflow toma la conversación. Cada canal usa **un solo prompt**.
- En un **workflow**: eliges el prompt en el nodo de agente. Ver [Workflows](/05-agente-ia/workflows/).

### Crear un prompt

Haz clic en **Nuevo prompt**. Se abre el editor, donde escribes el contenido por secciones y lo publicas. Todo el detalle está en [Crear y editar un prompt](/05-agente-ia/estudio-de-prompts/#crear-y-editar-un-prompt).

Si aún no tienes ninguno verás *«No se encontraron prompts. Crea tu primer prompt para comenzar.»*

### Buscar, filtrar y ordenar

Arriba de la lista:

| Control | Qué hace |
|---|---|
| **Buscar prompt…** | Filtra por nombre |
| **Todos / Usados (30 días) / Sin uso** | Muestra todos, solo los que el agente usó en los últimos 30 días, o los que no tuvieron uso. Cada opción trae su conteo |
| **Ordenar** | **Editados recientemente**, **Alfabético**, **Más usados**, **Publicados primero** o **Más conectados (workflows + canales)** |
| Botón de **invertir orden** | Cambia el sentido del orden elegido |
| **Abrir el laboratorio de prompts** | Abre el chat de pruebas |

Si ningún prompt coincide verás *«Sin prompts con esos filtros»*; prueba otro nombre o filtro.

### Qué muestra cada tarjeta

| Dato | Significa |
|---|---|
| **Estado** | **Publicado**, **Borrador** o **No activo** |
| **Editado hace…** | Cuándo se modificó por última vez |
| **Descripción** | La que escribiste (o *«Sin descripción»*) |
| **Workflows** | Los workflows que usan este prompt, o *«Sin workflows todavía»*. Cada uno indica su estado: *publicado y activo* (el agente usa este prompt), *activo pero con cambio sin publicar*, o *inactivo / sin publicar* |
| **N usos en 30 días** | Cuántas veces lo usó el agente en el último mes, o *«Sin usos en 30 días»* |

### Acciones de cada prompt

En la tarjeta, **Editar** abre el editor. El menú **Más acciones** (⋯) ofrece:

| Acción | Qué hace |
|---|---|
| **Editar** | Abre el prompt en el editor |
| **Asignar canales** | Abre la pestaña *Canales y herramientas* del editor, donde eliges qué canales usan este prompt |
| **Historial de versiones** | Compara versiones y permite revertir |
| **Eliminar** | Borra el prompt. Pide confirmación y no se puede deshacer |

## Crear y editar un prompt

El **editor de prompts** arma tu prompt por secciones y las une en un solo Markdown. Para abrirlo, haz clic en **Nuevo prompt** o en **Editar** desde [Estudio de Prompts](/05-agente-ia/estudio-de-prompts/).

![Editor de prompts con las cuatro pestañas, el botón Publicar y el panel «Para publicar»](/screenshots/v2/05-agente-ia/editor-general.png)

![Pestaña Instrucciones con Generar con IA, Usar plantilla y Mejorar con IA](/screenshots/v2/05-agente-ia/editor-instrucciones.png)

![Pestaña Canales y herramientas](/screenshots/v2/05-agente-ia/editor-canales-y-herramientas.png)

![Vista Ver Markdown con el prompt completo](/screenshots/v2/05-agente-ia/editor-ver-markdown.png)

### El editor de un vistazo

Arriba: **Todos los prompts** (volver a la lista), el título y una etiqueta **cambios sin publicar** o **publicado**. A la derecha: **Ver Markdown**, **Probar agente** y **Publicar**.

Las pestañas son **General**, **Instrucciones**, **Ejemplos** y **Canales y herramientas** (con **Anterior** y **Siguiente** al pie). A un lado, el panel **Para publicar** lista lo que falta y una **Vista previa** de cómo respondería el agente. Cada sección tiene un botón **¿Por qué es importante?** con una explicación y un ejemplo.

### Pestaña General

| Campo | Para qué sirve |
|---|---|
| **Nombre del prompt** | Te ayuda a reconocerlo al asignarlo en canales y workflows. Ej.: *Ventas por WhatsApp* |
| **Descripción** | Opcional: para qué sirve |
| **Idioma del agente** | **Español** o **Inglés**. Es el idioma de respuesta del agente de **toda la organización** |
| **Longitud de respuesta** | **Sin preferencia**, **Concisa** (1-3 oraciones), **Balanceada** (2-4) o **Detallada** |
| **Formato de presentación de productos** | **Compacta** (nombre y precio), **Estándar** (nombre, precio y descripción breve) o **Completa** (nombre, SKU, precio y descripción) |
| **Reglas innegociables** | Las 3 a 5 reglas que el agente debe cumplir siempre. Se repiten al inicio y al final del prompt para darles máxima prioridad |

### Pestaña Instrucciones

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

#### Flujo de la conversación

Debajo de los bloques está el flujo: los pasos que sigue el agente, en orden. Cada paso tiene:

- **Nombre del paso** (ej. *Saludo*).
- **Tipo de respuesta**: **Literal** (el agente lo dice tal cual) o **Estilo** (le describes cómo responder y él redacta).
- **Respuesta esperada del cliente** (opcional).

Con **Agregar paso**, **Subir paso**, **Bajar paso** y **Eliminar paso** lo ordenas. Si tu prompt venía de una versión anterior en texto libre, verás un aviso con **Convertir a pasos** (y **Deshacer conversión**); el texto anterior queda como referencia y **no se publica**.

### Pestaña Ejemplos

Conversaciones modelo que muestran el tono y el largo de respuesta. Cada ejemplo lleva un **título** y mensajes alternados de **Cliente** y **Agente** (**+ Cliente**, **+ Agente**). Incluye al menos un caso típico y uno difícil (un descuento, una queja). Se agregan con **Agregar ejemplo**.

### Pestaña Canales y herramientas

#### Canales

Los canales marcados responden con este prompt cuando **ningún workflow toma la conversación**. Cada canal usa un solo prompt; si marcas uno que ya usa otro, el editor avisa *«Al publicar, N canal(es) dejarán de usar su prompt actual y usarán este»*. Si no ves canales, conéctalos en [Canales](/08-configuracion/canales-e-integraciones/canales/). Para usar el prompt dentro de un workflow, elígelo en el nodo de agente.

#### Herramientas

Muestra las herramientas que conectaste en [Integraciones](/08-configuracion/canales-e-integraciones/integraciones/). Para cada una escribes **Cuándo y cómo usarla** (por ejemplo, *«Consulta disponibilidad antes de proponer horarios»*).

:::caution[Sin instrucción, la herramienta no se menciona]
Una herramienta sin instrucciones **no aparece en el prompt**: el agente no sabe cuándo usarla. Es la misma regla que con documentos, adjuntos y etiquetas: ver [Instrucciones del agente](/05-agente-ia/instrucciones-del-agente/).
:::

Si hay instrucciones de herramientas que ya no están conectadas, se listan como **Instrucciones de herramientas no conectadas** y puedes **Quitar** cada una.

#### Documentos de ventas

PDFs que el agente puede enviar **por WhatsApp**. Disponible cuando el prompt ya está publicado (antes verás *«Publica el prompt para poder adjuntar documentos»*). Detalle en [Instrucciones del agente](/05-agente-ia/instrucciones-del-agente/#documentos-de-ventas-del-prompt).

### Generar, usar plantilla y mejorar con IA

En el editor tienes tres atajos:

| Botón | Qué hace |
|---|---|
| **Generar con IA** | Chat con un asistente que te pregunta por tu negocio y arma el prompt (**Constructor de Prompts con IA**) |
| **Usar plantilla** | Un buscador de plantillas por palabra clave (ej. clínica, EPP, reservas). Reemplaza los marcadores `{{…}}` antes de publicar |
| **Mejorar con IA** | Propone una versión mejorada con buenas prácticas; compara y elige **Aplicar Prompt Mejorado** o **Re-mejorar** |

Cada uno pregunta *«¿Reemplazar el contenido actual?»*: se reemplazan Instrucciones, Flujo y Ejemplos; **no** cambian los datos generales, canales ni herramientas.

### Ver Markdown

**Ver Markdown** muestra el prompt completo unido. Puedes **Copiar**, **Descargar .md** o editar ahí y usar **Aplicar cambios** para reflejarlos en las secciones. Las reglas innegociables y la configuración de respuestas se envían al agente por separado; los canales se configuran en su pestaña.

### Publicar

**Publicar** guarda el prompt y lo pone en uso en sus canales y workflows. El panel **Para publicar** muestra los pendientes; solo los puntos ámbar impiden publicar, el resto son sugerencias. Los pendientes típicos:

- Escribir el nombre y elegir el idioma.
- Agregar las reglas innegociables.
- Completar Identidad, Objetivos, Restricciones y Escalación.
- Agregar al menos un paso con nombre y respuesta, y un ejemplo completo.
- Reemplazar los marcadores `{{…}}` de una plantilla.

Al publicar verás *«Prompt publicado»*. Si sales con cambios, el editor pregunta *«¿Salir sin publicar?»*.

## Plantillas de prompt

Las **plantillas de prompt** son prompts completos y probados que puedes usar como punto de partida en lugar de escribir desde cero. Las encuentras en el editor, con el botón **Usar plantilla** (ver [Crear y editar un prompt](/05-agente-ia/estudio-de-prompts/#generar-usar-plantilla-y-mejorar-con-ia)).

[CAPTURA PENDIENTE: buscador de plantillas del Estudio de Prompts con el campo de búsqueda y varias tarjetas de plantilla]

### Buscar una plantilla

En el editor, haz clic en **Usar plantilla**. Escribe una palabra clave en el buscador (por ejemplo *clínica*, *citas*, *tienda*, *leads* o *instagram*) y verás las plantillas que coinciden. Cada tarjeta muestra su título, una descripción y su categoría.

### Usar y personalizar

1. Elige la plantilla. Peaking pregunta *«¿Reemplazar el contenido actual?»*: al aceptar se reemplazan las **Instrucciones**, el **Flujo** y los **Ejemplos**. No cambian los datos generales, los canales ni las herramientas.
2. Reemplaza los marcadores entre dobles llaves, como `{{brand}}`, por los datos reales de tu negocio. Algunas plantillas también incluyen `{{sucursales}}` y `{{zona_cobertura}}`.
3. Ajusta el tono, los límites y los casos de escalamiento a tu operación.
4. Prueba en el [Laboratorio de Pruebas](/05-agente-ia/estudio-de-prompts/probar-publicar-y-versiones/) y publica.

:::caution[No publiques con marcadores sin reemplazar]
Si queda un `{{brand}}` sin cambiar, el agente lo puede repetir tal cual a tus clientes. Busca las llaves dobles antes de publicar.
:::

También puedes pedirle a **Mejorar con IA** que pula la plantilla ya personalizada.

### Estructura de una plantilla

Todas siguen las mismas secciones, para que sean fáciles de leer y de editar:

| Sección | Qué define |
|---|---|
| **Objetivo** | Qué debe lograr el agente (agendar, calificar, resolver…) |
| **Personalidad** | Tono, largo de las respuestas, uso de emojis |
| **Flujo** | Los pasos de la conversación: saludo, preguntas de calificación y cierre |
| **Límites** | Lo que el agente no debe prometer ni hacer |
| **Escala cuando** | Los casos en que pasa la conversación a una persona |
| **Idioma** | En qué idioma responde |

Ejemplo de la plantilla **Agendamiento de Citas**:

```
# Asistente de Agenda - {{brand}}

## OBJETIVO
Agendar citas de forma rápida y eficiente.

## FLUJO
1. Saludo: "Hola, soy el asistente de {{brand}}. ¿Para qué servicio necesitas cita?"
2. Califica: ¿Para cuándo la necesitas? ¿Prefieres mañana o tarde?
3. Confirma: "Te confirmo cita: [fecha] a las [hora]. ¿Nombre y teléfono?"

## ESCALA cuando:
- Solicitan servicios no estándar
- Grupos grandes
```

### Plantillas disponibles

**Por objetivo:** Generación de Leads · Agendamiento de Citas · Soporte Técnico · Ventas Consultivas · Servicio al Cliente · Seguimiento Post-Venta · Calificación BANT (B2B) · Atención en Instagram/Facebook.

**Por industria:** Bienes Raíces · Clínicas/Consultorios · E-commerce/Retail · Educación/Bootcamps · Automotriz/Servicios · SaaS B2B · Restaurantes · Agencia de Seguros · Distribuidor Industrial B2B · Belleza y Estética · Cirugía Plástica / Medicina Estética · Gimnasio / Club Deportivo · Servicios a Domicilio · Turismo y Hospedaje · Eventos y Renta de Equipo · Energía Solar · Consultoría y Agenda de Demos · Productos Personalizados.

## Preguntas frecuentes

### Estudio de Prompts: preguntas

**No veo Estudio de Prompts en el menú.**
Es exclusivo de Master y Administrador.

**¿Cuántos prompts puede usar un canal?**
Uno. Para repartir una conversación entre varios agentes, usa un [workflow](/05-agente-ia/workflows/).

**Eliminé un prompt por error.**
La eliminación es definitiva. Si solo querías volver a un contenido anterior, usa el [historial de versiones](/05-agente-ia/estudio-de-prompts/probar-publicar-y-versiones/) antes de eliminar.

### Crear y editar un prompt: preguntas

**¿Por qué no puedo publicar?**
Revisa el panel **Para publicar**: lista cada pendiente. También verás *«Faltan N pendientes para publicar»*.

**¿Por qué no puedo probar el agente?**
**Probar agente** prueba la versión **publicada**. En un prompt nuevo verás *«Publica el prompt para poder probarlo»*.

**Tengo texto que el editor «confunde con la estructura».**
Líneas que empiezan con `#`, con un número de lista o con «Cliente:» pueden confundirse. Ajusta el texto para que se guarde tal cual.

### Plantillas de prompt: preguntas

**No encuentro una plantilla para mi negocio.**
El buscador revisa las palabras clave de cada plantilla (por ejemplo *clínica*, *citas*, *tienda*): prueba otra palabra o parte de una plantilla por objetivo. También puedes usar **Generar con IA**, que arma el prompt conversando contigo.

**¿Puedo guardar mis propias plantillas?**
En esta pantalla se usan las plantillas de Peaking. Para reutilizar uno de tus prompts, copia su contenido con **Ver Markdown** y pégalo en uno nuevo.

