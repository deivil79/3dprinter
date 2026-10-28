# LayerLab — tienda de impresión 3D

Tienda **mobile first** para pequeñas piezas, regalos y encargos impresos en 3D. Proyecto Next.js, Supabase Auth (Google), PostgreSQL/Supabase, Stripe Checkout y PayPal Checkout.

## Arranque

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abre http://localhost:3000. El catálogo y carrito funcionan sin cuentas externas; autenticación, encargos, pedidos y cobros requieren configurar variables.

## Configuración
1. Crear proyecto Supabase y ejecutar `supabase/schema.sql` en SQL Editor. Configurar Google como proveedor OAuth en Supabase y el redirect HTTPS para producción. La URL de retorno de la app es `https://TU_DOMINIO/auth/callback`. Añadir tanto localhost como el dominio en Auth URL Configuration.
2. Rellenar `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` (¡solo servidor!), `ADMIN_EMAILS` (emails separados por coma), `NEXT_PUBLIC_SITE_URL`.
3. Crear cuenta Stripe y configurar `STRIPE_SECRET_KEY` y `STRIPE_WEBHOOK_SECRET`. Endpoint webhook: `/api/stripe/webhook`; eventos `checkout.session.completed`, `checkout.session.async_payment_succeeded`. **Solo el webhook verificado marca cobrado**.
4. Crear cuenta PayPal Developer; asignar `PAYPAL_CLIENT_ID`, `PAYPAL_CLIENT_SECRET`, `PAYPAL_ENV=sandbox` (cambiar a `live` únicamente después de pruebas). El callback verifica el resultado de la captura desde el servidor.
5. Desplegar en un hosting compatible con Next.js y rutas de servidor (por ejemplo Vercel). **GitHub Pages no admite por sí solo la API ni los pagos.**
6. Configurar las variables del hosting, el dominio HTTPS y las URLs permitidas de OAuth. Comprobar compras de prueba antes de habilitar cobros reales.

## Funciones

- Portada y tarjetas responsive con catálogo de seis productos **demostrativos** (nombres y precios editables en `lib/catalog.ts`).
- Carrito local, notas de personalización, resumen y checkout protegido por sesión.
- Google OAuth mediante Supabase, lista privada de pedidos, seguimiento de estado, formulario de solicitud de encargos.
- Administración en `/admin` (lista de pedidos y actualización del estado), autorizada en servidor por `ADMIN_EMAILS`.
- Integración inicial de Stripe y PayPal, calculando el precio siempre en servidor.

## Pendiente antes de vender

- Sustituir iconos por **fotos reales** de impresiones; contrastar costes de material, electricidad, fallos y tiempo.
- Implementar gestión de **solicitudes personalizadas** en el panel y mejoras en la gestión de clientes, inventario, descuentos, cancelaciones/reembolsos y notificaciones.
- Revisar políticas de privacidad, aviso legal, protección de datos de menores, derechos de desistimiento, fiscalidad y titularidad del negocio por un adulto responsable.
- Protección antiabuso, rate limiting, notificaciones de pedidos, confirmación de email y pruebas integrales de compra/refund.
- Revisar la integración PayPal (capturas, conciliación, estados y webhooks) y correr pruebas de seguridad y funcionamiento antes de producción.
- El catálogo es un **MVP**, no una plataforma lista para operar pagos con estudiantes menores.

**Seguridad:** nunca subir credenciales reales al repositorio público. El campo de administrador no es modificable desde el cliente. No activar pagos productivos sin validación técnica y legal.
