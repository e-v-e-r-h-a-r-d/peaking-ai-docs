---
title: Módulos
description: "Activa o desactiva las funciones de Peaking que tu operación necesita: CRM, correo, turnos, sucursales, workflows y más."
sidebar:
  order: 1
---

**Módulos** es el panel donde activas o desactivas las funciones de Peaking según lo que tu negocio necesite. Cada módulo muestra si está **Activo** o **Inactivo** y tiene un interruptor para cambiarlo.

:::note[Quién puede cambiarlos]
Solo los usuarios con rol **Master** ven y modifican esta sección. Al activar un módulo, normalmente aparece una sección nueva en el menú o en [Configuración](/08-configuracion/empresa-y-equipo/organizacion/).
:::

[CAPTURA PENDIENTE: pantalla Módulos con la lista de interruptores]

## Módulos disponibles

### Atención y equipo

| Módulo | Qué habilita |
|--------|--------------|
| **Correo electrónico** | Agrega **Correos** al menú: cada persona conecta su Gmail u Outlook y atiende sus correos dentro de Peaking, con ayuda del agente. Ver [Correos](/05-conversaciones/correo/) |
| **Asignación por turnos** | Cada conversación entrante de WhatsApp se asigna automáticamente a quien cubre el turno de ese número en ese momento. Ver [Turnos y horario](/08-configuracion/empresa-y-equipo/turnos-y-horario/) |
| **Sucursales / Ubicaciones** | Gestión multi-ubicación y control de acceso. Ver [Sucursales](/08-configuracion/empresa-y-equipo/sucursales/) |
| **Módulo TODOs** | Gestión de tareas y asignación del equipo. Ver [Tareas](/10-tareas/) |

### Visibilidad y permisos

| Módulo | Qué habilita |
|--------|--------------|
| **Visibilidad por asignación** | Los usuarios con rol **Usuario** solo ven las conversaciones, contactos y leads que tienen asignados. Administradores y Master ven todo |
| **Ver todo el CRM, editar solo lo propio** | Los usuarios ven todas las oportunidades, contactos y actividades del CRM (para evitar leads duplicados), pero solo editan lo que tienen asignado |
| **Aislamiento por número de WhatsApp** | Cada persona, incluidos Administradores y Master, ve únicamente las conversaciones, plantillas y envíos masivos de los números que tiene asignados |

:::caution[Antes de activar el aislamiento por número]
Asigna número(s) a cada usuario primero. Si activas el aislamiento sin hacerlo, esa persona no verá conversaciones.
:::

:::caution[Visibilidad por asignación y "Ver todo, editar solo lo propio" son excluyentes]
Controlan el mismo tipo de permiso de formas opuestas. No actives ambos a la vez: uno anula la lógica del otro.
:::

<!-- VERIFICAR: la exclusión mutua entre "Visibilidad por asignación" y "Ver todo el CRM, editar solo lo propio" viene del artículo anterior, no se confirmó en el código nuevo. Verificar en el UI. -->

### Clientes y ventas

| Módulo | Qué habilita |
|--------|--------------|
| **Módulo CRM** | La gestión de oportunidades en pipeline. Ver [CRM](/06-crm-audiencias/) |
| **Formularios de captación** | Formularios que incrustas en tu sitio web y generan oportunidades en el CRM. Habilita [Formularios de leads](/08-configuracion/canales-e-integraciones/formularios-de-leads/) |
| **Plantillas y envío masivo de WhatsApp** | Habilita la sección de plantillas y el envío masivo a varios destinatarios y audiencias. Ver [Campañas](/14-audiencias/) |

### Agente y automatización

| Módulo | Qué habilita |
|--------|--------------|
| **Workflows** | Flujos de automatización visual para enrutar y procesar mensajes con agentes, herramientas y condiciones. Ver [Workflows](/05-agente-ia/workflows/) |
| **Enriquecimiento IA** | Genera descripciones automáticas con IA para los productos que no tienen una, mejorando la búsqueda |
| **Agentes de Voz** | Habilita agentes telefónicos con IA para conversaciones de voz. **Peaking lo activa según tu plan de voz**: escríbenos para contratarlo o cambiarlo |

### Integraciones y desarrolladores

| Módulo | Qué habilita |
|--------|--------------|
| **API pública** | Habilita la API de Peaking para recibir leads desde sistemas externos (formularios web, Zapier, tu propio backend) con claves de API. Ver [Claves de API](/08-configuracion/canales-e-integraciones/claves-de-api/) |

<!-- VERIFICAR / PENDIENTE: el código también controla "Odoo Sync" (odoo_sync_enabled) y "Variantes de producto" (variants_enabled) en esta pantalla; aparecen en el artículo anterior pero no se extrajeron sus textos en el UI nuevo. Confirmar si siguen visibles como interruptores o si pasaron a otra sección (Herramientas / Productos). -->
<!-- VERIFICAR: qué módulos están visibles solo para ciertos planes u organizaciones. El interruptor de Agentes de Voz está bloqueado ("Peaking activa este módulo según tu plan de voz"); confirmar si otros se bloquean también. -->

## Qué cambió respecto a "Funcionalidades"

Esta sección antes se llamaba **Funcionalidades** y vivía como una pestaña dentro de Configuración. Ahora forma parte del grupo **Cuenta**. Además, la configuración de asignación automática que antes aparecía al final de esa pestaña ahora tiene su propia página: [Asignación](/08-configuracion/operacion/asignacion/).
