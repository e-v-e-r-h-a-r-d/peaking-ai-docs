---
title: El editor y sus nodos
description: "Construye un workflow en el lienzo: qué hace cada nodo (Trigger, Agente, Condición, Salida, Webhook, Delay, Búsqueda de contacto, Agente de voz y Variables) y cómo configurarlo."
sidebar:
  order: 2
---

El editor de Workflows es un **lienzo** donde conectas nodos. Cada nodo hace una cosa: recibir un mensaje, responder con IA, decidir un camino, esperar o avisar a otro sistema. Al unirlos, defines paso a paso qué sucede cuando un cliente escribe.

[CAPTURA PENDIENTE: editor con un flujo de ejemplo y la barra de herramientas]

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Entender la barra de herramientas del editor | [Barra de herramientas](#la-barra-de-herramientas) |
| Definir cómo arranca el flujo | [Trigger](#trigger) |
| Poner un agente con prompt y herramientas | [Agente](#agente) |
| Decidir por qué camino sigue | [Condición](#condición) |
| Responder con un mensaje o plantilla | [Salida](#salida) |
| Llamar a otro sistema | [Webhook](#webhook) |
| Esperar o dar seguimiento | [Delay](#delay) |
| Buscar un contacto en Odoo | [Búsqueda de Contacto](#búsqueda-de-contacto) |
| Atender llamadas dentro del flujo | [Agente de Voz](#agente-de-voz) |
| Guardar o modificar datos del flujo | [Variables](#variables) |

## La barra de herramientas

En la parte superior del editor tienes los nodos que puedes agregar y las acciones del flujo.

**Nodos que puedes agregar:**

| Nodo | Para qué sirve |
|------|----------------|
| **Trigger** | El punto de inicio: por dónde entra la conversación |
| **Agente** | Un agente de IA que lee, usa herramientas y responde |
| **Condición** | Elige un camino según una condición |
| **Salida** | Envía un mensaje al cliente sin pasar por el agente |
| **Webhook** | Llama a un sistema externo |
| **Delay** | Pausa el flujo un tiempo |
| **Búsqueda de Contacto** | Busca un contacto y carga sus datos |
| **Agente de Voz** | Conecta el flujo con una llamada de voz |
| **Variables** | Asigna o resetea variables del flujo |

**Acciones del flujo:**

| Acción | Qué hace |
|--------|----------|
| **Deshacer / Rehacer** | Revierte o repite el último cambio en el lienzo |
| **Guardar Borrador** | Guarda tu avance sin afectar lo que está en producción |
| **Publicar** | Pone en marcha la versión actual |
| **Historial de versiones** | Muestra las versiones publicadas |
| **Probar** | Abre el chat de prueba |
| **Ejecuciones** | Abre el historial de ejecuciones |

Para el detalle de publicar, probar y ejecuciones, consulta [Publicar, probar y revisar ejecuciones](/05-agente-ia/workflows/#publicar-probar-y-revisar-ejecuciones).

---

## Trigger

El **Trigger** es donde empieza todo. Cada flujo tiene **un solo** Trigger.

| Campo | Descripción |
|-------|-------------|
| **Etiqueta / Nombre del nodo** | Cómo se identifica en el lienzo |
| **Canal** | El canal que activa el flujo |

El canal puede ser uno de tus canales conectados (WhatsApp, Messenger, Instagram), el widget de tu sitio web o un **Webhook (Externo)**.

### Disparar el flujo desde un sistema externo

Con **Webhook (Externo)**, Peaking te da una **URL** para que otro sistema inicie el flujo. Tienes también:

- **Secreto (opcional)**: una clave para autenticar las llamadas. Si lo dejas vacío, la URL funciona sin autenticación. Usa **Guardar Secreto** para confirmarlo.
- **Ejemplo de solicitud**: un modelo de cómo debe llamar el sistema externo.

:::note[Primero publica]
La URL del webhook se activa al **publicar** el flujo. Antes de eso verás: *"Publica el workflow para activar el webhook"*.
:::

### Si el canal ya está en otro proyecto

Un canal solo puede pertenecer a un proyecto. Si eliges uno que ya está conectado a otro, verás el aviso **"Este canal ya está conectado a otro proyecto"**. Al publicar, Peaking te preguntará si quieres **moverlo** a este proyecto: el otro proyecto dejará de recibir mensajes de ese canal.

---

## Agente

El nodo **Agente** ejecuta un agente de IA: lee el mensaje, razona con el prompt que le asignes, puede usar herramientas y responde.

| Campo | Descripción |
|-------|-------------|
| **Prompt** | El prompt del [Estudio de Prompts](/05-agente-ia/estudio-de-prompts/) que seguirá este agente |
| **Herramientas disponibles** | Las herramientas que puede usar |
| **Modo silencioso** | El agente procesa y usa herramientas, pero **no envía respuesta visible** al cliente |
| **Variables a recolectar** | Las variables que el agente puede guardar durante la conversación |

### Elegir o crear el prompt sin salir del editor

Puedes seleccionar un prompt existente, o crear uno con **Nuevo prompt** y ajustarlo con **Editar prompt**. Al terminar, usa **Volver al workflow** para regresar al lienzo.

### Herramientas

Las herramientas aparecen como **satélites** alrededor del nodo Agente. Haz clic en uno para configurarlo:

| Opción | Qué hace |
|--------|----------|
| **Cuándo usarla** | Una instrucción opcional que reemplaza la descripción por defecto de la herramienta |
| **Parámetros fijos** | Valores que siempre se envían (`clave=valor`, separados por coma) |
| **Desconectar herramienta** | La quita del agente |

Si no hay ninguna conectada, verás *"Sin herramientas conectadas"*.

#### Herramientas personalizadas

Con **Agregar Herramienta** creas una herramienta propia:

| Campo | Descripción |
|-------|-------------|
| **Nombre** | Cómo se llama la herramienta |
| **Cuándo usar (descripción para IA)** | Le explica al agente en qué situaciones usarla |
| **Parámetros** | Los datos que recibe |
| **Webhook (opcional)** | Una URL a la que se envía la llamada |

### Mensaje mientras se ejecuta

Campo opcional del nodo **Agente** (**Mensaje mientras se ejecuta**): un texto que se envía al cliente por **WhatsApp o Instagram** si el nodo tarda más de lo normal, por ejemplo *«⏳ Preparando tu cotización…»*. Con él aparece **Enviar después de (segundos)**, de **2 a 30** (5 por defecto). No aplica en el widget web ni en el chat de prueba.

### Variables a recolectar

Define qué variables puede guardar el agente. **Solo esas claves serán aceptadas.** Si dejas la lista vacía, el agente puede guardar cualquier variable.

:::tip[Clasifica con un agente silencioso]
Un patrón común: un agente en modo silencioso al inicio detecta la intención del cliente y guarda una variable (por ejemplo, `tipo_cliente = Existente`). Una **Condición** posterior lee esa variable para elegir el camino.
:::


---

## Condición

La **Condición** evalúa algo y envía el flujo por uno de dos caminos: **verdadero** o **falso**.

| Modo | Cómo evalúa |
|------|-------------|
| **Palabra clave** | Revisa si la conversación contiene esa palabra o frase |
| **Condición IA** | La IA evalúa semánticamente si se cumple la condición, usando el contexto de la conversación. Responde verdadero o falso |
| **Condiciones de variables** | Compara variables guardadas durante la conversación. Es determinístico y **no tiene costo de IA** |

Puedes sumar varias condiciones con **+ Agregar condición**.

:::caution[Cubre siempre el caso contrario]
Si ninguna condición se cumple y no conectaste la salida de "falso", el flujo se queda sin continuar. Usa esa salida para una respuesta genérica o para escalar a un humano.
:::

---

## Salida

La **Salida** envía un mensaje al cliente **sin pasar por el agente de IA**.

| Campo | Descripción |
|-------|-------------|
| **Tipo de Salida** | Las dos opciones: **Static Message** (mensaje estático) o **WhatsApp Template** (plantilla) |
| **Mensaje** | El texto que recibirá el cliente (si es mensaje estático) |
| **Plantilla / Idioma** | La plantilla de WhatsApp aprobada y su idioma (si envías plantilla) |
| **Canal de Salida** | Por dónde se envía |

Si no ves plantillas, aparecerá *"No se encontraron plantillas aprobadas"*. Sincronízalas en [Campañas › Plantillas](/14-audiencias/plantillas/).


---

## Webhook

El nodo **Webhook** hace una llamada HTTP a otro sistema cuando el flujo llega a ese punto. Úsalo para registrar datos, avisar a una herramienta o disparar otra automatización.

| Campo | Descripción |
|-------|-------------|
| **Nombre del Evento** | Cómo identificas esta llamada |
| **Método** | El método HTTP |
| **URL** | A dónde se envía |
| **Parámetros / Headers** | Datos adicionales de la llamada |
| **Autenticación** | Cómo se autentica ante el sistema externo |
| **Cuerpo Personalizado (JSON)** | El contenido a enviar. Usa `{{variable}}` para insertar variables del flujo. Si lo dejas vacío, se envía el contenido por defecto |
| **Manejar errores 5XX con gracia** | Evita que un error del sistema externo detenga el flujo |

<!-- VERIFICAR: comportamiento exacto de "Manejar errores 5XX con gracia" (¿continúa por la rama normal? ¿reintenta?). Solo se leyó la etiqueta. -->

---

## Delay

El **Delay** pausa el flujo antes de continuar.

| Campo | Descripción |
|-------|-------------|
| **Retraso (minutos)** | De **1 minuto a 10,080 minutos** (7 días) |
| **Cancelar si el usuario responde** | Si el cliente escribe durante la espera, el delay se cancela y el flujo sigue |
| **ID de Plantilla de Respaldo (opcional)** | Plantilla de WhatsApp que se envía si la ventana de 24 h de Meta expiró durante la espera |

:::caution[Después de 24 horas solo se envían plantillas]
Los delays mayores a 24 horas **solo permiten enviar plantillas** (nodo Salida). Los nodos Agente y los mensajes estáticos se bloquean automáticamente.
:::

:::tip[Seguimiento automático]
Combina **Delay + Salida**: si el cliente no responde en el tiempo configurado, el flujo envía un recordatorio.
:::

---

## Búsqueda de Contacto

Busca un contacto en Peaking y carga su información en el flujo.

| Campo | Descripción |
|-------|-------------|
| **Buscar por** | **Auto-detectar**, **RFC (VAT)**, **Email**, **Teléfono**, **Referencia** o **Nombre** |
| **Variable de entrada** | La variable que contiene el dato a buscar. Si la dejas vacía, usa el mensaje del cliente |


---

## Agente de Voz

Conecta el flujo con un agente de voz para iniciar o recibir una llamada.

| Campo | Descripción |
|-------|-------------|
| **Agente de voz** | El agente de voz a usar. Se configura aparte, en [Integraciones](/08-configuracion/canales-e-integraciones/integraciones/) |
| **Dirección** | **Inbound** (llamada entrante: el cliente llama) u **Outbound** (llamada saliente: el sistema llama) |
| **Número destino** | Solo en llamadas salientes: el teléfono al que se llama (por ejemplo `{{phone}}` o `+1234567890`) |
| **Duración máxima (minutos)** | Tiempo máximo de la llamada, de 1 a 60 (10 por defecto) |
| **Herramientas disponibles** | Qué puede usar el agente durante la llamada |
| **Variables a recolectar** | Qué datos debe capturar |

:::note[Crea el agente de voz primero]
Desde el lienzo solo eliges cuál usar. El agente de voz se crea y configura fuera del editor. Ver [Agente de voz](/05-agente-ia/agente-de-voz/).
:::


---

## Variables

El nodo **Variables** cambia las variables del flujo de forma explícita. Cada operación tiene una variable y una acción:

| Acción | Qué hace |
|--------|----------|
| **Establecer** | Asigna un valor fijo (por ejemplo, `tipo = premium`) |
| **Resetear** | Borra el valor de la variable |

Agrega varias con **+ Agregar operación**; se ejecutan en orden.

:::tip[Cuándo usarlo]
Después de una rama de Condición, para limpiar variables antes de reiniciar un tramo del flujo, o para fijar valores antes de un nodo Agente que depende de ellos.
:::
