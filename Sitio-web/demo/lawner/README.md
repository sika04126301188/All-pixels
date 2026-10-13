# Lawner — Landing page de gimnasios, centros de fitness y estudios de entrenamiento

Gracias por descargar **Lawner** de All Pixels.
Es una landing page completa de **una sola página**, lista para personalizar y publicar.

- Versión: 1.0 · octubre de 2026
- Licencia: Gratis (lee `LICENCIA.txt`)
- Web: https://allpixels.dev

---

## Qué hay dentro del .zip

```
lawner/
├── README.md
├── LICENCIA.txt
├── fuentes/
│   ├── archivo-variable.woff2
│   ├── OFL-Archivo.txt
│   ├── OFL-Outfit.txt
│   └── outfit-variable.woff2
├── imagenes/
│   ├── app-lawner.jpg
│   ├── cuerdas-hiit.jpg
│   ├── favicon.svg
│   ├── fuerza-polea.jpg
│   ├── sala-lawner.jpg
│   └── tonificacion-polea.jpg
└── index.html
```

## Verla en tu ordenador (sin instalar nada)

1. Descomprime el archivo .zip.
2. Abre la carpeta `lawner`.
3. Haz doble clic en `index.html`: se abrirá en tu navegador.

## Editarla

Te recomendamos un editor de código gratuito como **Visual Studio Code** (code.visualstudio.com).

| Quiero cambiar… | Dónde |
| --- | --- |
| Textos | `index.html` — secciones `#inicio`, `#nosotros`, `#programas`, `#metodo`, `#clases`, `#planes` y `#contacto`, y el pie |
| Horario de clases | `index.html`, sección `#clases`: cada `<li data-dia="lun">` es una clase. `data-nivel` (1, 2 o 3) pinta los puntos de intensidad y `data-pocas` resalta las plazas |
| Precios | etiquetas `<data data-mensual="…" data-anual="…">` de la sección `#planes` |
| Cifras | atributo `data-count` de las cifras de `#nosotros` (con `data-prefijo` / `data-sufijo` opcionales) |
| Aforo «en directo» | `<script>`, array `curvaAforo` (un porcentaje por cada hora del día): es una simulación, conéctalo a tu sistema de accesos si lo tienes |
| Teléfono, correo y dirección | busca `+34600000000`, `hola@lawnergym.example` y `Av. del Deporte 24` |
| Colores | variables en `:root` (`--verde`, `--gris`, `--negro`, `--negro-verde`) |
| Tipografía | al principio de `<style>` (`@font-face`) y carpeta `fuentes/` |
| Fotos | carpeta `imagenes/` — sustitúyelas manteniendo el mismo nombre (y actualiza `width`/`height` y `alt` si cambian) |

El HTML usa etiquetas semánticas sin clases y los estilos se aplican por etiqueta y posición (`section:nth-of-type(5)`, `article:nth-of-type(2)`). **Si añades o quitas una sección, revisa esos selectores.**

> **Antes de publicar:**
> 1. **Datos de ejemplo.** Socios, años, clases, entrenadores, horarios, precios, la opinión de «Marta R.» y la tarjeta de aforo son de ejemplo: **sustitúyelos por los tuyos** y no publiques cifras ni opiniones que no sean reales.
> 2. **Aforo.** La tarjeta «En directo» calcula un porcentaje de ejemplo según la hora. Si no lo conectas a datos reales, cambia el texto «En directo» por «Aforo habitual» o quita la tarjeta.
> 3. **Precios y condiciones.** Indica si los precios llevan IVA y las condiciones de la prueba gratis y de baja.
> 4. **Formulario y páginas legales.** El formulario no envía datos: conéctalo a tu servicio (Formspree o similar) y añade aviso legal y política de privacidad.

## Publicarla en internet

Puedes subir la carpeta completa a cualquier hosting. Las opciones más sencillas y gratuitas:

- **Netlify Drop** (app.netlify.com/drop): arrastra la carpeta y listo.
- **Cloudflare Pages** o el hosting de tu proveedor de dominio.

## Imágenes y créditos

- Las fotografías de la carpeta `imagenes/` son de bancos de imágenes gratuitos y **no están incluidas en la licencia de All Pixels**. Algunas muestran logotipos de marcas de ropa deportiva: lo ideal es sustituirlas por fotos de tu centro y tus socios.
- Tipografías **Archivo** y **Outfit**: SIL Open Font License 1.1 (textos de licencia en `fuentes/`). Están incluidas en la carpeta, así que la web no se conecta a Google Fonts.

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
