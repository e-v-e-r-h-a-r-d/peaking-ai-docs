---
title: Audiencias y segmentos
description: Cómo crear grupos de contactos basados en atributos para dirigir campañas de mensajería saliente y broadcasts personalizados.
sidebar:
  order: 1
---

Las **Audiencias** son grupos de contactos que comparten una característica en común — canal de entrada, etiqueta asignada, nivel de actividad, atributo personalizado, entre otros. Se usan como destino de las **Campañas y Broadcasts**: en lugar de escribirle a cada contacto uno por uno, defines una audiencia y le envías el mensaje a todos sus miembros de una sola vez.

:::note[Audiencias ≠ Pipeline del CRM]
Las **Audiencias** agrupan contactos para mensajería saliente masiva.
El **CRM** gestiona el seguimiento individual de oportunidades de venta.
Son módulos distintos que comparten la misma base de contactos.
:::

---

## Acceder a Audiencias

En el panel lateral, ve a **CRM** y luego selecciona la pestaña o sección de **Audiencias**. Verás la lista de todas las audiencias creadas en tu cuenta.

---

## Qué es un segmento

Un segmento es el conjunto de filtros que define quiénes pertenecen a una audiencia. Puedes combinar uno o varios criterios:

| Criterio | Ejemplos |
|----------|----------|
| **Canal de origen** | Solo contactos de WhatsApp · Solo del Widget web |
| **Etiqueta (tag)** | Contactos con tag "Lead" · con tag "Cliente VIP" |
| **Estado de conversación** | Contactos con conversaciones resueltas · activas |
| **Atributo personalizado** | Ciudad, industria, interés declarado, plan contratado |
| **Actividad reciente** | Sin interacción en los últimos 30 días · activos esta semana |
| **Fuente del lead** | Contactos originados por campaña específica |

Combina criterios con los operadores **Y (todos)** — el contacto debe cumplir todos los filtros — u **O (cualquiera)** — basta con cumplir uno.

---

## Crear una audiencia

1. Ve a **Audiencias** dentro del módulo de CRM.
2. Haz clic en **+ Nueva Audiencia**.
3. Escribe un **nombre descriptivo** (ej. "Leads WhatsApp sin seguimiento — Abril").
4. Agrega los **filtros** que definen el segmento:
   - Selecciona el criterio del menú desplegable.
   - Define el valor (ej. canal = WhatsApp, tag = Lead).
   - Agrega más filtros con **+ Agregar filtro**.
5. Elige el combinador lógico: **Y** u **O**.
6. Haz clic en **Vista previa** para ver cuántos contactos cumplen los criterios antes de guardar.
7. Haz clic en **Guardar audiencia**.

:::tip[Nombra con contexto]
Incluye en el nombre el propósito y la fecha: "Clientes inactivos — Q1 2026" es más útil que "Segmento 3". Las audiencias no se actualizan en tiempo real por defecto — el nombre con fecha te ayuda a saber cuándo fue creada.
:::

---

## Vista previa de la audiencia

Antes de guardar, la **Vista previa** muestra:

- El número total de contactos que cumplen los filtros.
- Una muestra de los primeros registros (nombre, canal, última interacción).

Si el número es muy alto o muy bajo, ajusta los filtros antes de guardar.

---

## Audiencias dinámicas vs. estáticas

| Tipo | Comportamiento |
|------|---------------|
| **Dinámica** | Se recalcula automáticamente — cuando un contacto cumple o deja de cumplir los criterios, entra o sale de la audiencia |
| **Estática** | Foto fija del momento en que se creó — los contactos no cambian aunque cambien sus atributos |

Usa audiencias **dinámicas** para campañas recurrentes (ej. "nuevos leads esta semana").
Usa audiencias **estáticas** para campañas puntuales donde necesitas controlar exactamente quién recibe el mensaje.

---

## Usar una audiencia en una campaña

Una vez guardada, la audiencia está disponible como destinatario al crear una Campaña o Broadcast.

1. Ve a **Campañas** (dentro de la misma sección).
2. Crea una nueva campaña o broadcast.
3. En el campo **Audiencia**, selecciona la audiencia que creaste.
4. Configura el mensaje, plantilla y canal.
5. Programa o envía la campaña.

Consulta el artículo [Campañas y broadcasts](/14-audiencias/campanas-y-broadcasts/) para los detalles de envío.

---

## Editar o eliminar una audiencia

- **Editar** — haz clic en el ícono de lápiz en la lista de audiencias. Puedes cambiar el nombre y los filtros.
- **Eliminar** — haz clic en el ícono de papelera. Esto no elimina los contactos, solo la definición del segmento. Si la audiencia ya fue usada en una campaña enviada, el historial de envío se conserva.

:::caution[Campañas activas]
No elimines una audiencia si está vinculada a una campaña programada que aún no se ha enviado. Primero cancela o reasigna la campaña.
:::

---

## Buenas prácticas

**Segmenta con propósito.** Antes de crear una audiencia, define qué mensaje vas a enviarle y por qué ese grupo específico lo recibiría mejor que toda tu base.

**No satures a los mismos contactos.** Revisa que los mismos contactos no estén en varias audiencias que reciban broadcasts en fechas cercanas.

**Valida el tamaño.** Una audiencia de 5 contactos puede ser un error de filtro. Una de 50,000 puede ser demasiado amplia para un mensaje personalizado. Usa la vista previa para ajustar.

**Actualiza tus segmentos.** Los atributos de los contactos cambian — un "lead nuevo" de enero ya no lo es en abril. Revisa y recrea audiencias para campañas recurrentes.

---

## Preguntas frecuentes

**¿Cuántas audiencias puedo crear?**

No hay un límite estricto documentado. Crea las que necesites, pero mantenlas organizadas con nombres descriptivos.

**¿Una audiencia se actualiza sola cuando cambia un contacto?**

Depende del tipo. Las dinámicas sí; las estáticas no. Si no estás seguro del tipo, revisa la configuración de la audiencia.

**¿Puedo usar una audiencia para varios canales al mismo tiempo?**

La audiencia agrupa contactos sin importar su canal. Sin embargo, cuando configuras la campaña o broadcast, seleccionas el canal de envío. Si un contacto de la audiencia no está en ese canal, no recibirá el mensaje.

**¿Qué pasa si un contacto se desinscribe o bloquea el número?**

Peaking excluye automáticamente los contactos que han bloqueado el número o solicitado no recibir mensajes, incluso si están en la audiencia seleccionada.
