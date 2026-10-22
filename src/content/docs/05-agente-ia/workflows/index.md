---
title: Workflows
description: "Automatiza conversaciones con flujos de nodos: la lista, cómo publicar, probar y revisar ejecuciones."
sidebar:
  order: 1
---

Los **Workflows** son flujos visuales que definen lo que tu agente hace por su cuenta: qué agente responde, qué decisión toma según lo que escribe el cliente, cuánto espera antes de dar seguimiento y cuándo avisa a otro sistema.

Esta página explica la **lista de workflows**: cómo se organizan, cómo se activan y cómo ver si funcionan. Para construir uno, ve a [El editor y sus nodos](/05-agente-ia/workflows/editor-y-nodos/).

:::note[Antes de empezar]
Workflows aparece en el menú solo si el módulo **Workflows** está activo y tu rol es **Master** o **Administrador**. Un Master puede activarlo en [Módulos](/08-configuracion/cuenta/).
:::

![Lista de workflows con los 4 indicadores arriba y los proyectos como carpetas](/screenshots/v2/05-agente-ia/workflows-lista.png)

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Ver cuántos flujos tengo activos y cómo van | [Los cuatro indicadores](#los-cuatro-indicadores) |
| Activar, pausar o eliminar un flujo | [Estados y acciones](#los-tres-estados-de-un-flujo) |
| Publicar un cambio | [Guardar borrador vs. publicar](#guardar-borrador-vs-publicar) |
| Probar un flujo antes de activarlo | [Probar el flujo](#probar-el-flujo) |
| Revisar qué pasó en cada ejecución | [Ejecuciones](#ejecuciones) |
| Armar el flujo con nodos | [El editor y sus nodos](/05-agente-ia/workflows/editor-y-nodos/) |

## Workflows

### Los cuatro indicadores

Arriba de la lista verás un resumen de cómo está funcionando tu automatización:

| Indicador | Qué te dice |
|-----------|-------------|
| **Flujos activos** | Cuántos de tus flujos están activos, del total que tienes |
| **Ejecuciones este mes** | Cuántas veces se ejecutaron tus flujos desde el día 1 del mes en curso, comparado con el mes pasado |
| **Terminaron con éxito** | Porcentaje de ejecuciones terminadas que llegaron al final (completadas ÷ completadas + fallidas), contando desde el día 1 del mes en curso. Indica también cuántas están en espera o detenidas por respuesta del cliente |
| **Última ejecución** | Qué flujo se ejecutó más recientemente |


### Proyectos y flujos

Tus workflows se organizan en dos niveles:

- **Proyecto**: una carpeta que agrupa los flujos de una misma cuenta o línea de negocio. Cada carpeta indica cuántos de sus flujos están activos.
- **Flujo (workflow)**: la automatización en sí.

Los **canales se conectan por proyecto**. Eso significa que dos flujos del mismo proyecto no pueden atender el mismo canal a la vez.

#### Crear un proyecto

1. Haz clic en **Nuevo Proyecto**.
2. Escribe el **Nombre del proyecto**.
3. Haz clic en **Crear**.

#### Crear un workflow

1. Dentro del proyecto, haz clic en **Nuevo workflow en** *[nombre del proyecto]*.
2. Escribe el **nombre del flujo** y agrégalo.
3. Se abre el editor para que lo armes.

Si el proyecto está vacío, verás *"Carpeta vacía · crear un workflow"*. Y si aún no tienes ningún proyecto: *"Crea un proyecto para comenzar"*.

:::tip[Un flujo por canal]
Si tienes WhatsApp y Messenger activos, crea un flujo para cada canal. Así personalizas cada uno sin mezclar lógica.
:::

### Los tres estados de un flujo

| Estado | Qué significa |
|--------|---------------|
| **Activo** | Está atendiendo mensajes del canal que tiene conectado |
| **En pausa** | Está publicado pero no recibe mensajes |
| **Borrador** | Aún no se ha publicado |

### Activar o pausar un flujo

Cada flujo tiene un interruptor **Activar** en la lista. Hay dos reglas:

:::caution[Publica antes de activar]
Un flujo solo se puede activar después de **publicarlo**. Si intentas activarlo sin publicar, verás: *"Publica el workflow desde el editor para poder activarlo"*. Aprende cómo en [Publicar, probar y revisar ejecuciones](/05-agente-ia/workflows/#publicar-probar-y-revisar-ejecuciones).
:::

:::caution[Un canal, un flujo activo por proyecto]
Si otro flujo del mismo proyecto ya atiende ese canal, Peaking no te deja activar el nuevo y te indica cuál es. Pausa primero el flujo que ya lo atiende.
:::

### Ver el detalle de un flujo

Al seleccionar un flujo en la lista, aparece un panel con su detalle:

- **Ejecuciones · 30 días** y su porcentaje de **Éxito**.
- Los **pasos** que lo componen. Si aún no tiene pasos, verás *"Ábrelo en el editor para armarlo"*.
- El botón **Abrir editor**.

### Eliminar un workflow

En la lista de Workflows, selecciona el flujo y usa **Eliminar** en su panel de detalle (junto a **Abrir editor**). Al eliminar un workflow se pierden **todos sus nodos, conexiones y versiones publicadas**. Esta acción no se puede deshacer.

<!-- VERIFICAR: si se puede eliminar un flujo con versión publicada activa (el botón aparece siempre en dev1). -->

### Qué sigue

- [El editor y sus nodos](/05-agente-ia/workflows/editor-y-nodos/): arma el flujo.
- [Publicar, probar y revisar ejecuciones](/05-agente-ia/workflows/#publicar-probar-y-revisar-ejecuciones): ponlo en marcha.

## Publicar, probar y revisar ejecuciones

Armar el flujo es la mitad del trabajo. Esta página explica cómo ponerlo en marcha, cómo probarlo y cómo entender qué hizo.

### Guardar borrador vs. publicar

| Acción | Qué hace |
|--------|----------|
| **Guardar Borrador** | Guarda tu avance. **No afecta** lo que está funcionando en producción |
| **Publicar** | Convierte el borrador en una nueva versión y la pone en uso |

Al publicar, Peaking te pide confirmar: *"Se guardará el borrador actual y se publicará como v{n}. La versión publicada será usada por el motor de ejecución."*

[CAPTURA PENDIENTE: diálogo "Publicar Workflow" con el número de versión]

:::note[Publicar no activa el flujo por sí solo]
Después de publicar, el flujo se **activa** con el interruptor de la [lista de workflows](/05-agente-ia/workflows/). Un flujo no se puede activar sin haber sido publicado antes.
:::

#### Si el canal ya está en otro proyecto

Si el canal del Trigger pertenece a otro proyecto, al publicar verás **"Mover el canal a este proyecto"**. Si aceptas con **Mover y publicar**, el otro proyecto deja de recibir mensajes de ese canal y este workflow empieza a atenderlos.

#### Conversaciones que ya están en curso

Las conversaciones que ya iniciaron un flujo continúan con la versión con la que empezaron. Las nuevas usan la versión publicada más reciente.

<!-- VERIFICAR: la afirmación anterior viene del artículo vigente, no se confirmó en el motor de ejecución. -->

### Historial de versiones

El ícono de historial junto al número de versión muestra las **versiones publicadas**. Si aún no has publicado ninguna, verás *"Aún no hay versiones publicadas"*.

:::caution[Consultar no es restaurar]
El historial te permite **ver** las versiones publicadas. No incluye una acción para restaurar una versión anterior: si necesitas volver a un comportamiento previo, recréalo en el editor y publícalo como una versión nueva.
:::

### Probar el flujo

El botón **Probar** abre el **Chat de Prueba**, donde simulas una conversación sin afectar a clientes reales.

![Chat de prueba con el mensaje «Probando la versión publicada»](/screenshots/v2/05-agente-ia/workflow-chat-de-prueba.png)

:::caution[Prueba la versión publicada, no el borrador]
El chat de prueba ejecuta el workflow **tal como está publicado**. Si cambiaste algo en el editor, **publica antes de probar** o no verás tus cambios. El chat te recuerda qué versión estás probando: *"Probando la versión publicada v{n}"*.
:::

- Escribe un mensaje de prueba y envíalo.
- Si el flujo llega a un Delay, el chat indica **"Workflow pausado por un nodo de delay"**.
- La **Traza de Nodos** muestra por qué nodos pasó la conversación.

El chat de prueba es una conversación de prueba aislada (no escribe a clientes reales) y conserva **en memoria** las variables que el flujo va capturando durante la sesión (no se guardan en tu cuenta); no hay un formulario para definirlas a mano. Con el botón de reiniciar empiezas una conversación nueva, sin variables.


### Ejecuciones

El panel **Ejecuciones** muestra las ejecuciones recientes del workflow. Se abre con el botón **Ejecuciones** de la barra.

| Estado | Qué significa |
|--------|---------------|
| **Completado** | El flujo llegó al final |
| **Ejecutando** | Está corriendo ahora |
| **Pausado** | Está en espera, por ejemplo dentro de un Delay |
| **Fallido** | Terminó con un error |

Si todavía no hay ninguna, verás *"Las ejecuciones aparecerán aquí cuando los mensajes activen este workflow"*.

![Panel de ejecuciones con estados](/screenshots/v2/05-agente-ia/workflow-ejecuciones.png)

#### Dos formas de ver el detalle

Al abrir una ejecución puedes alternar entre:

- **Ver línea de tiempo**: los pasos agrupados por conversación, con el número de mensajes de cada una.
- **Ver crudo**: el registro completo, tal como lo guarda el sistema.

En la línea de tiempo, cada paso muestra su **Entrada**, su **Salida** y su **Duración**. Cuando un nodo esperó, aparece indicado como **Esperó**.

:::tip[Cómo depurar un flujo]
1. Abre la ejecución que no hizo lo esperado.
2. Revisa en la línea de tiempo en qué nodo cambió de camino.
3. Si fue una Condición, compara el valor de la variable con lo que esperabas.
4. Corrige en el editor, **publica** y vuelve a probar.
:::

## Preguntas frecuentes

**¿Puedo usar el mismo prompt en varios nodos Agente?**
Sí. Cada nodo puede tener sus propias herramientas, aunque compartan el prompt.

**¿Qué pasa si ninguna rama de una Condición es verdadera?**
El flujo puede quedarse sin continuar. Conecta siempre la salida de "falso" a una respuesta genérica o a un escalamiento a humano.

**¿Los Delays se cuentan en tiempo real?**
Sí, desde que el flujo llega al nodo. Con **Cancelar si el usuario responde** activo, el delay se cancela si el cliente escribe antes.

**¿Por qué no puedo activar mi flujo?**
Hay dos causas posibles: aún no lo has **publicado**, o ya hay otro flujo activo en el mismo proyecto atendiendo ese canal. Revisa [Workflows](/05-agente-ia/workflows/).
