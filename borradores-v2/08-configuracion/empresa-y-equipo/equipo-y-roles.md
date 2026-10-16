---
title: Equipo y roles
description: "Invita a tu equipo, asigna roles (Master, Administrador y Usuario), departamentos y sucursales, y controla quién puede configurar tu cuenta."
sidebar:
  order: 3
---

Aquí administras a las personas que tienen acceso a tu organización en Peaking: a quién invitas, qué puede hacer cada quien y a qué área pertenece.

Esta sección la ven todos los usuarios, pero solo un **Master** puede cambiar roles.

[CAPTURA PENDIENTE: tabla "Miembros del Equipo" con columnas de usuario, correo, rol, departamento, vendedor, sucursales y acciones]

## Los tres roles

| Rol | Qué puede hacer |
|-----|-----------------|
| **Master** | Acceso a todo: configuración, canales, módulos, plan y equipo. |
| **Administrador** | Ve y gestiona toda la operación (conversaciones, CRM, tareas y reportes) **sin tocar la configuración de la cuenta**. |
| **Usuario** | Atiende sus conversaciones, contactos y tareas. Si la opción **Visibilidad por asignación** está activa, solo ve lo que tiene asignado. |

:::tip[Menos permisos es más seguro]
Asigna **Master** solo a quien realmente administre la cuenta. Para la operación diaria, **Administrador** o **Usuario** son suficientes.
:::

## La tabla de miembros

| Columna | Descripción |
|---------|-------------|
| **Usuario** | Nombre del miembro |
| **Correo** | Dirección con la que accede |
| **Rol** | Master, Administrador o Usuario |
| **Departamento** | Área a la que pertenece (se crean en [Organización interna](/08-configuracion/operacion/organizacion-interna/)) |
| **Vendedor** | Indica si la persona puede recibir oportunidades del CRM |
| **Sucursales** | Ubicaciones donde trabaja. Solo aparece si el módulo Sucursales está activo |
| **Acciones** | Eliminar al usuario o cancelar una invitación pendiente |

## Invitar a un miembro

1. Haz clic en **Invitar Usuario**.
2. Escribe su **Correo**.
3. Elige su **Rol**: **Usuario** o **Administrador**.
4. Asígnale un **Departamento** si quieres (opcional).
5. Haz clic en **Enviar Invitación**.

La persona recibe un correo con el enlace para unirse. Mientras no lo acepte, aparece como **Pendiente**. Puedes anularla con **Cancelar Invitación**.

:::note[No se invita directamente como Master]
En la invitación solo puedes elegir **Usuario** o **Administrador**. Para dar rol Master, primero invita a la persona y luego cámbiale el rol (ver abajo).
:::

<!-- VERIFICAR: el diálogo de invitación en el código ofrece "Usuario" y "Administrador"; confirmar en pantalla que Master no aparece como opción. -->

## Cambiar el rol de alguien

1. Ubica a la persona en la tabla.
2. En la columna **Rol**, abre el selector y elige el nuevo rol.

### Nombrar a un Master

Solo un Master de la organización puede nombrar a otro Master. Al elegir ese rol aparece una confirmación, **¿Nombrar Master?**, que te recuerda que esa persona tendrá acceso a todo y podrá nombrar a otros Master.

:::caution[Este cambio no se deshace desde esta pantalla]
Una vez que alguien es Master, su rol ya no se puede editar desde la tabla. Nombra Master únicamente a personas de confianza.
:::

## Eliminar a un usuario

Eliminar a alguien **revoca su acceso** a la organización. Si solo quieres cambiar lo que puede hacer, usa el selector de **Rol** en lugar de eliminarlo.

## Qué sigue

- [Organización interna](/08-configuracion/operacion/organizacion-interna/): crea los departamentos que luego asignas aquí.
- [Módulos](/08-configuracion/cuenta/modulos/): activa **Visibilidad por asignación** o **Aislamiento por número de WhatsApp** para limitar lo que ve cada Usuario.
- [Asignación](/08-configuracion/operacion/asignacion/): define cómo se reparten las oportunidades entre los **Vendedores**.

<!-- VERIFICAR: (1) orden real de columnas; (2) comportamiento del toggle "Vendedor" (¿es un interruptor editable en la tabla o solo una indicación?); (3) si el rol Administrador puede o no invitar usuarios; (4) si el Master propietario muestra una insignia sin selector. En código el rol "admin" de base de datos se muestra como Master y "manager" como Administrador. -->
