---
title: Gestión de Contactos
description: Cómo buscar, crear, editar y organizar contactos en Peaking — incluyendo etiquetas, historial de actividad y datos comerciales.
sidebar:
  order: 1
---

El módulo de **Contactos** centraliza la base de datos de todos tus clientes y prospectos. Cada contacto acumula automáticamente su historial de conversaciones, oportunidades del CRM, carritos, órdenes y bloques de tiempo — todo accesible desde un solo lugar.

---

## Panel principal de Contactos

Al hacer clic en **Contactos** en el panel lateral verás tres métricas en la parte superior:

| Métrica | Qué muestra |
|---------|-------------|
| **Total** | Número total de contactos en tu base de datos |
| **Con Email** | Contactos que tienen correo electrónico registrado |
| **Recientes (7d)** | Contactos creados o activos en los últimos 7 días |

Debajo, la **barra de búsqueda** permite encontrar contactos por nombre, email o teléfono en tiempo real.

![Panel principal de Contactos con KPIs y tabla de contactos](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/13-contactos/panel-contactos.png)

### Tabla de contactos

| Columna | Descripción |
|---------|-------------|
| **Nombre** | Nombre del contacto o empresa. Si tiene etiqueta asignada, aparece como chip de color debajo del nombre |
| **Email** | Correo electrónico registrado |
| **Teléfono** | Número de teléfono |
| **Ciudad** | Ciudad del contacto (si fue registrada) |
| **Referencia** | Campo libre para un código o referencia interna |

Haz clic en los tres puntos (⋮) al final de cada fila para acceder a acciones rápidas sobre ese contacto.

---

## Detalle de un contacto

Al hacer clic en cualquier contacto se abre su ficha completa. En la parte superior verás el nombre, email y el botón **Editar**. Desde aquí también puedes **Enviar plantilla** directamente al contacto o **Agregar a audiencia**.

### Pestañas del historial

| Pestaña | Contenido |
|---------|-----------|
| **Conversaciones** | Historial de todos los chats en cualquier canal |
| **Oportunidades** | Oportunidades de venta vinculadas a este contacto en el CRM |
| **Cotizaciones** | Cotizaciones generadas para este contacto |
| **Órdenes** | Órdenes de compra completadas o en proceso |
| **Tareas** | TODOs y tareas de seguimiento asociadas a este contacto |

![Ficha de contacto con pestañas de historial y acciones](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/13-contactos/carta-contacto.png)

### Campos del contacto

| Campo | Descripción |
|-------|-------------|
| **Email** | Correo electrónico |
| **Teléfono** | Número de contacto |
| **RFC** | Registro fiscal (aplica para México y otros países) |
| **Referencia** | Código o referencia interna |
| **Ciudad** | Ciudad del contacto |
| **Calle** | Dirección completa |
| **País** | País de residencia o empresa |
| **Términos de Pago** | Condiciones comerciales acordadas (ej. 30 días, contado) |
| **Lista de Precios** | La lista de precios asignada a este contacto (ej. Lista general MXN) |

Las etiquetas asignadas al contacto aparecen al final de la ficha como chips de color.

---

## Crear un nuevo contacto

1. Haz clic en **+ Nuevo Contacto** (esquina superior derecha).
2. Completa el formulario:

**Información Básica**
- Nombre (obligatorio)
- Email
- Teléfono
- Referencia

**Dirección**
- Calle · Calle 2 · Ciudad · Código Postal

![Formulario de nuevo contacto con campos de información básica y dirección](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/13-contactos/nuevo-contacto.png)

3. Haz clic en **Crear**.

:::note[Datos adicionales al editar]
Al crear un contacto solo se piden los campos esenciales. Los datos comerciales (Términos de Pago, Lista de Precios), etiquetas y notas se agregan después desde **Editar Contacto**.
:::

---

## Editar un contacto

1. Abre la ficha del contacto y haz clic en **Editar**.
2. El formulario tiene cuatro secciones:

**Información Básica** — Nombre, Email, Teléfono, Referencia.

**Dirección** — Calle, Calle 2, Ciudad, Código Postal, País.

**Comercial** — Términos de Pago y Lista de Precios. Permiten personalizar las condiciones de venta por contacto.

**Etiquetas** — Busca o crea etiquetas y asígnalas. Puedes asignar múltiples etiquetas por contacto.

**Adicional** — Notas internas sobre el contacto (no visibles para el cliente).

3. Haz clic en **Guardar**.

---

## Etiquetas de contactos

Las etiquetas clasifican y filtran contactos por tipo, segmento o cualquier criterio de tu negocio.

### Gestionar etiquetas

Haz clic en **Gestionar Etiquetas** (esquina superior derecha del panel). Desde ahí puedes:

- **Crear** una nueva etiqueta: escribe el nombre, selecciona un color y haz clic en **+**.
- **Ver** todas las etiquetas existentes con su color asignado.
- **Eliminar** las que ya no uses.

![Panel de gestión de etiquetas de contactos](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/13-contactos/gestion-etiquetas-contactos.png)

Los colores disponibles van de neutros (gris, blanco) a tonos pastel (lila, verde, amarillo, rosa, azul, morado, rojo, durazno, menta).

### Asignar etiquetas a un contacto

Desde **Editar Contacto › Etiquetas** — escribe el nombre en el campo de búsqueda o escribe uno nuevo para crearlo al vuelo.

Las etiquetas aparecen como chips de color debajo del nombre del contacto en la tabla principal y en la ficha del contacto.

### Ejemplos de etiquetas útiles

| Etiqueta | Uso sugerido |
|----------|-------------|
| `cliente` | Contactos que ya han comprado |
| `cliente distribuidor` | Distribuidores o mayoristas |
| `cliente ecomm` | Canal e-commerce |
| `clientes usuario final` | Consumidor final |
| `proveedor` | Proveedores del negocio |
| `Interno` | Contactos del propio equipo |
| `Popular` | Clientes de alto volumen o frecuentes |

---

## Cómo se crean los contactos automáticamente

Cada vez que alguien escribe a un canal conectado de Peaking — WhatsApp, Instagram, Messenger o Widget — el sistema crea un contacto automáticamente con el número de teléfono o identificador del canal. No necesitas hacer nada manual.

El agente de IA también **recopila datos durante la conversación** (nombre, email, RFC, preferencias) y los asocia al contacto en tiempo real. Esto garantiza que todo lo que el cliente diga quede vinculado a su perfil para futuras interacciones.

### Contexto del Lead en el Panel de Conversaciones

Cuando abres una conversación en el Panel de Mensajes, el panel derecho muestra el **Contexto del Lead** — el perfil del contacto vinculado a esa conversación. Si la conversación aún no tiene un contacto vinculado, verás el botón **Crear contacto**, que te permite crearlo directamente desde el hilo sin salir del Panel de Mensajes.

:::tip[Vincula siempre un contacto]
Vincular un contacto a la conversación activa el resumen de IA — el agente puede tomar en cuenta el historial y el perfil completo del cliente para dar respuestas más coherentes y personalizadas.
:::

---

## Preguntas frecuentes

**¿Los contactos se crean automáticamente cuando alguien escribe por WhatsApp?**

Sí. Cuando un nuevo número escribe a cualquier canal conectado, Peaking crea el contacto automáticamente con el teléfono. El nombre y email se completan con la información que el cliente proporcione o que el equipo ingrese manualmente.

**¿Cuál es la diferencia entre Contactos y CRM?**

**Contactos** es la base de datos de todas las personas y empresas — su historial completo de actividad. **CRM** es el pipeline activo de oportunidades de venta. No todos los contactos tienen oportunidades abiertas en el CRM; un mismo contacto puede tener cero, una o varias.

**¿Puedo buscar contactos por etiqueta?**

Directamente en la barra de búsqueda puedes buscar por nombre, email o teléfono. Para segmentar por etiqueta y otros atributos, usa el módulo de [Audiencias](/14-audiencias/audiencias-y-segmentos/).

**¿Eliminar un contacto elimina su historial?**

Sí. La eliminación es permanente e incluye el historial de conversaciones vinculado. Si ya no necesitas interactuar con él pero quieres conservar el registro, considera solo remover sus etiquetas activas en lugar de eliminarlo.
