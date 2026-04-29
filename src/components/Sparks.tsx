import { useMemo } from "react";
import { motion } from "framer-motion";

/**
 * Welding sparks rising from bottom of hero section.
 * Decorative only — uses pure transforms/opacity for performance.
 */
export const Sparks = ({ count = 18 }: { count?: number }) => {
  const sparks = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 4 + Math.random() * 5,
        size: 2 + Math.random() * 3,
        hue: Math.random() > 0.5 ? "hsl(var(--primary))" : "hsl(var(--accent))",
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {sparks.map((s) => (
        <motion.span
          key={s.id}
          className="absolute bottom-0 rounded-full"
          style={{
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            background: s.hue,
            boxShadow: `0 0 ${s.size * 3}px ${s.hue}`,
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [-20, -window.innerHeight * 0.9],
            opacity: [0, 1, 1, 0],
            x: [0, (Math.random() - 0.5) * 80],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};
