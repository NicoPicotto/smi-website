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

export interface Channel {
  title: string;
  email: string;
}

// Contact channels by area (/contacto)
export const CHANNELS: Channel[] = [
  { title: 'Recepción', email: 'recepcion@smi.com.ar' },
  // { title: 'Administración', email: 'administracion@smi.com.ar' },
  // { title: 'Recursos humanos', email: 'recursoshumanos@smi.com.ar' },
];

// Public contact address shown in the footer
export const FOOTER_EMAIL = 'recepcion@smi.com.ar';

// TODO: placeholders until the client provides real data.
export const CONTACT = {
  phone: 'Completar teléfono',
  address: ['Completar dirección', 'Localidad, provincia'],
};

// Floating WhatsApp button (all pages). wa.me format: no +, spaces or dashes.
export const WHATSAPP = {
  number: '5493584398794',
  message: 'Hola, quiero hacer una consulta.',
};

export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.message)}`;

export const TAGLINE = 'Soluciones integrales de limpieza y mantenimiento industrial.';
