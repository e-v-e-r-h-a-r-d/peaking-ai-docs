---
title: Formularios de leads
description: "Crea un formulario para tu sitio web que genera oportunidades en el CRM: diseño, campos, destino, conversiones de Google Ads y código para instalar."
sidebar:
  order: 9
---

Un **Formulario de captación** se incrusta en tu sitio web y **genera oportunidades en tu CRM** cuando alguien lo llena. Lo encuentras en **Configuración › Formularios de leads** (o la tarjeta **Formularios de leads** de [Integraciones](/08-configuracion/canales-e-integraciones/integraciones/)).

:::note[Cuándo está disponible]
Es una función habilitada por organización. Si no ves **Formularios de leads**, pídele a Peaking que la active.
:::

[CAPTURA PENDIENTE: diálogo «Personaliza tu formulario» con la vista previa y el código para instalar]

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Crear mi primer formulario | [Crear un formulario](#crear-un-formulario) |
| Cambiar colores, logo y textos | [Diseño](#diseño) |
| Elegir qué datos pide | [Campos](#campos) |
| Decidir a qué etapa del CRM entra el lead | [Destino en el CRM](#destino-en-el-crm) |
| Medir conversiones en Google Ads | [Seguimiento de conversiones](#seguimiento-de-conversiones-google-ads) |
| Ponerlo en mi página | [Instalar el código](#instalar-el-código) |
| Pausarlo o borrarlo | [Activo, inactivo y eliminar](#activo-inactivo-y-eliminar) |

## Crear un formulario

1. Abre **Gestionar formularios** (*Formularios de captación*).
2. Haz clic en **Nuevo formulario**. Si aún no tienes: *«Aún no tienes formularios. Crea el primero para empezar a captar leads.»*
3. Completa las secciones de abajo; verás la **Vista previa** al lado.
4. Guarda (*«Formulario guardado»*).

Cada formulario muestra su estado (**Activo** o **Inactivo**) y cuántos **envíos** ha recibido.

## Diseño

| Campo | Qué es |
|---|---|
| **Nombre del formulario (interno)** | Solo para ti |
| **Idioma** | Idioma del formulario |
| **Título** y **Subtítulo** | Los textos de encabezado |
| **Logo (opcional)** | PNG o JPG, máximo 2 MB |
| **Color primario**, **Color de fondo**, **Color del título** | Paleta |
| **Redondeo de bordes** | Qué tan redondeada se ve la tarjeta |
| **Opacidad del fondo** | Menos de 100 % la vuelve translúcida (efecto vidrio) para mostrar la imagen de fondo |
| **Texto del botón** y **Mensaje de éxito** | Lo que ve el visitante |

## Campos

| Opción | Qué hace |
|---|---|
| **Teléfono obligatorio** / **Correo obligatorio** | Hace ese dato requerido |
| **Mostrar selector de sucursal** | Muestra una lista de sucursales con tu **Etiqueta del campo sucursal**. Requiere sucursales activas |
| **Texto de consentimiento de privacidad** y **URL de la política de privacidad** | Aviso legal antes de enviar |
| **Campos personalizados** | Agrega campos extra de tipo **Texto** o **Lista de opciones** (una opción por línea), con **Etiqueta del campo** y **Obligatorio**. Se guardan en las notas de la oportunidad |

## Destino en el CRM

| Campo | Qué es |
|---|---|
| **Etapa de la oportunidad** | La etapa donde entra el lead. Por defecto: *Etapa por defecto de la organización* |
| **Sucursal por defecto** | Sucursal asignada si no se elige una (o *Sin sucursal por defecto*) |

## Seguimiento de conversiones (Google Ads)

Cada envío exitoso puede disparar tu conversión de Google Ads desde tu sitio.

1. En Google Ads: **Objetivos › Conversiones › Nueva acción de conversión › Sitio web › «Envío de formulario de clientes potenciales» › Usar la etiqueta de Google**. Ahí verás el ID y la etiqueta.
2. En Peaking completa:

| Campo | Qué es |
|---|---|
| **ID de conversión** | Con formato `AW-123456789` (también acepta `AW-123456789/Etiqueta`) |
| **Etiqueta de conversión** | La parte después de la diagonal. **Sin etiqueta no se registra la conversión** |
| **Conversiones mejoradas** | Envía a Google el correo y teléfono del lead (cifrados por Google) para mejorar la atribución. Actívalo también en Google Ads |
| **URL de redirección (página de gracias)** | Opcional. Al guardarse el lead y registrarse la conversión, el sitio va a esa página. Vacío = se queda el mensaje de éxito |

Además, el **gclid** y los parámetros **utm_*** con los que llegó el visitante se guardan en las notas y la campaña de la oportunidad, listos para importar conversiones offline.

## Instalar el código

En **Código para tu sitio web**, copia el fragmento y pégalo donde quieras mostrar el formulario. Verás *«Código copiado al portapapeles»*.

## Activo, inactivo y eliminar

El interruptor **Activo / Inactivo** lo enciende o apaga. **Eliminar** pide confirmar: *«¿Eliminar este formulario? Dejará de funcionar en tu sitio.»*

## Preguntas frecuentes

**No aparecen sucursales en el formulario.**
Necesitas sucursales activas: ver [Sucursales](/08-configuracion/empresa-y-equipo/sucursales/).

**¿Dónde veo los leads que llegan?**
Como oportunidades en el [CRM](/06-crm-audiencias/), en la etapa que elegiste.

**Google Ads no registra la conversión.**
Revisa que el ID tenga formato `AW-…` y que hayas escrito la **Etiqueta de conversión**.
