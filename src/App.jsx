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
  ShieldCheck,
  Building2,
  ClipboardCheck,
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
  orange: "#FF7A00",
  orangeDark: "#E86800",
  orangeSoft: "#FF9A3D",
  warmOrange: "#FF6B00",
  pageBg: "#E5E7EB",
  sectionBg: "#D1D5DB",
  panelBg: "#F3F4F6",
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

const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80";
const SERVICES_IMAGE_URL =
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80";
const PROCESS_IMAGE_URL =
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80";
const CLIENTS_IMAGE_URL =
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80";

const navItems = [
  { id: "servicios", label: "Servicios" },
  { id: "proceso", label: "Proceso" },
  { id: "calendario", label: "Calendario" },
  { id: "cotizacion", label: "Cotización" },
  { id: "contacto", label: "Contacto" },
];

function buildWhatsAppMessage(form) {
  const rawMessage = [
    "Hola, quiero solicitar una cotización para servicios de MFA Consultores.",
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
  advisoryOptions,
  trustBadges,
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
  if (!Array.isArray(advisoryOptions) || advisoryOptions.length < 4) {
    throw new Error("La página debe incluir opciones de asesoría de valor agregado.");
  }
  if (
    !Array.isArray(trustBadges) ||
    !trustBadges.includes("Revisión contable") ||
    !trustBadges.includes("Control interno") ||
    !trustBadges.includes("IMSS · INFONAVIT")
  ) {
    throw new Error("Los badges deben incluir IMSS · INFONAVIT, revisión contable y control interno.");
  }
  if (!quoteServices.includes("Gestión de trámites SAT, IMSS e INFONAVIT")) {
    throw new Error("El formulario debe incluir el servicio de gestión de trámites.");
  }
  return true;
}

function SectionHeader({ eyebrow, title, description, align = "left" }) {
  const alignmentClass = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`max-w-4xl ${alignmentClass}`}>
      <p className="text-xs font-bold uppercase tracking-[0.30em]" style={{ color: COLORS.orangeDark }}>
        {eyebrow}
      </p>
      <h2 className="mfa-fit-text mt-3 text-[clamp(1.45rem,5vw,3rem)] font-black leading-tight md:mt-4"
        style={{ ...fontStyles.brand, color: COLORS.navy }}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-[14px] leading-7 md:mt-5 md:text-base md:leading-8" style={{ color: COLORS.gray }}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

function PrimaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex w-full items-center justify-center gap-2 px-4 py-3 text-[10px] font-black uppercase tracking-[0.06em] text-white transition hover:-translate-y-0.5 sm:w-auto md:px-7 md:py-4 md:text-sm md:tracking-wide"
      style={{ backgroundColor: COLORS.navy, border: "none", boxShadow: shadowSoft }}
    >
      {children}
    </a>
  );
}

function SecondaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex w-full items-center justify-center border bg-white px-4 py-3 text-[10px] font-black uppercase tracking-[0.06em] transition hover:-translate-y-0.5 sm:w-auto md:px-7 md:py-4 md:text-sm md:tracking-wide"
      style={{ borderColor: "rgba(20, 61, 74, 0.25)", color: COLORS.navy, boxShadow: shadowSoft }}
    >
      {children}
    </a>
  );
}

function BrandMark({ variant = "default" }) {
  const isCompact = variant === "compact";
  const isFooter = variant === "footer";

  return (
    <div className="flex items-center gap-3 leading-none">
      <div>
        <div className="flex items-baseline gap-1" style={fontStyles.brand}>
          <span
            className={isCompact ? "text-[26px] font-black tracking-[-0.08em] md:text-[32px]" : "text-[34px] font-black tracking-[-0.08em] md:text-[42px]"}
            style={{ color: COLORS.navy }}
          >
            MFA
          </span>
          <span
            className={isCompact ? "text-[26px] font-black md:text-[32px]" : "text-[34px] font-black md:text-[42px]"}
            style={{ color: COLORS.orangeDark }}
          >
            .
          </span>
        </div>
        <div className="mt-1 flex items-center gap-2">
          <span className={isCompact ? "h-[2px] w-5 rounded-full md:w-7" : "h-[2px] w-8 rounded-full md:w-10"} style={{ backgroundColor: COLORS.aqua }} />
          <span
            className={isCompact ? "text-[8px] font-black uppercase tracking-[0.30em] md:text-[9px]" : "text-[10px] font-black uppercase tracking-[0.36em] md:text-[11px]"}
            style={{ color: isFooter ? COLORS.graySoft : COLORS.navy }}
          >
            CONSULTORES
          </span>
        </div>
      </div>
    </div>
  );
}

const OFFICIAL_LINKS = {
  satCalendar: "https://www.sat.gob.mx/portal/public/calendario",
  imssPatrones: "https://www.imss.gob.mx/patrones",
  infonavitEmpresarios: "https://empresarios.infonavit.org.mx/",
  fonacotEmpresas: "https://www.fonacot.gob.mx/empresas/Paginas/default.aspx",
  dofIndicadores: "https://www.dof.gob.mx/indicadores.php",
  inegiUma: "https://www.inegi.org.mx/temas/uma/",
  conasami: "https://www.gob.mx/conasami/documentos/tabla-de-salarios-minimos-generales-y-profesionales-por-areas-geograficas",
};

const ANNUAL_REFERENCE_VALUES = {
  2026: {
    uma: { daily: 117.31, monthly: 3566.22, annual: 42794.64 },
    minimumWage: { general: 315.04, border: 440.87 },
  },
};

function formatMoney(value, decimals = 2) {
  if (typeof value !== "number" || Number.isNaN(value)) return "Por actualizar";
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

function getReferenceValues(date = new Date()) {
  const year = date.getFullYear();
  return ANNUAL_REFERENCE_VALUES[year] || ANNUAL_REFERENCE_VALUES[2026];
}

function formatShortDate(date) {
  return new Intl.DateTimeFormat("es-MX", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="overflow-hidden rounded-[22px] border bg-white"
      style={{ borderColor: COLORS.border, boxShadow: shadowMedium }}
    >
      <div className="mfa-img-frame mfa-mobile-img relative h-[clamp(220px,36vw,500px)] w-full">
        <img
          src={HERO_IMAGE_URL}
          alt="Consultoría contable y fiscal para empresas en México"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute left-0 top-0 h-full w-2" style={{ backgroundColor: COLORS.orange }} />
        <div
          className="absolute bottom-3 left-3 right-3 rounded-xl border bg-white/95 p-3 sm:bottom-4 sm:left-4 sm:right-4 sm:p-4"
          style={{ borderColor: COLORS.border, boxShadow: shadowSoft }}
        >
          <p className="text-[10px] font-black uppercase tracking-[0.20em]" style={{ color: COLORS.orangeDark }}>
            Despacho corporativo
          </p>
          <p className="mt-1 text-[12px] font-black leading-5 md:text-sm md:leading-6" style={{ color: COLORS.navy }}>
            Consultoría ejecutiva para cumplimiento y control empresarial.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function ExecutiveControl({ processSteps, kpis }) {
  return (
    <motion.section
      id="proceso"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="mfa-container py-5 md:py-8"
    >
      <div className="mfa-mobile-stack grid min-w-0 gap-4 lg:grid-cols-[0.34fr_0.66fr]">
        <div
          className="mfa-card relative overflow-hidden rounded-[26px] border bg-white p-5 md:p-6"
          style={{
            borderColor: "rgba(203,213,225,0.45)",
            boxShadow: "0 16px 40px rgba(15,23,42,0.04)",
          }}
        >
          <div
            className="absolute left-0 top-0 h-full w-1.5"
            style={{
              background: `linear-gradient(to bottom, ${COLORS.orange}, ${COLORS.aqua})`,
            }}
          />

          <div
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[7px] font-black uppercase tracking-[0.18em]"
            style={{
              borderColor: "rgba(203,213,225,0.5)",
              backgroundColor: COLORS.panelBg,
              color: COLORS.orangeDark,
            }}
          >
            <ShieldCheck className="h-3 w-3" />
            Control ejecutivo
          </div>

          <h2
            className="mfa-fit-text mt-4 max-w-[260px] text-[1.15rem] font-black leading-tight md:text-[1.6rem]"
            style={{ ...fontStyles.brand, color: COLORS.navy }}
          >
            Control estratégico y seguimiento empresarial.
          </h2>

          <p
            className="mfa-fit-text mfa-clamp-3 mt-3 max-w-[290px] text-[10px] leading-5 md:text-[11px] md:leading-6"
            style={{ color: COLORS.gray }}
          >
            Supervisión operativa enfocada en cumplimiento, estabilidad financiera y prevención de riesgos.
          </p>

          <div className="mt-5 grid gap-2">
            {[
              { title: "Contable", detail: "Registros y conciliaciones", accent: COLORS.navy },
              { title: "Fiscal", detail: "Declaraciones y control", accent: COLORS.orangeDark },
              { title: "Normativo", detail: "IMSS e INFONAVIT", accent: COLORS.aqua },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between rounded-[16px] border px-3 py-3"
                style={{ borderColor: "rgba(203,213,225,0.28)", backgroundColor: COLORS.white }}
              >
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.10em]" style={{ color: COLORS.navy }}>
                    {item.title}
                  </p>
                  <p className="mt-1 text-[8px]" style={{ color: COLORS.gray }}>
                    {item.detail}
                  </p>
                </div>
                <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.accent }} />
              </div>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2">
            {kpis.slice(0, 4).map((item, index) => (
              <div
                key={item.label}
                className="rounded-[14px] border px-3 py-3"
                style={{ borderColor: "rgba(203,213,225,0.22)", backgroundColor: COLORS.panelBg }}
              >
                <p className="text-[11px] font-black" style={{ color: index % 2 === 0 ? COLORS.navy : COLORS.orangeDark }}>
                  {item.value}
                </p>
                <p className="mt-1 text-[7px] leading-3.5" style={{ color: COLORS.gray }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {processSteps.map((item, index) => (
            <motion.div
              key={item.step}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="mfa-card mfa-mobile-card group relative overflow-hidden rounded-[24px] border bg-white px-4 py-4"
              style={{
                borderColor: "rgba(203,213,225,0.35)",
                boxShadow: "0 12px 28px rgba(15,23,42,0.035)",
              }}
            >
              <div
                className="absolute left-0 top-0 h-1 w-full opacity-80"
                style={{
                  background:
                    index % 2 === 0
                      ? `linear-gradient(to right, ${COLORS.orange}, transparent)`
                      : `linear-gradient(to right, ${COLORS.aqua}, transparent)`,
                }}
              />
              <div className="flex items-center justify-between">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-2xl text-[8px] font-black text-white"
                  style={{ backgroundColor: index % 2 === 0 ? COLORS.orangeDark : COLORS.aqua }}
                >
                  {item.step}
                </div>
                <span className="text-[7px] font-black uppercase tracking-[0.12em]" style={{ color: COLORS.graySoft }}>
                  Proceso
                </span>
              </div>
              <h3 className="mfa-fit-text mt-5 text-[11px] font-black leading-5" style={{ color: COLORS.navy }}>
                {item.title}
              </h3>
              <p className="mfa-fit-text mfa-clamp-3 mt-2 text-[8px] leading-5" style={{ color: COLORS.gray }}>
                {item.text}
              </p>
              <div className="mt-5 flex items-center gap-2">
                <div
                  className="h-[2px] w-8 rounded-full transition-all duration-300 group-hover:w-12"
                  style={{ backgroundColor: index % 2 === 0 ? COLORS.orangeDark : COLORS.aqua }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default function ManFaLandingPage() {
  const [activeSection, setActiveSection] = React.useState("servicios");
  const [hoveredSection, setHoveredSection] = React.useState(null);
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  const [activeCalendarTab, setActiveCalendarTab] = React.useState(0);
  const [quoteForm, setQuoteForm] = React.useState({
    nombre: "",
    empresa: "",
    telefono: "",
    regimen: "",
    servicio: "",
    mensaje: "",
  });
  const [liveIndicators, setLiveIndicators] = React.useState(() => {
    const references = getReferenceValues();
    return {
      exchangeRate: 17.2720,
      exchangeRateSource: "DOF / referencia",
      exchangeRateStatus: "Valor referencial",
      uma: references.uma,
      minimumWage: references.minimumWage,
      updatedAt: new Date(),
    };
  });

  React.useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Merriweather:wght@700;900&family=Montserrat:wght@600;700;800;900&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    document.body.style.fontFamily = FONT_BODY;
    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
    };
  }, []);

  React.useEffect(() => {
    let isMounted = true;
    async function loadExchangeRate() {
      const references = getReferenceValues();
      try {
        const response = await fetch("https://open.er-api.com/v6/latest/USD");
        const data = await response.json();
        const mxnRate = Number(data?.rates?.MXN);
        if (isMounted && mxnRate) {
          setLiveIndicators({
            exchangeRate: mxnRate,
            exchangeRateSource: "Mercado / API pública",
            exchangeRateStatus: "Actualizado automáticamente",
            uma: references.uma,
            minimumWage: references.minimumWage,
            updatedAt: new Date(),
          });
        }
      } catch (error) {
        if (isMounted) {
          setLiveIndicators((prev) => ({
            ...prev,
            uma: references.uma,
            minimumWage: references.minimumWage,
            exchangeRateStatus: "Referencia oficial manual",
            updatedAt: new Date(),
          }));
        }
      }
    }
    loadExchangeRate();
    return () => {
      isMounted = false;
    };
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
      setShowScrollTop(window.scrollY > 500);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: <Building2 className="h-[18px] w-[18px] md:h-5 md:w-5" strokeWidth={1.9} />,
      title: "Gestión de trámites",
      label: "SAT · IMSS · INFONAVIT",
      text: "Altas, actualizaciones, movimientos patronales, constancias, aclaraciones y seguimiento documental.",
      accent: COLORS.navy,
      glow: "rgba(20,61,74,0.12)",
    },
    {
      icon: <Calculator className="h-[18px] w-[18px] md:h-5 md:w-5" strokeWidth={1.9} />,
      title: "Contabilidad integral",
      label: "Registro · Conciliación · EEFF",
      text: "Registro contable, conciliaciones y estados financieros.",
      accent: COLORS.orangeDark,
      glow: "rgba(232,104,0,0.14)",
    },
    {
      icon: <Cloud className="h-[18px] w-[18px] md:h-5 md:w-5" strokeWidth={1.9} />,
      title: "Control CFDI",
      label: "Ingresos · Egresos · REP",
      text: "Control y validación de CFDI y complementos.",
      accent: COLORS.aqua,
      glow: "rgba(131,178,171,0.18)",
    },
    {
      icon: <FileText className="h-[18px] w-[18px] md:h-5 md:w-5" strokeWidth={1.9} />,
      title: "Cumplimiento fiscal",
      label: "ISR · IVA · Retenciones",
      text: "Declaraciones, impuestos y cumplimiento fiscal.",
      accent: COLORS.navySoft,
      glow: "rgba(31,85,99,0.14)",
    },
    {
      icon: <ClipboardCheck className="h-[18px] w-[18px] md:h-5 md:w-5" strokeWidth={1.9} />,
      title: "Control interno",
      label: "Procesos · Políticas · Riesgos",
      text: "Revisión de procesos y control interno.",
      accent: COLORS.orange,
      glow: "rgba(255,122,0,0.14)",
    },
    {
      icon: <SearchCheck className="h-[18px] w-[18px] md:h-5 md:w-5" strokeWidth={1.9} />,
      title: "Auditoría externa",
      label: "Revisión · Hallazgos · Mejora",
      text: "Evaluación financiera y revisión de cumplimiento.",
      accent: COLORS.navyDeep,
      glow: "rgba(11,42,53,0.14)",
    },
  ];

  const executiveMetrics = [
    { value: "Contable", label: "" },
    { value: "Fiscal", label: "" },
    { value: "Normativo", label: "" },
  ];

  const trustBadges = ["CFDI 4.0", "REPSE", "IMSS · INFONAVIT", "RESICO", "Revisión contable", "Control interno"];
  const mobileTrustBadges = ["CFDI 4.0", "RESICO", "IMSS · INFONAVIT"];

  const kpis = [
    { value: "+100", label: "Obligaciones gestionadas" },
    { value: "360°", label: "Control fiscal y administrativo" },
    { value: "Preventivo", label: "Seguimiento mensual estratégico" },
    { value: "Directo", label: "Atención personalizada" },
  ];

  const clientTypes = ["Personas físicas", "Personas morales", "RESICO", "Empresas de servicios", "Profesionistas independientes"];

  const advisoryOptions = [
    { title: "Régimen fiscal", text: "Atención personalizada para elegir el régimen fiscal más conveniente." },
    { title: "Declaraciones anuales", text: "Apoyo y asesoría para PF y PM en diversos regímenes fiscales." },
    { title: "REPSE", text: "Control, seguimiento y revisión documental para cumplimiento REPSE." },
    { title: "Seguimiento mensual", text: "Monitoreo preventivo de obligaciones y cumplimiento operativo." },
  ];

  const processSteps = [
    { step: "01", title: "Diagnóstico", text: "Alcance, obligaciones y situación actual." },
    { step: "02", title: "Integración", text: "Documentos, CFDI, bancos y expedientes." },
    { step: "03", title: "Ejecución", text: "Registro, conciliación y determinación fiscal." },
    { step: "04", title: "Revisión", text: "Validación de riesgos y consistencia." },
    { step: "05", title: "Reporte", text: "Indicadores, hallazgos y recomendaciones." },
  ];

  const obligationCalendar = [
    { category: "SAT", authority: "Fiscal federal", deadline: "Día 17", frequency: "Mensual", scope: "ISR, IVA, retenciones e informativas", risk: "Multas, diferencias y revisiones electrónicas", officialUrl: OFFICIAL_LINKS.satCalendar },
    { category: "IMSS", authority: "Seguridad social", deadline: "Día 17", frequency: "Mensual", scope: "Cuotas obrero-patronales, SUA, SIPARE y movimientos patronales", risk: "Créditos fiscales, diferencias patronales y recargos", officialUrl: OFFICIAL_LINKS.imssPatrones },
    { category: "INFONAVIT", authority: "Seguridad social", deadline: "Bimestral", frequency: "Bimestral", scope: "Aportaciones, amortizaciones y conciliación de créditos", risk: "Diferencias bimestrales y requerimientos de pago", officialUrl: OFFICIAL_LINKS.infonavitEmpresarios },
    { category: "FONACOT", authority: "Créditos de trabajadores", deadline: "Según cédula", frequency: "Mensual", scope: "Cédulas, retenciones, entero de descuentos y conciliación patronal", risk: "Diferencias, adeudos y aclaraciones con trabajadores", officialUrl: OFFICIAL_LINKS.fonacotEmpresas },
    { category: "Estatal", authority: "ISN / local", deadline: "Variable", frequency: "Mensual", scope: "Impuesto sobre nómina, declaraciones locales y avisos administrativos", risk: "Sanciones administrativas y diferencias estatales", officialUrl: OFFICIAL_LINKS.satCalendar },
  ];

  const quoteServices = [
    "Contabilidad integral",
    "Cumplimiento fiscal",
    "Gestión de trámites SAT, IMSS e INFONAVIT",
    "Control y revisión de CFDI",
    "Control interno",
    "Auditoría externa",
    "Consultoría empresarial",
  ];

  const activeObligation = obligationCalendar[activeCalendarTab] || obligationCalendar[0];

  assertLandingPageData({
    services,
    obligationCalendar,
    processSteps,
    executiveMetrics,
    quoteServices,
    advisoryOptions,
    trustBadges,
  });

  const handleQuoteChange = (event) => {
    const { name, value } = event.target;
    setQuoteForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuoteSubmit = (event) => {
    event.preventDefault();
    const message = buildWhatsAppMessage(quoteForm);
    window.open(`https://wa.me/525610376624?text=${message}`, "_blank", "noopener,noreferrer");
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <main className="min-h-screen w-full overflow-x-hidden [overflow-wrap:anywhere]" style={{ ...fontStyles.body, backgroundColor: COLORS.pageBg, color: COLORS.navy }}>
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        img, video, canvas, svg { max-width: 100%; height: auto; }
        h1, h2, h3, h4, p, span, a, button, input, select, textarea, div { min-width: 0; }
        h1, h2, h3, h4 { text-wrap: balance; overflow-wrap: anywhere; hyphens: auto; }
        p, span, a, button, input, select, textarea { overflow-wrap: anywhere; word-break: normal; }
        section { width: 100%; }
        .mfa-container { width: min(100% - 2rem, 1440px); margin-inline: auto; }
        .mfa-fit-text { overflow-wrap: anywhere; hyphens: auto; text-wrap: pretty; }
        .mfa-card { min-width: 0; overflow: hidden; }
        .mfa-card p, .mfa-card h3, .mfa-card h4, .mfa-card span { min-width: 0; }
        .mfa-img-frame { width: 100%; overflow: hidden; }
        .mfa-img-frame > img { width: 100%; height: 100%; object-fit: cover; object-position: center; display: block; }
        .mfa-scroll-x { -webkit-overflow-scrolling: touch; scrollbar-width: thin; }
        .mfa-fluid-title { font-size: clamp(1.9rem, 7.6vw, 5.4rem); }
        .mfa-fluid-section-title { font-size: clamp(1.55rem, 4.2vw, 3.5rem); }
        .mfa-fluid-card-title { font-size: clamp(0.95rem, 2.5vw, 1.25rem); }
        @media (max-width: 1024px) {
          .mfa-container { width: min(100% - 1.5rem, 1440px); }
        }
        @media (max-width: 768px) {
          .mfa-container { width: min(100% - 1rem, 1440px); }
          .mfa-mobile-stack { grid-template-columns: 1fr !important; }
          .mfa-mobile-fit { height: auto !important; min-height: auto !important; }
          .mfa-mobile-img { height: clamp(180px, 52vw, 320px) !important; }
        }
        @media (max-width: 640px) {
          .mfa-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
          .mfa-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
          .mfa-mobile-tight { line-height: 1.35; }
          .mfa-hide-mobile-overflow-text { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
          .mfa-mobile-card { padding: 1rem !important; border-radius: 1.25rem !important; }
        }
      `}</style>

      <section className="relative overflow-hidden border-b" style={{ borderColor: COLORS.border, backgroundColor: COLORS.pageBg }}>
        <div className="absolute inset-x-0 top-0 h-1" style={{ backgroundColor: COLORS.orange }} />
        <div className="absolute right-0 top-0 hidden h-full w-[38%] md:block" style={{ backgroundColor: COLORS.navy }} />

        <nav className="relative mx-auto flex max-w-[1440px] items-center justify-between gap-3 border-b border-white/20 px-4 py-5 sm:px-6 md:py-7">
          <a href="#" className="group flex items-center gap-3 px-1 py-1 transition-all duration-300 hover:-translate-y-0.5" aria-label="MFA Consultores">
            <BrandMark variant="compact" />
          </a>

          <div className="hidden items-center gap-8 text-[13px] font-semibold uppercase tracking-[0.10em] md:flex" style={{ color: COLORS.white }}>
            {navItems.map((item) => {
              const isHovered = hoveredSection === item.id;
              const isHighlighted = activeSection === item.id || isHovered;
              const isServicios = item.id === "servicios";
              const color = isServicios ? (isHovered ? COLORS.white : COLORS.aqua) : item.id === "proceso" ? COLORS.orange : isHighlighted ? COLORS.white : COLORS.orange;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onMouseEnter={() => setHoveredSection(item.id)}
                  onMouseLeave={() => setHoveredSection(null)}
                  className="border-b-2 pb-1 transition-colors duration-200"
                  style={{ color, borderColor: color, backgroundColor: "transparent" }}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <a href="#contacto" className="border px-3 py-2 text-[11px] font-bold text-white transition hover:-translate-y-0.5 sm:px-5 sm:py-3 sm:text-sm" style={{ borderColor: COLORS.navy, backgroundColor: COLORS.navy, boxShadow: shadowSoft }}>
            AGENDA ASESORÍA
          </a>
        </nav>

        <div className="mfa-container relative grid items-center gap-6 py-7 sm:py-10 lg:grid-cols-[1.08fr_0.92fr] md:gap-12 md:py-20 xl:py-24">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <div
              className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[10px] font-black uppercase tracking-[0.12em] text-white md:mb-6 md:px-5 md:py-2.5 md:text-xs md:tracking-[0.18em]"
              style={{
                borderColor: "rgba(20,61,74,0.10)",
                color: COLORS.navy,
                background: "linear-gradient(135deg, rgba(255,255,255,0.96) 0%, rgba(243,244,246,0.96) 100%)",
                boxShadow: "0 10px 24px rgba(15, 23, 42, 0.08)",
                backdropFilter: "blur(10px)",
              }}
            >
              <CheckCircle className="h-4 w-4" /> Consultoría contable · fiscal · administrativa
            </div>

            <h1 className="mfa-fit-text mfa-fluid-title max-w-5xl font-black leading-[1.02] tracking-[-0.04em]" style={fontStyles.display}>
              Control contable, fiscal y administrativo.
            </h1>

            <p className="mfa-fit-text mt-3 max-w-lg text-[13px] leading-6 md:mt-7 md:text-lg md:leading-8" style={{ color: COLORS.gray }}>
              Consultoría especializada para empresas y contribuyentes que requieren orden, cumplimiento y visión financiera.
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5 md:hidden">
              {mobileTrustBadges.map((badge) => (
                <div key={badge} className="rounded-full border px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.06em]" style={{ borderColor: COLORS.border, backgroundColor: COLORS.white, color: COLORS.navy, boxShadow: shadowSoft }}>
                  {badge}
                </div>
              ))}
              <div className="rounded-full border px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.06em]" style={{ borderColor: COLORS.orange, backgroundColor: "transparent", color: COLORS.orange, boxShadow: "none" }}>
                +3 especialidades
              </div>
            </div>

            <div className="mt-4 hidden flex-wrap gap-3 md:flex md:mt-6">
              {trustBadges.map((badge) => (
                <div key={badge} className="rounded-full border px-4 py-2 text-[11px] font-black uppercase tracking-[0.12em]" style={{ borderColor: COLORS.border, backgroundColor: COLORS.white, color: COLORS.navy, boxShadow: shadowSoft }}>
                  {badge}
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-1 gap-2 sm:flex sm:flex-row md:mt-7">
              <PrimaryButton href="#cotizacion">
                Solicitar cotización <ArrowRight className="h-5 w-5" />
              </PrimaryButton>
              <SecondaryButton href="#servicios">Ver servicios</SecondaryButton>
            </div>
          </motion.div>

          <div className="grid gap-3 md:gap-6">
            <HeroImage />
          </div>
        </div>
      </section>

      <ExecutiveControl metrics={executiveMetrics} processSteps={processSteps} kpis={kpis} />

      <section className="mfa-container py-8 md:py-14">
        <div className="relative overflow-hidden rounded-[34px] border" style={{ borderColor: "rgba(255,255,255,0.65)", background: "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(243,244,246,0.98) 100%)", boxShadow: "0 26px 70px rgba(15,23,42,0.08)" }}>
          <div className="mfa-mobile-stack grid gap-7 p-5 md:grid-cols-[0.38fr_0.62fr] md:p-8 lg:p-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em]" style={{ backgroundColor: "rgba(255,255,255,0.88)", color: COLORS.orangeDark, boxShadow: shadowSoft }}>
                <TrendingUp className="h-4 w-4" />
                Valor estratégico
              </div>
              <h2 className="mfa-fit-text mfa-fluid-section-title mt-5 max-w-md font-black leading-tight" style={{ ...fontStyles.brand, color: COLORS.navy }}>
                Supervisión financiera y control empresarial.
              </h2>
              <p className="mt-5 max-w-md text-[14px] leading-7 md:text-[15px] md:leading-8" style={{ color: COLORS.gray }}>
                Acompañamiento ejecutivo para mantener orden operativo, cumplimiento fiscal y seguimiento estratégico.
              </p>
              <div className="mt-8 space-y-3">
                {["Control contable y financiero", "Cumplimiento fiscal preventivo", "Seguimiento administrativo y operativo"].map((item, index) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3" style={{ boxShadow: shadowSoft }}>
                    <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: index === 1 ? COLORS.orange : COLORS.aqua }} />
                    <p className="text-[13px] font-semibold" style={{ color: COLORS.navy }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                { title: "Atención personalizada", text: "Comunicación clara y seguimiento directo.", icon: <MessageCircle className="h-5 w-5" />, accent: COLORS.navy },
                { title: "Enfoque preventivo", text: "Reducción de riesgos fiscales y administrativos.", icon: <ShieldCheck className="h-5 w-5" />, accent: COLORS.orange },
                { title: "Información estratégica", text: "Indicadores útiles para decisiones empresariales.", icon: <TrendingUp className="h-5 w-5" />, accent: COLORS.aqua },
                { title: "Acompañamiento ejecutivo", text: "Seguimiento constante durante la operación.", icon: <Building2 className="h-5 w-5" />, accent: COLORS.navySoft },
              ].map((item) => (
                <motion.div key={item.title} whileHover={{ y: -4 }} className="group rounded-[26px] border bg-white/86 p-5 backdrop-blur-sm transition duration-300" style={{ borderColor: "rgba(203,213,225,0.6)", boxShadow: shadowSoft }}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: `linear-gradient(145deg, rgba(255,255,255,0.98) 0%, ${item.accent}25 100%)`, color: item.accent }}>
                    {item.icon}
                  </div>
                  <h3 className="mt-5 text-[17px] font-black" style={{ color: COLORS.navy }}>
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-7" style={{ color: COLORS.gray }}>
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="mfa-container py-8 md:py-16">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Servicios"
            title="Soluciones para control, cumplimiento y dirección"
            description="Servicios concretos para ordenar la operación, prevenir riesgos y generar información útil para la toma de decisiones."
          />
          <div className="hidden border-l-4 px-5 py-4 text-sm leading-7 md:block md:max-w-sm" style={{ borderColor: COLORS.orange, backgroundColor: COLORS.sectionBg, color: COLORS.navy }}>
            <span style={{ color: COLORS.navy, fontWeight: 700 }}>
              Enfoque integral para personas físicas, emprendedores y empresas con operación activa.
            </span>
          </div>
        </div>

        <div className="mfa-mobile-stack mt-8 grid gap-6 md:mt-14 lg:grid-cols-[0.38fr_0.62fr]">
          <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="overflow-hidden rounded-[22px] border bg-white" style={{ borderColor: COLORS.border, boxShadow: shadowMedium }}>
            <div className="mfa-img-frame mfa-mobile-img relative h-[clamp(220px,36vw,460px)] md:h-full md:min-h-[360px]">
              <img src={SERVICES_IMAGE_URL} alt="Servicios contables y fiscales profesionales en México" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#143D4A]/90 via-[#143D4A]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white md:p-7">
                <p className="text-[11px] font-black uppercase tracking-[0.24em]" style={{ color: COLORS.orangeSoft }}>
                  Dirección financiera
                </p>
                <h3 className="mt-3 max-w-md text-xl font-black leading-tight md:text-2xl">
                  Planeación y control para empresas mexicanas.
                </h3>
                <p className="mt-3 max-w-sm text-[13px] leading-6 text-white/80 md:mt-4 md:text-sm md:leading-7">
                  Supervisión financiera y control fiscal para negocios en operación.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="mfa-scroll-x -mx-3 flex snap-x gap-4 overflow-x-auto px-3 pb-2 md:mx-0 md:grid md:gap-5 md:overflow-visible md:px-0 md:pb-0 md:grid-cols-2">
            {services.map((service, index) => (
              <motion.div key={service.title} whileHover={{ y: -5 }} className="mfa-card group relative min-w-[82%] snap-start overflow-hidden border bg-white p-4 transition duration-300 hover:-translate-y-1 sm:min-w-[48%] md:min-w-0 md:p-7" style={{ borderColor: COLORS.border, boxShadow: shadowSoft }}>
                <div className="absolute left-0 top-0 h-1 w-full opacity-0 transition duration-300 group-hover:opacity-100" style={{ backgroundColor: COLORS.orange }} />
                <div className="mb-4 flex items-center justify-between border-b pb-4 md:mb-6 md:pb-5" style={{ borderColor: COLORS.border }}>
                  <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-[14px] md:h-[54px] md:w-[54px] md:rounded-[18px]" style={{ background: `linear-gradient(145deg, rgba(255,255,255,0.98) 0%, ${service.accent}22 100%)`, boxShadow: `0 10px 24px ${service.glow}` }}>
                    <div className="absolute inset-0 opacity-25" style={{ background: "radial-gradient(circle at top left, rgba(255,255,255,0.65), transparent 60%)" }} />
                    <div className="relative" style={{ color: service.accent }}>
                      {service.icon}
                    </div>
                  </div>
                  <span className="text-xs font-black tracking-[0.2em]" style={{ color: COLORS.orangeDark }}>
                    0{index + 1}
                  </span>
                </div>
                <p className="mb-3 text-[11px] font-black uppercase tracking-[0.20em]" style={{ color: COLORS.orangeDark }}>
                  {service.label}
                </p>
                <h3 className="mfa-fit-text mb-2 text-lg font-black md:mb-3 md:text-xl" style={{ color: COLORS.navy }}>
                  {service.title}
                </h3>
                <p className="mfa-fit-text mfa-clamp-3 text-[13px] leading-6 md:text-sm md:leading-7" style={{ color: COLORS.gray }}>
                  {service.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="calendario" className="relative overflow-hidden border-y py-8 md:py-12" style={{ borderColor: COLORS.border, backgroundColor: COLORS.pageBg }}>
        <div className="relative mx-auto w-[min(100%-1rem,1180px)] sm:w-[min(100%-2rem,1180px)]">
          <SectionHeader
            eyebrow="Calendario e indicadores"
            title="Obligaciones e indicadores vigentes"
            description="Consulta operativa con enlaces oficiales y referencias automáticas para control mensual."
          />

          <div className="mfa-mobile-stack mt-6 grid gap-4 lg:grid-cols-[0.64fr_0.36fr]">
            <div className="rounded-[24px] bg-white p-4 md:p-5" style={{ boxShadow: shadowMedium }}>
              <div className="mfa-scroll-x -mx-1 flex snap-x gap-2 overflow-x-auto px-1 pb-2 md:mx-0 md:grid md:grid-cols-5 md:overflow-visible md:px-0 md:pb-0">
                {obligationCalendar.map((item, index) => {
                  const isActive = activeCalendarTab === index;
                  return (
                    <button
                      key={item.category}
                      type="button"
                      onClick={() => setActiveCalendarTab(index)}
                      className="min-w-[135px] snap-start rounded-2xl px-3 py-3 text-left transition duration-200 md:min-w-0"
                      style={{ backgroundColor: isActive ? COLORS.navy : COLORS.panelBg, color: isActive ? COLORS.white : COLORS.navy, boxShadow: isActive ? shadowSoft : "none" }}
                    >
                      <span className="block text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: isActive ? COLORS.orangeSoft : COLORS.orangeDark }}>
                        {item.deadline}
                      </span>
                      <span className="mt-1 block text-[12px] font-black leading-5 md:text-[13px]">
                        {item.category}
                      </span>
                      <span className="mt-1 block text-[10px] leading-4 opacity-80">
                        {item.authority}
                      </span>
                    </button>
                  );
                })}
              </div>

              <motion.div
                key={activeObligation.category}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22 }}
                className="mfa-mobile-stack mt-4 grid gap-3 rounded-2xl p-4 md:grid-cols-[0.58fr_0.42fr] md:p-5"
                style={{ backgroundColor: COLORS.panelBg }}
              >
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em]" style={{ color: COLORS.orangeDark }}>
                    {activeObligation.authority}
                  </p>
                  <h3 className="mt-2 text-xl font-black md:text-2xl" style={{ color: COLORS.navy }}>
                    {activeObligation.category}
                  </h3>
                  <p className="mt-2 text-sm leading-6" style={{ color: COLORS.gray }}>
                    {activeObligation.scope}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <a href={activeObligation.officialUrl} target="_blank" rel="noreferrer" className="rounded-xl px-3 py-2 text-[10px] font-black uppercase tracking-[0.10em]" style={{ backgroundColor: COLORS.white, color: COLORS.navy }}>
                      Ver oficial
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white p-3">
                    <p className="text-[9px] font-black uppercase tracking-[0.14em]" style={{ color: COLORS.orangeDark }}>Periodo</p>
                    <p className="mt-2 text-sm font-black" style={{ color: COLORS.navy }}>{activeObligation.frequency}</p>
                  </div>
                  <div className="rounded-xl bg-white p-3">
                    <p className="text-[9px] font-black uppercase tracking-[0.14em]" style={{ color: COLORS.orangeDark }}>Vence</p>
                    <p className="mt-2 text-sm font-black" style={{ color: COLORS.navy }}>{activeObligation.deadline}</p>
                  </div>
                  <div className="col-span-2 rounded-xl border-l-4 bg-white p-3" style={{ borderColor: COLORS.orange }}>
                    <p className="text-[9px] font-black uppercase tracking-[0.14em]" style={{ color: COLORS.orangeDark }}>Riesgo a prevenir</p>
                    <p className="mt-2 text-[12px] leading-5" style={{ color: COLORS.gray }}>{activeObligation.risk}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="rounded-[24px] bg-white p-4 md:p-5" style={{ boxShadow: shadowMedium }}>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em]" style={{ color: COLORS.orangeDark }}>
                    Indicadores
                  </p>
                  <h3 className="mt-1 text-xl font-black" style={{ color: COLORS.navy }}>
                    Referencias vigentes
                  </h3>
                </div>
                <span className="rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-[0.12em]" style={{ backgroundColor: COLORS.panelBg, color: COLORS.navy }}>
                  Auto
                </span>
              </div>

              <div className="mt-4 grid gap-3">
                {[
                  { label: "Tipo de cambio USD", value: formatMoney(liveIndicators.exchangeRate, 4), meta: liveIndicators.exchangeRateSource, href: OFFICIAL_LINKS.dofIndicadores },
                  { label: "UMA diaria", value: formatMoney(liveIndicators.uma.daily), meta: `Mensual ${formatMoney(liveIndicators.uma.monthly)} · Anual ${formatMoney(liveIndicators.uma.annual)}`, href: OFFICIAL_LINKS.inegiUma },
                  { label: "Salario mínimo general", value: formatMoney(liveIndicators.minimumWage.general), meta: `ZLFN ${formatMoney(liveIndicators.minimumWage.border)}`, href: OFFICIAL_LINKS.conasami },
                ].map((indicator) => (
                  <a key={indicator.label} href={indicator.href} target="_blank" rel="noreferrer" className="group rounded-2xl border bg-white p-3 transition duration-300 hover:-translate-y-0.5" style={{ borderColor: COLORS.border, boxShadow: shadowSoft }}>
                    <p className="text-[9px] font-black uppercase tracking-[0.14em]" style={{ color: COLORS.orangeDark }}>
                      {indicator.label}
                    </p>
                    <div className="mt-2 flex items-end justify-between gap-3">
                      <p className="text-lg font-black" style={{ color: COLORS.navy }}>
                        {indicator.value}
                      </p>
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" style={{ color: COLORS.aqua }} />
                    </div>
                    <p className="mt-1 text-[10px] leading-4" style={{ color: COLORS.gray }}>
                      {indicator.meta}
                    </p>
                  </a>
                ))}
              </div>

              <p className="mt-4 text-[9px] leading-4" style={{ color: COLORS.graySoft }}>
                Última actualización: {formatShortDate(liveIndicators.updatedAt)} · {liveIndicators.exchangeRateStatus}. Validar siempre contra fuente oficial antes de presentar pagos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mfa-container py-8 md:py-16">
        <div className="overflow-hidden rounded-[22px] border bg-white md:rounded-[26px]" style={{ borderColor: COLORS.border, boxShadow: shadowMedium }}>
          <div className="mfa-mobile-stack grid items-center lg:grid-cols-[0.48fr_0.52fr]">
            <div className="mfa-img-frame mfa-mobile-img relative h-[clamp(200px,44vw,340px)] lg:h-full">
              <img src={CLIENTS_IMAGE_URL} alt="Atención profesional para empresas y contribuyentes" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#143D4A]/85 via-[#143D4A]/30 to-transparent" />
            </div>

            <div className="p-5 md:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.30em]" style={{ color: COLORS.orangeDark }}>
                Clientes
              </p>
              <h3 className="mfa-fit-text mt-4 max-w-xl text-[clamp(1.65rem,5vw,2.25rem)] font-black leading-tight" style={{ color: COLORS.navy }}>
                Atención especializada para distintos perfiles y sectores.
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-8" style={{ color: COLORS.gray }}>
                Atención personalizada para empresas mexicanas, emprendedores y contribuyentes con operación activa.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 md:mt-8 md:gap-3">
                {clientTypes.map((client) => (
                  <div key={client} className="rounded-full border px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.06em] md:px-4 md:py-2 md:text-[11px] md:tracking-[0.12em]" style={{ borderColor: COLORS.border, backgroundColor: COLORS.panelBg, color: COLORS.navy }}>
                    {client}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cotizacion" className="mx-auto max-w-[1440px] px-4 py-10 sm:px-8 lg:px-10 xl:px-12 md:py-24">
        <div className="mfa-mobile-stack grid gap-6 border bg-white p-5 md:grid-cols-[0.8fr_1.2fr] md:gap-10 md:p-10" style={{ borderColor: COLORS.border, boxShadow: shadowMedium }}>
          <div>
            <SectionHeader
              eyebrow="Cotización"
              title="Solicita una propuesta"
              description="Comparte los datos básicos de tu negocio para preparar una propuesta de servicio acorde a tus necesidades."
            />
            <div className="mt-5 border-l-4 p-4 text-[13px] leading-6 md:mt-8 md:p-5 md:text-sm md:leading-7" style={{ borderColor: COLORS.orange, backgroundColor: COLORS.panelBg, color: COLORS.navy }}>
              <span style={{ color: COLORS.navy, fontWeight: 700 }}>
                Ideal para contabilidad mensual, cumplimiento fiscal, trámites, control CFDI, auditoría externa o dirección financiera.
              </span>
            </div>
          </div>

          <form onSubmit={handleQuoteSubmit} className="grid gap-3 md:gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input required name="nombre" value={quoteForm.nombre} onChange={handleQuoteChange} placeholder="Nombre completo" className="border px-4 py-3 text-sm outline-none transition md:py-4" style={{ borderColor: COLORS.border, backgroundColor: COLORS.field }} />
              <input name="empresa" value={quoteForm.empresa} onChange={handleQuoteChange} placeholder="Empresa o negocio" className="border px-4 py-3 text-sm outline-none transition md:py-4" style={{ borderColor: COLORS.border, backgroundColor: COLORS.field }} />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input required name="telefono" value={quoteForm.telefono} onChange={handleQuoteChange} placeholder="Teléfono / WhatsApp" className="border px-4 py-3 text-sm outline-none transition md:py-4" style={{ borderColor: COLORS.border, backgroundColor: COLORS.field }} />
              <select name="regimen" value={quoteForm.regimen} onChange={handleQuoteChange} className="border px-4 py-3 text-sm outline-none transition md:py-4" style={{ borderColor: COLORS.border, backgroundColor: COLORS.field, color: COLORS.gray }}>
                <option value="">Tipo de cliente / régimen</option>
                <option>Persona física</option>
                <option>Persona moral</option>
                <option>Emprendedor / negocio nuevo</option>
                <option>No estoy seguro</option>
              </select>
            </div>

            <select required name="servicio" value={quoteForm.servicio} onChange={handleQuoteChange} className="border px-4 py-3 text-sm outline-none transition md:py-4" style={{ borderColor: COLORS.border, backgroundColor: COLORS.field, color: COLORS.gray }}>
              <option value="">Servicio de interés</option>
              {quoteServices.map((service) => (
                <option key={service}>{service}</option>
              ))}
            </select>

            <textarea name="mensaje" value={quoteForm.mensaje} onChange={handleQuoteChange} placeholder="Cuéntanos brevemente qué necesitas" rows={4} className="resize-none border px-4 py-4 text-sm outline-none transition" style={{ borderColor: COLORS.border, backgroundColor: COLORS.field }} />

            <button type="submit" className="px-5 py-3 text-[12px] font-black uppercase tracking-[0.10em] text-white transition duration-300 hover:-translate-y-1 md:px-7 md:py-4 md:text-sm md:tracking-[0.14em]" style={{ backgroundColor: COLORS.navy, border: "none", boxShadow: shadowMedium }}>
              Enviar solicitud por WhatsApp
            </button>
          </form>
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-[1440px] px-4 py-6 sm:px-8 lg:px-10 xl:px-12 md:py-10">
        <div className="flex justify-end">
          <motion.div whileHover={{ y: -2 }} className="group flex w-full max-w-[420px] items-center justify-between overflow-hidden rounded-[22px] border bg-white/92 px-4 py-3 backdrop-blur-md transition duration-300 md:px-5" style={{ borderColor: "rgba(203,213,225,0.75)", boxShadow: "0 14px 38px rgba(15,23,42,0.06)" }}>
            <div className="flex items-center gap-2.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl" style={{ background: `linear-gradient(145deg, ${COLORS.orange} 0%, ${COLORS.orangeDark} 100%)`, boxShadow: "0 10px 24px rgba(232,104,0,0.18)" }}>
                <MessageCircle className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.18em]" style={{ color: COLORS.orangeDark }}>
                  Contacto ejecutivo
                </p>
                <p className="mt-1 text-[13px] font-bold md:text-[14px]" style={{ color: COLORS.navy }}>
                  Agenda asesoría estratégica
                </p>
              </div>
            </div>

            <a href="https://wa.me/525610376624" className="flex items-center gap-2 rounded-xl px-3 py-2 text-[10px] font-black uppercase tracking-[0.12em] transition duration-300 group-hover:-translate-y-0.5 md:text-[11px]" style={{ backgroundColor: COLORS.panelBg, color: COLORS.navy }}>
              WhatsApp
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        </div>
      </section>

      <footer className="border-t bg-white py-8 md:py-14" style={{ borderColor: COLORS.border, color: COLORS.graySoft }}>
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-5 px-4 text-center md:flex-row md:gap-10 md:text-left">
          <div>
            <div className="flex justify-center md:justify-start">
              <BrandMark variant="footer" />
            </div>
            <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.06em] md:text-sm md:tracking-[0.08em]">
              Contabilidad · Fiscal · Seguridad social · Trámites · Dirección financiera
            </p>
            <p className="mt-2 text-[11px] md:mt-4 md:text-xs" style={{ color: COLORS.graySoft }}>
              Atención virtual y presencial para personas físicas, emprendedores y empresas.
            </p>
          </div>

          <div className="grid gap-2 text-[12px] md:gap-3 md:text-sm">
            <div>
              <span className="font-black" style={{ color: COLORS.navy }}>WhatsApp:</span>{" "}
              <span style={{ color: COLORS.gray }}>56 1037 6624</span>
            </div>
            <div>
              <span className="font-black" style={{ color: COLORS.navy }}>Atención:</span>{" "}
              <span style={{ color: COLORS.gray }}>Virtual y presencial</span>
            </div>
            <div>
              <span className="font-black" style={{ color: COLORS.navy }}>Servicios:</span>{" "}
              <span style={{ color: COLORS.gray }}>Fiscal · Contable · Administrativo</span>
            </div>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/525610376624" className="fixed bottom-4 left-4 z-50 flex h-11 w-11 items-center justify-center rounded-xl md:hidden" style={{ backgroundColor: COLORS.navy, color: COLORS.white, boxShadow: shadowMedium }} aria-label="Agendar por WhatsApp">
        <MessageCircle className="h-5 w-5" />
      </a>

      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-50 flex h-[52px] w-[52px] items-center justify-center rounded-[18px] transition duration-300 hover:-translate-y-1 md:bottom-6 md:right-6 md:h-[84px] md:w-[84px] md:rounded-[28px]"
          style={{
            background: `linear-gradient(145deg, ${COLORS.orange} 0%, ${COLORS.orangeDark} 52%, ${COLORS.orangeSoft} 100%)`,
            boxShadow: "0 20px 44px rgba(232, 104, 0, 0.32)",
            border: `1px solid rgba(255,255,255,0.22)`,
          }}
        >
          <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[16px] md:rounded-[24px]">
            <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at top left, rgba(255,255,255,0.55), transparent 60%)" }} />
            <ChevronUp className="h-4 w-4 md:h-5 md:w-5" style={{ color: COLORS.white }} />
            <span className="mt-0.5 text-[11px] font-black tracking-[-0.10em] md:mt-1 md:text-[18px]" style={{ color: COLORS.white, fontFamily: FONT_BRAND }}>
              MFA
            </span>
          </div>
        </motion.button>
      )}
    </main>
  );
}
