---
title: Conexión con Mercado Pago
description: Cómo conectar Mercado Pago a Peaking para procesar pagos en Latinoamérica directamente desde el chat.
sidebar:
  order: 3
---

**Mercado Pago** es la pasarela de pago líder en Latinoamérica. Integrarla con Peaking permite que tu agente de IA procese cobros, genere links de pago y gestione órdenes en los mismos canales donde ya conversas con tus clientes — sin redirigirlos a otra plataforma.

---

## Antes de empezar

- Tener una cuenta activa en [Mercado Pago](https://www.mercadopago.com).
- Tener acceso de administrador en tu cuenta de Peaking.
- Tu cuenta de Mercado Pago debe estar verificada y habilitada para recibir pagos.

---

## Cómo conectar Mercado Pago a Peaking

### Paso 1 — Ve a Integraciones

1. En el panel lateral de Peaking, haz clic en **Configuración**.
2. Navega a la sección **Integraciones**.
3. Localiza la tarjeta de **Mercado Pago** y haz clic en **Conectar**.

### Paso 2 — Autenticación en Mercado Pago

Serás redirigido a Mercado Pago para autorizar la conexión:

1. Inicia sesión con tu cuenta de Mercado Pago.
2. Revisa los permisos solicitados — Peaking necesita acceso para crear preferencias de pago, consultar órdenes y gestionar notificaciones.
3. Haz clic en **Permitir**.
4. Mercado Pago redirige de regreso a Peaking con la autenticación confirmada.
5. El estado de la integración cambiará a **Conectado**.

### Paso 3 — Confirma la conexión

En la sección de Integraciones verás la tarjeta de Mercado Pago con el estado **Activo** y el email de la cuenta conectada. Si hay un error, verifica que tu cuenta de Mercado Pago esté habilitada para la región de tu negocio.

---

## Productos, precios e IVA

Una vez conectado, configura cómo Peaking envía los productos a Mercado Pago:

- **Precio base** — el valor del producto tal como está en tu catálogo.
- **IVA incluido** — activa esta opción si tus precios ya incluyen impuesto. Si está desactivado, Peaking calculará el IVA al momento del cobro según las reglas fiscales de tu país.
- **Moneda** — Mercado Pago gestiona automáticamente la moneda según el país de tu cuenta (MXN, ARS, COP, BRL, etc.).

:::tip[Precios en Latinoamérica]
Mercado Pago opera con moneda local en cada país. Si vendes a clientes de múltiples países, verifica que tu cuenta de Mercado Pago esté configurada para el mercado correcto antes de procesar pagos internacionales.
:::

---

## Dashboard de Ventas (Customized Orders)

Desde la sección **Órdenes** en Peaking puedes ver todas las transacciones generadas a través de Mercado Pago:

| Columna | Descripción |
|---------|-------------|
| **ID de orden** | Identificador único en Peaking y en Mercado Pago |
| **Cliente** | Nombre y canal de origen del comprador |
| **Monto** | Total con impuestos incluidos |
| **Estado** | Pendiente · Aprobado · Rechazado · En proceso · Devuelto |
| **Fecha** | Cuándo se generó la preferencia de pago |

### Detalle de la orden

Al abrir una orden verás:

- **Tracking** — estado del pago en tiempo real, actualizado por webhooks de Mercado Pago.
- **Transacciones** — todos los intentos de pago: aprobados, rechazados o en revisión.
- **Operaciones** — acciones disponibles: reembolsar total o parcial, cancelar orden pendiente.

---

## Gestión de Métodos de Cobro

Mercado Pago ofrece múltiples métodos según el país. Desde la configuración en Peaking puedes elegir cuáles ofrecer:

| Método | Disponibilidad |
|--------|---------------|
| Tarjeta de crédito y débito | Todos los países |
| Pago en efectivo (OXXO, Boleto, etc.) | México, Brasil y otros |
| Transferencia bancaria | Según país |
| Mercado Crédito | México, Brasil y Argentina |
| QR Code | Argentina, Brasil, México |

---

## Gestión de Carrito y Tarifas

### Carrito (Cart)

El carrito permite acumular productos durante la conversación. El cliente puede agregar ítems en distintos momentos del chat y pagar todo en una sola transacción al final.

### Tarifas y comisiones

Las comisiones de Mercado Pago varían por país, método de pago y plan:

- **Tarifa estándar:** entre 2.49% y 6.99% + IVA según país y método.
- **Tarifa de cuotas:** varía si el cliente paga en mensualidades.
- **Sin mensualidades:** la comisión base es menor.

Consulta [mercadopago.com](https://www.mercadopago.com) para las tarifas vigentes en tu país.

---

## Consistencia y flujo de órdenes

1. El agente de IA genera la preferencia de pago con los productos seleccionados.
2. Mercado Pago crea la preferencia y devuelve un link de pago.
3. El agente envía el link al cliente en el chat.
4. El cliente paga usando el método de su preferencia.
5. Mercado Pago envía una notificación (webhook) a Peaking.
6. El estado de la orden se actualiza automáticamente en el Dashboard de Ventas.

---

## Notas importantes

:::caution[Cuentas verificadas]
Mercado Pago puede suspender temporalmente pagos a cuentas nuevas o no verificadas. Asegúrate de completar el proceso de verificación de identidad en tu cuenta antes de activar cobros en producción.
:::

:::note[Pagos en prueba]
Usa las credenciales de **sandbox** de Mercado Pago para probar el flujo de cobro sin transacciones reales. Una vez validado, cambia a credenciales de producción en la configuración de la integración.
:::

---

## Preguntas frecuentes

**¿Peaking almacena datos de tarjetas de mis clientes?**

No. Toda la información de pago se maneja exclusivamente en Mercado Pago. Peaking solo recibe la confirmación del estado de la transacción.

**¿Puedo usar Mercado Pago y Stripe al mismo tiempo?**

Sí. Puedes tener ambas pasarelas conectadas. Configura en el Catálogo cuál se usa para cada producto o deja que el agente ofrezca ambas opciones al cliente.

**¿Qué pasa si el pago es rechazado?**

El agente notifica al cliente y puede sugerir reintentar con otro método. En el Dashboard de Ventas verás el motivo del rechazo según el código de Mercado Pago.

**¿Cómo emito un reembolso?**

Desde el detalle de la orden en Peaking, usa la opción **Reembolsar**. El monto regresa al método de pago original del cliente en los tiempos de Mercado Pago (entre 1 y 10 días hábiles según el método).
