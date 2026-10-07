/* ==========================================================
   All Pixels — Configuración del sitio
   ----------------------------------------------------------
   Este es el ÚNICO archivo que tienes que tocar para activar
   el boletín y la analítica. Mientras un campo esté vacío (''),
   esa función queda desactivada y la web lo indica con
   honestidad ("Muy pronto").
   ========================================================== */
window.AP_CONFIG = {

  /* ---------- Boletín ----------
     proveedor: 'mailerlite' o 'brevo'
     url:       la dirección "action" del formulario incrustado
                que te da el proveedor (ver GUIA-TECNICA.md).
     Ejemplos:
       MailerLite → 'https://assets.mailerlite.com/jsonp/123456/forms/98765432/subscribe'
       Brevo      → 'https://xxxxxxxx.sibforms.com/serve/MUIFA...'                        */
  boletin: {
    proveedor: '',
    url: ''
  },

  /* ---------- Estadísticas de visitas (sin cookies) ----------
     GoatCounter es gratuito para proyectos pequeños y no usa cookies,
     así que no necesitas banner. Pega aquí la dirección de tu contador:
       'https://allpixels.goatcounter.com/count'                       */
  analitica: {
    goatcounter: ''
  }
};
