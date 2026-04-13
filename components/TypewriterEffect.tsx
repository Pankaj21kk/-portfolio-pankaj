import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const SKILLS = [
  "Full Stack Developer",
  "React & Next.js Expert",
  "React Native Engineer",
  "Node.js & Express Dev",
  "MongoDB Architect",
  "Problem Solver",
];

interface TypewriterEffectProps {
  className?: string;
}

export function TypewriterEffect({ className = "" }: TypewriterEffectProps) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "hold" | "deleting">("typing");

  useEffect(() => {
    const word = SKILLS[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => {
          setDisplayed(word.slice(0, displayed.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => setPhase("hold"), 1600);
      }
    } else if (phase === "hold") {
      timeout = setTimeout(() => setPhase("deleting"), 400);
    } else if (phase === "deleting") {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 35);
      } else {
        timeout = setTimeout(() => {
          setIndex((i) => (i + 1) % SKILLS.length);
          setPhase("typing");
        }, 0);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, phase, index]);

  return (
    <span className={`inline-flex items-center gap-1 ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={`${index}-${displayed}`}
          className="text-gradient-primary font-display font-semibold"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          {displayed}
        </motion.span>
      </AnimatePresence>
      {/* Blinking cursor */}
      <motion.span
        className="inline-block w-0.5 h-[1em] align-middle"
        style={{ background: "oklch(0.62 0.23 200)" }}
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: 0.6,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        aria-hidden="true"
      />
    </span>
  );
}
