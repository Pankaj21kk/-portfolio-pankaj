import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { motion } from "framer-motion";

const RING_SIZES = [120, 240, 360, 480, 600, 720] as const;

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-background overflow-hidden relative"
      data-ocid="not-found-page"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.62 0.23 200 / 0.07), transparent)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-20"
        style={{ background: "oklch(0.55 0.24 315 / 0.4)" }}
      />

      <div className="relative z-10 text-center px-6 max-w-xl mx-auto">
        {/* Glitch 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 select-none"
        >
          <div className="relative inline-block">
            {/* Shadow layers for glitch */}
            <span
              aria-hidden="true"
              className="absolute inset-0 font-display font-black text-[clamp(6rem,20vw,12rem)] leading-none"
              style={{
                color: "oklch(0.62 0.23 200 / 0.4)",
                transform: "translate(-3px, 0)",
                filter: "blur(1px)",
              }}
            >
              404
            </span>
            <span
              aria-hidden="true"
              className="absolute inset-0 font-display font-black text-[clamp(6rem,20vw,12rem)] leading-none"
              style={{
                color: "oklch(0.55 0.24 315 / 0.4)",
                transform: "translate(3px, 0)",
                filter: "blur(1px)",
              }}
            >
              404
            </span>
            <span
              className="relative font-display font-black text-[clamp(6rem,20vw,12rem)] leading-none"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.62 0.23 200), oklch(0.55 0.24 315))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "none",
              }}
            >
              404
            </span>
          </div>

          {/* Glitch scan line animation */}
          <motion.div
            className="absolute left-0 right-0 h-0.5 pointer-events-none"
            style={{ background: "oklch(0.62 0.23 200 / 0.6)", top: "30%" }}
            animate={{ top: ["0%", "100%", "0%"], opacity: [0, 0.7, 0] }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* CSS grid / circuit decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute inset-0 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          {RING_SIZES.map((size) => (
            <div
              key={size}
              className="absolute rounded-full border border-primary/10"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                opacity: 1 - RING_SIZES.indexOf(size) * 0.15,
              }}
            />
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="relative space-y-4 mb-10"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-xs mb-2"
            style={{
              background: "oklch(0.62 0.23 200 / 0.1)",
              border: "1px solid oklch(0.62 0.23 200 / 0.25)",
              color: "oklch(0.62 0.23 200)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "oklch(0.62 0.23 200)" }}
            />
            ERROR_CODE: PAGE_NOT_FOUND
          </div>

          <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight">
            Lost in the{" "}
            <span className="text-gradient-primary">digital void</span>
          </h1>

          <p className="text-muted-foreground font-body text-base max-w-sm mx-auto leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist, was moved, or got
            swallowed by a recursive function.
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link href="/">
            <Button
              className="gap-2 font-display px-6 group"
              data-ocid="not-found-home-cta"
            >
              <Home
                size={15}
                className="group-hover:-translate-y-0.5 transition-transform duration-200"
              />
              Back to Home
            </Button>
          </Link>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-5 py-2 rounded-lg font-body text-sm text-muted-foreground hover:text-foreground transition-smooth border border-border/30 hover:border-border/60"
            data-ocid="not-found-back-btn"
          >
            <ArrowLeft size={14} />
            Go Back
          </button>
        </motion.div>

        {/* Terminal-style hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 font-mono text-xs text-muted-foreground"
        >
          <span style={{ color: "oklch(0.62 0.23 200 / 0.6)" }}>
            ~/portfolio
          </span>
          <span className="text-muted-foreground/40"> $ </span>
          <span>cd /</span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            className="inline-block w-1.5 h-3.5 ml-0.5 align-middle"
            style={{ background: "oklch(0.62 0.23 200)" }}
          />
        </motion.div>
      </div>
    </div>
  );
}
