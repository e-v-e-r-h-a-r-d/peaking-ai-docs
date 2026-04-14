---
title: Widget para sitio web
description: Cómo instalar y personalizar el Widget de Peaking en tu sitio web para atender visitantes con IA en tiempo real.
sidebar:
  order: 4
---

El **Widget de Peaking** es un botón de chat que se instala en tu sitio web y convierte a los visitantes en conversaciones activas. Cuando alguien hace clic, puede escribirte directamente por WhatsApp, Instagram, Messenger o iniciar un chat en tiempo real — todo sin salir de tu página.

---

## ¿Qué puede hacer el Widget de Peaking?

- Mostrar múltiples canales de contacto en un solo botón flotante
- Iniciar conversaciones de chat en tiempo real atendidas por tu agente de IA
- Redirigir al canal de mensajería que el visitante prefiera (WhatsApp, Instagram, Messenger)
- Personalizar colores, texto de bienvenida y comportamiento del botón
- Capturar leads desde tu sitio web sin formularios adicionales

---

## Pasos para configurar e instalar el Widget

### 1. Accede a la configuración del Widget

1. En el panel lateral izquierdo de Peaking, haz clic en **Configuración**.
2. Selecciona la pestaña **Canales**.
3. Haz clic en **Widget**.

---

### 2. Configura los canales de mensajería

En la sección **Canales de Mensajería** verás los canales disponibles para mostrar en tu Widget. Activa o desactiva cada uno según los canales que ya tengas conectados en Peaking:

| Canal | Descripción |
|-------|-------------|
| **WhatsApp** | Abre una conversación de WhatsApp con tu número conectado |
| **Instagram** | Redirige al DM de tu cuenta de Instagram conectada |
| **Messenger** | Abre el chat de tu Página de Facebook conectada |
| **Chat** | Inicia un chat en tiempo real directamente en tu sitio web, atendido por tu agente de IA |

:::tip[Activa solo los canales que ya tienes conectados]
Si activas WhatsApp en el Widget pero no has conectado ningún número de WhatsApp en Peaking, el botón no funcionará correctamente. Primero conecta los canales, luego actívalos en el Widget.
:::

---

### 3. Personaliza la apariencia del Widget

En la sección **Personalización** puedes ajustar cómo se ve el Widget en tu sitio:

| Opción | Descripción |
|--------|-------------|
| **Color principal** | Color del botón flotante y del encabezado del chat |
| **Texto de bienvenida** | Mensaje que aparece al abrir el Widget (ej. "¿Cómo podemos ayudarte?") |
| **Nombre del negocio** | Nombre que se muestra en la cabecera del Widget |
| **Posición** | Esquina inferior derecha o izquierda de la pantalla |

Los cambios se reflejan en la **vista previa** en tiempo real del lado derecho — verás exactamente cómo quedará el Widget antes de instalarlo.

---

### 4. Copia el código de instalación

1. Una vez configurado, baja hasta la sección de **Código de instalación**.
2. Haz clic en **Copiar código**.
3. El código es un fragmento de `<script>` similar a este:

```html
<script>
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://widget.peaking.ai/loader.js";
    js.setAttribute('data-token', 'TU_TOKEN_AQUI');
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'peaking-widget'));
</script>
```

Cada cuenta tiene un **token único** — no compartas este código públicamente, ya que identifica tu cuenta de Peaking.

---

### 5. Instala el código en tu sitio web

Pega el código antes de la etiqueta de cierre `</body>` en el HTML de tu sitio. El método varía según la plataforma:

**WordPress**
1. Ve a _Apariencia › Editor de temas_ o usa un plugin como **Insert Headers and Footers**.
2. Pega el código en la sección **Footer**.

**Shopify**
1. Ve a _Tienda en línea › Temas › Editar código_.
2. Abre el archivo `theme.liquid`.
3. Pega el código antes de `</body>`.

**Wix**
1. Ve a _Configuración › HTML personalizado_ o usa la sección de **Herramientas de marketing**.
2. Pega el código en el campo de HTML del pie de página.

**HTML estático**
Pega el código directamente en el archivo `.html` de tu sitio, justo antes de `</body>`.

:::note[¿Usas otro CMS o plataforma?]
Cualquier plataforma que permita insertar código HTML personalizado en el footer del sitio es compatible con el Widget de Peaking. Si tienes dudas sobre cómo instalarlo en tu plataforma específica, contacta al equipo de soporte.
:::

---

### 6. Verifica la instalación

1. Abre tu sitio web en un navegador.
2. Deberías ver el botón flotante del Widget en la esquina de la pantalla.
3. Haz clic en él — se desplegará el panel con los canales configurados.
4. Inicia una conversación de prueba por el canal **Chat** y verifica que el mensaje llegue a tu bandeja en Peaking.

---

## Preguntas frecuentes

**¿El Widget afecta la velocidad de carga de mi sitio?**

El script del Widget es asíncrono — se carga en segundo plano sin bloquear el contenido de tu página. El impacto en el tiempo de carga es mínimo.

**¿Puedo tener el Widget en varios sitios web?**

Sí. Puedes instalar el mismo código en múltiples sitios. Todos los chats llegarán a la misma bandeja de Mensajes en Peaking.

**¿El chat del Widget funciona fuera del horario de atención?**

Sí. Si tienes configurado un agente de IA, responde 24/7. Si el cliente escribe fuera del horario que definiste en el Estudio de Prompts, tu agente puede responder con un mensaje de horario de atención o capturar los datos del cliente para dar seguimiento.

**¿Puedo mostrar solo el Widget de Chat sin los otros canales?**

Sí. Desactiva WhatsApp, Instagram y Messenger en la sección **Canales de Mensajería** y deja activo solo el canal **Chat**.

**¿Los chats del Widget quedan guardados en Peaking?**

Sí. Cada conversación iniciada por el Widget queda registrada en el módulo de Mensajes con el identificador del canal **Widget**, junto al nombre del contacto si el visitante lo proporcionó.

**¿Puedo personalizar el mensaje de bienvenida según la página en que está el visitante?**

Esta funcionalidad avanzada (mensajes contextuales por URL) está disponible en planes específicos. Consulta con el equipo de Peaking para verificar si tu plan lo incluye.
