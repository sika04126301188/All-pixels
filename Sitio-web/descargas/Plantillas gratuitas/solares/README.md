# Solares Energía — Landing page de empresas instaladoras de placas solares y autoconsumo fotovoltaico

Gracias por descargar **Solares Energía** de All Pixels.
Es una landing page completa de **una sola página**, lista para personalizar y publicar.

- Versión: 1.0 · octubre de 2026
- Licencia: Gratis (lee `LICENCIA.txt`)
- Web: https://allpixels.dev

---

## Qué hay dentro del .zip

```
solares/
├── README.md
├── LICENCIA.txt
├── fuentes/
│   ├── ibm-plex-mono-500.woff2
│   ├── jakarta-400.woff2
│   ├── jakarta-500.woff2
│   ├── jakarta-600.woff2
│   ├── jakarta-700.woff2
│   ├── OFL-IBMPlexMono.txt
│   ├── OFL-PlusJakartaSans.txt
│   ├── OFL-Sora.txt
│   ├── sora-400.woff2
│   ├── sora-600.woff2
│   ├── sora-700.woff2
│   └── sora-800.woff2
├── iconos/
│   ├── calculadora.svg
│   ├── casa-ambar.svg
│   ├── casa.svg
│   ├── check-ambar.svg
│   ├── check.svg
│   ├── comillas.svg
│   ├── correo.svg
│   ├── edificio.svg
│   ├── escudo-verde.svg
│   ├── estudio.svg
│   ├── facebook.svg
│   ├── garantia.svg
│   ├── hoja.svg
│   ├── horario.svg
│   ├── instagram.svg
│   ├── LICENCIA-ICONOS.txt
│   ├── linkedin.svg
│   ├── mantenimiento.svg
│   ├── mas.svg
│   ├── panel.svg
│   ├── presupuesto.svg
│   ├── rayo.svg
│   ├── revalorizacion.svg
│   ├── sol.svg
│   ├── te-llamamos.svg
│   ├── telefono-verde.svg
│   ├── telefono.svg
│   ├── tramites.svg
│   ├── whatsapp.svg
│   └── zona.svg
├── imagenes/
│   ├── instalacion.jpg
│   └── mapa-espana.jpg
└── index.html
```

## Verla en tu ordenador (sin instalar nada)

1. Descomprime el archivo .zip.
2. Abre la carpeta `solares`.
3. Haz doble clic en `index.html`: se abrirá en tu navegador.

## Editarla

Te recomendamos un editor de código gratuito como **Visual Studio Code** (code.visualstudio.com).

| Quiero cambiar… | Dónde |
| --- | --- |
| Textos | `index.html` — secciones `#inicio`, `#quienes`, `#servicios`, `#instalacion`, `#simulador`, `#planes`, `#proceso`, `#presencia`, `#opiniones`, `#preguntas` y `#contacto`, y el pie |
| Reloj solar del hero | al final de `index.html`, en `<script>` (apartado 4): colores del cielo por hora (`CIELOS`) y potencia de ejemplo (`potenciaPico`) |
| Puntos del esquema de instalación | en `<style>`, reglas `ol li:nth-of-type(N) button { left: …; top: … }` de la sección 5 (porcentaje sobre la foto). El texto de cada pieza está en la lista de al lado |
| Simulador de ahorro | `value` de cada `<option>` de comunidad = kWh que produce 1 kW al año; precio de la luz (0,20 €/kWh), coste por kW (1.300 €) y batería (4.500 €) en `<script>` (apartado 6) |
| Mapa por comunidades | atributo `data-produccion` de cada botón de `#presencia` |
| Planes | cada `<li>` de `#planes`; las placas de la cabecera están dibujadas con CSS |
| Cifras | atributos `data-contar`, `data-prefijo` y `data-sufijo` |
| Teléfono, WhatsApp y correo | busca `+34900000000`, `34900000000` y `contacto@solaresenergia.com` |
| Colores | `index.html`, dentro de `<style>` — variables en `:root` (`--marino`, `--noche`, `--ambar`, `--verde`, `--niebla`) |
| Tipografía | al principio de `<style>` (`@font-face`) y carpeta `fuentes/` |
| Iconos | carpeta `iconos/` — SVG con el color ya aplicado (atributo `fill`) |
| Fotos | carpeta `imagenes/` — si cambias el esquema, recoloca los puntos numerados |

El HTML usa etiquetas semánticas sin clases y los estilos se aplican por etiqueta y posición (`section:nth-of-type(6)`, `li:nth-of-type(2)`). **Si añades o quitas una sección, revisa esos selectores.**

> **Antes de publicar:**
> 1. **Datos de ejemplo.** Las cifras (4.300 sistemas, 94 %, 1.800 instalaciones…), las opiniones, los planes y los datos de contacto son de ejemplo: **sustitúyelos por los tuyos** y no publiques reseñas ni cifras que no puedas acreditar.
> 2. **Simulador y reloj solar.** Los cálculos son orientativos (precio medio de la luz, producción por comunidad, coste por kW): ajústalos a tus tarifas y a datos reales de tu zona.
> 3. **Formulario y privacidad.** El formulario no envía datos: conéctalo a tu servicio (Formspree o similar) y enlaza una política de privacidad real.

## Publicarla en internet

Puedes subir la carpeta completa a cualquier hosting. Las opciones más sencillas y gratuitas:

- **Netlify Drop** (app.netlify.com/drop): arrastra la carpeta y listo.
- **Cloudflare Pages** o el hosting de tu proveedor de dominio.

## Imágenes y créditos

- Las imágenes de la carpeta `imagenes/` (esquema de la vivienda y mapa de España) son **solo de ejemplo** y **no están incluidas en la licencia de All Pixels**: sustitúyelas por las tuyas.
- Iconos **Font Awesome Free**: CC BY 4.0 (ver `iconos/LICENCIA-ICONOS.txt`).
- Tipografías **Sora**, **Plus Jakarta Sans** e **IBM Plex Mono**: SIL Open Font License 1.1 (textos de licencia en `fuentes/`). Están incluidas en la carpeta, así que la web no se conecta a Google Fonts.

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
