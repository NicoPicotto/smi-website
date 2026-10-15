const IMG = 'uploads';
const ICONS = 'uploads';
/* Prefer the bundler's resolved window.__resources[id] (guaranteed at publish time); fall back to the raw
   path (fixed up later by the preview's async resource sweep) and finally to window.RES() suffix-matching. */
const RID = (id, fallback) => (window.__resources && window.__resources[id]) || (window.RES ? window.RES(fallback) : fallback);
const R = RID;
const LOGO = RID('logo', 'assets/logo/smi-logo.png');
const HERO_IMG = RID('img-hero', IMG + '/hero-limpieza-mantenimiento-industrial.png');
const TEAM_IMG = RID('img-100', IMG + '/100-grupos-de-trabajo.png');
const WAREHOUSE_IMG = RID('img-12', IMG + '/12-almacen-logistica.png');
const CREW_IMG = RID('img-09', IMG + '/09-encargados-cuadrillas.png');

const NAV = [
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'servicios', label: 'Servicios para clientes', children: ['Limpieza en altura', 'Espacios confinados', 'Hidrolavado', 'Pulido de pisos', 'Descargas de camiones', 'Carga y descarga de vagones', 'Ayudante de silero', 'Choferes y operadores', 'Encargados de personal y cuadrillas', 'Grupos de trabajo para proyectos específicos'] },
  { id: 'trabaja', label: 'Trabajá con nosotros' },
  { id: 'clientes', label: 'Nuestros trabajos' },
  { id: 'contacto', label: 'Contacto' },
];

const EMAILS = ['recursoshumanos@smi.com.ar', 'administracion@smi.com.ar', 'gerencia@smi.com.ar'];

const PILLARS = [
  { icon: 'seguridad', title: 'Seguridad', text: 'Priorizamos el bienestar de las personas y el entorno.' },
  { icon: 'calidad', title: 'Calidad', text: 'Procesos eficientes y mejora continua.' },
  { icon: 'compromiso', title: 'Compromiso', text: 'Nos involucramos como socios estratégicos.' },
  { icon: 'confianza', title: 'Confianza', text: 'Relaciones a largo plazo basadas en resultados.' },
];

const SERVICES = [
  { icon: 'trabajo-altura', image: IMG + '/01-limpieza-en-altura.png', title: 'Limpieza en altura', note: 'Trabajos de limpieza y mantenimiento realizados en estructuras y sectores de difícil acceso, bajo procedimientos adecuados para trabajos en altura.' },
  { icon: 'espacios-confinados', image: IMG + '/02-espacios-confinados.png', title: 'Espacios confinados', note: 'Limpieza y mantenimiento en espacios confinados, con personal capacitado para intervenir en entornos que requieren procedimientos específicos de seguridad.' },
  { icon: 'hidrolavado', image: IMG + '/03-hidrolavado.png', title: 'Hidrolavado', note: 'Servicios de limpieza mediante hidrolavado para superficies, instalaciones y sectores industriales.' },
  { icon: 'pulido-pisos', image: IMG + '/04-pulido-de-pisos.png', title: 'Pulido de pisos', note: 'Tratamiento y pulido de pisos para mejorar su limpieza, conservación y presentación.' },
  { icon: 'descarga-camiones', image: IMG + '/05-descargas-de-camiones.png', title: 'Descargas de camiones', note: 'Operadores para tareas de descarga de camiones dentro de instalaciones industriales.' },
  { icon: 'carga-descarga-vagones', image: IMG + '/06-carga-descarga-de-vagones.png', title: 'Carga y descarga de vagones', note: 'Personal operativo para tareas de carga y descarga de vagones.' },
  { icon: 'ayudante-silero', image: IMG + '/07-ayudante-de-silero.png', title: 'Ayudante de silero', note: 'Personal destinado a tareas operativas y de apoyo relacionadas con silos y sectores de almacenamiento.' },
  { icon: 'maquinaria-operadores', image: IMG + '/08-choferes-autoelevador.png', title: 'Choferes y operadores', note: 'Choferes y operadores capacitados para trabajar con camiones, tractores, autoelevadores y palas mecánicas.' },
  { icon: 'cuadrillas-trabajo', image: IMG + '/09-encargados-cuadrillas.png', title: 'Encargados de personal y cuadrillas', note: 'Encargados de personal y cuadrillas de trabajo según los requerimientos de cada sector.' },
  { icon: 'limpieza-mantenimiento', image: IMG + '/10-grupos-de-trabajo.png', title: 'Grupos de trabajo para proyectos específicos', note: 'Conformación de equipos capacitados para proyectos determinados. Ej: mantenimiento y limpieza durante paradas de planta.' },
];

const BENEFITS = [
  'Trabajo en blanco desde el primer momento de contratación.',
  'Obra Social según gremio sin costo adicional para el afiliado.',
  'Posibilidad de elección de fecha de vacaciones para personal de planta permanente, excepto durante períodos de campaña o temporada alta de trabajo.',
  'Posibilidad de capacitaciones y crecimiento laboral.',
  'Posibilidad de acceder a oportunidades laborales en grandes empresas mediante nuestro programa de período de prueba para clientes.',
];

const GALLERY = [
  { image: IMG + '/11-planta-industrial.png', caption: 'Planta industrial' },
  { image: IMG + '/12-almacen-logistica.png', caption: 'Almacén y logística' },
  { image: IMG + '/13-seguridad-calidad.png', caption: 'Seguridad y calidad' },
  { image: IMG + '/06-carga-descarga-de-vagones.png', caption: 'Carga y descarga de vagones' },
  { image: IMG + '/14-identidad-marca.png', caption: 'Personal propio' },
  { image: IMG + '/15-cuidado-entorno.png', caption: 'Cuidado del entorno' },
];

const CHANNELS = [
  { title: 'Gerencia', email: 'gerencia@smi.com.ar' },
  { title: 'Administración', email: 'administracion@smi.com.ar' },
  { title: 'Recursos Humanos', email: 'recursoshumanos@smi.com.ar' },
];

const imgId = (path) => { const m = path.match(/\/(\d+)-/); return m ? 'img-' + m[1] : null; };
SERVICES.forEach((s) => { s.image = RID(imgId(s.image), s.image); });
GALLERY.forEach((g) => { g.image = RID(imgId(g.image), g.image); });

/* Maps the brand's SMI icon names to Google Material Symbols ligatures. */
const ICON_MAP = {
  'seguridad': 'shield', 'calidad': 'verified', 'compromiso': 'handshake', 'confianza': 'workspace_premium',
  'limpieza-mantenimiento': 'cleaning_services', 'trabajo-altura': 'engineering', 'espacios-confinados': 'warehouse',
  'hidrolavado': 'water_drop', 'pulido-pisos': 'mop', 'descarga-camiones': 'local_shipping',
  'carga-descarga-vagones': 'train', 'ayudante-silero': 'inventory_2', 'maquinaria-operadores': 'agriculture',
  'cuadrillas-trabajo': 'groups', 'presupuesto': 'request_quote', 'recursos-humanos': 'badge',
  'capacitacion': 'school', 'postulacion': 'assignment_ind', 'contacto': 'call', 'email': 'mail', 'ubicacion': 'location_on',
};

Object.assign(window, { IMG, ICONS, LOGO, HERO_IMG, TEAM_IMG, WAREHOUSE_IMG, CREW_IMG, NAV, EMAILS, PILLARS, SERVICES, BENEFITS, GALLERY, CHANNELS, ICON_MAP });
