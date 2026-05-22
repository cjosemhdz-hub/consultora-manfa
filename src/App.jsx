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
  Building2,
} from "lucide-react";

const FONT_BODY = "'Aptos Narrow', sans-serif";
const FONT_DISPLAY = "'Playfair Display', serif";
const FONT_BRAND = "'Montserrat', sans-serif";

const fontStyles = {
  body: { fontFamily: FONT_BODY },
  display: { fontFamily: FONT_DISPLAY },
  brand: { fontFamily: FONT_BRAND },
};

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
    {
      icon: <Building2 className="h-7 w-7" />,
      title: "Gestión de trámites",
      text: "Gestión y seguimiento de trámites ante SAT, IMSS e INFONAVIT, incluyendo actualizaciones, movimientos patronales, aclaraciones y cumplimiento administrativo.",
    },
  ];

  return (
    <main
      className="min-h-screen bg-[#F3FAF6] text-[#214469]"
      style={fontStyles.body}
    >
      <section className="relative overflow-hidden bg-[#D8F0E4] text-[#214469]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#238B6E,_transparent_34%)] opacity-30" />

        <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl font-black text-[#214469] shadow-lg">
              MF<span className="text-[#238B6E]">.</span>
            </div>

            <div>
              <p
                className="text-2xl font-extrabold tracking-tight"
                style={fontStyles.brand}
              >
                Man<span className="text-[#238B6E]">Fa</span>
              </p>

              <p className="text-xs tracking-[0.35em] text-[#315B4F]/85">
                CONSULTORES
              </p>
            </div>
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
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4E5DF] bg-white/55 px-4 py-2 text-sm">
              <CheckCircle className="h-4 w-4 text-[#238B6E]" />
              Despacho contable y fiscal moderno
            </div>

            <h1
              className="text-5xl font-black leading-tight tracking-tight md:text-7xl"
              style={fontStyles.display}
            >
              Estrategia contable y fiscal para negocios que quieren crecer con
              orden.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#214469]/90 md:text-xl">
              En ManFa Consultores integramos contabilidad, cumplimiento fiscal
              y análisis financiero para ayudarte a operar con información clara,
              control documental y decisiones mejor fundamentadas.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="servicios" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-bold tracking-[0.25em] text-[#238B6E]">
            SERVICIOS
          </p>

          <h2
            className="mt-3 text-4xl font-black md:text-5xl"
            style={fontStyles.brand}
          >
            Servicios profesionales para el control y crecimiento de tu negocio
          </h2>

          <p className="mt-5 text-lg text-[#607586]">
            Soluciones contables, fiscales y administrativas para personas
            físicas, emprendedores y empresas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -6 }}
              className="rounded-[2rem] border border-[#D4E5DF] bg-white p-7 shadow-sm"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#214469] text-white">
                {service.icon}
              </div>

              <h3 className="mb-3 text-xl font-black">
                {service.title}
              </h3>

              <p className="leading-relaxed text-[#607586]">
                {service.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col items-center justify-between gap-8 rounded-[2.5rem] bg-[#214469] p-10 text-white shadow-2xl md:flex-row md:p-16">
          <div>
            <p className="text-sm font-bold tracking-[0.25em] text-[#A9C5B8]">
              CONTACTO
            </p>

            <h2
              className="mt-3 text-4xl font-black md:text-5xl"
              style={fontStyles.display}
            >
              Convierte tu contabilidad en una herramienta de decisión
            </h2>

            <p className="mt-4 max-w-2xl text-lg text-white/80">
              Agenda un diagnóstico inicial y conoce cómo podemos ayudarte.
            </p>
          </div>

          <a
            href="https://wa.me/525610376624"
            className="flex whitespace-nowrap rounded-full bg-[#238B6E] px-8 py-5 font-black text-white transition hover:bg-[#1F725B]"
          >
            <span className="flex items-center gap-3">
              <MessageCircle className="h-5 w-5" />
              Agendar por WhatsApp
            </span>
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-10 text-center text-[#607586]">
        <p
          className="text-xl font-black text-[#214469]"
          style={fontStyles.brand}
        >
          Man<span className="text-[#238B6E]">Fa</span> Consultores
        </p>

        <p className="mt-1">
          Contabilidad · Fiscal · Asesoría financiera
        </p>
      </footer>
    </main>
  );
}
