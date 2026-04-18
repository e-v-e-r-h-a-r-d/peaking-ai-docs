---
title: Pedidos y Carritos
description: Cómo consultar órdenes de compra, gestionar carritos abandonados y dar seguimiento a transacciones desde Peaking.
sidebar:
  order: 1
---

El módulo de **Pedidos y Carritos** centraliza todas las transacciones generadas durante las conversaciones — desde que el cliente agrega el primer producto hasta que el pago se confirma. También muestra los carritos incompletos para que el equipo pueda hacer seguimiento.

---

## Acceder al módulo

En el panel lateral, haz clic en **Pedidos y Carritos**. Verás dos vistas principales:

| Vista | Contenido |
|-------|-----------|
| **Pedidos** | Todas las órdenes de compra: completadas, pendientes de pago, canceladas |
| **Carritos** | Carritos activos e incompletos — clientes que iniciaron el proceso pero no pagaron |

---

## Vista de Pedidos

### Columnas de la tabla

| Columna | Descripción |
|---------|-------------|
| **ID** | Identificador único de la orden |
| **Cliente** | Nombre del cliente y canal de origen |
| **Productos** | Ítems incluidos y cantidades |
| **Total** | Monto final incluyendo impuestos |
| **Pasarela** | Stripe o Mercado Pago |
| **Estado** | Pendiente · Pagado · Fallido · Reembolsado · Cancelado |
| **Fecha** | Cuándo se creó la orden |

### Detalle de una orden

Al hacer clic en una orden verás:

- **Tracking** — estado del pago en tiempo real e historial de cambios.
- **Transacciones** — todos los intentos de cobro con su resultado.
- **Operaciones disponibles** — reembolsar (total o parcial), cancelar, reenviar recibo.
- **Conversación de origen** — link directo al chat donde se generó la orden.

---

## Vista de Carritos

Los carritos representan sesiones de compra que el cliente inició pero no completó.

### Información del carrito

| Campo | Descripción |
|-------|-------------|
| **Cliente** | Nombre o identificador del contacto |
| **Canal** | WhatsApp, Instagram, Messenger o Widget |
| **Productos en el carrito** | Ítems que el cliente había seleccionado |
| **Valor total** | Suma de los productos en el carrito |
| **Última actividad** | Cuándo fue la última interacción |
| **Estado** | Activo · Abandonado · Recuperado |

### Recuperación de carritos abandonados

Cuando un carrito lleva tiempo sin actividad, Peaking puede marcarlo como **abandonado**. Desde aquí puedes:

1. Abrir la conversación de origen.
2. Contactar al cliente con una plantilla de WhatsApp recordándole su carrito.
3. Marcar el carrito como recuperado cuando el cliente completa la compra.

:::tip[Automatiza la recuperación]
Configura un **Workflow** que cree un TODO automáticamente cuando un carrito es marcado como abandonado. Ver [Cómo funcionan los Workflows](/11-workflows/como-funcionan-los-workflows/).
:::

---

## Filtros disponibles

| Filtro | Opciones |
|--------|----------|
| **Estado** | Todos · Pendiente · Pagado · Fallido · Cancelado |
| **Pasarela** | Stripe · Mercado Pago |
| **Rango de fechas** | Hoy · Esta semana · Este mes · Rango personalizado |
| **Canal de origen** | WhatsApp · Instagram · Messenger · Widget |

---

## Preguntas frecuentes

**¿Puedo emitir un reembolso parcial?**

Sí. En el detalle de la orden, selecciona **Reembolsar** e ingresa el monto específico. Se procesa directamente en Stripe o Mercado Pago.

**¿Los pedidos de Stripe y Mercado Pago aparecen en la misma vista?**

Sí. Todas las órdenes aparecen en la misma tabla — la columna "Pasarela" indica cuál procesó cada transacción.

**¿Los carritos abandonados se eliminan después de cierto tiempo?**

Peaking los mantiene en el historial. Puedes configurar el tiempo de espera antes de marcarlos como abandonados desde la configuración del módulo.
