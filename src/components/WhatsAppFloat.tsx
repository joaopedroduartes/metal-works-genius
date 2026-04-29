import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

export const WhatsAppFloat = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 group"
        >
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar conosco no WhatsApp"
            className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-elevated hover:scale-110 active:scale-95 transition-transform"
          >
            <span className="absolute inset-0 rounded-full bg-whatsapp animate-pulse-ring" aria-hidden />
            <span className="absolute inset-0 rounded-full bg-whatsapp animate-pulse-ring" style={{ animationDelay: "0.6s" }} aria-hidden />
            <MessageCircle className="relative h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2.2} />
          </a>
          {/* Tooltip */}
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="rounded-md bg-surface border border-primary/40 px-3 py-2 text-sm font-semibold text-foreground whitespace-nowrap shadow-elevated">
              Fale conosco agora!
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppFloat;
