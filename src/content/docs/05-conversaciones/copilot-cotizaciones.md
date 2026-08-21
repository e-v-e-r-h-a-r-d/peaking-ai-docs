---
title: Copilot — cotizaciones desde la conversación
description: Cómo usar el panel Copilot para armar cotizaciones desde el Panel de Mensajes o desde una oportunidad del CRM, sin salir de Peaking.
sidebar:
  order: 5
---

**Copilot** es un panel de apoyo para que tu equipo de ventas arme una cotización mientras atiende a un cliente — busca productos, arma el carrito y genera la cotización sin salir de la conversación ni del CRM. Es una herramienta **manual para el agente humano**: el agente de IA no la invoca por sí solo.

:::note[No es lo mismo que el agente de IA cotizando]
Si tu prompt ya instruye al agente de IA para armar cotizaciones automáticamente durante la conversación, eso es un comportamiento distinto y configurado en el **Estudio de Prompts**. Copilot es el panel que usa una persona del equipo para hacer lo mismo manualmente, con control total sobre lo que se cotiza.
:::

---

## Dónde aparece Copilot

Copilot vive en dos lugares de la plataforma — es el mismo panel en ambos:

| Ubicación | Cómo se abre |
|-----------|--------------|
| **Panel de Mensajes** | Aparece en el panel derecho de la conversación, con la etiqueta **COPILOT** junto al título de la cotización activa |
| **Ficha de una oportunidad del CRM** | Botón **Cotizar con Copilot** en la esquina superior de la ficha del lead |

![Panel Copilot dentro de una conversación de Mensajes, con carrito, cliente y botón para crear la cotización](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/05-conversaciones/copilot-cotizacion-panel.png)

---

## Qué puedes hacer con Copilot

- **Buscar productos** por nombre, SKU o descripción libre de lo que pide el cliente.
- **Armar un carrito** agregando los productos encontrados, con cantidades.
- **Seleccionar el contacto** al que corresponde la cotización (o crear uno nuevo si no existe).
- **Elegir una lista de precios** específica, si tu organización maneja varias.
- **Agregar datos adicionales** como categoría del cliente u otros campos configurados en tu catálogo.
- **Generar la cotización** con el botón **Crear cotización en Odoo**.

---

## De dónde salen los productos que busca Copilot

Copilot busca en el mismo **catálogo de productos** que usa el resto de Peaking — no importa cómo llegaron esos productos ahí:

- Si tu organización tiene **Odoo Sync** activo, el catálogo se sincroniza automáticamente desde Odoo.
- Si administras el catálogo por **importación de Excel**, Copilot cotiza igual con esos productos.

El botón dice **"Crear cotización en Odoo"** porque la cotización final se registra como documento en Odoo — pero el origen de los productos que la componen puede ser cualquiera de los dos métodos. Consulta [Catálogo de Productos](/07-productos-pagos/catalogo-de-productos/) para ver cómo se administra el catálogo.

---

## Cómo armar una cotización con Copilot

1. Abre la conversación del cliente en **Mensajes**, o abre su oportunidad en el **CRM** y haz clic en **Cotizar con Copilot**.
2. En el buscador de Copilot, escribe el nombre, SKU o una descripción de lo que el cliente pide.
3. Agrega los productos encontrados al carrito con la cantidad correspondiente.
4. Selecciona el **contacto** — si la conversación ya tiene un lead vinculado, aparece preseleccionado.
5. Si aplica, elige la **lista de precios** y completa los **datos adicionales** del cliente.
6. Revisa el **total** en la parte inferior del panel.
7. Haz clic en **Crear cotización en Odoo**.

:::tip[Usa Copilot sin salir del CRM]
Si ya estás revisando una oportunidad en el CRM, el botón **Cotizar con Copilot** de la ficha del lead abre el mismo panel — no necesitas ir al Panel de Mensajes para cotizar.
:::

---

## Preguntas frecuentes

**¿El agente de IA puede usar Copilot automáticamente?**

No. Copilot es una herramienta de uso manual para el equipo humano. Si quieres que el agente de IA arme cotizaciones por sí solo durante la conversación, esa es una capacidad distinta que se configura en el Estudio de Prompts.

**¿Necesito tener Odoo conectado para usar Copilot?**

No necesariamente para buscar y armar el carrito — Copilot trabaja con el catálogo de productos de tu organización, sin importar si lo administras por Odoo Sync o por importación de Excel. El botón final crea el documento de cotización en Odoo.

**¿Puedo editar una cotización después de crearla?**

Las ediciones posteriores a la creación se hacen desde Odoo, ya que ahí queda registrado el documento final.

**¿Copilot reemplaza a Pedidos y Carritos?**

No. [Pedidos y Carritos](/12-pedidos-carritos/pedidos-y-carritos/) muestra las órdenes y carritos generados por el flujo de compra del cliente (vía Stripe o Mercado Pago). Copilot es una herramienta previa, para que el equipo de ventas arme y envíe una cotización manualmente durante la atención.
