---
title: Claves de API y Peaking MCP
description: "Crea claves de acceso para enviar leads desde tu web o sistemas externos y para conectar Claude Code (MCP) y mejorar tus agentes."
sidebar:
  order: 10
---

Las **Claves de API** (API Keys) son llaves de acceso de Peaking AI. Sirven para dos cosas: **conectar Claude Code** y mejorar tus agentes desde la terminal, o **enviar leads** desde sistemas externos (formularios web, Zapier, tu backend). Cada clave es solo de **tu organización** y tiene sus permisos. Lo encuentras en **Configuración › Claves de API**.

:::note[Cuándo está disponible]
La **API pública** es un módulo que se activa en [Módulos](/08-configuracion/cuenta/modulos/) (*Habilita la API de Peaking AI para recibir leads desde sistemas externos*).
:::

[CAPTURA PENDIENTE: pantalla Claves de API con la lista de claves, los bloques «Conectar Claude Code (MCP)» y «Cómo usar la API pública (leads)»]

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Crear una clave | [Nueva API key](#crear-una-clave) |
| Conectar Claude Code | [Peaking MCP](#conectar-claude-code-mcp) |
| Enviar leads desde mi sistema | [API pública de leads](#api-pública-de-leads) |
| Dejar de usar una clave | [Revocar](#revocar-una-clave) |

## Crear una clave

1. Haz clic en **Nueva API key**.
2. Escribe un **Nombre** que te recuerde para qué es (*«Claude Code de Juan»*, *«Mi sitio web»*).
3. Marca los **permisos**:

| Grupo | Permiso | Qué permite |
|---|---|---|
| **Claude Code (MCP)** | **Leer prompts** | Ver los prompts de los agentes |
| | **Editar prompts** | Crear, modificar y versionar prompts (con rollback) |
| | **Leer conversaciones** | Revisar conversaciones reales para diagnosticar |
| | **Leer workflows** | Ver los workflows y su configuración |
| | **Editar workflows** | Ajustar herramientas de nodos, clonar y publicar workflows |
| | **Override de tools (avanzado)** | Reescribir la descripción de sistema de las herramientas. **Otórgalo con cuidado:** efecto inmediato en producción |
| **API pública — ingestión de leads** | **Crear contactos / leads** | Enviar contactos y oportunidades del CRM |

4. Haz clic en **Crear**.

:::caution[Guarda tu API key ahora]
Se muestra **una sola vez**. Cópiala y luego haz clic en **Listo, ya la guardé**. Si la pierdes tendrás que revocarla y generar una nueva. Trátala como una contraseña.
:::

La lista muestra cada clave con su prefijo (`pk_live_…`), sus permisos y **Último uso**.

## Conectar Claude Code (MCP)

**Peaking MCP** permite a tu Claude Code leer una conversación donde el agente falló y corregir el prompt desde la terminal. Cada cambio queda versionado (con rollback). Necesitas una clave con permisos de prompts y conversaciones.

1. Crea la clave (por defecto vienen marcados **Leer prompts**, **Editar prompts** y **Leer conversaciones**).
2. Copia el comando de **Conectar Claude Code** y ejecútalo en tu terminal:

```
claude mcp add --transport http peaking <ENDPOINT> --header "Authorization: Bearer pk_live_…"
```

3. En Claude Code, pídele leer una conversación y mejorar el prompt.

Herramientas disponibles: **conversaciones** (listar y ver), **prompts** (listar, crear, ver, actualizar, versiones, rollback, editar descripciones de herramientas) y **workflows** (listar, ver, editar herramientas de un nodo, clonar y publicar). Cada clave ve solo los datos de su organización. Los cambios hechos así aparecen en el [historial de versiones](/05-agente-ia/estudio-de-prompts/probar-publicar-y-versiones/#historial-de-versiones) como **MCP**.

## API pública de leads

Crea o actualiza un contacto (y, con CRM activo, una oportunidad) enviando un **POST** con autenticación **Bearer Token**:

```
Authorization: Bearer pk_live_…
```

| Campo | Obligatorio |
|---|---|
| `name` | Sí |
| `phone` o `email` | Al menos uno |
| `message`, `source` | Opcionales |

El panel **Cómo usar la API pública (leads)** trae el **Endpoint** y un **Ejemplo (cURL)** listos para copiar.

## Revocar una clave

En la fila de la clave, **Revocar** y confirma: *«¿Revocar “nombre”?»*. La clave deja de funcionar de inmediato.

## Preguntas frecuentes

**Perdí mi clave.**
No se puede ver otra vez. Revócala y crea una nueva.

**¿Una clave sirve para varias organizaciones?**
No. Cada clave ve solo los datos de su organización.

**No aparece Claves de API.**
Activa el módulo de API pública en [Módulos](/08-configuracion/cuenta/modulos/).
