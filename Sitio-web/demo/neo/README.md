# Neo Óptica — Landing page de ópticas y centros de optometría

Gracias por descargar **Neo Óptica** de All Pixels.
Es una landing page completa de **una sola página**, lista para personalizar y publicar.

- Versión: 1.0 · octubre de 2026
- Licencia: Gratis (lee `LICENCIA.txt`)
- Web: https://allpixels.dev

---

## Qué hay dentro del .zip

```
neo/
├── README.md
├── LICENCIA.txt
├── fuentes/
│   ├── OFL-Plus-Jakarta-Sans.txt
│   ├── plus-jakarta-sans-latin-400-normal.woff2
│   ├── plus-jakarta-sans-latin-500-normal.woff2
│   ├── plus-jakarta-sans-latin-600-normal.woff2
│   └── plus-jakarta-sans-latin-700-normal.woff2
├── imagenes/
│   ├── foroptero.jpg
│   ├── maletin-prueba.jpg
│   └── montura-prueba.jpg
└── index.html
```

## Verla en tu ordenador (sin instalar nada)

1. Descomprime el archivo .zip.
2. Abre la carpeta `neo`.
3. Haz doble clic en `index.html`: se abrirá en tu navegador.

## Editarla

Te recomendamos un editor de código gratuito como **Visual Studio Code** (code.visualstudio.com).

| Quiero cambiar… | Dónde |
| --- | --- |
| Textos | `index.html` — secciones `#inicio`, `#servicios`, `#instalaciones`, `#testimonios` y `#contacto` |
| Colores | `index.html`, dentro de `<style>` — variables en `:root` (`--primary`, `--bg-main`, `--text-main`…) |
| Tipografía | `index.html`, al principio de `<style>` (`@font-face`) y carpeta `fuentes/` |
| Iconos de servicios | `index.html` — cada servicio lleva su icono SVG en el primer `<p>` |
| Menú, efecto 3D, aparición al bajar y formulario | `index.html`, al final, dentro de `<script>` |
| Fotos | carpeta `imagenes/` — sustitúyelas manteniendo el mismo nombre (y actualiza `width`/`height` y `alt` si cambian) |

El HTML usa etiquetas semánticas casi sin clases y los estilos se aplican por etiqueta, `id` y posición (`aside:first-of-type`, `section:nth-of-type(2)`). **Si añades o quitas un elemento, revisa esos selectores.**

> **Antes de publicar:**
> 1. **Formulario.** Ahora mismo no envía nada: muestra un aviso de ejemplo. Conéctalo a Formspree (formspree.io) o similar cambiando `action="#"` por la dirección que te den.
> 2. **Enlaces.** Privacidad, términos, cookies y redes sociales apuntan a `#`: enlázalos a tus páginas reales.
> 3. **Datos de ejemplo.** Neo Óptica es una marca inventada. El email (`hola@neooptica.example`), las marcas de la franja (Lumina, Nordvik…) y las opiniones de Ana Torres y Miguel Fernández son de ejemplo: **pon tus marcas reales y opiniones reales de clientes**; no publiques opiniones inventadas.
> 4. **Marcas comerciales.** Si muestras logotipos o nombres de marcas reales de gafas o lentes, asegúrate de que trabajas con ellas y de que puedes usarlos.
> 5. **Publicidad sanitaria.** En España la publicidad de establecimientos sanitarios (las ópticas lo son) está regulada: revisa la normativa de tu comunidad autónoma.

## Publicarla en internet

Puedes subir la carpeta completa a cualquier hosting. Las opciones más sencillas y gratuitas:

- **Netlify Drop** (app.netlify.com/drop): arrastra la carpeta y listo.
- **Cloudflare Pages** o el hosting de tu proveedor de dominio.

## Imágenes y créditos

- Las fotografías de la carpeta `imagenes/` son **solo de ejemplo** y **no están incluidas en la licencia de All Pixels**: sustitúyelas por fotos propias o con licencia para tu proyecto.
- Tipografía **Plus Jakarta Sans**: SIL Open Font License 1.1 (texto de licencia en `fuentes/`). Está incluida en la carpeta, así que la web no se conecta a Google Fonts.
- Los iconos de los servicios son SVG propios de la plantilla.

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
