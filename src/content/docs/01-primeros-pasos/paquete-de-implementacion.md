---
title: Paquete de implementación
description: "La forma ordenada de dejar tu cuenta lista: ocho plantillas que reúnen todo lo que necesita tu agente, validadas antes de cargarse."
sidebar:
  order: 3
---

El **paquete de implementación** es la manera más ordenada de configurar una cuenta completa. En lugar de ir pantalla por pantalla, se reúne **toda la información de tu negocio en ocho plantillas**; Peaking las **valida** y avisa qué falta o qué está mal antes de cargar nada. Es lo que usa el equipo de implementación de Peaking (y los partners) para dejar tu agente listo.

Si prefieres configurar por tu cuenta, usa la [Configuración inicial](/01-primeros-pasos/configuracion-inicial/): cubre lo mismo en siete pasos.

:::note[Dónde está]
Se abre en **Plataforma › Implementación** y la ven el equipo de Peaking y los **partners**. Si eres cliente y quieres un proyecto de implementación, [escríbenos](/17-soporte/bug-vs-implementacion/#implementaciones).
:::

[CAPTURA PENDIENTE: pantalla Paquete de implementación con las plantillas, su estado y las cinco fases]

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Entender qué es cada plantilla | [Las ocho plantillas](#las-ocho-plantillas) |
| Ver las etapas de un proyecto | [Cómo avanza](#cómo-avanza) |
| Saber qué me van a pedir | [Qué reunir antes](#qué-reunir-antes) |
| Entender un aviso de la validación | [Qué valida Peaking](#qué-valida-peaking) |
| Saber qué se conecta a mano | [Conexiones manuales](#conexiones-manuales) |

## Las ocho plantillas

Cada plantilla alimenta una parte distinta de tu cuenta:

| Plantilla | Qué contiene | Se convierte en… |
|---|---|---|
| **Ficha del cliente** | Empresa, objetivos, sucursales y horarios, equipo, a quién se escala, canales e integraciones | [Empresa y equipo](/08-configuracion/empresa-y-equipo/) y la elección de módulos |
| **Guion del agente** | Diez secciones: identidad, contexto, público, objetivo, estilo, flujo, objeciones, escalamiento, límites y ejemplos | Tu prompt en el [Estudio de Prompts](/05-agente-ia/estudio-de-prompts/) |
| **Reglas de negocio** | Las reglas que el agente nunca debe romper, por sección | [Instrucciones del agente](/05-agente-ia/instrucciones-del-agente/) |
| **Preguntas frecuentes** | Pregunta, respuesta, categoría, si escala y otras formas de preguntarlo | [Base de Conocimientos](/04-base-conocimientos/) |
| **Productos y servicios** | Una fila por producto, con SKU y precio | [Productos](/07-productos-pagos/) (o se traen desde [Odoo](/08-configuracion/canales-e-integraciones/odoo/)) |
| **Base de conocimiento** | Documentos de políticas, promociones y procedimientos | [Base de Conocimientos](/04-base-conocimientos/) |
| **Fichas técnicas** | PDF por producto, con su índice y **cuándo enviarlo** | [Adjuntos y fichas técnicas](/04-base-conocimientos/#adjuntos-y-fichas-técnicas) |
| **Imágenes de producto** | Una imagen por SKU | [Productos](/07-productos-pagos/) |

Las plantillas de catálogo, fichas técnicas e imágenes son **opcionales** si tus productos vienen de otra fuente (por ejemplo, Odoo).

## Cómo avanza

El proyecto recorre cinco fases:

| Fase | Qué pasa |
|---|---|
| **Recolectar** | Se descargan las plantillas (**Descargar plantillas (.zip)**) y se llenan con los datos del negocio |
| **Validar** | Se sube el paquete (**Subir paquete completo**) y Peaking revisa cada plantilla |
| **Cargar** | Con **Cargar en Peaking** los datos llegan a la cuenta. Se habilita cuando **no queda ningún bloqueo** y cada plantilla tiene validación humana |
| **Probar** | Se prueba el agente con conversaciones reales de ejemplo |
| **Publicar** | El agente se activa en tus canales |

Al subir los archivos, Peaking reconoce cada uno **por su nombre** y lo acomoda en su plantilla. Cada plantilla muestra su estado: **Validada**, **con advertencias**, **con bloqueos**, **Sin cargar** u **Opcional**. Una advertencia no impide cargar; un **bloqueo** sí.

## Qué reunir antes

Tener esto listo acelera todo:

- **De tu empresa:** nombre comercial, razón social, giro, país, moneda, idioma de atención, sitio web y zona horaria.
- **De tu equipo:** nombre, correo, rol y sucursal de cada persona, **con al menos un administrador** con correo válido; y a quién se escala cada situación.
- **De tu operación:** sucursales con dirección, horario y teléfono; qué quieres lograr (**Ventas**, **Citas**, **Soporte** o **Captación de leads**).
- **Del agente:** cómo habla tu marca, tu público, tus objeciones frecuentes, tus límites y **ejemplos de conversaciones**: al menos 2 ideales y 1 que no quieras que se repita.
- **Del conocimiento:** al menos **15 preguntas frecuentes** con su respuesta, tus políticas y promociones vigentes.
- **De tu catálogo:** productos con SKU, nombre y precio, y sus fichas técnicas o imágenes si las tienes.

## Qué valida Peaking

La validación te dice, antes de cargar, qué corregir. Algunos de los avisos más comunes:

| Aviso | Qué hacer |
|---|---|
| **Falta un usuario con rol admin y correo válido** | Agrega al menos un administrador con su correo |
| **No hay ningún objetivo marcado** | Marca al menos uno en la ficha del cliente |
| **El objetivo Citas necesita Google Calendar marcado en integraciones** | Marca Google Calendar en la lista de integraciones |
| **Quedó texto del ejemplo de la plantilla** | Reemplaza los textos de muestra por los de tu negocio |
| **Hay textos marcados como PENDIENTE** | Completa esa respuesta o sección |
| **Hay N preguntas; se recomiendan 15 o más** | Agrega más preguntas frecuentes |
| **Hay N ejemplos ideales; se necesitan al menos 2** | Agrega ejemplos de conversación |
| **SKU repetido** o **fila sin SKU o precio** | Corrige la fila del catálogo |
| **Falta «cuándo enviarlo»** (fichas técnicas) | Indica en qué momento el agente debe mandar la ficha |

Cada plantilla se puede **editar** directamente en pantalla, **reemplazar** su archivo o **ver el original**.

## Conexiones manuales

Hay cuatro cosas que **no** se cargan con el paquete y se hacen a mano en la cuenta:

| Qué | Cómo |
|---|---|
| **Canales** (WhatsApp, Instagram, Messenger) | [Canales](/08-configuracion/canales-e-integraciones/canales/) |
| **Activar herramientas en el prompt** | [Instrucciones del agente](/05-agente-ia/instrucciones-del-agente/) |
| **Integraciones** (Calendar, cobros, ERP) y su herramienta | [Integraciones](/08-configuracion/canales-e-integraciones/integraciones/) |
| **Invitar al equipo** | [Equipo y roles](/08-configuracion/empresa-y-equipo/#equipo-y-roles) |

## Preguntas frecuentes

**¿Tengo que usar el paquete?**
No. Es opcional; la [Configuración inicial](/01-primeros-pasos/configuracion-inicial/) logra lo mismo paso a paso.

**¿Quién llena las plantillas?**
Tú aportas la información del negocio; el equipo de implementación o tu partner te ayuda a completarlas y valida el resultado.

**El botón «Cargar en Peaking» está deshabilitado.**
Aún hay bloqueos o alguna plantilla sin validación humana. Revisa las que dicen **bloqueos** y corrígelas.

<!-- VERIFICAR: alcance actual de «Cargar en Peaking» (el producto indica que la carga automática llega en una fase siguiente) y quién puede ver Plataforma › Implementación (partner o administrador interno). -->
