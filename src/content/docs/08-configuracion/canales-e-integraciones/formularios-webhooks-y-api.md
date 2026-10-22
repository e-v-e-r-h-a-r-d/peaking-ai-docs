---
title: Formularios, webhooks y API
description: "Capta leads desde tu sitio web, conecta sistemas con webhooks y catálogos de datos, y usa claves de API y Peaking MCP."
sidebar:
  order: 7
---

Un **Formulario de captación** se incrusta en tu sitio web y **genera oportunidades en tu CRM** cuando alguien lo llena. Lo encuentras en **Configuración › Formularios de leads** (o la tarjeta **Formularios de leads** de [Integraciones](/08-configuracion/canales-e-integraciones/integraciones/)).

:::note[Cuándo está disponible]
Es una función habilitada por organización. Si no ves **Formularios de leads**, pídele a Peaking que la active.
:::

[CAPTURA PENDIENTE: diálogo «Personaliza tu formulario» con la vista previa y el código para instalar]

## Qué quieres hacer

| Quiero… | Ve a… |
|---|---|
| Crear mi primer formulario | [Crear un formulario](#crear-un-formulario) |
| Cambiar colores, logo y textos | [Diseño](#diseño) |
| Elegir qué datos pide | [Campos](#campos) |
| Decidir a qué etapa del CRM entra el lead | [Destino en el CRM](#destino-en-el-crm) |
| Medir conversiones en Google Ads | [Seguimiento de conversiones](#seguimiento-de-conversiones-google-ads) |
| Ponerlo en mi página | [Instalar el código](#instalar-el-código) |
| Pausarlo o borrarlo | [Activo, inactivo y eliminar](#activo-inactivo-y-eliminar) |
| Recibir en mi sistema los mensajes de WhatsApp | [Webhook](#webhook-n8n) |
| Probar que mi URL responde | [Probar la conexión](#probar-la-conexión) |
| Que el agente consulte una lista de precios o existencias | [Catálogos de datos](#catálogos-de-datos) |
| Elegir cada cuánto se actualiza un catálogo | [Frecuencia](#frecuencia-de-sincronización) |
| Conectar una API como herramienta del agente | [Herramientas](/08-configuracion/canales-e-integraciones/integraciones/#otras-herramientas) |
| Crear una clave | [Nueva API key](#crear-una-clave) |
| Conectar Claude Code | [Peaking MCP](#conectar-claude-code-mcp) |
| Enviar leads desde mi sistema | [API pública de leads](#api-pública-de-leads) |
| Dejar de usar una clave | [Revocar](#revocar-una-clave) |

## Formularios de leads

### Crear un formulario

1. Abre **Gestionar formularios** (*Formularios de captación*).
2. Haz clic en **Nuevo formulario**. Si aún no tienes: *«Aún no tienes formularios. Crea el primero para empezar a captar leads.»*
3. Completa las secciones de abajo; verás la **Vista previa** al lado.
4. Guarda (*«Formulario guardado»*).

Cada formulario muestra su estado (**Activo** o **Inactivo**) y cuántos **envíos** ha recibido.

### Diseño

| Campo | Qué es |
|---|---|
| **Nombre del formulario (interno)** | Solo para ti |
| **Idioma** | Idioma del formulario |
| **Título** y **Subtítulo** | Los textos de encabezado |
| **Logo (opcional)** | PNG o JPG, máximo 2 MB |
| **Color primario**, **Color de fondo**, **Color del título** | Paleta |
| **Redondeo de bordes** | Qué tan redondeada se ve la tarjeta |
| **Opacidad del fondo** | Menos de 100 % la vuelve translúcida (efecto vidrio) para mostrar la imagen de fondo |
| **Texto del botón** y **Mensaje de éxito** | Lo que ve el visitante |

### Campos

| Opción | Qué hace |
|---|---|
| **Teléfono obligatorio** / **Correo obligatorio** | Hace ese dato requerido |
| **Mostrar selector de sucursal** | Muestra una lista de sucursales con tu **Etiqueta del campo sucursal**. Requiere sucursales activas |
| **Texto de consentimiento de privacidad** y **URL de la política de privacidad** | Aviso legal antes de enviar |
| **Campos personalizados** | Agrega campos extra de tipo **Texto** o **Lista de opciones** (una opción por línea), con **Etiqueta del campo** y **Obligatorio**. Se guardan en las notas de la oportunidad |

### Destino en el CRM

| Campo | Qué es |
|---|---|
| **Etapa de la oportunidad** | La etapa donde entra el lead. Por defecto: *Etapa por defecto de la organización* |
| **Sucursal por defecto** | Sucursal asignada si no se elige una (o *Sin sucursal por defecto*) |

### Seguimiento de conversiones (Google Ads)

Cada envío exitoso puede disparar tu conversión de Google Ads desde tu sitio.

1. En Google Ads: **Objetivos › Conversiones › Nueva acción de conversión › Sitio web › «Envío de formulario de clientes potenciales» › Usar la etiqueta de Google**. Ahí verás el ID y la etiqueta.
2. En Peaking completa:

| Campo | Qué es |
|---|---|
| **ID de conversión** | Con formato `AW-123456789` (también acepta `AW-123456789/Etiqueta`) |
| **Etiqueta de conversión** | La parte después de la diagonal. **Sin etiqueta no se registra la conversión** |
| **Conversiones mejoradas** | Envía a Google el correo y teléfono del lead (cifrados por Google) para mejorar la atribución. Actívalo también en Google Ads |
| **URL de redirección (página de gracias)** | Opcional. Al guardarse el lead y registrarse la conversión, el sitio va a esa página. Vacío = se queda el mensaje de éxito |

Además, el **gclid** y los parámetros **utm_*** con los que llegó el visitante se guardan en las notas y la campaña de la oportunidad, listos para importar conversiones offline.

### Instalar el código

En **Código para tu sitio web**, copia el fragmento y pégalo donde quieras mostrar el formulario. Verás *«Código copiado al portapapeles»*.

### Activo, inactivo y eliminar

El interruptor **Activo / Inactivo** lo enciende o apaga. **Eliminar** pide confirmar: *«¿Eliminar este formulario? Dejará de funcionar en tu sitio.»*

## Webhooks y Catálogos de datos

Dos integraciones de la categoría **Desarrolladores** en **Configuración › Integraciones** para conectar Peaking con tus propios sistemas:

| Tarjeta | Para qué sirve |
|---|---|
| **Webhooks** | Avisa a tus sistemas (por ejemplo, n8n) de los mensajes y eventos de WhatsApp |
| **Catálogos de datos** | Sincroniza listas de precios y existencias desde una URL |

[CAPTURA PENDIENTE: panel Webhooks con la URL y el botón de prueba, y panel Catálogos de datos con la tabla de catálogos y su frecuencia de sincronización]

### Webhook (n8n)

El panel **N8N Webhook Configuration** guarda **una URL** que recibe **todos los mensajes y eventos de WhatsApp** de tu organización. Si lo dejas vacío, la integración queda desactivada.

1. En n8n, crea un nodo *webhook* en tu flujo y copia su URL.
2. Pégala en **N8N Webhook URL** (ej. `https://tu-n8n.com/webhook/whatsapp`).
3. Haz clic en **Save Configuration**.
4. Verifica con **Test Connection**.

#### Probar la conexión

**Test Connection** envía una petición de prueba a tu URL con `test: true`, la hora y el identificador de tu organización. Si responde bien verás *«Webhook test successful!»*; si no, *«Webhook returned status N»* o *«Could not reach the webhook URL»*; revisa que la URL sea correcta y accesible. El botón aparece solo cuando hay una URL válida.

:::note[Textos en inglés]
Este panel del producto aún está en inglés (*Save Configuration*, *Test Connection*, *Setup Instructions*). Los nombramos como aparecen.
:::

### Catálogos de datos

**Catálogos de Datos Externos** conecta APIs o fuentes de datos para **sincronizar** su información automáticamente: listas de precios, existencias o cualquier consulta que el agente necesite. Para usarlos en el agente, decláralos en el prompt: ver [Instrucciones del agente](/05-agente-ia/instrucciones-del-agente/#herramientas-del-prompt).

#### Añadir un catálogo

1. Haz clic en **Añadir Catálogo de Datos** (o **Añadir Tu Primer Catálogo de Datos** si no tienes ninguno).
2. En **Add Data Catalog** completa:

| Campo | Qué es |
|---|---|
| **Name** y **Description** | Cómo lo reconoces |
| **API Endpoint URL** | La dirección de donde se leen los datos |
| **HTTP Method** | El método de la petición (por ejemplo POST) |
| **Authentication Type** | **API Key**, **Bearer Token** o **Custom Header** |
| **API Key/Token** y **Authentication Header** | Credencial y encabezado, según el tipo elegido |

3. Guarda. Verás *«Catalog created»*.

#### La tabla de catálogos

Cada fila muestra **Name**, **Description**, **Endpoint**, **Status**, **Sync Info** (última y próxima sincronización, o *Never synced* / *Due now*) y **Actions**. Desde ahí puedes:

- **Sincronizar** el catálogo al momento (*«Sync started»*; al terminar, *«Sync completed successfully»* o *«Sync completed with issues»* si procesó datos parciales).
- Cambiar la **frecuencia de sincronización**.
- **Eliminar** el catálogo (pide confirmación).

#### Frecuencia de sincronización

**Auto-sync Frequency**: **Manual Only**, cada **15** o **30 minutos**, cada **hora**, **2**, **4**, **8** o **12 horas**, o **Daily**.

:::note[Textos en inglés]
La pantalla de catálogos está en inglés en el producto; documentamos los nombres tal como aparecen.
:::

## Claves de API y Peaking MCP

Las **Claves de API** (API Keys) son llaves de acceso de Peaking AI. Sirven para dos cosas: **conectar Claude Code** y mejorar tus agentes desde la terminal, o **enviar leads** desde sistemas externos (formularios web, Zapier, tu backend). Cada clave es solo de **tu organización** y tiene sus permisos. Lo encuentras en **Configuración › Claves de API**.

:::note[Cuándo está disponible]
La **API pública** es un módulo que se activa en [Módulos](/08-configuracion/cuenta/) (*Habilita la API de Peaking AI para recibir leads desde sistemas externos*).
:::

![Claves de API con la lista de claves y los bloques Conectar Claude Code (MCP) y Cómo usar la API pública](/screenshots/v2/08-configuracion/claves-de-api-completa.png)

### Crear una clave

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

### Conectar Claude Code (MCP)

**Peaking MCP** permite a tu Claude Code leer una conversación donde el agente falló y corregir el prompt desde la terminal. Cada cambio queda versionado (con rollback). Necesitas una clave con permisos de prompts y conversaciones.

1. Crea la clave (por defecto vienen marcados **Leer prompts**, **Editar prompts** y **Leer conversaciones**).
2. Copia el comando de **Conectar Claude Code** y ejecútalo en tu terminal:

```
claude mcp add --transport http peaking <ENDPOINT> --header "Authorization: Bearer pk_live_…"
```

3. En Claude Code, pídele leer una conversación y mejorar el prompt.

Herramientas disponibles: **conversaciones** (listar y ver), **prompts** (listar, crear, ver, actualizar, versiones, rollback, editar descripciones de herramientas) y **workflows** (listar, ver, editar herramientas de un nodo, clonar y publicar). Cada clave ve solo los datos de su organización. Los cambios hechos así aparecen en el [historial de versiones](/05-agente-ia/estudio-de-prompts/probar-publicar-y-versiones/#historial-de-versiones) como **MCP**.

### API pública de leads

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

### Revocar una clave

En la fila de la clave, **Revocar** y confirma: *«¿Revocar “nombre”?»*. La clave deja de funcionar de inmediato.

## Preguntas frecuentes

### Formularios de leads: preguntas

**No aparecen sucursales en el formulario.**
Necesitas sucursales activas: ver [Sucursales](/08-configuracion/empresa-y-equipo/#sucursales).

**¿Dónde veo los leads que llegan?**
Como oportunidades en el [CRM](/06-crm-audiencias/), en la etapa que elegiste.

**Google Ads no registra la conversión.**
Revisa que el ID tenga formato `AW-…` y que hayas escrito la **Etiqueta de conversión**.

### Webhooks y Catálogos de datos: preguntas

**El webhook no recibe nada.**
Revisa que la URL esté guardada, que sea accesible desde internet y usa **Test Connection**.

**El catálogo muestra «Sync failed».**
Verifica la URL, el método y la credencial; luego sincroniza de nuevo.

**¿Un catálogo reemplaza a Odoo?**
No. Odoo se conecta en [Herramientas](/08-configuracion/canales-e-integraciones/integraciones/#herramientas-y-odoo); los catálogos son para fuentes por URL.

### Claves de API y Peaking MCP: preguntas

**Perdí mi clave.**
No se puede ver otra vez. Revócala y crea una nueva.

**¿Una clave sirve para varias organizaciones?**
No. Cada clave ve solo los datos de su organización.

**No aparece Claves de API.**
Activa el módulo de API pública en [Módulos](/08-configuracion/cuenta/).
