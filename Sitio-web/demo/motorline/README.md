# Taller Motorline — Landing page de talleres mecánicos, mantenimiento de coches y servicios del automóvil

Gracias por descargar **Taller Motorline** de All Pixels.
Es una landing page completa de **una sola página**, lista para personalizar y publicar.

- Versión: 1.0 · octubre de 2026
- Licencia: Gratis (lee `LICENCIA.txt`)
- Web: https://allpixels.dev

---

## Qué hay dentro del .zip

```
motorline/
├── README.md
├── LICENCIA.txt
├── fuentes/
│   ├── inter-variable.woff2
│   ├── montserrat-variable.woff2
│   ├── OFL-Inter.txt
│   └── OFL-Montserrat.txt
├── iconos/
│   ├── aceite.svg
│   ├── calendario-noche.svg
│   ├── calendario.svg
│   ├── check.svg
│   ├── coche.svg
│   ├── correo.svg
│   ├── diagnosis.svg
│   ├── elegir.svg
│   ├── estrella.svg
│   ├── facebook.svg
│   ├── flecha-blanca.svg
│   ├── flecha.svg
│   ├── garantia.svg
│   ├── instagram.svg
│   ├── LICENCIA-ICONOS.txt
│   ├── llave.svg
│   ├── llegar.svg
│   ├── logo.svg
│   ├── rayo-cian.svg
│   ├── rayo.svg
│   ├── reloj.svg
│   ├── revision.svg
│   ├── telefono.svg
│   ├── ubicacion.svg
│   └── x.svg
├── imagenes/
│   ├── hero-motor.jpg
│   ├── herramientas.jpg
│   ├── mecanico-motor.jpg
│   └── precision.jpg
└── index.html
```

## Verla en tu ordenador (sin instalar nada)

1. Descomprime el archivo .zip.
2. Abre la carpeta `motorline`.
3. Haz doble clic en `index.html`: se abrirá en tu navegador.

## Editarla

Te recomendamos un editor de código gratuito como **Visual Studio Code** (code.visualstudio.com).

| Quiero cambiar… | Dónde |
| --- | --- |
| Textos | `index.html` — secciones `#inicio`, `#reserva`, `#proceso`, `#servicios`, `#seguimiento`, `#opiniones` y `#ya`, y el pie (`#contacto`) |
| Servicios de la reserva | cada `<label>` del primer `<fieldset>` de `#reserva`; `data-minutos` es la duración que usa el ticket |
| Horario de la agenda | al final de `index.html`, en `<script>` (apartado 3): apertura y cierre por día y huecos cada 30 minutos. Los huecos «ocupados» son de demostración (función `ocupado`) |
| Seguimiento en directo | lista `<ol>` de `#seguimiento`: etapas y horas de la demo |
| Opiniones | cada `<blockquote>` de `#opiniones` y su botón (atributo `data-iniciales`) |
| Horario del pie y «Abierto ahora» | lista del pie y `<script>` (apartado 9) |
| Teléfono, correo y dirección | busca `+34910000000`, `hola@tallermotorline.es` y `Calle del Motor 24` |
| Colores | `index.html`, dentro de `<style>` — variables en `:root` (`--azul-noche`, `--gris-metal`, `--cian`, `--gris-plata`) |
| Tipografía | `@font-face` al principio de `<style>` y carpeta `fuentes/` (Montserrat e Inter variables) |
| Iconos | carpeta `iconos/` — SVG con el color ya aplicado (atributo `fill`) |
| Fotos | carpeta `imagenes/` — sustitúyelas manteniendo el mismo nombre |

El HTML usa etiquetas semánticas sin clases y los estilos se aplican por etiqueta y posición (`section:nth-of-type(4)`, `li:nth-of-type(2)`). **Si añades o quitas una sección, revisa esos selectores.**

> **Antes de publicar:**
> 1. **Datos de ejemplo.** La valoración (4,9), las cifras (+15.000 horas, +1.200 reservas), las opiniones, la matrícula de la demo y los datos de contacto son de ejemplo: **sustitúyelos por los tuyos** y no publiques reseñas ni cifras que no puedas acreditar.
> 2. **Reservas.** La agenda y el botón «Confirmar reserva» son una demostración: no guardan citas. Conéctalos a tu sistema de reservas (Calendly, Cal.com, tu software de taller…).
> 3. **Privacidad.** Si añades un formulario que recoja datos, enlaza una política de privacidad real.

## Publicarla en internet

Puedes subir la carpeta completa a cualquier hosting. Las opciones más sencillas y gratuitas:

- **Netlify Drop** (app.netlify.com/drop): arrastra la carpeta y listo.
- **Cloudflare Pages** o el hosting de tu proveedor de dominio.

## Imágenes y créditos

- Las fotografías de la carpeta `imagenes/` son **solo de ejemplo** y **no están incluidas en la licencia de All Pixels**: sustitúyelas por fotos de tu taller.
- Iconos **Font Awesome Free**: CC BY 4.0 (ver `iconos/LICENCIA-ICONOS.txt`).
- Tipografías **Montserrat** e **Inter**: SIL Open Font License 1.1 (textos de licencia en `fuentes/`). Están incluidas en la carpeta, así que la web no se conecta a Google Fonts.

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
