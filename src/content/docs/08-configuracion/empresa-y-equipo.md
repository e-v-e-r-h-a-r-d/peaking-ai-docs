---
title: Empresa y equipo
description: "Los datos de tu empresa, sucursales, equipo y roles, turnos de atención y tu perfil, en un solo lugar."
sidebar:
  order: 1
---

**Configuración › Empresa y equipo › Organización** es donde defines la identidad de tu negocio. Parte de esta información alimenta directamente a tu agente de IA, así que vale la pena dedicarle unos minutos.

:::note[Quién puede verla]
Esta sección solo la ven y editan los usuarios con rol **Master**. Para entender los roles, consulta [Equipo y roles](/08-configuracion/empresa-y-equipo/#equipo-y-roles).
:::

[CAPTURA PENDIENTE: pantalla Organización completa — Nombre, Moneda, descripción del negocio, Industria del catálogo y Horario de operación]

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Cambiar el nombre, la moneda o el contexto del negocio | [Organización](#organización) |
| Definir el horario de operación | [Horario de operación](#horario-de-operación) |
| Crear una sucursal y asignarle personas | [Sucursales](#sucursales) |
| Invitar a alguien o cambiar su rol | [Equipo y roles](#equipo-y-roles) |
| Asignar conversaciones por turnos | [Turnos y horario](#turnos-y-horario) |
| Editar mi perfil o cambiar mi contraseña | [Mi perfil](#mi-perfil) |

## Organización

### Datos generales

| Campo | Para qué sirve |
|-------|----------------|
| **Nombre de la Organización** | El nombre oficial de tu negocio tal como aparece en la plataforma. |
| **Moneda de la Plataforma** | La moneda por defecto de tu plataforma. Los productos nuevos que crees usarán esta moneda. |

Cuando termines, haz clic en **Guardar Cambios**.

### Contexto del negocio para la IA

Describe a qué se dedica tu negocio: quiénes son, qué ofrecen y a qué mercado atienden. Esta descripción ayuda a que las descripciones generadas por la IA sean más precisas y le da a tu agente un contexto general.

```
Ejemplo: "Somos una tienda de ropa femenina en CDMX especializada en moda casual
y contemporánea. Atendemos a mujeres entre 25 y 45 años. Contamos con tienda
física en Polanco y envíos a toda la República."
```

Mientras más específica sea, mejores serán las respuestas. Este campo complementa el prompt de tu agente, no lo reemplaza: las instrucciones de comportamiento siguen viviendo en el [Estudio de Prompts](/05-agente-ia/estudio-de-prompts/).

### Industria del catálogo

Selecciona el rubro de tu catálogo de productos. Al elegir una industria, Peaking carga ejemplos que ayudan al extractor a entender mejor tu catálogo. Es útil cuando importas productos por Excel o los sincronizas desde una integración como Odoo.

Si no aplica a tu negocio, déjalo en **Sin definir**.

### Horario de operación

Define los días y las horas en que tu negocio está disponible. El agente puede usar esta información para orientar al cliente sobre cuándo recibirá atención humana.

[CAPTURA PENDIENTE: editor de horario con un interruptor por día y rangos de hora]

1. Activa el interruptor de cada día en el que operas. Los días desactivados aparecen como **Cerrado**.
2. Ajusta la hora de inicio y la hora de fin de cada día activo.
3. Haz clic en **Guardar Cambios**.

:::caution[Revisa los rangos]
Si la hora final es anterior a la inicial, el horario se considera inválido y no se guardará.
:::


:::tip[No confundas el horario de operación con los turnos]
El **horario de operación** describe cuándo está abierto tu negocio. Los **turnos** deciden *qué persona* recibe las conversaciones de cada número de WhatsApp. Se configuran en [Turnos y horario](/08-configuracion/empresa-y-equipo/#turnos-y-horario).
:::

### Después de la organización

- [Equipo y roles](/08-configuracion/empresa-y-equipo/#equipo-y-roles): invita a tu equipo y asigna permisos.
- [Módulos](/08-configuracion/cuenta/): activa las funciones que tu operación necesita.

## Sucursales

Si tu negocio opera en más de una ubicación, **Sucursales** te permite organizar a tu equipo por lugar y controlar quién tiene acceso a qué.

:::note[Antes de empezar]
Esta sección aparece solo cuando el módulo **Sucursales / Ubicaciones** está activo. Un usuario **Master** puede activarlo en [Módulos](/08-configuracion/cuenta/). Solo los Master administran sucursales.
:::

[CAPTURA PENDIENTE: lista de sucursales con botón Nueva Sucursal]

### Crear una sucursal

1. Ve a **Configuración › Empresa y equipo › Sucursales**.
2. Haz clic en **Nueva Sucursal**.
3. Escribe el **Nombre de Sucursal** (obligatorio).
4. Agrega una **Descripción** si lo necesitas (opcional).
5. Deja activo el interruptor **Activo** si la sucursal ya está operando.
6. Haz clic en **Guardar**.

Si aún no tienes ninguna, verás el mensaje *"Crea tu primera sucursal para comenzar a organizar por ubicación"*.

### Editar, activar o desactivar

- Para cambiar el nombre o la descripción, abre la sucursal y haz clic en **Editar Sucursal**.
- Para dejar de usarla sin perder su historial, cámbiala a **Inactivo**. Puedes volver a activarla en cualquier momento.

### Para qué sirven

Las sucursales se usan como **filtro** en el CRM y en las métricas del Panel de control e Insights, para ver cada ubicación por separado.

### Asignar personas a una sucursal

Las personas se asignan desde [Equipo y roles](/08-configuracion/empresa-y-equipo/#equipo-y-roles): cada miembro tiene un selector de **Sucursales** donde eliges una o varias.


## Equipo y roles

Aquí administras a las personas que tienen acceso a tu organización en Peaking: a quién invitas, qué puede hacer cada quien y a qué área pertenece.

Esta sección la ven todos los usuarios, pero solo un **Master** puede cambiar roles.

[CAPTURA PENDIENTE: tabla "Miembros del Equipo" con columnas de usuario, correo, rol, departamento, vendedor, sucursales y acciones]

### Los tres roles

| Rol | Qué puede hacer |
|-----|-----------------|
| **Master** | Acceso a todo: configuración, canales, módulos, plan y equipo. |
| **Administrador** | Ve y gestiona toda la operación (conversaciones, CRM, tareas y reportes) **sin tocar la configuración de la cuenta**. |
| **Usuario** | Atiende sus conversaciones, contactos y tareas. Si la opción **Visibilidad por asignación** está activa, solo ve lo que tiene asignado. |

:::tip[Menos permisos es más seguro]
Asigna **Master** solo a quien realmente administre la cuenta. Para la operación diaria, **Administrador** o **Usuario** son suficientes.
:::

### La tabla de miembros

| Columna | Descripción |
|---------|-------------|
| **Usuario** | Nombre del miembro |
| **Correo** | Dirección con la que accede |
| **Rol** | Master (insignia fija), Administrador o Usuario. Solo un Master ve el selector para cambiarlo |
| **Departamento** | Área a la que pertenece (se crean en [Organización interna](/08-configuracion/operacion/#organización-interna)) |
| **Sucursales** | Ubicaciones donde trabaja. Solo aparece si el módulo Sucursales está activo |
| **Números** | Solo si tienes varios números de WhatsApp: con aislamiento por número es **Números que puede ver**; sin él, **Vista predeterminada** (el número que se abre primero en Mensajes, sin restringir el acceso) |
| **Vendedor** | Casilla que indica si la persona puede recibir oportunidades del CRM. La edita un Master |
| **Correo conectado** | Estado del buzón de correo de cada persona (lo ve un Master) |
| **Acciones** | Eliminar al usuario o cancelar una invitación pendiente |

### Invitar a un miembro

1. Haz clic en **Invitar Usuario**.
2. Escribe su **Correo**.
3. Elige su **Rol**: **Usuario** o **Administrador**.
4. Asígnale un **Departamento** si quieres (opcional).
5. Haz clic en **Enviar Invitación**.

La persona recibe un correo con el enlace para unirse. Mientras no lo acepte, aparece como **Pendiente**. Puedes anularla con **Cancelar Invitación**.

:::note[No se invita directamente como Master]
En la invitación solo puedes elegir **Usuario** o **Administrador**. Para dar rol Master, primero invita a la persona y luego cámbiale el rol (ver abajo).
:::


### Cambiar el rol de alguien

1. Ubica a la persona en la tabla.
2. En la columna **Rol**, abre el selector y elige el nuevo rol.

#### Nombrar a un Master

Solo un Master de la organización puede nombrar a otro Master. Al elegir ese rol aparece una confirmación, **¿Nombrar Master?**, que te recuerda que esa persona tendrá acceso a todo y podrá nombrar a otros Master.

:::caution[Este cambio no se deshace desde esta pantalla]
Una vez que alguien es Master, su rol ya no se puede editar desde la tabla. Nombra Master únicamente a personas de confianza.
:::

### Eliminar a un usuario

Eliminar a alguien **revoca su acceso** a la organización. Si solo quieres cambiar lo que puede hacer, usa el selector de **Rol** en lugar de eliminarlo.

### Después de equipo y roles

- [Organización interna](/08-configuracion/operacion/#organización-interna): crea los departamentos que luego asignas aquí.
- [Módulos](/08-configuracion/cuenta/): activa **Visibilidad por asignación** o **Aislamiento por número de WhatsApp** para limitar lo que ve cada Usuario.
- [Asignación](/08-configuracion/operacion/): define cómo se reparten las oportunidades entre los **Vendedores**.


## Turnos y horario

**Turnos y horario** decide **quién atiende** cada conversación nueva que llega a un número de WhatsApp, según el día y la hora. Así, la persona que cubre el turno recibe la conversación automáticamente, sin que nadie tenga que repartirlas a mano.

:::note[Antes de empezar]
Esta sección aparece solo cuando el módulo **Asignación por turnos** está activo. Un usuario **Master** puede activarlo en [Módulos](/08-configuracion/cuenta/). Necesitas además al menos un número de WhatsApp conectado — consulta [Canales](/08-configuracion/canales-e-integraciones/canales/).
:::

[CAPTURA PENDIENTE: tabla de turnos por número, con la columna "Ahora atiende"]

### Cómo se ve la pantalla

Verás una tabla por cada número de WhatsApp conectado. Cada número muestra:

| Elemento | Qué significa |
|----------|----------------|
| **Número** | El número de WhatsApp al que aplican los turnos |
| **Ahora atiende** | La persona que cubre el turno en este momento. Si ninguno aplica, aparece **nadie (sin turno)** |
| **Turnos** | Las franjas de día y hora configuradas para ese número |

Las horas se interpretan en la **hora local de la organización**.

### Agregar un turno

1. Ubica el número de WhatsApp al que quieres asignar el turno.
2. Haz clic en **Agregar turno**.
3. Elige el **Día**.
4. Indica la hora de inicio (**De**) y la de fin (**A**).
5. Selecciona el **Usuario** que atenderá en esa franja.
6. Guarda el turno.

Para quitar un turno, haz clic en **Eliminar** en su fila. Si un número aún no tiene turnos, verás: *"Este número aún no tiene turnos. Agrega uno por cada franja del día."*

:::caution[La hora final no se incluye]
Un turno de **15:00 a 23:00** cubre hasta las **22:59**. Para cubrir la noche completa, usa **23:59** como hora final. La hora final debe ser mayor que la inicial; de lo contrario, el turno no se guarda.
:::

### Cosas que conviene saber

- Si no hay usuarios en la organización, no habrá a quién asignar un turno. Invita primero a tu equipo en [Equipo y roles](/08-configuracion/empresa-y-equipo/#equipo-y-roles).
- Los turnos funcionan **solo con WhatsApp**, por número. No aplican a Instagram, Messenger, correo ni chat web.
- Con cada mensaje entrante, si la conversación **no tiene responsable**, se asigna a quien cubre el turno. Si ya tiene responsable pero lleva **más de 24 horas sin actividad**, se reasigna a quien cubre el turno en ese momento.
- No necesitas el **aislamiento por número** para usar turnos; si lo activas, cada Administrador solo ve y edita los turnos de sus números.
- Una franja sin turno deja la conversación sin responsable: la columna **Ahora atiende** mostrará **nadie (sin turno)**. Cubre todas las horas en las que recibes mensajes.

:::tip[No lo confundas con el horario de operación]
El [horario de operación](/08-configuracion/empresa-y-equipo/#horario-de-operación) indica cuándo está abierto tu negocio. Los turnos indican **qué persona** atiende en cada franja.
:::

<!-- VERIFICAR: qué ocurre si dos turnos del mismo número se superponen en la misma franja. -->

## Mi perfil

**Mi perfil** reúne tus datos personales y tus avisos. Esta sección la ven todos los usuarios, sin importar su rol: cada persona edita solo su propio perfil.

[CAPTURA PENDIENTE: pantalla Mi perfil con avatar, nombre, apellido, correo, teléfono, puesto y WhatsApp para notificaciones]

### Qué puedes editar

| Campo | Notas |
|-------|-------|
| **Avatar** | Tu foto de perfil. Haz clic en la imagen para cambiarla |
| **Nombre** | Tu nombre |
| **Apellido** | Tu apellido |
| **Correo** | Solo lectura. No se puede cambiar desde aquí |
| **Teléfono** | Tu número de contacto |
| **Puesto** | Tu cargo en la organización |
| **WhatsApp para notificaciones** | El número donde recibirás el aviso cuando te asignen una nueva oportunidad |

Cuando termines, haz clic en **Guardar Cambios**.

### Avisos de asignación por WhatsApp

Si tu organización tiene activadas las notificaciones de asignación, recibirás un mensaje de WhatsApp en el número que escribas en **WhatsApp para notificaciones** cada vez que te asignen una oportunidad nueva del CRM.

Incluye el código de país (por ejemplo, `+52 444 123 4567`). Si dejas el campo vacío, no recibirás ese aviso por WhatsApp. Para que tu organización lo active, consulta [Asignación](/08-configuracion/operacion/).

### Tu foto

Sube una imagen de tu foto de perfil: cualquier formato de imagen, de **menos de 5 MB**.

### Cambiar tu contraseña

La contraseña no se cambia aquí. Ve a [Seguridad y privacidad](/08-configuracion/cuenta/#seguridad-y-privacidad).

