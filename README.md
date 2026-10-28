# LayerLab ✳ — 3D para estudiantes, desde Sevilla

Tienda-catálogo de demostración para estudiantes y adolescentes de Sevilla: accesorios de clase, gadgets, gaming, baloncesto, fútbol, Feria, cerámica de Triana, Giralda y figuras coleccionables personalizadas.

**Web estática lista para GitHub Pages** · HTML + CSS + JavaScript puro · sin build, claves API, servidor, cuentas ni pagos.

## Abrir

**https://deivil79.github.io/3dprinter/**

La dirección funcionará cuando GitHub Pages esté activo en **Settings → Pages**. Configuración recomendada: `Deploy from a branch`, rama `main`, carpeta `/docs`. Si Pages publica `/(root)`, el `index.html` raíz redirige a `/docs/`.

## Novedades

- 16 productos organizados en 6 categorías: **Estudio, Sevilla, Gaming, Deporte, Personalizados y Regalos**.
- **16 imágenes SVG originales**, una por producto, guardadas en `docs/assets/`. Son ilustraciones conceptuales **generadas para mostrar ideas**, no fotos ni archivos STL de productos fabricados.
- Portada con composición gráfica de tres artículos y una silueta ilustrada de Sevilla.
- Filtros y buscador de catálogo.
- Personalizador de colores, detalles y unidades.
- **Figura coleccionable cabezona estilo pop: ejemplo basado en Gustavo Adolfo Bécquer**, poeta sevillano. El cliente puede solicitar otra persona y describir peinado, ropa, aficiones y accesorios. Es un diseño ilustrativo original; no está asociado ni autorizado por Funko.
- Carrito local que conserva la selección mediante `localStorage`.
- Preparación de solicitudes de encargo con **copiar texto** o **compartir** desde el móvil. No envía nada automáticamente.
- Diseño responsive con **modo oscuro automático**, usando `@media (prefers-color-scheme: dark)`. También cambia el color de interfaz del navegador según el modo del móvil.
- `manifest.webmanifest` e icono para añadir a pantalla de inicio.

## Limitaciones

No hay autenticación Google, base de datos, gestión real de clientes, pagos con tarjeta/PayPal, seguimiento de pedidos ni administración; GitHub Pages no ofrece un backend para ello. Los pedidos se acuerdan fuera de la web y los precios son **orientativos**.

El campo de solicitud de ideas no transmite información a un servidor: prepara un mensaje que el visitante debe copiar o compartir.

**Antes de vender**: validar que las piezas se pueden fabricar en la impresora disponible, su tiempo de impresión, coste, calidad, tolerancias, material, seguridad y acabado. Reemplazar ilustraciones conceptuales por fotos reales. No reproducir escudos o personajes sujetos a derechos sin permiso; revisar la titularidad adulta del negocio, obligaciones fiscales, privacidad y consumo si los compradores son menores.

## Estructura

```
index.html                   Redirección desde Pages raíz
docs/
  .nojekyll
  index.html                 Interfaz
  styles.css                 Estilos + responsive + auto dark mode
  app.js                     Catálogo + filtros + carrito + solicitudes
  manifest.webmanifest
  icon.svg
  assets/
    key.svg, stand.svg, fidget.svg, cable.svg, bookmark.svg, creature.svg
    pencil.svg, notebook.svg, headset.svg, gamepad.svg, basket.svg
    football.svg, fan.svg, tile.svg, funko.svg, badge.svg
    sevilla-skyline.svg
```

Para probar localmente: `python3 -m http.server 8000` desde la raíz y entrar en `http://localhost:8000/docs/`.

## Personalización rápida

Los nombres, precios y categorías están en el array `PRODUCTS` de `docs/app.js`. Los textos generales están en `docs/index.html` y la apariencia en `docs/styles.css`. Cada ilustración vectorial está en `docs/assets/` y puede reemplazarse por una foto final con el mismo nombre de archivo o cambiando la ruta de la imagen.

El modo oscuro responde automáticamente a la preferencia de color del sistema operativo, sin guardar preferencias ni requerir JavaScript.
