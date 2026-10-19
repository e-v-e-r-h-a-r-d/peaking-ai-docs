---
title: Pedidos y Carritos
description: "Consulta tus ventas, pedidos de Stripe y Mercado Pago, carritos activos y abandonados, con filtros y detalle de cada orden."
sidebar:
  order: 1
---

**Pedidos y Carritos** (título de la pantalla: **Comercio** — *Gestiona órdenes y carritos de tus clientes*) reúne lo que tus clientes compran a través del agente. Lo encuentras en el menú lateral como **Pedidos y Carritos**. Para cobrar necesitas una pasarela conectada: ver [Pagos](/08-configuracion/canales-e-integraciones/pagos/).

[CAPTURA PENDIENTE: Pedidos y Carritos con las pestañas, las métricas, la tabla de órdenes y el panel «Carritos abandonados»]

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Ver mis ventas y comisiones | [Métricas](#métricas) |
| Buscar un pedido | [Filtros](#filtros) |
| Ver el detalle de un pedido | [Detalle de una orden](#detalle-de-una-orden) |
| Ver carritos que no se pagaron | [Carritos abandonados](#carritos) |
| Cambiar entre Stripe y Mercado Pago | [Pestañas](#pestañas) |

## Pestañas

Arriba hay un selector con tres pestañas:

| Pestaña | Contenido |
|---|---|
| **Órdenes Stripe** | Pedidos pagados con Stripe, más el panel **Carritos abandonados** |
| **Mercado Pago** | Pedidos de Mercado Pago (puede no aparecer si aún no está disponible para tu organización) |
| **Carritos** | Todos los carritos |

## Órdenes (Stripe y Mercado Pago)

### Métricas

| Métrica | Qué muestra |
|---|---|
| **Ingresos totales** | Lo cobrado, con el porcentaje **del total** |
| **Comisión de plataforma** / **Comisiones marketplace** | Lo que se descuenta por cobro |
| **Pedidos pagados** / **Órdenes completadas** | Cuántos se pagaron |
| **Pedidos pendientes** | Los que **esperan pago** |
| **Vencidos y cancelados** (Stripe) / **Órdenes rechazadas** (Mercado Pago) | Los que no se concretaron: *pago fallido* |

Si aún no hay ventas verás *«Aún no hay pedidos»*.

### Filtros

Por **Estado**, **Canal** y rango **Desde / Hasta**; **Quitar filtros** los borra. Si nada coincide: *«No hay pedidos. Prueba cambiando los filtros»*.

| Estados en Stripe | Estados en Mercado Pago |
|---|---|
| **Pagado**, **Pendiente**, **Vencido**, **Cancelado** | **Aprobado**, **Pendiente**, **Rechazado** |

### La tabla

Cada fila trae **Cliente**, **Canal**, **Estado**, **Monto**, **Comisión** y **Fecha**. Un cliente sin datos aparece como *Desconocido*: ordenó por mensajería y no dio más datos de contacto.

### Detalle de una orden

Al abrir una orden de Mercado Pago ves:

| Bloque | Datos |
|---|---|
| **Detalles de la Orden** | Estado, **ID de Orden**, **Referencia Externa**, **ID de Preferencia** y **Abrir Link de Pago** |
| **Información del Cliente** | Nombre, identificador y canal |
| **Contexto de Conversación** | **Conversación Iniciada** y **Ver Conversación** |
| **Detalles Financieros** | **Monto Total**, **Comisión Marketplace**, **Monto Comerciante** y moneda |
| **Línea de Tiempo** | **Creado**, **Pagado**, **Actualizado** |

## Carritos

La pestaña **Carritos** y el panel **Carritos abandonados** (*Ver todos los carritos*, o *Sin carritos abandonados*) muestran lo que los clientes armaron con el agente.

**Métricas:** **Carritos Activos**, **Completados**, **Abandonados**, **Valor Potencial** y **Total Vendido**.

**Filtros:** **Estado** (**Activos**, **Completados**, **Expirados**, **Abandonados**), **Canal** y fechas **Desde / Hasta**; **Limpiar filtros** borra todo.

**Tabla:** **Cliente**, **Canal**, **Estado**, **Items**, **Subtotal**, **Expira** y **Creado**. Un carrito vencido muestra **Expirado**. Al abrir uno ves **Detalles** (productos con **Cantidad** y **Subtotal**, cuándo se creó y en cuánto expira) y la pestaña **Conversación** para leer el chat de origen (o *«Sin conversación»* si no tiene).

## Preguntas frecuentes

**No veo la pestaña Mercado Pago.**
Aparece solo cuando está disponible para tu organización.

**Un cliente aparece como «Desconocido».**
Compró por mensajería y no dejó datos adicionales; abre **Ver Conversación** para identificarlo.

**¿Qué es un carrito abandonado?**
Un carrito que el cliente armó pero no pagó.
