---
title: Catálogo de Productos
description: Cómo crear y gestionar tu catálogo de productos en Peaking para que el agente de IA pueda vender de forma inteligente en cada conversación.
sidebar:
  order: 1
---

El **Catálogo de Productos** es el inventario digital que le da al agente de IA acceso a todo lo que vendes. Cuando un cliente pregunta "¿qué productos tienen?" o "¿cuánto cuesta X?", el agente consulta el catálogo en tiempo real para responder con precisión — precio correcto, descripción exacta, disponibilidad actualizada.

---

## Por qué es importante configurar bien el catálogo

Un catálogo bien estructurado le da al agente:
- **Contexto de producto** — nombres, descripciones y características para responder preguntas.
- **Precios exactos** — sin errores ni estimaciones.
- **Disponibilidad** — el agente puede confirmar si hay stock antes de comprometer una venta.
- **Capacidad de cotizar** — genera cotizaciones y órdenes directamente desde la conversación.

---

## Activar el Catálogo de Productos

Si el módulo no aparece en el panel lateral:

1. Ve a **Configuración › Funcionalidades**.
2. Localiza **Catálogo de Productos** y activa el toggle.
3. El ícono de **Productos** aparece en el panel lateral.

---

## Panel Principal del Catálogo

Al hacer clic en **Productos** verás la tabla principal con todos tus productos. Cada fila muestra:

| Columna | Descripción |
|---------|-------------|
| **Nombre** | El nombre del producto tal como lo verá el agente |
| **SKU** | Código de referencia interno |
| **Precio** | Precio de venta configurado |
| **Inventario** | Stock disponible (si está activado el control de inventario) |
| **Categoría** | Grupo al que pertenece el producto |
| **Estado** | Activo · Inactivo |

### Funciones de gestión superior

En la parte superior del panel encontrarás:

| Botón | Función |
|-------|---------|
| **+ Agregar Producto** | Crea un nuevo producto manualmente |
| **Importar** | Carga productos masivamente desde un archivo CSV |
| **Exportar** | Descarga el catálogo completo en CSV |
| **Categorías** | Gestiona las categorías del catálogo |
| **Buscar** | Busca por nombre, SKU o categoría |

---

## Agregar un Producto Manualmente

Haz clic en **+ Agregar Producto**. Se abrirá el formulario de creación con las siguientes secciones:

### Nombre

- Escribe el nombre del producto tal como quieres que el agente lo mencione en las conversaciones.
- Sé específico: "Tubería PVC 4 pulgadas" es mejor que "Tubería".

### Descripción

- Detalla las características principales del producto.
- El agente usa esta descripción para responder preguntas técnicas del cliente.
- Incluye: material, dimensiones, usos, compatibilidades.

### Precio e Inventario

| Campo | Descripción |
|-------|-------------|
| **Precio base** | El precio de venta al público |
| **Precio de costo** | Costo interno (no visible para el agente ni el cliente) |
| **Moneda** | La moneda de tu cuenta (MXN, USD, COP, etc.) |
| **Control de inventario** | Activa para rastrear el stock disponible |
| **Stock disponible** | Cantidad en inventario (si control de inventario está activo) |
| **Inventario agotado** | Qué hace el agente cuando no hay stock: bloquear venta o seguir vendiendo |

### Configuración

| Campo | Descripción |
|-------|-------------|
| **SKU** | Código de referencia único del producto |
| **Estado** | Activo (visible para el agente) · Inactivo (el agente no puede venderlo) |
| **Categoría** | Asigna el producto a una categoría |
| **Campos dinámicos** | Variables como talla, color, cantidad que el agente puede preguntar al cliente |

:::tip[Campos dinámicos]
Si tu producto tiene variantes (tallas, colores, versiones), usa los **campos dinámicos** para que el agente recopile esa información del cliente antes de generar la orden. Ejemplo: `{{talla}}`, `{{color}}`.
:::

1. Haz clic en **Guardar** cuando hayas completado todos los campos obligatorios.
2. El producto aparecerá en la tabla principal como **Activo**.

---

## Organizar por Categorías

Las categorías agrupan productos para que el agente pueda responder preguntas como "¿qué tienen en la categoría Plomería?".

### Crear una categoría

1. En el panel principal de Productos, haz clic en **Categorías**.
2. Haz clic en **+ Nueva Categoría**.
3. Escribe el nombre y una descripción opcional.
4. Guarda.

### Asignar productos a categorías

Puedes asignar la categoría desde el formulario de cada producto, o seleccionar múltiples productos en la tabla y usar **Acciones en lote › Asignar categoría**.

### Gestión de categorías

Desde la pantalla de Categorías puedes:
- **Editar** el nombre o descripción de una categoría.
- **Eliminar** una categoría (los productos no se eliminan, solo pierden su categoría).
- **Reordenar** las categorías según cómo quieres que el agente las presente.

---

## Declarar el Catálogo en el Estudio de Prompts

Para que el agente de IA use el catálogo activamente durante las conversaciones, debes declarar la herramienta en el Estudio de Prompts.

### Cómo activar la herramienta

1. Ve a **Estudio de Prompts** y abre el Prompt principal.
2. Desplázate a la sección **Configuración de Herramientas**.
3. Haz clic en **Catálogo de Productos**. La herramienta aparecerá listada.
4. Completa el campo **¿Cuándo ejecutar esta herramienta?**.

### Ejemplo de instrucción

```
Usa el Catálogo de Productos cuando el cliente pregunte por precios,
disponibilidad o características de cualquier producto. Antes de generar
una cotización o una orden, verifica siempre que el producto esté
disponible y que hayas confirmado la cantidad con el cliente.

Si el cliente solicita un producto que no existe en el catálogo,
indícale que no está disponible y ofrece alternativas similares.
```

---

## Cómo gestionar el catálogo

**Actualizar precios** — Haz clic en el producto y edita el campo de precio. Los cambios aplican inmediatamente para todas las conversaciones nuevas.

**Desactivar un producto** — Cambia el estado a **Inactivo**. El agente no podrá venderlo hasta que lo vuelvas a activar.

**Importación masiva** — Usa el botón **Importar** para cargar un CSV con múltiples productos. Descarga la plantilla de importación desde ese mismo botón para asegurarte del formato correcto.

**Eliminar un producto** — Solo elimina productos que nunca hayan tenido órdenes. Si tiene historial de ventas, desactívalo en su lugar para conservar el registro.

---

## Preguntas frecuentes

**¿Cuántos productos puedo tener en el catálogo?**

El límite depende de tu plan. Consulta la sección de Billing para ver el límite de tu cuenta.

**¿El agente puede vender productos inactivos?**

No. Solo los productos en estado **Activo** son visibles para el agente. Los inactivos quedan excluidos de búsquedas y cotizaciones.

**¿Puedo tener productos sin precio?**

No es recomendable. Si un producto no tiene precio, el agente no podrá generar cotizaciones ni órdenes para ese ítem. Siempre define un precio antes de activarlo.

**¿Cómo actualizo el inventario cuando llega un nuevo lote?**

Edita el producto y actualiza el campo **Stock disponible**. También puedes hacer ajustes de inventario en lote desde la importación CSV.

**¿Los productos del catálogo se sincronizan con Odoo o HubSpot?**

Si tienes configurada la integración con Odoo, el agente puede consultar inventario de Odoo en tiempo real. Para sincronización bidireccional de catálogo, consulta la documentación de [Integraciones](/09-integraciones-partner/odoo-hubspot-zoho/).
