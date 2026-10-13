# KINETIC — Landing page de estudios de diseño y desarrollo web, agencias digitales y freelancers

Gracias por descargar **KINETIC** de All Pixels.
Es una landing page completa de **una sola página**, lista para personalizar y publicar.

- Versión: 1.0 · octubre de 2026
- Licencia: Gratis (lee `LICENCIA.txt`)
- Web: https://allpixels.dev

---

## Qué hay dentro del .zip

```
kinetic/
├── README.md
├── LICENCIA.txt
├── fuentes/
│   ├── OFL-Plus-Jakarta-Sans.txt
│   ├── plus-jakarta-sans-latin-300-normal.woff2
│   ├── plus-jakarta-sans-latin-400-normal.woff2
│   ├── plus-jakarta-sans-latin-600-normal.woff2
│   ├── plus-jakarta-sans-latin-700-normal.woff2
│   └── plus-jakarta-sans-latin-800-normal.woff2
├── imagenes/
│   ├── bento-codigo.jpg
│   ├── bento-cristal.jpg
│   ├── bento-fluido.jpg
│   ├── bento-liquido.jpg
│   ├── proyecto-aura.jpg
│   ├── proyecto-nebula.jpg
│   ├── proyecto-pulso.jpg
│   └── proyecto-vortice.jpg
├── index.html
└── LICENCIA-ICONOS-FONT-AWESOME.txt
```

## Verla en tu ordenador (sin instalar nada)

1. Descomprime el archivo .zip.
2. Abre la carpeta `kinetic`.
3. Haz doble clic en `index.html`: se abrirá en tu navegador.

## Editarla

Te recomendamos un editor de código gratuito como **Visual Studio Code** (code.visualstudio.com).

| Quiero cambiar… | Dónde |
| --- | --- |
| Textos | `index.html` — secciones `#inicio`, `#tecnologia`, `#proyectos`, `#proceso`, `#trayectoria`, `#estudio` y `#contacto` |
| Proyectos del carrusel | `#proyectos`: cada proyecto es un `<article>`. Si añades uno, añade también su punto en la lista de abajo y cambia su `aria-label` («Proyecto 5 de 5») |
| Colores | `index.html`, dentro de `<style>` — variables en `:root` (`--accent-cyan`, `--accent-purple`, `--bg-dark`…) |
| Tipografía | `index.html`, al principio de `<style>` (`@font-face`) y carpeta `fuentes/` |
| Iconos (menú, flechas, redes) | al principio del `<body>`, dentro de un `<svg>` con `<symbol id="i-…">` |
| Brillo del cursor, efecto 3D, carrusel, menú y formulario | `index.html`, al final, dentro de `<script>` |
| Imágenes | carpeta `imagenes/` — sustitúyelas manteniendo el mismo nombre (y actualiza `width`/`height` y `alt` si cambian) |

El HTML usa etiquetas semánticas casi sin clases y los estilos se aplican por etiqueta, `id` y posición (`section:nth-of-type(3)`, `p:last-of-type`). **Si añades o quitas una sección o un párrafo, revisa esos selectores.**

> **Antes de publicar:**
> 1. **Formulario.** No envía nada todavía: conéctalo a Formspree, Web3Forms o similar cambiando `action="#"` por la dirección que te den.
> 2. **Datos de ejemplo.** KINETIC es un estudio inventado. Los proyectos (Pulso, Nébula, Vórtice, Aura), sus cifras (31%, 75%, 40.000 puntos…), la trayectoria, los correos (`@kinetic.example`) y los enlaces «Sitio en vivo» y de redes son de ejemplo: **sustitúyelos por tus proyectos y datos reales** y no publiques cifras que no puedas demostrar.
> 3. **Privacidad.** Enlaza «política de privacidad» a tu página real antes de recoger datos con el formulario.
> 4. **Efectos.** El brillo del cursor y el efecto 3D solo se activan con ratón; en móviles y con «reducir movimiento» la página se muestra sin animaciones pesadas.

## Publicarla en internet

Puedes subir la carpeta completa a cualquier hosting. Las opciones más sencillas y gratuitas:

- **Netlify Drop** (app.netlify.com/drop): arrastra la carpeta y listo.
- **Cloudflare Pages** o el hosting de tu proveedor de dominio.

## Imágenes y créditos

- Las imágenes de la carpeta `imagenes/` (fondos abstractos, editor de código y capturas de los proyectos) se han creado para esta plantilla y **se incluyen en la licencia de All Pixels**. Las capturas muestran interfaces y marcas inventadas: sustitúyelas por capturas de tus propios proyectos.
- Iconos de **Font Awesome Free** (fontawesome.com), licencia CC BY 4.0 — texto en `LICENCIA-ICONOS-FONT-AWESOME.txt`. Van incluidos en la página como SVG, así que no hace falta cargar Font Awesome.
- Tipografía **Plus Jakarta Sans**: SIL Open Font License 1.1 (texto de licencia en `fuentes/`). Está incluida en la carpeta, así que la web no se conecta a Google Fonts.

## Licencia

Licencia **Gratis**: puedes usarla en proyectos personales y comerciales, también para clientes. La única condición es mantener un crédito visible con enlace en el pie de la web:

```html
<a href="https://allpixels.dev">Plantilla de All Pixels</a>
```

No puedes revender ni redistribuir la plantilla como plantilla. Texto completo en `LICENCIA.txt`.

## ¿Necesitas ayuda?

Visita **https://allpixels.dev** para ver novedades y otras plantillas.

---

All Pixels · Cada píxel, listo para lanzar.
