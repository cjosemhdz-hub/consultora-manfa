import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  SearchCheck,
  Calculator,
  CheckCircle,
  Cloud,
  FileText,
  MessageCircle,
  Monitor,
  ShieldCheck,
  Building2,
  ClipboardCheck,
  Landmark,
  BriefcaseBusiness,
  CalendarDays,
  TrendingUp,
} from 'lucide-react';

const FONT_BODY = "'Inter', sans-serif";
const FONT_DISPLAY = "'Merriweather', serif";
const FONT_BRAND = "'Montserrat', sans-serif";

const COLORS = {
  navy: '#143D4A',
  navySoft: '#1F5563',
  aqua: '#83B2AB',
  orange: '#FFA500',
  orangeDark: '#D48806',
  orangeSoft: '#FFD27A',
  warmOrange: '#F59E0B',
  warmBg: '#FFF8E8',
  brown: '#7C5A3C',
  white: '#FFFFFF',
  gray: '#5F6368',
  graySoft: '#7B8087',
  border: '#E9D4B0',
  field: '#FFFDF7',
};

const shadowSoft = '0 8px 24px rgba(15, 23, 42, 0.06)';
const shadowMedium = '0 16px 42px rgba(15, 23, 42, 0.10)';
const shadowPremium = '0 24px 70px rgba(15, 23, 42, 0.16)';

const navItems = [
  { id: 'servicios', label: 'Servicios' },
  { id: 'proceso', label: 'Proceso' },
  { id: 'calendario', label: 'Calendario' },
  { id: 'cotizacion', label: 'Cotización' },
  { id: 'contacto', label: 'Contacto' },
];

function buildWhatsAppMessage(form) {
  const rawMessage = [
    'Hola, quiero solicitar una cotización para servicios de ManFa Consultores.',
    '',
    `Nombre: ${form.nombre}`,
    `Empresa/negocio: ${form.empresa}`,
    `Teléfono: ${form.telefono}`,
    `Régimen o tipo de cliente: ${form.regimen}`,
    `Servicio de interés: ${form.servicio}`,
    `Comentarios: ${form.mensaje}`,
  ].join('\n');

  return encodeURIComponent(rawMessage);
}

function validatePageData({ services, obligationCalendar, processSteps, executiveMetrics, quoteServices }) {
  if (services.length < 6) throw new Error('La página debe incluir al menos seis servicios principales.');
  if (!services.some((service) => service.title === 'Gestión de trámites')) throw new Error('Debe existir el servicio de Gestión de trámites.');
  if (obligationCalendar.length < 5) throw new Error('El calendario debe incluir obligaciones fiscales, estatales, laborales y de seguridad social.');
  if (processSteps.length < 5) throw new Error('El proceso debe incluir al menos cinco etapas.');
  if (executiveMetrics.length < 3) throw new Error('La página debe mostrar métricas ejecutivas.');
  if (!quoteServices.includes('Gestión de trámites SAT, IMSS e INFONAVIT')) throw new Error('El formulario debe incluir gestión de trámites.');
  if (COLORS.orange !== '#FFA500') throw new Error('El color anaranjado principal debe conservar #FFA500.');
  return true;
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="max-w-4xl">
      <p className="text-xs font-bold uppercase tracking-[0.30em]" style={{ color: COLORS.orangeDark }}>{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl" style={{ fontFamily: FONT_BRAND, color: COLORS.navy }}>{title}</h2>
      {description && <p className="mt-5 text-base leading-8" style={{ color: COLORS.gray }}>{description}</p>}
    </div>
  );
}

function PrimaryButton({ href, children }) {
  return (
    <a href={href} className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:-translate-y-0.5" style={{ backgroundColor: COLORS.navy, border: `1px solid ${COLORS.navySoft}`, boxShadow: shadowSoft }}>
      {children}
    </a>
  );
}

function SecondaryButton({ href, children }) {
  return (
    <a href={href} className="inline-flex items-center justify-center border bg-white px-7 py-4 text-sm font-black uppercase tracking-wide transition hover:-translate-y-0.5" style={{ borderColor: 'rgba(20, 61, 74, 0.25)', color: COLORS.navy, boxShadow: shadowSoft }}>
      {children}
    </a>
  );
}

function ExecutiveControl({ metrics }) {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
      <div className="overflow-hidden border bg-white" style={{ borderColor: COLORS.border, boxShadow: shadowMedium }}>
        <div className="border-b px-8 py-6" style={{ borderColor: COLORS.border, backgroundColor: COLORS.warmBg }}>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.24em]" style={{ color: COLORS.orangeDark }}>Control ejecutivo</p>
              <h3 className="mt-2 text-2xl font-black leading-tight" style={{ color: COLORS.navy }}>Supervisión financiera y cumplimiento estratégico</h3>
            </div>
            <div className="hidden h-12 w-12 items-center justify-center md:flex" style={{ backgroundColor: COLORS.navy, color: COLORS.white }}><BriefcaseBusiness className="h-6 w-6" /></div>
          </div>
        </div>
        <div className="grid md:grid-cols-3">
          {metrics.map((metric, index) => {
            const accentColor = index === 0 ? COLORS.navy : index === 1 ? COLORS.orangeDark : COLORS.aqua;
            return (
              <motion.div key={metric.value} whileHover={{ y: -3 }} className="relative border-r px-7 py-6 last:border-r-0" style={{ borderColor: COLORS.border, backgroundColor: COLORS.white }}>
                <div className="absolute left-0 top-0 h-1 w-full" style={{ backgroundColor: accentColor }} />
                <p className="text-xs font-black uppercase tracking-[0.18em]" style={{ color: accentColor }}>{metric.value}</p>
                <p className="mt-4 text-sm leading-7" style={{ color: COLORS.gray }}>{metric.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = React.useState('servicios');
  const [hoveredSection, setHoveredSection] = React.useState(null);
  const [quoteForm, setQuoteForm] = React.useState({ nombre: '', empresa: '', telefono: '', regimen: '', servicio: '', mensaje: '' });

  React.useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Merriweather:wght@700;900&family=Montserrat:wght@600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    document.body.style.fontFamily = FONT_BODY;
    return () => { if (document.head.contains(link)) document.head.removeChild(link); };
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      const current = navItems
        .map((item) => {
          const element = document.getElementById(item.id);
          if (!element) return null;
          return { id: item.id, top: Math.abs(element.getBoundingClientRect().top - 120) };
        })
        .filter(Boolean)
        .sort((a, b) => a.top - b.top)[0];
      if (current) setActiveSection(current.id);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { icon: <Building2 className="h-6 w-6" />, title: 'Gestión de trámites', label: 'SAT · IMSS · INFONAVIT', text: 'Altas, actualizaciones, movimientos patronales, constancias, aclaraciones y seguimiento documental.' },
    { icon: <Calculator className="h-6 w-6" />, title: 'Contabilidad integral', label: 'Registro · Conciliación · EEFF', text: 'Registro contable, conciliaciones, auxiliares, balanza y estados financieros mensuales.' },
    { icon: <Cloud className="h-6 w-6" />, title: 'Control CFDI', label: 'Ingresos · Egresos · REP', text: 'Revisión de CFDI emitidos y recibidos, complementos, cancelaciones y consistencia fiscal.' },
    { icon: <FileText className="h-6 w-6" />, title: 'Cumplimiento fiscal', label: 'ISR · IVA · Retenciones', text: 'Determinación y presentación de impuestos, declaraciones periódicas y obligaciones informativas.' },
    { icon: <ClipboardCheck className="h-6 w-6" />, title: 'Control interno', label: 'Procesos · Políticas · Riesgos', text: 'Diseño de controles administrativos y revisión documental para reducir riesgos operativos.' },
    { icon: <SearchCheck className="h-6 w-6" />, title: 'Auditoría externa', label: 'Revisión · Hallazgos · Mejora', text: 'Evaluación de información financiera, procesos y cumplimiento para fortalecer transparencia.' },
  ];

  const executiveMetrics = [
    { value: 'Contable', label: 'Control contable, fiscal y administrativo' },
    { value: 'Fiscal', label: 'Cumplimiento de obligaciones federales y estatales' },
    { value: 'Normativo', label: 'Seguimiento conforme a legislación vigente' },
  ];

  const benefits = [
    { icon: <ShieldCheck />, title: 'Prevención', text: 'Identificación temprana de riesgos.' },
    { icon: <Landmark />, title: 'Gestión', text: 'Seguimiento ante autoridades.' },
    { icon: <Monitor />, title: 'Orden', text: 'Control documental y trazabilidad.' },
    { icon: <TrendingUp />, title: 'Decisión', text: 'Información clara para dirección.' },
  ];

  const processSteps = [
    { step: '01', title: 'Diagnóstico', text: 'Alcance, obligaciones y situación actual.' },
    { step: '02', title: 'Integración', text: 'Documentos, CFDI, bancos y expedientes.' },
    { step: '03', title: 'Ejecución', text: 'Registro, conciliación y determinación fiscal.' },
    { step: '04', title: 'Revisión', text: 'Validación de riesgos y consistencia.' },
    { step: '05', title: 'Reporte', text: 'Indicadores, hallazgos y recomendaciones.' },
  ];

  const obligationCalendar = [
    { category: 'Fiscal federal', authority: 'SAT', deadline: 'Día 17', frequency: 'Mensual', scope: 'ISR, IVA, retenciones e informativas', risk: 'Multas y revisiones electrónicas' },
    { category: 'Seguridad social', authority: 'IMSS · INFONAVIT', deadline: 'Día 17', frequency: 'Mensual / Bimestral', scope: 'Cuotas, SUA, SIPARE, RCV e INFONAVIT', risk: 'Créditos y diferencias patronales' },
    { category: 'Obligaciones estatales', authority: 'Gobierno estatal', deadline: 'Variable', frequency: 'Mensual', scope: 'ISN, declaraciones locales y avisos', risk: 'Sanciones administrativas' },
    { category: 'Declaración anual', authority: 'SAT', deadline: 'Marzo / Abril', frequency: 'Anual', scope: 'Cierre contable-fiscal y conciliaciones', risk: 'Diferencias fiscales' },
    { category: 'Laboral', authority: 'LFT · IMSS', deadline: 'Mayo / Diciembre', frequency: 'Anual / Permanente', scope: 'PTU, aguinaldo, nómina y expedientes', risk: 'Contingencias laborales' },
  ];

  const quoteServices = ['Contabilidad integral', 'Cumplimiento fiscal', 'Gestión de trámites SAT, IMSS e INFONAVIT', 'Control y revisión de CFDI', 'Control interno', 'Auditoría externa', 'Dirección financiera'];

  validatePageData({ services, obligationCalendar, processSteps, executiveMetrics, quoteServices });

  const handleQuoteChange = (event) => {
    const { name, value } = event.target;
    setQuoteForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuoteSubmit = (event) => {
    event.preventDefault();
    const message = buildWhatsAppMessage(quoteForm);
    window.open(`https://wa.me/525610376624?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="min-h-screen" style={{ fontFamily: FONT_BODY, backgroundColor: COLORS.warmBg, color: COLORS.navy }}>
      <section className="relative overflow-hidden border-b" style={{ borderColor: COLORS.border, backgroundColor: COLORS.warmBg }}>
        <div className="absolute inset-x-0 top-0 h-1" style={{ backgroundColor: COLORS.orange }} />
        <div className="absolute right-0 top-0 hidden h-full w-[38%] md:block" style={{ backgroundColor: COLORS.navy }} />

        <nav className="relative mx-auto flex max-w-7xl items-center justify-between border-b border-white/20 px-6 py-7">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center border bg-white text-lg font-black" style={{ borderColor: 'rgba(20, 61, 74, 0.16)', color: COLORS.navy, boxShadow: shadowSoft }}>MF<span style={{ color: COLORS.orangeDark }}>.</span></div>
            <div>
              <p className="text-xl font-extrabold tracking-tight" style={{ fontFamily: FONT_BRAND }}>Man<span style={{ color: COLORS.orangeDark }}>Fa</span></p>
              <p className="text-[10px] font-semibold tracking-[0.38em]" style={{ color: COLORS.graySoft }}>CONSULTORES</p>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-[13px] font-semibold uppercase tracking-[0.10em] md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const isHovered = hoveredSection === item.id;
              const isHighlighted = isActive || isHovered;
              const color = item.id === 'servicios' ? (isHovered ? COLORS.white : COLORS.aqua) : (isHighlighted ? COLORS.white : COLORS.orange);
              return (
                <a key={item.id} href={`#${item.id}`} onMouseEnter={() => setHoveredSection(item.id)} onMouseLeave={() => setHoveredSection(null)} className="border-b-2 pb-1 transition-colors duration-200" style={{ color, borderColor: color, backgroundColor: 'transparent' }}>{item.label}</a>
              );
            })}
          </div>

          <a href="#contacto" className="border px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5" style={{ borderColor: COLORS.navy, backgroundColor: COLORS.navy, boxShadow: shadowSoft }}>Agenda asesoría</a>
        </nav>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <div className="mb-6 inline-flex items-center gap-2 border bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em]" style={{ borderColor: COLORS.border, color: COLORS.orangeDark, backgroundColor: 'rgba(131,178,171,0.12)', boxShadow: shadowSoft }}><CheckCircle className="h-4 w-4" /> Consultoría contable · fiscal · administrativa</div>
            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.03em] md:text-7xl" style={{ fontFamily: FONT_DISPLAY }}>Control contable, fiscal y administrativo.</h1>
            <p className="mt-7 max-w-2xl text-base leading-8 md:text-lg" style={{ color: COLORS.gray }}>Integramos contabilidad, impuestos y cumplimiento para brindar control financiero, estabilidad operativa y mayor claridad en la toma de decisiones.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <PrimaryButton href="#cotizacion">Solicitar cotización <ArrowRight className="h-5 w-5" /></PrimaryButton>
              <SecondaryButton href="#servicios">Ver servicios</SecondaryButton>
            </div>
          </motion.div>
          <ExecutiveControl metrics={executiveMetrics} />
        </div>
      </section>

      <section id="beneficios" className="mx-auto grid max-w-7xl gap-5 px-6 py-12 md:grid-cols-4">
        {benefits.map((item) => (
          <motion.div key={item.title} whileHover={{ y: -3 }} className="border bg-white p-7 transition duration-300 hover:-translate-y-1" style={{ borderColor: COLORS.border, boxShadow: shadowSoft }}>
            <div className="mb-5 flex h-11 w-11 items-center justify-center" style={{ backgroundColor: 'rgba(131,178,171,0.20)', color: COLORS.aqua }}>{React.cloneElement(item.icon, { className: 'h-5 w-5' })}</div>
            <p className="text-base font-black" style={{ color: COLORS.navy }}>{item.title}</p>
            <p className="mt-2 text-sm leading-6" style={{ color: COLORS.gray }}>{item.text}</p>
          </motion.div>
        ))}
      </section>

      <section id="servicios" className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader eyebrow="Servicios" title="Soluciones para control, cumplimiento y dirección" description="Servicios concretos para ordenar la operación, prevenir riesgos y generar información útil para la toma de decisiones." />
          <div className="hidden border-l-4 px-5 py-4 text-sm leading-7 md:block md:max-w-sm" style={{ borderColor: COLORS.orange, backgroundColor: COLORS.warmBg, color: COLORS.gray }}>Enfoque integral para personas físicas, emprendedores y empresas con operación activa.</div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div key={service.title} whileHover={{ y: -5 }} className="group relative overflow-hidden border bg-white p-7 transition duration-300 hover:-translate-y-1" style={{ borderColor: COLORS.border, boxShadow: shadowSoft }}>
              <div className="absolute left-0 top-0 h-1 w-full opacity-0 transition duration-300 group-hover:opacity-100" style={{ backgroundColor: COLORS.orange }} />
              <div className="mb-6 flex items-center justify-between border-b pb-5" style={{ borderColor: COLORS.border }}>
                <div className="flex h-12 w-12 items-center justify-center text-white" style={{ backgroundColor: COLORS.navy, borderBottom: `2px solid ${COLORS.aqua}` }}>{service.icon}</div>
                <span className="text-xs font-black tracking-[0.2em]" style={{ color: COLORS.orangeDark }}>0{index + 1}</span>
              </div>
              <p className="mb-3 text-[11px] font-black uppercase tracking-[0.20em]" style={{ color: COLORS.orangeDark }}>{service.label}</p>
              <h3 className="mb-3 text-xl font-black" style={{ color: COLORS.navy }}>{service.title}</h3>
              <p className="text-sm leading-7" style={{ color: COLORS.gray }}>{service.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="proceso" className="border-y bg-white py-20" style={{ borderColor: COLORS.border }}>
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 md:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader eyebrow="Proceso" title="Metodología clara y medible" description="Un flujo de trabajo ordenado para diagnóstico, ejecución, revisión y reporte." />
          <div className="grid gap-4">
            {processSteps.map((item) => (
              <motion.div key={item.step} whileHover={{ x: 4 }} className="grid gap-4 border bg-white p-5 md:grid-cols-[72px_1fr]" style={{ borderColor: COLORS.border, boxShadow: shadowSoft }}>
                <div className="flex h-12 w-12 items-center justify-center text-sm font-black text-white" style={{ backgroundColor: COLORS.navy, borderBottom: `2px solid ${COLORS.aqua}` }}>{item.step}</div>
                <div><p className="text-lg font-black" style={{ color: COLORS.navy }}>{item.title}</p><p className="mt-1 text-sm leading-6" style={{ color: COLORS.gray }}>{item.text}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="calendario" className="relative overflow-hidden border-y py-20" style={{ borderColor: COLORS.border, backgroundColor: COLORS.warmBg }}>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeader eyebrow="Calendario ejecutivo" title="Cumplimiento fiscal, estatal y laboral" description="Vista resumida de obligaciones clave para seguimiento directivo y prevención de contingencias." />
            <div className="border bg-white px-6 py-5 md:max-w-sm" style={{ borderColor: COLORS.border, boxShadow: shadowSoft }}><div className="flex items-center gap-3"><CalendarDays className="h-5 w-5" style={{ color: COLORS.orangeDark }} /><p className="text-sm font-black" style={{ color: COLORS.navy }}>Control preventivo</p></div><p className="mt-3 text-sm leading-7" style={{ color: COLORS.gray }}>Las fechas varían por régimen, entidad y obligaciones específicas.</p></div>
          </div>
          <div className="mt-12 overflow-hidden border bg-white" style={{ borderColor: COLORS.border, boxShadow: shadowMedium }}>
            <div className="hidden grid-cols-[1fr_1fr_1fr_1.4fr_1.2fr] px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-white md:grid" style={{ backgroundColor: COLORS.navy, borderBottom: `2px solid ${COLORS.aqua}` }}><span>Área</span><span>Periodicidad</span><span>Vencimiento</span><span>Alcance</span><span>Riesgo</span></div>
            {obligationCalendar.map((item) => (
              <motion.div key={item.category} whileHover={{ backgroundColor: COLORS.warmBg }} className="grid gap-4 border-t px-6 py-6 text-sm md:grid-cols-[1fr_1fr_1fr_1.4fr_1.2fr]" style={{ borderColor: COLORS.border }}>
                <div><p className="font-black" style={{ color: COLORS.navy }}>{item.category}</p><p className="mt-1 text-xs font-bold uppercase tracking-wide" style={{ color: COLORS.orangeDark }}>{item.authority}</p></div>
                <p className="font-bold" style={{ color: COLORS.gray }}>{item.frequency}</p><p className="font-bold" style={{ color: COLORS.navy }}>{item.deadline}</p><p className="leading-6" style={{ color: COLORS.gray }}>{item.scope}</p><p className="leading-6" style={{ color: COLORS.gray }}>{item.risk}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="cotizacion" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 border bg-white p-8 md:grid-cols-[0.8fr_1.2fr] md:p-12" style={{ borderColor: COLORS.border, boxShadow: shadowMedium }}>
          <div><SectionHeader eyebrow="Cotización" title="Solicita una propuesta" description="Comparte los datos básicos de tu negocio para preparar una propuesta de servicio acorde a tus necesidades." /><div className="mt-8 border-l-4 p-5 text-sm leading-7" style={{ borderColor: COLORS.orange, backgroundColor: COLORS.warmBg, color: COLORS.gray }}>Ideal para contabilidad mensual, cumplimiento fiscal, trámites, control CFDI, auditoría externa o dirección financiera.</div></div>
          <form onSubmit={handleQuoteSubmit} className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-2"><input required name="nombre" value={quoteForm.nombre} onChange={handleQuoteChange} placeholder="Nombre completo" className="border px-4 py-4 text-sm outline-none transition" style={{ borderColor: COLORS.border, backgroundColor: COLORS.field }} /><input name="empresa" value={quoteForm.empresa} onChange={handleQuoteChange} placeholder="Empresa o negocio" className="border px-4 py-4 text-sm outline-none transition" style={{ borderColor: COLORS.border, backgroundColor: COLORS.field }} /></div>
            <div className="grid gap-4 md:grid-cols-2"><input required name="telefono" value={quoteForm.telefono} onChange={handleQuoteChange} placeholder="Teléfono / WhatsApp" className="border px-4 py-4 text-sm outline-none transition" style={{ borderColor: COLORS.border, backgroundColor: COLORS.field }} /><select name="regimen" value={quoteForm.regimen} onChange={handleQuoteChange} className="border px-4 py-4 text-sm outline-none transition" style={{ borderColor: COLORS.border, backgroundColor: COLORS.field, color: COLORS.gray }}><option value="">Tipo de cliente / régimen</option><option>Persona física</option><option>Persona moral</option><option>Emprendedor / negocio nuevo</option><option>No estoy seguro</option></select></div>
            <select required name="servicio" value={quoteForm.servicio} onChange={handleQuoteChange} className="border px-4 py-4 text-sm outline-none transition" style={{ borderColor: COLORS.border, backgroundColor: COLORS.field, color: COLORS.gray }}><option value="">Servicio de interés</option>{quoteServices.map((service) => <option key={service}>{service}</option>)}</select>
            <textarea name="mensaje" value={quoteForm.mensaje} onChange={handleQuoteChange} placeholder="Cuéntanos brevemente qué necesitas" rows={5} className="resize-none border px-4 py-4 text-sm outline-none transition" style={{ borderColor: COLORS.border, backgroundColor: COLORS.field }} />
            <button type="submit" className="px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition duration-300 hover:-translate-y-1" style={{ backgroundColor: COLORS.navy, border: `1px solid ${COLORS.navySoft}`, boxShadow: shadowMedium }}>Enviar solicitud por WhatsApp</button>
          </form>
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-7xl px-6 py-20">
        <div className="relative overflow-hidden p-10 text-white md:p-16" style={{ backgroundColor: COLORS.navy, boxShadow: shadowPremium }}>
          <div className="absolute left-0 top-0 h-1 w-full" style={{ background: `linear-gradient(90deg, ${COLORS.navy}, ${COLORS.orange}, ${COLORS.aqua})` }} />
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div><p className="text-xs font-bold uppercase tracking-[0.28em]" style={{ color: COLORS.orangeSoft }}>Contacto</p><h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight md:text-5xl" style={{ fontFamily: FONT_DISPLAY }}>Hablemos de tu operación contable y fiscal.</h2><p className="mt-5 max-w-2xl text-base leading-8" style={{ color: 'rgba(255, 255, 255, 0.78)' }}>Agenda un diagnóstico inicial para evaluar necesidades, riesgos y oportunidades de control.</p></div>
            <a href="https://wa.me/525610376624" className="flex whitespace-nowrap px-8 py-5 text-sm font-black uppercase tracking-wide transition hover:-translate-y-0.5" style={{ backgroundColor: COLORS.white, color: COLORS.navy, border: '1px solid rgba(255,255,255,0.18)', boxShadow: shadowSoft }}><span className="flex items-center gap-3"><MessageCircle className="h-5 w-5" /> Agendar por WhatsApp</span></a>
          </div>
        </div>
      </section>

      <footer className="border-t bg-white py-14 text-center" style={{ borderColor: COLORS.border, color: COLORS.graySoft }}>
        <p className="text-lg font-black" style={{ fontFamily: FONT_BRAND, color: COLORS.navy }}>Man<span style={{ color: COLORS.orangeDark }}>Fa</span> Consultores</p>
        <p className="mt-3 text-sm font-medium uppercase tracking-[0.08em]">Contabilidad · Fiscal · Seguridad social · Trámites · Dirección financiera</p>
        <p className="mt-4 text-xs" style={{ color: COLORS.graySoft }}>Atención virtual y presencial para personas físicas, emprendedores y empresas.</p>
      </footer>
    </main>
  );
}
