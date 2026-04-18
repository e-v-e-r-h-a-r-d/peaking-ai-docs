---
title: Google Calendar — Automatización de Agendas
description: Cómo conectar Google Calendar a Peaking para que el agente de IA agende citas, verifique disponibilidad y gestione reuniones automáticamente.
sidebar:
  order: 2
---

La integración con **Google Calendar** convierte al agente de IA en un asistente de agendamiento completo. En lugar de que un humano coordine cada cita por separado, el agente puede verificar disponibilidad en tiempo real, proponer horarios y crear el evento directamente en el calendario — todo dentro de la conversación.

---

## Qué puede hacer el agente con Google Calendar

- **Verificar disponibilidad** en el calendario antes de proponer un horario.
- **Crear eventos** con nombre, descripción, fecha, hora y asistentes.
- **Confirmar citas** al cliente con todos los detalles de la reunión.
- **Consultar eventos** próximos para dar seguimiento o recordatorios.

---

## Cómo conectar Google Calendar a Peaking

### Paso 1 — Accede a Integraciones

1. En el panel lateral, haz clic en **Configuración**.
2. Navega a **Integraciones**.
3. Localiza la tarjeta de **Google Calendar** y haz clic en **Conectar**.

### Paso 2 — Selecciona Herramientas

Dentro de la sección de Integraciones, haz clic en la pestaña de **Herramientas**. Aquí encontrarás Google Calendar junto al resto de integraciones disponibles.

### Paso 3 — Inicia la Conexión

Haz clic en **Conectar** junto a Google Calendar. Esto inicia el proceso de autenticación a través de Google.

### Paso 4 — Proceso de Autenticación de Google

Serás redirigido a una ventana de Google para autorizar el acceso:

1. **Selección de cuenta** — elige la cuenta de Google (Gmail) que contiene el calendario que deseas vincular.
2. **Autorización de permisos** — otorga los permisos necesarios para que Peaking pueda leer disponibilidad y crear eventos. **Asigna al conector todos los permisos necesarios para que la función de agendamiento pueda operar correctamente.**
3. **Verificación final** — una vez completados los pasos de Google, vuelve a Peaking. El estado de la integración cambiará a **Conectado**.

:::caution[Cuenta correcta]
Asegúrate de que la cuenta de Google que conectas corresponda al calendario de la persona o equipo de ventas que atenderá las citas. Cada miembro puede conectar su propio calendario si tienen acceso independiente.
:::

---

## Declarar la herramienta Google Calendar en el Estudio de Prompts

Conectar Google Calendar la hace disponible, pero el agente no la usará hasta que la declares en el Prompt.

### Paso 1 — Ve al Estudio de Prompts

Navega al **Estudio de Prompts** y selecciona el Prompt principal o el prompt específico donde deseas habilitar el agendamiento.

### Paso 2 — Ubica la Sección "Configuración de Herramientas"

Desplázate hasta la parte inferior del editor del Prompt. Aquí encontrarás la sección **Configuración de Herramientas** donde puedes activar las integraciones conectadas.

### Paso 3 — Activa Google Calendar

Haz clic en **Google Calendar** dentro de la lista. La herramienta aparecerá listada en la configuración del prompt.

### Paso 4 — Declara la lógica (¿Cuándo ejecutar esta herramienta?)

Al seleccionar la herramienta, verás el campo clave: **¿Cuándo ejecutar esta herramienta?** Aquí defines las condiciones bajo las cuales el agente debe activar Google Calendar.

### Paso 5 — Instrucción Detallada

En este campo escribe la instrucción al agente. Ejemplo:

```
Cuando el cliente exprese explícitamente el deseo de agendar una cita o
reunión, tu siguiente objetivo es recopilar la información necesaria antes
de crear el evento:
- Propón al menos 2-3 horarios disponibles consultando el calendario.
- Confirma el nombre del cliente, el motivo de la cita y la duración estimada.
- Crea el evento solo cuando todos estos datos estén confirmados.
- Envía al cliente un resumen con los detalles de la cita agendada.
```

:::tip[Confirma antes de crear]
Instruye al agente para que siempre confirme los datos con el cliente antes de crear el evento. Esto evita citas con información incompleta o errónea.
:::

---

## Preguntas frecuentes

**¿Necesito tener Google Workspace (G Suite) para usar esta integración?**

No necesariamente. Funciona con cuentas regulares de Gmail, aunque Google Workspace ofrece más opciones de control y administración para equipos.

**¿Qué permisos necesita Peaking en mi Google Calendar?**

Peaking solicita permisos para leer eventos (verificar disponibilidad) y crear/modificar eventos (agendar citas). La integración no elimina eventos existentes a menos que el prompt lo indique explícitamente.

**¿Por qué Peaking no puede conectarse a mi Google Calendar?**

Las causas más comunes son:
- Seleccionaste una cuenta de Google diferente a la del calendario.
- No otorgaste todos los permisos durante la autorización.
- La política de seguridad de tu organización bloquea accesos de terceros.

Intenta desconectar y reconectar, asegurándote de aceptar todos los permisos.

**¿Un evento creado por el agente se puede cancelar o modificar?**

Es posible si configuras esa funcionalidad en el prompt. Por defecto el agente crea eventos — para cancelar o modificar debes instruirlo explícitamente en la declaración de la herramienta.

**¿El agente llena un horario cuando hay un conflicto de horario?**

Si el agente está bien instruido, consultará el calendario antes de proponer horarios y solo ofrecerá slots disponibles. Asegúrate de que el prompt incluya la instrucción de verificar disponibilidad antes de confirmar.
