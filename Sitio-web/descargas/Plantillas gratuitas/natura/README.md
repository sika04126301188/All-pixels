# Natura Studio — Landing page de estudios de diseño y desarrollo web

Gracias por descargar **Natura Studio** de All Pixels.
Es una landing page completa de **una sola página**, lista para personalizar y publicar.

- Versión: 1.0 · octubre de 2026
- Licencia: Gratis (lee `LICENCIA.txt`)
- Web: https://allpixels.dev

---

## Qué hay dentro del .zip

```
natura/
├── README.md
├── LICENCIA.txt
├── fuentes/
│   ├── fraunces-latin-400-italic.woff2
│   ├── fraunces-latin-400-normal.woff2
│   ├── fraunces-latin-500-normal.woff2
│   ├── fraunces-latin-700-normal.woff2
│   ├── OFL-Fraunces.txt
│   ├── OFL-Plus-Jakarta-Sans.txt
│   ├── plus-jakarta-sans-latin-400-normal.woff2
│   ├── plus-jakarta-sans-latin-500-normal.woff2
│   ├── plus-jakarta-sans-latin-600-normal.woff2
│   └── plus-jakarta-sans-latin-700-normal.woff2
├── imagenes/
│   ├── copas.jpg
│   └── ramas.jpg
└── index.html
```

## Verla en tu ordenador (sin instalar nada)

1. Descomprime el archivo .zip.
2. Abre la carpeta `natura`.
3. Haz doble clic en `index.html`: se abrirá en tu navegador.

## Editarla

Te recomendamos un editor de código gratuito como **Visual Studio Code** (code.visualstudio.com).

| Quiero cambiar… | Dónde |
| --- | --- |
| Textos | `index.html` — secciones `#landing-hero`, `#bento-section` y `#contacto-section`, cada una marcada con un comentario |
| Colores | `index.html`, dentro de `<style>` — variables en `:root` (`--c-wine`, `--c-terracota`, `--c-autumn-gold`…) |
| Tipografías | `index.html`, al principio de `<style>` (`@font-face`) y carpeta `fuentes/` |
| Efecto 3D, menú, agenda y formularios | `index.html`, al final, dentro de `<script>` (apartados 1 a 6) |
| Fotos | carpeta `imagenes/` — sustitúyelas manteniendo el mismo nombre (y actualiza `width`/`height` y `alt` en el HTML si cambian) |

El HTML usa etiquetas semánticas casi sin clases y los estilos se aplican por etiqueta, `id` y posición (`article:nth-of-type(3)`). **Si añades o quitas un elemento, revisa los números `nth-of-type` del CSS.**

> **Antes de publicar:**
> 1. **Formularios.** El de contacto y el de la newsletter no envían nada: muestran un aviso de ejemplo. Conéctalos a Formspree (formspree.io), MailerLite o similar cambiando `action="#"` por la dirección que te den; el script deja entonces que el envío se haga normalmente.
> 2. **Agenda.** El calendario es real (muestra el mes actual, deja elegir un día laborable y lo añade al mensaje del formulario), pero no reserva citas por sí solo. Si usas Calendly, Cal.com o similar, enlaza ahí el botón «Elegir Fecha y Hora».
> 3. **Enlaces.** Privacidad, términos, redes sociales y las páginas del pie («Filosofía», «Proceso»…) apuntan a `#`: enlázalos a tus páginas reales.
> 4. **Datos de ejemplo.** Natura Studio es una marca inventada. El email (`hola@naturastudio.example`), el teléfono, las cifras (150+ proyectos, 40+ marcas, 94 %…) son de ejemplo: **sustitúyelos por datos reales** y no publiques cifras inventadas.

## Publicarla en internet

Puedes subir la carpeta completa a cualquier hosting. Las opciones más sencillas y gratuitas:

- **Netlify Drop** (app.netlify.com/drop): arrastra la carpeta y listo.
- **Cloudflare Pages** o el hosting de tu proveedor de dominio.

## Imágenes y créditos

- Las fotografías de la carpeta `imagenes/` son **solo de ejemplo** y **no están incluidas en la licencia de All Pixels**: sustitúyelas por fotos propias o con licencia para tu proyecto.
- Tipografías **Fraunces** y **Plus Jakarta Sans**: SIL Open Font License 1.1 (textos de licencia en `fuentes/`). Están incluidas en la carpeta, así que la web no se conecta a Google Fonts.
- Los iconos de la franja de características y de la agenda son SVG propios de la plantilla.

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
