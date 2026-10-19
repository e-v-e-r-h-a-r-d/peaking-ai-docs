---
title: Productos
description: "Tu catálogo de productos y servicios: crear, variantes, atributos y ficha técnica, categorías, unidades, prioridad para el agente, importación y enriquecimiento con IA."
sidebar:
  order: 1
---

**Productos** (*Catálogo de Productos — Gestiona tu catálogo de productos y servicios*) es el catálogo que el agente consulta para responder, recomendar y cotizar. Lo encuentras en el menú lateral, grupo **Catálogo › Productos**.

:::tip[¿Usas Odoo?]
Si conectaste Odoo, tus productos y categorías llegan **solos** al sincronizar y no necesitas capturarlos aquí. Ver [Herramientas y Odoo](/08-configuracion/canales-e-integraciones/odoo/#paso-3-sincroniza-productos-y-contactos).
:::

[CAPTURA PENDIENTE: pantalla Productos con la tabla, los filtros, la barra de selección y el panel lateral de un producto abierto]

:::tip[¿Prefieres que lo configuremos contigo?]
Con el [Paquete de implementación](/01-primeros-pasos/paquete-de-implementacion/) puedes cargar todo tu catálogo, fichas técnicas e imágenes de una vez, validando SKU y precios antes de cargar.
:::

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Agregar un producto | [Crear un producto](#crear-un-producto) |
| Vender tallas, colores o medidas | [Variantes](#variantes) |
| Que el agente encuentre mejor mis productos | [Ficha técnica y atributos](#ficha-técnica-y-atributos) |
| Que el agente recomiende un producto primero | [Prioritario](#prioritario) |
| Organizar por categorías o unidades | [Categorías y unidades](#categorías-y-unidades) |
| Cargar muchos productos | [Importar Excel](#importar-excel) |
| Generar descripciones automáticas | [Enriquecer con IA](#enriquecer-con-ia) |
| Desactivar o borrar varios | [Acciones en lote](#acciones-en-lote) |

## La pantalla

Arriba: **Buscar productos…**, el botón **Agregar Producto** y accesos a **Importar Excel**, **Atributos**, **Gestionar Categorías** y **Gestionar Unidades**. Puedes ver el catálogo como **Vista tabla** o **Vista tarjetas**. En la barra lateral aparecen **Categoría** y **Familia** (Peaking agrupa tus productos solo, según lo que son).

La tabla muestra **Imagen**, **Nombre**, **SKU**, **Precio**, **Tipo**, **Unidad**, **Inventario**, **Estado**, **Prioritario** y **Acciones**. Filtros: **Tipo de Producto**, **Estado** y **Moneda**. Abajo: *«Mostrando X de Y productos»*.

:::note[Quién puede editar]
Crear, editar y borrar es para **Master** y **Administrador**. Los demás ven el catálogo en **solo lectura**.
:::

## Crear un producto

1. Haz clic en **Agregar Producto** (*Crear Producto*).
2. Solo son obligatorios **Nombre**, **Tipo**, **Precio** y **Unidad**; lo demás se completa después.
3. Haz clic en **Crear producto**.

El panel del producto se organiza en pestañas:

| Pestaña | Qué contiene |
|---|---|
| **General** | Nombre, SKU, Tipo (**Físico**, **Servicio** o **Digital**), Categoría e Imagen principal y galería (JPG, PNG, WebP o GIF, máx. 5 MB) |
| **Para el agente** | Los textos con que el agente describe y recomienda el producto en el chat (**Descripción Corta**, **Descripción**, **Descripción generada por IA**) y las **Etiquetas** |
| **Precio e inventario** | **Precio**, **Moneda**, **Costo**, **Unidad de Medida**, **Rastrear Inventario**, **Cantidad en Stock** y **Umbral de Stock Bajo** |
| **Ficha técnica** | Atributos (material, medida, color…) |
| **Envío y más** | **Peso (kg)** y dimensiones **Largo**, **Ancho**, **Alto** (cm), las **sucursales** donde está disponible y los **Productos Opcionales** que el agente puede ofrecer como complemento. Los servicios no pueden tener dimensiones físicas |
| **Variantes** | Combinaciones del producto (si las usa) |

Si cierras con cambios sin guardar, el panel pregunta *«¿Descartar los cambios?»*.

<!-- VERIFICAR: dónde queda el interruptor «Producto Activo» y el formato esperado de «Importar Excel». La distribución de campos por pestaña está confirmada en dev1 (productFormTabs.ts). -->

## Variantes

Activa **Este producto tiene variantes** para crear de una vez un producto base y cada combinación (talla, color, medida…) con su propio **SKU**, **precio** y stock:

1. Elige los valores de cada atributo (las combinaciones se arman solas).
2. Pon el precio en **Precio e inventario** o en cada variante: sin precio propio, una variante usa el del producto base.
3. Crea. El producto base se marca como **Producto con variantes**.

El precio, costo, inventario y medidas se **copian** a todas las variantes y luego puedes ajustarlos una por una (**Agregar variante**, **Editar datos generales**). La ficha técnica de un producto con variantes se completa en cada variante. Si aún no tienes atributos, créalos en **Atributos** (por ejemplo «Talla» con S, M, L).

## Ficha técnica y atributos

Los **atributos** (material, medida, color…) ayudan al agente a **encontrar el producto cuando el cliente lo describe con sus palabras**. Peaking los **detecta** por ti (**Detectado por Peaking**); puedes corregirlos o **Volver a extraer**.

Si tienes productos sin ficha verás *«N productos sin ficha técnica»* con **Extraer atributos** (o **Extraer los primeros N**). Para compartir un PDF técnico con el cliente, ver [Fichas técnicas](/04-base-conocimientos/#fichas-técnicas).

## Prioritario

La columna **Prioritario** marca un producto para que **el agente lo recomiende primero** cuando sea relevante.

## Categorías y unidades

- **Gestionar Categorías**: crea, edita y organiza categorías (nombre de hasta 100 caracteres). Las categorías de Odoo llegan solas.
- **Gestionar Unidades**: unidades de medida del **Sistema** y **Personalizadas** (nombre y abreviación).

## Importar Excel

**Importar Excel** carga muchos productos a la vez desde un archivo.

## Enriquecer con IA

**Enriquecer con IA** genera descripciones automáticas para los productos que no tienen, mejorando su búsqueda. Verás cuántos **Productos elegibles** hay y, al terminar, cuántos quedaron **Enriquecidos**, **Omitidos** y **Fallidos**.

## Acciones en lote

Selecciona productos con las casillas (**Seleccionar todos**): puedes **Desactivar seleccionados** (si alguno tiene variantes, estas también se desactivan) o **Eliminar seleccionados** (es permanente). Eliminar uno solo pide confirmar también.

## Preguntas frecuentes

**El agente no recomienda mi producto.**
Revisa que esté **Activo**, que tenga descripción y atributos, y márcalo como **Prioritario** si debe ofrecerse primero.

**No puedo crear un servicio con dimensiones.**
Los servicios no pueden tener dimensiones físicas.

**¿Cómo cobra el agente estos productos?**
Con una pasarela conectada: ver [Pagos](/08-configuracion/canales-e-integraciones/pagos/) y [Pedidos y Carritos](/12-pedidos-carritos/).
