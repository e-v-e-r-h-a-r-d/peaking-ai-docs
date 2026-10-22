---
title: Operación
description: "Cómo se reparte el trabajo en tu equipo: asignación, departamentos, extracción de datos y campos del CRM."
sidebar:
  order: 2
---

**Asignación** define **quién recibe** cada oportunidad nueva del CRM y cada tarea nueva, y cómo se le avisa. Tienes tres bloques en una sola pantalla: reparto de oportunidades, reparto de tareas y avisos al vendedor.

:::note[Antes de empezar]
Esta sección la ve solo el usuario **Master** y aparece únicamente si el módulo **CRM** o el módulo **Tareas** está activo. Cada bloque aparece solo si su módulo está activo. Actívalos en [Módulos](/08-configuracion/cuenta/).
:::

[CAPTURA PENDIENTE: pantalla Asignación completa con los tres bloques: CRM, TODO y Notificaciones de asignación]

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Que las oportunidades se repartan solas entre mis vendedores | [Reparto de oportunidades](#reparto-de-oportunidades-crm) |
| Que las tareas se repartan solas, o según reglas inteligentes | [Reparto de tareas](#reparto-de-tareas) |
| Avisar al vendedor por correo o WhatsApp cuando le asignan algo | [Avisos de asignación](#avisos-de-asignación) |
| Poner copia a gerencia en cada aviso | [Correos en copia](#correos-en-copia) |
| Definir el WhatsApp al que llegan mis avisos | [Mi perfil](/08-configuracion/empresa-y-equipo/#mi-perfil) |

## Asignación

### Reparto de oportunidades (CRM)

Bloque **Configuración de Asignación CRM**. Determina cómo se asignan las oportunidades nuevas.

:::caution[Algunos textos de este bloque están en inglés]
En el producto, las tarjetas de reparto (*Round Robin Assignment*, *Auto Assignment*, *Assignment Strategy*) aún no están traducidas. Aquí las nombramos como las verás en pantalla.
:::

1. Activa el interruptor **Auto Assignment** para que las oportunidades nuevas se asignen solas.
2. En **Assignment Strategy** elige cómo:

| Estrategia | Qué hace |
|---|---|
| **Manual Assignment** | Las oportunidades deben asignarse a mano |
| **Round Robin** | Las oportunidades se distribuyen **en rotación y de forma pareja** entre los vendedores |

Cada cambio se guarda al instante y verás un aviso de confirmación; este bloque no tiene botón *Guardar*.

:::tip[Solo reciben los marcados como vendedor]
Con **Round Robin**, únicamente reciben oportunidades los miembros del equipo marcados como **vendedor** (*Salesperson*). Si alguien no recibe oportunidades, revisa su ficha en [Equipo y roles](/08-configuracion/empresa-y-equipo/#equipo-y-roles).
:::

### Reparto de tareas

Bloque **Configuración de Asignación TODO**. Determina cómo se asignan las tareas nuevas (TODOs). Su interruptor es **Enable Auto-Assignment**, y también se guarda al instante.

En **Assignment Strategy** elige una de tres estrategias:

| Estrategia | A quién se le asigna | Úsala cuando… |
|---|---|---|
| **Manual Assignment** | A nadie; los miembros del equipo asignan a mano | Pocas tareas y alguien las reparte |
| **Round Robin (All Users)** | A **todos** los miembros de la organización, en rotación | Quieres un reparto parejo sin reglas |
| **AI-Powered (Intelligent Rules)** | A la persona o equipo que indique una regla según el contenido de la tarea, con Round Robin como respaldo | La tarea debe ir a un equipo según de qué trate |

:::note[Diferencia con el CRM]
En tareas, **Round Robin** reparte entre **todos** los usuarios de la organización; en el CRM solo entre quienes están marcados como vendedor. Si alguien sale de la organización, la rotación se ajusta sola.
:::

#### Reglas inteligentes

Al elegir **AI-Powered (Intelligent Rules)** aparece el administrador de reglas. Funciona así:

- Las reglas se evalúan **en orden de prioridad**; arrástralas para reordenarlas.
- La IA analiza el **título, la descripción y el contexto de la conversación** de cada tarea.
- La **primera regla activa** que coincide asigna la tarea al equipo o usuario indicado.
- Las palabras clave, los niveles de prioridad y las pistas de equipo guían la coincidencia.
- Si ninguna regla coincide, se aplica **Round Robin**.

Para crear una regla paso a paso, consulta [Tareas](/10-tareas/).

### Avisos de asignación

Bloque **Notificaciones de asignación** (aparece con el módulo CRM activo). Avisa al vendedor cuando se le asigna una oportunidad o una conversación, por **correo**, por **WhatsApp**, o por ambos.

| Opción | Qué hace |
|---|---|
| **Correo electrónico** | Envía un correo al vendedor asignado. Viene activado por defecto |
| **También al asignar una conversación** | Además avisa cada vez que se le asigna una conversación de la bandeja (manual o automática). Si esa conversación genera una oportunidad para el mismo vendedor, **no** se envía un segundo correo. Requiere tener **Correo electrónico** activo |
| **Correos en copia** | Direcciones que reciben copia de todos los avisos, por ejemplo gerencia |
| **WhatsApp** | Envía una plantilla de WhatsApp aprobada al vendedor asignado |

#### Correos en copia

Escribe las direcciones separadas por comas, espacios, punto y coma o saltos de línea (por ejemplo `gerente@empresa.com, ventas@empresa.com`). Peaking elimina los duplicados y marca como *"Correo no válido"* los que no tengan formato de correo; **mientras haya uno inválido no podrás guardar**. Esta lista queda deshabilitada si **Correo electrónico** está apagado.

#### Aviso por WhatsApp

1. Activa **WhatsApp**.
2. En **Plantilla**, elige una plantilla aprobada.
3. En **Variables de la plantilla**, indica qué dato va en cada `{{1}}`, `{{2}}`… del cuerpo del mensaje:

| Dato disponible | Qué inserta |
|---|---|
| Nombre del vendedor | La persona a quien se asignó |
| Nombre del cliente | El nombre del cliente |
| Teléfono del lead | El teléfono del lead |
| Empresa / Sucursal | La empresa o sucursal |
| Etapa | La etapa de la oportunidad |
| Nombre de la oportunidad | El nombre de la oportunidad |
| Quién asignó | La persona que hizo la asignación |

4. Haz clic en **Guardar**.

El WhatsApp llega al número que **cada vendedor configura en su perfil**, en el campo *WhatsApp para notificaciones*. Pídele a tu equipo que lo capture en [Mi perfil](/08-configuracion/empresa-y-equipo/#mi-perfil).

:::caution[Cuándo no te deja guardar]
Con **WhatsApp** activado, **Guardar** se habilita solo cuando hay una plantilla elegida, esa plantilla tiene al menos una variable y **todas** las variables tienen un dato asignado. También se bloquea si hay un correo en copia inválido.
:::

:::tip[¿No aparece ninguna plantilla?]
Verás el aviso *"No hay plantillas aprobadas"*. Conecta WhatsApp y sincroniza tus plantillas en [Canales](/08-configuracion/canales-e-integraciones/canales/); luego vuelve aquí.
:::

## Organización interna

**Organización interna** reúne dos ajustes sobre cómo funciona tu operación por dentro: los **departamentos** de tu equipo y la **agrupación de respuestas del agente**.

![Organización interna con Departamentos](/screenshots/v2/08-configuracion/organizacion-interna.png)

![Agrupación de respuestas del agente con la ventana de espera](/screenshots/v2/08-configuracion/agrupacion-de-respuestas.png)

### Departamentos

:::note[Requiere el módulo TODOs]
Los departamentos y las reglas de asignación de tareas solo aparecen cuando el módulo **TODOs** está activo. Actívalo en [Módulos](/08-configuracion/cuenta/).
:::

Los departamentos agrupan a tu equipo por área (Ventas, Soporte, Operaciones…) y se usan como criterio para asignar tareas de forma inteligente.

#### Crear un departamento

1. Ve a **Configuración › Operación › Organización interna**.
2. En **Departamentos**, haz clic en **Nuevo Departamento**.
3. Escribe el nombre y guarda.

Si aún no tienes ninguno, verás: *"Crea tu primer departamento para comenzar a organizar tu equipo"*.

#### Asignar personas a un departamento

Cada miembro del equipo se asigna a su departamento desde [Equipo y roles](/08-configuracion/empresa-y-equipo/#equipo-y-roles), ya sea al invitarlo o en la columna **Departamento** de la tabla.

#### Eliminar un departamento

Haz clic en **Eliminar** y confirma. Un departamento **no se puede eliminar mientras tenga usuarios asignados**: Peaking te avisará cuántos hay. Reasígnalos primero a otro departamento.

:::tip[Crea los departamentos antes de invitar al equipo]
Si los departamentos ya existen, puedes asignar a cada persona desde el momento en que la invitas.
:::

### Agrupación de respuestas del agente

Cuando un cliente escribe varios mensajes seguidos, el agente puede esperar unos segundos para juntarlos y contestar **una sola vez**, en lugar de responder a cada mensaje por separado.

El ajuste **Ventana de espera** controla cuánto espera:

| Opción | Efecto |
|--------|--------|
| **Inmediato (sin espera)** | El agente responde en cuanto llega cada mensaje |
| **3, 5, 8, 10, 15, 20 o 30 segundos** | El agente espera ese tiempo tras el último mensaje antes de contestar. Si nunca lo has cambiado, la espera por defecto es de **6 segundos** |

Este ajuste solo se configura aquí, en **Configuración › Operación**.

:::tip[¿Qué valor elegir?]
Si tus clientes suelen escribir varios mensajes seguidos, una ventana de **8 a 20 segundos** evita que el agente conteste fragmentos de una idea que aún no terminó.
:::

<!-- VERIFICAR: rango permitido de la ventana de espera más allá de las opciones predefinidas. -->

## Extracción de datos

**Extracción de datos** te permite indicarle al agente qué información debe guardar cuando un cliente la menciona en una conversación, sin tener que pedirla manualmente en el prompt.

Cada dato capturado se guarda en el perfil del contacto y queda disponible como contexto para futuras conversaciones, aunque el cliente lo haya mencionado semanas antes. Consulta lo capturado en la ficha del contacto — ver [Contactos](/13-contactos/).

:::note[Quién puede configurarla]
Esta sección solo la ven y editan los usuarios con rol **Master**.
:::

[CAPTURA PENDIENTE: lista de campos de extracción con interruptor Activo/Inactivo]

:::caution[El agente no pregunta por su cuenta]
El agente **solo extrae lo que el cliente menciona espontáneamente**. Nunca pregunta un dato por iniciativa propia. Si necesitas que el agente solicite un dato específico, agrégalo como instrucción en su [prompt](/05-agente-ia/estudio-de-prompts/).
:::

### Agregar un campo

1. Ve a **Configuración › Operación › Extracción de datos**.
2. Haz clic en **Agregar campo**.
3. Completa el formulario:

| Campo | Qué escribir |
|-------|--------------|
| **Clave (uso interno)** | Un identificador en minúsculas, números y guion bajo. Debe empezar con letra y tener máximo 50 caracteres. Ej.: `fecha_nacimiento` |
| **Etiqueta visible** | El nombre que verá tu equipo. Ej.: *Fecha de nacimiento* |
| **Tipo de dato** | Texto, Número, Fecha, Verdadero/Falso o JSON estructurado |
| **Descripción para el agente IA** | Qué es el dato y cuándo extraerlo. **Mínimo 20 caracteres** |
| **Ejemplos** *(opcional)* | Frases que el cliente podría decir, una por línea |

4. Haz clic en **Guardar**.

[CAPTURA PENDIENTE: formulario "Nuevo campo"]

#### Escribe una buena descripción

La descripción es lo que el agente lee para decidir si debe extraer el dato. Sé específico:

```
Fecha de nacimiento del cliente, en formato YYYY-MM-DD si la menciona.
Útil para personalizar saludos en futuras conversaciones.
```

Y agrega ejemplos para ayudarle a reconocer variaciones:

```
mi cumple es el 5 de marzo → 1990-03-05
nací en 1985 → 1985
```

### Activar, desactivar o editar un campo

- Usa el interruptor de cada campo para **activarlo o desactivarlo** sin perderlo.
- Haz clic en **Editar campo** para cambiar su descripción o sus ejemplos.

La **clave** del campo (por ejemplo, `birthday`) solo se define al crearlo y **no se puede cambiar después**; lo demás sí se puede editar.

Si no tienes ningún campo configurado, la extracción automática está inactiva: verás *"Agrega un campo para empezar"*.


## Campos del CRM

**Campos del CRM** adapta las oportunidades a tu forma de vender: puedes cambiar cómo se llaman los campos estándar y agregar los tuyos.

:::note[Antes de empezar]
Esta sección aparece solo cuando el módulo **CRM** está activo y solo la editan los usuarios con rol **Master**. Para trabajar con las oportunidades día a día, consulta [CRM](/06-crm-audiencias/).
:::

![Campos del CRM: Etiquetas de campos](/screenshots/v2/08-configuracion/crm-etiquetas-de-campos.png)

![Campos personalizados, sin campos todavía](/screenshots/v2/08-configuracion/crm-campos-personalizados.png)

### Etiquetas de campos

Cambia cómo aparecen los campos estándar de las oportunidades en tus formularios. Por ejemplo, puedes renombrar **Empresa** como **Sucursal** si así lo llama tu equipo.

1. Escribe el nuevo nombre en el campo que quieres renombrar.
2. Deja en blanco los que quieras conservar con su nombre por defecto.
3. Guarda los cambios.

Los cambios aplican a los formularios de **crear** y de **detalle** de las oportunidades.

Los campos que puedes renombrar son: **Nombre de la oportunidad**, **Empresa**, **Industria**, **Correo**, **Teléfono**, **Etapa**, **Prioridad**, **Asignado a**, **Monto esperado**, **Probabilidad de cierre**, **Origen**, **Campaña** y **Notas**. El nombre que elijas para **Monto esperado** se refleja en todo el sistema.

#### Convertir un campo en lista desplegable

Si agregas **opciones** a un campo, este se mostrará como una **lista desplegable** en los formularios, en lugar de texto libre. Es útil para estandarizar respuestas, como una lista fija de sucursales o de orígenes. Pueden ser listas desplegables los campos **Empresa**, **Industria**, **Origen** y **Campaña**.


### Campos personalizados

Agrega campos adicionales a tus oportunidades para capturar datos propios de tu proceso de ventas, por ejemplo un *Número de cliente*. Aparecen en los formularios de creación y de detalle, y se guardan en cada oportunidad.

#### Crear un campo personalizado

1. Haz clic en **Agregar campo**.
2. Completa el formulario:

| Campo | Qué escribir |
|-------|--------------|
| **Clave (uso interno)** | Minúsculas, números y guion bajo. Empieza con letra. Máximo 50 caracteres |
| **Etiqueta visible** | El nombre que verá tu equipo. Ej.: *Número de cliente* |
| **Tipo de dato** | Texto, Número, Fecha, Verdadero/Falso, JSON estructurado o **Lista desplegable (opciones)** |
| **Pestaña de la ficha** | En qué pestaña de la ficha de la oportunidad aparece el campo |
| **Opciones** | Solo para lista desplegable. **Agrega al menos una opción** |
| **Descripción** *(opcional)* | Para qué sirve el campo. Ayuda a tu equipo y, más adelante, al agente de IA a entender qué capturar |
| **Campo activo** | Muestra el campo en los formularios de oportunidad |

3. Haz clic en **Guardar**.

![Formulario Nuevo campo con el selector Pestaña de la ficha](/screenshots/v2/08-configuracion/crm-nuevo-campo.png)

#### Elegir la pestaña de la ficha

El campo **Pestaña de la ficha** define dónde ve tu equipo el dato al abrir una oportunidad. Las opciones son **Financiero** (junto al monto y la probabilidad de cierre), **Detalles (Información extra)**, **Dirección** y **Campos personalizados** (la predeterminada).


### Qué cambió de lugar

Dos ajustes que antes se encontraban junto a los campos del CRM ahora viven en otra sección:

| Ajuste | Dónde encontrarlo |
|--------|-------------------|
| Reparto automático de oportunidades (Round Robin) | [Asignación](/08-configuracion/operacion/) |
| Notificaciones de asignación (correo y WhatsApp) | [Asignación](/08-configuracion/operacion/) |

<!-- VERIFICADO en Settings.tsx: AssignmentNotificationsManager y RoundRobinSettings se renderizan bajo el tab "assignment"; las notificaciones solo si crm_enabled. -->

## Preguntas frecuentes

**¿Por qué no veo la sección Asignación?**
La ve solo el usuario Master, y requiere que CRM o Tareas estén activos. Revisa [Módulos](/08-configuracion/cuenta/).

**¿Por qué un vendedor no recibe oportunidades con Round Robin?**
Solo reciben los miembros marcados como vendedor. Revisa su ficha en [Equipo y roles](/08-configuracion/empresa-y-equipo/#equipo-y-roles).

**¿Por qué el botón Guardar de avisos está deshabilitado?**
Revisa el recuadro *"Cuándo no te deja guardar"* en [Aviso por WhatsApp](#aviso-por-whatsapp): falta plantilla, falta asignar alguna variable o hay un correo en copia inválido.
