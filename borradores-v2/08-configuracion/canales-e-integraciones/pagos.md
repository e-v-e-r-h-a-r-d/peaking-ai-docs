---
title: Pagos (Stripe y Mercado Pago)
description: "Conecta Stripe o Mercado Pago para que tu agente cobre con link de pago o tarjeta. Solo puedes tener una pasarela activa a la vez."
sidebar:
  order: 7
---

Para que tu agente pueda **cobrar** conecta una pasarela de pago: **Stripe** (cobros con tarjeta y órdenes) o **Mercado Pago** (links de pago y pedidos). Están en **Configuración › Integraciones**, categoría **Pagos**.

:::caution[Solo una pasarela a la vez]
No puedes tener Stripe y Mercado Pago activos al mismo tiempo. Si intentas conectar una con la otra ya conectada verás *«Solo puedes tener una pasarela de pago activa. Desconecta … primero»*.
:::

[CAPTURA PENDIENTE: tarjetas Stripe y Mercado Pago conectadas, y el aviso «Solo puedes tener una pasarela de pago activa»]

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Conectar mi cuenta de Stripe | [Stripe](#stripe) |
| Cobrar con Mercado Pago | [Mercado Pago](#mercado-pago) |
| Cambiar de una pasarela a otra | [Cambiar de pasarela](#cambiar-de-pasarela) |
| Ver mis ventas y carritos | [Pedidos y Carritos](/12-pedidos-carritos/) |
| Que el agente sepa cuándo cobrar | [Instrucciones del agente](/05-agente-ia/instrucciones-del-agente/#herramientas-del-prompt) |

## Stripe

*Cobros con tarjeta y órdenes.* Elige el **Tipo de Cuenta**:

| Tipo | Cuándo usarlo |
|---|---|
| **OAuth (Recomendado)** | Ya tienes una cuenta de Stripe: se conecta de forma segura con **Conectar con OAuth** |
| **Standard Account** | No tienes cuenta: **Crear Cuenta Standard** pide **Email**, **Nombre del Negocio** y **País** (Estados Unidos, México, España, Argentina, Colombia o Chile) |

### Cuenta conectada

La tarjeta muestra **Account ID**, **Country** y **Business Type**, y estos botones:

- **Complete Onboarding**: aparece si el alta en Stripe quedó a medias; abre tu panel de Stripe para terminarla. Mientras tanto, en Integraciones la tarjeta aparece como **Revisar permisos**.
- **Sincronizar Estado**: vuelve a leer el estado de tu cuenta.
- **Disconnect Account**: pide confirmar; detiene el procesamiento de pagos y puedes reconectar después.

:::note[Textos en inglés]
Parte de la tarjeta de Stripe aún está en inglés (*Account ID*, *Complete Onboarding*, *Disconnect Account*). Los nombramos como aparecen.
:::

## Mercado Pago

*Links de pago y pedidos.* Haz clic en **Conectar con Mercado Pago** y autoriza tu cuenta existente.

Con la cuenta conectada verás **Conectado**, el modo (**Producción** o **Sandbox**), **User ID**, **Email** y **Token válido por** N días. Si el token está por vencer aparece **Token expirando**; usa **Sincronizar** o reconecta tu cuenta. **Desconectar Cuenta** detiene los pagos y puedes reconectar después.

## Cambiar de pasarela

1. **Desconecta** la que tienes.
2. Conecta la nueva.

Tus pedidos anteriores quedan en su pestaña de [Pedidos y Carritos](/12-pedidos-carritos/).

## Preguntas frecuentes

**No puedo conectar Mercado Pago (o Stripe).**
Ya tienes la otra conectada. Desconéctala primero.

**Stripe aparece como «Revisar permisos».**
El alta no se terminó. Entra y usa **Complete Onboarding**.

**¿Dónde veo lo que me pagan?**
En [Pedidos y Carritos](/12-pedidos-carritos/).
