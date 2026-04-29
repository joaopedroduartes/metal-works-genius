import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        {/* Próximas seções: Why Us, Portfólio, Depoimentos, Sobre, Processo, CTA, Contato, Footer */}
      </main>
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
