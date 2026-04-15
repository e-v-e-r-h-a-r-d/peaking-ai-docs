---
title: Plantillas de Prompt
description: Cómo usar las plantillas de Peaking para configurar tu agente de IA de forma profesional en segundos.
sidebar:
  order: 3
---

Las **Plantillas de Prompt** son puntos de partida prediseñados por el equipo de Peaking para los casos de uso más comunes: venta de productos, atención al cliente, agendamiento de citas y más. En lugar de escribir un prompt desde cero, partes de una estructura probada y la personalizas para tu negocio.

---

## ¿Para qué sirven las Plantillas?

Escribir un buen prompt desde cero requiere experiencia con IA conversacional. Las plantillas resuelven eso: ya tienen la estructura correcta y las instrucciones base — solo necesitas rellenar los datos de tu negocio.

**Beneficios de usar Plantillas:**

- **Ahorro de tiempo** — En minutos tienes un agente funcional listo para probar.
- **Estructura profesional** — Las secciones están ordenadas de la forma que los modelos de IA interpretan mejor.
- **Menos errores** — Evitas instrucciones contradictorias o ambiguas que confunden al agente.
- **Totalmente editable** — Puedes modificar cualquier parte de la plantilla después de seleccionarla.

---

## Cómo usar una Plantilla

### Paso 1 — Accede al Estudio de Prompts

1. En el panel lateral izquierdo, haz clic en **Estudio de Prompts**.
2. Haz clic en **Crear Nuevo Prompt**.

### Paso 2 — Selecciona una Plantilla

En el modal de creación verás las plantillas disponibles. Cada una está diseñada para un caso de uso específico:

| Plantilla | Ideal para |
|-----------|------------|
| **Inicio / Básica** | Primera configuración, negocios con consultas generales |
| **Asistente de Ventas** | Tiendas, e-commerce, negocios con catálogo de productos |
| **Asistente de Agenda** | Consultorios, academias, servicios que requieren reservaciones |
| **Soporte al Cliente** | Empresas con alto volumen de consultas postventa |
| **Captura de Leads** | Negocios que priorizan calificar prospectos antes de vender |

Haz clic en la plantilla que mejor se adapte a tu caso de uso.

:::tip[Si no sabes cuál elegir]
Empieza con **Inicio / Básica**. Es la más flexible y puedes ajustarla para cualquier caso de uso. Siempre puedes crear otro prompt desde una plantilla diferente más adelante.
:::

### Paso 3 — Personaliza el contenido

Una vez seleccionada, el campo **Contenido del Prompt** se precargará con la estructura de la plantilla. Cada sección tiene marcadores de texto que debes reemplazar con la información real de tu negocio.

Las plantillas de Peaking siguen esta estructura estándar:

---

## Estructura de las Plantillas

### OBJETIVO

Define qué debe lograr el agente en cada conversación.

```
OBJETIVO:
Eres [Nombre del Agente], el asistente virtual de [Nombre del Negocio].
Tu objetivo principal es [ayudar a los clientes a agendar citas /
vender productos del catálogo / resolver dudas de soporte].
```

### PERSONALIDAD

Define el carácter del agente y cómo se relaciona con los clientes.

```
PERSONALIDAD:
Eres [amigable y cercano / profesional y directo / empático y paciente].
Usas un lenguaje [formal / informal / neutro].
```

### TONO

Controla el estilo de las respuestas. Puede variar del objetivo — un agente de ventas puede ser entusiasta; uno de soporte, más calmado.

```
TONO:
- Siempre positivo y orientado a soluciones.
- Evitas términos técnicos salvo que el cliente los use primero.
- Cuando no sabes algo, lo reconoces honestamente y ofreces alternativas.
```

### LINKS

URLs que el agente puede compartir cuando sea relevante: catálogo, mapa, formulario de contacto, política de devoluciones, etc.

```
LINKS:
- Catálogo de productos: [URL]
- Agendar cita: [URL de Google Calendar o sistema de reservas]
- Preguntas frecuentes: [URL]
```

### LÍMITES

Instrucciones sobre qué temas debe evitar o redirigir.

```
LÍMITES:
- No compartas información sobre precios de la competencia.
- Si el cliente pregunta por [tema sensible], transfiere a nuestro equipo humano.
- No hagas promesas sobre tiempos de entrega que no puedas garantizar.
```

---

## Ejemplo completo: Asistente de Agenda

Así luce una plantilla personalizada para un negocio que agenda citas:

```
OBJETIVO:
Eres Sofía, la asistente virtual de [Nombre del Negocio].
Tu objetivo es ayudar a los clientes a agendar, consultar y cancelar
citas de forma rápida y sin complicaciones.

PERSONALIDAD:
Eres cálida, eficiente y profesional. Haces que agendar una cita
se sienta fácil, no como llenar un formulario.

TONO:
- Usa un lenguaje amigable pero sin exceso de informalidad.
- Responde siempre en español neutro.
- Si el cliente está frustrado, reconoce su molestia antes de ofrecer soluciones.

LINKS:
- Agenda tu cita aquí: [URL de calendario]
- Ver disponibilidad: [URL]
- Política de cancelaciones: [URL]

LÍMITES:
- No ofrezcas descuentos ni promociones a menos que el cliente
  mencione un código de promoción válido.
- Si el cliente tiene una queja grave, transfiere a un asesor humano.
- No confirmes citas fuera del horario de atención definido.

ESTILO:
- Confirma siempre los detalles antes de cerrar la cita: fecha, hora y servicio.
- Si el horario solicitado no está disponible, ofrece 2 alternativas.
```

---

### Paso 4 — Configura el resto de los campos

Después de personalizar el contenido de la plantilla, completa las demás opciones:

- **Idioma del Agente** — el idioma en que responderá
- **Longitud de Respuesta Conversacional** — extensión de las respuestas
- **Formato de Presentación de Productos** — cómo mostrará los productos del catálogo

Consulta [Crea tu primer prompt](/03-prompt-studio/crea-tu-primer-prompt/) para la explicación detallada de cada campo.

### Paso 5 — Usa "Mejorar con IA" (opcional)

Una vez que personalizaste la plantilla con tu información, usa el botón **Mejorar con IA** para que Peaking revise y optimice el texto antes de guardarlo.

### Paso 6 — Guarda y activa

Haz clic en **Guardar**. El prompt quedará en tu listado del Estudio de Prompts, listo para activarse.

---

## Preguntas frecuentes

**¿Puedo cambiar de plantilla después de haberla editado?**

Si empiezas desde una plantilla y quieres cambiarla, tendrás que crear un nuevo prompt. Cambiar de plantilla en un prompt existente sobreescribiría el contenido que ya editaste.

**¿Las plantillas se actualizan automáticamente cuando Peaking las mejora?**

No. Cuando seleccionas una plantilla, se copia en tu prompt. Actualizaciones futuras de las plantillas no afectan los prompts que ya tienes guardados.

**¿Puedo guardar mis propias plantillas para reutilizarlas?**

Actualmente las plantillas disponibles son las que provee Peaking. Para reutilizar un prompt propio, puedes duplicarlo desde el listado del Estudio de Prompts y usarlo como base.

**¿Cuántas secciones debe tener un buen prompt?**

No hay un número fijo. Lo importante es que las instrucciones sean claras y no se contradigan entre sí. Un prompt con 5 secciones bien escritas supera a uno con 15 secciones redundantes.
