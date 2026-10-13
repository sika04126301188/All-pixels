# Estudio Matiz — Landing page de pintores, decoradores y estudios de interiorismo

Gracias por descargar **Estudio Matiz** de All Pixels.
Es una landing page completa de **una sola página**, lista para personalizar y publicar.

- Versión: 1.0 · octubre de 2026
- Licencia: Gratis (lee `LICENCIA.txt`)
- Web: https://allpixels.dev

---

## Qué hay dentro del .zip

```
matiz/
├── README.md
├── LICENCIA.txt
├── fuentes/
│   ├── cormorant-500-italic.woff2
│   ├── cormorant-500.woff2
│   ├── cormorant-600.woff2
│   ├── OFL-Cormorant.txt
│   ├── OFL-WorkSans.txt
│   └── work-sans.woff2
├── imagenes/
│   ├── favicon.svg
│   ├── sala-blanca.jpg
│   ├── sala-ocre.jpg
│   ├── sala-relojes.jpg
│   ├── sala-roja.jpg
│   └── textura-abstracta.jpg
└── index.html
```

## Verla en tu ordenador (sin instalar nada)

1. Descomprime el archivo .zip.
2. Abre la carpeta `matiz`.
3. Haz doble clic en `index.html`: se abrirá en tu navegador.

## Editarla

Te recomendamos un editor de código gratuito como **Visual Studio Code** (code.visualstudio.com).

| Quiero cambiar… | Dónde |
| --- | --- |
| Textos | `index.html` — secciones `#inicio`, `#nosotros`, `#servicios`, `#proyectos`, `#ambientes`, `#proceso`, `#testimonios` y `#contacto` |
| Teléfono, correo y zona | busca los textos entre corchetes `[Tu teléfono]`, `[correo@estudiomatiz.example]` y `[Ciudad y alrededores]` (contacto y pie) |
| WhatsApp y redes | enlaces `href="#"` del bloque de contacto y del botón flotante del pie: pon `https://wa.me/34XXXXXXXXX` y tus perfiles |
| Colores del antes / después | `index.html`, dentro de `<style>`, sección 7: `article:nth-of-type(n) span:first-of-type` (antes) y `span:last-of-type` (después) |
| Colores generales | variables en `:root` (`--orange`, `--red`, `--cafe`, `--bg`…) |
| Palabras gigantes de fondo | `content: "matiz"`, `"ambientes"` y `"Matiz"` en el CSS (`::before` / `::after`) |
| Tipografía | al principio de `<style>` (`@font-face`) y carpeta `fuentes/` |
| Menú, cabecera y animaciones | al final de `index.html`, dentro de `<script>` |
| Fotos | carpeta `imagenes/` — sustitúyelas manteniendo el mismo nombre (y actualiza `width`/`height` y `alt` si cambian) |

El HTML usa etiquetas semánticas sin clases y los estilos se aplican por etiqueta y posición (`section:nth-of-type(4)`, `li:nth-of-type(5)`). **Si añades o quitas una sección, revisa esos selectores.**

> **Antes de publicar:**
> 1. **Datos de contacto.** Sustituye todos los textos entre corchetes y los enlaces `#` de WhatsApp, Instagram y Facebook.
> 2. **Testimonios.** Los tres testimonios son huecos para opiniones reales: pon reseñas de clientes de verdad, con su permiso, o quita la sección.
> 3. **Fotos.** Son de ejemplo: lo ideal es mostrar fotos de tus propios trabajos.
> 4. **Formulario y páginas legales.** El formulario no envía mensajes: conéctalo a tu servicio (Formspree o similar) y añade enlaces a tu aviso legal y política de privacidad.

## Publicarla en internet

Puedes subir la carpeta completa a cualquier hosting. Las opciones más sencillas y gratuitas:

- **Netlify Drop** (app.netlify.com/drop): arrastra la carpeta y listo.
- **Cloudflare Pages** o el hosting de tu proveedor de dominio.

## Imágenes y créditos

- Las fotografías de la carpeta `imagenes/` son **solo de ejemplo** y **no están incluidas en la licencia de All Pixels**: sustitúyelas por fotos de tus trabajos o por imágenes con licencia antes de publicar.
- Tipografías **Work Sans** y **Cormorant Garamond**: SIL Open Font License 1.1 (textos de licencia en `fuentes/`). Están incluidas en la carpeta, así que la web no se conecta a Google Fonts.

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
