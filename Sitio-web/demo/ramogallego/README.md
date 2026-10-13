# Ramogallego — Landing page de despachos de abogados, asesorías jurídicas y notarías

Gracias por descargar **Ramogallego** de All Pixels.
Es una landing page completa de **una sola página**, lista para personalizar y publicar.

- Versión: 1.0 · octubre de 2026
- Licencia: Gratis (lee `LICENCIA.txt`)
- Web: https://allpixels.dev

---

## Qué hay dentro del .zip

```
ramogallego/
├── README.md
├── LICENCIA.txt
├── fuentes/
│   ├── instrument-serif-italic.woff2
│   ├── instrument-serif.woff2
│   ├── manrope-400.woff2
│   ├── manrope-500.woff2
│   ├── manrope-600.woff2
│   ├── manrope-700.woff2
│   ├── manrope-800.woff2
│   ├── OFL-InstrumentSerif.txt
│   └── OFL-Manrope.txt
├── imagenes/
│   ├── abogada-despacho.jpg
│   ├── abogada-libros.jpg
│   ├── documentos.jpg
│   ├── estatua-detalle.jpg
│   ├── estatua-noche.jpg
│   ├── favicon.svg
│   ├── hero.jpg
│   └── mazo.jpg
└── index.html
```

## Verla en tu ordenador (sin instalar nada)

1. Descomprime el archivo .zip.
2. Abre la carpeta `ramogallego`.
3. Haz doble clic en `index.html`: se abrirá en tu navegador.

## Editarla

Te recomendamos un editor de código gratuito como **Visual Studio Code** (code.visualstudio.com).

| Quiero cambiar… | Dónde |
| --- | --- |
| Textos | `index.html` — secciones `#inicio`, `#despacho`, `#areas`, `#metodo`, `#opiniones`, `#preguntas` y `#contacto`, y el pie |
| Áreas de práctica | cada `<details>` de `#areas` es un área: `data-foto` y `data-alt` son la foto que aparece al abrirla. Las etiquetas del hero (`#area-…`) abren su área |
| Cifras del hero | atributos `data-contar`, `data-prefijo`, `data-sufijo` y `data-decimales` de cada `<dt>` |
| Teléfono, correo y dirección | busca `+34900000000`, `contacto@ramogallego.example` y `Calle Mayor 12` |
| Colores | `index.html`, dentro de `<style>` — variables en `:root` (`--verde`, `--oliva`, `--arena`, `--terracota`, `--crema`) |
| Tipografía | al principio de `<style>` (`@font-face`) y carpeta `fuentes/` |
| Menú, contadores, áreas, carrusel y formulario | al final de `index.html`, dentro de `<script>` |
| Fotos | carpeta `imagenes/` — sustitúyelas manteniendo el mismo nombre (y actualiza `width`/`height` y `alt` si cambian) |

El HTML usa etiquetas semánticas sin clases y los estilos se aplican por etiqueta y posición (`section:nth-of-type(3)`, `aside:nth-of-type(2)`). **Si añades o quitas una sección, revisa esos selectores.**

> **Antes de publicar:**
> 1. **Datos de ejemplo.** Las cifras (98 %, +1.200 clientes, 4,9, 230 opiniones, 18 años), las opiniones y los datos de contacto son de ejemplo: **sustitúyelos por los tuyos** y no publiques reseñas ni cifras que no puedas acreditar.
> 2. **Publicidad de la abogacía.** Las normas deontológicas de la abogacía limitan la publicidad: evita prometer resultados (por ejemplo, un porcentaje de casos ganados) y revisa los textos con tu colegio de abogados.
> 3. **Datos obligatorios.** Añade el nombre de los letrados, su número de colegiado y el colegio, y los datos de la sociedad en el aviso legal.
> 4. **Formulario y privacidad.** El formulario no envía datos: conéctalo a tu servicio (Formspree o similar) y enlaza una política de privacidad real; los datos de un caso pueden ser muy sensibles.

## Publicarla en internet

Puedes subir la carpeta completa a cualquier hosting. Las opciones más sencillas y gratuitas:

- **Netlify Drop** (app.netlify.com/drop): arrastra la carpeta y listo.
- **Cloudflare Pages** o el hosting de tu proveedor de dominio.

## Imágenes y créditos

- Las fotografías de la carpeta `imagenes/` son de bancos de imágenes gratuitos y **no están incluidas en la licencia de All Pixels**: lo ideal es sustituirlas por fotos del despacho y del equipo.
- Tipografías **Manrope** e **Instrument Serif**: SIL Open Font License 1.1 (textos de licencia en `fuentes/`). Están incluidas en la carpeta, así que la web no se conecta a Google Fonts.

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
