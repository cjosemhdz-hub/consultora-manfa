import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronUp,
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
} from "lucide-react";

const FONT_BODY = "'Inter', sans-serif";
const FONT_DISPLAY = "'Merriweather', serif";
const FONT_BRAND = "'Montserrat', sans-serif";

const COLORS = {
  navy: "#143D4A",
  navyDeep: "#0B2A35",
  navySoft: "#1F5563",
  aqua: "#83B2AB",
  aquaSoft: "#F5D97A",
  orange: "#FF7A00",
  orangeDark: "#E86800",
  orangeSoft: "#FF9A3D",
  warmOrange: "#FF6B00",
  pageBg: "#E5E7EB",
  sectionBg: "#D1D5DB",
  panelBg: "#F3F4F6",
  olive: "#C6D2A0",
  oliveSoft: "#EEF3D8",
  brown: "#7C5A3C",
  brownSoft: "#A67C52",
  white: "#FFFFFF",
  gray: "#5F6368",
  graySoft: "#7B8087",
  border: "#CBD5E1",
  field: "#FFFFFF",
};

const fontStyles = {
  body: { fontFamily: FONT_BODY },
  display: { fontFamily: FONT_DISPLAY },
  brand: { fontFamily: FONT_BRAND },
};

const shadowSoft = "0 8px 24px rgba(15, 23, 42, 0.06)";
const shadowMedium = "0 16px 42px rgba(15, 23, 42, 0.10)";
const shadowPremium = "0 24px 70px rgba(15, 23, 42, 0.16)";

const navItems = [
  { id: "servicios", label: "Servicios" },
  { id: "proceso", label: "Proceso" },
  { id: "calendario", label: "Calendario" },
  { id: "cotizacion", label: "Cotización" },
  { id: "contacto", label: "Contacto" },
];

function buildWhatsAppMessage(form: {
  nombre: string;
  empresa: string;
  telefono: string;
  regimen: string;
  servicio: string;
  mensaje: string;
}) {
  const rawMessage = [
    "Hola, quiero solicitar una cotización para servicios de ManFa Consultores.",
    "",
    `Nombre: ${form.nombre}`,
    `Empresa/negocio: ${form.empresa}`,
    `Teléfono: ${form.telefono}`,
    `Régimen o tipo de cliente: ${form.regimen}`,
    `Servicio de interés: ${form.servicio}`,
    `Comentarios: ${form.mensaje}`,
  ].join("\n");

  return encodeURIComponent(rawMessage);
}

function assertLandingPageData({
  services,
  obligationCalendar,
  processSteps,
  executiveMetrics,
  quoteServices,
}: {
  services: Array<{ title: string }>;
  obligationCalendar: unknown[];
  processSteps: unknown[];
  executiveMetrics: unknown[];
  quoteServices: string[];
}) {
  if (!Array.isArray(services) || services.length < 6) {
    throw new Error("La página debe incluir al menos seis servicios principales.");
  }

  if (!services.some((service) => service.title === "Gestión de trámites")) {
    throw new Error("Debe existir el servicio de Gestión de trámites.");
  }

  if (!Array.isArray(obligationCalendar) || obligationCalendar.length < 5) {
    throw new Error("El calendario debe incluir obligaciones fiscales, estatales, laborales y de seguridad social.");
  }

  if (!Array.isArray(processSteps) || processSteps.length < 5) {
    throw new Error("El proceso debe incluir al menos cinco etapas.");
  }

  if (!Array.isArray(executiveMetrics) || executiveMetrics.length < 3) {
    throw new Error("La página debe mostrar métricas ejecutivas para claridad visual.");
  }

  if (!quoteServices.includes("Gestión de trámites SAT, IMSS e INFONAVIT")) {
    throw new Error("El formulario debe incluir el servicio de gestión de trámites.");
  }

  if (COLORS.navy !== "#143D4A" || COLORS.aqua !== "#83B2AB") {
    throw new Error("La paleta principal debe conservar azul petróleo y verde aqua institucional.");
  }

  if (COLORS.orange !== "#FF7A00" || COLORS.warmOrange !== "#FF6B00") {
    throw new Error("La paleta principal debe conservar tonos anaranjados corporativos.");
  }

  if (COLORS.pageBg !== "#E5E7EB" || COLORS.field !== "#FFFFFF") {
    throw new Error("El fondo debe mantenerse en gris corporativo moderno.");
  }

  if (!navItems.some((item) => item.id === "cotizacion")) {
    throw new Error("El menú debe incluir la sección de cotización.");
  }

  const sampleMessage = buildWhatsAppMessage({
    nombre: "Cliente Prueba",
    empresa: "Empresa Prueba",
    telefono: "5512345678",
    regimen: "Persona moral",
    servicio: "Contabilidad integral",
    mensaje: "Necesito una cotización.",
  });

  if (!sampleMessage.includes("Cliente%20Prueba")) {
    throw new Error("El mensaje de WhatsApp debe codificarse correctamente.");
  }

  return true;
}

function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const alignmentClass = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-4xl ${alignmentClass}`}>
      <p className="text-xs font-bold uppercase tracking-[0.30em]" style={{ color: COLORS.orangeDark }}>
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl" style={{ ...fontStyles.brand, color: COLORS.navy }}>
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8" style={{ color: COLORS.gray }}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:-translate-y-0.5"
      style={{
        backgroundColor: COLORS.navy,
        border: "none",
        boxShadow: shadowSoft,
      }}
    >
      {children}
    </a>
  );
}

function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center border bg-white px-7 py-4 text-sm font-black uppercase tracking-wide transition hover:-translate-y-0.5"
      style={{ borderColor: "rgba(20, 61, 74, 0.25)", color: COLORS.navy, boxShadow: shadowSoft }}
    >
      {children}
    </a>
  );
}

function ExecutiveControl({
  metrics,
}: {
  metrics: Array<{ value: string; label: string }>;
}) {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
      <div className="overflow-hidden border bg-white" style={{ borderColor: COLORS.border, boxShadow: shadowMedium }}>
        <div
          className="border-b px-8 py-6"
          style={{
            borderColor: COLORS.border,
            backgroundColor: COLORS.panelBg,
          }}
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.24em]" style={{ color: COLORS.orangeDark }}>
                Control ejecutivo
              </p>
              <h3 className="mt-2 text-2xl font-black leading-tight" style={{ color: COLORS.navy }}>
                Supervisión financiera y cumplimiento estratégico
              </h3>
            </div>
            <div
              className="hidden items-center justify-center rounded-xl border md:flex"
              style={{
                width: "58px",
                height: "58px",
                backgroundColor: COLORS.white,
                borderColor: COLORS.border,
                color: COLORS.orange,
                boxShadow: shadowSoft,
              }}
            >
              <ShieldCheck className="h-7 w-7" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3">
          {metrics.map((metric, index) => {
            const accentColor = index === 0 ? COLORS.navy : index === 1 ? COLORS.orangeDark : COLORS.aqua;

            return (
              <motion.div
                key={metric.value}
                whileHover={{ y: -3 }}
                className="relative border-r px-7 py-6 last:border-r-0"
                style={{ borderColor: COLORS.border, backgroundColor: COLORS.white }}
              >
                <div className="absolute left-0 top-0 h-1 w-full" style={{ backgroundColor: accentColor }} />
                <p className="text-xs font-black uppercase tracking-[0.18em]" style={{ color: accentColor }}>
                  {metric.value}
                </p>
                <p className="mt-4 text-sm leading-7" style={{ color: COLORS.gray }}>
                  {metric.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default function ManFaLandingPage() {
  const [activeSection, setActiveSection] = React.useState("servicios");
  const [hoveredSection, setHoveredSection] = React.useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  const [activeCalendarTab, setActiveCalendarTab] = React.useState(0);

  React.useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Merriweather:wght@700;900&family=Montserrat:wght@600;700;800;900&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    document.body.style.fontFamily = FONT_BODY;

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      const current = navItems
        .map((item) => {
          const element = document.getElementById(item.id);
          if (!element) return null;
          return {
            id: item.id,
            top: Math.abs(element.getBoundingClientRect().top - 120),
          };
        })
        .filter((item): item is { id: string; top: number } => Boolean(item))
        .sort((a, b) => a.top - b.top)[0];

      if (current) {
        setActiveSection(current.id);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleScrollTopButton = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScrollTopButton, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollTopButton);
    };
  }, []);

  const services = [
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Gestión de trámites",
      label: "SAT · IMSS · INFONAVIT",
      text: "Altas, actualizaciones, movimientos patronales, constancias, aclaraciones y seguimiento documental.",
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Contabilidad integral",
      label: "Registro · Conciliación · EEFF",
      text: "Registro contable, conciliaciones, auxiliares, balanza y estados financieros mensuales.",
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Control CFDI",
      label: "Ingresos · Egresos · REP",
      text: "Revisión de CFDI emitidos y recibidos, complementos, cancelaciones y consistencia fiscal.",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Cumplimiento fiscal",
      label: "ISR · IVA · Retenciones",
      text: "Determinación y presentación de impuestos, declaraciones periódicas y obligaciones informativas.",
    },
    {
      icon: <ClipboardCheck className="h-6 w-6" />,
      title: "Control interno",
      label: "Procesos · Políticas · Riesgos",
      text: "Diseño de controles administrativos y revisión documental para reducir riesgos operativos.",
    },
    {
      icon: <SearchCheck className="h-6 w-6" />,
      title: "Auditoría externa",
      label: "Revisión · Hallazgos · Mejora",
      text: "Evaluación de información financiera, procesos y cumplimiento para fortalecer transparencia.",
    },
  ];

  const executiveMetrics = [
    { value: "Contable", label: "Control contable, fiscal y administrativo" },
    { value: "Fiscal", label: "Cumplimiento de obligaciones federales y estatales" },
    { value: "Normativo", label: "Seguimiento conforme a legislación vigente" },
  ];

  const benefits = [
    { icon: <ShieldCheck />, title: "Prevención", text: "Identificación temprana de riesgos." },
    { icon: <Landmark />, title: "Gestión", text: "Seguimiento ante autoridades." },
    { icon: <Monitor />, title: "Orden", text: "Control documental y trazabilidad." },
    { icon: <TrendingUp />, title: "Decisión", text: "Información clara para dirección." },
  ];

  const advisoryOptions = [
    {
      title: "Régimen fiscal",
      text: "Atención personalizada para elegir el régimen fiscal más conveniente.",
    },
    {
      title: "Declaraciones anuales",
      text: "Apoyo y asesoría para PF y PM en diversos regímenes fiscales.",
    },
    {
      title: "REPSE",
      text: "Control, seguimiento y revisión documental para cumplimiento REPSE.",
    },
    {
      title: "Seguimiento mensual",
      text: "Monitoreo preventivo de obligaciones y cumplimiento operativo.",
    },
  ];

  const processSteps = [
    { step: "01", title: "Diagnóstico", text: "Alcance, obligaciones y situación actual." },
    { step: "02", title: "Integración", text: "Documentos, CFDI, bancos y expedientes." },
    { step: "03", title: "Ejecución", text: "Registro, conciliación y determinación fiscal." },
    { step: "04", title: "Revisión", text: "Validación de riesgos y consistencia." },
    { step: "05", title: "Reporte", text: "Indicadores, hallazgos y recomendaciones." },
  ];

  const obligationCalendar = [
    { category: "Fiscal federal", authority: "SAT", deadline: "Día 17", frequency: "Mensual", scope: "ISR, IVA, retenciones e informativas", risk: "Multas y revisiones electrónicas" },
    { category: "Seguridad social", authority: "IMSS · INFONAVIT", deadline: "Día 17", frequency: "Mensual / Bimestral", scope: "Cuotas, SUA, SIPARE, RCV e INFONAVIT", risk: "Créditos y diferencias patronales" },
    { category: "Obligaciones estatales", authority: "Gobierno estatal", deadline: "Variable", frequency: "Mensual", scope: "ISN, declaraciones locales y avisos", risk: "Sanciones administrativas" },
    { category: "Declaración anual", authority: "SAT", deadline: "Marzo / Abril", frequency: "Anual", scope: "Cierre contable-fiscal y conciliaciones", risk: "Diferencias fiscales" },
    { category: "Laboral", authority: "LFT · IMSS", deadline: "Mayo / Diciembre", frequency: "Anual / Permanente", scope: "PTU, aguinaldo, nómina y expedientes", risk: "Contingencias laborales" },
  ];

  const quoteServices = [
    "Contabilidad integral",
    "Cumplimiento fiscal",
    "Gestión de trámites SAT, IMSS e INFONAVIT",
    "Control y revisión de CFDI",
    "Control interno",
    "Auditoría externa",
    "Dirección financiera",
  ];

  const activeObligation = obligationCalendar[activeCalendarTab] || obligationCalendar[0];

  assertLandingPageData({ services, obligationCalendar, processSteps, executiveMetrics, quoteServices });

  const [quoteForm, setQuoteForm] = React.useState({
    nombre: "",
    empresa: "",
    telefono: "",
    regimen: "",
    servicio: "",
    mensaje: "",
  });

  const handleQuoteChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setQuoteForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuoteSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = buildWhatsAppMessage(quoteForm);
    window.open(`https://wa.me/525610376624?text=${message}`, "_blank", "noopener,noreferrer");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen" style={{ ...fontStyles.body, backgroundColor: COLORS.pageBg, color: COLORS.navy }}>
      <section className="relative overflow-hidden border-b" style={{ borderColor: COLORS.border, backgroundColor: COLORS.pageBg }}>
        <div className="absolute inset-x-0 top-0 h-1" style={{ backgroundColor: COLORS.orange }} />
        <div className="absolute right-0 top-0 hidden h-full w-[38%] md:block" style={{ backgroundColor: COLORS.navy }} />

        <nav className="relative mx-auto flex max-w-7xl items-center justify-between border-b border-white/20 px-6 py-7">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center border bg-white text-lg font-black" style={{ borderColor: "rgba(20, 61, 74, 0.16)", color: COLORS.navy, boxShadow: shadowSoft }}>
              MF<span style={{ color: COLORS.orangeDark }}>.</span>
            </div>
            <div>
              <p className="text-xl font-extrabold tracking-tight" style={fontStyles.brand}>
                Man<span style={{ color: COLORS.orangeDark }}>Fa</span>
              </p>
              <p className="text-[10px] font-semibold tracking-[0.38em]" style={{ color: COLORS.graySoft }}>
                CONSULTORES
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-[13px] font-semibold uppercase tracking-[0.10em] md:flex" style={{ color: COLORS.white }}>
            {navItems.map((item) => {
              const isHovered = hoveredSection === item.id;
              const isHighlighted = activeSection === item.id || isHovered;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onMouseEnter={() => setHoveredSection(item.id)}
                  onMouseLeave={() => setHoveredSection(null)}
                  className="border-b-2 pb-1 transition-colors duration-200"
                  style={{
                    color:
                      item.id === "servicios"
                        ? isHovered
                          ? COLORS.white
                          : COLORS.aqua
                        : isHighlighted
                          ? COLORS.white
                          : COLORS.orange,
                    borderColor:
                      item.id === "servicios"
                        ? isHovered
                          ? COLORS.white
                          : COLORS.aqua
                        : isHighlighted
                          ? COLORS.white
                          : COLORS.orange,
                    backgroundColor: "transparent",
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <a href="#contacto" className="border px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5" style={{ borderColor: COLORS.navy, backgroundColor: COLORS.navy, boxShadow: shadowSoft }}>
            AGENDA ASESORÍA
          </a>
        </nav>

        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-2 px-6 pt-5 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="border px-3 py-2 text-center text-[11px] font-black uppercase tracking-[0.10em]"
              style={{
                borderColor: item.id === "servicios" ? COLORS.aqua : COLORS.orange,
                color: item.id === "servicios" ? COLORS.aqua : COLORS.orange,
                backgroundColor: COLORS.navy,
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 md:grid-cols-[1.05fr_0.95fr] md:gap-14 md:py-24">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-xs font-black uppercase tracking-[0.18em] text-white"
              style={{
                borderColor: "rgba(255,255,255,0.10)",
                color: COLORS.white,
                backgroundColor: "#5FAE9B",
                boxShadow: shadowSoft,
              }}
            >
              <CheckCircle className="h-4 w-4" /> Consultoría contable · fiscal · administrativa
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-[1.04] tracking-[-0.03em] sm:text-5xl md:text-7xl" style={fontStyles.display}>
              Control contable, fiscal y administrativo.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 md:text-lg" style={{ color: COLORS.gray }}>
              Integramos contabilidad, impuestos y cumplimiento para brindar control financiero, estabilidad operativa y mayor claridad en la toma de decisiones.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <PrimaryButton href="#cotizacion">
                Solicitar cotización <ArrowRight className="h-5 w-5" />
              </PrimaryButton>
              <SecondaryButton href="#servicios">Ver servicios</SecondaryButton>
            </div>
          </motion.div>

          <ExecutiveControl metrics={executiveMetrics} />
        </div>
      </section>

      <section id="beneficios" className="mx-auto grid max-w-7xl gap-5 px-6 py-12 md:grid-cols-4">
        {benefits.map((item) => (
          <motion.div key={item.title} whileHover={{ y: -3 }} className="border bg-white p-7 transition duration-300 hover:-translate-y-1" style={{ borderColor: COLORS.border, boxShadow: shadowSoft }}>
            <div
              className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border"
              style={{
                backgroundColor: COLORS.white,
                borderColor: COLORS.border,
                color: COLORS.orangeDark,
              }}
            >
              {React.cloneElement(item.icon, { className: "h-5 w-5" })}
            </div>
            <p className="text-base font-black" style={{ color: COLORS.navy }}>
              {item.title}
            </p>
            <p className="mt-2 text-sm leading-6" style={{ color: COLORS.gray }}>
              {item.text}
            </p>
          </motion.div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-8 rounded-2xl border bg-white p-7 md:grid-cols-[0.8fr_1.2fr] md:p-10" style={{ borderColor: COLORS.border, boxShadow: shadowMedium }}>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.30em]" style={{ color: COLORS.orangeDark }}>
              Valor agregado
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight" style={{ ...fontStyles.brand, color: COLORS.navy }}>
              Asesoría enfocada en cumplimiento y decisiones fiscales.
            </h2>
            <p className="mt-5 text-sm leading-7" style={{ color: COLORS.gray }}>
              Acompañamiento práctico para elegir, cumplir y dar seguimiento a las obligaciones de cada operación.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {advisoryOptions.map((item, index) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -4 }}
                className="rounded-xl border bg-white p-5"
                style={{ borderColor: COLORS.border, boxShadow: shadowSoft }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-xs font-black text-white"
                    style={{ backgroundColor: index % 2 === 0 ? COLORS.navy : COLORS.orange }}
                  >
                    0{index + 1}
                  </div>
                  <p className="text-base font-black" style={{ color: COLORS.navy }}>
                    {item.title}
                  </p>
                </div>
                <p className="text-sm leading-7" style={{ color: COLORS.gray }}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Servicios"
            title="Soluciones para control, cumplimiento y dirección"
            description="Servicios concretos para ordenar la operación, prevenir riesgos y generar información útil para la toma de decisiones."
          />
          <div
            className="hidden border-l-4 px-5 py-4 text-sm leading-7 md:block md:max-w-sm"
            style={{
              borderColor: COLORS.orange,
              backgroundColor: COLORS.sectionBg,
              color: COLORS.navy,
            }}
          >
            <span
              style={{
                color: COLORS.navy,
                fontWeight: 700,
              }}
            >
              Enfoque integral para personas físicas, emprendedores y empresas con operación activa.
            </span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div key={service.title} whileHover={{ y: -5 }} className="group relative overflow-hidden border bg-white p-7 transition duration-300 hover:-translate-y-1" style={{ borderColor: COLORS.border, boxShadow: shadowSoft }}>
              <div className="absolute left-0 top-0 h-1 w-full opacity-0 transition duration-300 group-hover:opacity-100" style={{ backgroundColor: COLORS.orange }} />
              <div className="mb-6 flex items-center justify-between border-b pb-5" style={{ borderColor: COLORS.border }}>
                <div className="flex h-12 w-12 items-center justify-center text-white" style={{ backgroundColor: COLORS.navy, borderBottom: `2px solid ${COLORS.aqua}` }}>
                  {service.icon}
                </div>
                <span className="text-xs font-black tracking-[0.2em]" style={{ color: COLORS.orangeDark }}>
                  0{index + 1}
                </span>
              </div>
              <p className="mb-3 text-[11px] font-black uppercase tracking-[0.20em]" style={{ color: COLORS.orangeDark }}>
                {service.label}
              </p>
              <h3 className="mb-3 text-xl font-black" style={{ color: COLORS.navy }}>
                {service.title}
              </h3>
              <p className="text-sm leading-7" style={{ color: COLORS.gray }}>
                {service.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="proceso" className="border-y bg-white py-20" style={{ borderColor: COLORS.border }}>
        <div className="mx-auto grid max-w-7xl items-start gap-16 px-6 pt-8 md:grid-cols-[0.85fr_1.15fr]">
          <div className="pt-6 md:pt-10">
            <SectionHeader
              eyebrow="Proceso"
              title="Metodología clara y medible."
              description="Un flujo de trabajo ordenado para diagnóstico, ejecución, revisión y reporte."
            />
          </div>

          <div className="mt-2 flex flex-col gap-4">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.25 }}
                className="group relative flex items-center overflow-hidden rounded-2xl border bg-white px-6 py-5 transition duration-300"
                style={{
                  borderColor: COLORS.border,
                  boxShadow: shadowSoft,
                }}
              >
                <div
                  className="absolute left-0 top-0 h-full w-1.5"
                  style={{
                    backgroundColor:
                      index % 2 === 0 ? COLORS.orange : COLORS.aqua,
                  }}
                />

                <div className="flex w-full items-center gap-5">
                  <div
                    className="flex h-12 min-w-[72px] items-center justify-center rounded-xl text-sm font-black text-white"
                    style={{
                      backgroundColor: COLORS.navy,
                      boxShadow: shadowSoft,
                    }}
                  >
                    {item.step}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <p
                        className="text-lg font-black leading-tight"
                        style={{ color: COLORS.navy }}
                      >
                        {item.title}
                      </p>

                      <span
                        className="text-[10px] font-black uppercase tracking-[0.22em]"
                        style={{ color: COLORS.orangeDark }}
                      >
                        Etapa {item.step}
                      </span>
                    </div>

                    <p
                      className="mt-2 max-w-3xl text-sm leading-7"
                      style={{ color: COLORS.gray }}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="calendario" className="relative overflow-hidden border-y py-20" style={{ borderColor: COLORS.border, backgroundColor: COLORS.pageBg }}>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeader eyebrow="Calendario ejecutivo" title="Cumplimiento fiscal, estatal y laboral" description="Vista resumida de obligaciones clave para seguimiento directivo y prevención de contingencias." />
            <div className="border bg-white px-6 py-5 md:max-w-sm" style={{ borderColor: COLORS.border, boxShadow: shadowSoft }}>
              <div className="flex items-center gap-3">
                <CalendarDays className="h-5 w-5" style={{ color: COLORS.orangeDark }} />
                <p className="text-sm font-black" style={{ color: COLORS.navy }}>
                  Control preventivo
                </p>
              </div>
              <p className="mt-3 text-sm leading-7" style={{ color: COLORS.gray }}>
                Las fechas varían por régimen, entidad y obligaciones específicas.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.35fr_0.65fr]">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {obligationCalendar.map((item, index) => {
                const isActive = activeCalendarTab === index;
                return (
                  <button
                    key={item.category}
                    type="button"
                    onClick={() => setActiveCalendarTab(index)}
                    className="rounded-xl border px-5 py-4 text-left transition duration-200"
                    style={{
                      borderColor: isActive ? COLORS.orange : COLORS.border,
                      backgroundColor: isActive ? COLORS.navy : COLORS.white,
                      color: isActive ? COLORS.white : COLORS.navy,
                      boxShadow: isActive ? shadowMedium : shadowSoft,
                    }}
                  >
                    <span className="block text-[10px] font-black uppercase tracking-[0.18em]" style={{ color: isActive ? COLORS.orange : COLORS.orangeDark }}>
                      {item.authority}
                    </span>
                    <span className="mt-2 block text-sm font-black">{item.category}</span>
                  </button>
                );
              })}
            </div>

            <motion.div
              key={activeObligation.category}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border bg-white p-7 md:p-9"
              style={{ borderColor: COLORS.border, boxShadow: shadowMedium }}
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em]" style={{ color: COLORS.orangeDark }}>
                    {activeObligation.authority}
                  </p>
                  <h3 className="mt-3 text-3xl font-black" style={{ color: COLORS.navy }}>
                    {activeObligation.category}
                  </h3>
                </div>
                <div className="rounded-xl px-5 py-3 text-sm font-black text-white" style={{ backgroundColor: COLORS.orange }}>
                  {activeObligation.deadline}
                </div>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-3">
                <div className="rounded-xl border p-5" style={{ borderColor: COLORS.border, backgroundColor: COLORS.panelBg }}>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em]" style={{ color: COLORS.orangeDark }}>Periodicidad</p>
                  <p className="mt-3 text-sm font-black" style={{ color: COLORS.navy }}>{activeObligation.frequency}</p>
                </div>
                <div className="rounded-xl border p-5 md:col-span-2" style={{ borderColor: COLORS.border, backgroundColor: COLORS.white }}>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em]" style={{ color: COLORS.orangeDark }}>Alcance</p>
                  <p className="mt-3 text-sm leading-7" style={{ color: COLORS.gray }}>{activeObligation.scope}</p>
                </div>
              </div>

              <div className="mt-5 rounded-xl border-l-4 p-5" style={{ borderColor: COLORS.orange, backgroundColor: COLORS.panelBg }}>
                <p className="text-[10px] font-black uppercase tracking-[0.18em]" style={{ color: COLORS.orangeDark }}>Riesgo a prevenir</p>
                <p className="mt-3 text-sm leading-7" style={{ color: COLORS.gray }}>{activeObligation.risk}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="cotizacion" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 border bg-white p-8 md:grid-cols-[0.8fr_1.2fr] md:p-12" style={{ borderColor: COLORS.border, boxShadow: shadowMedium }}>
          <div>
            <SectionHeader eyebrow="Cotización" title="Solicita una propuesta" description="Comparte los datos básicos de tu negocio para preparar una propuesta de servicio acorde a tus necesidades." />
            <div
              className="mt-8 border-l-4 p-5 text-sm leading-7"
              style={{
                borderColor: COLORS.orange,
                backgroundColor: COLORS.panelBg,
                color: COLORS.navy,
              }}
            >
              <span
                style={{
                  color: COLORS.navy,
                  fontWeight: 700,
                }}
              >
                Ideal para contabilidad mensual, cumplimiento fiscal, trámites, control CFDI, auditoría externa o dirección financiera.
              </span>
            </div>
          </div>

          <form onSubmit={handleQuoteSubmit} className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input required name="nombre" value={quoteForm.nombre} onChange={handleQuoteChange} placeholder="Nombre completo" className="border px-4 py-4 text-sm outline-none transition" style={{ borderColor: COLORS.border, backgroundColor: COLORS.field }} />
              <input name="empresa" value={quoteForm.empresa} onChange={handleQuoteChange} placeholder="Empresa o negocio" className="border px-4 py-4 text-sm outline-none transition" style={{ borderColor: COLORS.border, backgroundColor: COLORS.field }} />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input required name="telefono" value={quoteForm.telefono} onChange={handleQuoteChange} placeholder="Teléfono / WhatsApp" className="border px-4 py-4 text-sm outline-none transition" style={{ borderColor: COLORS.border, backgroundColor: COLORS.field }} />
              <select name="regimen" value={quoteForm.regimen} onChange={handleQuoteChange} className="border px-4 py-4 text-sm outline-none transition" style={{ borderColor: COLORS.border, backgroundColor: COLORS.field, color: COLORS.gray }}>
                <option value="">Tipo de cliente / régimen</option>
                <option>Persona física</option>
                <option>Persona moral</option>
                <option>Emprendedor / negocio nuevo</option>
                <option>No estoy seguro</option>
              </select>
            </div>

            <select required name="servicio" value={quoteForm.servicio} onChange={handleQuoteChange} className="border px-4 py-4 text-sm outline-none transition" style={{ borderColor: COLORS.border, backgroundColor: COLORS.field, color: COLORS.gray }}>
              <option value="">Servicio de interés</option>
              {quoteServices.map((service) => (
                <option key={service}>{service}</option>
              ))}
            </select>

            <textarea name="mensaje" value={quoteForm.mensaje} onChange={handleQuoteChange} placeholder="Cuéntanos brevemente qué necesitas" rows={5} className="resize-none border px-4 py-4 text-sm outline-none transition" style={{ borderColor: COLORS.border, backgroundColor: COLORS.field }} />

            <button type="submit" className="px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition duration-300 hover:-translate-y-1" style={{ backgroundColor: COLORS.navy, border: "none", boxShadow: shadowMedium }}>
              Enviar solicitud por WhatsApp
            </button>
          </form>
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-7xl px-6 py-20">
        <div className="relative overflow-hidden p-10 text-white md:p-16" style={{ backgroundColor: COLORS.navy, boxShadow: shadowPremium }}>
          <div className="absolute left-0 top-0 h-1 w-full" style={{ backgroundColor: COLORS.orange }} />
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em]" style={{ color: COLORS.orangeSoft }}>
                Contacto
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight md:text-5xl" style={fontStyles.display}>
                Hablemos de tu operación contable y fiscal.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8" style={{ color: "rgba(255, 255, 255, 0.78)" }}>
                Agenda un diagnóstico inicial para evaluar necesidades, riesgos y oportunidades de control.
              </p>
            </div>
            <a href="https://wa.me/525610376624" className="flex whitespace-nowrap px-8 py-5 text-sm font-black uppercase tracking-wide transition hover:-translate-y-0.5" style={{ backgroundColor: COLORS.white, color: COLORS.navy, border: "1px solid rgba(255,255,255,0.18)", boxShadow: shadowSoft }}>
              <span className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5" /> Agendar por WhatsApp
              </span>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t bg-white py-14 text-center" style={{ borderColor: COLORS.border, color: COLORS.graySoft }}>
        <p className="text-lg font-black" style={{ ...fontStyles.brand, color: COLORS.navy }}>
          Man<span style={{ color: COLORS.orangeDark }}>Fa</span> Consultores
        </p>
        <p className="mt-3 text-sm font-medium uppercase tracking-[0.08em]">
          Contabilidad · Fiscal · Seguridad social · Trámites · Dirección financiera
        </p>
        <p className="mt-4 text-xs" style={{ color: COLORS.graySoft }}>
          Atención virtual y presencial para personas físicas, emprendedores y empresas.
        </p>
      </footer>

      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 flex h-16 w-[92px] items-center justify-center rounded-2xl text-white transition duration-300 hover:-translate-y-1"
          style={{
            backgroundColor: COLORS.aqua,
            boxShadow: shadowMedium,
            border: "none",
          }}
        >
          <div className="flex flex-col items-center leading-none">
            <span
              className="text-[22px] font-black tracking-[0.10em]"
              style={{ color: COLORS.navy }}
            >
              MF
            </span>
            <ChevronUp
              className="mt-0.5 h-4 w-4"
              style={{ color: COLORS.navy }}
            />
          </div>
        </motion.button>
      )}
    </main>
  );
}
