---
title: Asignación
description: "Decide cómo se reparten las oportunidades del CRM y las tareas entre tu equipo, y a quién se le avisa cuando recibe una."
sidebar:
  order: 1
---

**Asignación** define **quién recibe** cada oportunidad nueva del CRM y cada tarea nueva, y cómo se le avisa. Tienes tres bloques en una sola pantalla: reparto de oportunidades, reparto de tareas y avisos al vendedor.

:::note[Antes de empezar]
Esta sección la ve solo el usuario **Master** y aparece únicamente si el módulo **CRM** o el módulo **Tareas** está activo. Cada bloque aparece solo si su módulo está activo. Actívalos en [Módulos](/08-configuracion/cuenta/modulos/).
:::

[CAPTURA PENDIENTE: pantalla Asignación completa con los tres bloques: CRM, TODO y Notificaciones de asignación]

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Que las oportunidades se repartan solas entre mis vendedores | [Reparto de oportunidades](#reparto-de-oportunidades-crm) |
| Que las tareas se repartan solas, o según reglas inteligentes | [Reparto de tareas](#reparto-de-tareas) |
| Avisar al vendedor por correo o WhatsApp cuando le asignan algo | [Avisos de asignación](#avisos-de-asignación) |
| Poner copia a gerencia en cada aviso | [Correos en copia](#correos-en-copia) |
| Definir el WhatsApp al que llegan mis avisos | [Mi perfil](/08-configuracion/empresa-y-equipo/mi-perfil/) |

## Reparto de oportunidades (CRM)

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
Con **Round Robin**, únicamente reciben oportunidades los miembros del equipo marcados como **vendedor** (*Salesperson*). Si alguien no recibe oportunidades, revisa su ficha en [Equipo y roles](/08-configuracion/empresa-y-equipo/equipo-y-roles/).
:::

## Reparto de tareas

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

### Reglas inteligentes

Al elegir **AI-Powered (Intelligent Rules)** aparece el administrador de reglas. Funciona así:

- Las reglas se evalúan **en orden de prioridad**; arrástralas para reordenarlas.
- La IA analiza el **título, la descripción y el contexto de la conversación** de cada tarea.
- La **primera regla activa** que coincide asigna la tarea al equipo o usuario indicado.
- Las palabras clave, los niveles de prioridad y las pistas de equipo guían la coincidencia.
- Si ninguna regla coincide, se aplica **Round Robin**.

Para crear una regla paso a paso, consulta [Tareas](/10-tareas/).

## Avisos de asignación

Bloque **Notificaciones de asignación** (aparece con el módulo CRM activo). Avisa al vendedor cuando se le asigna una oportunidad o una conversación, por **correo**, por **WhatsApp**, o por ambos.

| Opción | Qué hace |
|---|---|
| **Correo electrónico** | Envía un correo al vendedor asignado. Viene activado por defecto |
| **También al asignar una conversación** | Además avisa cada vez que se le asigna una conversación de la bandeja (manual o automática). Si esa conversación genera una oportunidad para el mismo vendedor, **no** se envía un segundo correo. Requiere tener **Correo electrónico** activo |
| **Correos en copia** | Direcciones que reciben copia de todos los avisos, por ejemplo gerencia |
| **WhatsApp** | Envía una plantilla de WhatsApp aprobada al vendedor asignado |

### Correos en copia

Escribe las direcciones separadas por comas, espacios, punto y coma o saltos de línea (por ejemplo `gerente@empresa.com, ventas@empresa.com`). Peaking elimina los duplicados y marca como *"Correo no válido"* los que no tengan formato de correo; **mientras haya uno inválido no podrás guardar**. Esta lista queda deshabilitada si **Correo electrónico** está apagado.

### Aviso por WhatsApp

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

El WhatsApp llega al número que **cada vendedor configura en su perfil**, en el campo *WhatsApp para notificaciones*. Pídele a tu equipo que lo capture en [Mi perfil](/08-configuracion/empresa-y-equipo/mi-perfil/).

:::caution[Cuándo no te deja guardar]
Con **WhatsApp** activado, **Guardar** se habilita solo cuando hay una plantilla elegida, esa plantilla tiene al menos una variable y **todas** las variables tienen un dato asignado. También se bloquea si hay un correo en copia inválido.
:::

:::tip[¿No aparece ninguna plantilla?]
Verás el aviso *"No hay plantillas aprobadas"*. Conecta WhatsApp y sincroniza tus plantillas en [Canales](/08-configuracion/canales-e-integraciones/canales/); luego vuelve aquí.
:::

## Preguntas frecuentes

**¿Por qué no veo la sección Asignación?**
La ve solo el usuario Master, y requiere que CRM o Tareas estén activos. Revisa [Módulos](/08-configuracion/cuenta/modulos/).

**¿Por qué un vendedor no recibe oportunidades con Round Robin?**
Solo reciben los miembros marcados como vendedor. Revisa su ficha en [Equipo y roles](/08-configuracion/empresa-y-equipo/equipo-y-roles/).

**¿Por qué el botón Guardar de avisos está deshabilitado?**
Revisa el recuadro *"Cuándo no te deja guardar"* en [Aviso por WhatsApp](#aviso-por-whatsapp): falta plantilla, falta asignar alguna variable o hay un correo en copia inválido.
