---
title: Plantillas de prompt
description: "Parte de un prompt ya armado: busca una plantilla por objetivo o industria, personalízala y publícala."
sidebar:
  order: 3
---

Las **plantillas de prompt** son prompts completos y probados que puedes usar como punto de partida en lugar de escribir desde cero. Las encuentras en el editor, con el botón **Usar plantilla** (ver [Crear y editar un prompt](/05-agente-ia/estudio-de-prompts/crear-y-editar-un-prompt/#generar-usar-plantilla-y-mejorar-con-ia)).

[CAPTURA PENDIENTE: buscador de plantillas del Estudio de Prompts con el campo de búsqueda y varias tarjetas de plantilla]

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Encontrar una plantilla para mi negocio | [Buscar una plantilla](#buscar-una-plantilla) |
| Usarla y dejarla lista | [Usar y personalizar](#usar-y-personalizar) |
| Entender de qué partes se compone | [Estructura de una plantilla](#estructura-de-una-plantilla) |
| Ver qué plantillas existen | [Plantillas disponibles](#plantillas-disponibles) |
| Partir de cero con ayuda de la IA | [Constructor de Prompts con IA](/05-agente-ia/estudio-de-prompts/crear-y-editar-un-prompt/#generar-usar-plantilla-y-mejorar-con-ia) |

## Buscar una plantilla

En el editor, haz clic en **Usar plantilla**. Escribe una palabra clave en el buscador (por ejemplo *clínica*, *citas*, *tienda*, *leads* o *instagram*) y verás las plantillas que coinciden. Cada tarjeta muestra su título, una descripción y su categoría.

## Usar y personalizar

1. Elige la plantilla. Peaking pregunta *«¿Reemplazar el contenido actual?»*: al aceptar se reemplazan las **Instrucciones**, el **Flujo** y los **Ejemplos**. No cambian los datos generales, los canales ni las herramientas.
2. Reemplaza los marcadores entre dobles llaves, como `{{brand}}`, por los datos reales de tu negocio. Algunas plantillas también incluyen `{{sucursales}}` y `{{zona_cobertura}}`.
3. Ajusta el tono, los límites y los casos de escalamiento a tu operación.
4. Prueba en el [Laboratorio de Pruebas](/05-agente-ia/estudio-de-prompts/probar-publicar-y-versiones/) y publica.

:::caution[No publiques con marcadores sin reemplazar]
Si queda un `{{brand}}` sin cambiar, el agente lo puede repetir tal cual a tus clientes. Busca las llaves dobles antes de publicar.
:::

También puedes pedirle a **Mejorar con IA** que pula la plantilla ya personalizada.

## Estructura de una plantilla

Todas siguen las mismas secciones, para que sean fáciles de leer y de editar:

| Sección | Qué define |
|---|---|
| **Objetivo** | Qué debe lograr el agente (agendar, calificar, resolver…) |
| **Personalidad** | Tono, largo de las respuestas, uso de emojis |
| **Flujo** | Los pasos de la conversación: saludo, preguntas de calificación y cierre |
| **Límites** | Lo que el agente no debe prometer ni hacer |
| **Escala cuando** | Los casos en que pasa la conversación a una persona |
| **Idioma** | En qué idioma responde |

Ejemplo de la plantilla **Agendamiento de Citas**:

```
# Asistente de Agenda - {{brand}}

## OBJETIVO
Agendar citas de forma rápida y eficiente.

## FLUJO
1. Saludo: "Hola, soy el asistente de {{brand}}. ¿Para qué servicio necesitas cita?"
2. Califica: ¿Para cuándo la necesitas? ¿Prefieres mañana o tarde?
3. Confirma: "Te confirmo cita: [fecha] a las [hora]. ¿Nombre y teléfono?"

## ESCALA cuando:
- Solicitan servicios no estándar
- Grupos grandes
```

## Plantillas disponibles

**Por objetivo:** Generación de Leads · Agendamiento de Citas · Soporte Técnico · Ventas Consultivas · Servicio al Cliente · Seguimiento Post-Venta · Calificación BANT (B2B) · Atención en Instagram/Facebook.

**Por industria:** Bienes Raíces · Clínicas/Consultorios · E-commerce/Retail · Educación/Bootcamps · Automotriz/Servicios · SaaS B2B · Restaurantes · Agencia de Seguros · Distribuidor Industrial B2B · Belleza y Estética · Cirugía Plástica / Medicina Estética · Gimnasio / Club Deportivo · Servicios a Domicilio · Turismo y Hospedaje · Eventos y Renta de Equipo · Energía Solar · Consultoría y Agenda de Demos · Productos Personalizados.

## Preguntas frecuentes

**No encuentro una plantilla para mi negocio.**
Prueba otra palabra clave o parte de una por objetivo. También puedes usar **Generar con IA**, que arma el prompt conversando contigo.

**¿Puedo guardar mis propias plantillas?**
En esta pantalla se usan las plantillas de Peaking. Para reutilizar uno de tus prompts, copia su contenido con **Ver Markdown** y pégalo en uno nuevo.

<!-- VERIFICAR: que el buscador filtre por las palabras clave de cada plantilla y si hoy existe una acción para crear un prompt a partir de uno existente (commit del 22 de septiembre). -->
