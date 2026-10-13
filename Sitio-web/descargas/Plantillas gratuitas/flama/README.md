# Flama Urbana — Landing page de bares, restaurantes de comida callejera y comida a domicilio

Gracias por descargar **Flama Urbana** de All Pixels.
Es una landing page completa de **una sola página**, lista para personalizar y publicar.

- Versión: 1.0 · octubre de 2026
- Licencia: Gratis (lee `LICENCIA.txt`)
- Web: https://allpixels.dev

---

## Qué hay dentro del .zip

```
flama/
├── README.md
├── LICENCIA.txt
├── fuentes/
│   ├── OFL-Poppins.txt
│   ├── poppins-latin-300-normal.woff2
│   ├── poppins-latin-400-normal.woff2
│   ├── poppins-latin-500-normal.woff2
│   ├── poppins-latin-600-normal.woff2
│   ├── poppins-latin-700-normal.woff2
│   └── poppins-latin-800-normal.woff2
├── imagenes/
│   ├── bocata-smokehouse.jpg
│   ├── entrana-brasa.jpg
│   ├── galeria-catering.jpg
│   ├── galeria-compartir.jpg
│   ├── galeria-eventos.jpg
│   ├── galeria-tosta.jpg
│   ├── nosotros-mesa.jpg
│   ├── portada.jpg
│   ├── pulpitos-flama.jpg
│   ├── queso-crispy.jpg
│   ├── saltado-flama.jpg
│   └── taco-brasa.jpg
├── index.html
└── LICENCIA-ICONOS-FONT-AWESOME.txt
```

## Verla en tu ordenador (sin instalar nada)

1. Descomprime el archivo .zip.
2. Abre la carpeta `flama`.
3. Haz doble clic en `index.html`: se abrirá en tu navegador.

## Editarla

Te recomendamos un editor de código gratuito como **Visual Studio Code** (code.visualstudio.com).

| Quiero cambiar… | Dónde |
| --- | --- |
| Textos, platos y precios | `index.html` — cada sección tiene su `id` (`#inicio`, `#ventajas`, `#menu`, `#galeria`, `#nosotros`, `#testimonios`, `#faq`, `#contacto`, `#newsletter`) |
| Colores | `index.html`, dentro de `<style>` — variables en `:root` (`--primary`, `--flame`, `--dark`…) |
| Tipografía | `index.html`, al principio de `<style>` (`@font-face`) y carpeta `fuentes/` |
| Iconos | están al principio del `<body>`, dentro de un `<svg>` con `<symbol id="i-…">`; se usan con `<svg><use href="#i-fire"/></svg>` |
| Horario y aviso «Abierto ahora» | el texto de la sección `#contacto` **y** el objeto `HORARIO` del `<script>` |
| Menú móvil, pedido, newsletter y animaciones | `index.html`, al final, dentro de `<script>` |
| Fotos | carpeta `imagenes/` — sustitúyelas manteniendo el mismo nombre |

El HTML usa etiquetas semánticas casi sin clases y los estilos se aplican por etiqueta, `id` y posición (`p:first-of-type`, `a:last-of-type`). **Si añades o quitas un elemento, revisa esos selectores.**

> **Antes de publicar:**
> 1. **Pedidos.** Los botones «+» suman productos a un contador y muestran un aviso, pero **no hay carrito ni pago**: enlaza «Pide Ahora» a tu sistema de pedidos (tu web de reparto, WhatsApp, Glovo, Uber Eats…).
> 2. **Newsletter.** El formulario no envía nada: conéctalo a MailerLite, Brevo o similar cambiando `action="#"` por la dirección que te den. Si prometes un descuento, asegúrate de poder darlo.
> 3. **Datos de ejemplo.** Flama Urbana es una marca inventada. La dirección, el teléfono, el email (`hola@flamaurbana.example`), los precios, las cifras (+15k clientes, 4,9★, «desde 2015», «menos de 30 minutos») y las opiniones son de ejemplo: **sustitúyelos por datos reales** y no publiques opiniones ni cifras inventadas. Si usas reseñas de Google, enlaza a tu ficha real.
> 4. **Alérgenos.** En España (Reglamento UE 1169/2011) tienes que informar de los alérgenos de cada plato: añádelos en la descripción o en una carta aparte.
> 5. **Afirmaciones.** «Higiene certificada» o «ingredientes de granja» deben ser ciertas; si no lo son, cambia esos textos.

## Publicarla en internet

Puedes subir la carpeta completa a cualquier hosting. Las opciones más sencillas y gratuitas:

- **Netlify Drop** (app.netlify.com/drop): arrastra la carpeta y listo.
- **Cloudflare Pages** o el hosting de tu proveedor de dominio.

## Imágenes y créditos

- Las fotografías de la carpeta `imagenes/` son **solo de ejemplo** y **no están incluidas en la licencia de All Pixels**: sustitúyelas por fotos de tus propios platos antes de publicar. Se han recortado para que no aparezcan marcas de terceros; si pones las tuyas, evita logotipos de bebidas o de otros locales.
- Iconos de **Font Awesome Free** (fontawesome.com), licencia CC BY 4.0 — texto en `LICENCIA-ICONOS-FONT-AWESOME.txt`. Van incluidos en la página como SVG, así que no hace falta cargar Font Awesome.
- Tipografía **Poppins**: SIL Open Font License 1.1 (texto de licencia en `fuentes/`). Está incluida en la carpeta, así que la web no se conecta a Google Fonts.

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
