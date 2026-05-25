---
title: Catálogos de Datos
description: Cómo conectar fuentes de datos externas a Peaking mediante APIs para que el agente consulte información en tiempo real.
sidebar:
  order: 4
---

Los **Catálogos de Datos** permiten conectar Peaking con cualquier fuente de datos externa que tenga una API — inventarios, bases de datos de productos, sistemas de precios, ERPs, o cualquier servicio con un endpoint accesible. Una vez conectado, el agente de IA puede consultar esa fuente en tiempo real durante una conversación.

---

## Qué es un Catálogo de Datos

A diferencia de las integraciones de herramientas (que crean registros o ejecutan acciones), un Catálogo de Datos es principalmente **de lectura** — el agente consulta la fuente y usa la respuesta para responder al cliente.

**Ejemplos de uso:**
- El cliente pregunta "¿tienen el producto X en stock?" → el agente consulta tu inventario vía API y responde con disponibilidad real.
- El cliente pide el precio de un servicio → el agente consulta la lista de precios actualizada.
- El cliente quiere el estado de su pedido → el agente consulta el ID del pedido en tu sistema.

---

## Acceder a Catálogos de Datos

1. En el panel lateral, haz clic en **Integraciones**.
2. Selecciona la pestaña **Catálogos de Datos**.
3. Verás la lista de catálogos conectados (vacía si aún no has agregado ninguno).

![Panel de Catálogos de Datos con formulario de conexión a API externa](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/09-integraciones/catalogo-datos-externo.png)

---

## Agregar un Catálogo de Datos

1. Haz clic en **+ Añadir Catálogo de Datos**.
2. Completa el formulario:

| Campo | Descripción |
|-------|-------------|
| **Name** | Nombre identificador del catálogo (ej. "Inventario Principal", "Lista de Precios MX") |
| **Description** | Describe qué datos contiene esta fuente y para qué se usa |
| **API Endpoint URL** | URL completa del endpoint que retorna los datos (ej. `https://api.miempresa.com/inventario`) |
| **HTTP Method** | Método de la llamada — **GET** para consultar datos (más común) o **POST** si la API requiere enviar parámetros en el cuerpo |
| **Authentication Type** | Tipo de autenticación: **Bearer Token** (más común), API Key en header, o sin autenticación |
| **Authentication Header** | Nombre del header de autenticación (por defecto: `Authorization`) |
| **API Key / Token** | El token o clave que valida el acceso a la API |

3. Haz clic en **Guardar** (o el botón de confirmación del formulario).

---

## Qué datos debe retornar la API

El endpoint que conectes debe retornar los datos en formato **JSON**. Peaking leerá la respuesta y el agente la interpretará para responder al cliente.

**Ejemplo de respuesta esperada:**

```json
{
  "producto": "Silla Ergonómica Pro",
  "sku": "SILLA-001",
  "stock": 42,
  "precio": 3500,
  "moneda": "MXN",
  "disponible": true
}
```

Cuanto más clara y estructurada sea la respuesta de tu API, mejor podrá interpretarla el agente.

:::tip[Documenta el catálogo]
Usa el campo **Description** para describir qué datos retorna la API y qué campos son relevantes. El agente usa esta descripción para saber cuándo y cómo consultar el catálogo.
:::

---

## Declarar el Catálogo en el Estudio de Prompts

Un Catálogo de Datos conectado no se usa automáticamente. Debes indicarle al agente cuándo consultarlo:

1. Ve al **Estudio de Prompts** y abre el prompt correspondiente.
2. En **Configuración de Herramientas**, selecciona el catálogo que creaste.
3. En el campo **¿Cuándo ejecutar esta herramienta?**, escribe la condición. Ejemplo:

```
Cuando el cliente pregunte por disponibilidad, precio o stock de algún
producto, consulta el Catálogo de Inventario antes de responder.
Usa el campo "disponible" para confirmar si hay stock y "precio" para
indicar el costo actual. Si el producto no está en la respuesta,
informa que no se encontró en el catálogo.
```

---

## Preguntas frecuentes

**¿Puedo conectar múltiples catálogos?**

Sí. Puedes agregar varios catálogos — por ejemplo, uno de inventario y otro de lista de precios. El agente usará el que corresponda según las instrucciones de cada herramienta en el prompt.

**¿La API se consulta en tiempo real?**

Sí. Cada vez que el agente necesita consultar el catálogo, hace una llamada en vivo al endpoint configurado. Los datos siempre son los más actualizados.

**¿Qué pasa si la API tarda en responder o falla?**

Si el endpoint no responde dentro del tiempo límite, el agente puede indicar al cliente que la información no está disponible en ese momento y ofrecer un seguimiento manual.

**¿Puedo usar una API que requiere parámetros dinámicos (ej. el SKU del producto)?**

Depende de cómo esté estructurado el endpoint. Si la API acepta parámetros en la URL (ej. `https://api.miempresa.com/producto?sku=SILLA-001`), el agente puede construir la URL dinámicamente si así lo instruyendo en el prompt. Consulta a tu equipo técnico para verificar la estructura del endpoint.

**¿Mis datos están seguros?**

La API Key y el token se almacenan de forma encriptada en Peaking. Las llamadas al endpoint se realizan desde los servidores de Peaking usando HTTPS. La información que retorna el endpoint la procesa el agente en el contexto de la conversación.
