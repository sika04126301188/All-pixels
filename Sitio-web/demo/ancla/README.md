# Espacio Ancla — Landing page de psicólogos, terapeutas y consultas de salud mental (textos en inglés)

Gracias por descargar **Espacio Ancla** de All Pixels.
Es una landing page completa de **una sola página**, lista para personalizar y publicar.

- Versión: 1.0 · octubre de 2026
- Licencia: Gratis (lee `LICENCIA.txt`)
- Web: https://allpixels.dev

---

## Qué hay dentro del .zip

```
ancla/
├── README.md
├── LICENCIA.txt
├── fuentes/
│   ├── inter-tight-variable.woff2
│   ├── inter-variable.woff2
│   ├── OFL-Inter.txt
│   └── OFL-InterTight.txt
├── iconos/
│   ├── ancla-blanco.svg
│   ├── ancla.svg
│   ├── brote.svg
│   ├── brujula.svg
│   ├── candado.svg
│   ├── casa-portatil.svg
│   ├── conversacion.svg
│   ├── corazon.svg
│   ├── escudo.svg
│   ├── instagram.svg
│   ├── LICENCIA-ICONOS.txt
│   ├── linkedin.svg
│   ├── mente.svg
│   ├── paloma.svg
│   ├── personas.svg
│   ├── psicologa.svg
│   ├── reloj.svg
│   ├── ruta.svg
│   ├── salvavidas.svg
│   ├── sobre.svg
│   ├── spotify.svg
│   ├── taza.svg
│   ├── ubicacion.svg
│   ├── viento.svg
│   └── whatsapp.svg
├── imagenes/
│   ├── contacto-abstracto.jpg
│   ├── enfoque-abstracto.jpg
│   ├── favicon.svg
│   ├── hero-abstracto.jpg
│   ├── terapia-online.jpg
│   └── terapia-presencial.jpg
└── index.html
```

## Verla en tu ordenador (sin instalar nada)

1. Descomprime el archivo .zip.
2. Abre la carpeta `ancla`.
3. Haz doble clic en `index.html`: se abrirá en tu navegador.

## Editarla

Te recomendamos un editor de código gratuito como **Visual Studio Code** (code.visualstudio.com).

| Quiero cambiar… | Dónde |
| --- | --- |
| Textos (en inglés) | `index.html` — secciones `#top`, `#approach`, `#services`, `#process` (con `#faq`) y `#contact`, y el pie |
| Preguntas frecuentes | cada `<details>` de `#faq` es una pregunta: `<summary>` y su `<p>` |
| Teléfono, correo, WhatsApp y dirección | busca `+10000000000`, `hello@espacioancla.example`, `wa.me/0000000000` y `Calm Street 12` |
| Número de colegiado | `License No. 00000` en la sección `#approach` |
| Colores | `index.html`, dentro de `<style>` — variables en `:root` (`--plum`, `--orchid`, `--mauve`, `--blush`) |
| Iconos | carpeta `iconos/` — son SVG de Font Awesome con el color puesto en el propio archivo (`fill`): cambia ese color o sustituye el archivo |
| Tipografía | al principio de `<style>` (`@font-face`) y carpeta `fuentes/` |
| Menú, cuerda de scroll, formulario | al final de `index.html`, dentro de `<script>` |
| Imágenes | carpeta `imagenes/` — sustitúyelas manteniendo el mismo nombre (y actualiza `width`/`height` y `alt` si cambian) |

El HTML usa etiquetas semánticas sin clases y los estilos se aplican por etiqueta y posición (`section:nth-of-type(3)`, `li:last-of-type`). **Si añades o quitas una sección, revisa esos selectores.**

> **Antes de publicar:**
> 1. **Datos profesionales.** Pon tu número de colegiado real y el colegio profesional; en España, la psicología sanitaria requiere la habilitación correspondiente: no muestres títulos que no tengas.
> 2. **Datos de contacto.** Sustituye teléfono, correo, WhatsApp, dirección y horario.
> 3. **Aviso de crisis.** El pie incluye un aviso para personas en crisis: mantenlo y, si quieres, añade el teléfono de emergencias o de prevención de tu país.
> 4. **Formulario y privacidad.** El formulario no envía datos: conéctalo a tu servicio (Formspree o similar). Los datos de salud son especialmente sensibles: enlaza una política de privacidad real en el enlace «privacy policy» y en el pie.

## Publicarla en internet

Puedes subir la carpeta completa a cualquier hosting. Las opciones más sencillas y gratuitas:

- **Netlify Drop** (app.netlify.com/drop): arrastra la carpeta y listo.
- **Cloudflare Pages** o el hosting de tu proveedor de dominio.

## Imágenes y créditos

- Las imágenes abstractas de la carpeta `imagenes/` las ha creado All Pixels y **están incluidas en la licencia** de la plantilla.
- Iconos de la carpeta `iconos/`: **Font Awesome Free**, licencia CC BY 4.0 (ver `iconos/LICENCIA-ICONOS.txt`).
- Tipografías **Inter** e **Inter Tight**: SIL Open Font License 1.1 (textos de licencia en `fuentes/`). Están incluidas en la carpeta, así que la web no se conecta a Google Fonts.

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
