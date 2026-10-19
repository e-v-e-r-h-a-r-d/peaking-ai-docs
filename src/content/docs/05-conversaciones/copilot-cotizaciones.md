---
title: Copilot de cotizaciones
description: "Toma el control de una conversación y arma tú una cotización con ayuda del catálogo, créala en Odoo y envíala al cliente."
sidebar:
  order: 4
---

El **Copilot** es el panel con el que **tú** armas una cotización mientras atiendes una conversación: la IA se pone en pausa, buscas productos, los agregas a un carrito, creas la cotización en Odoo y la envías al cliente. Es una herramienta **manual**: no cotiza sola.

:::note[Cuándo está disponible]
Se ve solo si eres **Master** o **Administrador**, tu organización tiene el Copilot de cotización habilitado y **Odoo está conectado** en [Herramientas](/08-configuracion/canales-e-integraciones/integraciones/#herramientas-y-odoo). También aparece en una oportunidad del CRM como **Cotizar con Copilot**. Si no ves el botón, pídele a Peaking que lo habilite.
:::

[CAPTURA PENDIENTE: panel «Cotización (Copilot)» junto a una conversación, con buscador, carrito, cliente, total y botón «Crear cotización en Odoo»]

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Empezar a cotizar | [Tomar control](#1-tomar-control) |
| Buscar productos | [Buscar productos](#2-buscar-productos) |
| Ver el total y quitar productos | [Carrito](#3-carrito) |
| Elegir el cliente y la lista de precios | [Cliente](#4-cliente-y-lista-de-precios) |
| Crear la cotización en Odoo | [Crear](#5-crear-la-cotización) |
| Mandarla al cliente | [Enviar](#6-enviar-al-cliente) |
| Devolver la conversación a la IA | [Soltar el control](#soltar-el-control) |

## 1. Tomar control

En una conversación de [Mensajes](/05-conversaciones/), haz clic en **Tomar control**. La IA deja de responder y se abre el panel **Cotización (Copilot)**. Verás la etiqueta **Cotizando** mientras estés en ello. Si la conversación ya está en Copilot, el botón no aparece y usas el panel directamente (**Abrir panel de cotización**).

## 2. Buscar productos

En **Buscar productos** hay dos modos:

| Modo | Cómo se usa |
|---|---|
| **Buscar** | Escribe nombre o SKU |
| **IA** | Describe lo que pide el cliente, **una línea por producto** |

Los resultados muestran **Variantes para** cada producto, los **No encontrados** y un acceso a la **Ficha técnica**. Agrégalos con **Agregar**.

## 3. Carrito

El **Carrito** lista los productos elegidos. Si está vacío: *«El carrito está vacío. Busca productos y agrégalos.»* El **Total** se actualiza abajo.

## 4. Cliente y lista de precios

En **Cliente**:

- **Selecciona un contacto** (**Buscar contacto…**), o **Crear contacto** (**Nuevo contacto**: **Nombre** obligatorio, **Teléfono**, **Correo**).
- **Lista de precios (opcional)**.
- Si tu workflow pide datos extra, aparecen en **Datos adicionales** (con **Guardar datos**).

## 5. Crear la cotización

Haz clic en **Crear cotización en Odoo**. Verás *«Cotización creada»* con un enlace **Ver cotización**. Si falla: *«No se pudo crear la cotización. Revisa los productos/Odoo e inténtalo de nuevo.»*

## 6. Enviar al cliente

Tras crearla puedes enviarla:

| Botón | Qué hace |
|---|---|
| **Enviar al cliente** | Manda la cotización por el chat (*«Aquí está tu cotización:»*) |
| **Enviar por correo** | Envía el correo de cotización al cliente (usa el correo de Odoo) |
| **Enviar cotización por Odoo** | En conversaciones de correo: envía con el mailer de Odoo |

En correo, el envío **desde Peaking con PDF y link** se hace en la respuesta del hilo; ver [Correo](/05-conversaciones/correo/#cotizaciones-por-correo).

## Soltar el control

Al terminar, **Soltar control** ofrece dos salidas:

| Opción | Qué pasa |
|---|---|
| **Reactivar IA** | La IA vuelve a responder. Es seguro: solo si el Copilot fue quien la silenció y no hay tareas abiertas |
| **Dejar en pausa** | La IA sigue callada; la reactivas a mano cuando quieras |

Si hay tareas abiertas verás *«La IA sigue en pausa»* y la reactivas tú.

## Preguntas frecuentes

**No veo «Tomar control».**
Requiere rol Master o Administrador, el Copilot habilitado para tu organización y Odoo conectado.

**La cotización no se crea.**
Revisa que los productos existan en Odoo y que la conexión de [Herramientas](/08-configuracion/canales-e-integraciones/integraciones/#herramientas-y-odoo) esté activa.

**¿El Copilot cotiza solo?**
No. Es un panel manual; la cotización automática del agente es otra función.
