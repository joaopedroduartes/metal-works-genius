import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { whatsappLink } from "@/lib/whatsapp";
import portao1 from "@/assets/portfolio-portao-1.jpg";
import portao2 from "@/assets/portfolio-portao-2.jpg";
import grade1 from "@/assets/portfolio-grade-1.jpg";
import grade2 from "@/assets/portfolio-grade-2.jpg";
import estrutura1 from "@/assets/portfolio-estrutura-1.jpg";
import estrutura2 from "@/assets/portfolio-estrutura-2.jpg";

type Category = "todos" | "portoes" | "grades" | "estruturas";

interface Project {
  id: string;
  title: string;
  category: Exclude<Category, "todos">;
  categoryLabel: string;
  image: string;
  location: string;
}

const projects: Project[] = [
  { id: "p1", title: "Portão Basculante Moderno", category: "portoes", categoryLabel: "Portões", image: portao1, location: "Iperó • SP" },
  { id: "p2", title: "Portão Social em Ferro Forjado", category: "portoes", categoryLabel: "Portões", image: portao2, location: "Sorocaba • SP" },
  { id: "g1", title: "Grade de Janela Minimalista", category: "grades", categoryLabel: "Grades & Cercas", image: grade1, location: "Boituva • SP" },
  { id: "g2", title: "Cercamento Industrial", category: "grades", categoryLabel: "Grades & Cercas", image: grade2, location: "Tatuí • SP" },
  { id: "e1", title: "Cobertura Metálica Galpão", category: "estruturas", categoryLabel: "Estruturas", image: estrutura1, location: "Iperó • SP" },
  { id: "e2", title: "Mezanino & Escada Industrial", category: "estruturas", categoryLabel: "Estruturas", image: estrutura2, location: "Araçoiaba • SP" },
];

const filters: { value: Category; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "portoes", label: "Portões" },
  { value: "grades", label: "Grades & Cercas" },
  { value: "estruturas", label: "Estruturas" },
];

export const Portfolio = () => {
  const [active, setActive] = useState<Category>("todos");

  const filtered = useMemo(
    () => (active === "todos" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="portfolio" className="relative bg-background py-20 sm:py-28 bg-grid-faint">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            Portfólio
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl">
            Trabalhos que falam <span className="text-gradient-gold">por nós</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Mais de 8 anos transformando aço em soluções sob medida para residências, comércios e indústrias.
          </p>
        </motion.div>

        {/* Filtros */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {filters.map((f) => {
            const isActive = active === f.value;
            return (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground shadow-glow"
                    : "border-border bg-surface text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
                style={isActive ? { boxShadow: "var(--shadow-glow)" } : undefined}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Galeria */}
        <motion.div layout className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="group relative overflow-hidden rounded-xl border border-border bg-surface shine"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="inline-block rounded-full bg-primary/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                    {p.categoryLabel}
                  </span>
                  <h3 className="mt-2 font-display text-2xl leading-tight">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.location}</p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 text-center">
          <a
            href={whatsappLink("Olá! Vi o portfólio e gostaria de um orçamento.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-[1.02] shadow-glow"
          >
            Quero um projeto assim
          </a>
        </div>
      </div>
    </section>
  );
};
