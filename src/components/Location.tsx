import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

const ADDRESS = "Iperó, SP — Brasil";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Iper%C3%B3%2C+SP%2C+Brasil&output=embed";
const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Serralheria+5+Irmãos+Iperó+SP";

const infos = [
  { icon: MapPin, label: "Endereço", value: "Iperó - SP, Região de Sorocaba" },
  { icon: Phone, label: "Telefone", value: "(15) 99999-9999" },
  { icon: Clock, label: "Atendimento", value: "Seg a Sáb • 08h às 18h" },
  { icon: Mail, label: "Área de atuação", value: "Iperó, Sorocaba, Boituva, Tatuí e região" },
];

export const Location = () => {
  return (
    <section id="contato" className="relative bg-metal-plate py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            Localização
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl">
            Onde nos <span className="text-gradient-gold">encontrar</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Atendemos toda a região de Sorocaba com agilidade e visitas técnicas sem compromisso.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 overflow-hidden rounded-xl border border-border bg-surface shadow-elevated"
            style={{ boxShadow: "var(--shadow-elevated)" }}
          >
            <div className="aspect-[16/11] w-full">
              <iframe
                title={`Mapa - ${ADDRESS}`}
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, filter: "grayscale(0.4) contrast(1.1)" }}
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Infos */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <div className="rounded-xl border border-border bg-surface p-6">
              <ul className="space-y-5">
                {infos.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        {label}
                      </p>
                      <p className="mt-0.5 text-base font-medium text-foreground">{value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={whatsappLink("Olá! Gostaria de agendar uma visita técnica.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-[1.02] shadow-glow"
              >
                Falar no WhatsApp
              </a>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-border bg-surface px-6 py-3 font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                Abrir no Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
