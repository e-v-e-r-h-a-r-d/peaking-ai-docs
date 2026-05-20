---
title: Agentes de Voz
description: Cómo crear y conectar agentes de IA de voz en Peaking usando ElevenLabs y números de Twilio para llamadas inbound y outbound.
sidebar:
  order: 10
---

Los **Agentes de Voz** son agentes de IA que atienden y realizan llamadas telefónicas en tiempo real. Combinan un número de teléfono de Twilio con una voz sintetizada por ElevenLabs para crear una experiencia de conversación completamente autónoma — sin intervención humana.

Puedes usarlos para atención al cliente por teléfono, calificación de leads por llamada, seguimiento automatizado o cualquier flujo que requiera comunicación de voz.

---

## Acceder a Agentes de Voz

1. En el panel lateral de Peaking, haz clic en **Integraciones**.
2. Selecciona la pestaña **Agentes de Voz**.

Verás dos secciones: **Números de Teléfono** y **Agentes de Voz**.

![Panel de Agentes de Voz mostrando números de Twilio y agentes de ElevenLabs configurados](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/09-integraciones/agentes-voz.png)

---

## Números de Teléfono

La sección **Números de Teléfono** gestiona los números de Twilio vinculados a tu cuenta. Cada número puede estar conectado a un Agente de Voz específico.

| Columna | Descripción |
|---------|-------------|
| **Number** | Número de teléfono en formato E.164 (ej. `+16202348357`) |
| **Agentes de Voz** | Badge verde "Conectado" si tiene un agente asignado, o vacío si no |
| **Estado** | `active` = el número está activo y puede recibir llamadas |
| **Acciones** | **Conectar Agente** — abre el selector para asignar un agente a ese número · Eliminar (ícono de papelera) |

### Buscar números disponibles

Haz clic en **+ Buscar Números Disponibles** para adquirir un nuevo número de Twilio directamente desde Peaking. Selecciona el país y el prefijo de área que necesites.

:::note[Twilio como proveedor]
Los números de teléfono se gestionan a través de Twilio. El costo del número y de las llamadas se factura según las tarifas de Twilio aplicables al número y país seleccionados.
:::

---

## Agentes de Voz

La sección **Agentes de Voz** lista los agentes de voz configurados, impulsados por ElevenLabs.

| Columna | Descripción |
|---------|-------------|
| **Nombre del Agente** | Nombre interno del agente (ej. "Tools Test v2") |
| **Voz** | ID de la voz de ElevenLabs asignada al agente |
| **Idioma** | Idioma en que habla el agente (`en`, `es`, etc.) |
| **Estado** | `active` = el agente está disponible para recibir o hacer llamadas |
| **Acciones** | **Test** (🎙) · Editar (✏) · Eliminar (🗑) |

### Crear un nuevo agente de voz

1. Haz clic en **+ Crear Agente**.
2. Configura:
   - **Nombre del agente** — identificador interno
   - **Voz** — selecciona la voz de ElevenLabs que usará el agente
   - **Idioma** — idioma principal de la conversación
   - **Prompt** — instrucciones de comportamiento del agente (igual que en el Estudio de Prompts, pero optimizadas para voz)
3. Guarda el agente.
4. En la sección **Números de Teléfono**, haz clic en **Conectar Agente** del número que quieres usar y selecciona el agente recién creado.

### Probar un agente de voz

Haz clic en el botón **Test** (ícono de micrófono) junto al agente. Se abrirá una interfaz de llamada simulada donde puedes hablar con el agente directamente desde el navegador, sin necesidad de llamar al número real.

---

## Conectar el Agente de Voz a Workflows

Una vez creado el agente y conectado al número, puedes usarlo en el editor de Workflows con el nodo **Voice Agent**. Selecciona el agente en el campo correspondiente del nodo y define si es Inbound o Outbound.

Consulta [Cómo funcionan los Workflows](/11-workflows/como-funcionan-los-workflows/#voice-agent) para más detalles sobre la configuración del nodo.

---

## Preguntas frecuentes

**¿Puedo usar el mismo número para mensajería (WhatsApp) y llamadas de voz?**

No. Un número de Twilio es exclusivo para llamadas de voz. Los números de WhatsApp se gestionan a través de la API de Meta en la pestaña **Canales de Mensajería**.

**¿Los Agentes de Voz tienen acceso a las herramientas de Peaking (CRM, catálogo, etc.)?**

Sí. Al configurar el nodo Voice Agent en Workflows, puedes activar las mismas herramientas disponibles para los agentes de mensajería: Tareas Peaking, Catálogo de Productos, Odoo, Peaking CRM.

**¿En qué idiomas puede hablar el Agente de Voz?**

Depende de los modelos y voces disponibles en ElevenLabs. Los idiomas más comunes son español e inglés. Selecciona el idioma al crear el agente.

**¿Las llamadas quedan registradas en el historial de conversaciones?**

Las interacciones de voz se registran como conversaciones dentro del módulo de Mensajes, vinculadas al contacto correspondiente si el número del llamante está en la base de datos de Contactos.
