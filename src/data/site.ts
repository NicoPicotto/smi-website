export interface NavItem {
  label: string;
  href: string;
}

export const NAV: NavItem[] = [
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Trabajá con nosotros', href: '/trabaja' },
  { label: 'Contacto', href: '/contacto' },
];

export const EMAILS = [
  'recursoshumanos@smi.com.ar',
  'administracion@smi.com.ar',
  'gerencia@smi.com.ar',
];

// Public contact address shown in the footer
export const FOOTER_EMAIL = 'recepcion@smi.com.ar';

// TODO: placeholders until the client provides real data.
export const CONTACT = {
  phone: 'Completar teléfono',
  address: ['Completar dirección', 'Localidad, provincia'],
};

export const TAGLINE = 'Soluciones integrales de limpieza y mantenimiento industrial.';
