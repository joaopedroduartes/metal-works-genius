import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Location } from "@/components/Location";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Location />
        {/* Próximas seções: Why Us, Depoimentos, Sobre, Processo, Footer */}
      </main>
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
