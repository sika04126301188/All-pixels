# Reformas Almanara — Landing page de empresas de reformas, cocinas, baños y reformas integrales

Gracias por descargar **Reformas Almanara** de All Pixels.
Es una landing page completa de **una sola página**, lista para personalizar y publicar.

- Versión: 1.0 · octubre de 2026
- Licencia: Gratis (lee `LICENCIA.txt`)
- Web: https://allpixels.dev

---

## Qué hay dentro del .zip

```
almanara/
├── README.md
├── LICENCIA.txt
├── fuentes/
│   ├── archivo-variable.woff2
│   ├── ibm-plex-mono-500.woff2
│   ├── instrument-serif-italic.woff2
│   ├── OFL-Archivo.txt
│   ├── OFL-IBMPlexMono.txt
│   └── OFL-InstrumentSerif.txt
├── iconos/
│   ├── ampliar.svg
│   ├── cerrar.svg
│   ├── comillas.svg
│   ├── correo.svg
│   ├── estrella.svg
│   ├── facebook.svg
│   ├── flecha-crema.svg
│   ├── flecha-izquierda.svg
│   ├── flecha.svg
│   ├── garantia.svg
│   ├── instagram.svg
│   ├── LICENCIA-ICONOS.txt
│   ├── llave.svg
│   ├── plazo.svg
│   ├── telefono-laton.svg
│   ├── telefono.svg
│   ├── whatsapp-laton.svg
│   ├── whatsapp.svg
│   └── zona.svg
├── imagenes/
│   ├── antes-1.jpg
│   ├── antes-2.jpg
│   ├── antes-3.jpg
│   ├── bano-banera.jpg
│   ├── bano-cristal.jpg
│   ├── bano-doble.jpg
│   ├── bano-ducha.jpg
│   ├── bano-madera.jpg
│   ├── cocina-blanca.jpg
│   ├── cocina-espiga.jpg
│   ├── cocina-isla.jpg
│   ├── cocina-madera.jpg
│   ├── cocina-marmol.jpg
│   ├── cocina-ventanal.jpg
│   ├── despues-1.jpg
│   ├── despues-2.jpg
│   ├── despues-3.jpg
│   └── onda.svg
└── index.html
```

## Verla en tu ordenador (sin instalar nada)

1. Descomprime el archivo .zip.
2. Abre la carpeta `almanara`.
3. Haz doble clic en `index.html`: se abrirá en tu navegador.

## Editarla

Te recomendamos un editor de código gratuito como **Visual Studio Code** (code.visualstudio.com).

| Quiero cambiar… | Dónde |
| --- | --- |
| Textos | `index.html` — secciones `#inicio`, `#servicios`, `#proceso`, `#proyectos`, `#transformaciones`, `#calculadora`, `#nosotros`, `#opiniones` y `#contacto`, y el pie |
| Foto del hero (antes / después) | primera sección: la primera `<img>` es el «antes» y la segunda el «después» |
| Antes y después «mantén pulsado» | cada `<figure>` de `#transformaciones`: la primera `<img>` es el después y la segunda el antes |
| Proyectos y filtro | cada `<li>` de `#proyectos` lleva `data-categoria` (`cocina`, `bano` o `integral`), que usan los botones del filtro |
| Precios de la calculadora | atributos de los `<input>` de `#calculadora`: `data-precio` (€/m²), `data-minimo` y `data-semanas` del tipo, `data-factor` del acabado y `data-importe` de cada extra |
| Cifras de Nosotros | atributos `data-contar`, `data-sufijo` y `data-decimales` de cada `<dd>` |
| Teléfono, WhatsApp y correo | busca `+34900000000`, `34600000000` y `hola@reformasalmanara.com` |
| Colores | `index.html`, dentro de `<style>` — variables en `:root` (`--marino`, `--azul`, `--arena`, `--laton`, `--laton-texto`) |
| Tipografía | al principio de `<style>` (`@font-face`) y carpeta `fuentes/`. Archivo es variable: cambia peso con `font-weight` y anchura con `font-stretch` |
| Iconos | carpeta `iconos/` — SVG con el color ya aplicado (atributo `fill`) |
| Menú, barrido del hero, proceso, visor, calculadora y formulario | al final de `index.html`, dentro de `<script>` |
| Fotos | carpeta `imagenes/` — sustitúyelas manteniendo el mismo nombre (y actualiza `width`/`height` y `alt` si cambian) |

El HTML usa etiquetas semánticas sin clases y los estilos se aplican por etiqueta y posición (`section:nth-of-type(7)`, `li:nth-of-type(2)`). **Si añades o quitas una sección, revisa esos selectores.**

> **Antes de publicar:**
> 1. **Datos de ejemplo.** Las opiniones, la valoración (4,9), las cifras (12 años, 300 proyectos), las zonas de los proyectos y los datos de contacto son de ejemplo: **sustitúyelos por los tuyos** y no publiques reseñas ni cifras que no puedas acreditar.
> 2. **Precios de la calculadora.** Los importes son orientativos y de ejemplo: ajústalos a tus tarifas reales. La calculadora no sustituye a un presupuesto.
> 3. **Fotos.** Usa fotos de tus propias obras; las de antes y después deben ser del mismo espacio.
> 4. **Formulario y privacidad.** El formulario no envía datos: conéctalo a tu servicio (Formspree o similar) y enlaza una política de privacidad real.

## Publicarla en internet

Puedes subir la carpeta completa a cualquier hosting. Las opciones más sencillas y gratuitas:

- **Netlify Drop** (app.netlify.com/drop): arrastra la carpeta y listo.
- **Cloudflare Pages** o el hosting de tu proveedor de dominio.

## Imágenes y créditos

- Las fotografías de la carpeta `imagenes/` son **solo de ejemplo** y **no están incluidas en la licencia de All Pixels**: sustitúyelas por fotos de tus propias obras.
- Iconos **Font Awesome Free**: CC BY 4.0 (ver `iconos/LICENCIA-ICONOS.txt`).
- Tipografías **Archivo**, **Instrument Serif** e **IBM Plex Mono**: SIL Open Font License 1.1 (textos de licencia en `fuentes/`). Están incluidas en la carpeta, así que la web no se conecta a Google Fonts.

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
