# Nácar — Landing page de clínicas dentales

Gracias por descargar **Nácar** de All Pixels.
Es una landing page completa de **una sola página**, lista para personalizar y publicar.

- Versión: 1.0 · octubre de 2026
- Licencia: Gratis (lee `LICENCIA.txt`)
- Web: https://allpixels.dev

---

## Qué hay dentro del .zip

```
nacar/
├── README.md
├── LICENCIA.txt
├── fuentes/
│   ├── ibm-plex-mono-latin-400-normal.woff2
│   ├── ibm-plex-mono-latin-500-normal.woff2
│   ├── OFL-IBM-Plex-Mono.txt
│   ├── OFL-Onest.txt
│   ├── OFL-Young-Serif.txt
│   ├── onest-latin-400-normal.woff2
│   ├── onest-latin-500-normal.woff2
│   ├── onest-latin-600-normal.woff2
│   └── young-serif-latin-400-normal.woff2
├── imagenes/
│   ├── clinica-gabinete.jpg
│   ├── clinica-instrumental.jpg
│   └── clinica-sillon.jpg
└── index.html
```

## Verla en tu ordenador (sin instalar nada)

1. Descomprime el archivo .zip.
2. Abre la carpeta `nacar`.
3. Haz doble clic en `index.html`: se abrirá en tu navegador.

## Editarla

Te recomendamos un editor de código gratuito como **Visual Studio Code** (code.visualstudio.com).

| Quiero cambiar… | Dónde |
| --- | --- |
| Textos | `index.html` — cada sección está marcada con un comentario (`<!-- 1. PORTADA -->`, `<!-- 2. TRATAMIENTOS -->`…) |
| Colores (modo claro y oscuro) | `index.html`, dentro de `<style>` — apartado **3. Variables** (`--accent`, `--lilac`, `--gold`…) |
| Tipografías | `index.html`, apartados **2** y **3** de `<style>` y carpeta `fuentes/` |
| Tratamientos y precios | `index.html`, al final, dentro de `<script>` — lista `TR` (nombre, descripción, duración, precio y piezas del odontograma) |
| Horario | la tabla de la sección de cita **y** el objeto `HORARIO` del `<script>` (sirve para el aviso "Abierto ahora") |
| Fotos de la clínica | carpeta `imagenes/` — sustitúyelas manteniendo el mismo nombre |

El HTML usa etiquetas semánticas sin clases y los estilos se aplican por etiqueta, `id` y posición (`article:nth-of-type(2)`). **Si añades o quitas un elemento, revisa los números `nth-of-type` del CSS.**

> **Antes de publicar:**
> 1. **Formulario de cita.** Ahora mismo no envía nada. Conéctalo a Formspree (formspree.io) o similar cambiando `action="#"` por la dirección que te den.
> 2. **Enlaces legales.** La política de privacidad del formulario y los enlaces del pie (Aviso legal, Privacidad, Cookies) apuntan a `#`: enlázalos a tus páginas reales.
> 3. **Datos de ejemplo.** Nácar es una marca inventada. La dirección, el teléfono, los nombres del equipo, los números de colegiado (`46-000000`), la valoración «4,9 / 5», los precios y el año «desde 2011» son de ejemplo: **sustitúyelos por datos reales** y no publiques valoraciones ni cifras inventadas.
> 4. **Equipo.** Cada especialista aparece con sus iniciales. Si quieres poner fotos reales del equipo, cambia el `<p>` de las iniciales por `<figure><img src="imagenes/tu-foto.jpg" alt="Retrato de…"></figure>`, y usa siempre fotos con permiso de la persona.
> 5. **Publicidad sanitaria.** En España la publicidad de centros sanitarios está regulada (autorización sanitaria y número de registro del centro). Revisa la normativa de tu comunidad autónoma antes de publicar la web.

## Publicarla en internet

Puedes subir la carpeta completa a cualquier hosting. Las opciones más sencillas y gratuitas:

- **Netlify Drop** (app.netlify.com/drop): arrastra la carpeta y listo.
- **Cloudflare Pages** o el hosting de tu proveedor de dominio.

## Imágenes y créditos

- Las fotografías de la carpeta `imagenes/` proceden de **Pexels** (pexels.com) y se usan bajo la licencia de Pexels: puedes usarlas gratis en tu web, también con fines comerciales. **No están incluidas en la licencia de All Pixels**: no puedes vender las fotos sin modificar ni subirlas a otros bancos de imágenes.
- Lo más recomendable es **sustituirlas por fotos de tu propia clínica**.
- Tipografías **Young Serif**, **Onest** e **IBM Plex Mono**: SIL Open Font License 1.1 (textos de licencia en `fuentes/`). Están incluidas en la carpeta, así que la web no se conecta a Google Fonts.

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
