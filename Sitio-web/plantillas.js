/* ==========================================================
   All Pixels — Catálogo de plantillas
   ----------------------------------------------------------
   ÚNICO archivo que hay que editar para añadir o cambiar una
   plantilla. Lo usan la mesa de la portada (index.html) y la
   ficha de cada plantilla (plantilla.html?id=...).

   Campos de cada plantilla:
   - id            texto corto sin espacios ni tildes (va en la URL)
   - nombre        nombre visible
   - categoria     bodas | salud | saas | ecommerce | portafolio | panel | servicios
   - tipo          "gratis" o "pro"
   - precio        solo para Pro, por ejemplo "29 €" (null en gratis)
   - resumen       1 frase para la mesa y la ficha
   - descripcion   1-2 frases para la ficha. Describe SOLO lo que
                   trae de verdad la plantilla (una landing page).
   - pila          tecnologías
   - imagenes      3 capturas de 1280x1600 (la primera es la principal)
                   + 1 captura del móvil (opcional, va la última)
   - descarga      ruta del .zip: descargas/<categoria>/<id>.zip
                   (o el enlace de compra si es Pro)
   - demo          carpeta de la demo en vivo: demo/<id>/ (con la barra
                   final). Es la plantilla descomprimida dentro de
                   Sitio-web/demo/<id>/. Sin este campo no sale el botón
                   «Ver en vivo».
   - disponible    true cuando el .zip ya está subido y probado.
                   Pon false solo mientras preparas una plantilla (no se
                   muestra en la mesa hasta que la pongas en true).
   - version, actualizado (AAAA-MM)
   ========================================================== */
window.AP_CATEGORIAS = {
  bodas: 'Bodas y eventos',
  salud: 'Salud y bienestar',
  saas: 'SaaS',
  ecommerce: 'E-commerce',
  portafolio: 'Portafolio',
  panel: 'Panel de control',
  servicios: 'Servicios locales'
};

window.AP_PLANTILLAS = [
  {
    id: 'nogal', nombre: 'Taller Nogal', categoria: 'servicios', tipo: 'gratis', precio: null,
    resumen: 'Landing cálida para carpinterías y muebles a medida, con portada de palabra gigante tras el sofá, silla en 3D y portafolio en carrusel.',
    descripcion: 'Landing page de una sola página para carpinterías y talleres de muebles: portada con la palabra «Nogal» entre la foto y el sofá recortado, cifras y mini carrusel de proyectos, por qué elegirnos con muestras de madera, pieza de autor con silla que gira en 3D y etiquetas, portafolio en carrusel continuo con pestañas Hogar y Negocios, proceso en 4 pasos, testimonios y formulario con subida de plano. Incluye tipografías. HTML semántico sin clases.',
    pila: ['HTML', 'CSS', 'JavaScript'],
    imagenes: ['fotos/nogal-1.jpg', 'fotos/nogal-2.jpg', 'fotos/nogal-3.jpg', 'fotos/nogal-movil.jpg'],
    descarga: 'descargas/servicios/nogal.zip', demo: 'demo/nogal/', disponible: true,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'motorline', nombre: 'Taller Motorline', categoria: 'servicios', tipo: 'gratis', precio: null,
    resumen: 'Landing oscura y cinematográfica para talleres mecánicos, con reserva en 1 clic, ticket de entrada y seguimiento del coche en directo.',
    descripcion: 'Landing page de una sola página para talleres: portada a pantalla completa con titular fino y palabras en vertical, reserva por servicio, día y hora real con ticket de entrada que se rellena solo, proceso en 3 pasos, servicios en lista editorial con foto que sigue al cursor, demo de seguimiento del coche en directo, opiniones con pestañas, huecos libres de hoy y horario con estado «abierto ahora». Incluye iconos y tipografías. HTML semántico sin clases.',
    pila: ['HTML', 'CSS', 'JavaScript'],
    imagenes: ['fotos/motorline-1.jpg', 'fotos/motorline-2.jpg', 'fotos/motorline-3.jpg', 'fotos/motorline-movil.jpg'],
    descarga: 'descargas/servicios/motorline.zip', demo: 'demo/motorline/', disponible: true,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'solares', nombre: 'Solares Energía', categoria: 'servicios', tipo: 'gratis', precio: null,
    resumen: 'Landing para instaladores de placas solares con reloj solar animado, esquema interactivo y simulador de ahorro tipo app.',
    descripcion: 'Landing page de una sola página para empresas de energía solar: portada con reloj solar (el cielo, el sol y la producción cambian según la hora), cifras, quiénes somos, servicios en mosaico, esquema de la instalación con puntos interactivos, simulador de ahorro con gráfico de 24 horas que rellena el formulario, planes, proceso sobre el arco del sol, mapa por comunidades, opiniones, preguntas y contacto. Incluye iconos y tipografías. HTML semántico sin clases.',
    pila: ['HTML', 'CSS', 'JavaScript'],
    imagenes: ['fotos/solares-1.jpg', 'fotos/solares-2.jpg', 'fotos/solares-3.jpg', 'fotos/solares-movil.jpg'],
    descarga: 'descargas/servicios/solares.zip', demo: 'demo/solares/', disponible: true,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'almanara', nombre: 'Reformas Almanara', categoria: 'servicios', tipo: 'gratis', precio: null,
    resumen: 'Landing de estilo plano de arquitecto para reformas de cocinas y baños, con calculadora de presupuesto y antes y después interactivo.',
    descripcion: 'Landing page de una sola página para empresas de reformas: portada con foto que pasa sola del antes al después, cinta de compromisos, servicios en paneles que se expanden, proceso con línea que se rellena al bajar, mosaico de proyectos con filtro y visor, antes y después «mantén pulsado», calculadora de presupuesto orientativo que rellena el formulario, contadores, opiniones y contacto. Incluye iconos y tipografías. HTML semántico sin clases.',
    pila: ['HTML', 'CSS', 'JavaScript'],
    imagenes: ['fotos/almanara-1.jpg', 'fotos/almanara-2.jpg', 'fotos/almanara-3.jpg', 'fotos/almanara-movil.jpg'],
    descarga: 'descargas/servicios/almanara.zip', demo: 'demo/almanara/', disponible: true,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'verdeluz', nombre: 'Jardines Verdeluz', categoria: 'servicios', tipo: 'gratis', precio: null,
    resumen: 'Landing natural y elegante para jardinería y paisajismo, con deslizadores de antes y después y menú flotante.',
    descripcion: 'Landing page de una sola página para empresas de jardinería y paisajismo: portada a pantalla completa con menú flotante tipo píldora, servicios numerados con foto fija, ventajas con opinión de clienta sobre foto en arco, proceso en cuatro pasos, proyectos con deslizador de antes y después (también con teclado) y contacto con formulario. Incluye iconos y tipografías. HTML semántico sin clases.',
    pila: ['HTML', 'CSS', 'JavaScript'],
    imagenes: ['fotos/verdeluz-1.jpg', 'fotos/verdeluz-2.jpg', 'fotos/verdeluz-3.jpg', 'fotos/verdeluz-movil.jpg'],
    descarga: 'descargas/servicios/verdeluz.zip', demo: 'demo/verdeluz/', disponible: true,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'ramogallego', nombre: 'Ramogallego', categoria: 'servicios', tipo: 'gratis', precio: null,
    resumen: 'Landing elegante para despachos de abogados, con hero recortado en curvas, áreas con foto que cambia y método en escalera.',
    descripcion: 'Landing page de una sola página para despachos de abogados: hero con foto recortada en curvas y cifras animadas, cinta de especialidades, despacho con sello giratorio, áreas de práctica en acordeón con foto que cambia, método en cuatro pasos en escalera, carrusel de opiniones, preguntas frecuentes y contacto con panel en diagonal. HTML semántico sin clases y tipografías incluidas.',
    pila: ['HTML', 'CSS', 'JavaScript'],
    imagenes: ['fotos/ramogallego-1.jpg', 'fotos/ramogallego-2.jpg', 'fotos/ramogallego-3.jpg', 'fotos/ramogallego-movil.jpg'],
    descarga: 'descargas/servicios/ramogallego.zip', demo: 'demo/ramogallego/', disponible: true,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'ancla', nombre: 'Espacio Ancla', categoria: 'salud', tipo: 'gratis', precio: null,
    resumen: 'Landing serena para psicólogos y terapeutas, con tarjetas de cristal, ilustraciones fluidas y textos en inglés.',
    descripcion: 'Landing page de una sola página para consultas de psicología (textos en inglés): portada con tarjeta de cristal y halo que respira, enfoque con pilares, terapia presencial y online, áreas de trabajo, proceso en cuatro pasos con línea animada, preguntas frecuentes, formulario con validación y aviso de crisis en el pie. Incluye las imágenes abstractas y los iconos. HTML semántico sin clases y tipografías incluidas.',
    pila: ['HTML', 'CSS', 'JavaScript'],
    imagenes: ['fotos/ancla-1.jpg', 'fotos/ancla-2.jpg', 'fotos/ancla-3.jpg', 'fotos/ancla-movil.jpg'],
    descarga: 'descargas/salud/ancla.zip', demo: 'demo/ancla/', disponible: true,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'lawner', nombre: 'Lawner', categoria: 'salud', tipo: 'gratis', precio: null,
    resumen: 'Landing oscura para gimnasios 24/7, con programas en bento, horario de clases por días y planes mensual / anual.',
    descripcion: 'Landing page de una sola página para gimnasios y centros de fitness: portada con aforo del momento, cifras animadas, cinta de disciplinas, programas en rejilla bento, método con vista previa de la app, horario de clases filtrable por día, planes con cambio mensual / anual y formulario de prueba gratis con haz de luz en el pie. HTML semántico sin clases y tipografías incluidas.',
    pila: ['HTML', 'CSS', 'JavaScript'],
    imagenes: ['fotos/lawner-1.jpg', 'fotos/lawner-2.jpg', 'fotos/lawner-3.jpg', 'fotos/lawner-movil.jpg'],
    descarga: 'descargas/salud/lawner.zip', demo: 'demo/lawner/', disponible: true,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'matiz', nombre: 'Estudio Matiz', categoria: 'servicios', tipo: 'gratis', precio: null,
    resumen: 'Landing elegante para pintores y decoradores, con titular editorial, antes y después en color y banda de proceso.',
    descripcion: 'Landing page de una sola página para estudios de pintura y decoración de interiores: portada a sangre con titular escalonado, rejilla de valores con cita, lista editorial de servicios, muestras de antes y después que se amplían al pasar el ratón, tira de ambientes, proceso en cuatro pasos, testimonios y formulario de presupuesto. HTML semántico sin clases y tipografías incluidas.',
    pila: ['HTML', 'CSS', 'JavaScript'],
    imagenes: ['fotos/matiz-1.jpg', 'fotos/matiz-2.jpg', 'fotos/matiz-3.jpg', 'fotos/matiz-movil.jpg'],
    descarga: 'descargas/servicios/matiz.zip', demo: 'demo/matiz/', disponible: true,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'cepadech', nombre: 'Cepadech', categoria: 'servicios', tipo: 'gratis', precio: null,
    resumen: 'Landing para concesionarios de carros nuevos y de segunda mano, con inventario filtrable y simulador de cuota.',
    descripcion: 'Landing page de una sola página para concesionarios y agencias de carros: portada a pantalla completa, inventario con filtro primera / segunda mano y tarjetas con inclinación 3D, ventajas con cifras animadas, simulador de financiación con cuota en directo, opiniones y formulario que se rellena con el modelo elegido. HTML semántico sin clases y tipografías incluidas.',
    pila: ['HTML', 'CSS', 'JavaScript'],
    imagenes: ['fotos/cepadech-1.jpg', 'fotos/cepadech-2.jpg', 'fotos/cepadech-3.jpg', 'fotos/cepadech-movil.jpg'],
    descarga: 'descargas/servicios/cepadech.zip', demo: 'demo/cepadech/', disponible: true,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'electro', nombre: 'Electro Rápido 24h', categoria: 'servicios', tipo: 'gratis', precio: null,
    resumen: 'Landing de urgencias para electricistas 24 horas, con titular gigante, reloj de guardia y llamada en un toque.',
    descripcion: 'Landing page de una sola página para electricistas y servicios técnicos de urgencia: portada con titular escalonado y la hora de guardia en directo, cifras que cuentan al aparecer, lista de urgencias, proceso en tres pasos, técnicos verificados, tira de fotos de trabajos, tabla comparativa, opiniones, llamada final y preguntas frecuentes. Barra de llamada y WhatsApp fija en el móvil. HTML semántico sin clases y tipografías incluidas.',
    pila: ['HTML', 'CSS', 'JavaScript'],
    imagenes: ['fotos/electro-1.jpg', 'fotos/electro-2.jpg', 'fotos/electro-3.jpg', 'fotos/electro-movil.jpg'],
    descarga: 'descargas/servicios/electro.zip', demo: 'demo/electro/', disponible: true,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'filax', nombre: 'FILAX', categoria: 'saas', tipo: 'gratis', precio: null,
    resumen: 'Landing oscura para un CRM o producto SaaS, en naranja y rosa, con maqueta del panel en 3D y precios mensual / anual.',
    descripcion: 'Landing page de una sola página para software SaaS y CRM: portada con maqueta del panel en 3D que sigue al ratón y tarjetas flotantes, funciones en cuadrícula, métricas que cuentan al aparecer, precios con selector mensual / anual, opiniones de clientes y un pie con horizonte naranja y estrellas. HTML semántico sin clases, menú para el móvil, aparición suave al hacer scroll e imágenes, tipografía e iconos incluidos.',
    pila: ['HTML', 'CSS', 'JavaScript'],
    imagenes: ['fotos/filax-1.jpg', 'fotos/filax-2.jpg', 'fotos/filax-3.jpg', 'fotos/filax-movil.jpg'],
    descarga: 'descargas/saas/filax.zip', demo: 'demo/filax/', disponible: true,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'slexiplla', nombre: 'Slexiplla', categoria: 'ecommerce', tipo: 'gratis', precio: null,
    resumen: 'Tienda oscura de documentos y plantillas descargables, en morado y verde con efecto vidrio, catálogo filtrable y carrito.',
    descripcion: 'Landing page de una sola página para vender documentos y productos digitales: portada con buscador y tarjeta destacada en 3D, categorías, catálogo con filtro y búsqueda, carrito con panel (añadir, quitar y total), pasos de compra, sección para creadores con panel de ganancias, planes de precios, opiniones, preguntas frecuentes y boletín. HTML semántico sin clases, animaciones ligadas al scroll con CSS e imágenes, tipografías e iconos incluidos.',
    pila: ['HTML', 'CSS', 'JavaScript'],
    imagenes: ['fotos/slexiplla-1.jpg', 'fotos/slexiplla-2.jpg', 'fotos/slexiplla-3.jpg', 'fotos/slexiplla-movil.jpg'],
    descarga: 'descargas/ecommerce/slexiplla.zip', demo: 'demo/slexiplla/', disponible: true,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'flysky', nombre: 'FlySky', categoria: 'ecommerce', tipo: 'gratis', precio: null,
    resumen: 'Landing luminosa para agencias de viajes, con buscador de vuelos, avión animado y destinos ilustrados.',
    descripcion: 'Landing page de una sola página para agencias de viajes y buscadores de vuelos: portada con avión que despega y nubes en movimiento, buscador con ida y vuelta, intercambio de origen y destino y fechas, destinos con favoritos y botón que rellena el buscador, cifras animadas, pasos con un avión que recorre la ruta, ventajas, opiniones, newsletter, preguntas frecuentes y contacto. HTML semántico casi sin clases, ilustraciones incluidas y tipografía e iconos sin servicios externos.',
    pila: ['HTML', 'CSS', 'JavaScript'],
    imagenes: ['fotos/flysky-1.jpg', 'fotos/flysky-2.jpg', 'fotos/flysky-3.jpg', 'fotos/flysky-movil.jpg'],
    descarga: 'descargas/ecommerce/flysky.zip', demo: 'demo/flysky/', disponible: true,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'kinetic', nombre: 'KINETIC', categoria: 'portafolio', tipo: 'gratis', precio: null,
    resumen: 'Landing oscura para estudios de diseño y desarrollo web, con tarjetas bento en 3D, carrusel de proyectos y brillo que sigue al cursor.',
    descripcion: 'Landing page de una sola página para estudios de diseño y desarrollo web, agencias digitales y freelancers: portada con suelo de rejilla en perspectiva, tarjetas bento con efecto 3D y luz que sigue al ratón, carrusel de proyectos con caso de estudio desplegable, proceso de trabajo, trayectoria, núcleo 3D en paralaje y formulario de contacto. HTML semántico casi sin clases, imágenes propias incluidas, tipografía e iconos sin servicios externos.',
    pila: ['HTML', 'CSS', 'JavaScript'],
    imagenes: ['fotos/kinetic-1.jpg', 'fotos/kinetic-2.jpg', 'fotos/kinetic-3.jpg', 'fotos/kinetic-movil.jpg'],
    descarga: 'descargas/portafolio/kinetic.zip', demo: 'demo/kinetic/', disponible: true,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'flama', nombre: 'Flama Urbana', categoria: 'ecommerce', tipo: 'gratis', precio: null,
    resumen: 'Landing oscura para bares y restaurantes de comida callejera, con carta de platos, contador de pedido y aviso de abierto ahora.',
    descripcion: 'Landing page de una sola página para bares, restaurantes de comida callejera y comida a domicilio: portada con halo de brasa animado, ventajas, pasos para pedir, carta con botón para añadir platos a un contador de pedido, galería, historia del local, opiniones, preguntas frecuentes, horario con aviso «Abierto ahora» y newsletter. Iconos y tipografía incluidos, sin depender de servicios externos.',
    pila: ['HTML', 'CSS', 'JavaScript'],
    imagenes: ['fotos/flama-1.jpg', 'fotos/flama-2.jpg', 'fotos/flama-3.jpg', 'fotos/flama-movil.jpg'],
    descarga: 'descargas/ecommerce/flama.zip', demo: 'demo/flama/', disponible: true,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'neo', nombre: 'Neo Óptica', categoria: 'salud', tipo: 'gratis', precio: null,
    resumen: 'Landing luminosa para ópticas, en azul eléctrico, con forma orgánica animada, servicios en 3D y galería de instalaciones.',
    descripcion: 'Landing page de una sola página para ópticas y centros de optometría: portada con forma orgánica animada, franja de marcas, servicios con efecto 3D al pasar el ratón, galería de instalaciones, opiniones y formulario de contacto. Menú para el móvil, aparición suave al hacer scroll y tipografía incluida.',
    pila: ['HTML', 'CSS', 'JavaScript'],
    imagenes: ['fotos/neo-1.jpg', 'fotos/neo-2.jpg', 'fotos/neo-3.jpg', 'fotos/neo-movil.jpg'],
    descarga: 'descargas/salud/neo.zip', demo: 'demo/neo/', disponible: true,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'natura', nombre: 'Natura Studio', categoria: 'portafolio', tipo: 'gratis', precio: null,
    resumen: 'Landing cálida para estudios de diseño web, en tonos malva y oro, con tarjetas bento en 3D y agenda de citas.',
    descripcion: 'Landing page de una sola página para estudios de diseño y desarrollo web: portada con foto de forma orgánica, cifras y agenda con calendario real, franja de valores, módulos bento con efecto 3D y reflejo de luz al pasar el ratón, contacto con formulario y newsletter en el pie. HTML semántico casi sin clases, CSS en un solo bloque y tipografías incluidas.',
    pila: ['HTML', 'CSS', 'JavaScript'],
    imagenes: ['fotos/natura-1.jpg', 'fotos/natura-2.jpg', 'fotos/natura-3.jpg', 'fotos/natura-movil.jpg'],
    descarga: 'descargas/portafolio/natura.zip', demo: 'demo/natura/', disponible: true,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'alma', nombre: 'ALMA Studio', categoria: 'portafolio', tipo: 'gratis', precio: null,
    resumen: 'Landing serena para estudios de arquitectura e interiorismo, en tonos oliva y lino, con portada en arco y galería bento.',
    descripcion: 'Landing page de una sola página para estudios de arquitectura, interiorismo y paisajismo: portada con foto en arco y foto flotante, cifras, filosofía de materiales en tres tarjetas, galería de obras en formato bento y formulario de contacto. Menú para el móvil, aparición suave al hacer scroll y tipografías incluidas.',
    pila: ['HTML', 'CSS', 'JavaScript'],
    imagenes: ['fotos/alma-1.jpg', 'fotos/alma-2.jpg', 'fotos/alma-3.jpg', 'fotos/alma-movil.jpg'],
    descarga: 'descargas/portafolio/alma.zip', demo: 'demo/alma/', disponible: true,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'tirex', nombre: 'Tirex', categoria: 'portafolio', tipo: 'gratis', precio: null,
    resumen: 'Landing oscura con efecto cristal para estudios de diseño web: tarjeta 3D que sigue al ratón, servicios en bento y proyectos.',
    descripcion: 'Landing page de una sola página para estudios de diseño y desarrollo web: portada con tarjeta 3D interactiva, cifras, servicios en formato bento, proyectos, proceso en cuatro pasos, opiniones y llamada a la acción. Efecto cristal, modo oscuro y claro, menú para el móvil y animaciones al hacer scroll.',
    pila: ['HTML', 'CSS', 'JavaScript'],
    imagenes: ['fotos/tirex-1.jpg', 'fotos/tirex-2.jpg', 'fotos/tirex-3.jpg', 'fotos/tirex-movil.jpg'],
    descarga: 'descargas/portafolio/tirex.zip', demo: 'demo/tirex/', disponible: true,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'nacar', nombre: 'Nácar', categoria: 'salud', tipo: 'gratis', precio: null,
    resumen: 'Landing serena para clínicas dentales, con odontograma interactivo, precios publicados y aviso de «abierto ahora».',
    descripcion: 'Landing page de una sola página para clínicas dentales: odontograma interactivo que se ilumina con cada tratamiento, lista de precios con filtros, primera visita paso a paso, equipo, galería de la clínica, horario con aviso de «abierto ahora», formulario de cita y preguntas frecuentes. Incluye modo claro y oscuro.',
    pila: ['HTML', 'CSS', 'JavaScript'],
    imagenes: ['fotos/nacar-1.jpg', 'fotos/nacar-2.jpg', 'fotos/nacar-3.jpg', 'fotos/nacar-movil.jpg'],
    descarga: 'descargas/salud/nacar.zip', demo: 'demo/nacar/', disponible: true,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'redlove', nombre: 'redLove', categoria: 'bodas', tipo: 'gratis', precio: null,
    resumen: 'Landing elegante para agencias de bodas, en tonos vino y marfil, con galería, proceso en cuatro pasos y formulario de contacto.',
    descripcion: 'Landing page de una sola página para agencias y organizadores de bodas: portada con foto en arco, servicios, galería, opinión, proceso en cuatro pasos, preguntas frecuentes y formulario de contacto. HTML semántico sin clases, CSS en un solo bloque y tipografías incluidas.',
    pila: ['HTML', 'CSS', 'JavaScript'],
    imagenes: ['fotos/redlove-1.jpg', 'fotos/redlove-2.jpg', 'fotos/redlove-3.jpg'],
    descarga: 'descargas/bodas/redlove.zip', demo: 'demo/redlove/', disponible: true,
    version: '1.0', actualizado: '2026-10'
  }
];
