---
title: Escalamiento a humano
description: Cómo el agente de IA transfiere una conversación a un miembro del equipo y cómo el equipo retoma la atención de forma natural.
sidebar:
  order: 3
---

El **escalamiento** es el proceso mediante el cual una conversación pasa del agente de IA a un miembro humano de tu equipo. Es una de las funciones más importantes de Peaking: garantiza que los casos que requieren criterio, empatía o autorización humana lleguen a la persona correcta sin que el cliente tenga que repetir su situación.

---

## Cuándo ocurre el escalamiento

El escalamiento puede ocurrirse de tres maneras:

### 1. El cliente lo solicita

Si en el prompt del agente incluyes una instrucción de escalamiento (ej. "si el cliente escribe 'humano', transfiere la conversación"), el agente detecta esa palabra o frase y notifica que un humano tomará el relevo.

Ejemplo de instrucción en el prompt:

```
Si el cliente pide hablar con una persona o escribe "humano", "agente" o
"quiero hablar con alguien", indícale que en breve un miembro de nuestro
equipo le atenderá y escala la conversación.
```

### 2. El agente no puede resolver la consulta

Si el agente detecta que la pregunta está fuera de su alcance (información no documentada, situación inusual, queja compleja) y el prompt incluye una regla de fallback, el agente puede escalar automáticamente.

### 3. Un miembro del equipo toma control manualmente

Desde el Panel de Conversaciones, cualquier miembro del equipo puede hacer clic en **Tomar control** en cualquier conversación activa, sin esperar a que el agente la escale.

---

## Cómo ve el cliente el escalamiento

Lo que el cliente experimenta depende de cómo está configurado el prompt. Un ejemplo de mensaje que el agente puede enviar antes de escalar:

> "Entendido. Voy a conectarte con uno de nuestros asesores que podrá ayudarte con esto. En un momento se pondrá en contacto contigo."

El cliente no nota un cambio técnico — simplemente recibe el siguiente mensaje de quien tome el control.

---

## Cómo ve el equipo el escalamiento

### Indicador visual en el panel

Las conversaciones escaladas aparecen claramente diferenciadas en el Panel de Conversaciones. Puedes filtrar por el estado **"Escalado"** o **"Sin asignar"** para identificarlas rápidamente.

### Notificación al miembro asignado

Si la conversación escalada se asigna a un miembro específico, ese miembro recibe una notificación dentro de la plataforma.

---

## Tomar control de una conversación

1. Abre la conversación en el Panel de Conversaciones.
2. Haz clic en el botón **Tomar control** (aparece en la barra superior del hilo).
3. El agente de IA deja de responder en esa conversación.
4. Escribe tus mensajes normalmente — el cliente los recibirá con tu nombre o el nombre del agente humano, según la configuración.

:::tip[El historial está completo]
Cuando tomas control, tienes acceso al historial completo de la conversación — lo que dijo el cliente y lo que respondió el agente de IA. No necesitas pedirle al cliente que repita nada.
:::

---

## Devolver la conversación al agente

Cuando terminas de atender al cliente y quieres que el agente de IA retome:

1. En la conversación activa, haz clic en **Volver al agente** (o el botón equivalente en la barra de control).
2. El agente retoma con todo el historial disponible.
3. La próxima respuesta del cliente será gestionada nuevamente por la IA.

---

## Asignar a un miembro específico al escalar

Si la situación requiere que llegue a una persona particular (ej. un vendedor específico o el gerente), puedes asignarla directamente:

1. Abre la conversación.
2. En el panel lateral, usa la opción **Asignar a**.
3. Selecciona al miembro del equipo.
4. El miembro asignado recibe la notificación.

:::caution[Escalamiento fuera de horario]
Si el cliente escala fuera del horario de operación, el agente puede informarle que el equipo lo atenderá en el siguiente horario hábil. Configura esta regla en el prompt incluyendo el horario de atención humana.
:::

---

## Casos de uso frecuentes que requieren escalamiento

| Situación | Por qué escalar |
|-----------|-----------------|
| Queja o reclamo formal | Requiere empatía y posible compensación con autorización |
| Negociación de precio o condiciones especiales | Decisión fuera del alcance del agente |
| Cliente menciona problema grave con un pedido | Necesita acción urgente de operaciones |
| Proceso de compra de alto valor | El cliente prefiere confirmación humana |
| Solicitud de información confidencial | El agente no debe compartirla; un humano evalúa el caso |

---

## Preguntas frecuentes

**¿El agente puede escalar automáticamente sin que el cliente lo pida?**

Sí, si incluyes una regla en el prompt para situaciones específicas. Por ejemplo: "si el cliente menciona una queja sobre un pedido dañado, escala inmediatamente".

**¿Qué pasa si nadie toma control de una conversación escalada?**

La conversación permanece en la lista del panel marcada como escalada o sin asignar. Configura revisiones periódicas del panel para no dejar conversaciones esperando.

**¿El agente puede ver lo que dijo el humano y viceversa?**

Sí. El historial completo es compartido. Cuando el agente retoma, puede leer todo lo que se dijo durante la atención humana.
