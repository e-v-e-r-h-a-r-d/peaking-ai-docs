---
title: Organización
description: "Define el nombre, la moneda, el contexto del negocio, la industria del catálogo y el horario de operación de tu organización en Peaking."
sidebar:
  order: 1
---

**Configuración › Empresa y equipo › Organización** es donde defines la identidad de tu negocio. Parte de esta información alimenta directamente a tu agente de IA, así que vale la pena dedicarle unos minutos.

:::note[Quién puede verla]
Esta sección solo la ven y editan los usuarios con rol **Master**. Para entender los roles, consulta [Equipo y roles](/08-configuracion/empresa-y-equipo/equipo-y-roles/).
:::

[CAPTURA PENDIENTE: pantalla Organización completa — Nombre, Moneda, descripción del negocio, Industria del catálogo y Horario de operación]

## Datos generales

| Campo | Para qué sirve |
|-------|----------------|
| **Nombre de la Organización** | El nombre oficial de tu negocio tal como aparece en la plataforma. |
| **Moneda de la Plataforma** | La moneda por defecto de tu plataforma. Los productos nuevos que crees usarán esta moneda. |

Cuando termines, haz clic en **Guardar Cambios**.

## Contexto del negocio para la IA

Describe a qué se dedica tu negocio: quiénes son, qué ofrecen y a qué mercado atienden. Esta descripción ayuda a que las descripciones generadas por la IA sean más precisas y le da a tu agente un contexto general.

```
Ejemplo: "Somos una tienda de ropa femenina en CDMX especializada en moda casual
y contemporánea. Atendemos a mujeres entre 25 y 45 años. Contamos con tienda
física en Polanco y envíos a toda la República."
```

Mientras más específica sea, mejores serán las respuestas. Este campo complementa el prompt de tu agente, no lo reemplaza: las instrucciones de comportamiento siguen viviendo en el [Estudio de Prompts](/05-agente-ia/estudio-de-prompts/).

## Industria del catálogo

Selecciona el rubro de tu catálogo de productos. Al elegir una industria, Peaking carga ejemplos que ayudan al extractor a entender mejor tu catálogo. Es útil cuando importas productos por Excel o los sincronizas desde una integración como Odoo.

Si no aplica a tu negocio, déjalo en **Sin definir**.

## Horario de operación

Define los días y las horas en que tu negocio está disponible. El agente puede usar esta información para orientar al cliente sobre cuándo recibirá atención humana.

[CAPTURA PENDIENTE: editor de horario con un interruptor por día y rangos de hora]

1. Activa el interruptor de cada día en el que operas. Los días desactivados aparecen como **Cerrado**.
2. Ajusta la hora de inicio y la hora de fin de cada día activo.
3. Haz clic en **Guardar Cambios**.

:::caution[Revisa los rangos]
Si la hora final es anterior a la inicial, el horario se considera inválido y no se guardará.
:::

<!-- VERIFICAR: ejemplo de horario por defecto "Lunes a Viernes 09:00–18:00" tomado del artículo anterior; confirmar valores iniciales en el UI nuevo. -->

:::tip[No confundas el horario de operación con los turnos]
El **horario de operación** describe cuándo está abierto tu negocio. Los **turnos** deciden *qué persona* recibe las conversaciones de cada número de WhatsApp. Se configuran en [Turnos y horario](/08-configuracion/empresa-y-equipo/turnos-y-horario/).
:::

## Qué sigue

- [Equipo y roles](/08-configuracion/empresa-y-equipo/equipo-y-roles/): invita a tu equipo y asigna permisos.
- [Módulos](/08-configuracion/cuenta/modulos/): activa las funciones que tu operación necesita.
