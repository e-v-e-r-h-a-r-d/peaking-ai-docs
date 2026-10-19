---
title: Conectar Odoo
description: "Conecta tu Odoo en 5 minutos con tu base de datos, un usuario con permisos y una clave de API, y sincroniza contactos y productos."
sidebar:
  order: 3
---

Conecta tu **Odoo** a Peaking y deja que el agente trabaje con tus datos reales: **trae tus productos y tus contactos de Odoo** y crea las cotizaciones directo ahí. Solo lo haces una vez y toma unos 5 minutos. Lo haces en **Configuración › Herramientas** (o desde la tarjeta **Odoo** de [Integraciones](/08-configuracion/canales-e-integraciones/integraciones/)).

[CAPTURA PENDIENTE: diálogo «Conectar Odoo» con los 4 datos y la ayuda debajo de cada campo]

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Saber qué necesito antes de empezar | [Antes de empezar](#antes-de-empezar) |
| Obtener mi clave de API de Odoo | [Crear la clave de API](#paso-1-crea-la-clave-de-api-en-odoo) |
| Conectar Odoo en Peaking | [Conectar](#paso-2-conecta-odoo-en-peaking) |
| Traer mis productos y contactos | [Sincronizar](#paso-3-sincroniza-productos-y-contactos) |
| Que el agente cree cotizaciones en Odoo | [Crear cotizaciones](#crear-cotizaciones) |
| Elegir qué datos pide el agente al crear un contacto | [Campos del contacto](#campos-del-contacto-en-odoo) |
| Arreglar un error al conectar | [Problemas comunes](#problemas-comunes) |

## Antes de empezar

Ten a la mano estas cuatro cosas:

| Qué necesitas | Cómo saber cuál es |
|---|---|
| **La dirección (URL) de tu Odoo** | La que usas para entrar, solo el dominio y sin nada al final. Ej.: `https://miempresa.odoo.com` |
| **El nombre de tu base de datos** | En Odoo Online suele ser el subdominio (`miempresa`). Si no lo sabes, pregúntale a quien administra tu Odoo |
| **Un usuario de Odoo con permisos** | El correo con el que entras a Odoo. Debe tener acceso a **Ventas**, **Inventario** y **Contactos** |
| **Una clave de API de ese usuario** | Se crea dentro de Odoo (paso 1) |

:::tip[Usa un usuario de servicio]
Lo mejor es un usuario de Odoo creado para Peaking, con solo esos permisos. Así, si alguien deja tu empresa, la conexión no se rompe.
:::

:::note[Si el botón «Conectar Odoo» está deshabilitado]
Verás *«Odoo Sync está apagado. Un administrador puede encenderlo en Configuración › Módulos…»*. Enciéndelo en [Módulos](/08-configuracion/cuenta/) y vuelve.
:::

## Paso 1: crea la clave de API en Odoo

1. Entra a Odoo con el usuario que usarás para Peaking.
2. Haz clic en tu foto (arriba a la derecha) › **Mis preferencias**.
3. Abre la pestaña **Seguridad de la cuenta** y haz clic en **Nueva clave de API**.
4. Ponle un nombre (por ejemplo *Peaking*) y confirma con tu contraseña.
5. **Copia la clave**: Odoo la muestra una sola vez.

## Paso 2: conecta Odoo en Peaking

1. En **Configuración › Herramientas**, haz clic en **Conectar Odoo**.
2. Llena el formulario. Debajo de cada campo se indica dónde encontrarlo:

| Campo | Qué poner |
|---|---|
| **Nombre de Integración** | El nombre con que la verás en la lista (por ejemplo *Odoo ventas*) |
| **Tipo de Integración** | Ya viene en **Odoo**; no lo cambies |
| **URL de tu Odoo** | Solo el dominio, sin rutas al final. Ej.: `https://miempresa.odoo.com` |
| **Base de datos** | El nombre de tu base de datos (en Odoo Online, el subdominio) |
| **Usuario** | El correo con el que entras a Odoo |
| **Clave de API** | La que creaste en el paso 1 |
| **Descripción (Opcional)** | Una nota para tu equipo |

3. Haz clic en **Crear Integración**. La tarjeta de Odoo pasa a **Conectado** y la conexión aparece en **Herramientas conectadas**.

Los estados de la tarjeta son **Conectado**, **Sin conectar** y **Revisa la conexión** (la conexión existe pero no está activa).

## Paso 3: sincroniza productos y contactos

Con Odoo conectado, **trae tus datos a Peaking**. En **Herramientas conectadas**, haz clic en el lápiz de la fila de Odoo. Además de los 4 datos y el **ID de Compañía (Opcional)** (filtra la sincronización a una compañía de Odoo; vacío sincroniza todo), verás estos controles.

| Qué sincronizas | Para qué sirve |
|---|---|
| **Productos** | El agente responde y cotiza con tu catálogo y precios reales de Odoo |
| **Contactos** | Tus clientes de Odoo y los de Peaking quedan ligados, sin capturar dos veces |

### Sincronizar productos

Enciende **Sincronizar Productos** (*sincroniza productos automáticamente desde Odoo*). Debajo está el bloque **Sincronización de Productos**:

- **Sync completo (re-sincroniza todo el catálogo)**: apagado, trae solo lo nuevo o cambiado; encendido, vuelve a procesar todo el catálogo.
- **Sincronizar**: inicia el proceso. Si el catálogo es grande, corre en segundo plano con una barra de avance (`N / total productos`).
- Al terminar verás *«Sincronización completada»* con cuántos productos se **crearon**, **actualizaron**, quedaron **sin cambios** y, si aplica, **se desactivaron**. El bloque conserva el **Último sync** y esos contadores.

### Sincronizar contactos

Igual que productos: enciende **Sincronizar Contactos** y usa el bloque **Sincronización de Contactos** (mismo **Sync completo**, barra de avance y contadores).

## Crear cotizaciones

Enciende **Crear Cotizaciones** (*permite al agente de IA crear cotizaciones en Odoo*). Al encenderlo aparece **Flujo de Cotización**:

| Flujo | Qué hace el agente |
|---|---|
| **Estándar** | Muestra un resumen de productos antes de crear la cotización |
| **Express** | No muestra detalles de productos ni precios: pide los datos del cliente y crea la cotización directamente |

### Funciones extendidas Odoo

Activa etiquetas en oportunidades, datos estructurados del contacto (estado, CP, RFC…), vínculo automático cotización↔oportunidad y deduplicación de leads y cotizaciones en una ventana corta.

## Campos del contacto en Odoo

Aparece cuando **Sincronizar Contactos** y **Crear Cotizaciones** están encendidos. Define **qué información debe pedir la IA al crear un contacto nuevo en Odoo**. Arriba se listan los campos que Odoo siempre exige (**Siempre requeridos por Odoo**) y no se pueden volver a agregar; `name`, `email` e `is_company` tampoco se aceptan como campos nuevos.

Para cada campo configuras:

| Campo | Qué es |
|---|---|
| **Campo en Odoo** | El nombre técnico (por ejemplo `phone`, `vat`, `x_studio_campo`) |
| **Nombre del campo** | Cómo lo llamas tú (por ejemplo Teléfono, RFC, Sector) |
| **Comportamiento** | **Requerido** (la IA no continúa hasta obtenerlo), **Opcional** (lo intenta pedir, pero sigue sin él) o **Desactivado** (no lo pregunta) |
| **Instrucción para el AI** | Qué debe preguntar o cómo llenarlo (por ejemplo, *«Pregunta al cliente su ciudad de entrega»*) |

Haz clic en **Agregar campo** o usa los atajos *«Campos comunes de Odoo — clic para agregar»*: **Teléfono**, **RFC / Identificación fiscal**, **Dirección**, **Ciudad**, **Código postal**, **País (código ISO: MX, US, CO)**, **Celular**, **Notas internas** y **Categoría / Sector**. Si repites un campo verás *«Este campo ya existe»*.

## Problemas comunes

| Veo… | Qué hacer |
|---|---|
| *«Required fields missing for selected integration type»* (en inglés) | Falta llenar alguno de los 4 datos: URL, Base de datos, Usuario o Clave de API |
| La tarjeta dice **Revisa la conexión** | Edita la herramienta y vuelve a pegar la clave de API: puede haberse revocado o vencido |
| No conecta con mi URL | Usa solo el dominio (`https://miempresa.odoo.com`), sin `/web` ni otras rutas |
| La base de datos no coincide | Revisa que escribiste exactamente el nombre de tu base; en Odoo Online es el subdominio |
| Conecta, pero no trae productos o contactos | El usuario de Odoo no tiene permisos en **Ventas**, **Inventario** o **Contactos** |

:::tip[Después de conectar, díselo al agente]
Para que el agente use Odoo, decláralo en el prompt. Consulta [Instrucciones del agente](/05-agente-ia/instrucciones-del-agente/).
:::

## Preguntas frecuentes

**¿Tengo que capturar mis productos en Peaking?**
No. Si sincronizas Odoo, tus productos llegan solos. Ver [Productos](/07-productos-pagos/).

**¿Peaking modifica mis datos de Odoo?**
Solo crea lo que tú permites: contactos nuevos y cotizaciones (si activas **Crear Cotizaciones**).

**¿Dónde veo las cotizaciones?**
En tu Odoo. Ver también [Copilot](/05-conversaciones/copilot-cotizaciones/).

<!-- VERIFICAR: permisos mínimos reales del usuario de Odoo (el producto indica Ventas, Inventario y Contactos, sin precisar el nivel de acceso) y que los mensajes de «Problemas comunes» coincidan con los errores reales. -->
