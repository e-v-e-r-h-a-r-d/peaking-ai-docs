---
title: Configuración inicial
description: "Lo mínimo básico que debes tener configurado para que tu agente atienda clientes, en el orden correcto."
sidebar:
  order: 2
---

Esta es la ruta más corta de una cuenta vacía a un agente atendiendo clientes. Son **siete pasos** y cada uno te dice dónde hacerlo y cómo saber que quedó listo.

[CAPTURA PENDIENTE: Panel de control de una cuenta recién configurada, con canal conectado y agente activo]

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Ver todo lo mínimo en una lista | [Checklist mínimo](#checklist-mínimo) |
| Seguir el asistente de la primera vez | [El asistente de bienvenida](#el-asistente-de-bienvenida) |
| Saber qué más activar según lo que vendo o hago | [Según tu objetivo](#según-tu-objetivo) |
| Revisar que todo funcione antes de abrir al público | [Prueba final](#prueba-final) |

## Checklist mínimo

| # | Qué configurar | Dónde | Listo cuando… |
|---|---|---|---|
| 1 | **Datos de tu empresa**: nombre comercial, país, moneda, idioma de atención, zona horaria y horario | [Empresa y equipo › Organización](/08-configuracion/empresa-y-equipo/#organización) | Tu horario y moneda aparecen en el perfil de la organización |
| 2 | **Tu equipo**: al menos un usuario **Administrador**, con correo válido, y a quién se escala | [Empresa y equipo › Equipo y roles](/08-configuracion/empresa-y-equipo/#equipo-y-roles) | Cada persona recibió su invitación |
| 3 | **Un canal**: WhatsApp es el más usado | [Canales](/08-configuracion/canales-e-integraciones/canales/) | La fila dice **Conectado** y un mensaje de prueba llega a **Mensajes** |
| 4 | **Un prompt**: parte de una plantilla, reemplaza los `{{…}}` y asígnalo al canal | [Estudio de Prompts](/05-agente-ia/estudio-de-prompts/) | El prompt está **publicado** y asignado al canal |
| 5 | **Conocimiento**: al menos tus **15 preguntas frecuentes** y tus políticas | [Base de Conocimientos](/04-base-conocimientos/) | Los documentos están **activos** |
| 6 | **Productos o servicios**, si vendes | [Productos](/07-productos-pagos/) o [Odoo](/08-configuracion/canales-e-integraciones/odoo/) | El agente puede nombrar y cotizar tus productos |
| 7 | **Prueba** con el Laboratorio y con un mensaje real | [Probar, publicar y versiones](/05-agente-ia/estudio-de-prompts/probar-publicar-y-versiones/) | Pasaste el checklist de pruebas |

:::tip[El orden importa]
Primero empresa y equipo, luego canal, luego prompt, luego conocimiento. Un prompt sin canal no responde a nadie, y un canal sin prompt publicado recibe mensajes sin respuesta.
:::

## El asistente de bienvenida

La primera vez que entras, el **Onboarding** te guía por **5 pasos** y guarda tu avance si cierras la ventana. Solo el paso 3 se puede omitir.

| Paso | Qué pasa |
|---|---|
| **1. Bienvenido a Peaking AI** | Pantalla de bienvenida mientras se prepara tu cuenta |
| **2. Crea tu cuenta de administrador** | Eliges tu **Idioma predeterminado** (y, si llegas desde un pago, defines tu contraseña) |
| **3. Conecta tus canales** | WhatsApp, Instagram o Messenger. Botón **Gestionar canales**. Puedes **Omitir** y hacerlo después |
| **4. Crea tu primer prompt de IA** | Defines cómo hablará tu agente y lo asignas a uno o varios canales. Botón **Abrir Prompt Studio** |
| **5. Invita a tu equipo** | **Invitar usuarios** y asignar roles. Botón **Ir al panel** |

:::note[Solo si tu organización lo tiene activo]
La introducción guiada es un interruptor de la organización. Si no la ves, sigue el checklist de arriba.
:::

[CAPTURA PENDIENTE: Onboarding en el paso 3 «Conecta tus canales» con el indicador «Paso 3 de 5» y el botón Omitir]

## Según tu objetivo

Además de lo mínimo, activa lo que corresponde a lo que quieres lograr:

| Si tu objetivo es… | Activa y configura | Dónde |
|---|---|---|
| **Vender** | Catálogo de productos, cotizaciones y tareas de seguimiento | [Productos](/07-productos-pagos/) · [Tareas](/10-tareas/) · [Pagos](/08-configuracion/canales-e-integraciones/pagos/) |
| **Agendar citas** | Google Calendar | [Calendario y CRM externo](/08-configuracion/canales-e-integraciones/calendario-y-crm/) |
| **Dar soporte** | Una Base de Conocimientos completa y reglas de escalamiento | [Base de Conocimientos](/04-base-conocimientos/) · [Etiquetas y escalamiento](/05-conversaciones/etiquetas-y-escalamiento/) |
| **Captar leads** | CRM, pipeline y formularios | [CRM](/06-crm-audiencias/) · [Formularios de leads](/08-configuracion/canales-e-integraciones/formularios-webhooks-y-api/#formularios-de-leads) |

Los módulos opcionales (correo, turnos, sucursales, Odoo, workflows y más) se encienden en [Cuenta › Módulos](/08-configuracion/cuenta/#módulos). Apagar un módulo solo quita su acceso del menú: **tus datos se conservan**.

## Prueba final

Antes de abrir tu canal al público, valida en el Laboratorio de Pruebas:

- [ ] La pregunta principal de tu negocio se responde bien
- [ ] Una pregunta de producto o disponibilidad usa tu Base de Conocimientos
- [ ] Si el cliente pide hablar con una persona, el agente escala
- [ ] Una pregunta fuera de tu negocio se redirige sin inventar
- [ ] Un mensaje real de WhatsApp llega a **Mensajes** y el agente responde

Más pruebas en [Probar, publicar y versiones](/05-agente-ia/estudio-de-prompts/probar-publicar-y-versiones/).

## Después de lo básico

- Conoce tu pantalla de inicio: [Panel de control](/01-primeros-pasos/tour-del-dashboard/).
- Mejora a tu agente con las [Mejores prácticas](/19-mejores-practicas/resumen-de-mejores-practicas/).
- ¿Algo no funciona? [Configuraciones frecuentes](/17-soporte/configuraciones-frecuentes/).

## Preguntas frecuentes

**Cerré la ventana del asistente a la mitad. ¿Empiezo de cero?**
No. Peaking recuerda el último paso en el que estabas.

**No quiero invitar a nadie todavía.**
Avanza con **Ir al panel** e invita después desde [Equipo y roles](/08-configuracion/empresa-y-equipo/#equipo-y-roles).

**¿Puedo cambiar el idioma después?**
Sí, con el **selector de idioma** de la barra superior.

**¿Cuánto tarda?**
Con la información de tu negocio a la mano, una o dos horas; lo que más tiempo toma es escribir las preguntas frecuentes y cargar los productos.

