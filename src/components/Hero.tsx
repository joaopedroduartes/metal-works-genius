import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Star, Award, CheckCircle2, Zap, Clock } from "lucide-react";
import heroImage from "@/assets/hero-portao.jpg";
import { whatsappLink } from "@/lib/whatsapp";
import { Sparks } from "./Sparks";

const headline = ["PORTÕES,", "GRADES", "E ESTRUTURAS", "QUE PROTEGEM", "SUA CASA E", "SUA FAMÍLIA"];

const ease = [0.16, 1, 0.3, 1] as const;

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 md:pt-28 pb-16 overflow-hidden bg-metal-plate"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,hsl(var(--primary)/0.12),transparent_60%)]" aria-hidden />
      <Sparks count={16} />

      <div className="container relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left: text */}
        <div className="lg:col-span-7 max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary"
          >
            <Zap className="h-3.5 w-3.5" strokeWidth={2.5} />
            8 Anos de experiência em Iperó
          </motion.div>

          {/* Headline */}
          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight text-foreground">
            {headline.map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.08, ease }}
                className="inline-block mr-3"
              >
                {word === "PROTEGEM" ? (
                  <span className="text-gradient-gold">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7, ease }}
            className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Serralheria artesanal com qualidade industrial. Atendemos Iperó e região com
            fabricação <span className="text-foreground font-semibold">sob medida</span>,
            instalação profissional e acabamento que dura.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9, ease }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="shine group relative inline-flex items-center justify-center gap-2 rounded-md bg-gradient-primary px-7 py-4 text-base font-bold text-primary-foreground shadow-glow hover:shadow-glow-lg transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
              Solicitar Orçamento no WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-surface/40 backdrop-blur px-7 py-4 text-base font-semibold text-foreground hover:border-primary/60 hover:bg-surface transition-all"
            >
              Ver Trabalhos Realizados
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl"
          >
            <ProofItem icon={<Star className="h-4 w-4 fill-primary text-primary" />} label="4.9 no Google" sub="15+ avaliações" />
            <ProofItem icon={<Award className="h-4 w-4 text-primary" />} label="8 anos" sub="de mercado" />
            <ProofItem icon={<CheckCircle2 className="h-4 w-4 text-primary" />} label="+500 projetos" sub="entregues" />
          </motion.div>
        </div>

        {/* Right: image */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] rounded-2xl overflow-hidden border border-primary/30 shadow-elevated">
            <img
              src={heroImage}
              alt="Portão metálico premium fabricado pela Serralheria 5 Irmãos em Iperó"
              width={1024}
              height={1280}
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/30 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,hsl(var(--primary)/0.25),transparent_50%)]" />

            {/* Corner badge */}
            <div className="absolute top-5 left-5 inline-flex items-center gap-1.5 rounded-full bg-background/80 backdrop-blur border border-border px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-foreground">Trabalho premium</span>
            </div>
          </div>

          {/* Floating card */}
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2, ease }}
            className="absolute -bottom-6 -left-4 sm:-left-8 lg:-left-12 max-w-[260px] rounded-xl bg-surface border border-primary/40 p-4 shadow-elevated backdrop-blur"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
                <Clock className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-sm font-bold text-foreground leading-tight">Atendimento em até 2h</div>
                <div className="text-xs text-muted-foreground mt-0.5">Pelo WhatsApp, seg a sáb</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ProofItem = ({ icon, label, sub }: { icon: React.ReactNode; label: string; sub: string }) => (
  <div className="flex items-center gap-2.5 rounded-lg border border-border bg-surface/50 px-3 py-2.5 backdrop-blur">
    <div className="shrink-0">{icon}</div>
    <div className="leading-tight">
      <div className="text-sm font-bold text-foreground">{label}</div>
      <div className="text-[11px] text-muted-foreground">{sub}</div>
    </div>
  </div>
);

export default Hero;
