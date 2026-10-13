# Tirex — Landing page de agencias y estudios digitales

Gracias por descargar **Tirex** de All Pixels.
Es una landing page completa de **una sola página**, lista para personalizar y publicar.

- Versión: 1.0 · octubre de 2026
- Licencia: Gratis (lee `LICENCIA.txt`)
- Web: https://allpixels.dev

---

## Qué hay dentro del .zip

```
tirex/
├── README.md
├── LICENCIA.txt
├── js/
│   ├── LICENCIA-LUCIDE.txt
│   └── lucide.min.js
├── index.html
└── styles.css
```

## Verla en tu ordenador (sin instalar nada)

1. Descomprime el archivo .zip.
2. Abre la carpeta `tirex`.
3. Haz doble clic en `index.html`: se abrirá en tu navegador.

## Editarla

Te recomendamos un editor de código gratuito como **Visual Studio Code** (code.visualstudio.com).

| Quiero cambiar… | Dónde |
| --- | --- |
| Textos | `index.html` — cada sección está marcada con un comentario (`<!-- 1. HERO -->`, `<!-- 3. SERVICIOS -->`…) |
| Colores (modo oscuro y claro) | `styles.css` — variables al principio, en `:root` (oscuro) y `body.light-theme` (claro) |
| Estilos y medidas | `styles.css` — cada sección tiene su bloque comentado |
| Efectos (tarjeta 3D, menú, tema, aparición al bajar) | `index.html`, al final, dentro de `<script>` |
| Iconos | `<i data-lucide="nombre">` en el HTML. Si añades un icono nuevo, tiene que estar incluido en `js/lucide.min.js` (ver nota).

> **Antes de publicar:**
> 1. **Enlaces.** El botón «Ver Video» y los «Ver caso de estudio» llevan a la sección de contacto: enlázalos a tu vídeo y a tus casos reales. Los enlaces legales y de redes sociales del pie apuntan a `#`.
> 2. **Email.** El botón «Empezar mi proyecto» abre un email a `hola@tirex.example`: cámbialo por el tuyo.
> 3. **Datos de ejemplo.** Tirex es una marca inventada. Las cifras (+150 proyectos, 98 %, 24/7…), los proyectos y las opiniones de clientes son de ejemplo: **sustitúyelos por datos reales** y no publiques cifras ni opiniones inventadas.
> 4. **Iconos.** `js/lucide.min.js` incluye solo los iconos que usa la plantilla, para que pese poco (12 KB) y funcione sin internet. Si quieres usar otros, descarga la librería completa desde lucide.dev o pídenos una versión ampliada.

## Publicarla en internet

Puedes subir la carpeta completa a cualquier hosting. Las opciones más sencillas y gratuitas:

- **Netlify Drop** (app.netlify.com/drop): arrastra la carpeta y listo.
- **Cloudflare Pages** o el hosting de tu proveedor de dominio.

## Imágenes y créditos

- Esta plantilla **no incluye fotografías**: las miniaturas de los proyectos son degradados de CSS.
- Iconos de **Lucide** (lucide.dev), licencia ISC — texto en `js/LICENCIA-LUCIDE.txt`.
- Usa la tipografía del sistema (Segoe UI en Windows, San Francisco en Apple): no hay que cargar ninguna fuente.

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
