---
title: Conexión con Stripe
description: Cómo conectar Stripe a Peaking para procesar pagos desde el chat y transformar conversaciones en ingresos.
sidebar:
  order: 2
---

**Stripe** es la pasarela de pago internacional que te permite cobrar desde WhatsApp, Instagram y cualquier canal conectado a Peaking. El agente de IA puede guiar al cliente a través del proceso de compra y generar el cobro sin que el cliente salga del chat.

---

## Antes de empezar

- Tener una cuenta activa en [Stripe](https://stripe.com).
- Tener acceso de administrador en tu cuenta de Peaking.
- Haber configurado al menos un producto en el Catálogo de Peaking (opcional pero recomendado).

---

## Cómo conectar Stripe a Peaking

### Paso 1 — Ve a Integraciones

1. En el panel lateral de Peaking, haz clic en **Configuración**.
2. Navega a la sección **Integraciones**.
3. Localiza la tarjeta de **Stripe** y haz clic en **Conectar**.

### Paso 2 — Ingresa la URL de tu negocio

Peaking te pedirá la URL de tu sitio o negocio. Ingresa la dirección web asociada a tu cuenta de Stripe.

### Paso 3 — Autorización y código de seguridad

Serás redirigido a Stripe para autorizar la conexión:

1. Inicia sesión en tu cuenta de Stripe si no lo has hecho.
2. Revisa los permisos que Peaking solicita y haz clic en **Autorizar**.
3. Stripe generará un **código de seguridad** de confirmación — Peaking lo recibirá automáticamente.
4. Regresa a Peaking. El estado de la integración cambiará a **Conectado**.

---

## Productos y precios

Una vez conectado, Peaking sincroniza los productos de tu catálogo con Stripe:

- Los **productos** creados en Peaking se reflejan en Stripe como líneas de item en cada orden.
- Puedes configurar los **precios** con o sin IVA según la configuración fiscal de tu negocio.
- Los productos con **campos dinámicos** (cantidad, variante) se resuelven antes de generar el cobro.

:::tip[Sincroniza tu catálogo primero]
Antes de hacer tu primera venta, asegúrate de que los productos en Peaking tengan precio, descripción y disponibilidad correctos. El agente de IA los usará para generar cotizaciones y órdenes.
:::

---

## Dashboard de Ventas (Customized Orders)

Desde la sección **Órdenes** en Peaking puedes ver todas las transacciones generadas a través de Stripe:

| Columna | Descripción |
|---------|-------------|
| **ID de orden** | Identificador único de la transacción |
| **Cliente** | Nombre y canal de origen |
| **Monto** | Total cobrado incluyendo impuestos |
| **Estado** | Pendiente · Pagado · Fallido · Reembolsado |
| **Fecha** | Cuándo se generó la orden |

### Detalle de la orden

Al abrir una orden verás:

- **Tracking** — seguimiento del estado del pago en tiempo real.
- **Transacciones** — historial de intentos de cobro, confirmaciones y rechazos.
- **Operaciones** — acciones disponibles: reembolsar, cancelar, reenviar recibo.

---

## Gestión de Métodos de Cobro

Desde la configuración de Stripe en Peaking puedes activar o desactivar los métodos de pago disponibles para tus clientes:

- Tarjeta de crédito y débito (Visa, Mastercard, Amex)
- Pagos por link (Stripe Payment Link)
- Otros métodos según disponibilidad en tu región

---

## Gestión de Carrito y Tarifas

### Carrito (Cart)

El módulo de carrito permite que el agente de IA acumule múltiples productos en una sola sesión antes de generar el cobro. El cliente puede agregar, eliminar o modificar items antes de confirmar el pago.

### Tarifas y comisiones

Peaking no cobra comisión adicional sobre las transacciones. Las tarifas aplicables son las estándar de Stripe según tu país y plan:

- **Tarjeta nacional:** tarifa estándar Stripe + impuesto local (si aplica).
- **Tarjeta internacional:** tarifa adicional por conversión de divisa.

Consulta [stripe.com/pricing](https://stripe.com/pricing) para las tarifas vigentes en tu región.

---

## Consistencia y flujo de órdenes

Peaking mantiene sincronía en tiempo real con Stripe:

1. El agente de IA genera la orden con los productos seleccionados por el cliente.
2. Se crea un **Payment Intent** en Stripe.
3. El cliente recibe el link o solicitud de pago en el chat.
4. Al completar el pago, Stripe notifica a Peaking y el estado de la orden se actualiza automáticamente.
5. Si el pago falla, el agente puede reintentarlo o escalar a un humano.

---

## Preguntas frecuentes

**¿Peaking almacena los datos de la tarjeta del cliente?**

No. Todos los datos de pago se procesan directamente por Stripe. Peaking nunca tiene acceso a los números de tarjeta ni información financiera sensible.

**¿Puedo usar Stripe en múltiples países?**

Sí. Stripe opera en más de 40 países. Verifica que tu cuenta de Stripe esté habilitada para el país de tus clientes.

**¿Qué pasa si una transacción falla?**

El agente notifica al cliente del fallo y puede reintentar el cobro. También puedes verlo en el Dashboard de Ventas y tomar acción manual desde ahí.

**¿Puedo emitir reembolsos desde Peaking?**

Sí. Desde el detalle de la orden en el Dashboard de Ventas, usa la opción **Reembolsar** para devolver el monto total o parcial al cliente. El reembolso se procesa directamente en Stripe.
