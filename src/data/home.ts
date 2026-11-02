import type { ImageMetadata } from 'astro';
import type { IconName } from '../lib/icons';

import img01 from '../assets/images/01-limpieza-en-altura.png';
import img02 from '../assets/images/02-espacios-confinados.png';
import img03 from '../assets/images/03-hidrolavado.png';
import img04 from '../assets/images/04-pulido-de-pisos.png';
import img05 from '../assets/images/05-descargas-de-camiones.png';
import img06 from '../assets/images/06-carga-descarga-de-vagones.png';
import img07 from '../assets/images/07-ayudante-de-silero.png';
import img08 from '../assets/images/08-choferes-autoelevador.png';
import img09 from '../assets/images/09-encargados-cuadrillas.png';
import img10 from '../assets/images/10-grupos-de-trabajo.png';

export interface Pillar {
  icon: IconName;
  title: string;
  text: string;
}

export interface Service {
  icon: IconName;
  image: ImageMetadata;
  title: string;
  note: string;
}

export const PILLARS: Pillar[] = [
  { icon: 'seguridad', title: 'Seguridad', text: 'Priorizamos el bienestar de las personas y el entorno.' },
  { icon: 'calidad', title: 'Calidad', text: 'Procesos eficientes y mejora continua.' },
  { icon: 'compromiso', title: 'Compromiso', text: 'Nos involucramos como socios estratégicos.' },
  { icon: 'confianza', title: 'Confianza', text: 'Relaciones laborales a largo plazo basadas en resultados.' },
];

export const SERVICES: Service[] = [
  {
    icon: 'trabajo-altura',
    image: img01,
    title: 'Limpieza en altura',
    note: 'Trabajos de limpieza y mantenimiento realizados en estructuras y sectores de difícil acceso, bajo procedimientos adecuados para trabajos en altura.',
  },
  {
    icon: 'espacios-confinados',
    image: img02,
    title: 'Espacios confinados',
    note: 'Limpieza y mantenimiento en espacios confinados, con personal capacitado para intervenir en entornos que requieren procedimientos específicos de seguridad.',
  },
  {
    icon: 'hidrolavado',
    image: img03,
    title: 'Hidrolavado',
    note: 'Servicios de limpieza mediante hidrolavado para superficies, instalaciones y sectores industriales.',
  },
  {
    icon: 'pulido-pisos',
    image: img04,
    title: 'Pulido de pisos',
    note: 'Tratamiento y pulido de pisos para mejorar su limpieza, conservación y presentación.',
  },
  {
    icon: 'descarga-camiones',
    image: img05,
    title: 'Descargas de camiones',
    note: 'Operadores para tareas de descarga de camiones dentro de instalaciones industriales.',
  },
  {
    icon: 'carga-descarga-vagones',
    image: img06,
    title: 'Carga y descarga de vagones',
    note: 'Personal operativo para tareas de carga y descarga de vagones.',
  },
  {
    icon: 'ayudante-silero',
    image: img07,
    title: 'Ayudante de silero',
    note: 'Personal destinado a tareas operativas y de apoyo relacionadas con silos y sectores de almacenamiento.',
  },
  {
    icon: 'maquinaria-operadores',
    image: img08,
    title: 'Choferes y operadores',
    note: 'Choferes y operadores capacitados para trabajar con camiones, tractores, autoelevadores y palas mecánicas.',
  },
  {
    icon: 'cuadrillas-trabajo',
    image: img09,
    title: 'Encargados de personal y cuadrillas',
    note: 'Encargados de personal y cuadrillas de trabajo según los requerimientos de cada sector.',
  },
  {
    icon: 'limpieza-mantenimiento',
    image: img10,
    title: 'Grupos de trabajo para proyectos específicos',
    note: 'Conformación de equipos capacitados para proyectos determinados. Ej: mantenimiento y limpieza durante paradas de planta.',
  },
];

// Home shows 5 services: the first 2 as large cards, the other 3 below.
// Order here is the display order; the full list stays for /servicios.
const HOME_SERVICE_TITLES = [
  'Limpieza en altura',
  'Espacios confinados',
  'Hidrolavado',
  'Pulido de pisos',
  'Descargas de camiones',
];

export const HOME_SERVICES: Service[] = HOME_SERVICE_TITLES.map((title) => {
  const service = SERVICES.find((s) => s.title === title);
  if (!service) throw new Error(`Service "${title}" not found in SERVICES`);
  return service;
});
