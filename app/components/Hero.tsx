import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

// Using icon components
const GithubIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.814 0-9.752h3.554v1.381c.43-.664 1.199-1.608 2.925-1.608 2.136 0 3.74 1.398 3.74 4.402v5.577zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.968.771-1.71 1.954-1.71 1.182 0 1.915.742 1.933 1.71 0 .951-.75 1.71-1.972 1.71zm1.676 11.597h-3.354v-9.752h3.354v9.752zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
  </svg>
);

const MailIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
import { type Variants, motion, useMotionValue, useSpring } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";
import { ParticleBackground } from "@/components/Perticlebackground";
import { TypewriterEffect } from "@/components/TypewriterEffect";

const TECH_STACK = [
  "Next.js",
  "React",
  "React Native",
  "Node.js",
  "MongoDB",
  "Express",
];

const SOCIAL_LINKS = [
  { icon: GithubIcon, label: "GitHub", href: "https://github.com/pankajsharma" },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://linkedin.com/in/pankajsharma",
  },
  { icon: MailIcon, label: "Email", href: "mailto:pankaj@nitj.ac.in" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Mouse-follow cursor glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, { damping: 25, stiffness: 120 });
  const glowY = useSpring(mouseY, { damping: 25, stiffness: 120 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY],
  );

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  };
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "circOut" },
    },
  };
  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-gradient"
      data-ocid="hero-section"
    >
      {/* Particle canvas background */}
      <ParticleBackground />

      {/* Ambient radial glow layers — slate tones only */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, oklch(0.80 0.004 264 / 0.06), transparent 70%), radial-gradient(ellipse 60% 50% at 80% 100%, oklch(0.60 0.006 264 / 0.04), transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Mouse-follow spotlight glow — soft slate/white */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: 480,
          height: 480,
          borderRadius: "50%",
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, oklch(0.80 0.004 264 / 0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Top badge */}
        <motion.div variants={fadeUp} className="mb-6">
          <Badge
            className="px-4 py-1.5 text-xs font-mono tracking-widest uppercase"
            style={{
              background: "oklch(0.80 0.004 264 / 0.10)",
              border: "1px solid oklch(0.80 0.004 264 / 0.25)",
              color: "oklch(0.80 0.004 264)",
            }}
          >
            Available for opportunities
          </Badge>
        </motion.div>

        {/* Greeting */}
        <motion.p
          variants={fadeUp}
          className="text-base md:text-lg font-mono text-muted-foreground tracking-widest mb-3"
        >
          Hi, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-none tracking-tight text-foreground mb-4"
        >
          Pankaj{" "}
          <span className="text-gradient-primary relative">
            Sharma
            {/* Underline accent — slate */}
            <motion.span
              className="absolute -bottom-2 left-0 h-0.75 rounded-full"
              style={{ background: "oklch(0.70 0.006 264)", width: "100%" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                delay: 0.9,
                duration: 0.6,
                ease: "circOut",
              }}
              aria-hidden="true"
            />
          </span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          variants={fadeUp}
          className="text-2xl sm:text-3xl md:text-4xl font-display font-medium mb-5 min-h-[1.4em] flex items-center justify-center"
        >
          <TypewriterEffect />
        </motion.div>

        {/* Subtitle — tech stack */}
        <motion.p
          variants={fadeUp}
          className="text-sm md:text-base text-muted-foreground font-mono mb-8"
        >
          NIT Jalandhar&nbsp;&nbsp;·&nbsp;&nbsp;
          {TECH_STACK.join(" · ")}
        </motion.p>

        {/* Skill badges */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {TECH_STACK.map((tech, i) => (
            <motion.span
              key={tech}
              className="glass-card px-3 py-1 rounded-full text-xs font-mono text-foreground"
              style={{ animationDelay: `${i * 80}ms` }}
              whileHover={{ scale: 1.08, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 items-center mb-10"
        >
          <Button
            size="lg"
            className="px-8 py-3 text-base font-semibold rounded-xl transition-smooth"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.25 0.006 264), oklch(0.15 0.004 264))",
              color: "oklch(0.94 0.004 264)",
              boxShadow: "0 0 24px oklch(0.30 0.006 264 / 0.4)",
            }}
            onClick={() => scrollToSection("projects")}
            data-ocid="hero-cta-projects"
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-3 text-base font-semibold rounded-xl glass-card border-0 transition-smooth"
            onClick={() => scrollToSection("contact")}
            data-ocid="hero-cta-contact"
          >
            Get In Touch
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.div variants={fadeIn} className="flex gap-5 items-center">
          {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2.5 rounded-xl glass-card text-muted-foreground transition-smooth"
              whileHover={{ scale: 1.12 }}
              data-ocid={`hero-social-${label.toLowerCase()}`}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll-down indicator */}
      <motion.button
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground cursor-pointer bg-transparent border-none"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        onClick={() => scrollToSection("about")}
        aria-label="Scroll down"
        data-ocid="hero-scroll-indicator"
      >
        <span className="text-xs font-mono tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, oklch(var(--background)))",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
