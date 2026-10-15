const { Logo, Icon, Button, SiteHeader, SiteFooter } = window.__SMI;

/* Cross-page navigation: ids match page filenames (NAV ids). */
function nav(id) { const p = id === 'top' ? 'index' : id; if (window.location.hash.slice(1) === p) { window.scrollTo({ top: 0 }); return; } window.location.hash = p; }

const SITE_PAGES = {
  index: { active: '', title: 'SMI Servicios Industriales — Limpieza y mantenimiento industrial', render: () => <><HeroBlock /><ServiciosBlock /><ValoresBlock /><NosotrosBlock /><RecursosBlock /><ClientesBlock /></> },
  nosotros: { active: 'nosotros', title: 'Nosotros — SMI Servicios Industriales', render: () => <><NosotrosBlock full /><ValoresBlock /></> },
  servicios: { active: 'servicios', title: 'Servicios — SMI Servicios Industriales', render: () => <><ServiciosBlock /><RecursosBlock /></> },
  trabaja: { active: 'trabaja', title: 'Trabajá con nosotros — SMI Servicios Industriales', render: () => <><TrabajaBlock /><PostulacionBlock /></> },
  clientes: { active: 'clientes', title: 'Nuestros trabajos — SMI Servicios Industriales', render: () => <ClientesBlock showMore={false} /> },
  contacto: { active: 'contacto', title: 'Contacto — SMI Servicios Industriales', render: () => <ContactoBlock /> },
};

function SiteApp({ initial = 'index' }) {
  const read = () => { const h = window.location.hash.slice(1); return SITE_PAGES[h] ? h : initial; };
  const [page, setPage] = React.useState(read);
  React.useEffect(() => {
    const on = () => { const h = window.location.hash.slice(1); if (SITE_PAGES[h]) { setPage(h); window.scrollTo({ top: 0 }); } };
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  const p = SITE_PAGES[page];
  React.useEffect(() => { document.title = p.title; }, [page]);
  return <Chrome key={page} active={p.active}>{p.render()}</Chrome>;
}

/* Same-page smooth anchor scroll, accounts for the sticky header height. */
function goTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = window.innerWidth <= 900 ? 68 : 112;
  const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
}

/* Entrance animation: adds .in when the element first enters the viewport. */
function Reveal({ children, delay = 0, as = 'div', className = '', style, ...rest }) {
  const ref = React.useRef(null);
  const Tag = as;
  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { node.classList.add('in'); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { node.classList.add('in'); io.unobserve(node); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    io.observe(node);
    return () => io.disconnect();
  }, []);
  return <Tag ref={ref} className={('rv ' + className).trim()} style={{ transitionDelay: delay + 'ms', ...style }} {...rest}>{children}</Tag>;
}

/* Google Material Symbols icon (fonts.google.com/icons) — replaces the SVG icon package, avoids resource-loading issues. */
function MatIcon({ name, size = 24, invert = false, style }) {
  return (
    <span
      className="material-symbols-outlined"
      style={{ fontSize: size, width: size, height: size, lineHeight: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none', color: invert ? 'var(--smi-white)' : 'var(--smi-navy-800)', ...style }}
      aria-hidden="true"
    >{ICON_MAP[name] || 'circle'}</span>
  );
}

const HEX_TONE = { navy: { bg: 'var(--surface-dark)', invert: true }, blue: { bg: 'var(--color-accent)', invert: true }, light: { bg: 'var(--smi-blue-100)', invert: false } };
function MatIconHex({ name, size = 40, tone = 'navy', style }) {
  const t = HEX_TONE[tone] || HEX_TONE.navy;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: size, height: size * 1.1, flex: 'none', background: t.bg, clipPath: 'var(--hex-clip)', ...style }}>
      <MatIcon name={name} size={Math.round(size * 0.55)} invert={t.invert} />
    </span>
  );
}

function LocalPillarItem({ icon, title, children, divider = false, style }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)', padding: '0 var(--space-6)', borderLeft: divider ? '1px solid var(--border-on-dark)' : 'none', ...style }}>
      <MatIcon name={icon} size={34} invert />
      <div>
        <div style={{ font: 'var(--type-label)', letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--text-on-dark)' }}>{title}</div>
        <p style={{ margin: 'var(--space-2) 0 0', font: 'var(--type-body)', fontSize: 'var(--fs-sm)', color: 'var(--text-on-dark-muted)' }}>{children}</p>
      </div>
    </div>
  );
}

function LocalServiceCard({ image, icon, title, note, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <article onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={onClick} style={{ cursor: 'pointer' }}>
      <div style={{ position: 'relative', aspectRatio: '16 / 10', overflow: 'hidden', borderRadius: 'var(--radius-lg)', boxShadow: hover ? 'var(--shadow-card-hover)' : 'var(--shadow-card)', transition: 'var(--transition-base)' }}>
        <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transform: hover ? 'scale(1.04)' : 'scale(1)', transition: 'transform var(--dur-slow) var(--ease-standard)' }} />
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)', marginTop: 'var(--space-4)' }}>
        <MatIconHex name={icon} size={34} />
        <div>
          <h3 style={{ margin: 0, font: 'var(--type-label)', letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--text-heading)' }}>{title}</h3>
          {note && <p style={{ margin: '6px 0 0', font: 'var(--type-body)', fontSize: 'var(--fs-xs)', color: 'var(--text-muted)' }}>{note}</p>}
        </div>
      </div>
    </article>
  );
}

function LocalBenefitItem({ children, style }) {
  return (
    <li style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start', ...style }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 20, height: 20, flex: 'none', marginTop: 2, borderRadius: 'var(--radius-pill)', background: 'var(--color-accent)' }}>
        <MatIcon name="calidad" size={13} invert />
      </span>
      <span style={{ font: 'var(--type-body)', color: 'var(--text-body)' }}>{children}</span>
    </li>
  );
}

function LocalCtaBanner({ icon = 'presupuesto', title, children, action, onAction, style }) {
  const { Button } = window.__SMI;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)', background: 'var(--surface-dark)', borderRadius: 'var(--radius-md)', padding: 'var(--space-8) var(--space-10)', ...style }}>
      <MatIcon name={icon} size={44} invert />
      <div style={{ flex: 1 }}>
        <div style={{ font: 'var(--type-h3)', letterSpacing: 'var(--ls-heading)', textTransform: 'uppercase', color: 'var(--text-on-dark)' }}>{title}</div>
        <p style={{ margin: 'var(--space-2) 0 0', font: 'var(--type-body)', color: 'var(--text-on-dark-muted)' }}>{children}</p>
      </div>
      {action && <Button variant="outline-light" onClick={onAction}>{action}</Button>}
    </div>
  );
}

const Section = ({ id, children, alt, dark, tight, style }) => (
  <section id={id} className={'sec' + (alt ? ' sec--alt' : '') + (dark ? ' sec--dark' : '') + (tight ? ' sec--tight' : '')} style={style}>
    <div className="container">{children}</div>
  </section>
);

/* Compact header for narrow viewports: lockup + drawer menu. */
function MobileHeader({ items, emails, onNavigate }) {
  const [open, setOpen] = React.useState(false);
  const pick = (id) => { setOpen(false); onNavigate(id); };
  return (
    <div className="hdr-mobile">
      <div className="hdr-mobile__bar">
        <a href="index.html" onClick={(e) => { e.preventDefault(); pick('top'); }}><Logo src={LOGO} height={44} /></a>
        <button className="burger" aria-label="Abrir menú" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span style={{ transform: open ? 'translateY(6px) rotate(45deg)' : 'none' }}></span>
          <span style={{ opacity: open ? 0 : 1 }}></span>
          <span style={{ transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none' }}></span>
        </button>
      </div>
      <nav className={'drawer' + (open ? ' drawer--open' : '')}>
        {items.map((it) => (
          <button key={it.id} className={'drawer__link' + (it.id === 'contacto' ? ' drawer__link--cta' : '')} onClick={() => pick(it.id)}>{it.label}</button>
        ))}
        <div className="drawer__mails">
          {emails.map((e) => (
            <a key={e} href={'mailto:' + e} className="drawer__mail"><MatIcon name="email" size={16} />{e}</a>
          ))}
        </div>
      </nav>
    </div>
  );
}

/* Shared header + footer chrome for every page. */
function Chrome({ active, children }) {
  return (
    <div>
      <div
        className="hdr-desktop"
        onClickCapture={(e) => {
          const logo = e.target.closest && e.target.closest('img[alt="SMI Servicios Industriales"]');
          if (logo) { e.preventDefault(); e.stopPropagation(); nav('top'); }
        }}
      >
        <SiteHeader items={NAV} active={active} onNavigate={nav} emails={EMAILS} logoSrc={LOGO} base={ICONS} />
      </div>
      <MobileHeader items={NAV} emails={EMAILS} onNavigate={nav} />
      <main>{children}</main>
      <div className="footer-wrap">
        <SiteFooter links={NAV} emails={EMAILS} phone="Completar teléfono" address={['Completar dirección', 'Localidad, provincia']} logoSrc={LOGO} base={ICONS} onNavigate={nav} />
      </div>
    </div>
  );
}

/* Small submit-and-confirm wrapper shared by the forms. */
function FormShell({ children, action, note, onDone }) {
  const [sent, setSent] = React.useState(false);
  if (sent) {
    return (
      <div className="form-done">
        <Icon name="calidad" base={ICONS} size={28} />
        <div>
          <strong>Recibimos tus datos.</strong>
          <p>Nuestro equipo se pondrá en contacto a la brevedad.</p>
        </div>
      </div>
    );
  }
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); if (onDone) onDone(); }} noValidate>
      <div className="form">{children}</div>
      <div className="form-foot">
        <Button type="submit">{action}</Button>
        {note && <span className="form-note">{note}</span>}
      </div>
    </form>
  );
}

Object.assign(window, { nav, goTo, Reveal, Section, MobileHeader, Chrome, FormShell, MatIcon, MatIconHex, LocalPillarItem, LocalServiceCard, LocalBenefitItem, LocalCtaBanner, SiteApp, SITE_PAGES });
