const { Hero, Button, SectionHeading } = window.__SMI;

function HeroBlock() {
  return (
    <div className="heroblock" id="top">
      <Hero
        image={HERO_IMG}
        height={520}
        title={<>Limpieza y<br />mantenimiento<br />industrial</>}
        actions={
          <span className="hero-cta">
            <Button size="lg" onClick={() => nav('contacto')}>Solicitar presupuesto</Button>
            <Button size="lg" variant="outline-light" onClick={() => goTo('servicios')}>Ver servicios</Button>
          </span>
        }
      >
        Soluciones integrales con personal propio, capacitado y comprometido con la calidad, la seguridad y el cuidado del entorno.
      </Hero>
    </div>
  );
}

function ValoresBlock() {
  return (
    <section className="sec sec--dark sec--tight">
      <div className="container">
        <div className="g-pillars">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <LocalPillarItem icon={p.icon} title={p.title} divider={i > 0}>{p.text}</LocalPillarItem>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function NosotrosBlock({ full }) {
  return (
    <Section id="nosotros">
      <div className="split">
        <div>
          <Reveal><SectionHeading title="Una empresa familiar con trayectoria" /></Reveal>
          <div className="prose">
            <Reveal as="p" delay={80}>SMI Servicios Industriales es una empresa familiar con más de 20 años de trayectoria brindando soluciones integrales de limpieza y mantenimiento industrial.</Reveal>
            <Reveal as="p" delay={160}>Fundada sobre valores de trabajo, honestidad y compromiso, hemos crecido junto a nuestros clientes, construyendo relaciones de confianza basadas en la calidad del servicio y en el desarrollo constante de nuestro equipo.</Reveal>
            <Reveal as="p" delay={240}>Hoy seguimos con la misma esencia que nos vio nacer: ser una empresa cercana, flexible y orientada a resultados, adaptándonos a las necesidades de cada proyecto.</Reveal>
          </div>
          <Reveal delay={320} style={{ marginTop: 'var(--space-8)' }}>
            {full
              ? <Button onClick={() => nav('contacto')}>Hablemos de tu proyecto</Button>
              : <Button variant="outline" onClick={() => nav('nosotros')}>Conocé más sobre nuestra historia</Button>}
          </Reveal>
        </div>
        <Reveal delay={120} className="rv--media">
          <img src={TEAM_IMG} alt="Cuadrilla de personal propio de SMI" className="media" />
        </Reveal>
      </div>
    </Section>
  );
}

function ServiciosBlock() {
  return (
    <Section id="servicios" alt>
      <Reveal>
        <SectionHeading align="center" title="Soluciones para entornos industriales" intro="Contamos con personal propio, equipos y procedimientos adecuados para brindar soluciones eficientes y seguras en todo tipo de entornos industriales. Nos adaptamos a los requerimientos específicos de cada cliente." />
      </Reveal>
      <div className="g-services">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={(i % 5) * 80}>
            <LocalServiceCard image={s.image} icon={s.icon} title={s.title} note={s.note} onClick={() => nav('contacto')} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function RecursosBlock() {
  return (
    <Section id="rrhh">
      <div className="split split--rev">
        <Reveal className="rv--media">
          <img src={WAREHOUSE_IMG} alt="Operación en almacén y logística" className="media" />
        </Reveal>
        <div>
          <Reveal>
            <div className="eyebrow"><MatIconHex name="recursos-humanos" size={30} /><span>Recursos humanos para empresas</span></div>
            <SectionHeading title="Personal idóneo, evaluado y contratado por SMI" />
          </Reveal>
          <div className="prose">
            <Reveal as="p" delay={80}>Realizamos la captación, evaluación y contratación de personal de acuerdo con los requisitos específicos de cada cliente.</Reveal>
            <Reveal as="p" delay={160}>El operario trabaja bajo relación de dependencia con SMI dentro del espacio del cliente durante un período determinado, con posibilidad de incorporarse posteriormente a la planta permanente del cliente en caso de conformidad laboral.</Reveal>
          </div>
          <Reveal delay={240} style={{ marginTop: 'var(--space-8)' }}>
            <Button onClick={() => nav('contacto')}>Solicitar presupuesto personalizado</Button>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

Object.assign(window, { HeroBlock, ValoresBlock, NosotrosBlock, ServiciosBlock, RecursosBlock });
