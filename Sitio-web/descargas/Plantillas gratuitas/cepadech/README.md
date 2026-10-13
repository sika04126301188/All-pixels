# Cepadech — Landing page de concesionarios y agencias de venta de carros nuevos y de segunda mano

Gracias por descargar **Cepadech** de All Pixels.
Es una landing page completa de **una sola página**, lista para personalizar y publicar.

- Versión: 1.0 · octubre de 2026
- Licencia: Gratis (lee `LICENCIA.txt`)
- Web: https://allpixels.dev

---

## Qué hay dentro del .zip

```
cepadech/
├── README.md
├── LICENCIA.txt
├── fuentes/
│   ├── manrope-400.woff2
│   ├── manrope-500.woff2
│   ├── manrope-600.woff2
│   ├── manrope-700.woff2
│   ├── OFL-Manrope.txt
│   ├── OFL-Unbounded.txt
│   ├── unbounded-200.woff2
│   ├── unbounded-300.woff2
│   ├── unbounded-400.woff2
│   ├── unbounded-500.woff2
│   └── unbounded-600.woff2
├── imagenes/
│   ├── favicon.svg
│   ├── hero-concesionario.jpg
│   ├── hyundai-creta.jpg
│   ├── kia-k5.jpg
│   ├── mitsubishi-lancer.jpg
│   ├── rolls-royce.jpg
│   ├── taller-certificacion.jpg
│   └── toyota-chr.jpg
└── index.html
```

## Verla en tu ordenador (sin instalar nada)

1. Descomprime el archivo .zip.
2. Abre la carpeta `cepadech`.
3. Haz doble clic en `index.html`: se abrirá en tu navegador.

## Editarla

Te recomendamos un editor de código gratuito como **Visual Studio Code** (code.visualstudio.com).

| Quiero cambiar… | Dónde |
| --- | --- |
| Textos | `index.html` — secciones `#inicio`, `#inventario`, `#nosotros`, `#financiacion`, `#opiniones` y el pie `#contacto` |
| Carros del inventario | `index.html`, sección `#inventario`: copia un `<article>` entero. `data-tipo="nuevo"` o `data-tipo="usado"` decide el filtro; los contadores de los botones se calculan solos. Añade el modelo también al `<select name="modelo">` del formulario |
| Teléfono, correo y WhatsApp | busca `+34600000000`, `600 000 000` y `hola@cepadech.example` en `index.html` |
| Interés del simulador | `index.html`, dentro de `<script>`: `const TIN = 0.0699;` y el texto «TIN 6,99 %» del formulario |
| Cifras | etiquetas `<data value="…">`: el atributo `value` es el número con el que cuenta la animación |
| Colores | `index.html`, dentro de `<style>` — variables en `:root` (`--verde`, `--salvia`, `--arena`, `--terracota`, `--crema`) |
| Tipografía | `index.html`, al principio de `<style>` (`@font-face`) y carpeta `fuentes/` |
| Fotos | carpeta `imagenes/` — sustitúyelas manteniendo el mismo nombre (y actualiza `width`/`height` y `alt` si cambian) |

El HTML usa etiquetas semánticas sin clases y los estilos se aplican por etiqueta y posición (`section:nth-of-type(3)`, `article:nth-of-type(2)`). **Si añades o quitas una sección, revisa esos selectores.**

> **Antes de publicar:**
> 1. **Datos de ejemplo.** Teléfono, correo, dirección, precios, kilómetros, cifras (2.400 carros, 15 años, 4,9, 860 reseñas) y opiniones son de ejemplo: **sustitúyelos por los tuyos** y no publiques reseñas «verificadas» ni cifras que no puedas demostrar.
> 2. **Financiación.** El simulador es orientativo. Si ofreces financiación, en España tienes que mostrar la TAE y un ejemplo representativo (Ley de Crédito al Consumo); revisa el texto con tu entidad financiera.
> 3. **Garantía.** «Hasta 24 meses» y la «revisión de 150 puntos» son compromisos: publícalos solo si los cumples. En vehículos de segunda mano vendidos por un profesional la garantía mínima legal es de 1 año.
> 4. **Fotos de tu stock.** Las fotos son de ejemplo y muestran marcas reales; usa fotos de tus propios vehículos y oculta las matrículas.
> 5. **Formulario y páginas legales.** El formulario no envía mensajes: conéctalo a tu servicio (Formspree o similar). Enlaza «Aviso legal», «Privacidad» y «Cookies» a tus páginas reales.

## Publicarla en internet

Puedes subir la carpeta completa a cualquier hosting. Las opciones más sencillas y gratuitas:

- **Netlify Drop** (app.netlify.com/drop): arrastra la carpeta y listo.
- **Cloudflare Pages** o el hosting de tu proveedor de dominio.

## Imágenes y créditos

- Las fotografías de la carpeta `imagenes/` proceden de bancos de imágenes gratuitos (Pexels / Pixabay). Las matrículas se han difuminado. **No están incluidas en la licencia de All Pixels**: lo ideal es sustituirlas por fotos de tu propio stock.
- Tipografías **Unbounded** y **Manrope**: SIL Open Font License 1.1 (textos de licencia en `fuentes/`). Están incluidas en la carpeta, así que la web no se conecta a Google Fonts.

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
