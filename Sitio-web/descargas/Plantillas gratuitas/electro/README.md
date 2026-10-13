# Electro Rápido 24h — Landing page de electricistas, urgencias del hogar y servicios técnicos 24 horas

Gracias por descargar **Electro Rápido 24h** de All Pixels.
Es una landing page completa de **una sola página**, lista para personalizar y publicar.

- Versión: 1.0 · octubre de 2026
- Licencia: Gratis (lee `LICENCIA.txt`)
- Web: https://allpixels.dev

---

## Qué hay dentro del .zip

```
electro/
├── README.md
├── LICENCIA.txt
├── fuentes/
│   ├── archivo-variable.woff2
│   ├── ibm-plex-mono-400.woff2
│   ├── ibm-plex-mono-500.woff2
│   ├── OFL-Archivo.txt
│   └── OFL-IBM-Plex-Mono.txt
├── imagenes/
│   ├── bombilla.jpg
│   ├── hero-electricista.jpg
│   ├── tecnico-verificado.jpg
│   ├── trabajo-instalaciones.jpg
│   ├── trabajo-lineas.jpg
│   └── trabajo-medicion.jpg
└── index.html
```

## Verla en tu ordenador (sin instalar nada)

1. Descomprime el archivo .zip.
2. Abre la carpeta `electro`.
3. Haz doble clic en `index.html`: se abrirá en tu navegador.

## Editarla

Te recomendamos un editor de código gratuito como **Visual Studio Code** (code.visualstudio.com).

| Quiero cambiar… | Dónde |
| --- | --- |
| Textos | `index.html` — secciones `#inicio`, `#nosotros`, `#urgencias`, `#proceso`, `#tecnicos`, `#trabajos`, `#diferencia`, `#opiniones`, `#llamar` y `#preguntas` |
| Teléfono y WhatsApp | busca `+34900000000` y `900 000 000` en `index.html` (aparecen en la cabecera, el hero, la llamada final, el pie y la barra del móvil) |
| Cifras | etiquetas `<data value="…">`: el atributo `value` es el número con el que cuenta la animación |
| Colores | `index.html`, dentro de `<style>` — variables en `:root` (`--tinta`, `--nieve`, `--lavanda`, `--ambar`) |
| Tipografía | `index.html`, al principio de `<style>` (`@font-face`) y carpeta `fuentes/` |
| Menú, reloj de guardia, contadores y animaciones | `index.html`, al final, dentro de `<script>` |
| Fotos | carpeta `imagenes/` — sustitúyelas manteniendo el mismo nombre (y actualiza `width`/`height` y `alt` si cambian) |

El HTML usa etiquetas semánticas sin clases y los estilos se aplican por etiqueta y posición (`section:nth-of-type(5)`, `p:nth-of-type(3)`). **Si añades o quitas una sección o un párrafo, revisa esos selectores.**

> **Antes de publicar:**
> 1. **Teléfono.** `900 000 000` y el enlace de WhatsApp son de ejemplo: pon tu número real en todos los sitios donde aparece.
> 2. **Datos de ejemplo.** Las cifras (15.000 avisos, 60 segundos, 4,8/5, 1.200 valoraciones), las opiniones y el técnico «4,9 ★» son de ejemplo: **sustitúyelos por datos reales** y no publiques valoraciones «verificadas» ni cifras que no puedas demostrar.
> 3. **Promesas.** «Confirmamos un técnico en 60 segundos», «guardia 24 h / 365 días» y «precio cerrado» son compromisos ante el cliente: publícalos solo si los cumples. Si cobras recargo nocturno o de festivo, indícalo.
> 4. **Empresa instaladora.** En España, para hacer instalaciones eléctricas hay que estar inscrito como empresa instaladora en tu comunidad autónoma: añade tu número de registro en el pie o en el aviso legal.
> 5. **Páginas legales.** Enlaza «Aviso legal», «Privacidad» y «Cookies» a tus páginas reales.

## Publicarla en internet

Puedes subir la carpeta completa a cualquier hosting. Las opciones más sencillas y gratuitas:

- **Netlify Drop** (app.netlify.com/drop): arrastra la carpeta y listo.
- **Cloudflare Pages** o el hosting de tu proveedor de dominio.

## Imágenes y créditos

- Las fotografías de la carpeta `imagenes/` proceden de **Unsplash** (unsplash.com) y se usan bajo la licencia de Unsplash. **No están incluidas en la licencia de All Pixels**: lo ideal es sustituirlas por fotos de tu equipo y tus trabajos.
- Tipografías **Archivo** e **IBM Plex Mono**: SIL Open Font License 1.1 (textos de licencia en `fuentes/`). Están incluidas en la carpeta, así que la web no se conecta a Google Fonts.

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
