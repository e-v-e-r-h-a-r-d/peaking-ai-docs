---
title: Campos del CRM
description: "Renombra los campos estándar de tus oportunidades y crea campos personalizados, incluida la pestaña de la ficha donde aparecen."
sidebar:
  order: 4
---

**Campos del CRM** adapta las oportunidades a tu forma de vender: puedes cambiar cómo se llaman los campos estándar y agregar los tuyos.

:::note[Antes de empezar]
Esta sección aparece solo cuando el módulo **CRM** está activo y solo la editan los usuarios con rol **Master**. Para trabajar con las oportunidades día a día, consulta [CRM](/06-crm-audiencias/).
:::

[CAPTURA PENDIENTE: pantalla Campos del CRM con Etiquetas de campos y Campos personalizados]

## Etiquetas de campos

Cambia cómo aparecen los campos estándar de las oportunidades en tus formularios. Por ejemplo, puedes renombrar **Empresa** como **Sucursal** si así lo llama tu equipo.

1. Escribe el nuevo nombre en el campo que quieres renombrar.
2. Deja en blanco los que quieras conservar con su nombre por defecto.
3. Guarda los cambios.

Los cambios aplican a los formularios de **crear** y de **detalle** de las oportunidades.

### Convertir un campo en lista desplegable

Si agregas **opciones** a un campo, este se mostrará como una **lista desplegable** en los formularios, en lugar de texto libre. Es útil para estandarizar respuestas, como una lista fija de sucursales o de orígenes.

<!-- VERIFICAR: lista exacta de campos estándar renombrables. El artículo anterior decía: Nombre, Empresa, Industria, Email, Teléfono, Etapa, Prioridad y Asignado a. Confirmar contra el UI nuevo. También confirmar que el cambio de "Monto esperado" se refleja en todo el sistema (reportes, kanban). -->

## Campos personalizados

Agrega campos adicionales a tus oportunidades para capturar datos propios de tu proceso de ventas, por ejemplo un *Número de cliente*. Aparecen en los formularios de creación y de detalle, y se guardan en cada oportunidad.

### Crear un campo personalizado

1. Haz clic en **Agregar campo**.
2. Completa el formulario:

| Campo | Qué escribir |
|-------|--------------|
| **Clave (uso interno)** | Minúsculas, números y guion bajo. Empieza con letra. Máximo 50 caracteres |
| **Etiqueta visible** | El nombre que verá tu equipo. Ej.: *Número de cliente* |
| **Tipo de dato** | Texto, Número, Fecha, Verdadero/Falso, JSON estructurado o **Lista desplegable (opciones)** |
| **Pestaña de la ficha** | En qué pestaña de la ficha de la oportunidad aparece el campo |
| **Opciones** | Solo para lista desplegable. **Agrega al menos una opción** |
| **Descripción** *(opcional)* | Para qué sirve el campo. Ayuda a tu equipo y, más adelante, al agente de IA a entender qué capturar |
| **Campo activo** | Muestra el campo en los formularios de oportunidad |

3. Haz clic en **Guardar**.

[CAPTURA PENDIENTE: formulario "Nuevo campo" con el selector Pestaña de la ficha]

### Elegir la pestaña de la ficha

El campo **Pestaña de la ficha** define dónde ve tu equipo el dato al abrir una oportunidad. Por ejemplo, **Financiero** lo muestra junto al monto y la probabilidad de cierre.

<!-- VERIFICAR: lista completa de pestañas de la ficha disponibles en el selector (solo se confirmó "Financiero"). Leer el componente CrmCustomFieldsManager y la ficha de CRM. -->

## Qué cambió de lugar

Dos ajustes que antes se encontraban junto a los campos del CRM ahora viven en otra sección:

| Ajuste | Dónde encontrarlo |
|--------|-------------------|
| Reparto automático de oportunidades (Round Robin) | [Asignación](/08-configuracion/operacion/asignacion/) |
| Notificaciones de asignación (correo y WhatsApp) | [Asignación](/08-configuracion/operacion/asignacion/) |

<!-- VERIFICADO en Settings.tsx: AssignmentNotificationsManager y RoundRobinSettings se renderizan bajo el tab "assignment"; las notificaciones solo si crm_enabled. -->
