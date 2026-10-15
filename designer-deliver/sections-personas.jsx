const { Button, SectionHeading, GalleryThumb, Field } = window.__SMI;

function TrabajaBlock() {
  return (
    <Section id="trabaja">
      <div className="three">
        <div>
          <Reveal><SectionHeading title="Sumate a SMI" /></Reveal>
          <div className="prose">
            <Reveal as="p" delay={80}>Buscamos personas comprometidas, responsables y con ganas de crecer.</Reveal>
            <Reveal as="p" delay={160}>Ofrecemos oportunidades de trabajo en blanco, capacitación continua y la posibilidad de formar parte de grandes proyectos industriales.</Reveal>
          </div>
          <Reveal delay={240} style={{ marginTop: 'var(--space-8)' }}>
            <Button onClick={() => goTo('postulacion')}>Enviá tu CV</Button>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <div className="eyebrow"><MatIconHex name="capacitacion" size={30} /><span>Beneficios</span></div>
          <ul className="benefits">
            {BENEFITS.map((b) => <LocalBenefitItem key={b}>{b}</LocalBenefitItem>)}
          </ul>
        </Reveal>
        <Reveal delay={200} className="rv--media media-fill">
          <img src={(window.__resources && window.__resources['img-beneficios']) || 'uploads/trabaja-beneficios.png'} alt="Operario realizando hidrolavado en planta industrial" className="media" />
        </Reveal>
      </div>
    </Section>
  );
}

function ClientesBlock({ showMore = true }) {
  return (
    <Section id="clientes" tight>
      <Reveal>
        <SectionHeading align="center" title="Nuestro trabajo en acción" intro="Conocé algunos de los entornos y proyectos en los que desarrollamos nuestros servicios." />
      </Reveal>
      <div className="g-gallery">
        {GALLERY.map((g, i) => (
          <Reveal key={g.image + i} delay={(i % 6) * 70}>
            <GalleryThumb image={g.image} caption={g.caption} />
          </Reveal>
        ))}
      </div>
      {showMore && (
        <Reveal delay={120} className="center-row">
          <Button variant="navy" onClick={() => nav('clientes')}>Ver más trabajos realizados</Button>
        </Reveal>
      )}
      <Reveal delay={80} className="cta-wrap">
        <LocalCtaBanner title="Presupuestos personalizados" action="Solicitar presupuesto" onAction={() => nav('contacto')}>
          Completá el formulario y nuestro equipo se pondrá en contacto para preparar una propuesta a medida.
        </LocalCtaBanner>
      </Reveal>
    </Section>
  );
}

function ContactoBlock() {
  return (
    <Section id="contacto" alt>
      <div className="split split--form">
        <div>
          <Reveal><SectionHeading title="Hablemos de tu próximo proyecto" /></Reveal>
          <div className="prose">
            <Reveal as="p" delay={80}>Estamos disponibles para conocer tus necesidades y desarrollar una propuesta de servicios adecuada para tu empresa.</Reveal>
          </div>
          <Reveal delay={160} className="channels">
            {CHANNELS.map((c) => (
              <a key={c.email} href={'mailto:' + c.email} className="channel">
                <MatIcon name="email" size={18} />
                <span><strong>{c.title}</strong>{c.email}</span>
              </a>
            ))}
          </Reveal>
          <Reveal as="p" delay={220} style={{ marginTop: 'var(--space-6)', font: 'var(--type-body)', fontSize: 'var(--fs-sm)', color: 'var(--text-muted)' }}>
            ¿Buscás trabajo con nosotros? <a href="#trabaja" onClick={(e) => { e.preventDefault(); nav('trabaja'); }}>Enviá tu CV</a>.
          </Reveal>
        </div>
        <Reveal delay={120} className="panel">
          <FormShell action="Enviar consulta" note="Respondemos en el día hábil siguiente.">
            <Field label="Nombre y apellido" required autoComplete="name" />
            <Field label="Empresa" />
            <Field label="Correo electrónico" type="email" required />
            <Field label="Teléfono" type="tel" />
            <Field label="Motivo de contacto" as="select" options={['Presupuesto', 'Recursos humanos para empresas', 'Otro']} style={{ gridColumn: '1 / -1' }} />
            <Field label="Ubicación" placeholder="Localidad, provincia" />
            <Field label="Mensaje" as="textarea" style={{ gridColumn: '1 / -1' }} placeholder="Contanos sobre tu proyecto o consulta." />
          </FormShell>
        </Reveal>
      </div>
    </Section>
  );
}

Object.assign(window, { TrabajaBlock, ClientesBlock, ContactoBlock });
