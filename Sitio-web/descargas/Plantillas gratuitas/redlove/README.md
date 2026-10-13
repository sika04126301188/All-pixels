# redLove — Landing page de agencias de bodas

Gracias por descargar **redLove** de All Pixels.
Es una landing page completa de **una sola página**, lista para personalizar y publicar.

- Versión: 1.0 · octubre de 2026
- Licencia: Gratis (lee `LICENCIA.txt`)
- Web: https://allpixels.dev

---

## Qué hay dentro del .zip

```
redlove/
├── README.md
├── LICENCIA.txt
├── fuentes/
│   ├── cormorant-garamond-latin-400-italic.woff2
│   ├── cormorant-garamond-latin-400-normal.woff2
│   ├── cormorant-garamond-latin-500-normal.woff2
│   ├── jost-latin-300-normal.woff2
│   ├── jost-latin-400-normal.woff2
│   ├── jost-latin-500-normal.woff2
│   ├── OFL-Cormorant-Garamond.txt
│   └── OFL-Jost.txt
├── imagenes/
│   ├── detalle-luces.jpg
│   ├── detalle-manos.jpg
│   ├── detalle-perro.jpg
│   ├── detalle-retrato.jpg
│   ├── pareja-estudio.jpg
│   ├── pareja-noche.jpg
│   └── portada-novia-puerta.jpg
└── index.html
```

## Verla en tu ordenador (sin instalar nada)

1. Descomprime el archivo .zip.
2. Abre la carpeta `redlove`.
3. Haz doble clic en `index.html`: se abrirá en tu navegador.

## Editarla

Te recomendamos un editor de código gratuito como **Visual Studio Code** (code.visualstudio.com).

| Quiero cambiar… | Dónde |
| --- | --- |
| Textos | `index.html` — cada sección está marcada con un comentario (`<!-- 1. PORTADA -->`, `<!-- 2. CINTA -->`…) |
| Colores | `index.html`, dentro de `<style>` — apartado **3. VARIABLES** (`--vino`, `--marfil`, `--oro`…) |
| Tipografías | `index.html`, dentro de `<style>` — apartados **2** y **3** (`--fuente-titulos`, `--fuente-texto`) y carpeta `fuentes/` |
| Imágenes | carpeta `imagenes/` — sustitúyelas manteniendo el mismo nombre, o cambia la ruta en el `<img>` |
| Menú móvil, animaciones y formulario | `index.html`, al final, dentro de `<script>` |

Todo el CSS está en un único bloque `<style>` y el HTML usa etiquetas semánticas (`header`, `nav`, `section`, `article`, `figure`, `aside`, `footer`) sin clases. Los estilos se aplican por etiqueta y posición (`section:nth-of-type(3)`), así que **si añades o quitas una sección, revisa los números `nth-of-type` del CSS**.

> **Antes de publicar:**
> 1. **Formulario de contacto.** Ahora mismo no envía mensajes. Crea un formulario gratis en Formspree (formspree.io) o similar y cambia `action="#"` por la dirección que te den. El aviso de prueba desaparece solo.
> 2. **Política de privacidad.** El enlace de la casilla del formulario apunta a `#`: cámbialo por la página de privacidad de tu web.
> 3. **Textos de ejemplo.** redLove es una marca inventada. Las cifras (+250 bodas, 12 años), la opinión de «Lucía y Marcos», el teléfono, el email y la dirección son de ejemplo: **sustitúyelos por datos reales** y no publiques cifras ni opiniones inventadas.
> 4. **Fotos.** Si usas tus propias fotos, recórtalas con una proporción parecida (vertical en la portada y en la galería).

## Publicarla en internet

Puedes subir la carpeta completa a cualquier hosting. Las opciones más sencillas y gratuitas:

- **Netlify Drop** (app.netlify.com/drop): arrastra la carpeta y listo.
- **Cloudflare Pages** o el hosting de tu proveedor de dominio.

## Imágenes y créditos

- Las fotografías de la carpeta `imagenes/` proceden de **Pexels** (pexels.com) y se usan bajo la licencia de Pexels: puedes usarlas gratis en tu web, también con fines comerciales. **No están incluidas en la licencia de All Pixels**: no puedes vender las fotos sin modificar ni subirlas a otros bancos de imágenes, ni dar a entender que las personas que aparecen respaldan tu negocio.
- `portada-novia-puerta.jpg` y `detalle-luces.jpg`: misma foto original (novia en la puerta del jardín).
- `pareja-estudio.jpg`, `detalle-retrato.jpg` y `detalle-manos.jpg`: misma foto original (retrato en blanco y negro).
- `pareja-noche.jpg` y `detalle-perro.jpg`: misma foto original — fotógrafo: Renato Cardoso (renatocardosofotografo.com.br).
- Lo más recomendable es **sustituirlas por fotos de tus propias bodas**.
- Tipografías **Cormorant Garamond** y **Jost**: SIL Open Font License 1.1 (textos de licencia en `fuentes/`). Están incluidas en la carpeta, así que la web no se conecta a Google Fonts.

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
