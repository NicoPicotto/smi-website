export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const SERVICE_NAMES = [
  'Limpieza en altura',
  'Espacios confinados',
  'Hidrolavado',
  'Pulido de pisos',
  'Descargas de camiones',
  'Carga y descarga de vagones',
  'Ayudante de silero',
  'Choferes y operadores',
  'Encargados de personal y cuadrillas',
  'Grupos de trabajo para proyectos específicos',
] as const;

export const NAV: NavItem[] = [
  { label: 'Nosotros', href: '/nosotros' },
  {
    label: 'Servicios para clientes',
    href: '/servicios',
    children: SERVICE_NAMES.map((label) => ({ label, href: '/servicios' })),
  },
  { label: 'Trabajá con nosotros', href: '/trabaja' },
  { label: 'Nuestros trabajos', href: '/clientes' },
  { label: 'Contacto', href: '/contacto' },
];

export const EMAILS = [
  'recursoshumanos@smi.com.ar',
  'administracion@smi.com.ar',
  'gerencia@smi.com.ar',
];

// TODO: placeholders until the client provides real data.
export const CONTACT = {
  phone: 'Completar teléfono',
  address: ['Completar dirección', 'Localidad, provincia'],
};

export const TAGLINE = 'Soluciones integrales de limpieza y mantenimiento industrial.';
