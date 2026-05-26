import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const COLORS = {
  navy: '#143D4A',
  navyDeep: '#0B2A35',
  navySoft: '#1F5563',
  aqua: '#83B2AB',
  orange: '#FF7A00',
  orangeDark: '#E86800',
  orangeSoft: '#FFB067',
  pageBg: '#E5E7EB',
  panelBg: '#F3F4F6',
  gray: '#5F6368',
  graySoft: '#7B8087',
  border: '#CBD5E1'
};

const officialLinks = {
  sat: 'https://www.sat.gob.mx/portal/public/calendario',
  imss: 'https://www.imss.gob.mx/patrones',
  infonavit: 'https://empresarios.infonavit.org.mx/',
  fonacot: 'https://www.fonacot.gob.mx/empresas/Paginas/default.aspx',
  dof: 'https://www.dof.gob.mx/indicadores.php',
  uma: 'https://www.inegi.org.mx/temas/uma/',
  conasami: 'https://www.gob.mx/conasami/documentos/tabla-de-salarios-minimos-generales-y-profesionales-por-areas-geograficas'
};

const images = {
  hero: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
  services: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80',
  corporate: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80',
  clients: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80'
};

const referenceValues = {
  uma: { daily: 117.31, monthly: 3566.22, annual: 42794.64 },
  minimumWage: { general: 315.04, border: 440.87 }
};

function money(value, decimals = 2) {
  if (!Number.isFinite(value)) return 'Por actualizar';
  return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(value);
}

function shortDate(date) {
  return new Intl.DateTimeFormat('es-MX', { day: '2-digit', month: 'short', year: 'numeric' }).format(date);
}

function Icon({ name }) {
  const common = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.9, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const paths = {
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-5"/></>,
    calc: <><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/></>,
    file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></>,
    cloud: <><path d="M17.5 19H8a5 5 0 1 1 1.1-9.9A7 7 0 0 1 22 13a4 4 0 0 1-4.5 6Z"/></>,
    building: <><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4M9 9h.01M9 13h.01M9 17h.01M15 13h.01M15 17h.01"/></>,
    check: <><path d="M20 6 9 17l-5-5"/></>,
    calendar: <><path d="M8 2v4M16 2v4M3 10h18"/><rect x="3" y="4" width="18" height="18" rx="2"/></>,
    message: <><path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></>,
    arrow: <><path d="M5 12h14M13 5l7 7-7 7"/></>,
    up: <><path d="m18 15-6-6-6 6"/></>,
    trend: <><path d="m3 17 6-6 4 4 8-8"/><path d="M14 7h7v7"/></>,
    search: <><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3M8.5 11l1.5 1.5 3.5-4"/></>
  };
  return <svg {...common}>{paths[name] || paths.check}</svg>;
}

function BrandMark({ compact = false }) {
  return (
    <a href="#inicio" className="brand" aria-label="MFA Consultores">
      <span className={compact ? 'brand-main brand-main-small' : 'brand-main'}>MFA<span>.</span></span>
      <span className="brand-line"><i /> CONSULTORES</span>
    </a>
  );
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-desc">{description}</p>}
    </div>
  );
}

function ExecutiveControl({ processSteps, kpis }) {
  const controls = [
    ['Contable', 'Registros y conciliaciones', COLORS.navy],
    ['Fiscal', 'Declaraciones y control', COLORS.orangeDark],
    ['Normativo', 'IMSS e INFONAVIT', COLORS.aqua]
  ];

  return (
    <section id="proceso" className="container executive-section">
      <div className="executive-grid">
        <aside className="executive-aside card-soft">
          <div>
            <span className="pill"><Icon name="shield" /> Control ejecutivo</span>
            <h2>Control estratégico y seguimiento empresarial.</h2>
            <p>Supervisión operativa enfocada en cumplimiento, estabilidad financiera y prevención de riesgos.</p>
          </div>
          <div className="control-list">
            {controls.map(([title, detail, color]) => (
              <div className="control-row" key={title}>
                <div>
                  <b>{title}</b>
                  <span>{detail}</span>
                </div>
                <i style={{ backgroundColor: color }} />
              </div>
            ))}
          </div>
          <div className="kpi-mini">
            {kpis.map((item, index) => (
              <div key={item.label}>
                <b style={{ color: index % 2 === 0 ? COLORS.navy : COLORS.orangeDark }}>{item.value}</b>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </aside>
        <div className="process-grid">
          {processSteps.map((item, index) => (
            <article className="process-card" key={item.step}>
              <div className="process-top">
                <span style={{ backgroundColor: index % 2 === 0 ? COLORS.orangeDark : COLORS.aqua }}>{item.step}</span>
                <i style={{ backgroundColor: index % 2 === 0 ? COLORS.orangeDark : COLORS.aqua }} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [indicators, setIndicators] = useState({
    exchangeRate: 17.272,
    status: 'Referencia manual',
    updatedAt: new Date(),
    ...referenceValues
  });

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    let alive = true;
    fetch('https://open.er-api.com/v6/latest/USD')
      .then((r) => r.json())
      .then((data) => {
        const rate = Number(data?.rates?.MXN);
        if (alive && rate) {
          setIndicators({ exchangeRate: rate, status: 'Actualizado automáticamente', updatedAt: new Date(), ...referenceValues });
        }
      })
      .catch(() => {});
    return () => { alive = false; };
  }, []);

  const services = [
    ['building', 'Gestión de trámites', 'SAT · IMSS · INFONAVIT', 'Altas, actualizaciones, movimientos patronales, constancias, aclaraciones y seguimiento documental.'],
    ['calc', 'Contabilidad integral', 'Registro · Conciliación · EEFF', 'Registro contable, conciliaciones, auxiliares y estados financieros.'],
    ['cloud', 'Control CFDI', 'Ingresos · Egresos · REP', 'Control, validación y seguimiento de CFDI, complementos y documentación soporte.'],
    ['file', 'Cumplimiento fiscal', 'ISR · IVA · Retenciones', 'Declaraciones, impuestos, retenciones y obligaciones informativas.'],
    ['check', 'Control interno', 'Procesos · Políticas · Riesgos', 'Supervisión, revisión documental y mejora de procesos administrativos.'],
    ['search', 'Auditoría externa', 'Revisión · Hallazgos · Mejora', 'Evaluación financiera, revisión de cumplimiento y recomendaciones ejecutivas.']
  ];

  const processSteps = [
    { step: '01', title: 'Diagnóstico', text: 'Revisión inicial de obligaciones, operación y riesgos.' },
    { step: '02', title: 'Integración', text: 'Organización de CFDI, bancos, papeles de trabajo y expedientes.' },
    { step: '03', title: 'Ejecución', text: 'Registro contable, conciliaciones, determinación fiscal y control documental.' },
    { step: '04', title: 'Revisión', text: 'Validación de información, riesgos fiscales y consistencia financiera.' },
    { step: '05', title: 'Reporte', text: 'Entrega de hallazgos, indicadores y recomendaciones ejecutivas.' }
  ];

  const kpis = [
    { value: '+100', label: 'Obligaciones' },
    { value: '360°', label: 'Control integral' },
    { value: 'Prev.', label: 'Enfoque preventivo' },
    { value: 'Directo', label: 'Atención' }
  ];

  const obligations = [
    ['SAT', 'Fiscal federal', 'Día 17', 'Mensual', 'ISR, IVA, retenciones e informativas', 'Multas, diferencias y revisiones electrónicas', officialLinks.sat],
    ['IMSS', 'Seguridad social', 'Día 17', 'Mensual', 'Cuotas obrero-patronales, SUA, SIPARE y movimientos patronales', 'Créditos fiscales, diferencias patronales y recargos', officialLinks.imss],
    ['INFONAVIT', 'Seguridad social', 'Bimestral', 'Bimestral', 'Aportaciones, amortizaciones y conciliación de créditos', 'Diferencias bimestrales y requerimientos de pago', officialLinks.infonavit],
    ['FONACOT', 'Créditos trabajadores', 'Según cédula', 'Mensual', 'Cédulas, retenciones, entero de descuentos y conciliación patronal', 'Diferencias, adeudos y aclaraciones con trabajadores', officialLinks.fonacot],
    ['Estatal', 'ISN / local', 'Variable', 'Mensual', 'Impuesto sobre nómina, declaraciones locales y avisos administrativos', 'Sanciones administrativas y diferencias estatales', officialLinks.sat]
  ];
  const active = obligations[activeTab];

  const clients = ['Personas físicas', 'Personas morales', 'RESICO', 'Empresas de servicios', 'Profesionistas independientes'];

  return (
    <main id="inicio">
      <nav className="topbar container">
        <BrandMark compact />
        <div className="navlinks">
          <a href="#servicios">Servicios</a>
          <a href="#proceso">Proceso</a>
          <a href="#calendario">Calendario</a>
          <a href="#cotizacion">Cotización</a>
          <a href="#contacto">Contacto</a>
        </div>
        <a className="nav-cta" href="#contacto">Agenda asesoría</a>
      </nav>

      <section className="hero container">
        <div className="hero-copy">
          <span className="tag"><Icon name="check" /> Consultoría contable · fiscal · administrativa</span>
          <h1>Control contable, fiscal y administrativo.</h1>
          <p>Consultoría especializada para empresas y contribuyentes que requieren orden, cumplimiento y visión financiera.</p>
          <div className="badges"><span>CFDI 4.0</span><span>RESICO</span><span>IMSS · INFONAVIT</span><span>+3 especialidades</span></div>
          <div className="hero-actions"><a href="#cotizacion" className="btn primary">Solicitar cotización <Icon name="arrow" /></a><a href="#servicios" className="btn secondary">Ver servicios</a></div>
        </div>
        <div className="hero-visual image-frame"><img src={images.hero} alt="Consultoría contable y fiscal para empresas en México" /></div>
      </section>

      <ExecutiveControl processSteps={processSteps} kpis={kpis} />

      <section className="container value-section">
        <div className="value-panel">
          <div className="value-copy">
            <span className="pill"><Icon name="trend" /> Valor estratégico</span>
            <h2>Supervisión financiera y control empresarial.</h2>
            <p>Acompañamiento ejecutivo para mantener orden operativo, cumplimiento fiscal y seguimiento estratégico.</p>
            <ul><li>Control contable y financiero</li><li>Cumplimiento fiscal preventivo</li><li>Seguimiento administrativo y operativo</li></ul>
          </div>
          <div className="value-cards">
            {[
              ['message', 'Atención personalizada', 'Comunicación clara y seguimiento directo.'],
              ['shield', 'Enfoque preventivo', 'Reducción de riesgos fiscales y administrativos.'],
              ['trend', 'Información estratégica', 'Indicadores útiles para decisiones empresariales.'],
              ['building', 'Acompañamiento ejecutivo', 'Seguimiento constante durante la operación.']
            ].map(([icon, title, text]) => <article className="mini-card" key={title}><Icon name={icon}/><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section id="servicios" className="container services-section">
        <SectionHeader eyebrow="Servicios" title="Soluciones para control, cumplimiento y dirección" description="Servicios concretos para ordenar la operación, prevenir riesgos y generar información útil para la toma de decisiones." />
        <div className="services-layout">
          <div className="services-image image-frame"><img src={images.services} alt="Servicios contables y fiscales profesionales" /></div>
          <div className="services-grid scroll-row">
            {services.map(([icon, title, label, text], index) => (
              <article className="service-card" key={title}>
                <div className="service-icon"><Icon name={icon}/></div><b>0{index + 1}</b><small>{label}</small><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container corporate-card">
        <div><span className="pill dark">Planeación corporativa</span><h2>Análisis financiero y planeación estratégica empresarial.</h2><p>Evaluación financiera, análisis operativo y planeación para mejorar la toma de decisiones empresariales.</p></div>
        <div className="image-frame"><img src={images.corporate} alt="Análisis financiero y planeación empresarial" /></div>
      </section>

      <section id="calendario" className="calendar-section">
        <div className="container">
          <SectionHeader eyebrow="Calendario e indicadores" title="Obligaciones e indicadores vigentes" description="Consulta operativa con enlaces oficiales, recordatorios y referencias automáticas para control mensual." />
          <div className="calendar-layout">
            <div className="calendar-panel">
              <div className="tabs scroll-row">
                {obligations.map((item, i) => <button key={item[0]} onClick={() => setActiveTab(i)} className={activeTab === i ? 'active' : ''}><b>{item[2]}</b><span>{item[0]}</span><small>{item[1]}</small></button>)}
              </div>
              <div className="obligation-detail">
                <div><small>{active[1]}</small><h3>{active[0]}</h3><p>{active[4]}</p><a href={active[6]} target="_blank" rel="noreferrer" className="btn secondary small">Ver oficial</a></div>
                <div className="detail-grid"><div><small>Periodo</small><b>{active[3]}</b></div><div><small>Vence</small><b>{active[2]}</b></div><div><small>Riesgo a prevenir</small><p>{active[5]}</p></div></div>
              </div>
            </div>
            <div className="indicators-panel">
              <div className="panel-head"><div><small>Indicadores</small><h3>Referencias vigentes</h3></div><span>Auto</span></div>
              {[
                ['Tipo de cambio USD', money(indicators.exchangeRate, 4), 'Mercado / API pública', officialLinks.dof],
                ['UMA diaria', money(indicators.uma.daily), `Mensual ${money(indicators.uma.monthly)} · Anual ${money(indicators.uma.annual)}`, officialLinks.uma],
                ['Salario mínimo general', money(indicators.minimumWage.general), `ZLFN ${money(indicators.minimumWage.border)}`, officialLinks.conasami]
              ].map(([label, value, meta, href]) => <a href={href} target="_blank" rel="noreferrer" className="indicator" key={label}><small>{label}</small><b>{value}</b><p>{meta}</p></a>)}
              <p className="note">Última actualización: {shortDate(indicators.updatedAt)} · {indicators.status}. Validar siempre contra fuente oficial antes de presentar pagos.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container clients-card">
        <div className="image-frame"><img src={images.clients} alt="Atención profesional para empresas y contribuyentes" /></div>
        <div><SectionHeader eyebrow="Clientes" title="Atención especializada para distintos perfiles y sectores." description="Atención personalizada para empresas mexicanas, emprendedores y contribuyentes con operación activa." /><div className="client-tags">{clients.map(c => <span key={c}>{c}</span>)}</div></div>
      </section>

      <section id="cotizacion" className="container quote-section">
        <SectionHeader eyebrow="Cotización" title="Solicita una propuesta" description="Comparte los datos principales de tu negocio para preparar una propuesta acorde a tus necesidades." />
        <form onSubmit={(e) => e.preventDefault()}>
          <input placeholder="Nombre completo"/><input placeholder="Empresa o negocio"/><input placeholder="Teléfono / WhatsApp"/>
          <select><option>Servicio de interés</option><option>Contabilidad integral</option><option>Cumplimiento fiscal</option><option>Control interno</option><option>Gestión de trámites</option></select>
          <textarea placeholder="Cuéntanos brevemente qué necesitas" />
          <a href="https://wa.me/525610376624" className="btn primary">Enviar solicitud por WhatsApp</a>
        </form>
      </section>

      <section id="contacto" className="container contact-bar"><div><Icon name="message"/><div><small>Contacto ejecutivo</small><b>Agenda asesoría estratégica</b></div></div><a href="https://wa.me/525610376624">WhatsApp <Icon name="arrow"/></a></section>

      <footer><div className="container footer-grid"><BrandMark/><p>Consultoría contable, fiscal y administrativa para negocios que buscan crecer con orden.</p><div><b>WhatsApp:</b> 56 1037 6624<br/><b>Atención:</b> virtual y presencial</div></div></footer>

      <a href="https://wa.me/525610376624" className="whatsapp" aria-label="WhatsApp"><Icon name="message"/></a>
      {showTop && <button className="to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><Icon name="up"/><span>MFA</span></button>}
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
