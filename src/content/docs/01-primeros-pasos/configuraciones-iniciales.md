---
title: Configuración general de la cuenta
description: "Guía completa para configurar tu cuenta de Peaking: equipo, perfil, seguridad, facturación, privacidad y módulos activos."
sidebar:
  order: 3
---

La sección de **Configuración** es el panel de control de tu organización en Peaking. Desde aquí gestionas tu equipo, tu perfil personal, la seguridad de la cuenta, la facturación y los módulos que tienes activos. Completa estas configuraciones antes de conectar tus canales o activar tu agente de IA.

## Cómo acceder a Configuración

1. Inicia sesión en Peaking AI.
2. En el panel lateral izquierdo, haz clic en **Configuraciones**.
3. Verás una barra con las siguientes pestañas: **Organización · Team · Profile · Security · Billing · Privacy · Funcionalidades**.

---

## Pestaña: Team — Miembros del equipo

Aquí invitas a las personas de tu organización para que accedan a Peaking con sus propios roles y permisos.

### Cómo invitar un miembro

1. Ve a _Configuración › Team_.
2. Haz clic en **Invitar Miembro del Equipo**.
3. Ingresa el **Correo** de la persona a invitar.
4. Selecciona su **Rol** dentro de la organización.
5. Haz clic en **Enviar Invitación**.

La persona recibirá un correo con el enlace de acceso.

:::tip[Gestión de roles]
Cada miembro puede tener un rol distinto que define qué partes de la plataforma puede ver y editar. Revisa la configuración de roles antes de invitar a tu equipo.
:::

---

## Pestaña: Profile — Información de tu cuenta

Aquí actualizas tu información personal dentro de Peaking.

| Campo | Descripción |
|-------|-------------|
| **Full Name** | Tu nombre completo tal como aparecerá en la plataforma |
| **Email Address** | Correo electrónico de tu cuenta |
| **Phone Number** | Un número donde puedan contactarte |
| **Company** | Nombre de tu empresa u organización |
| **Username** | Tu identificador único dentro de Peaking |

Cuando termines de editar, haz clic en **Guardar** para que los cambios queden guardados.

---

## Pestaña: Security — Protege tu cuenta

### Cambiar tu contraseña

1. Ve a _Configuración › Security_.
2. En el campo **New Password**, ingresa tu nueva contraseña.
3. Confírmala en el campo **Confirm new password**.
4. Haz clic en **Guardar**.

### Restringir Onboarding

Al activar esta opción, desactivas el modal de bienvenida que aparece cuando los nuevos miembros abren la cuenta por primera vez. Útil cuando ya tienes el equipo configurado y no quieres que aparezca el flujo de configuración inicial.

---

## Pestaña: Billing — Facturación

Desde aquí administras tu suscripción a Peaking.

| Sección | Descripción |
|---------|-------------|
| **Suscripción** | Muestra el estado actual de tu plan y fecha de renovación |
| **Facturas** | Lista de todas las facturas anteriores y del período actual |

Para descargar una factura, haz clic en el ícono de descarga junto a la factura correspondiente.

:::tip[Buena práctica]
Descarga y archiva tus facturas periódicamente para mantener un registro contable ordenado.
:::

---

## Pestaña: Privacy — Política de privacidad

### Política de privacidad propia

Si tu negocio tiene una política de privacidad propia para tus clientes, puedes configurarla en este campo. Una vez establecida, Peaking la mostrará automáticamente a los usuarios cuando interactúen con tu widget de chat.

1. Ve a _Configuración › Privacy_.
2. En el campo **Privacy Policy**, pega o escribe el texto de tu política de privacidad.
3. Haz clic en **Guardar**.

---

## Pestaña: Funcionalidades — Módulos de la plataforma

Desde **Funcionalidades** puedes activar o desactivar módulos según las necesidades de tu negocio. Los módulos inactivos no aparecen en la navegación.

| Módulo | Estado por defecto | Descripción |
|--------|--------------------|-------------|
| **Módulo CRM** | Activo | Gestión de Relaciones con Clientes |
| **Módulo TODOs** | Activo | Gestión de tareas y asignación de equipo |
| **Sucursales / Ubicaciones** | Inactivo | Gestión multi-ubicación y control de acceso |
| **Time Blocks / Reservaciones** | Inactivo | Permite que clientes reserven clases, eventos o sesiones desde el AI Agent |
| **Workflows** | Inactivo | Flujos de automatización visual para enrutar mensajes con agentes IA |
| **Odoo Sync** | Activo | Sincronización de productos y contactos con Odoo |
| **Enriquecimiento IA** | Inactivo | Genera descripciones automáticas con IA para productos sin descripción |
| **Variantes de producto** | Inactivo | Gestión de variantes como tallas, colores u otras características |

Para activar o desactivar un módulo, usa el **toggle** (interruptor) que aparece a la derecha de cada módulo.

---

## Configuración de asignación CRM

Cuando el **Módulo CRM** está activo, puedes configurar cómo se asignan automáticamente las oportunidades a tu equipo de ventas.

| Opción | Descripción |
|--------|-------------|
| **Auto Assignment** | Asigna nuevas oportunidades automáticamente a los miembros del equipo |
| **Assignment Strategy** | Las oportunidades se distribuyen de forma equitativa en rotación (Round Robin) |

Solo los miembros marcados como **Salesperson** dentro de Team recibirán asignaciones automáticas.

---

## Configuración de asignación TODO

Cuando el **Módulo TODOs** está activo, puedes definir reglas inteligentes para asignar tareas automáticamente.

### Estrategia de asignación

- **Round Robin**: los TODOs se reparten en rotación entre los miembros del equipo.
- **Intelligent Assignment Rules**: la IA analiza el contenido del TODO y lo asigna según reglas que tú defines.

### Cómo crear una regla de asignación inteligente

1. En _Configuración › Funcionalidades_, desplázate hasta **Intelligent Assignment Rules**.
2. Haz clic en **Create Assignment Rule**.
3. Completa los campos:

| Campo | Descripción |
|-------|-------------|
| **Rule Name** | Nombre descriptivo de la regla (ej. "Consultas de Ventas → Equipo Ventas") |
| **Description** | Explica cuándo debe aplicarse esta regla |
| **Keywords** | Palabras clave que la IA buscará en el título y descripción del TODO |
| **Priority Levels** | Filtra por prioridad: `low`, `medium`, `high` o `urgent` |
| **Team/Department Hint** | Contexto adicional que guía el análisis de la IA |
| **Assign To** | Define si asignas a un equipo/departamento o a un usuario específico |

4. Haz clic en **Create Rule**.

:::note[Cómo funciona la asignación inteligente]
Las reglas se evalúan en orden de prioridad. La IA analiza el título, descripción y contexto de la conversación. La primera regla que coincida asigna el TODO. Si ninguna regla coincide, el sistema usa Round Robin como respaldo.
:::

---

## Preguntas frecuentes

**¿Puedo cambiar el rol de un miembro después de invitarlo?**

Sí. Ve a _Configuración › Team_, encuentra al miembro y edita su rol desde el panel de opciones.

**¿Qué pasa si desactivo un módulo que ya estaba en uso?**

Los datos existentes se conservan. El módulo simplemente deja de aparecer en la navegación hasta que lo vuelvas a activar.

**¿Las reglas de asignación inteligente reemplazan a Round Robin?**

No del todo. Las reglas se evalúan primero; si ninguna coincide, el sistema cae automáticamente al Round Robin como respaldo.
