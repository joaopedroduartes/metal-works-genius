import { motion } from "framer-motion";
import { DoorOpen, Fence, Building2, Check, Clock, ArrowRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

const ease = [0.16, 1, 0.3, 1] as const;

const services = [
  {
    icon: DoorOpen,
    title: "Portões",
    subtitle: "Sociais, basculantes e deslizantes",
    description:
      "Portões sob medida com motorização, acabamento premium e máxima durabilidade. Projetados para a estética da sua casa.",
    benefits: [
      "Motorização CCK e Garen",
      "Pintura eletrostática anti-ferrugem",
      "Garantia de 5 anos na estrutura",
      "Projeto 3D antes da execução",
    ],
    deadline: "10 a 20 dias",
    servico: "Portões",
  },
  {
    icon: Fence,
    title: "Grades & Cercas",
    subtitle: "Janelas, muros e proteção",
    description:
      "Grades robustas para janelas, muros e divisórias com design moderno. Segurança que valoriza a fachada.",
    benefits: [
      "Aço galvanizado de alta resistência",
      "Modelos minimalistas e clássicos",
      "Instalação rápida e limpa",
      "Acabamento sem rebarbas",
    ],
    deadline: "5 a 10 dias",
    servico: "Grades e Cercas",
  },
  {
    icon: Building2,
    title: "Estruturas Metálicas",
    subtitle: "Coberturas, mezaninos e escadas",
    description:
      "Estruturas calculadas e soldadas com precisão para residências, comércios e galpões. Engenharia que dura.",
    benefits: [
      "Cálculo estrutural por engenheiro",
      "Solda MIG certificada",
      "Telhas, policarbonato e vidro",
      "ART emitida quando necessário",
    ],
    deadline: "15 a 30 dias",
    servico: "Estruturas Metálicas",
  },
];

export const Services = () => {
  return (
    <section
      id="servicos"
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-cta"
    >
      <div className="absolute inset-0 bg-grid-faint opacity-60" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.08),transparent_60%)]" aria-hidden />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="max-w-2xl mx-auto text-center mb-14 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary">
            Nossos serviços
          </span>
          <h2 className="font-display text-4xl md:text-6xl mt-5 leading-[0.95]">
            SOLUÇÕES EM <span className="text-gradient-gold">FERRO E AÇO</span>
            <br />
            FEITAS SOB MEDIDA
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground">
            Da medição ao acabamento final: 8 anos transformando projetos em
            estruturas seguras, bonitas e duradouras.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease }}
                className="group relative flex flex-col rounded-xl border border-border bg-surface p-7 md:p-8 hover:border-primary/60 hover:shadow-glow transition-all duration-500"
              >
                {/* Top accent */}
                <span
                  className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-hidden
                />

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow group-hover:scale-110 transition-transform duration-500">
                    <Icon className="h-7 w-7" strokeWidth={2.2} />
                  </div>
                </div>

                <h3 className="font-display text-2xl md:text-3xl tracking-wide text-foreground">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-primary/90">
                  {s.subtitle}
                </p>
                <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                  {s.description}
                </p>

                {/* Benefits */}
                <ul className="mt-6 space-y-2.5">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/90">
                      <Check className="h-4 w-4 mt-0.5 text-primary shrink-0" strokeWidth={3} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Deadline */}
                <div className="mt-6 flex items-center gap-2 rounded-md border border-border bg-surface-2 px-3.5 py-2.5">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Prazo:</span>
                  <span className="text-sm font-semibold text-foreground">{s.deadline}</span>
                </div>

                {/* CTA */}
                <a
                  href={whatsappLink(s.servico)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground shine hover:shadow-glow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
                  Solicitar orçamento
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
          className="mt-14 md:mt-20 text-center"
        >
          <p className="text-sm md:text-base text-muted-foreground">
            Não encontrou o que precisa? Fazemos projetos especiais sob medida.
          </p>
          <a
            href={whatsappLink("Projeto especial sob medida")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Fale com um especialista
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
