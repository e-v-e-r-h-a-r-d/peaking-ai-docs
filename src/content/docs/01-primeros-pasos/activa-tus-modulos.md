---
title: Activa y configura los módulos de tu plataforma
description: Cómo activar los módulos de Peaking (CRM, TODOs, Sucursales, Workflows y más) y configurar las reglas de asignación automática.
sidebar:
  order: 4
---

Peaking viene con un conjunto base de funcionalidades activas y otros módulos que puedes encender cuando tu negocio los necesite. Activar solo los módulos que usas mantiene la interfaz limpia y enfocada. Esta guía cubre qué hace cada módulo y cómo configurar la asignación automática de trabajo a tu equipo.

## Cómo acceder a Funcionalidades

1. En el panel lateral izquierdo, haz clic en **Configuraciones**.
2. Selecciona la pestaña **Funcionalidades**.

Verás la lista de todos los módulos disponibles con su estado actual (activo o inactivo). Usa el **toggle** de cada módulo para activarlo o desactivarlo.

:::note[Los módulos inactivos no aparecen en la navegación]
Cuando desactivas un módulo, su ícono desaparece del panel lateral. Los datos existentes se conservan — si lo vuelves a activar, los recuperas.
:::

---

## Módulos disponibles

| Módulo | Estado por defecto | Qué habilita |
|--------|--------------------|--------------|
| **Módulo CRM** | Activo | Pipeline de oportunidades con vista Kanban y lista, asignación automática a vendedores |
| **Módulo TODOs** | Activo | Gestión de tareas y pendientes vinculados a conversaciones |
| **Sucursales / Ubicaciones** | Inactivo | Gestión multi-sucursal con control de acceso por ubicación |
| **Time Blocks / Reservaciones** | Inactivo | Permite que clientes reserven clases, eventos o sesiones directamente desde el agente de IA |
| **Workflows** | Inactivo | Flujos de automatización visual para enrutar y procesar conversaciones con lógica de negocio |
| **Odoo Sync** | Inactivo | Sincronización bidireccional de productos y contactos con Odoo ERP |
| **Enriquecimiento IA** | Inactivo | Genera automáticamente descripciones para productos que no tienen una |
| **Variantes de producto** | Inactivo | Gestiona variantes de productos (tallas, colores, sabores u otras características) |

---

## Configuración del módulo CRM

Cuando el **Módulo CRM** está activo, puedes definir cómo se distribuyen automáticamente las nuevas oportunidades entre tu equipo de ventas.

### Asignación automática

| Opción | Descripción |
|--------|-------------|
| **Auto Assignment** | Activa la asignación automática de nuevas oportunidades |
| **Assignment Strategy** | **Round Robin** — las oportunidades se reparten en rotación equitativa entre los miembros marcados como Vendedor |

:::tip[¿Quién recibe oportunidades?]
Solo los miembros del equipo con el toggle **Vendedor** activado en _Configuración › Team_ reciben asignaciones automáticas del CRM.
:::

---

## Configuración del módulo TODOs

Cuando el **Módulo TODOs** está activo, puedes definir cómo se asignan automáticamente las tareas generadas desde conversaciones.

### Estrategia de asignación

- **Round Robin**: los TODOs se reparten en rotación entre los miembros del equipo.
- **Intelligent Assignment Rules**: la IA analiza el contenido del TODO y lo asigna según reglas personalizadas que tú defines.

### Cómo crear una regla de asignación inteligente

1. En _Configuración › Funcionalidades_, desplázate hasta **Intelligent Assignment Rules**.
2. Haz clic en **Create Assignment Rule**.
3. Completa los campos:

| Campo | Descripción |
|-------|-------------|
| **Rule Name** | Nombre de la regla (ej. "Consultas de soporte técnico → Equipo Soporte") |
| **Description** | Explica cuándo debe aplicarse esta regla |
| **Keywords** | Palabras clave que la IA buscará en el título y descripción del TODO |
| **Priority Levels** | Filtra por prioridad: `low`, `medium`, `high` o `urgent` |
| **Team/Department Hint** | Contexto adicional que guía el análisis de la IA |
| **Assign To** | Define si asignas a un departamento completo o a un usuario específico |

4. Haz clic en **Create Rule**.

:::note[Orden de evaluación]
Las reglas se evalúan en orden de prioridad. La primera regla que coincide con el TODO gana. Si ninguna regla coincide, el sistema usa **Round Robin** como respaldo automático.
:::

### Ejemplo de reglas por tipo de negocio

**Clínica / consultorio:**
- Regla 1: keywords "cita, agendar, reagendar" → Recepción
- Regla 2: keywords "resultado, examen, diagnóstico" → Médicos
- Regla 3: keywords "factura, cobro, pago" → Administración

**Tienda / e-commerce:**
- Regla 1: keywords "devolver, cambio, reembolso" → Servicio al cliente
- Regla 2: keywords "pedido, envío, entrega" → Operaciones
- Regla 3: keywords "mayoreo, descuento, cotización" → Ventas

---

## Cuándo activar cada módulo

| Si tu negocio... | Activa... |
|------------------|-----------|
| Gestiona prospectos y ventas activamente | **CRM** |
| Tiene un equipo que da seguimiento a clientes | **TODOs** |
| Opera en más de una ubicación física | **Sucursales / Ubicaciones** |
| Ofrece clases, citas o eventos con cupo | **Time Blocks / Reservaciones** |
| Necesita automatizar flujos de mensajes | **Workflows** |
| Usa Odoo como ERP | **Odoo Sync** |
| Tiene un catálogo con muchos productos sin descripción | **Enriquecimiento IA** |
| Vende productos en distintas tallas, colores o presentaciones | **Variantes de producto** |

---

## Preguntas frecuentes

**¿Activar un módulo tiene costo adicional?**

Depende de tu plan. Algunos módulos están incluidos en todos los planes y otros están disponibles solo en planes superiores. Consulta la sección **Billing** para ver qué incluye tu suscripción actual.

**¿Las reglas de asignación inteligente reemplazan a Round Robin?**

No del todo. Las reglas se evalúan primero. Si ninguna coincide con el TODO entrante, el sistema cae automáticamente al Round Robin como respaldo.

**¿Puedo reordenar las reglas de asignación?**

Sí. Arrastra las reglas en la lista para cambiar el orden en que se evalúan. La regla con mayor prioridad (primera en la lista) se aplica primero.
