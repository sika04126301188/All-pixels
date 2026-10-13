# Taller Nogal — Landing page de carpinterías, ebanistas y talleres de muebles a medida

Gracias por descargar **Taller Nogal** de All Pixels.
Es una landing page completa de **una sola página**, lista para personalizar y publicar.

- Versión: 1.0 · octubre de 2026
- Licencia: Gratis (lee `LICENCIA.txt`)
- Web: https://allpixels.dev

---

## Qué hay dentro del .zip

```
nogal/
├── README.md
├── LICENCIA.txt
├── fuentes/
│   ├── fraunces-400-italic.woff2
│   ├── fraunces-400-normal.woff2
│   ├── fraunces-600-normal.woff2
│   ├── manrope-400.woff2
│   ├── manrope-500.woff2
│   ├── manrope-600.woff2
│   ├── manrope-700.woff2
│   ├── manrope-800.woff2
│   ├── OFL-Fraunces.txt
│   └── OFL-Manrope.txt
├── imagenes/
│   ├── barberia.jpg
│   ├── barra-listones.jpg
│   ├── biblioteca-cerezo.jpg
│   ├── cama-abatible.jpg
│   ├── hero-sofa.webp
│   ├── hero.jpg
│   ├── libreria-acanalada.jpg
│   ├── madera-cerezo.jpg
│   ├── madera-fresno.jpg
│   ├── madera-nogal.jpg
│   ├── madera-roble.jpg
│   ├── modulo-cubos.jpg
│   ├── mostrador.jpg
│   ├── recepcion.jpg
│   ├── recibidor.jpg
│   ├── restaurante.jpg
│   ├── silla.webp
│   ├── sofa-relax.jpg
│   └── zapateria.jpg
└── index.html
```

## Verla en tu ordenador (sin instalar nada)

1. Descomprime el archivo .zip.
2. Abre la carpeta `nogal`.
3. Haz doble clic en `index.html`: se abrirá en tu navegador.

## Editarla

Te recomendamos un editor de código gratuito como **Visual Studio Code** (code.visualstudio.com).

| Quiero cambiar… | Dónde |
| --- | --- |
| Textos | `index.html` — secciones `#inicio`, `#taller`, `#pieza`, `#portafolio`, `#proceso`, `#testimonios` y `#contacto`, y el pie |
| Palabra grande de la portada | el `<h1>` de `#inicio` (cambia también su `aria-label`) |
| Cifras de la portada | la lista `<dl>` de `#inicio` |
| Mini carrusel de la portada | el `<aside>` de `#inicio`: una `<li>` por proyecto (cambia también el «/04» si añades o quitas) |
| Maderas | el `<aside>` de `#taller` |
| Pieza de autor | `#pieza`: etiquetas sobre la foto (`<ul>`) y ficha (`<dl>`) |
| Portafolio | las dos listas `<ul>` de `#portafolio` (Hogar y Negocios); el número de cada pestaña está en su `<small>` |
| Correo y dirección | busca `hola@tallernogal.com` y `Calle de los Ebanistas` |
| Colores | `index.html`, dentro de `<style>` — variables en `:root` (`--verde`, `--salvia`, `--arena`, `--terracota`, `--marfil`) |
| Tipografía | `@font-face` al principio de `<style>` y carpeta `fuentes/` (Fraunces y Manrope) |
| Fotos | carpeta `imagenes/` — sustitúyelas manteniendo el mismo nombre. `hero-sofa.webp` es el recorte con fondo transparente del sofá de `hero.jpg`: si cambias la foto de portada, cambia los dos (o borra la segunda `<figure>` de `#inicio`) |

El HTML usa etiquetas semánticas sin clases y los estilos se aplican por etiqueta y posición (`section:nth-of-type(4)`, `li:nth-of-type(2)`). **Si añades o quitas una sección, revisa esos selectores.**

> **Antes de publicar:**
> 1. **Datos de ejemplo.** Las cifras (25+ años, 1.200 piezas, 100 % madera certificada), los testimonios, los nombres de los proyectos y los datos de contacto son de ejemplo: **sustitúyelos por los tuyos** y no publiques reseñas, cifras ni certificaciones que no puedas acreditar.
> 2. **Formulario.** «Transforma tu idea en madera» es una demostración: no envía nada. Conéctalo a Formspree, Netlify Forms o tu propio servidor.
> 3. **Privacidad.** Si el formulario recoge datos, enlaza una política de privacidad real.

## Publicarla en internet

Puedes subir la carpeta completa a cualquier hosting. Las opciones más sencillas y gratuitas:

- **Netlify Drop** (app.netlify.com/drop): arrastra la carpeta y listo.
- **Cloudflare Pages** o el hosting de tu proveedor de dominio.

## Imágenes y créditos

- Las fotografías de la carpeta `imagenes/` son **solo de ejemplo** y **no están incluidas en la licencia de All Pixels**: sustitúyelas por fotos de tus trabajos.
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
