---
title: Configuración general de la cuenta
description: "Guía completa para configurar tu cuenta de Peaking: organización, equipo, perfil, seguridad, facturación y privacidad."
sidebar:
  order: 3
---

La sección de **Configuración** es el panel de control de tu organización en Peaking. Desde aquí defines los datos de tu empresa, gestionas tu equipo, cuidas la seguridad de la cuenta y administras la facturación. Completa estas configuraciones antes de conectar canales o activar tu agente de IA.

## Cómo acceder a Configuración

1. En el panel lateral izquierdo, haz clic en el ícono de **Configuraciones** (engranaje).
2. Verás una barra horizontal con las pestañas: **Organización · Team · Profile · Security · Billing · Privacy · Funcionalidades**.

---

## Pestaña: Organización

Aquí defines la identidad y el contexto de tu negocio. Esta información es especialmente importante porque parte de ella alimenta directamente a tu agente de IA.

### Datos generales

| Campo | Descripción |
|-------|-------------|
| **Nombre** | Nombre oficial de tu organización tal como aparecerá en la plataforma |
| **Moneda** | Moneda predeterminada para precios y transacciones (ej. MXN) |

### Contexto del negocio para la IA

El campo **`settings.businessContext`** es una descripción libre de tu negocio que el agente de IA usa como contexto general. Escribe aquí quiénes son, qué ofrecen y a qué mercado atienden.

```
Ejemplo: "Somos una tienda de ropa femenina en CDMX especializada en moda casual
y contemporánea. Atendemos a mujeres entre 25 y 45 años. Contamos con tienda
física en Polanco y envíos a toda la República."
```

Este campo complementa al prompt del agente — cuanto más preciso sea, mejores serán las respuestas contextuales.

### Horario de Operación

Define los días y horarios en que tu negocio está disponible. El agente puede usar esta información para orientar al cliente sobre cuándo puede recibir atención humana.

| Día | Configuración |
|-----|---------------|
| Lunes a Viernes | Toggle activado · Horario: 09:00 – 18:00 (editable) |
| Sábado y Domingo | Toggle desactivado → "Cerrado" |

Ajusta los rangos de horario directamente en los campos de hora. Cuando termines, haz clic en **Guardar Cambios**.

---

## Pestaña: Team — Equipo y departamentos

Administra los miembros que tienen acceso a Peaking y organízalos en departamentos.

### Departamentos

Los departamentos te permiten agrupar a tu equipo por área (Ventas, Soporte, Operaciones, etc.) y usarlos como criterio de asignación en los módulos de CRM y TODOs.

- Para crear un departamento: haz clic en **+ Nuevo Departamento**, escribe el nombre y guarda.
- Los departamentos creados aparecerán en la lista y estarán disponibles al configurar reglas de asignación.

:::tip[Crea los departamentos antes de invitar al equipo]
Si configuras los departamentos primero, puedes asignar a cada nuevo miembro a su área desde el momento en que lo invitas.
:::

### Miembros del equipo

La tabla **Team Members** muestra todos los usuarios con acceso a tu organización:

| Columna | Descripción |
|---------|-------------|
| **Usuario** | Nombre del miembro |
| **Correo** | Dirección de correo electrónico de acceso |
| **Rol** | Permisos asignados dentro de la plataforma |
| **Departamento** | Área a la que pertenece |
| **Vendedor** | Indica si el miembro puede recibir oportunidades del CRM |
| **Acciones** | Editar o eliminar al miembro |

### Cómo invitar a un miembro

1. Haz clic en **+ Invitar Usuario** (esquina superior derecha de la tabla).
2. Ingresa el **correo electrónico** de la persona.
3. Selecciona su **Rol**.
4. Asígnale un **Departamento** (opcional).
5. Activa el toggle **Vendedor** si debe recibir asignaciones automáticas del CRM.
6. Haz clic en **Enviar Invitación**.

La persona recibirá un correo con el enlace de acceso a la plataforma.

---

## Pestaña: Profile — Tu información personal

Actualiza tu información de usuario dentro de la plataforma.

| Campo | Notas |
|-------|-------|
| **Avatar** | Imagen de perfil · máximo 5 MB · click en la foto para cambiarla |
| **First Name** | Tu nombre |
| **Last Name** | Tu apellido |
| **Email** | Solo lectura — no se puede editar desde aquí |
| **Phone Number** | Número de contacto |
| **Job Title** | Tu cargo o puesto |

Cuando termines los cambios, haz clic en **Save Changes**.

---

## Pestaña: Security — Seguridad de la cuenta

### Cambiar contraseña

1. Ve a _Configuración › Security_.
2. Ingresa tu **Current Password** (contraseña actual).
3. Escribe tu nueva contraseña en **New Password**.
4. Confírmala en **Confirm New Password**.
5. Haz clic en **Update Password**.

### Reiniciar Onboarding

La sección **Onboarding** tiene el botón **Restart Onboarding**. Úsalo si necesitas que aparezca nuevamente el flujo de configuración inicial — útil para capacitar a nuevos administradores o repasar los pasos de configuración.

---

## Pestaña: Billing — Facturación y suscripción

### Suscripción

Muestra el estado actual de tu plan. Si no tienes un plan activo, verás el mensaje **"No active subscription"**.

El botón **"Cancel at period end"** (rosa) permite cancelar la suscripción al final del período vigente sin interrumpir el servicio de inmediato.

### Facturas

La sección **Invoices** lista todas tus facturas. Si no hay ninguna, verás **"No invoices found"**.

El botón **Sync invoices** (azul) sincroniza manualmente las facturas con el sistema de cobro. Úsalo si acabas de hacer un pago y no aparece aún en la lista.

---

## Pestaña: Privacy — Privacidad

Desde aquí puedes revisar los **Términos y Condiciones** y la **Política de Privacidad** de Peaking. Si tu negocio tiene su propia política de privacidad para mostrar a los clientes del widget, puedes configurarla en esta sección.

---

## Preguntas frecuentes

**¿Puedo cambiar el rol de un miembro después de invitarlo?**

Sí. Ve a _Configuración › Team_, encuentra al miembro en la tabla y edita su rol desde la columna **Acciones**.

**¿El campo `settings.businessContext` reemplaza al prompt del agente?**

No. Es un complemento. El prompt define la personalidad y el comportamiento; el `businessContext` proporciona información de contexto general que el agente puede usar al responder preguntas abiertas.

**¿Puedo tener varios departamentos en el equipo?**

Sí, sin límite de departamentos. Crea tantos como necesites para reflejar la estructura real de tu organización.
