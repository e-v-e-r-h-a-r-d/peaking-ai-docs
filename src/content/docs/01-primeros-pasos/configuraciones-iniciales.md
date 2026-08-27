---
title: Configuración general de la cuenta
description: "Guía completa para configurar tu cuenta de Peaking: organización, equipo, perfil, seguridad, facturación, privacidad, extracción de datos de contactos, CRM y módulos activables."
sidebar:
  order: 3
---

La sección de **Configuración** es el panel de control de tu organización en Peaking. Desde aquí defines los datos de tu empresa, gestionas tu equipo, cuidas la seguridad de la cuenta y administras la facturación. Completa estas configuraciones antes de conectar canales o activar tu agente de IA.

## Cómo acceder a Configuración

1. En el panel lateral izquierdo, haz clic en el ícono de **Configuraciones** (engranaje).
2. Verás una barra horizontal con las pestañas: **Organización · Team · Profile · Security · Billing · Privacy · Contactos · CRM · Funcionalidades · API**.

---

## Pestaña: Organización

Aquí defines la identidad y el contexto de tu negocio. Esta información es especialmente importante porque parte de ella alimenta directamente a tu agente de IA.

### Datos generales

![Pestaña Organización con Nombre, Moneda de la Plataforma, contexto del negocio e Industria del catálogo](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/01-primeros-pasos/config-organizacion-industria.png)

| Campo | Descripción |
|-------|-------------|
| **Nombre de la Organización** | Nombre oficial de tu organización tal como aparecerá en la plataforma |
| **Moneda de la Plataforma** | Moneda predeterminada para precios y transacciones (ej. MXN — Peso Mexicano) |

### Industria del catálogo

Define el rubro de tu catálogo de productos (por ejemplo, **EPP — Equipo de Protección Personal**). Este campo solo aplica a distribuidores industriales con el feature de extracción de catálogo habilitado.

Al seleccionar una industria, el sistema carga ejemplos canónicos (few-shots) que ayudan al extractor de fingerprints a entender mejor tu catálogo — útil cuando importas productos por Excel o los sincronizas desde una integración como Odoo.

### Contexto del negocio para la IA

El campo **`settings.businessContext`** es una descripción libre de tu negocio que el agente de IA usa como contexto general. Escribe aquí quiénes son, qué ofrecen y a qué mercado atienden.

```
Ejemplo: "Somos una tienda de ropa femenina en CDMX especializada en moda casual
y contemporánea. Atendemos a mujeres entre 25 y 45 años. Contamos con tienda
física en Polanco y envíos a toda la República."
```

Este campo complementa al prompt del agente — cuanto más preciso sea, mejores serán las respuestas contextuales.

### Horario de Operación

![Configuración del Horario de Operación con toggles por día y rangos de hora editables](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/01-primeros-pasos/config-horario-operacion.png)

Define los días y horarios en que tu negocio está disponible. El agente puede usar esta información para orientar al cliente sobre cuándo puede recibir atención humana.

| Día | Configuración |
|-----|---------------|
| Lunes a Viernes | Toggle activado · Horario: 09:00 – 18:00 (editable) |
| Sábado y Domingo | Toggle desactivado → "Cerrado" |

Ajusta los rangos de horario directamente en los campos de hora. Cuando termines, haz clic en **Guardar Cambios**.

---

## Pestaña: Team — Equipo y departamentos

Administra los miembros que tienen acceso a Peaking y organízalos en departamentos.

### Departamentos

![Sección Departamentos vacía, con el botón + Nuevo Departamento](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/01-primeros-pasos/config-team-departamentos.png)

Los departamentos te permiten agrupar a tu equipo por área (Ventas, Soporte, Operaciones, etc.) y usarlos como criterio de asignación en los módulos de CRM y TODOs.

- Para crear un departamento: haz clic en **+ Nuevo Departamento**, escribe el nombre y guarda.
- Los departamentos creados aparecerán en la lista y estarán disponibles al configurar reglas de asignación.

:::tip[Crea los departamentos antes de invitar al equipo]
Si configuras los departamentos primero, puedes asignar a cada nuevo miembro a su área desde el momento en que lo invitas.
:::

### Miembros del equipo

La tabla **Team Members** muestra todos los usuarios con acceso a tu organización:

![Tabla Team Members con nombre, rol, departamento y vendedor — columna de correo oculta por privacidad](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/01-primeros-pasos/config-team-miembros.png)

| Columna | Descripción |
|---------|-------------|
| **Usuario** | Nombre del miembro |
| **Correo** | Dirección de correo electrónico de acceso |
| **Rol** | Permisos asignados dentro de la plataforma |
| **Departamento** | Área a la que pertenece |
| **Vendedor** | Indica si el miembro puede recibir oportunidades del CRM |
| **Acciones** | Editar o eliminar al miembro |

### Cómo invitar a un miembro

1. Haz clic en **+ Invitar Usuario** (esquina superior derecha de la tabla).
2. Ingresa el **correo electrónico** de la persona.
3. Selecciona su **Rol**.
4. Asígnale un **Departamento** (opcional).
5. Activa el toggle **Vendedor** si debe recibir asignaciones automáticas del CRM.
6. Haz clic en **Enviar Invitación**.

La persona recibirá un correo con el enlace de acceso a la plataforma.

---

## Pestaña: Profile — Tu información personal

Actualiza tu información de usuario dentro de la plataforma.

![Pestaña Profile con Avatar, First Name, Last Name, Email, Phone Number, Job Title y WhatsApp para notificaciones](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/01-primeros-pasos/config-profile-informacion.png)

| Campo | Notas |
|-------|-------|
| **Avatar** | Imagen de perfil · máximo 5 MB · click en la foto para cambiarla |
| **First Name** | Tu nombre |
| **Last Name** | Tu apellido |
| **Email** | Solo lectura — no se puede editar desde aquí |
| **Phone Number** | Número de contacto |
| **Job Title** | Tu cargo o puesto |

Cuando termines los cambios, haz clic en **Save Changes**.

---

## Pestaña: Security — Seguridad de la cuenta

![Pestaña Security con Current Password, New Password, Confirm New Password y la sección Onboarding](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/01-primeros-pasos/config-security-password.png)

### Cambiar contraseña

1. Ve a _Configuración › Security_.
2. Ingresa tu **Current Password** (contraseña actual).
3. Escribe tu nueva contraseña en **New Password**.
4. Confírmala en **Confirm New Password**.
5. Haz clic en **Update Password**.

### Reiniciar Onboarding

La sección **Onboarding** tiene el botón **Restart Onboarding**. Úsalo si necesitas que aparezca nuevamente el flujo de configuración inicial — útil para capacitar a nuevos administradores o repasar los pasos de configuración.

---

## Pestaña: Billing — Facturación y suscripción

### Suscripción

Muestra el estado actual de tu plan. Si no tienes un plan activo, verás el mensaje **"No active subscription"**.

El botón **"Cancel at period end"** (rosa) permite cancelar la suscripción al final del período vigente sin interrumpir el servicio de inmediato.

### Facturas

La sección **Invoices** lista todas tus facturas. Si no hay ninguna, verás **"No invoices found"**.

El botón **Sync invoices** (azul) sincroniza manualmente las facturas con el sistema de cobro. Úsalo si acabas de hacer un pago y no aparece aún en la lista.

---

## Pestaña: Privacy — Privacidad

Desde aquí puedes revisar los **Términos y Condiciones** y la **Política de Privacidad** de Peaking. Si tu negocio tiene su propia política de privacidad para mostrar a los clientes del widget, puedes configurarla en esta sección.

---

## Pestaña: Contactos — Extracción automática de datos

Define qué información quieres que el agente capture automáticamente cuando un cliente la menciona dentro de una conversación, sin que tengas que pedirla manualmente en el prompt.

![Sección Información a extraer de conversaciones, con el campo de ejemplo Fecha de Nacimiento](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/01-primeros-pasos/config-contactos-extraccion.png)

Cada campo se guarda en el perfil del contacto y queda disponible como contexto para futuras interacciones — incluso si el cliente lo mencionó en una conversación anterior. Consulta esos datos capturados en la ficha del contacto — ver [Gestión de Contactos](/13-contactos/gestion-de-contactos/).

:::caution[El agente no pregunta proactivamente]
El agente solo extrae información que el cliente menciona espontáneamente — nunca la pregunta por iniciativa propia. Si necesitas que el agente solicite un dato específico, agrégalo manualmente como instrucción en el prompt del agente.
:::

### Agregar un campo de extracción

1. Haz clic en **+ Agregar campo**.
2. Define la **Clave** (uso interno, ej. `birthday`) y la **Etiqueta visible** (ej. "Fecha de nacimiento").
3. Indica el **Tipo de dato** (Texto, Número, Fecha, JSON o Verdadero/Falso).
4. Escribe la **Descripción para el agente IA** — mínimo 20 caracteres, entre más específica mejor, porque es lo que el LLM lee para decidir si debe extraer el dato.
5. Agrega **Ejemplos** (uno por línea) de frases que el cliente podría usar, para ayudar al agente a reconocer variaciones (ej. "mi cumple es el 5 de marzo → 1990-03-05").
6. Activa el toggle **Campo activo** y haz clic en **Guardar**.

![Formulario Nuevo campo con Clave, Etiqueta visible, Tipo de dato, Descripción para el agente IA y Ejemplos](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/01-primeros-pasos/config-contactos-nuevo-campo-modal.png)

---

## Pestaña: CRM — Configuración del pipeline

Personaliza cómo se ven y se comportan las oportunidades del CRM para tu organización, sin necesidad de recrear el módulo desde cero.

:::note[Esto no es el módulo CRM en sí]
Esta pestaña solo ajusta comportamiento y campos. Para gestionar oportunidades día a día — Kanban, Timeline, Nueva oportunidad — ve a [CRM › Vista general](/06-crm-audiencias/crm-vista-general/).
:::

### Etiquetas de campos

![Formulario de Etiquetas de campos para renombrar los campos estándar de las oportunidades](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/01-primeros-pasos/config-crm-etiquetas-campos.png)

Cambia cómo aparecen los campos estándar de las oportunidades en tus formularios — por ejemplo, renombrar "Empresa" como "Sucursal" si así se conoce en tu negocio. Aplica a los campos **Nombre, Empresa, Industria, Email, Teléfono, Etapa, Prioridad y Asignado a**.

### Campos personalizados

![Sección Campos personalizados sin campos creados, con el botón + Agregar campo](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/01-primeros-pasos/config-crm-campos-personalizados.png)

Agrega campos adicionales a tus oportunidades más allá de los estándar. Aparecen automáticamente en los formularios de creación y detalle, y se guardan en cada oportunidad — útil para capturar datos propios de tu proceso de ventas (ej. "Número de cotización interna").

### Notificaciones de asignación

Avisa automáticamente al vendedor cuando se le asigna una oportunidad nueva:

![Notificaciones de asignación con los toggles Correo electrónico y WhatsApp](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/01-primeros-pasos/config-crm-notificaciones-asignacion.png)

| Canal | Comportamiento |
|-------|-----------------|
| **Correo electrónico** | Avisa por email al vendedor asignado |
| **WhatsApp** | Envía una plantilla de WhatsApp aprobada al número que cada vendedor configura en su perfil |

### Configuración de Asignación CRM (Round Robin)

![Configuración de Round Robin Assignment con el toggle Auto Assignment activado](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/01-primeros-pasos/config-crm-round-robin.png)

Activa la **asignación automática** para que las oportunidades nuevas se repartan entre tu equipo de ventas sin intervención manual:

1. Activa el toggle **Auto Assignment**.
2. En **Assignment Strategy**, selecciona **Round Robin** — las oportunidades se distribuyen en rotación equitativa.
3. Solo los miembros del equipo marcados como **Vendedor** (toggle configurable en la tabla **Team Members**, arriba en la pestaña Team) reciben asignaciones.

:::note[Etiquetas en inglés]
Algunos campos de esta sección (**Auto Assignment**, **Assignment Strategy**) aparecen en inglés en la interfaz actual, aunque el resto de la plataforma esté en español. No afecta la configuración — simplemente úsalos tal como se muestran en pantalla.
:::

---

## Pestaña: Funcionalidades — Módulos activables

Activa o desactiva módulos completos de la plataforma según lo que tu operación necesite. Cada módulo tiene un badge **Activo** o **Inactivo** y un toggle para cambiarlo.

![Funcionalidades: Módulo CRM, Visibilidad por asignación, Ver todo el CRM editar solo lo propio, Módulo TODOs](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/01-primeros-pasos/config-funcionalidades-1.png)

![Funcionalidades: Sucursales/Ubicaciones, Time Blocks/Reservaciones, Workflows, Formularios de captación, API pública, Plantillas y envío masivo de WhatsApp, Odoo Sync](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/01-primeros-pasos/config-funcionalidades-2.png)

![Funcionalidades: Enriquecimiento IA, Agentes de Voz, Variantes de producto](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/01-primeros-pasos/config-funcionalidades-3.png)

| Módulo | Qué habilita |
|--------|---------------|
| **Módulo CRM** | Funcionalidad de Gestión de Relaciones con Clientes (pipeline de oportunidades) |
| **Visibilidad por asignación** | Los usuarios con rol "user" solo ven conversaciones, contactos y leads asignados a ellos. Administradores y managers ven todo |
| **Ver todo el CRM, editar solo lo propio** | Los usuarios ven todas las oportunidades y contactos del CRM (evita leads duplicados) pero solo editan lo que tienen asignado. Excluyente con "Visibilidad por asignación" |
| **Módulo TODOs** | Gestión de tareas y asignación de equipo |
| **Sucursales / Ubicaciones** | Gestión multi-ubicación y control de acceso |
| **Time Blocks / Reservaciones** | Permite que los clientes reserven clases, eventos y sesiones a través del agente de IA |
| **Workflows** | Flujos de automatización visual para enrutar y procesar mensajes con agentes IA, herramientas y condiciones |
| **Formularios de captación** | Formularios incrustables en sitios web que generan oportunidades directamente en el CRM |
| **API pública** | Habilita la API de Peaking para recibir leads desde sistemas externos (formularios web, Zapier, tu backend) con API keys |
| **Plantillas y envío masivo de WhatsApp** | Habilita la sección de plantillas de WhatsApp, incluido el envío masivo a múltiples destinatarios y audiencias |
| **Odoo Sync** | Sincronización de productos y contactos con Odoo |
| **Enriquecimiento IA** | Genera descripciones automáticas con IA para productos sin descripción, mejorando la búsqueda |
| **Agentes de Voz** | Habilita agentes telefónicos con IA usando Twilio y ElevenLabs para conversaciones de voz entrantes |
| **Variantes de producto** | Gestión de variantes de producto (tallas, colores, etc.) |

:::caution[Algunos módulos son excluyentes]
"Visibilidad por asignación" y "Ver todo el CRM, editar solo lo propio" controlan el mismo tipo de permiso de formas distintas — no actives ambos a la vez, ya que uno anula la lógica del otro.
:::

### Configuración de Asignación TODO

Con el **Módulo TODOs** activo, más abajo en Funcionalidades encontrarás su propia configuración de asignación automática — igual que el Round Robin del CRM, pero para tareas:

![Configuración de Asignación TODO con estrategia AI-Powered y reglas inteligentes de asignación](https://raw.githubusercontent.com/e-v-e-r-h-a-r-d/peaking-ai-docs/max's-branch/screenshots_peaking/01-primeros-pasos/config-funcionalidades-asignacion-todo.png)

Activa **Enable Auto-Assignment** y elige la **Assignment Strategy**: **Round Robin** (rotación equitativa) o **AI-Powered (Intelligent Rules)**, donde la IA analiza cada TODO y lo asigna según las reglas que definas. Para crear esas reglas paso a paso, ver [Crear una regla inteligente de asignación](/10-tareas/tareas-y-todos/#crear-una-regla-inteligente-de-asignación).

---

## Pestaña: API

Gestiona el acceso programático a tu cuenta de Peaking. Esta pestaña está ligada al módulo **API pública** de Funcionalidades — actívalo primero si no ves opciones disponibles aquí. Para el detalle de cómo consumir la API con leads externos, ver [Integraciones Personalizadas](/09-integraciones-partner/odoo-hubspot-zoho/).

---

## Preguntas frecuentes

**¿Puedo cambiar el rol de un miembro después de invitarlo?**

Sí. Ve a _Configuración › Team_, encuentra al miembro en la tabla y edita su rol desde la columna **Acciones**.

**¿El campo `settings.businessContext` reemplaza al prompt del agente?**

No. Es un complemento. El prompt define la personalidad y el comportamiento; el `businessContext` proporciona información de contexto general que el agente puede usar al responder preguntas abiertas.

**¿Puedo tener varios departamentos en el equipo?**

Sí, sin límite de departamentos. Crea tantos como necesites para reflejar la estructura real de tu organización.

**¿Qué pasa si desactivo un módulo de Funcionalidades que ya estoy usando?**

El módulo deja de estar disponible en el panel lateral y sus datos existentes no se eliminan, pero quedan inaccesibles hasta que reactives el módulo. Por ejemplo, si desactivas **Módulo TODOs**, las tareas ya creadas se conservan pero no podrás verlas ni crear nuevas hasta reactivarlo.

**¿La extracción automática de datos de Contactos funciona en todos los canales?**

Sí. El agente extrae y guarda la información en el perfil del contacto sin importar si la conversación ocurrió en WhatsApp, Instagram, Messenger o el Widget web.
