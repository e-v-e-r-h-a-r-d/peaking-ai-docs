---
title: Peaking MCP — Conexión con Claude Code
description: Servidor MCP remoto para conectar Claude Code a una organización de Peaking y gestionar prompts, workflows y conversaciones desde la terminal.
sidebar:
  order: 1
---

Un servidor MCP remoto que conectas a tu **Claude Code** para mejorar los AI Agents de un cliente **desde la terminal**, con acceso acotado a **una organización**. Sirve para: diagnosticar conversaciones reales, editar/crear/versionar prompts, ajustar y crear workflows, y **probar un cambio antes de que salga a producción**.

---

## 1. Conectar (2 minutos)

Necesitas una **API key** (`pk_live_…`) de la org del cliente, con los permisos que vayas a usar (ver §2). Luego ejecuta desde tu terminal:

```bash
claude mcp add --transport http peaking \
  https://wqicfalgufotrnruyumk.supabase.co/functions/v1/mcp \
  --header "Authorization: Bearer pk_live_TU_KEY"
```

- Agrega `--scope user` para tenerlo disponible en todos tus proyectos.
- Verifica: `claude mcp list` (debe salir `peaking ✓`) y dentro de una sesión `/mcp`.
- ¿Varios clientes? Una key **por** cliente → agrégalos como servidores separados: `peaking-clienteA`, `peaking-clienteB`.

:::note[1 key = 1 organización]
La key ya define de qué cliente son todos los datos. No puedes cruzar orgs con la misma key.
:::

---

## 2. Permisos (scopes)

Al crear la key en **Settings → API** (o pídesela a un admin), marcas solo lo que necesites:

| Scope | Para qué |
|-------|----------|
| `conversations:read` | Leer conversaciones reales (diagnóstico) y usar replay |
| `prompts:read` | Ver prompts |
| `prompts:write` | Crear / editar / versionar prompts |
| `workflows:read` | Ver workflows |
| `workflows:write` | Editar nodos, clonar, crear y publicar workflows |

---

## 3. Qué puedes hacer (17 herramientas)

No llamas las tools por nombre: **le hablas normal a Claude Code** y él las usa.

### Conversaciones (diagnóstico)

| Tool | Qué hace |
|------|----------|
| `list_conversations` | Lista conversaciones recientes (canal, cliente, flags) |
| `get_conversation` | Trae la transcripción completa de una conversación |

> *"Trae las últimas 10 conversaciones de WhatsApp y muéstrame la transcripción de la de Emilio."*

### Prompts

| Tool | Qué hace |
|------|----------|
| `list_prompts` | Lista los prompts de la org |
| `get_prompt` | Lee el cuerpo editable de un prompt |
| `create_prompt` | Crea un prompt nuevo |
| `update_prompt` | Reemplaza el cuerpo (versionado + rollback) |
| `list_prompt_versions` | Historial de versiones |
| `rollback_prompt` | Restaura una versión anterior |
| `get_prompt_tools` | Ve los tools del prompt y su "cuándo ejecutar" |
| `update_prompt_tool` | Cambia el "cuándo ejecutar" de un tool |

> *"En el prompt del cotizador, cambia el 'cuándo ejecutar' del Catálogo de Productos a: solo cuando el cliente dé un SKU exacto."*

### Workflows

| Tool | Qué hace |
|------|----------|
| `list_workflows` | Lista workflows (proyecto, estado, si está vivo) |
| `get_workflow` | Ve el grafo (nodos + edges) y la config de cada nodo |
| `set_agent_node_config` | Cambia el promptId / tools de un nodo agente |
| `clone_workflow` | Clona un workflow (plantilla) a un proyecto nuevo |
| `create_workflow_from_spec` | Crea un workflow completo desde un JSON |
| `publish_workflow` | Publica el borrador → lo pone en vivo |

> *"Clona el workflow Demo, en el nodo agente ponle el prompt X, y publícalo."*

### Probar antes de aplicar

| Tool | Qué hace |
|------|----------|
| `replay_conversation` | Corre el agente sobre una conversación real con un **prompt candidato** y muestra **qué respondería**, sin guardar ni enviar nada |

> *"Lee la conversación donde el agente falló, propón un fix al prompt, y con replay muéstrame qué respondería con el cambio antes de aplicarlo."*

---

## 4. El flujo estrella: conversación mala → fix verificado

1. `list_conversations` / `get_conversation` → encuentras dónde falló el agente.
2. Claude propone un cambio al prompt.
3. `replay_conversation` → ves **qué respondería** con el prompt nuevo (sin efectos secundarios).
4. Si mejora → `update_prompt` lo aplica (queda versionado).
5. Si algo sale mal → `rollback_prompt`.

---

## 5. Cosas que debes saber (gotchas)

**Editar un prompt = efecto inmediato en producción.** Los workflows publicados leen el `content` en vivo. No hay "guardar borrador" a nivel prompt — por eso existe el versionado + rollback.

**Editar un workflow (grafo/nodos) NO aplica hasta `publish_workflow`.** El motor solo lee el snapshot publicado.

**`replay_conversation` es 100% seguro** — corre en modo test, no persiste ni envía. Tools apagados por default (`tool_ids:[]`) para un preview puro.

**Descripción de tools vive en 2 lugares** — a nivel prompt (`update_prompt_tool`, aplica dondequiera que se use el prompt) y a nivel nodo de workflow (`set_agent_node_config`, solo ese nodo).

**El bloque `## HERRAMIENTAS DISPONIBLES:` se preserva solo** al editar prompts — no lo edites a mano.

**Clonar comparte los prompts por referencia** (editar el clon afecta el original). Usa el flag para duplicarlos si quieres independencia.

Todo cambio queda con **`api_key_id`** → es auditable por persona. `last_used_at` te dice si una key se está usando.

---

## 6. Seguridad / higiene

- **Una key por persona y por cliente** → revocas y auditas individualmente.
- La key es **acceso a producción del cliente**: trátala como credencial sensible.
- El contenido de conversaciones **sale a Anthropic** vía tu Claude Code — considéralo para clientes con datos sensibles.
- Al terminar un encargo, **revoca la key** (Settings → API → Revocar).

---

*Endpoint MCP: `https://wqicfalgufotrnruyumk.supabase.co/functions/v1/mcp` · Auth: `Authorization: Bearer pk_live_…`*
