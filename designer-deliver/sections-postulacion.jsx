const { Button: PButton, SectionHeading: PHeading, Field: PField } = window.__SMI;

const P_STEPS = ['Datos personales', 'Perfil laboral', 'Currículum', 'Finalizar postulación'];
const P_ACTIVIDADES = ['Limpieza industrial', 'Montaje', 'Soldadura', 'Pintura', 'Hidrolavado', 'Manejo de maquinaria', 'Mantenimiento', 'Otras'];
const P_EMPTY = { nombre: '', edad: '', localidad: '', telefono: '', correo: '', actividades: [], otras: '', experiencia: '', ultimo: '', horarios: '', carnet: '', cv: null, declaro: false };

function Sym({ g, size = 18, color = 'currentColor', style }) {
  return <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: size, width: size, height: size, lineHeight: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none', color, ...style }}>{g}</span>;
}

function PStepper({ step }) {
  return (
    <ol className="pst">
      {P_STEPS.map((s, i) => (
        <li key={s} className={'pst__i' + (i === step ? ' is-on' : '') + (i < step ? ' is-done' : '')}>
          <span className="pst__n">{i < step ? <Sym g="check" size={14} /> : i + 1}</span>
          <span className="pst__l">{s}</span>
        </li>
      ))}
    </ol>
  );
}

function PQuestion({ label, required, error, children, full = true }) {
  return (
    <div className="pq" style={full ? { gridColumn: '1 / -1' } : null}>
      <span className="pq__l">{label}{required && <span style={{ color: 'var(--color-accent)' }}> *</span>}</span>
      {children}
      {error && <span className="perr">{error}</span>}
    </div>
  );
}

function PChoice({ options, value, onChange, multi }) {
  const on = (o) => multi ? value.includes(o) : value === o;
  const toggle = (o) => multi ? onChange(on(o) ? value.filter((x) => x !== o) : [...value, o]) : onChange(o);
  return (
    <div className="pchips" role={multi ? 'group' : 'radiogroup'}>
      {options.map((o) => (
        <button type="button" key={o} className={'pchip' + (on(o) ? ' is-on' : '')} aria-pressed={on(o)} onClick={() => toggle(o)}>
          {multi && <span className="pchip__box">{on(o) && <Sym g="check" size={14} />}</span>}{o}
        </button>
      ))}
    </div>
  );
}

function PErr({ msg }) { return msg ? <span className="perr">{msg}</span> : null; }

function PostulacionForm() {
  const [step, setStep] = React.useState(0);
  const [d, setD] = React.useState(P_EMPTY);
  const [err, setErr] = React.useState({});
  const [sent, setSent] = React.useState(false);
  const [drag, setDrag] = React.useState(false);
  const fileRef = React.useRef(null);
  const topRef = React.useRef(null);
  const set = (k) => (v) => setD((p) => ({ ...p, [k]: v && v.target ? (v.target.type === 'checkbox' ? v.target.checked : v.target.value) : v }));

  const validate = (s) => {
    const e = {};
    if (s === 0) {
      if (!d.nombre.trim()) e.nombre = 'Ingresá tu nombre y apellido.';
      if (!d.telefono.trim()) e.telefono = 'Ingresá un teléfono de contacto.';
      if (!/^\S+@\S+\.\S+$/.test(d.correo)) e.correo = 'Ingresá un correo electrónico válido.';
    }
    if (s === 1) {
      if (!d.actividades.length) e.actividades = 'Elegí al menos una actividad.';
      if (d.actividades.includes('Otras') && !d.otras.trim()) e.otras = 'Contanos qué otras actividades.';
      if (!d.experiencia) e.experiencia = 'Elegí una opción.';
      if (!d.horarios) e.horarios = 'Elegí una opción.';
    }
    if (s === 2 && !d.cv) e.cv = 'Adjuntá tu CV para continuar.';
    if (s === 3 && !d.declaro) e.declaro = 'Confirmá que la información es correcta.';
    setErr(e);
    return !Object.keys(e).length;
  };
  const scrollTop = () => { const el = topRef.current; if (!el) return; const y = el.getBoundingClientRect().top + window.pageYOffset - (window.innerWidth <= 900 ? 84 : 128); if (el.getBoundingClientRect().top < 100) window.scrollTo({ top: y }); };
  const go = (n) => { setErr({}); setStep(n); scrollTop(); };
  const next = () => { if (validate(step)) go(step + 1); };
  const submit = (e) => { e.preventDefault(); if (step < 3) return next(); if (validate(3)) { setSent(true); scrollTop(); } };
  const pickFile = (f) => { if (!f) return; if (f.size > 5 * 1024 * 1024) { setErr({ cv: 'El archivo supera los 5 MB.' }); return; } setErr({}); set('cv')(f); };

  if (sent) {
    return (
      <div className="pdone" ref={topRef}>
        <span className="pdone__ic"><Sym g="check" size={30} color="var(--smi-white)" /></span>
        <strong>Postulación enviada</strong>
        <p>¡Gracias por dejarnos tus datos! Te contactaremos en caso de surgir una oportunidad laboral acorde a tu perfil.</p>
        <PButton variant="navy" onClick={() => { setD(P_EMPTY); setStep(0); setSent(false); }}>Enviar otra postulación</PButton>
      </div>
    );
  }

  const kb = d.cv ? (d.cv.size / 1024 > 1024 ? (d.cv.size / 1048576).toFixed(1) + ' MB' : Math.max(1, Math.round(d.cv.size / 1024)) + ' KB') : '';
  const perfil = d.actividades.map((a) => a === 'Otras' && d.otras ? 'Otras: ' + d.otras : a).join(', ');

  return (
    <form onSubmit={submit} noValidate ref={topRef}>
      <PStepper step={step} />
      <div className="pstep__head">
        <span>Paso {step + 1} de {P_STEPS.length}</span>
        <h3>{P_STEPS[step]}</h3>
      </div>

      {step === 0 && (
        <div className="form">
          <div style={{ gridColumn: '1 / -1' }}><PField label="Nombre y apellido" required autoComplete="name" value={d.nombre} onChange={set('nombre')} /><PErr msg={err.nombre} /></div>
          <div><PField label="Edad" inputMode="numeric" value={d.edad} onChange={(e) => set('edad')(e.target.value.replace(/\D/g, '').slice(0, 2))} /></div>
          <div><PField label="Localidad" autoComplete="address-level2" value={d.localidad} onChange={set('localidad')} /></div>
          <div><PField label="Teléfono / WhatsApp" required type="tel" autoComplete="tel" value={d.telefono} onChange={set('telefono')} /><PErr msg={err.telefono} /></div>
          <div><PField label="Correo electrónico" required type="email" autoComplete="email" value={d.correo} onChange={set('correo')} /><PErr msg={err.correo} /></div>
        </div>
      )}

      {step === 1 && (
        <div className="form">
          <PQuestion label="¿En qué actividades tenés experiencia o te sentís más familiarizado/a?" required error={err.actividades}>
            <PChoice multi options={P_ACTIVIDADES} value={d.actividades} onChange={set('actividades')} />
            {d.actividades.includes('Otras') && <div style={{ marginTop: 'var(--space-3)' }}><PField label="Otras" placeholder="Indicá cuáles" value={d.otras} onChange={set('otras')} /><PErr msg={err.otras} /></div>}
          </PQuestion>
          <PQuestion label="¿Tenés experiencia laboral previa?" required error={err.experiencia} full={false}>
            <PChoice options={['Sí', 'No']} value={d.experiencia} onChange={set('experiencia')} />
          </PQuestion>
          <PQuestion label="¿Contás con disponibilidad para trabajar en diferentes horarios?" required error={err.horarios} full={false}>
            <PChoice options={['Sí', 'No']} value={d.horarios} onChange={set('horarios')} />
          </PQuestion>
          <PField label="¿Cuál fue tu último trabajo?" style={{ gridColumn: '1 / -1' }} value={d.ultimo} onChange={set('ultimo')} />
          <PField label="¿Tenés carnet de conducir vigente? ¿Cuál?" style={{ gridColumn: '1 / -1' }} placeholder="Ej: B1, D1, E1 o No tengo" value={d.carnet} onChange={set('carnet')} />
        </div>
      )}

      {step === 2 && (
        <div>
          <span className="pq__l">Adjuntar CV<span style={{ color: 'var(--color-accent)' }}> *</span></span>
          {!d.cv ? (
            <div className={'pdrop' + (drag ? ' is-drag' : '')} onClick={() => fileRef.current && fileRef.current.click()}
              onDragOver={(e) => { e.preventDefault(); setDrag(true); }} onDragLeave={() => setDrag(false)}
              onDrop={(e) => { e.preventDefault(); setDrag(false); pickFile(e.dataTransfer.files[0]); }}>
              <Sym g="upload_file" size={36} color="var(--smi-navy-800)" />
              <strong>Cargar archivo</strong>
              <span>Arrastralo acá o hacé clic para elegirlo. PDF, DOC o DOCX, hasta 5 MB.</span>
            </div>
          ) : (
            <div className="pfile">
              <Sym g="description" size={28} color="var(--smi-navy-800)" />
              <span className="pfile__n"><strong>{d.cv.name}</strong>{kb}</span>
              <button type="button" className="plink" onClick={() => set('cv')(null)}>Quitar</button>
            </div>
          )}
          <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" hidden onChange={(e) => { pickFile(e.target.files[0]); e.target.value = ''; }} />
          <PErr msg={err.cv} />
        </div>
      )}

      {step === 3 && (
        <div>
          <dl className="psum">
            {[
              ['Datos personales', 0, [d.nombre, d.edad && d.edad + ' años', d.localidad, d.telefono, d.correo].filter(Boolean).join(' · ')],
              ['Perfil laboral', 1, [perfil, 'Experiencia previa: ' + d.experiencia, d.ultimo && 'Último trabajo: ' + d.ultimo, 'Distintos horarios: ' + d.horarios, d.carnet && 'Carnet: ' + d.carnet].filter(Boolean).join(' · ')],
              ['Currículum', 2, d.cv ? d.cv.name : ''],
            ].map(([t, s, v]) => (
              <div key={t} className="psum__row">
                <dt>{t}<button type="button" className="plink" onClick={() => go(s)}>Editar</button></dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <label className="pcheck">
            <input type="checkbox" checked={d.declaro} onChange={set('declaro')} />
            <span className="pcheck__box">{d.declaro && <Sym g="check" size={14} color="var(--smi-white)" />}</span>
            Declaro que la información proporcionada es correcta.
          </label>
          <PErr msg={err.declaro} />
        </div>
      )}

      <div className="pnav">
        {step > 0 ? <PButton variant="outline" type="button" onClick={() => go(step - 1)}>Volver</PButton> : <span></span>}
        <PButton type="submit">{step < 3 ? 'Continuar' : 'Enviar postulación'}</PButton>
      </div>
    </form>
  );
}

function PostulacionBlock() {
  return (
    <Section id="postulacion" alt>
      <div className="split split--form">
        <div>
          <Reveal>
            <div className="eyebrow"><MatIconHex name="postulacion" size={30} /><span>Recursos Humanos</span></div>
            <PHeading title="Trabajá con nosotros" />
          </Reveal>
          <div className="prose">
            <Reveal as="p" delay={80} style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-bold)', color: 'var(--text-heading)' }}>¿Querés formar parte de SMI Servicios Industriales?</Reveal>
            <Reveal as="p" delay={120}>Completá tus datos y adjuntá tu CV. Tu información será incorporada a nuestra base de candidatos para futuras oportunidades laborales.</Reveal>
          </div>
          <Reveal delay={160} className="channels">
            <a href="mailto:recursoshumanos@smi.com.ar" className="channel">
              <MatIcon name="recursos-humanos" size={18} />
              <span><strong>Recursos Humanos</strong>recursoshumanos@smi.com.ar</span>
            </a>
          </Reveal>
        </div>
        <Reveal delay={120} className="panel">
          <PostulacionForm />
        </Reveal>
      </div>
    </Section>
  );
}

Object.assign(window, { PostulacionBlock, PostulacionForm });
