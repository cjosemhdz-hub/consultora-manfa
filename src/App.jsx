
import React, { useState } from "react";
import {
  ArrowRight, ChevronUp, CheckCircle, MessageCircle, ShieldCheck, Building2,
  Calculator, Cloud, FileText, ClipboardCheck, SearchCheck, TrendingUp, CalendarDays
} from "lucide-react";
import "./styles.css";

const WAPP = "https://wa.me/525610376624";
const imgs = {
  hero: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
  services: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  planning: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
  clients: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
};

const navItems = ["Servicios", "Proceso", "Calendario", "Cotización", "Contacto"];

function slug(label) {
  return label.toLowerCase().normalize("NFD").replace(/[\\u0300-\\u036f]/g, "");
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState(0);
  const [form, setForm] = useState({
    nombre: "", empresa: "", telefono: "", regimen: "", servicio: "", mensaje: ""
  });

  const services = [
    ["Gestión de trámites", "SAT · IMSS · INFONAVIT", "Altas, actualizaciones, movimientos patronales, constancias, aclaraciones y seguimiento documental.", <Building2 />],
    ["Contabilidad integral", "Registro · Conciliación · EEFF", "Registro contable, conciliaciones y estados financieros.", <Calculator />],
    ["Control CFDI", "Ingresos · Egresos · REP", "Control y validación de CFDI y complementos.", <Cloud />],
    ["Cumplimiento fiscal", "ISR · IVA · Retenciones", "Declaraciones, impuestos y cumplimiento fiscal.", <FileText />],
    ["Control interno", "Procesos · Políticas · Riesgos", "Revisión de procesos y control interno.", <ClipboardCheck />],
    ["Auditoría externa", "Revisión · Hallazgos · Mejora", "Evaluación financiera y revisión de cumplimiento.", <SearchCheck />],
  ];

  const process = [
    ["01", "Diagnóstico", "Alcance, obligaciones y situación actual."],
    ["02", "Integración", "Documentos, CFDI, bancos y expedientes."],
    ["03", "Ejecución", "Registro, conciliación y determinación fiscal."],
    ["04", "Revisión", "Validación de riesgos y consistencia."],
    ["05", "Reporte", "Indicadores, hallazgos y recomendaciones."],
  ];

  const calendar = [
    ["Fiscal federal", "SAT", "Día 17", "Mensual", "ISR, IVA, retenciones e informativas", "Multas y revisiones electrónicas"],
    ["Seguridad social", "IMSS · INFONAVIT", "Día 17", "Mensual / Bimestral", "Cuotas, SUA, SIPARE, RCV e INFONAVIT", "Créditos y diferencias patronales"],
    ["Obligaciones estatales", "Gobierno estatal", "Variable", "Mensual", "ISN, declaraciones locales y avisos", "Sanciones administrativas"],
    ["Declaración anual", "SAT", "Marzo / Abril", "Anual", "Cierre contable-fiscal y conciliaciones", "Diferencias fiscales"],
    ["Laboral", "LFT · IMSS", "Mayo / Diciembre", "Anual / Permanente", "PTU, aguinaldo, nómina y expedientes", "Contingencias laborales"],
  ];

  const quoteServices = [
    "Contabilidad integral", "Cumplimiento fiscal", "Gestión de trámites SAT, IMSS e INFONAVIT",
    "Control y revisión de CFDI", "Control interno", "Auditoría externa", "Consultoría empresarial"
  ];

  function change(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submit(e) {
    e.preventDefault();
    const msg = encodeURIComponent([
      "Hola, quiero solicitar una cotización para servicios de ManFa Consultores.",
      "", `Nombre: ${form.nombre}`, `Empresa/negocio: ${form.empresa}`,
      `Teléfono: ${form.telefono}`, `Régimen o tipo de cliente: ${form.regimen}`,
      `Servicio de interés: ${form.servicio}`, `Comentarios: ${form.mensaje}`
    ].join("\\n"));
    window.open(`${WAPP}?text=${msg}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main>
      <header className="hero" id="inicio">
        <div className="orange-line" />
        <nav className="nav">
          <a className="brand" href="#inicio">
            <span className="mark">MF<span>.</span></span>
            <span><b>Man<span>Fa</span></b><small>CONSULTORES</small></span>
          </a>
          <div className="menu">
            {navItems.map((n) => (
              <a key={n} href={`#${slug(n)}`} className={n === "Servicios" ? "green" : ""}>{n}</a>
            ))}
          </div>
          <a className="agenda" href="#contacto">AGENDA ASESORÍA</a>
        </nav>

        <div className="mobile-menu">
          {navItems.map((n) => (
            <a key={n} href={`#${slug(n)}`} className={n === "Servicios" ? "green" : ""}>{n}</a>
          ))}
        </div>

        <section className="hero-grid">
          <div>
            <span className="pill green-pill"><CheckCircle /> Consultoría contable · fiscal · administrativa</span>
            <h1>Control contable, fiscal y administrativo.</h1>
            <p className="lead">Consultoría especializada para empresas y contribuyentes que requieren orden, cumplimiento y visión financiera.</p>
            <div className="badges mobile-only"><span>CFDI 4.0</span><span>RESICO</span><span>IMSS · INFONAVIT</span><span className="transparent">+3 especialidades</span></div>
            <div className="badges desktop-only"><span>CFDI 4.0</span><span>REPSE</span><span>IMSS · INFONAVIT</span><span>RESICO</span><span>Revisión contable</span><span>Control interno</span></div>
            <div className="actions">
              <a className="primary" href="#cotizacion">Solicitar cotización <ArrowRight /></a>
              <a className="secondary" href="#servicios">Ver servicios</a>
            </div>
          </div>

          <div className="hero-side">
            <div className="photo hero-photo">
              <img src={imgs.hero} alt="Despacho corporativo" />
              <div className="caption"><small>Despacho corporativo</small><b>Consultoría ejecutiva para cumplimiento y control empresarial.</b></div>
            </div>
            <div className="panel">
              <div className="panel-head"><div><small>Control ejecutivo</small><h3>Supervisión financiera y cumplimiento estratégico</h3></div><ShieldCheck /></div>
              <div className="metrics"><article><b>Contable</b><p>Control contable, fiscal y administrativo</p></article><article><b>Fiscal</b><p>Cumplimiento de obligaciones federales y estatales</p></article><article><b>Normativo</b><p>Seguimiento conforme a legislación vigente</p></article></div>
            </div>
          </div>
        </section>
      </header>

      <section id="proceso" className="section">
        <div className="process-card">
          <div>
            <SectionHeader eyebrow="Proceso" title="Metodología clara y medible." text="Integramos diagnóstico, ejecución y seguimiento en un flujo simple, visual y orientado a resultados." />
            <div className="kpis"><article><b>+100</b><p>Obligaciones gestionadas</p></article><article><b>360°</b><p>Control fiscal y administrativo</p></article><article><b>Preventivo</b><p>Seguimiento mensual estratégico</p></article><article><b>Directo</b><p>Atención personalizada</p></article></div>
          </div>
          <div className="timeline">
            {process.map(([num, title, text]) => <article key={num}><span>{num}</span><div><b>{title}</b><p>{text}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="value-grid">
          <article><MessageCircle /><h3>Atención personalizada</h3><p>Seguimiento directo y comunicación clara.</p></article>
          <article><ShieldCheck /><h3>Enfoque preventivo</h3><p>Control y supervisión para reducir riesgos.</p></article>
          <article><TrendingUp /><h3>Información clara</h3><p>Datos financieros útiles para decisiones.</p></article>
        </div>
        <div className="advisory">
          <div><p className="eyebrow">Valor agregado</p><h2>Asesoría enfocada en cumplimiento y decisiones fiscales.</h2><p>Asesoría práctica para cumplimiento, control y seguimiento operativo.</p></div>
          <div className="advisory-grid">
            {["Régimen fiscal|Atención personalizada para elegir el régimen fiscal más conveniente.", "Declaraciones anuales|Apoyo y asesoría para PF y PM en diversos regímenes fiscales.", "REPSE|Control, seguimiento y revisión documental para cumplimiento REPSE.", "Seguimiento mensual|Monitoreo preventivo de obligaciones y cumplimiento operativo."].map((x, i) => { const [t, d] = x.split("|"); return <article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></article> })}
          </div>
        </div>
      </section>

      <section id="servicios" className="section">
        <SectionHeader eyebrow="Servicios" title="Soluciones para control, cumplimiento y dirección" text="Servicios concretos para ordenar la operación, prevenir riesgos y generar información útil para la toma de decisiones." />
        <div className="services-layout">
          <div className="photo services-photo"><img src={imgs.services} alt="Servicios" /><div className="overlay"><small>Dirección financiera</small><h3>Planeación y control para empresas mexicanas.</h3><p>Supervisión financiera y control fiscal para negocios en operación.</p></div></div>
          <div className="services-cards">
            {services.map(([title, label, text, icon], i) => <article className="service-card" key={title}><div className="service-top"><span>{icon}</span><small>0{i+1}</small></div><p className="service-label">{label}</p><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="planning"><div><span className="pill navy-pill">Planeación corporativa</span><h2>Análisis financiero y planeación estratégica empresarial.</h2><p>Evaluación financiera, análisis operativo y planeación para mejorar la toma de decisiones empresariales.</p></div><img src={imgs.planning} alt="Planeación" /></div>
      </section>

      <section id="calendario" className="section calendar">
        <div className="calendar-head"><SectionHeader eyebrow="Calendario ejecutivo" title="Cumplimiento fiscal, estatal y laboral" text="Resumen ejecutivo de obligaciones clave y seguimiento preventivo." /><div className="calendar-note"><CalendarDays /><b>Control preventivo</b><p>Seguimiento preventivo para obligaciones fiscales y laborales.</p></div></div>
        <div className="calendar-layout">
          <div className="calendar-tabs">{calendar.map((c, i) => <button key={c[0]} onClick={() => setTab(i)} className={tab === i ? "active" : ""}><small>{c[1]}</small><b>{c[0]}</b></button>)}</div>
          <div className="calendar-detail"><div className="detail-head"><div><small>{calendar[tab][1]}</small><h3>{calendar[tab][0]}</h3></div><span>{calendar[tab][2]}</span></div><div className="detail-grid"><article><small>Periodicidad</small><b>{calendar[tab][3]}</b></article><article><small>Alcance</small><p>{calendar[tab][4]}</p></article></div><div className="risk"><small>Riesgo a prevenir</small><p>{calendar[tab][5]}</p></div></div>
        </div>
      </section>

      <section className="section"><div className="clients"><img src={imgs.clients} alt="Clientes" /><div><p className="eyebrow">Clientes</p><h2>Atención especializada para distintos perfiles y sectores.</h2><p>Atención personalizada para empresas mexicanas, emprendedores y contribuyentes con operación activa.</p><div className="tags">{["Personas físicas", "Personas morales", "RESICO", "Restaurantes", "Empresas de servicios", "Profesionistas independientes"].map(t => <span key={t}>{t}</span>)}</div></div></div></section>

      <section id="cotizacion" className="section">
        <div className="quote">
          <div><SectionHeader eyebrow="Cotización" title="Solicita una propuesta" text="Comparte los datos básicos de tu negocio para preparar una propuesta de servicio acorde a tus necesidades." /><div className="quote-note">Ideal para contabilidad mensual, cumplimiento fiscal, trámites, control CFDI, auditoría externa o dirección financiera.</div></div>
          <form onSubmit={submit}>
            <div className="form-row"><input required name="nombre" value={form.nombre} onChange={change} placeholder="Nombre completo" /><input name="empresa" value={form.empresa} onChange={change} placeholder="Empresa o negocio" /></div>
            <div className="form-row"><input required name="telefono" value={form.telefono} onChange={change} placeholder="Teléfono / WhatsApp" /><select name="regimen" value={form.regimen} onChange={change}><option value="">Tipo de cliente / régimen</option><option>Persona física</option><option>Persona moral</option><option>Emprendedor / negocio nuevo</option><option>No estoy seguro</option></select></div>
            <select required name="servicio" value={form.servicio} onChange={change}><option value="">Servicio de interés</option>{quoteServices.map(s => <option key={s}>{s}</option>)}</select>
            <textarea name="mensaje" value={form.mensaje} onChange={change} placeholder="Cuéntanos brevemente qué necesitas" rows="4" />
            <button type="submit">Enviar solicitud por WhatsApp</button>
          </form>
        </div>
      </section>

      <section id="contacto" className="contact"><div><p className="eyebrow">Contacto</p><h2>Hablemos de tu operación contable y fiscal.</h2><p>Agenda un diagnóstico inicial para evaluar necesidades, riesgos y oportunidades de control.</p></div><a href={WAPP}><MessageCircle /> Agendar por WhatsApp</a></section>

      <footer><div><b>Man<span>Fa</span> Consultores</b><p>Contabilidad · Fiscal · Seguridad social · Trámites · Dirección financiera</p><small>Atención virtual y presencial para personas físicas, emprendedores y empresas.</small></div><div><p><b>WhatsApp:</b> 56 1037 6624</p><p><b>Atención:</b> Virtual y presencial</p><p><b>Servicios:</b> Fiscal · Contable · Administrativo</p></div></footer>

      <a className="float-wa" href={WAPP}><MessageCircle /></a>
      <button className="scroll-top" onClick={() => window.scrollTo({top:0, behavior:"smooth"})}><span>MF</span><ChevronUp /></button>
    </main>
  );
}
