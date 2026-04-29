import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        {/* Próximas seções: Why Us, Serviços, Portfólio, Depoimentos, Sobre, Processo, CTA, Contato, Footer */}
        <section className="py-24 text-center text-muted-foreground">
          <div className="container">
            <p className="text-sm uppercase tracking-widest">Próximas seções em construção</p>
          </div>
        </section>
      </main>
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
