# LayerLab ✳ — una tienda 3D que funciona en GitHub Pages

Web de demostración **estática, mobile-first, sin framework, sin compilación y sin claves privadas**. Inspirada en la arquitectura de la PWA INNOPAT: HTML + CSS + JavaScript.

## Ver la web

**https://deivil79.github.io/3dprinter/**

> La dirección solo estará accesible cuando GitHub Pages esté activado en **Settings → Pages**. Si se publica la rama `main` con carpeta `/docs`, la web se muestra directamente en la URL anterior. Si se publica `main` desde `/(root)`, el archivo raíz `index.html` redirige a `/docs/`.

## Qué hace

- Catálogo visual de seis productos **ilustrativos** con arte vectorial original.
- Filtros por categoría y tarjetas responsive.
- Configurador de color, cantidad y texto personalizado.
- Bolsa con subtotal orientativo y persistencia local (`localStorage`).
- Generación de un **mensaje de solicitud de encargo**, que la persona puede copiar o compartir mediante la función nativa del móvil.
- Formulario de ideas a medida que **prepara un mensaje** (no lo transmite automáticamente).
- Manifest básico para añadir la página a la pantalla de inicio.

## Qué NO hace

No existe servidor, cuentas de Google, registro de clientes, pasarela de pago, panel de administración, seguimiento real de pedidos ni envío automático de mensajes. Se han retirado deliberadamente. **No se cobran pagos ni se formalizan compras** desde la web.

## Estructura

```
index.html            # Redirección para Pages desde /(root)
docs/
  index.html          # App estática
  styles.css          # Diseño responsive
  app.js              # Catálogo e interacciones
  icon.svg            # Favicon
  manifest.webmanifest
```

Abre `docs/index.html` directamente en el navegador, o ejecuta `python3 -m http.server 8000` desde la raíz y visita `http://localhost:8000/docs/`.

## Personalizar

Edita el array `PRODUCTS` de `docs/app.js` para cambiar nombres, precios, etiquetas o descripciones. Las imágenes actuales son **ilustraciones conceptuales**, no fotografías de objetos realmente fabricados.

Cuando se fabriquen las primeras piezas, será recomendable reemplazar estas ilustraciones por fotos reales, medir costes de material, tiempo de impresión y mermas, y definir cómo se envían solicitudes a un adulto responsable antes de ofrecer la venta.

## Precauciones

Pensada para una prueba con público escolar: no contiene formularios que envíen datos, no pide correo ni teléfono y no incorpora servicios analíticos. La selección de productos y notas se guarda exclusivamente en el navegador del visitante. Si evoluciona a tienda comercial con menores, revisar titularidad del comercio, privacidad, derechos de consumidores y fiscalidad antes de activar pagos.
