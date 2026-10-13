# Jardines Verdeluz — Landing page de empresas de jardinería, paisajismo y mantenimiento de jardines

Gracias por descargar **Jardines Verdeluz** de All Pixels.
Es una landing page completa de **una sola página**, lista para personalizar y publicar.

- Versión: 1.0 · octubre de 2026
- Licencia: Gratis (lee `LICENCIA.txt`)
- Web: https://allpixels.dev

---

## Qué hay dentro del .zip

```
verdeluz/
├── README.md
├── LICENCIA.txt
├── fuentes/
│   ├── fraunces-300-italic.woff2
│   ├── fraunces-300-normal.woff2
│   ├── fraunces-400-italic.woff2
│   ├── fraunces-400-normal.woff2
│   ├── manrope-400.woff2
│   ├── manrope-500.woff2
│   ├── manrope-600.woff2
│   ├── manrope-700.woff2
│   ├── OFL-Fraunces.txt
│   └── OFL-Manrope.txt
├── iconos/
│   ├── brote.svg
│   ├── check.svg
│   ├── correo.svg
│   ├── experiencia.svg
│   ├── facebook.svg
│   ├── gota.svg
│   ├── hoja-crema.svg
│   ├── hoja.svg
│   ├── instagram.svg
│   ├── LICENCIA-ICONOS.txt
│   ├── reloj.svg
│   ├── sostenible.svg
│   ├── tecnologia.svg
│   ├── telefono.svg
│   ├── tijeras.svg
│   ├── ubicacion.svg
│   └── whatsapp.svg
├── imagenes/
│   ├── diseno-floral.jpg
│   ├── hero-jardin.jpg
│   ├── patio-flores.jpg
│   ├── proyecto-1-antes.jpg
│   ├── proyecto-1-despues.jpg
│   ├── proyecto-2-antes.jpg
│   ├── proyecto-2-despues.jpg
│   ├── proyecto-3-antes.jpg
│   └── proyecto-3-despues.jpg
└── index.html
```

## Verla en tu ordenador (sin instalar nada)

1. Descomprime el archivo .zip.
2. Abre la carpeta `verdeluz`.
3. Haz doble clic en `index.html`: se abrirá en tu navegador.

## Editarla

Te recomendamos un editor de código gratuito como **Visual Studio Code** (code.visualstudio.com).

| Quiero cambiar… | Dónde |
| --- | --- |
| Textos | `index.html` — secciones `#inicio`, `#servicios`, `#elegirnos`, `#proceso`, `#proyectos` y `#contacto`, y el pie |
| Proyectos antes / después | cada `<article>` de `#proyectos`: la primera `<img>` es el «antes» y la segunda el «después». Las dos fotos deben tener el mismo encuadre y proporción |
| Opinión de clienta | `<blockquote>` de `#elegirnos`; las iniciales del círculo salen del atributo `data-iniciales` |
| Teléfono, correo y zona | busca `+34600000000`, `hola@jardinesverdeluz.com` y `Área metropolitana` |
| Colores | `index.html`, dentro de `<style>` — variables en `:root` (`--bosque`, `--musgo`, `--salvia`, `--crema`, `--oro`) |
| Tipografía | al principio de `<style>` (`@font-face`) y carpeta `fuentes/` |
| Iconos | carpeta `iconos/` — SVG con el color ya aplicado (atributo `fill`) |
| Menú, deslizadores, animaciones y formulario | al final de `index.html`, dentro de `<script>` |
| Fotos | carpeta `imagenes/` — sustitúyelas manteniendo el mismo nombre (y actualiza `width`/`height` y `alt` si cambian) |

El HTML usa etiquetas semánticas sin clases y los estilos se aplican por etiqueta y posición (`section:nth-of-type(3)`, `article:nth-of-type(even)`). **Si añades o quitas una sección, revisa esos selectores.**

> **Antes de publicar:**
> 1. **Datos de ejemplo.** La opinión de la clienta, los proyectos y los datos de contacto son de ejemplo: **sustitúyelos por los tuyos** y no publiques reseñas que no sean reales.
> 2. **Fotos de antes y después.** Usa fotos reales de tus trabajos, tomadas desde el mismo punto: las de la plantilla solo sirven para mostrar el efecto.
> 3. **Formulario y privacidad.** El formulario no envía datos: conéctalo a tu servicio (Formspree o similar) y enlaza una política de privacidad real.

## Publicarla en internet

Puedes subir la carpeta completa a cualquier hosting. Las opciones más sencillas y gratuitas:

- **Netlify Drop** (app.netlify.com/drop): arrastra la carpeta y listo.
- **Cloudflare Pages** o el hosting de tu proveedor de dominio.

## Imágenes y créditos

- Las fotografías de la carpeta `imagenes/` son **solo de ejemplo** y **no están incluidas en la licencia de All Pixels**: sustitúyelas por fotos de tus propios jardines.
- Iconos **Font Awesome Free**: CC BY 4.0 (ver `iconos/LICENCIA-ICONOS.txt`).
- Tipografías **Fraunces** y **Manrope**: SIL Open Font License 1.1 (textos de licencia en `fuentes/`). Están incluidas en la carpeta, así que la web no se conecta a Google Fonts.

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
