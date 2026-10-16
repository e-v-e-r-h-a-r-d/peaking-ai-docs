---
title: Google Calendar
description: "Conecta tu calendario para que el agente agende citas: modos de agendamiento, duración e intervalo, y varios calendarios con enrutamiento por IA."
sidebar:
  order: 5
---

Con **Google Calendar** el agente puede consultar tu disponibilidad y **agendar citas** por ti. Lo encuentras en **Configuración › Integraciones › Google Calendar** (categoría ERP y CRM).

[CAPTURA PENDIENTE: tarjeta Google Calendar conectada con calendario predeterminado, Modo de Agendamiento y Configuración de Citas]

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Conectar mi calendario | [Conectar](#conectar) |
| Elegir en qué calendario se agenda | [Calendario predeterminado](#calendario-predeterminado) |
| Permitir varias citas a la misma hora | [Modo Flexible](#modos-de-agendamiento) |
| Usar varios calendarios (por equipo o servicio) | [AI Calendar Routing](#varios-calendarios) |
| Cambiar la duración de las citas | [Configuración de Citas](#configuración-de-citas) |
| Que el agente sepa cuándo usarlo | [Declararlo en el prompt](#que-el-agente-lo-use) |

## Conectar

1. Abre la tarjeta y haz clic en **Conectar Google Calendar**.
2. Autoriza el acceso con tu cuenta de Google.
3. Al volver verás *«Google Calendar conectado exitosamente»* y **Conectado como:** tu cuenta.

Para quitarlo, **Desconectar**.

## Calendario predeterminado

En **Calendario Predeterminado** elige cuál se usa para nuevos eventos y programación (*«Selecciona un calendario predeterminado»*). **Actualizar Calendarios** vuelve a leer la lista de tu cuenta. Si algún calendario tiene problemas de zona horaria, aparece **Corregir Zona Horaria**.

## Modos de agendamiento

**Modo de Agendamiento** define cómo gestiona la IA la disponibilidad. Solo Master y Administrador pueden cambiarlo.

| Modo | Qué hace |
|---|---|
| **Estricto** (por defecto) | Solo agenda en horarios completamente libres; respeta la disponibilidad del calendario |
| **Flexible** | Permite varias citas en el mismo horario, hasta un límite: **Máximo de citas simultáneas** (de 1 a 10) |
| **AI Calendar Routing** | Elige automáticamente el calendario correcto según el contexto de la conversación. Solo aparece con **2 o más calendarios** |

### Configuración de citas

En modo **Estricto** o **AI Calendar Routing** aparece **Configuración de Citas**:

- **Intervalo entre citas**: 15, 30 o 45 min; 1, 1.5 o 2 horas. Es cada cuánto se sugieren horarios.
- **Duración de cada cita**: cuánto dura. **No puede ser mayor al doble del intervalo**; si lo es, verás *«Configuración inválida»*.

## Varios calendarios

Con 2 o más calendarios activos puedes usar **Modo Multi-Calendario** (*enrutamiento inteligente a múltiples calendarios*). Se requieren **al menos 2 calendarios activos**; con menos, el agente usa el calendario predeterminado.

Para cada calendario, **Configurar** abre:

| Campo | Para qué sirve |
|---|---|
| **¿Para qué es este calendario?** | Describe qué tipo de citas se agendan aquí |
| **Palabras clave** | Palabras que los clientes usarían al pedir esa cita |
| **¿Quién recibe las citas?** | Esa persona se agrega como invitada al evento |
| **¿Cuándo NO aplica agendar en este calendario?** (opciones avanzadas) | Evita confusiones entre calendarios parecidos |

*Llenar todos los campos hace más inteligente a Peaking.* Cada calendario muestra su estado: **Listo**, **Pendiente** o **Incompleto**; con configuraciones incompletas el agente podría dirigir mal las citas. Un calendario puede ser **Principal** (**Hacer principal**); el principal no se puede desactivar. Si quedan menos de 2 habilitados, el modo multi-calendario se desactiva solo y vuelve el calendario único.

## Que el agente lo use

Conectar no basta: el agente necesita saber **cuándo** agendar. En el prompt, pestaña **Canales y herramientas › Herramientas**, escribe en **Google Calendar** el campo **Cuándo y cómo usarla**. Ver [Instrucciones del agente](/05-agente-ia/instrucciones-del-agente/#herramientas-del-prompt).

## Preguntas frecuentes

**El agente no agenda.**
Revisa que el calendario esté conectado, que la herramienta tenga su «Cuándo y cómo usarla» en el prompt y que haya horarios libres en el modo elegido.

**¿Por qué no veo AI Calendar Routing?**
Solo aparece con dos o más calendarios.

**No puedo cambiar el modo.**
Solo los administradores pueden hacerlo.
