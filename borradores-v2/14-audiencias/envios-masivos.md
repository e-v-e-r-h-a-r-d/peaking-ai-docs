---
title: Envíos masivos
description: "Envía una plantilla a muchos contactos, programa el envío, revisa cuántos mensajes llegaron y reenvía a quienes fallaron."
sidebar:
  order: 3
---

**Envíos masivos** (*Mensajes a muchos contactos con una plantilla aprobada*) es el historial de tus envíos y el punto de partida para lanzar uno nuevo. Lo encuentras en **Campañas › Envíos masivos**, solo para **Master** y **Administrador**.

[CAPTURA PENDIENTE: pantalla Envíos masivos con la lista de envíos, la barra de entregados y los estados]

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Lanzar un envío | [Nuevo envío](#nuevo-envío) |
| Enviarlo más tarde | [Programar](#programar-un-envío) |
| Ver si ya llegó | [Historial y detalle](#historial-y-detalle) |
| Reenviar a quienes no recibieron | [Reenviar fallidos](#reenviar-a-quienes-fallaron) |
| Entender mi límite diario | [Límite y calidad](#límite-y-calidad-del-número) |
| Cancelar un envío programado | [Envíos programados](#envíos-programados) |

## Nuevo envío

1. Haz clic en **Nuevo envío**.
2. Elige la plantilla aprobada (**Buscar plantilla…**).
3. En el panel de envío, arriba verás el **idioma**, el **estado del número** (calidad y velocidad) y tu **límite de contactos por 24 horas**.
4. Elige a quién enviar en una de las pestañas:

| Pestaña | Para qué sirve |
|---|---|
| **Nuevos Contactos** | Agregas contactos que aún no existen: uno por uno con **Agregar Contacto** o con **Cargar Excel / CSV** |
| **Contactos Existentes** | Eliges contactos que ya están en tu base |
| **Audiencias** | Un grupo filtrado (etiquetas, etapas, tiempo desde el último mensaje, tipo de contacto); usa **Calcular Audiencia** antes de continuar. Ver [Audiencias](/14-audiencias/#audiencias) |
| **Programar** | Fecha, hora y zona horaria |

5. Si la plantilla tiene variables, decide cómo se llena cada una: con el **nombre del contacto** o con un **valor fijo** para todos. Revisa la **vista previa**.
6. Si tienes varios números, elige el **número emisor**.
7. Envía.

### Cargar un Excel o CSV

Las columnas deben ser **teléfono** (A1) y **nombre** (B1), en ese orden. El **país por defecto** se aplica a los teléfonos sin código de país: México (+52), USA/Canadá (+1), Colombia, Argentina, Perú, Chile, España o Brasil. Si hay un teléfono vacío o inválido se marca en rojo y no puedes continuar hasta corregirlo. Si hay filas repetidas, el panel pide *«Elimina las filas duplicadas antes de enviar»*.

### Programar un envío

En **Programar** eliges **Fecha**, hora y **zona horaria** (por defecto Ciudad de México, GMT-6; también Cancún, Monterrey, Tijuana, Los Ángeles, Nueva York o Madrid). El resumen muestra la **plantilla**, la **fecha programada** y el **total de destinatarios**. El envío programado está disponible para **Nuevos Contactos** y **Contactos Existentes**, no para Audiencias.

### Límite y calidad del número

| Indicador | Qué significa |
|---|---|
| **Estado del número** | La calidad que Meta da a tu número (verde, amarillo, rojo) y cuántos mensajes por segundo permite |
| **Límite de contactos/24h** | Cuántos contactos distintos puedes contactar en 24 horas |

Si tu lista supera el límite verás un aviso: *«Solo ~N mensajes pueden entregarse en las próximas 24h; el resto será descartado por WhatsApp. Verifica tu negocio en Meta Business Manager para subir el límite.»*

## Historial y detalle

La lista muestra cada envío con su plantilla, fecha e idioma, la **Audiencia** (cuántos contactos), una barra de **Entregados** (`N/total`) y su **Estado**:

| Estado | Significa |
|---|---|
| **Pendiente** | Aún no empieza |
| **En curso** | Se está enviando |
| **Completado** | Terminó |
| **Fallido** | No pudo completarse |
| **Cancelado** | Se detuvo |

Un número rojo junto al estado indica cuántos **no se entregaron**. Pasa el cursor sobre la barra para ver **entregados**, **leídos**, **aceptados por Meta pero no entregados** y **rechazados al enviar**. **Actualizar** refresca la lista.

:::note[El asterisco (*)]
En envíos anteriores a julio de 2026 solo se registró cuántos mensajes **aceptó Meta**, no cuántos llegaron. WhatsApp puede aceptar un mensaje y descartarlo después sin avisar.
:::

### Detalle de un envío

Al abrir un envío ves cada destinatario con **Nombre**, **Teléfono**, **Status** y **Fecha**, y puedes filtrar por **Todos los status**, **Solo enviados**, **Solo fallidos** u **Otros**. Los estados de cada mensaje:

| Estado | Significa |
|---|---|
| **Aceptado** | Meta lo aceptó |
| **Entregado** | Llegó al teléfono |
| **Leído** | El cliente lo abrió |
| **Fallido** | No se envió; el motivo aparece traducido |
| **Cooldown 24h** | No se envió por el periodo de espera de WhatsApp |
| **Sin confirmar** | Aceptado, sin confirmación de entrega |

Algunos motivos de fallo que verás explicados: el número no tiene WhatsApp, problema de pago en la cuenta de Meta, límite de mensajes de la cuenta, formato de parámetros que no coincide con la plantilla, o descartado por velocidad de envío.

### Reenviar a quienes fallaron

**Reenviar fallidos** (*¿Reenviar a N?*) vuelve a enviar a los que fallaron, **excluyendo** a los de cooldown de 24 horas y a los que volverían a fallar igual (número sin WhatsApp o problema de pago de la cuenta), para no gastar tu cuota.

## Envíos programados

**Envíos Programados** lista los envíos futuros con su **plantilla**, **destinatarios**, **fecha programada** y **estado**: **Programado**, **Ejecutando**, **Completado**, **Fallido** o **Cancelado**. Para detener uno, **Cancelar** y confirma *«¿Cancelar envío programado?»*.

## Preguntas frecuentes

**Envié a 200 contactos y solo llegaron 86.**
Revisa el detalle: separa entregados de *aceptados por Meta pero no entregados*. Suele deberse a la calidad del número, al límite diario o a números sin WhatsApp.

**No me deja continuar con el Excel.**
Revisa que A1 sea *teléfono* y B1 *nombre*, que no haya filas vacías ni duplicadas y que cada teléfono tenga el formato correcto.

**¿Puedo editar un envío ya lanzado?**
No. Si está programado, puedes cancelarlo desde Envíos programados.
