---
title: Ajustes del pipeline
description: "Etapas, tipos de actividad, motivos de ganada y perdida, importar y exportar oportunidades, reporte comercial y oportunidades eliminadas."
sidebar:
  order: 2
---

**Ajustes del pipeline** (*Etapas, actividades y motivos de pérdida que usa todo el equipo*) se abre con el botón **Ajustes** del [CRM](/06-crm-audiencias/). Reúne todo lo que se configura una vez para todo el equipo.

[CAPTURA PENDIENTE: pantalla Ajustes del pipeline con los bloques Etapas, Tipos de actividad, Motivos, Importar y exportar y Oportunidades eliminadas]

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Crear, ordenar o cambiar etapas | [Etapas](#etapas) |
| Pedir correo para entrar a una etapa | [Requiere correo](#requiere-correo) |
| Enviar una conversión a Meta al llegar a una etapa | [Conversión a Meta](#enviar-conversión-a-meta) |
| Agregar tipos de actividad | [Tipos de actividad](#tipos-de-actividad) |
| Pedir un motivo al ganar o perder | [Motivos](#motivos-de-ganada-y-de-pérdida) |
| Exportar o importar oportunidades | [Importar y exportar](#importar-y-exportar) |
| Sacar un reporte de ventas en Excel | [Reporte comercial](#reporte-comercial) |
| Recuperar una oportunidad borrada | [Eliminadas](#oportunidades-eliminadas) |

## Etapas

Las **etapas** son las columnas de tu pipeline. En **Etapas** ves cada una con su marca de **Ganada** o **Perdida**; **Editar etapas** abre **Gestionar Etapas**. El orden se cambia **arrastrando en el Pipeline**.

### Crear o editar una etapa

En **Gestionar Etapas**, **Crear Nueva Etapa**:

| Campo | Qué es |
|---|---|
| **Nombre** | Ej. *Prospecto*, *Calificado*, *Propuesta* |
| **Descripción** | Opcional |
| **Color** | Para distinguirla en el tablero |
| **Etapa ganada** / **Etapa perdida** | Marca el cierre. Una etapa **no puede ser ganada y perdida** a la vez |
| **Por defecto** | La etapa donde entran las oportunidades nuevas |

Eliminar una etapa pide confirmar: sus oportunidades **deben reasignarse** a otra etapa.

### Requiere correo

Con **Requiere correo**, el equipo no puede mover ni crear oportunidades en esa etapa sin correo (la etapa muestra la insignia **Correo**). **No bloquea** al agente de IA, los workflows, el formulario web ni la importación.

### Enviar conversión a Meta

Cada etapa puede **Enviar conversión a Meta**: cuando una oportunidad entra, se envía un evento a tu dataset de Conversions API (con el click id del anuncio si existe). Configura **Nombre del evento en Meta**, **Valor (opcional)** y **Moneda**. Requiere [Meta CAPI](/08-configuracion/canales-e-integraciones/meta-ads-y-capi/).

## Tipos de actividad

**Tipos de actividad** son las categorías de las actividades que programas (Llamada, Correo, Reunión, Tarea, Nota…). **Agregar o editar tipos** abre **Gestionar Tipos de Actividad**:

- **Crear Nuevo Tipo** con un nombre (hasta 50 caracteres; ej. *Llamada, Email, Reunión, Demo*), o **Crear por defecto** para cargar los básicos.
- Eliminar un tipo que ya se usó **lo desactiva** en lugar de borrarlo.

## Motivos de ganada y de pérdida

**Configurar motivos** abre dos listas:

| Lista | Cuándo se pide |
|---|---|
| **Motivos de pérdida** | **Siempre**, al mover una oportunidad a una etapa de pérdida (desde el kanban o la ficha) |
| **Motivos de ganada** | Solo si hay **al menos uno activo**; entonces es obligatorio al ganar |

En cada lista: **Agregar**, **Subir / Bajar** para ordenar, **Activo** y **Eliminar**. Si no personalizas, la cuenta usa los **Predeterminados**; **Usar los predeterminados como base** los copia para editarlos. En el bloque verás también cuántas oportunidades perdidas o ganadas tiene cada motivo (*«de las perdidas»*, *«de las ganadas»*).

## Importar y exportar

| Opción | Qué hace |
|---|---|
| **Exportar a Excel** | Exporta oportunidades **respetando la búsqueda y los filtros** del Pipeline |
| **Importar oportunidades** | **Sube un Excel o CSV** con empresa, contacto, monto, etapa y responsable |

## Reporte comercial

**Reporte comercial › Generar** crea un Excel con monto, tipo de alta, fechas, motivos y un **resumen por vendedor** (segunda hoja). Siempre incluye: oportunidad, responsable, etapa, estado, monto, fecha de entrada a Peaking, motivo de no venta, motivo de ganada y fecha de cierre. Eliges qué campo de tu cuenta alimenta columnas como **Tipo de alta**, **Tribu**, **Fecha de contacto** y **Motivo de no compra** (o **no incluir**); se recuerda para la próxima vez. Respeta los filtros del Pipeline y se descarga con **Descargar Excel**. Si tu cuenta no tiene campos personalizados activos esas columnas saldrán vacías.

## Oportunidades eliminadas

**Oportunidades eliminadas** lista lo que se borró, con **Borrada por** y **Restaurar** (*«Oportunidad restaurada»*). **Ver todas** abre la lista completa (la papelera).

## Preguntas frecuentes

**Mis oportunidades no se mueven a «Ganada».**
Si definiste motivos de ganada se piden antes de confirmar; elige uno.

**¿Quién puede cambiar los ajustes?**
Quienes administran la cuenta.

**Importé oportunidades y no aparecen.**
Revisa que el archivo tenga empresa, contacto, monto, etapa y responsable, y limpia los filtros del Pipeline.
