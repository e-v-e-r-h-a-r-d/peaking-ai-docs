---
title: Cuenta
description: "Módulos activos, plan y facturación, seguridad y privacidad de tu cuenta."
sidebar:
  order: 3
---

**Módulos** es el panel donde activas o desactivas las funciones de Peaking según lo que tu negocio necesite. Cada módulo muestra si está **Activo** o **Inactivo** y tiene un interruptor para cambiarlo.

:::note[Quién puede cambiarlos]
Solo los usuarios con rol **Master** ven y modifican esta sección. Al activar un módulo, normalmente aparece una sección nueva en el menú o en [Configuración](/08-configuracion/empresa-y-equipo/).
:::

![Pantalla Módulos con la lista de interruptores](/screenshots/v2/08-configuracion/cuenta-modulos.png)

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Ver qué plan tengo y hasta cuándo | [Tu plan](#tu-plan) |
| Dejar de renovar mi suscripción | [Cancelar al final del periodo](#cancelar-al-final-del-periodo) |
| Activar los agentes de voz | [Plan de voz](#plan-de-voz) |
| Ver cuántos minutos de voz he usado | [Uso de voz del periodo](#uso-de-voz-del-periodo) |
| Descargar o ver una factura | [Facturas](#facturas) |
| Cambiar mi contraseña | [Cambiar tu contraseña](#cambiar-tu-contraseña) |
| Salir de mi cuenta en otros dispositivos | [Sesiones activas](#sesiones-activas) |
| Volver a ver la guía de inicio | [Introducción](#introducción) |
| Leer el aviso de privacidad o los términos | [Privacidad](#privacidad) |

## Módulos

### Módulos disponibles

#### Atención y equipo

| Módulo | Qué habilita |
|--------|--------------|
| **Correo electrónico** | Agrega **Correos** al menú: cada persona conecta su Gmail u Outlook y atiende sus correos dentro de Peaking, con ayuda del agente. Ver [Correos](/05-conversaciones/correo/) |
| **Asignación por turnos** | Cada conversación entrante de WhatsApp se asigna automáticamente a quien cubre el turno de ese número en ese momento. Ver [Turnos y horario](/08-configuracion/empresa-y-equipo/#turnos-y-horario) |
| **Sucursales / Ubicaciones** | Gestión multi-ubicación y control de acceso. Ver [Sucursales](/08-configuracion/empresa-y-equipo/#sucursales) |
| **Módulo TODOs** | Gestión de tareas y asignación del equipo. Ver [Tareas](/10-tareas/) |

#### Visibilidad y permisos

| Módulo | Qué habilita |
|--------|--------------|
| **Visibilidad por asignación** | Los usuarios con rol **Usuario** solo ven las conversaciones, contactos y leads que tienen asignados. Administradores y Master ven todo |
| **Ver todo el CRM, editar solo lo propio** | Los usuarios ven todas las oportunidades, contactos y actividades del CRM (para evitar leads duplicados), pero solo editan lo que tienen asignado |
| **Aislamiento por número de WhatsApp** | Cada persona, incluidos Administradores y Master, ve únicamente las conversaciones, plantillas y envíos masivos de los números que tiene asignados |

:::caution[Antes de activar el aislamiento por número]
Asigna número(s) a cada usuario primero. Si activas el aislamiento sin hacerlo, esa persona no verá conversaciones.
:::

:::caution[Visibilidad por asignación y "Ver todo, editar solo lo propio" son excluyentes]
Controlan el mismo tipo de permiso de formas opuestas. Al encender uno, Peaking **apaga el otro automáticamente**.
:::


#### Clientes y ventas

| Módulo | Qué habilita |
|--------|--------------|
| **Módulo CRM** | La gestión de oportunidades en pipeline. Ver [CRM](/06-crm-audiencias/) |
| **Formularios de captación** | Formularios que incrustas en tu sitio web y generan oportunidades en el CRM. Habilita [Formularios de leads](/08-configuracion/canales-e-integraciones/formularios-webhooks-y-api/) |
| **Plantillas y envío masivo de WhatsApp** | Habilita la sección de plantillas y el envío masivo a varios destinatarios y audiencias. Ver [Campañas](/14-audiencias/) |

#### Agente y automatización

| Módulo | Qué habilita |
|--------|--------------|
| **Workflows** | Flujos de automatización visual para enrutar y procesar mensajes con agentes, herramientas y condiciones. Ver [Workflows](/05-agente-ia/workflows/) |
| **Odoo Sync** | Habilita la sincronización de productos y contactos con Odoo. Ver [Conectar Odoo](/08-configuracion/canales-e-integraciones/odoo/) |
| **Variantes de producto** | Para productos que vienen en versiones (tallas, colores…). Si lo apagas teniendo productos con variantes, Peaking te pide confirmar antes. Ver [Productos](/07-productos-pagos/) |
| **Enriquecimiento IA** | Genera descripciones automáticas con IA para los productos que no tienen una, mejorando la búsqueda |
| **Agentes de Voz** | Habilita agentes telefónicos con IA para conversaciones de voz. **Solo Peaking lo activa** (el interruptor está bloqueado para ti): se acuerda con Ventas. Ver [Plan de voz](#plan-de-voz) |

#### Integraciones y desarrolladores

| Módulo | Qué habilita |
|--------|--------------|
| **API pública** | Habilita la API de Peaking para recibir leads desde sistemas externos (formularios web, Zapier, tu propio backend) con claves de API. Ver [Claves de API](/08-configuracion/canales-e-integraciones/formularios-webhooks-y-api/#claves-de-api-y-peaking-mcp) |


### Qué cambió respecto a "Funcionalidades"

Esta sección antes se llamaba **Funcionalidades** y vivía como una pestaña dentro de Configuración. Ahora forma parte del grupo **Cuenta**. Además, la configuración de asignación automática que antes aparecía al final de esa pestaña ahora tiene su propia página: [Asignación](/08-configuracion/operacion/).

## Plan

**Plan** reúne todo lo que pagas en Peaking: tu suscripción, el plan de **voz** (si lo usas) y el historial de **facturas**.

[CAPTURA PENDIENTE: pantalla Plan con la tarjeta "Tu plan", el plan de voz y la lista de facturas]

### Tu plan

La tarjeta **Tu plan** muestra:

| Dato | Qué significa |
|---|---|
| **Nombre del plan** | **Pro** o **One** |
| **Monto** | Lo que pagaste en tu último cobro, en pesos mexicanos (MXN) |
| **Estado** | El estado de tu suscripción |
| **Termina el** | La fecha en que termina el periodo, cuando aplica |

Si no tienes suscripción verás **Sin suscripción activa**.

### Cancelar al final del periodo

1. En la tarjeta **Tu plan**, haz clic en **Cancelar al final del periodo**.
2. Verás el aviso **Cancelación programada**: *"Tu suscripción terminará al final del periodo."*

La cancelación **no corta el servicio de inmediato**: se programa para el final del periodo. Mientras esté programada, el botón cambia a **Cancelación pendiente** (deshabilitado) y aparece un recuadro con la fecha (*"Cancelación programada para el…"*) o, si no hay fecha, *"Cancelación programada al final del periodo"*.

### Plan de voz

Los **agentes de voz** (agentes telefónicos con IA en tu propio número) **no se contratan desde la plataforma**: los planes se acuerdan con el equipo de **Ventas de Peaking**, que te explica las condiciones y luego **activa** el servicio en tu organización.

:::note[Cómo se activa]
1. Escribe a tu ejecutivo de Ventas o al equipo de Peaking.
2. Peaking habilita el plan de voz y el módulo **Agentes de Voz** en tu organización.
3. Cuando está activo, **Master** y **Administrador** ven aquí la tarjeta **Plan de voz** con el uso de tus minutos.
:::

Si la tarjeta aún no aparece, tu organización no tiene plan de voz habilitado.

### Uso de voz del periodo

La tarjeta **Voz — uso del período** muestra tu consumo del mes:

| Dato | Qué significa |
|---|---|
| **Minutos consumidos** | Cuántos minutos llevas, contra los incluidos en tu plan, con una barra de avance |
| **Minutos sobre lo incluido** | Si ya pasaste lo incluido, cuántos minutos extra |
| **Límite duro** | El tope de minutos del mes |
| **Números activos** | Cuántos números de voz tienes en uso |

El **límite duro** te avisa en tres momentos: *"se notificará al 80%"* mientras vas lejos, *"cerca del límite"* al pasar el 80%, y *"alcanzado — nuevas llamadas bloqueadas"* al llegar al tope.

:::caution[Al llegar al límite se bloquean las llamadas nuevas]
Cuando alcanzas el límite duro, las **llamadas nuevas** quedan bloqueadas. Si te acercas con frecuencia, contacta a Peaking para revisar tu plan.
:::

Para configurar el agente de voz en sí, consulta [Agente de voz](/05-agente-ia/agente-de-voz/).

### Facturas

La sección **Facturas** lista tus cobros, del más reciente al más antiguo. Cada fila muestra:

- La **fecha de pago** (o **Sin pagar** si aún no se cobra).
- El importe en MXN.
- Una etiqueta de estado (**Pagada** o el estado correspondiente).
- Un enlace **Ver** para abrir la factura, cuando está disponible.

Si te falta una factura en la lista, haz clic en **Sincronizar facturas**. Verás *"Facturas sincronizadas"* y la lista se actualiza. Si no hay ninguna, aparece *"No hay facturas."*

## Seguridad y privacidad

**Seguridad y privacidad** reúne en una sola pantalla lo que protege el acceso a **tu** cuenta: tu contraseña, tus sesiones abiertas y los documentos legales.

[CAPTURA PENDIENTE: pantalla Seguridad y privacidad con los bloques Contraseña, Sesiones activas y Privacidad]

### Cambiar tu contraseña

1. Escribe tu **Contraseña actual**.
2. Escribe la **Nueva contraseña** (mínimo 8 caracteres).
3. Escríbela otra vez en **Confirmar nueva contraseña**.
4. Haz clic en **Actualizar contraseña**.

Si todo sale bien verás *"Contraseña actualizada"*. Si algo falla, el mensaje te dice qué corregir:

| Mensaje | Qué hacer |
|---|---|
| *La contraseña debe tener al menos 8 caracteres* | Usa una contraseña más larga |
| *Las contraseñas no coinciden* | Revisa que **Nueva** y **Confirmar** sean idénticas |
| *La contraseña actual no es correcta* | Escribe de nuevo tu contraseña vigente |
| *No se pudo completar la acción* | Intenta de nuevo en unos minutos |

### Sesiones activas

Aquí ves que estás en **Esta sesión**. Si entraste desde otro dispositivo o navegador y quieres cerrarlo, haz clic en **Cerrar las demás sesiones**: se cerrarán todas menos la que estás usando y verás *"Se cerraron las demás sesiones"*.

:::tip[Úsalo si perdiste un dispositivo]
Si sospechas que alguien más entró con tu cuenta, primero **cierra las demás sesiones** y después **cambia tu contraseña**.
:::

### Introducción

El usuario **Master** puede volver a ver la guía de inicio de la cuenta con **Reiniciar introducción**. Este bloque aparece solo cuando la introducción guiada está habilitada para tu organización.

### Privacidad

Dos botones abren los documentos legales de Peaking en una pestaña nueva:

- **Ver aviso de privacidad**
- **Términos y condiciones**

## Preguntas frecuentes

### Plan: preguntas

**¿Puedo deshacer una cancelación programada?**
Esta pantalla no tiene un botón para revertirla (solo verás **Cancelación pendiente**, deshabilitado). Contacta a Peaking si quieres conservar tu suscripción.

**¿Por qué no veo el plan de voz?**
La tarjeta solo la ven Master y Administrador, y solo después de que Ventas de Peaking active el plan en tu organización.

**¿Por qué mi factura no aparece?**
Haz clic en **Sincronizar facturas**. Si sigue sin aparecer, escribe a soporte.

### Seguridad y privacidad: preguntas

**¿Puedo cambiar mi correo desde aquí?**
No. El correo no se puede cambiar desde esta pantalla; lo verás en [Mi perfil](/08-configuracion/empresa-y-equipo/#mi-perfil), marcado como no editable.

**¿Por qué no veo "Introducción"?**
Solo aparece para el usuario Master y cuando la guía de inicio está habilitada en tu organización.

**¿Cerrar las demás sesiones me saca a mí?**
No. Tu sesión actual es la única que queda abierta.
