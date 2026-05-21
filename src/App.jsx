import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Calculator,
  CheckCircle,
  Cloud,
  FileText,
  MessageCircle,
  Monitor,
  ShieldCheck,
  Users,
} from "lucide-react";

const FONT_BODY = "'Aptos Narrow', sans-serif";
const FONT_DISPLAY = "'Playfair Display', serif";
const FONT_BRAND = "'Montserrat', sans-serif";

const COLORS = {
  background: "#F3FAF6",
  primary: "#238B6E",
  secondary: "#214469",
  accent: "#1F725B",
  light: "#FFFFFF",
  muted: "#607586",
  soft: "#ECF6F2",
  border: "#D4E5DF",
  hero: "#D8F0E4",
};

const fontStyles = {
  body: { fontFamily: FONT_BODY },
  display: { fontFamily: FONT_DISPLAY },
  brand: { fontFamily: FONT_BRAND },
};

function assertLandingPageContent() {
  const requiredSections = ["SERVICIOS", "NUESTRO PROCESO", "CONTACTO"];
  const requiredServices = [
    "Contabilidad integral",
    "Cumplimiento fiscal",
    "Control CFDI",
    "Dirección financiera",
  ];

  return requiredSections.every(Boolean) && requiredServices.every(Boolean);
}

export default function ManFaLandingPage() {
  React.useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Aptos+Narrow:wght@400;500;600;700;800&family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    document.body.style.fontFamily = FONT_BODY;

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  React.useMemo(() => assertLandingPageContent(), []);

  const services = [
    {
      icon: <Calculator className="h-7 w-7" />,
      title: "Contabilidad integral",
      text: "Registro contable, conciliaciones bancarias, balanza de comprobación y estados financieros mensuales.",
    },
    {
      icon: <FileText className="h-7 w-7" />,
      title: "Cumplimiento fiscal",
      text: "Cálculo y presentación de declaraciones, ISR, IVA, retenciones y obligaciones periódicas ante SAT.",
    },
    {
      icon: <Cloud className="h-7 w-7" />,
      title: "Control CFDI",
      text: "Revisión de ingresos, egresos, complementos de pago, cancelaciones y consistencia fiscal de CFDI.",
    },
    {
      icon: <BarChart3 className="h-7 w-7" />,
      title: "Dirección financiera",
      text: "Reportes ejecutivos, indicadores clave, análisis de rentabilidad y recomendaciones para tomar decisiones.",
    },
  ];

  const stats = [
    { value: "01", label: "Diagnóstico inicial" },
    { value: "24/7", label: "Gestión documental digital" },
    { value: "100%", label: "Acompañamiento personalizado" },
  ];

  const benefits = [
    { icon: <Monitor />, title: "Atención virtual y presencial" },
    { icon: <Users />, title: "Acompañamiento estratégico" },
    { icon: <ShieldCheck />, title: "Cumplimiento y prevención" },
    { icon: <BarChart3 />, title: "Información para decidir" },
  ];

  const processSteps = [
    "Diagnóstico y alcance del servicio",
    "Recepción documental digital o presencial",
    "Registro contable y conciliación bancaria",
    "Determinación fiscal y revisión de CFDI",
    "Reporte ejecutivo y recomendaciones",
  ];

  return (
    <main className="min-h-screen bg-[#F3FAF6] text-[#214469]" style={fontStyles.body}>
      <section className="relative overflow-hidden bg-[#D8F0E4] text-[#214469]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#238B6E,_transparent_34%)] opacity-30" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_transparent_0%,_white_45%,_transparent_65%)] opacity-10" />

        <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFFFFF] text-xl font-black text-[#214469] shadow-lg">
              MF<span className="text-[#238B6E]">.</span>
            </div>
            <div>
              <p className="text-2xl font-extrabold tracking-tight" style={fontStyles.brand}>
                Man<span className="text-[#238B6E]">Fa</span>
              </p>
              <p className="text-xs tracking-[0.35em] text-[#315B4F]/85">CONSULTORES</p>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm text-[#214469]/90 md:flex">
            <a href="#servicios">Servicios</a>
            <a href="#beneficios">Beneficios</a>
            <a href="#proceso">Proceso</a>
            <a href="#contacto">Contacto</a>
          </div>

          <a
            href="#contacto"
            className="rounded-full bg-[#238B6E] px-5 py-3 font-semibold text-white shadow-lg transition hover:bg-[#1F725B]"
          >
            Agenda asesoría
          </a>
        </nav>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4E5DF] bg-[#FFFFFF]/55 px-4 py-2 text-sm">
              <CheckCircle className="h-4 w-4 text-[#238B6E]" /> Despacho contable y fiscal moderno
            </div>

            <h1
              className="text-5xl font-black leading-tight tracking-tight md:text-7xl"
              style={fontStyles.display}
            >
              Estrategia contable y fiscal para negocios que quieren crecer con orden.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#214469]/90 md:text-xl">
              En ManFa Consultores integramos contabilidad, cumplimiento fiscal y análisis financiero
              para que tu negocio opere con información clara, control documental y decisiones mejor
              fundamentadas.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contacto"
                className="flex items-center justify-center gap-2 rounded-full bg-[#238B6E] px-7 py-4 font-bold text-white shadow-xl transition hover:bg-[#1F725B]"
              >
                Agendar diagnóstico <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#servicios"
                className="rounded-full border border-[#315B4F]/20 bg-[#FFFFFF]/55 px-7 py-4 text-center font-bold backdrop-blur transition hover:bg-[#FFFFFF]/75"
              >
                Conocer servicios
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-[#D4E5DF] bg-[#FFFFFF]/55 p-6 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] bg-[#FFFFFF] p-8 text-[#214469]">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#5D748A]">Resumen mensual</p>
                    <p className="text-3xl font-black">Panel ManFa</p>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#214469] font-black text-white">
                    MF.
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-[#ECF6F2] p-5">
                    <p className="text-sm text-[#5D748A]">Cumplimiento</p>
                    <p className="text-2xl font-black text-[#238B6E]">Fiscal</p>
                  </div>
                  <div className="rounded-2xl bg-[#ECF6F2] p-5">
                    <p className="text-sm text-[#5D748A]">Control</p>
                    <p className="text-2xl font-black">Contable</p>
                  </div>
                  <div className="col-span-2 rounded-2xl bg-[#ECF6F2] p-5">
                    <p className="mb-3 text-sm text-[#5D748A]">Modelo de trabajo</p>
                    <div className="grid grid-cols-3 gap-3">
                      {stats.map((stat) => (
                        <div key={stat.label} className="rounded-xl border border-[#D4E5DF] bg-[#FFFFFF] p-3">
                          <p className="text-xl font-black text-[#238B6E]">{stat.value}</p>
                          <p className="text-xs leading-tight text-[#607586]">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="beneficios" className="mx-auto grid max-w-7xl gap-4 px-6 py-12 md:grid-cols-4">
        {benefits.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-4 rounded-3xl border border-[#D4E5DF] bg-[#FFFFFF] p-6 shadow-sm"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E3F3EC] text-[#238B6E]">
              {React.cloneElement(item.icon, { className: "h-6 w-6" })}
            </div>
            <p className="font-bold">{item.title}</p>
          </div>
        ))}
      </section>

      <section id="servicios" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-bold tracking-[0.25em] text-[#238B6E]">SERVICIOS</p>
          <h2 className="mt-3 text-4xl font-black md:text-5xl" style={fontStyles.brand}>
            Servicios profesionales para el control y crecimiento de tu negocio
          </h2>
          <p className="mt-5 text-lg text-[#607586]">
            Diseñamos soluciones contables y fiscales con enfoque preventivo, información financiera clara
            y acompañamiento ejecutivo para personas físicas, emprendedores y empresas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {services.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -6 }}
              className="rounded-[2rem] border border-[#D4E5DF] bg-[#FFFFFF] p-7 shadow-sm"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#214469] text-white">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-black">{service.title}</h3>
              <p className="leading-relaxed text-[#607586]">{service.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="proceso" className="bg-[#FFFFFF] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold tracking-[0.25em] text-[#238B6E]">NUESTRO PROCESO</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl" style={fontStyles.brand}>
              Metodología clara, ordenada y orientada a resultados
            </h2>
            <p className="mt-5 text-lg text-[#607586]">
              Implementamos un proceso mensual de recepción, revisión, registro, conciliación y reporte
              para mantener tu operación contable y fiscal bajo control.
            </p>
          </div>

          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <div key={step} className="flex items-center gap-4 rounded-2xl bg-[#ECF6F2] p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#238B6E] font-black text-white">
                  {index + 1}
                </div>
                <p className="font-bold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col items-center justify-between gap-8 rounded-[2.5rem] bg-[#214469] p-10 text-white shadow-2xl md:flex-row md:p-16">
          <div>
            <p className="text-sm font-bold tracking-[0.25em] text-[#A9C5B8]">CONTACTO</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl" style={fontStyles.display}>
              Convierte tu contabilidad en una herramienta de decisión
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
              Agenda un diagnóstico inicial y conoce cómo podemos ayudarte a ordenar tu contabilidad,
              reducir riesgos fiscales y generar información útil para dirigir mejor tu negocio.
            </p>
          </div>
          <a
            href="https://wa.me/525610376624525610376624"
            className="flex whitespace-nowrap rounded-full bg-[#238B6E] px-8 py-5 font-black text-white transition hover:bg-[#1F725B]"
          >
            <span className="flex items-center gap-3">
              <MessageCircle className="h-5 w-5" /> Agendar por WhatsApp
            </span>
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-[#FFFFFF] py-10 text-center text-[#607586]">
        <p className="text-xl font-black text-[#214469]" style={fontStyles.brand}>
          Man<span className="text-[#238B6E]">Fa</span> Consultores
        </p>
        <p className="mt-1">Contabilidad · Fiscal · Asesoría financiera</p>
        <p className="mt-4 text-sm text-[#5D748A]">
          Atención virtual y presencial para personas físicas, emprendedores y empresas.
        </p>
      </footer>
    </main>
  );
}
