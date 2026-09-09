---
title: Meta Ads
description: Conecta tu cuenta publicitaria de Meta para que cada lead que llegue por un anuncio muestre la campaña y el conjunto de anuncios reales.
sidebar:
  order: 8
---

La integración de **Meta Ads** conecta tu cuenta publicitaria (Facebook e Instagram Ads) a Peaking para que sepas, lead por lead, de qué campaña y qué anuncio vino — no solo que "llegó por un anuncio".

:::note[No la confundas con Meta Conversions API]
Son dos integraciones distintas que se complementan. **Meta Ads** trae información *hacia* Peaking (qué campaña generó cada lead). **[Meta Conversions API](/09-integraciones-partner/meta-conversions-api/)** envía información *hacia* Meta (qué conversaciones se convirtieron en venta), para que Meta optimice la entrega de tus anuncios. Puedes usar una, la otra, o ambas.
:::

---

## Cómo funciona

1. Conectas tu cuenta publicitaria de Meta con el mismo inicio de sesión de Facebook que usas para conectar Messenger, Instagram o WhatsApp.
2. Peaking sincroniza tus **campañas, anuncios y resultados cada 10 minutos**.
3. Cuando un lead llega por un anuncio, su ficha muestra el chip **«Llegó por un anuncio»** con la campaña y el conjunto de anuncios reales — no un genérico "vino de Facebook".

---

## Conectar Meta Ads

1. En el panel lateral, ve a **Integraciones**.
2. Localiza la tarjeta **Meta Ads**.
3. Haz clic en **Conectar** e inicia sesión con la cuenta de Facebook que tiene acceso de administrador a tu cuenta publicitaria.
4. Acepta los permisos que Peaking solicita para leer campañas, anuncios y resultados.

:::tip[Usa la cuenta correcta]
Igual que al conectar WhatsApp o Instagram, inicia sesión con la cuenta de Facebook que administra tu Business Manager. Si tienes varias cuentas publicitarias, confirma que seleccionas la correcta desde el selector de perfiles de Meta.
:::

---

## Dónde ves el resultado

El chip **«Llegó por un anuncio»** aparece en la ficha del lead — en el Panel de Mensajes y en el CRM — junto con el nombre real de la campaña y el conjunto de anuncios que lo trajo. Úsalo para entender qué campañas están generando conversaciones reales, no solo clics.

---

## Preguntas frecuentes

**¿Necesito también Meta Conversions API?**

No es obligatorio, pero se complementan bien: Meta Ads te dice de qué campaña vino cada lead; Meta Conversions API le avisa a Meta cuáles de esos leads terminaron en venta, para que optimice la entrega. Ver [Meta Conversions API](/09-integraciones-partner/meta-conversions-api/).

**¿Cada cuánto se actualizan las campañas y resultados?**

Cada 10 minutos. Un anuncio pausado o editado en Meta Ads Manager puede tardar hasta ese tiempo en reflejarse en Peaking.

**¿Qué pasa si desconecto la cuenta publicitaria?**

Los leads que ya tenían la campaña y el anuncio asociados conservan esa información. Los leads nuevos que lleguen después de desconectar ya no mostrarán el chip «Llegó por un anuncio» con el detalle de campaña.

**¿Esta integración sirve para leads de WhatsApp, Instagram y Messenger?**

Sí, aplica a los leads que llegan por cualquiera de los canales de Meta que tengas conectados, siempre que el anuncio de origen pertenezca a la cuenta publicitaria vinculada.
