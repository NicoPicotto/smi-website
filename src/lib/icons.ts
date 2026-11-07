// Brand icon set (designer-deliver/uploads/*.svg), stroke normalized to currentColor.
const modules = import.meta.glob<{ default: (props: Record<string, unknown>) => unknown }>(
  '../assets/icons/*.svg',
  { eager: true },
);

export const ICON_NAMES = [
  'seguridad',
  'calidad',
  'compromiso',
  'confianza',
  'limpieza-mantenimiento',
  'trabajo-altura',
  'espacios-confinados',
  'hidrolavado',
  'pulido-pisos',
  'descarga-camiones',
  'carga-descarga-vagones',
  'ayudante-silero',
  'maquinaria-operadores',
  'cuadrillas-trabajo',
  'presupuesto',
  'recursos-humanos',
  'capacitacion',
  'postulacion',
  'contacto',
  'email',
  'ubicacion',
  'check',
] as const;

export type IconName = (typeof ICON_NAMES)[number];

export function getIcon(name: IconName) {
  const mod = modules[`../assets/icons/${name}.svg`];
  if (!mod) throw new Error(`Icon "${name}" not found in src/assets/icons/`);
  return mod.default;
}
