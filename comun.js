/* ==========================================================
   All Pixels — Funciones comunes a todas las páginas
   Boletín, estadísticas sin cookies y año del pie.
   Se configura en config.js (no hace falta tocar este archivo).
   ========================================================== */
(function(){
  var CFG = window.AP_CONFIG || {};
  var $ = function(id){ return document.getElementById(id); };

  /* ---------- Año del pie ---------- */
  var anio = $('anio');
  if(anio) anio.textContent = new Date().getFullYear();

  /* ---------- Muestra los textos que dependen de un servicio activo ----------
     Cualquier elemento con data-si="boletin" o data-si="analitica" solo se ve
     cuando ese servicio está configurado (por ejemplo, en la política de privacidad). */
  var activo = {
    boletin: !!(CFG.boletin && CFG.boletin.url),
    analitica: !!(CFG.analitica && CFG.analitica.goatcounter)
  };
  Array.prototype.forEach.call(document.querySelectorAll('[data-si]'), function(n){
    n.hidden = !activo[n.getAttribute('data-si')];
  });
  Array.prototype.forEach.call(document.querySelectorAll('[data-no]'), function(n){
    n.hidden = !!activo[n.getAttribute('data-no')];
  });

  var nombres = { mailerlite: 'MailerLite (Lituania, UE)', brevo: 'Brevo (Francia, UE)' };
  var prov = $('proveedor-boletin');
  if(prov && activo.boletin && nombres[(CFG.boletin.proveedor || '').toLowerCase()]) prov.textContent = nombres[CFG.boletin.proveedor.toLowerCase()];

  /* ---------- Estadísticas de visitas: GoatCounter (sin cookies) ---------- */
  if(activo.analitica){
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://gc.zgo.at/count.js';
    s.setAttribute('data-goatcounter', CFG.analitica.goatcounter);
    document.head.appendChild(s);
  }

  /* ---------- Boletín ---------- */
  var form = $('form-boletin');
  if(!form) return;
  var correo = $('correo'), acepto = $('acepto-boletin'), boton = form.querySelector('button[type="submit"]'), estado = $('estado-boletin');

  if(!activo.boletin){
    form.classList.add('inactivo');
    correo.disabled = true; acepto.disabled = true; boton.disabled = true;
    boton.textContent = 'Muy pronto';
    estado.textContent = 'Estamos preparando el boletín. Muy pronto podrás suscribirte para recibir cada plantilla nueva.';
    return;
  }

  /* Nombre del campo de correo que espera cada proveedor */
  var CAMPO = { mailerlite: 'fields[email]', brevo: 'EMAIL' };
  var proveedor = (CFG.boletin.proveedor || '').toLowerCase();

  form.addEventListener('submit', function(e){
    e.preventDefault();
    estado.classList.remove('error');
    if(form.querySelector('[name="sitio_web"]').value){ return; } /* trampa anti-spam */
    if(!correo.checkValidity() || !correo.value.trim()){
      estado.textContent = 'Escribe un correo válido, por ejemplo tu@correo.com';
      estado.classList.add('error'); correo.focus(); return;
    }
    if(!acepto.checked){
      estado.textContent = 'Para suscribirte, acepta la política de privacidad.';
      estado.classList.add('error'); acepto.focus(); return;
    }
    var datos = new FormData();
    datos.append(CAMPO[proveedor] || 'email', correo.value.trim());
    if(proveedor === 'mailerlite'){ datos.append('ml-submit', '1'); datos.append('anticsrf', 'true'); }
    if(proveedor === 'brevo'){ datos.append('email_address_check', ''); datos.append('locale', 'es'); }

    boton.disabled = true; boton.textContent = 'Enviando…';
    fetch(CFG.boletin.url, { method: 'POST', body: datos, mode: 'no-cors' })
      .then(function(){
        form.reset();
        estado.textContent = '¡Casi listo! Revisa tu correo y confirma la suscripción.';
      })
      .catch(function(){
        estado.textContent = 'No hemos podido enviar tu suscripción. Inténtalo de nuevo en unos minutos.';
        estado.classList.add('error');
      })
      .then(function(){ boton.disabled = false; boton.textContent = 'Suscribirme'; });
  });
})();
