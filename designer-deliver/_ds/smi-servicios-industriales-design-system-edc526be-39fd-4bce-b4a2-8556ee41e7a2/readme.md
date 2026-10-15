# SMI Servicios Industriales — Design System

SMI Servicios Industriales is a family-run Argentine industrial services company with more than 20
years of operation. It supplies **its own permanently employed crews, equipment and procedures** for
industrial cleaning and maintenance: cleaning storage cells and tunnels, confined-space and
at-height work, hydro-washing, floor polishing, truck unloading, rail-wagon loading/unloading, silo
assistant work, machine operators (truck / tractor / forklift / mechanical shovel), crew supervisors,
and full work groups for specific projects such as plant shutdowns.

The company sells on four values — **seguridad, calidad, compromiso, confianza** — and on being a
direct employer ("trabajo en blanco", training, permanent staff). It has two audiences: industrial
clients requesting quotes, and job applicants sending CVs. Both appear as conversion paths on the
site.

## Products represented
One product: **the marketing website (smi.com.ar)**, recreated in `ui_kits/website/`. The brand owner
confirmed there is no other surface — no app, docs site, or slide template — so none were invented.

## Sources given
| Source | Used for |
| --- | --- |
| `uploads/web-reference.png` | The only UI source — a full-page composite of the website. Copied to `assets/reference/web-reference.png` |
| `uploads/logo-concep-01.png` | The hexagon logo lockup → `assets/logo/smi-logo.png` |
| `uploads/Recurso 2/3/4.png` | Angled brand accent bars → `assets/brand/` |
| `uploads/SMI_paquete_iconos_svg/` (+ its README) | 21 SVG icons, and the declared brand colors #072B4F / #4478AB → `assets/icons/` |
| `uploads/SMI_web_paquete_imagenes/` | 17 photographs incl. the hero → `assets/images/` |

No codebase, repository, or Figma file was provided. Structure, copy and measurements were read from
the reference composite; values not visible in it are flagged in place rather than guessed.

## Fonts
No font binaries were supplied; **Archivo and Barlow are confirmed by the brand owner** as the
correct pair. Both load from Google Fonts in `tokens/fonts.css`:

- **Archivo** (500–800) — display, headings, labels, buttons (`--font-display`)
- **Barlow** (400–700) — body and UI copy (`--font-body`)

---

## CONTENT FUNDAMENTALS

**Language.** Everything is Rioplatense Spanish, using *voseo* — imperatives are "Completá",
"Conocé", "Enviános", never "Complete"/"Conoce". Keep that: it is the single most identifiable trait
of the copy.

**Voice.** First person plural, plainly stated: "Contamos con personal propio…", "Nos involucramos
como socios estratégicos", "Buscamos personas comprometidas…". The reader is addressed as *vos*
("Completá el formulario y nuestro equipo se pondrá en contacto"). Never "I", never a named
spokesperson.

**Register.** Matter-of-fact, industrial, competence-led. Claims are concrete and verifiable — 20
years of trajectory, own staff, training, formal employment — not aspirational marketing language.
There is no wordplay, no hype adjective stacking, no "revolucionario/innovador", no exclamation
marks, no questions as headlines.

**Casing.** Headings, buttons, nav items, card titles and column titles are **ALL CAPS**. Body copy
is sentence case. Service names are written out in full and allowed to wrap onto two lines rather
than be truncated ("OPERADORES EN CARGA Y DESCARGA DE VAGONES").

**Length.** Section titles are 1–4 words. Value descriptions are one sentence, ~8–12 words. Body
paragraphs run 2–3 sentences; the "Nosotros" block is three short paragraphs, one idea each
(what we are → what we were built on → what we still are).

**Buttons** are always a verb phrase: "SOLICITAR PRESUPUESTO", "ENVIÁNOS TU CV", "VER MÁS TRABAJOS
REALIZADOS", "CONOCÉ MÁS SOBRE NUESTRA HISTORIA".

**Emoji: never.** No emoji, no unicode decoration, no exclamation. Lists use the accent-blue check
disc; nothing else.

**Examples to imitate**
- "Soluciones integrales con personal propio, capacitado y comprometido con la calidad, la seguridad y el cuidado del entorno."
- "Priorizamos el bienestar de las personas y el entorno."
- "Trabajo en blanco desde el primer momento."
- "Ej: Mantenimiento y limpieza en paradas de planta."

---

## VISUAL FOUNDATIONS

**Palette.** Monochrome navy with one blue accent. `#072B4F` (`--smi-navy-800`) is the primary and
carries almost all brand weight; `#4478AB` (`--smi-blue-500`) is the secondary and appears only as
accent rules, primary button fills, active nav underline, focus rings and check discs. `#041C33` is
the deepest navy, used as the hero gradient base. Neutrals are cool greys (`--smi-gray-50` section
bands, `--smi-gray-200` hairline borders, `--smi-gray-700` body text). Semantic success/warning/danger
are **derived, not brand-declared** — use them only for form states.

**Two background colors, no more.** White page, `--smi-gray-50` alternating band, and navy for the
three dark blocks (values strip, CTA banner, footer). No decorative gradients anywhere; the only
gradients in the system are functional protection gradients over photography.

**Type.** Uppercase display for anything structural, sentence-case body for anything read. Hero 52px/800
at 1.05 line-height; section H2 30px/700; card labels 13px/700 at 0.06em tracking; eyebrows 11px at
0.12em. Body 15px/1.6. Nothing is centered except full-width section headings and the gallery.

**The accent rule.** A 44×3px `--smi-blue-500` bar sits under the hero title and under every section
heading. It is the brand's punctuation mark — keep it exactly that size.

**Hexagon geometry.** The logo is a hexagon, and the hexagon repeats as the icon badge on every
service card (`--hex-clip`). The three supplied angled bars (`assets/brand/`) are the same geometry
flattened, for band edges and dividers. Do not introduce circles, blobs, or other shape families.

**Backgrounds and imagery.** Photography is the primary visual material: real crews on real sites,
cool daylight, blue-grey cast, navy uniforms with reflective bands, PPE always visible. No grain, no
duotone, no b&w. The hero is full-bleed with a left-to-right navy gradient
(`--gradient-hero`) that fades to nothing by ~70% width so the workers stay visible. Section
backgrounds are flat; there are no textures or repeating patterns.

**Layout.** 1160px max container, 24px gutters, 72px vertical section padding (48px tight). Services
sit on a 5-column grid, gallery on 6. The header is a light 56px strip with the logo **overhanging
it** — the hexagon breaks the header baseline by ~26px and casts a soft drop shadow. Nothing else is
fixed or sticky.

**Corners.** 4px on buttons and inputs, 8px on the CTA banner, 10px on photographs and cards, pill
only on the small check disc. Radii never exceed 10px — the brand reads squared and industrial.

**Cards.** Photo (16:10, 10px radius, soft shadow) with the hexagon badge and uppercase label sitting
*below and outside* the image, not overlaid. No card borders on photo cards; panel cards
(forms, service sidebar) use `--surface-alt` with a 1px `--border-subtle` hairline and no shadow.

**Shadows.** Two only: `--shadow-card` at rest and `--shadow-card-hover` on hover, plus
`--shadow-media` for large standalone photos and a 1px header hairline. No inner shadows.

**Transparency and blur.** Blur is never used. Transparency appears in exactly three places: the hero
gradient, the caption protection gradient on gallery tiles (`--overlay-image`), and
`rgba(255,255,255,.12)` as the hover fill of outline-light buttons on dark.

**Motion.** Restrained: 180ms `cubic-bezier(.2,.6,.2,1)` on hover, 320ms for the 1.04 photo scale.
No entrance animation, no scroll reveals, no bounces, no parallax.

**Hover states.** Filled buttons darken toward navy-700/900; outline buttons swap border and label to
accent blue; cards lift their shadow and scale the photo 1.04; nav items go accent blue; dropdowns
appear on hover with a 4px-radius white panel and card-hover shadow.

**Press states.** Color only — no scale, no translate. Disabled is 45% opacity.

**Focus.** Inputs move their 1px border to `--color-accent`; no glow ring.

**Links.** Accent blue, no underline at rest, navy on hover. Footer links are `--smi-blue-300` on navy.

---

## ICONOGRAPHY

The brand ships **its own 21-icon SVG set** (`assets/icons/`, copied verbatim from the supplied
package). No icon font, no sprite, no CDN library — and no substitution was needed. Specs, from the
files themselves: 24×24 viewBox, `fill="none"`, `stroke="#072B4F"`, `stroke-width="1.8"`, round caps
and joins. They are geometric, single-weight, and deliberately literal (a wagon, a pressure washer, a
forklift), not abstract.

- **Never draw a new icon.** If a concept is missing, reuse the nearest existing glyph or ask for an
  addition to the package.
- Use the `Icon` component, which references the SVG file by stem. On dark surfaces set `invert`
  (the supplied navy stroke is flipped to white — the same treatment the reference site uses).
- On service cards and gallery markers, icons sit inside the navy hexagon badge (`IconHex`).
- **No emoji, ever.** No unicode glyphs as icons; the only non-icon glyph in the system is the small
  `▾` dropdown caret in the header.

Set: seguridad · calidad · compromiso · confianza · limpieza-mantenimiento · trabajo-altura ·
espacios-confinados · hidrolavado · pulido-pisos · descarga-camiones · carga-descarga-vagones ·
ayudante-silero · maquinaria-operadores · cuadrillas-trabajo · presupuesto · recursos-humanos ·
capacitacion · postulacion · contacto · email · ubicacion.

**Logo.** The supplied hexagon lockup is the only mark; `assets/logo/smi-logo.png`. It appears full
color on light surfaces and as a flat white knockout on navy. It is also printed on uniforms, hard
hats and trucks in the photography. Never redraw, recolor, rotate, or letter-space it.

---

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | Global entry — `@import`s every token file. Consumers link this. |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css` |
| `guidelines/*.card.html` | 20 foundation specimen cards (Colors, Type, Spacing, Brand) |
| `components/` | React primitives, grouped by concern (below) |
| `ui_kits/website/` | Website recreation — see its README |
| `assets/logo/`, `assets/brand/`, `assets/icons/`, `assets/images/`, `assets/reference/` | Supplied material, copied verbatim |
| `thumbnail.html` | Homepage tile |
| `SKILL.md` | Agent-skill entry point |

### Components
- `components/brand/` — **Logo**, **Icon**, **IconHex**
- `components/core/` — **Button**, **SectionHeading**
- `components/content/` — **PillarItem**, **ServiceCard**, **BenefitItem**, **CtaBanner**, **GalleryThumb**
- `components/layout/` — **SiteHeader**, **Hero**, **SiteFooter**
- `components/forms/` — **Field**

Every component has a sibling `.d.ts` (props), `.prompt.md` (when and how to use it), and a group
card HTML showing its states.

### Intentional additions
The reference is a single page, so a few pieces are implied by its copy rather than drawn in it:
- **Field** — the site's copy references a quote form and a CV submission, but neither form is shown. Field is the minimal control consistent with the brand (uppercase label, 4px radius, accent focus).
- **Icon** — a thin wrapper over the supplied SVG package so no one hand-draws a glyph.
- **ServiceScreen / ClientsScreen** copy in the UI kit is labelled in-screen where the reference gave none.
