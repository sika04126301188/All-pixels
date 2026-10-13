# FlySky — Landing page de agencias de viajes, buscadores de vuelos y turismo

Gracias por descargar **FlySky** de All Pixels.
Es una landing page completa de **una sola página**, lista para personalizar y publicar.

- Versión: 1.0 · octubre de 2026
- Licencia: Gratis (lee `LICENCIA.txt`)
- Web: https://allpixels.dev

---

## Qué hay dentro del .zip

```
flysky/
├── README.md
├── LICENCIA.txt
├── fuentes/
│   ├── OFL-Plus-Jakarta-Sans.txt
│   ├── plus-jakarta-sans-latin-400-normal.woff2
│   ├── plus-jakarta-sans-latin-500-normal.woff2
│   ├── plus-jakarta-sans-latin-600-normal.woff2
│   ├── plus-jakarta-sans-latin-700-normal.woff2
│   └── plus-jakarta-sans-latin-800-normal.woff2
├── imagenes/
│   ├── avion.png
│   ├── destino-dubai.jpg
│   ├── destino-paris.jpg
│   ├── destino-tokio.jpg
│   ├── nosotros-montana.jpg
│   ├── nosotros-playa.jpg
│   ├── nosotros-ventanilla.jpg
│   └── viajera-barco.jpg
├── index.html
└── LICENCIA-ICONOS-FONT-AWESOME.txt
```

## Verla en tu ordenador (sin instalar nada)

1. Descomprime el archivo .zip.
2. Abre la carpeta `flysky`.
3. Haz doble clic en `index.html`: se abrirá en tu navegador.

## Editarla

Te recomendamos un editor de código gratuito como **Visual Studio Code** (code.visualstudio.com).

| Quiero cambiar… | Dónde |
| --- | --- |
| Textos | `index.html` — secciones `#inicio`, `#nosotros`, `#destinos`, `#como-funciona`, `#ventajas`, `#testimonios`, `#newsletter`, `#faq` y `#contacto` |
| Destinos y precios | `#destinos`: cada destino es un `<article>`. El botón «Ver vuelos» rellena el buscador con su `data-destino` |
| Colores | `index.html`, dentro de `<style>` — variables en `:root` (`--primary`, `--primary-ink`, `--secondary`, `--coral`…) |
| Tipografía | `index.html`, al principio de `<style>` (`@font-face`) y carpeta `fuentes/` |
| Iconos | al principio del `<body>`, dentro de un `<svg>` con `<symbol id="i-…">`; se usan con `<svg><use href="#i-plane"/></svg>` |
| Buscador, menú, favoritos, cifras y formularios | `index.html`, al final, dentro de `<script>` |
| Imágenes | carpeta `imagenes/` — sustitúyelas manteniendo el mismo nombre (y actualiza `width`/`height` y `alt` si cambian) |

El HTML usa etiquetas semánticas casi sin clases y los estilos se aplican por etiqueta, `id` y posición (`figure:first-of-type`, `label:nth-of-type(4)`). **Si añades o quitas un elemento, revisa esos selectores.**

> **Antes de publicar:**
> 1. **Buscador de vuelos.** Es de ejemplo: muestra un aviso pero no busca nada. Enlázalo a tu motor de reservas o a tu programa de afiliados (cambia `action="#"` y el bloque «Buscador de vuelos» del `<script>`).
> 2. **Formularios.** Newsletter y contacto no envían nada todavía: conéctalos a Formspree, Brevo, MailerLite o similar cambiando `action="#"`.
> 3. **Datos de ejemplo.** FlySky es una marca inventada. Precios, cifras (+50 destinos, +2M viajeros, +15 años), opiniones, teléfono (`+34 600 000 000`), correo (`hola@flysky.example`), dirección y WhatsApp son de ejemplo: **sustitúyelos por datos reales** y no publiques cifras ni opiniones inventadas.
> 4. **Agencia de viajes.** Si vendes viajes combinados en España necesitas el título-licencia de agencia (CICMA o el registro de tu comunidad) y mostrar tus condiciones generales. Comprueba también que «cancelación flexible» y «asistencia 24/7» sean ciertas.
> 5. **Privacidad.** Enlaza «política de privacidad» a tu página real antes de recoger datos.

## Publicarla en internet

Puedes subir la carpeta completa a cualquier hosting. Las opciones más sencillas y gratuitas:

- **Netlify Drop** (app.netlify.com/drop): arrastra la carpeta y listo.
- **Cloudflare Pages** o el hosting de tu proveedor de dominio.

## Imágenes y créditos

- Las ilustraciones de destinos y de la sección «Nosotros» (`destino-*.jpg` y `nosotros-*.jpg`) se han creado para esta plantilla y **se incluyen en la licencia de All Pixels**.
- La foto de la portada (`viajera-barco.jpg`) y el avión (`avion.png`) son **solo de ejemplo** y **no están incluidos en la licencia de All Pixels**: sustitúyelos por imágenes propias o con licencia antes de publicar.
- Iconos de **Font Awesome Free** (fontawesome.com), licencia CC BY 4.0 — texto en `LICENCIA-ICONOS-FONT-AWESOME.txt`. Van incluidos en la página como SVG.
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
