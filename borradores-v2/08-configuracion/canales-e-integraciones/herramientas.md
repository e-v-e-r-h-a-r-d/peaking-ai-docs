---
title: Herramientas y Odoo
description: "Conecta tu Odoo para que Peaking trabaje con tu catálogo, contactos y cotizaciones, y administra tus demás herramientas conectadas (HubSpot, Zoho, webhooks y APIs)."
sidebar:
  order: 3
---

**Herramientas** es donde conectas tu ERP y otros sistemas para que el agente trabaje con tus datos reales. Arriba está la guía de **Odoo**; abajo, la lista de **Herramientas conectadas** (Odoo incluido) y las demás a la medida: webhooks, APIs, HubSpot y Zoho. Lo abres desde **Configuración › Herramientas** o desde la tarjeta **Odoo** de [Integraciones](/08-configuracion/canales-e-integraciones/integraciones/).

[CAPTURA PENDIENTE: pantalla Herramientas con la guía de Odoo arriba y la lista de herramientas conectadas abajo]

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Conectar Odoo por primera vez | [Conectar Odoo](#conectar-odoo) |
| Cambiar el usuario o la clave de Odoo | [Editar una conexión](#editar-o-quitar-una-herramienta) |
| Traer mis productos de Odoo a Peaking | [Sincronizar productos](#sincronizar-productos) |
| Traer mis clientes de Odoo | [Sincronizar contactos](#sincronizar-contactos) |
| Que el agente cree cotizaciones en Odoo | [Crear cotizaciones](#crear-cotizaciones) |
| Elegir qué datos pide el agente al crear un contacto en Odoo | [Campos del contacto](#campos-del-contacto-en-odoo) |
| Conectar HubSpot, Zoho, un webhook o una API | [Otras herramientas](#otras-herramientas) |
| Eliminar una herramienta | [Editar o quitar](#editar-o-quitar-una-herramienta) |

## Odoo: qué hace por ti

Conectas tu Odoo una sola vez y Peaking trabaja con tus datos:

| Qué | Cómo te ayuda |
|---|---|
| **Catálogo y precios** | Tus productos de Odoo se sincronizan con Peaking: el agente responde y cotiza con lo que realmente vendes |
| **Contactos** | Tus clientes de Odoo y los de Peaking quedan ligados, sin capturar dos veces |
| **Cotizaciones** | Las cotizaciones que armas con el Copiloto se crean directo en tu Odoo |

:::note[Si el botón «Conectar Odoo» está deshabilitado]
Verás el aviso *«Odoo Sync está apagado. Un administrador puede encenderlo en Configuración › Módulos…»*. Enciéndelo en [Módulos](/08-configuracion/cuenta/modulos/) y vuelve.
:::

## Conectar Odoo

Necesitas **4 datos** (unos 5 minutos). La pantalla te los explica uno por uno:

| Dato | Dónde lo encuentras |
|---|---|
| **URL de tu Odoo** | La dirección con la que entras a Odoo, solo el dominio y sin rutas al final. Ej.: `https://miempresa.odoo.com` |
| **Base de datos** | El nombre de tu base de datos. En Odoo Online suele ser el subdominio (`miempresa`). Si no lo sabes, pregúntale a quien administra tu Odoo |
| **Usuario** | El correo con el que inicias sesión en Odoo. Usa un usuario con acceso a **Ventas**, **Inventario** y **Contactos** |
| **Clave de API** | En Odoo: tu foto › **Mis preferencias** › **Seguridad de la cuenta** › **Nueva clave de API**. Cópiala al crearla: Odoo solo la muestra una vez |

Pasos:

1. Haz clic en **Conectar Odoo**.
2. Se abre el formulario ya puesto en Odoo; escribe los 4 datos (debajo de cada campo se indica dónde encontrarlo).
3. Guarda. La tarjeta pasa a **Conectado** y la conexión aparece en la lista de abajo.

Los datos solo se usan para sincronizar con tu Odoo. Los estados de la tarjeta son **Conectado**, **Sin conectar** y **Revisa la conexión** (cuando la conexión existe pero no está activa).

## Configurar Odoo ya conectado

En la lista **Herramientas conectadas**, haz clic en el lápiz de la fila de Odoo. Además de los 4 datos y el **ID de Compañía (Opcional)** (filtra la sincronización a una compañía de Odoo; vacío sincroniza todo), verás estos controles:

### Sincronizar productos

Interruptor **Sincronizar Productos**: *sincroniza productos automáticamente desde Odoo*. Debajo, el bloque **Sincronización de Productos**:

- **Sync completo (re-sincroniza todo el catálogo)**: apagado, trae solo lo nuevo o cambiado; encendido, vuelve a procesar todo el catálogo.
- **Sincronizar**: inicia el proceso. Si el catálogo es grande, corre en segundo plano con una barra de avance (`N / total productos`).
- Al terminar verás el aviso *«Sincronización completada»* con cuántos productos se **crearon**, **actualizaron**, quedaron **sin cambios** y, si aplica, **se desactivaron**. El bloque conserva el **Último sync** y esos contadores.

### Sincronizar contactos

Igual que productos, con el interruptor **Sincronizar Contactos** y el bloque **Sincronización de Contactos** (mismo **Sync completo**, barra de avance y contadores).

### Crear cotizaciones

Interruptor **Crear Cotizaciones**: *permite al agente de IA crear cotizaciones en Odoo*. Al encenderlo aparece **Flujo de Cotización**:

| Flujo | Qué hace el agente |
|---|---|
| **Estándar** | Muestra un resumen de productos antes de crear la cotización |
| **Express** | No muestra detalles de productos ni precios: pide los datos del cliente y crea la cotización directamente |

### Funciones extendidas Odoo

Interruptor **Funciones extendidas Odoo**: activa etiquetas en oportunidades, datos estructurados del contacto (estado, CP, RFC…), vínculo automático cotización↔oportunidad y deduplicación de leads y cotizaciones en una ventana corta.

### Campos del contacto en Odoo

Aparece cuando **Sincronizar Contactos** y **Crear Cotizaciones** están encendidos. Define **qué información debe pedir la IA al crear un contacto nuevo en Odoo**. Arriba se listan los campos que Odoo siempre exige (**Siempre requeridos por Odoo**) y no se pueden volver a agregar; `name`, `email` e `is_company` tampoco se aceptan como campos nuevos.

Para cada campo configuras:

| Campo | Qué es |
|---|---|
| **Campo en Odoo** | El nombre técnico (por ejemplo `phone`, `vat`, `x_studio_campo`) |
| **Nombre del campo** | Cómo lo llamas tú (por ejemplo Teléfono, RFC, Sector) |
| **Comportamiento** | **Requerido** (la IA no continúa hasta obtenerlo), **Opcional** (lo intenta pedir, pero sigue sin él) o **Desactivado** (no lo pregunta) |
| **Instrucción para el AI** | Qué debe preguntar o cómo llenarlo (por ejemplo, *«Pregunta al cliente su ciudad de entrega»*) |

Haz clic en **Agregar campo** o usa los atajos *«Campos comunes de Odoo — clic para agregar»*: **Teléfono**, **RFC / Identificación fiscal**, **Dirección**, **Ciudad**, **Código postal**, **País (código ISO: MX, US, CO)**, **Celular**, **Notas internas** y **Categoría / Sector**. Si repites un campo verás *«Este campo ya existe»*.

## Otras herramientas

Debajo de la guía de Odoo está **Herramientas conectadas**: tu conexión de Odoo y las demás a la medida (webhooks, API, HubSpot o Zoho). Cada fila muestra **Nombre**, **Tipo**, **Descripción**, **Estado** (Conectado / No conectado), **Creado** y **Acciones**.

Para sumar una nueva:

1. Haz clic en **Añadir Integración** (o **Añadir Tu Primera Integración** si aún no hay ninguna).
2. En **Agregar herramienta** elige el **tipo**: **Webhook**, **API**, **Odoo**, **HubSpot**, **Zoho CRM** u **Other**.
3. Completa los campos que pide ese tipo:

| Tipo | Qué te pide |
|---|---|
| **Webhook / API / Other** | Nombre, descripción, **API URL**, **API Key** y, de forma opcional, **API Secret** y **Account Identifier** |
| **HubSpot** | Nombre, descripción y **Token** |
| **Zoho CRM** | **ID de Cliente**, **Secreto de Cliente**, **Centro de Datos** (Global .com, Europa .eu, India .in, Australia .au o Japón .jp) y **Propietario de Lead**. Muestra la **URL de Página Principal** y los **URIs de Redirección Autorizados** para que los copies a tu aplicación OAuth de Zoho |
| **Odoo** | Los 4 datos de arriba |

4. Guarda.

:::note[Zoho se autoriza en un segundo paso]
Una fila de Zoho **No conectada** muestra un botón para completar la autorización OAuth2 con Zoho.
:::

### Editar o quitar una herramienta

En la columna **Acciones**:

- **Lápiz**: edita la herramienta (para Odoo, ahí están el usuario, la clave y todos los controles de arriba).
- **Papelera**: elimina la herramienta. Te pide confirmar: *«¿Estás seguro de que quieres eliminar esta integración?»*. Al terminar verás *«Integración eliminada exitosamente»*.

:::tip[Después de conectar, díselo al agente]
Para que el agente use una herramienta, decláralo en el prompt. Consulta [Declarar herramientas](/05-agente-ia/instrucciones-del-agente/).
:::

## Preguntas frecuentes

**No encuentro dónde configuro Odoo.**
En **Configuración › Herramientas**. La tarjeta **Odoo** de Integraciones te lleva ahí.

**¿Por qué no veo las opciones de sincronizar productos y contactos?**
Aparecen al editar una conexión de Odoo **ya guardada**, y solo con **Odoo Sync** encendido en [Módulos](/08-configuracion/cuenta/modulos/).

**¿Cuándo uso «Sync completo»?**
Cuando quieras volver a traer todo el catálogo o todos los contactos. Sin él, solo se procesa lo nuevo o modificado.

**¿Dónde veo Zoho, GoHighLevel, Google Calendar, Meta o los pagos?**
Cada uno tiene su propia tarjeta en [Integraciones](/08-configuracion/canales-e-integraciones/integraciones/).
