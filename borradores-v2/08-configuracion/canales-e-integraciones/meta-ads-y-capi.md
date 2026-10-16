---
title: Meta Ads y Meta CAPI
description: "Conecta tu cuenta publicitaria para saber qué anuncio generó cada conversación y envía tus ventas a Meta para optimizar tus campañas."
sidebar:
  order: 4
---

Peaking se conecta con Meta en **dos direcciones**:

| Integración | Dirección | Para qué sirve |
|---|---|---|
| **Meta Ads** | Meta → Peaking | Lee tus campañas y anuncios para **atribuir cada conversación al anuncio que la generó** |
| **Meta CAPI** | Peaking → Meta | **Envía conversiones** (por ejemplo, una venta) de vuelta a Meta para optimizar tus anuncios |

Ambas están en **Configuración › Integraciones**, categoría **Marketing**.

[CAPTURA PENDIENTE: tarjetas Meta Ads y Meta CAPI en Integraciones, y el detalle de cada una ya conectada]

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Saber de qué anuncio vino una conversación | [Meta Ads](#meta-ads) |
| Conectar mi cuenta publicitaria | [Conectar Meta Ads](#conectar-meta-ads) |
| Forzar una actualización de campañas | [Sincronizar ahora](#sincronizar) |
| Mandar mis ventas a Meta | [Meta CAPI](#meta-capi) |
| Probar que Meta recibe mis eventos | [Evento de prueba](#probar-con-un-evento-de-prueba) |
| Elegir qué etiquetas disparan una conversión | [Etiquetas](/05-conversaciones/etiquetas-y-escalamiento/#enviar-conversión-a-meta) |

## Meta Ads

*Lee tus campañas y anuncios de Meta para atribuir cada conversación al anuncio que la generó.*

### Conectar Meta Ads

1. Abre la tarjeta **Meta Ads** y haz clic en **Conectar con Facebook**.
2. Inicia sesión y autoriza la cuenta publicitaria del negocio.
3. Si tu cuenta no aparece sola (por ejemplo, una cuenta *sandbox*), escribe su **ID de cuenta publicitaria (opcional)** antes de conectar y se agrega con el mismo permiso.

### Qué hace una vez conectada

Peaking **sincroniza campañas, anuncios e insights cada 10 minutos** y, en cada conversación que llegó por un anuncio, muestra la **campaña real** (la insignia *Llegó por un anuncio*). Ver [Mensajes](/05-conversaciones/#estado-de-atención).

En **Cuentas publicitarias** ves cada cuenta con su número de campañas y anuncios, la **Última sincronización** y un interruptor **Sincronizar** para incluirla o no.

### Sincronizar

**Sincronizar ahora** fuerza una actualización: verás *«Sincronización completa»* con las cuentas y llamadas a Meta, o *«La sincronización tuvo errores»*.

### Reconectar y desconectar

- **Reconectar**: renueva la autorización de Facebook.
- **Desconectar**: deja de sincronizar campañas y anuncios. Las conversaciones **conservan el anuncio de origen**; solo dejan de mostrar el nombre de la campaña.

## Meta CAPI

*Envía conversiones de vuelta a Meta cuando se dispara un auto-tag, para optimizar tus anuncios.* Es decir, cuando la IA aplica una etiqueta a una conversación (por ejemplo, «Compró»), Peaking avisa a Meta con un evento de conversión.

### Conectar con Facebook (recomendado)

1. Abre la tarjeta **Meta CAPI** y haz clic en **Conectar con Facebook**.
2. Peaking **vincula automáticamente** el dataset de Conversions API a cada canal ya conectado (página de Facebook, Instagram y WhatsApp). No hay que pegar nada.
3. En **Datasets vinculados** verás qué canales quedaron vinculados o **Sin vincular**. Si alguno falla por permisos, reconéctalo desde [Canales](/08-configuracion/canales-e-integraciones/canales/) para otorgar el permiso de eventos y usa **Volver a vincular**.

### Configurar a mano

Si prefieres hacerlo manualmente, usa **Configurar a mano** (o **Conectar dataset**). Pide al administrador del Business de Meta estos datos, que salen de **Events Manager › Orígenes de datos › tu dataset › Configuración › Conversions API**:

| Campo | Qué es |
|---|---|
| **Dataset ID** | Aparece arriba de tu dataset (antes *Pixel ID*) |
| **Token de Acceso** | Se obtiene con **Generar token de acceso** |
| **Código de Evento de Prueba** | Opcional; ver abajo |

Con datasets vinculados, Dataset ID y token son opcionales: solo se usan como respaldo.

### Probar con un evento de prueba

1. En Events Manager, copia el **Código de Evento de Prueba** de la pestaña **Eventos de prueba**.
2. Pégalo en Peaking y usa **Enviar evento de prueba**.
3. Revisa la pestaña *Eventos de prueba* en Events Manager para confirmar que llegó.

:::caution[Quita el código de prueba al terminar]
Mientras el código de prueba esté puesto, **todos** los eventos van en modo prueba. Bórralo para salir a producción.
:::

### Elegir qué etiquetas envían conversión

Conectar CAPI no basta: debes decidir **qué etiquetas** disparan el evento. Se hace en **Mensajes › Gestionar Etiquetas de Conversación**, con **Enviar conversión a Meta**, el nombre del evento y un valor opcional. Ver [Etiquetas](/05-conversaciones/etiquetas-y-escalamiento/#enviar-conversión-a-meta).

### Eventos recientes, editar y desconectar

La tarjeta lista los **Eventos recientes** enviados. **Editar** cambia los datos; **Desconectar** deja de enviar eventos, pero **tu configuración de etiquetas se conserva** y puedes reconectar después.

## Preguntas frecuentes

**¿Meta Ads y Meta CAPI son lo mismo?**
No. Meta Ads *trae* datos de tus anuncios a Peaking; Meta CAPI *envía* tus conversiones a Meta.

**¿Cada cuánto se actualizan las campañas?**
Cada 10 minutos, o al instante con **Sincronizar ahora**.

**Conecté CAPI pero Meta no recibe eventos.**
Revisa que al menos una etiqueta tenga activado **Enviar conversión a Meta** y que el canal aparezca en **Datasets vinculados**.
