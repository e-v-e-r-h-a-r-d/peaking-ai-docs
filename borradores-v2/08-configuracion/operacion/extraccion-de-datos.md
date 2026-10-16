---
title: Extracción de datos
description: "Define qué información quieres que el agente capture automáticamente de las conversaciones y la guarde en la ficha de cada contacto."
sidebar:
  order: 3
---

**Extracción de datos** te permite indicarle al agente qué información debe guardar cuando un cliente la menciona en una conversación, sin tener que pedirla manualmente en el prompt.

Cada dato capturado se guarda en el perfil del contacto y queda disponible como contexto para futuras conversaciones, aunque el cliente lo haya mencionado semanas antes. Consulta lo capturado en la ficha del contacto — ver [Contactos](/13-contactos/).

:::note[Quién puede configurarla]
Esta sección solo la ven y editan los usuarios con rol **Master**.
:::

[CAPTURA PENDIENTE: lista de campos de extracción con interruptor Activo/Inactivo]

:::caution[El agente no pregunta por su cuenta]
El agente **solo extrae lo que el cliente menciona espontáneamente**. Nunca pregunta un dato por iniciativa propia. Si necesitas que el agente solicite un dato específico, agrégalo como instrucción en su [prompt](/05-agente-ia/estudio-de-prompts/).
:::

## Agregar un campo

1. Ve a **Configuración › Operación › Extracción de datos**.
2. Haz clic en **Agregar campo**.
3. Completa el formulario:

| Campo | Qué escribir |
|-------|--------------|
| **Clave (uso interno)** | Un identificador en minúsculas, números y guion bajo. Debe empezar con letra y tener máximo 50 caracteres. Ej.: `fecha_nacimiento` |
| **Etiqueta visible** | El nombre que verá tu equipo. Ej.: *Fecha de nacimiento* |
| **Tipo de dato** | Texto, Número, Fecha, Verdadero/Falso o JSON estructurado |
| **Descripción para el agente IA** | Qué es el dato y cuándo extraerlo. **Mínimo 20 caracteres** |
| **Ejemplos** *(opcional)* | Frases que el cliente podría decir, una por línea |

4. Haz clic en **Guardar**.

[CAPTURA PENDIENTE: formulario "Nuevo campo"]

### Escribe una buena descripción

La descripción es lo que el agente lee para decidir si debe extraer el dato. Sé específico:

```
Fecha de nacimiento del cliente, en formato YYYY-MM-DD si la menciona.
Útil para personalizar saludos en futuras conversaciones.
```

Y agrega ejemplos para ayudarle a reconocer variaciones:

```
mi cumple es el 5 de marzo → 1990-03-05
nací en 1985 → 1985
```

## Activar, desactivar o editar un campo

- Usa el interruptor de cada campo para **activarlo o desactivarlo** sin perderlo.
- Haz clic en **Editar campo** para cambiar su descripción o sus ejemplos.

Si no tienes ningún campo configurado, la extracción automática está inactiva: verás *"Agrega un campo para empezar"*.

<!-- VERIFICAR: ejemplo "Fecha de nacimiento" tomado del UI (placeholders del formulario). Confirmar si hay campos precargados por defecto o por industria, y si la clave se puede editar después de crear el campo. -->
