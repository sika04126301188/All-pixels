# FILAX — Landing page de software SaaS, CRM y herramientas para equipos de ventas

Gracias por descargar **FILAX** de All Pixels.
Es una landing page completa de **una sola página**, lista para personalizar y publicar.

- Versión: 1.0 · octubre de 2026
- Licencia: Gratis (lee `LICENCIA.txt`)
- Web: https://allpixels.dev

---

## Qué hay dentro del .zip

```
filax/
├── README.md
├── LICENCIA.txt
├── fuentes/
│   ├── OFL-Plus-Jakarta-Sans.txt
│   ├── plus-jakarta-sans-latin-400-normal.woff2
│   ├── plus-jakarta-sans-latin-500-normal.woff2
│   ├── plus-jakarta-sans-latin-600-normal.woff2
│   ├── plus-jakarta-sans-latin-700-normal.woff2
│   └── plus-jakarta-sans-latin-800-normal.woff2
├── iconos/
│   ├── chart-column-increasing.svg
│   ├── inbox.svg
│   ├── instagram.svg
│   ├── kanban.svg
│   ├── linkedin-in.svg
│   ├── sparkles.svg
│   ├── x-twitter.svg
│   ├── youtube.svg
│   └── zap.svg
├── imagenes/
│   ├── avatar-carlos.jpg
│   ├── avatar-cliente-1.jpg
│   ├── avatar-cliente-2.jpg
│   ├── avatar-cliente-3.jpg
│   ├── avatar-cliente-4.jpg
│   ├── avatar-diego.jpg
│   ├── avatar-laura.jpg
│   ├── avatar-sofia.jpg
│   ├── grafico-pipeline.svg
│   └── logo.svg
├── index.html
├── LICENCIA-ICONOS-FONT-AWESOME.txt
└── LICENCIA-ICONOS-LUCIDE.txt
```

## Verla en tu ordenador (sin instalar nada)

1. Descomprime el archivo .zip.
2. Abre la carpeta `filax`.
3. Haz doble clic en `index.html`: se abrirá en tu navegador.

## Editarla

Te recomendamos un editor de código gratuito como **Visual Studio Code** (code.visualstudio.com).

| Quiero cambiar… | Dónde |
| --- | --- |
| Textos | `index.html` — secciones `#inicio`, `#funciones`, `#metricas`, `#precios`, `#clientes` y el pie `#contacto` |
| Precios mensual / anual | `#precios`: cada precio lleva `data-mensual` y `data-anual`; el selector los intercambia |
| Maqueta del panel (hero) | `#inicio > aside` — está hecha con HTML y CSS: cambia los textos y las cifras directamente |
| Colores | `index.html`, dentro de `<style>` — variables en `:root` (`--orange`, `--pink`, `--gradient`, `--bg`…) |
| Tipografía | `index.html`, al principio de `<style>` (`@font-face`) y carpeta `fuentes/` |
| Logotipo | `imagenes/logo.svg` (también se usa como icono de la pestaña) |
| Iconos | carpeta `iconos/` (Lucide y Font Awesome). Se muestran con `<figure><img src="iconos/…svg"></figure>` y el CSS los pinta en blanco |
| Menú, cifras, precios y animaciones | `index.html`, al final, dentro de `<script>` |
| Avatares | carpeta `imagenes/` (`avatar-*.jpg`): sustitúyelos por fotos reales con permiso |

El HTML usa etiquetas semánticas sin clases y los estilos se aplican por etiqueta y posición (`section:nth-of-type(4)`, `article:first-of-type`). **Si añades o quitas una sección, revisa esos selectores.**

> **Antes de publicar:**
> 1. **Enlaces.** «Iniciar sesión», «Empezar gratis», «Probar Pro» y los enlaces del pie apuntan a `#`: enlázalos a tu aplicación y a tus páginas reales.
> 2. **Datos de ejemplo.** FILAX es una marca inventada, igual que las empresas Lunexa, Corvalo, Nubra, Quíntica y Belvar. Las cifras (+18.000 equipos, +47 %, 12 h, 99,9 %, 4,9/5, 3.200 reseñas), las opiniones y los correos (`@filax.example`) son de ejemplo: **sustitúyelos por datos reales** y no publiques logotipos de clientes, cifras ni opiniones sin permiso o que no puedas demostrar.
> 3. **IA y disponibilidad.** Si prometes «IA predictiva» o un 99,9 % de disponibilidad, asegúrate de que tu producto lo cumple y de que tus condiciones lo recogen.
> 4. **Precios.** Indica si llevan IVA y revisa el descuento anual (−20 %) para que coincida con tu facturación.

## Publicarla en internet

Puedes subir la carpeta completa a cualquier hosting. Las opciones más sencillas y gratuitas:

- **Netlify Drop** (app.netlify.com/drop): arrastra la carpeta y listo.
- **Cloudflare Pages** o el hosting de tu proveedor de dominio.

## Imágenes y créditos

- El logotipo, el gráfico y los avatares de la carpeta `imagenes/` se han creado para esta plantilla y **se incluyen en la licencia de All Pixels**.
- Iconos de **Lucide** (lucide.dev), licencia ISC — texto en `LICENCIA-ICONOS-LUCIDE.txt`. Iconos de redes de **Font Awesome Free**, licencia CC BY 4.0 — texto en `LICENCIA-ICONOS-FONT-AWESOME.txt`.
- Tipografía **Plus Jakarta Sans**: SIL Open Font License 1.1 (texto de licencia en `fuentes/`). Está incluida en la carpeta, así que la web no se conecta a Google Fonts.

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
