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
   - disponible    true cuando el .zip ya está subido y probado.
                   Con false, la plantilla aparece como "Próximamente"
                   y no se puede descargar.
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
    id: 'electro', nombre: 'Electro Rápido 24h', categoria: 'servicios', tipo: 'gratis', precio: null,
    resumen: 'Landing de urgencias para electricistas 24 horas, con titular gigante, reloj de guardia y llamada en un toque.',
    descripcion: 'Landing page de una sola página para electricistas y servicios técnicos de urgencia: portada con titular escalonado y la hora de guardia en directo, cifras que cuentan al aparecer, lista de urgencias, proceso en tres pasos, técnicos verificados, tira de fotos de trabajos, tabla comparativa, opiniones, llamada final y preguntas frecuentes. Barra de llamada y WhatsApp fija en el móvil. HTML semántico sin clases y tipografías incluidas.',
    pila: ['HTML', 'CSS', 'JavaScript'],
    imagenes: ['fotos/electro-1.jpg', 'fotos/electro-2.jpg', 'fotos/electro-3.jpg', 'fotos/electro-movil.jpg'],
    descarga: 'descargas/servicios/electro.zip', disponible: true,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'filax', nombre: 'FILAX', categoria: 'saas', tipo: 'gratis', precio: null,
    resumen: 'Landing oscura para un CRM o producto SaaS, en naranja y rosa, con maqueta del panel en 3D y precios mensual / anual.',
    descripcion: 'Landing page de una sola página para software SaaS y CRM: portada con maqueta del panel en 3D que sigue al ratón y tarjetas flotantes, funciones en cuadrícula, métricas que cuentan al aparecer, precios con selector mensual / anual, opiniones de clientes y un pie con horizonte naranja y estrellas. HTML semántico sin clases, menú para el móvil, aparición suave al hacer scroll e imágenes, tipografía e iconos incluidos.',
    pila: ['HTML', 'CSS', 'JavaScript'],
    imagenes: ['fotos/filax-1.jpg', 'fotos/filax-2.jpg', 'fotos/filax-3.jpg', 'fotos/filax-movil.jpg'],
    descarga: 'descargas/saas/filax.zip', disponible: true,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'slexiplla', nombre: 'Slexiplla', categoria: 'ecommerce', tipo: 'gratis', precio: null,
    resumen: 'Tienda oscura de documentos y plantillas descargables, en morado y verde con efecto vidrio, catálogo filtrable y carrito.',
    descripcion: 'Landing page de una sola página para vender documentos y productos digitales: portada con buscador y tarjeta destacada en 3D, categorías, catálogo con filtro y búsqueda, carrito con panel (añadir, quitar y total), pasos de compra, sección para creadores con panel de ganancias, planes de precios, opiniones, preguntas frecuentes y boletín. HTML semántico sin clases, animaciones ligadas al scroll con CSS e imágenes, tipografías e iconos incluidos.',
    pila: ['HTML', 'CSS', 'JavaScript'],
    imagenes: ['fotos/slexiplla-1.jpg', 'fotos/slexiplla-2.jpg', 'fotos/slexiplla-3.jpg', 'fotos/slexiplla-movil.jpg'],
    descarga: 'descargas/ecommerce/slexiplla.zip', disponible: true,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'flysky', nombre: 'FlySky', categoria: 'ecommerce', tipo: 'gratis', precio: null,
    resumen: 'Landing luminosa para agencias de viajes, con buscador de vuelos, avión animado y destinos ilustrados.',
    descripcion: 'Landing page de una sola página para agencias de viajes y buscadores de vuelos: portada con avión que despega y nubes en movimiento, buscador con ida y vuelta, intercambio de origen y destino y fechas, destinos con favoritos y botón que rellena el buscador, cifras animadas, pasos con un avión que recorre la ruta, ventajas, opiniones, newsletter, preguntas frecuentes y contacto. HTML semántico casi sin clases, ilustraciones incluidas y tipografía e iconos sin servicios externos.',
    pila: ['HTML', 'CSS', 'JavaScript'],
    imagenes: ['fotos/flysky-1.jpg', 'fotos/flysky-2.jpg', 'fotos/flysky-3.jpg', 'fotos/flysky-movil.jpg'],
    descarga: 'descargas/ecommerce/flysky.zip', disponible: true,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'kinetic', nombre: 'KINETIC', categoria: 'portafolio', tipo: 'gratis', precio: null,
    resumen: 'Landing oscura para estudios de diseño y desarrollo web, con tarjetas bento en 3D, carrusel de proyectos y brillo que sigue al cursor.',
    descripcion: 'Landing page de una sola página para estudios de diseño y desarrollo web, agencias digitales y freelancers: portada con suelo de rejilla en perspectiva, tarjetas bento con efecto 3D y luz que sigue al ratón, carrusel de proyectos con caso de estudio desplegable, proceso de trabajo, trayectoria, núcleo 3D en paralaje y formulario de contacto. HTML semántico casi sin clases, imágenes propias incluidas, tipografía e iconos sin servicios externos.',
    pila: ['HTML', 'CSS', 'JavaScript'],
    imagenes: ['fotos/kinetic-1.jpg', 'fotos/kinetic-2.jpg', 'fotos/kinetic-3.jpg', 'fotos/kinetic-movil.jpg'],
    descarga: 'descargas/portafolio/kinetic.zip', disponible: true,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'flama', nombre: 'Flama Urbana', categoria: 'ecommerce', tipo: 'gratis', precio: null,
    resumen: 'Landing oscura para bares y restaurantes de comida callejera, con carta de platos, contador de pedido y aviso de abierto ahora.',
    descripcion: 'Landing page de una sola página para bares, restaurantes de comida callejera y comida a domicilio: portada con halo de brasa animado, ventajas, pasos para pedir, carta con botón para añadir platos a un contador de pedido, galería, historia del local, opiniones, preguntas frecuentes, horario con aviso «Abierto ahora» y newsletter. Iconos y tipografía incluidos, sin depender de servicios externos.',
    pila: ['HTML', 'CSS', 'JavaScript'],
    imagenes: ['fotos/flama-1.jpg', 'fotos/flama-2.jpg', 'fotos/flama-3.jpg', 'fotos/flama-movil.jpg'],
    descarga: 'descargas/ecommerce/flama.zip', disponible: true,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'neo', nombre: 'Neo Óptica', categoria: 'salud', tipo: 'gratis', precio: null,
    resumen: 'Landing luminosa para ópticas, en azul eléctrico, con forma orgánica animada, servicios en 3D y galería de instalaciones.',
    descripcion: 'Landing page de una sola página para ópticas y centros de optometría: portada con forma orgánica animada, franja de marcas, servicios con efecto 3D al pasar el ratón, galería de instalaciones, opiniones y formulario de contacto. Menú para el móvil, aparición suave al hacer scroll y tipografía incluida.',
    pila: ['HTML', 'CSS', 'JavaScript'],
    imagenes: ['fotos/neo-1.jpg', 'fotos/neo-2.jpg', 'fotos/neo-3.jpg', 'fotos/neo-movil.jpg'],
    descarga: 'descargas/salud/neo.zip', disponible: true,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'natura', nombre: 'Natura Studio', categoria: 'portafolio', tipo: 'gratis', precio: null,
    resumen: 'Landing cálida para estudios de diseño web, en tonos malva y oro, con tarjetas bento en 3D y agenda de citas.',
    descripcion: 'Landing page de una sola página para estudios de diseño y desarrollo web: portada con foto de forma orgánica, cifras y agenda con calendario real, franja de valores, módulos bento con efecto 3D y reflejo de luz al pasar el ratón, contacto con formulario y newsletter en el pie. HTML semántico casi sin clases, CSS en un solo bloque y tipografías incluidas.',
    pila: ['HTML', 'CSS', 'JavaScript'],
    imagenes: ['fotos/natura-1.jpg', 'fotos/natura-2.jpg', 'fotos/natura-3.jpg', 'fotos/natura-movil.jpg'],
    descarga: 'descargas/portafolio/natura.zip', disponible: true,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'alma', nombre: 'ALMA Studio', categoria: 'portafolio', tipo: 'gratis', precio: null,
    resumen: 'Landing serena para estudios de arquitectura e interiorismo, en tonos oliva y lino, con portada en arco y galería bento.',
    descripcion: 'Landing page de una sola página para estudios de arquitectura, interiorismo y paisajismo: portada con foto en arco y foto flotante, cifras, filosofía de materiales en tres tarjetas, galería de obras en formato bento y formulario de contacto. Menú para el móvil, aparición suave al hacer scroll y tipografías incluidas.',
    pila: ['HTML', 'CSS', 'JavaScript'],
    imagenes: ['fotos/alma-1.jpg', 'fotos/alma-2.jpg', 'fotos/alma-3.jpg', 'fotos/alma-movil.jpg'],
    descarga: 'descargas/portafolio/alma.zip', disponible: true,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'tirex', nombre: 'Tirex', categoria: 'portafolio', tipo: 'gratis', precio: null,
    resumen: 'Landing oscura con efecto cristal para estudios de diseño web: tarjeta 3D que sigue al ratón, servicios en bento y proyectos.',
    descripcion: 'Landing page de una sola página para estudios de diseño y desarrollo web: portada con tarjeta 3D interactiva, cifras, servicios en formato bento, proyectos, proceso en cuatro pasos, opiniones y llamada a la acción. Efecto cristal, modo oscuro y claro, menú para el móvil y animaciones al hacer scroll.',
    pila: ['HTML', 'CSS', 'JavaScript'],
    imagenes: ['fotos/tirex-1.jpg', 'fotos/tirex-2.jpg', 'fotos/tirex-3.jpg', 'fotos/tirex-movil.jpg'],
    descarga: 'descargas/portafolio/tirex.zip', disponible: true,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'nacar', nombre: 'Nácar', categoria: 'salud', tipo: 'gratis', precio: null,
    resumen: 'Landing serena para clínicas dentales, con odontograma interactivo, precios publicados y aviso de «abierto ahora».',
    descripcion: 'Landing page de una sola página para clínicas dentales: odontograma interactivo que se ilumina con cada tratamiento, lista de precios con filtros, primera visita paso a paso, equipo, galería de la clínica, horario con aviso de «abierto ahora», formulario de cita y preguntas frecuentes. Incluye modo claro y oscuro.',
    pila: ['HTML', 'CSS', 'JavaScript'],
    imagenes: ['fotos/nacar-1.jpg', 'fotos/nacar-2.jpg', 'fotos/nacar-3.jpg', 'fotos/nacar-movil.jpg'],
    descarga: 'descargas/salud/nacar.zip', disponible: true,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'redlove', nombre: 'redLove', categoria: 'bodas', tipo: 'gratis', precio: null,
    resumen: 'Landing elegante para agencias de bodas, en tonos vino y marfil, con galería, proceso en cuatro pasos y formulario de contacto.',
    descripcion: 'Landing page de una sola página para agencias y organizadores de bodas: portada con foto en arco, servicios, galería, opinión, proceso en cuatro pasos, preguntas frecuentes y formulario de contacto. HTML semántico sin clases, CSS en un solo bloque y tipografías incluidas.',
    pila: ['HTML', 'CSS', 'JavaScript'],
    imagenes: ['fotos/redlove-1.jpg', 'fotos/redlove-2.jpg', 'fotos/redlove-3.jpg'],
    descarga: 'descargas/bodas/redlove.zip', disponible: true,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'aurora', nombre: 'Aurora', categoria: 'saas', tipo: 'gratis', precio: null,
    resumen: 'Landing oscura y futurista para producto de software, con métricas destacadas y CTA de alto contraste.',
    descripcion: 'Landing page de una sola página para presentar un producto de software, con estética oscura y futurista, métricas destacadas y llamadas a la acción de alto contraste.',
    pila: ['HTML', 'Tailwind', 'Figma'],
    imagenes: ['fotos/fm1.jpg', 'fotos/fm2.jpg'],
    descarga: 'descargas/saas/aurora.zip', disponible: false,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'vector', nombre: 'Vector', categoria: 'saas', tipo: 'gratis', precio: null,
    resumen: 'Presenta casos de éxito y proyectos con tarjetas de color sólido, ideal para plataformas B2B.',
    descripcion: 'Landing page de una sola página para plataformas B2B, que presenta casos de éxito y proyectos en tarjetas de color sólido.',
    pila: ['HTML', 'CSS', 'Figma'],
    imagenes: ['fotos/fm3.jpg', 'fotos/fm4.jpg'],
    descarga: 'descargas/saas/vector.zip', disponible: false,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'fluxo', nombre: 'Fluxo', categoria: 'saas', tipo: 'gratis', precio: null,
    resumen: 'Enfocada en la activación: bloques de servicios claros y métricas de rendimiento en tiempo real.',
    descripcion: 'Landing page de una sola página enfocada en la activación, con bloques de servicios claros y una sección de métricas de rendimiento.',
    pila: ['HTML', 'Tailwind'],
    imagenes: ['fotos/fm5.jpg', 'fotos/fm6.jpg'],
    descarga: 'descargas/saas/fluxo.zip', disponible: false,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'zenith', nombre: 'Zenith', categoria: 'saas', tipo: 'gratis', precio: null,
    resumen: 'Testimonios y prueba social en primer plano, pensada para acelerar la conversión de la prueba gratuita.',
    descripcion: 'Landing page de una sola página que pone los testimonios y la prueba social en primer plano para llevar al usuario a la prueba gratuita.',
    pila: ['HTML', 'CSS', 'Figma'],
    imagenes: ['fotos/fm7.jpg', 'fotos/fm8.jpg'],
    descarga: 'descargas/saas/zenith.zip', disponible: false,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'orbita', nombre: 'Órbita', categoria: 'saas', tipo: 'gratis', precio: null,
    resumen: 'Estructura modular con paneles de datos en vivo, perfecta para herramientas de analítica.',
    descripcion: 'Landing page de una sola página con estructura modular y secciones de datos, pensada para herramientas de analítica.',
    pila: ['React', 'Tailwind'],
    imagenes: ['fotos/fm9.jpg', 'fotos/fm10.jpg'],
    descarga: 'descargas/saas/orbita.zip', disponible: false,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'solaris', nombre: 'Solaris', categoria: 'ecommerce', tipo: 'gratis', precio: null,
    resumen: 'Tienda online ligera y rápida para marcas de producto físico, con foco en fotografía grande.',
    descripcion: 'Landing page de una sola página para marcas de producto físico, ligera y con la fotografía grande como protagonista.',
    pila: ['HTML', 'CSS', 'Figma'],
    imagenes: ['fotos/fm11.jpg', 'fotos/fm12.jpg'],
    descarga: 'descargas/ecommerce/solaris.zip', disponible: false,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'bazar', nombre: 'Bazar', categoria: 'ecommerce', tipo: 'gratis', precio: null,
    resumen: 'Catálogo con filtros visuales y checkout en un paso, pensado para marcas de nicho.',
    descripcion: 'Landing page de una sola página para marcas de nicho, con una presentación visual de sus productos.',
    pila: ['HTML', 'Tailwind'],
    imagenes: ['fotos/fm13.jpg', 'fotos/fm14.jpg'],
    descarga: 'descargas/ecommerce/bazar.zip', disponible: false,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'kori', nombre: 'Kori', categoria: 'ecommerce', tipo: 'gratis', precio: null,
    resumen: 'Enfocada en reseñas y confianza, con insignias de envío y devoluciones desde la portada.',
    descripcion: 'Landing page de una sola página que genera confianza: reseñas visibles e insignias de envío y devoluciones desde el primer vistazo.',
    pila: ['HTML', 'CSS', 'Figma'],
    imagenes: ['fotos/fm15.jpg', 'fotos/fm16.jpg'],
    descarga: 'descargas/ecommerce/kori.zip', disponible: false,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'lumina', nombre: 'Lumina', categoria: 'ecommerce', tipo: 'gratis', precio: null,
    resumen: 'Diseño editorial para marcas de decoración y estilo de vida, con carrito lateral persistente.',
    descripcion: 'Landing page de una sola página con diseño editorial para marcas de decoración y estilo de vida.',
    pila: ['HTML', 'Tailwind', 'Figma'],
    imagenes: ['fotos/fm17.jpg', 'fotos/fm18.jpg'],
    descarga: 'descargas/ecommerce/lumina.zip', disponible: false,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'andes', nombre: 'Andes', categoria: 'ecommerce', tipo: 'gratis', precio: null,
    resumen: 'Pensada para productos artesanales, con historia de marca y galería de materiales.',
    descripcion: 'Landing page de una sola página para productos artesanales, con la historia de la marca y una galería de materiales.',
    pila: ['HTML', 'CSS'],
    imagenes: ['fotos/fm19.jpg', 'fotos/fm20.jpg'],
    descarga: 'descargas/ecommerce/andes.zip', disponible: false,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'vertice', nombre: 'Vértice', categoria: 'portafolio', tipo: 'gratis', precio: null,
    resumen: 'Portafolio editorial para estudios creativos y diseñadores freelance.',
    descripcion: 'Landing page de una sola página con estilo editorial para presentar el trabajo de estudios creativos y diseñadores freelance.',
    pila: ['HTML', 'Tailwind'],
    imagenes: ['fotos/fm21.jpg', 'fotos/fm22.jpg'],
    descarga: 'descargas/portafolio/vertice.zip', disponible: false,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'trazo', nombre: 'Trazo', categoria: 'portafolio', tipo: 'gratis', precio: null,
    resumen: 'Cuadrícula de proyectos a pantalla completa con transiciones suaves entre estudios de caso.',
    descripcion: 'Landing page de una sola página con una cuadrícula de proyectos a pantalla completa.',
    pila: ['HTML', 'CSS', 'Figma'],
    imagenes: ['fotos/fm23.jpg', 'fotos/fm24.jpg'],
    descarga: 'descargas/portafolio/trazo.zip', disponible: false,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'estudio-norte', nombre: 'Estudio Norte', categoria: 'portafolio', tipo: 'gratis', precio: null,
    resumen: 'Ideal para talleres y estudios de oficio, con antes/después y testimonios de clientes.',
    descripcion: 'Landing page de una sola página para talleres y estudios de oficio, con comparativas de antes y después y testimonios de clientes.',
    pila: ['HTML', 'Tailwind'],
    imagenes: ['fotos/fm25.jpg', 'fotos/fm26.jpg'],
    descarga: 'descargas/portafolio/estudio-norte.zip', disponible: false,
    version: '1.0', actualizado: '2026-10'
  },
  {
    id: 'lienzo', nombre: 'Lienzo', categoria: 'portafolio', tipo: 'gratis', precio: null,
    resumen: 'Tipografía grande y espacios generosos para dejar que las imágenes del proyecto respiren.',
    descripcion: 'Landing page de una sola página con tipografía grande y espacios generosos para que las imágenes de cada proyecto sean las protagonistas.',
    pila: ['HTML', 'CSS', 'Figma'],
    imagenes: ['fotos/fm27.jpg', 'fotos/fm28.jpg'],
    descarga: 'descargas/portafolio/lienzo.zip', disponible: false,
    version: '1.0', actualizado: '2026-10'
  }
];
