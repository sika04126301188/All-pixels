# All Pixels — Guía técnica

Todo se activa desde **un solo archivo: `config.js`**. Mientras un campo esté vacío (`''`), esa función queda apagada y la web lo dice con honestidad ("Muy pronto"). No hace falta tocar ningún otro archivo.

---

## 1. Boletín de novedades

### Opción A — MailerLite (recomendado, Lituania, UE)
1. Crea una cuenta gratuita en mailerlite.com.
2. **Suscriptores → Grupos → Crear grupo**: `Novedades All Pixels`.
3. **Formularios → Formularios incrustados → Crear formulario**, asígnalo al grupo.
4. En los ajustes del formulario, activa la **doble confirmación (double opt-in)**. Es importante: el suscriptor recibe un correo y confirma. Así cumples el RGPD y evitas altas falsas.
5. Pulsa **Insertar / Embed → HTML**. En el código busca `action="..."`. Es una dirección parecida a
   `https://assets.mailerlite.com/jsonp/123456/forms/98765432/subscribe`
6. Pégala en `config.js`:
   ```js
   boletin: {
     proveedor: 'mailerlite',
     url: 'https://assets.mailerlite.com/jsonp/123456/forms/98765432/subscribe'
   },
   ```

### Opción B — Brevo (Francia, UE)
1. Cuenta en brevo.com → **Contactos → Formularios → Crear formulario de suscripción**.
2. Activa la **doble confirmación**.
3. En "Compartir → Código HTML" copia el `action="https://xxxx.sibforms.com/serve/..."`.
4. En `config.js` pon `proveedor: 'brevo'` y esa `url`.

### Qué pasa al activarlo
- El formulario del pie se habilita, con casilla de consentimiento obligatoria y protección anti-spam invisible.
- En la **política de privacidad** aparecen solas la sección del boletín y el nombre del proveedor.
- **Pruébalo tú primero** con tu propio correo. La web no puede ver la respuesta del proveedor (es una limitación del navegador), así que la prueba real es que te llegue el correo de confirmación.

---

## 2. Estadísticas de visitas sin cookies (GoatCounter)
1. Regístrate en goatcounter.com y elige un código, por ejemplo `allpixels`.
2. En `config.js`:
   ```js
   analitica: { goatcounter: 'https://allpixels.goatcounter.com/count' }
   ```
3. Listo. No usa cookies, así que **no necesitas banner de cookies**. La política de privacidad muestra la sección de estadísticas automáticamente.
4. Antes de usarlo, revisa las condiciones de su plan gratuito para proyectos comerciales.

---

## 3. SEO

Ya está hecho en cada página:

| Elemento | Estado |
|---|---|
| Título y descripción únicos por página | ✔ |
| URL canónica | ✔ (cada plantilla tiene la suya: `plantilla.html?id=...`) |
| Open Graph / Twitter (vista previa al compartir en WhatsApp, LinkedIn, X…) | ✔ con `og-imagen.png` 1200×630 |
| Datos estructurados (Organization + WebSite) en la portada | ✔ |
| `sitemap.xml` y `robots.txt` | ✔ |
| Página 404 con `noindex` | ✔ |
| Favicon, icono de Apple y `site.webmanifest` | ✔ |

### ⚠ Importante: la dirección del sitio
Todas las URL de SEO (canónica, sitemap, Open Graph) apuntan a **`https://allpixels.dev`**, que todavía **no has comprado**. Hasta que tengas el dominio:
- **No envíes** el sitemap a Google Search Console.
- Si quieres empezar a posicionar ya con la dirección de GitHub Pages (`https://TU-USUARIO.github.io/...`), pásame esa dirección y regenero los archivos con ella.

Cuando compres el dominio (después de las 20 plantillas):
1. En GitHub: **Settings → Pages → Custom domain** → `allpixels.dev` y activa **Enforce HTTPS**.
2. En tu registrador, crea los registros DNS que indica GitHub.
3. En **Google Search Console** añade la propiedad, verifica y envía `https://allpixels.dev/sitemap.xml`.

### El sitemap y las plantillas
Solo las plantillas con `disponible: true` entran en el sitemap. Así Google no indexa fichas "Próximamente". Cada vez que publiques una plantilla nueva, hay que regenerar el sitemap (pídemelo y te paso el archivo nuevo).

---

## 4. Página 404
GitHub Pages usa `404.html` automáticamente para cualquier dirección que no existe. Funciona tanto en `usuario.github.io/repositorio/` como con el dominio propio.

---

## 5. Fuentes y privacidad
Las fuentes (Sora, Manrope, JetBrains Mono) están **dentro del sitio**, en `fuentes/`. La web ya **no contacta con Google Fonts**: es más rápida y no envía la IP del visitante a terceros. Sin boletín ni analítica activados, la web no hace **ninguna** petición a servicios externos.

---

## 6. Lo que falta por tu parte
- [x] NIE añadido en `terminos.html` y `privacidad.html`.
- [ ] Completar `[TU DIRECCIÓN], [CÓDIGO POSTAL]` en `terminos.html` y `privacidad.html` (lo exige la LSSI).
- [ ] (Cuando tengas el dominio) Un correo que funcione. Las páginas legales usan `hola@`, `soporte@` y `privacidad@allpixels.dev`, que aún no existen.
- [ ] Crear el boletín (sección 1) y la analítica (sección 2) cuando quieras.
