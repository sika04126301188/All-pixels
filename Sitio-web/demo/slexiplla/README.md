# Slexiplla — Landing page de tiendas de documentos, plantillas y productos digitales descargables

Gracias por descargar **Slexiplla** de All Pixels.
Es una landing page completa de **una sola página**, lista para personalizar y publicar.

- Versión: 1.0 · octubre de 2026
- Licencia: Gratis (lee `LICENCIA.txt`)
- Web: https://allpixels.dev

---

## Qué hay dentro del .zip

```
slexiplla/
├── README.md
├── LICENCIA.txt
├── fuentes/
│   ├── cormorant-garamond-600-italic.woff2
│   ├── manrope-400.woff2
│   ├── manrope-500.woff2
│   ├── manrope-600.woff2
│   ├── manrope-700.woff2
│   ├── manrope-800.woff2
│   ├── OFL-Cormorant-Garamond.txt
│   ├── OFL-Manrope.txt
│   ├── OFL-Sora.txt
│   ├── sora-400.woff2
│   ├── sora-600.woff2
│   ├── sora-700.woff2
│   └── sora-800.woff2
├── iconos/
│   ├── briefcase.svg
│   ├── chart-line.svg
│   ├── download.svg
│   ├── graduation-cap.svg
│   ├── id-card.svg
│   ├── scale.svg
│   ├── search.svg
│   ├── shield-check.svg
│   └── sparkles.svg
├── imagenes/
│   ├── boletin-nubes.jpg
│   ├── doc-arrendamiento.jpg
│   ├── doc-curriculum.jpg
│   ├── doc-derecho-mercantil.jpg
│   ├── doc-modelo-financiero.jpg
│   ├── doc-plan-negocio.jpg
│   ├── doc-tfg.jpg
│   └── hero-montanas.jpg
├── index.html
└── LICENCIA-ICONOS-LUCIDE.txt
```

## Verla en tu ordenador (sin instalar nada)

1. Descomprime el archivo .zip.
2. Abre la carpeta `slexiplla`.
3. Haz doble clic en `index.html`: se abrirá en tu navegador.

## Editarla

Te recomendamos un editor de código gratuito como **Visual Studio Code** (code.visualstudio.com).

| Quiero cambiar… | Dónde |
| --- | --- |
| Textos | `index.html` — secciones `#inicio`, `#categorias`, `#catalogo`, `#como-funciona`, `#vender`, `#precios`, `#opiniones` y `#faq` |
| Documentos del catálogo | `#catalogo`: cada documento es un `<article>`. La primera `<p>` es su categoría (el filtro la lee por sus 3 primeras letras: «Legal» → «leg») y el precio va en `<footer><strong>` |
| Colores | `index.html`, dentro de `<style>` — variables en `:root` (`--morado`, `--verde`, `--negro`, `--blanco`) |
| Tipografía | `index.html`, sección «0b. Tipografías locales» de `<style>` y carpeta `fuentes/` |
| Iconos | carpeta `iconos/` (Lucide). Se muestran con `<figure><img src="iconos/…svg"></figure>` y el CSS los pinta en blanco |
| Carrito, filtro, menú y boletín | `index.html`, al final, dentro de `<script>` |
| Imágenes | carpeta `imagenes/` — sustitúyelas manteniendo el mismo nombre (y actualiza `width`/`height` y `alt` si cambian) |

El HTML usa etiquetas semánticas sin clases y los estilos se aplican por etiqueta y posición (`section:nth-of-type(3)`, `p:first-of-type`). **Si añades o quitas una sección o un párrafo, revisa esos selectores.**

> **Antes de publicar:**
> 1. **Pagos.** El carrito funciona en la página (añadir, quitar, total), pero **no cobra**: enlaza «Finalizar compra» a tu pasarela (Stripe, PayPal, Lemon Squeezy, Gumroad…) y quita el aviso de ejemplo del `<script>`.
> 2. **Boletín.** No envía nada todavía: conéctalo a MailerLite, Brevo o similar cambiando `action="#"`. Si prometes una plantilla gratis cada semana, asegúrate de poder darla.
> 3. **Datos de ejemplo.** Slexiplla es una marca inventada. Las cifras (12.000 documentos, 48.000 clientes, 4,9/5, 3.200 reseñas), las opiniones, los precios, el 70 % para creadores, el panel de ganancias y los correos (`@slexiplla.example`) son de ejemplo: **sustitúyelos por datos reales** y no publiques cifras ni opiniones inventadas.
> 4. **Documentos legales.** Si vendes contratos o modelos legales, no prometas «adaptado a la normativa vigente» ni «revisado por expertos» si no es cierto, y añade un aviso de que no sustituyen el asesoramiento profesional.
> 5. **Venta a consumidores.** En la UE, los contenidos digitales se pueden vender sin derecho de desistimiento solo si el cliente lo acepta expresamente antes de la descarga: recógelo en el pago y en tus condiciones. Revisa que la FAQ de reembolsos coincida con tu política real.
> 6. **Medios de pago.** El pie menciona Visa, Mastercard, PayPal y Bizum: deja solo los que aceptes de verdad.

## Publicarla en internet

Puedes subir la carpeta completa a cualquier hosting. Las opciones más sencillas y gratuitas:

- **Netlify Drop** (app.netlify.com/drop): arrastra la carpeta y listo.
- **Cloudflare Pages** o el hosting de tu proveedor de dominio.

## Imágenes y créditos

- Las imágenes de la carpeta `imagenes/` (fondos ilustrados y vistas previas de documentos) se han creado para esta plantilla y **se incluyen en la licencia de All Pixels**.
- Iconos de **Lucide** (lucide.dev), licencia ISC — texto en `LICENCIA-ICONOS-LUCIDE.txt`.
- Tipografías **Sora**, **Manrope** y **Cormorant Garamond**: SIL Open Font License 1.1 (textos de licencia en `fuentes/`). Están incluidas en la carpeta, así que la web no se conecta a Google Fonts.

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
