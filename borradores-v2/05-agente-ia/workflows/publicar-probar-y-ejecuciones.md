---
title: Publicar, probar y revisar ejecuciones
description: "Guarda borradores, publica versiones, prueba tu workflow con el chat de prueba y revisa qué pasó en cada ejecución."
sidebar:
  order: 3
---

Armar el flujo es la mitad del trabajo. Esta página explica cómo ponerlo en marcha, cómo probarlo y cómo entender qué hizo.

## Guardar borrador vs. publicar

| Acción | Qué hace |
|--------|----------|
| **Guardar Borrador** | Guarda tu avance. **No afecta** lo que está funcionando en producción |
| **Publicar** | Convierte el borrador en una nueva versión y la pone en uso |

Al publicar, Peaking te pide confirmar: *"Se guardará el borrador actual y se publicará como v{n}. La versión publicada será usada por el motor de ejecución."*

[CAPTURA PENDIENTE: diálogo "Publicar Workflow" con el número de versión]

:::note[Publicar no activa el flujo por sí solo]
Después de publicar, el flujo se **activa** con el interruptor de la [lista de workflows](/05-agente-ia/workflows/). Un flujo no se puede activar sin haber sido publicado antes.
:::

### Si el canal ya está en otro proyecto

Si el canal del Trigger pertenece a otro proyecto, al publicar verás **"Mover el canal a este proyecto"**. Si aceptas con **Mover y publicar**, el otro proyecto deja de recibir mensajes de ese canal y este workflow empieza a atenderlos.

### Conversaciones que ya están en curso

Las conversaciones que ya iniciaron un flujo continúan con la versión con la que empezaron. Las nuevas usan la versión publicada más reciente.

<!-- VERIFICAR: la afirmación anterior viene del artículo vigente, no se confirmó en el motor de ejecución. -->

## Historial de versiones

El ícono de historial junto al número de versión muestra las **versiones publicadas**. Si aún no has publicado ninguna, verás *"Aún no hay versiones publicadas"*.

:::caution[Consultar no es restaurar]
El historial te permite **ver** las versiones publicadas. No incluye una acción para restaurar una versión anterior: si necesitas volver a un comportamiento previo, recréalo en el editor y publícalo como una versión nueva.
:::


## Probar el flujo

El botón **Probar** abre el **Chat de Prueba**, donde simulas una conversación sin afectar a clientes reales.

[CAPTURA PENDIENTE: chat de prueba con el mensaje "Probando la versión publicada v{n}"]

:::caution[Prueba la versión publicada, no el borrador]
El chat de prueba ejecuta el workflow **tal como está publicado**. Si cambiaste algo en el editor, **publica antes de probar** o no verás tus cambios. El chat te recuerda qué versión estás probando: *"Probando la versión publicada v{n}"*.
:::

- Escribe un mensaje de prueba y envíalo.
- Si el flujo llega a un Delay, el chat indica **"Workflow pausado por un nodo de delay"**.
- La **Traza de Nodos** muestra por qué nodos pasó la conversación.

El chat de prueba es una conversación de prueba aislada (no escribe a clientes reales) y conserva las variables que el flujo va capturando durante la sesión; no hay un formulario para definirlas a mano. Con el botón de reiniciar empiezas una conversación nueva, sin variables.

<!-- VERIFICAR: reinicio del chat y que no envía por el canal real (se infirió de platform «workflow_test» en dev1; el motor es una función de servidor que no está en pkui). -->

## Ejecuciones

El panel **Ejecuciones** muestra las ejecuciones recientes del workflow. Se abre con el botón **Ejecuciones** de la barra.

| Estado | Qué significa |
|--------|---------------|
| **Completado** | El flujo llegó al final |
| **Ejecutando** | Está corriendo ahora |
| **Pausado** | Está en espera, por ejemplo dentro de un Delay |
| **Fallido** | Terminó con un error |

Si todavía no hay ninguna, verás *"Las ejecuciones aparecerán aquí cuando los mensajes activen este workflow"*.

[CAPTURA PENDIENTE: panel de ejecuciones con estados]

### Dos formas de ver el detalle

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
