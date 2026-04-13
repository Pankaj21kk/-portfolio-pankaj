"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const MailIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.7 12.7 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.7 12.7 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const LinkedinIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.814 0-9.752h3.554v1.381c.43-.664 1.199-1.608 2.925-1.608 2.136 0 3.74 1.398 3.74 4.402v5.577zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.968.771-1.71 1.954-1.71 1.182 0 1.915.742 1.933 1.71 0 .951-.75 1.71-1.972 1.71zm1.676 11.597h-3.354v-9.752h3.354v9.752zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

const InstagramIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const GithubIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const CONTACT_LINKS = [
  { icon: MailIcon, label: "Email", href: "mailto:pkjsharma987@mail.com" },
  { icon: PhoneIcon, label: "WhatsApp", href: "https://wa.me/919653823030" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/pankaj-sharma-2a427327b/" },
  { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com/" },
  { icon: GithubIcon, label: "GitHub", href: "https://github.com/pankajsharma" },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative px-6 py-24 md:py-28 bg-background">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 75% 10%, oklch(0.30 0.01 264 / 0.2), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border bg-card/85 p-6 md:p-8"
        >
          <Badge className="px-4 py-1.5 text-xs font-mono tracking-widest uppercase mb-4">
            Let&apos;s Build Together
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-3 text-foreground">
            Contact
          </h2>
          <p className="text-sm md:text-base text-muted-foreground font-mono mb-6">
            Have an idea, role, or collaboration in mind? Send me a message and I will get back soon.
          </p>

          <div className="space-y-3">
            {CONTACT_LINKS.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center rounded-xl border border-border bg-muted/45 px-4 py-3 hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    <Icon size={16} />
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="rounded-2xl border border-border bg-card/85 p-6 md:p-8 flex flex-col"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2" htmlFor="contact-name">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            className="h-11 rounded-lg border border-border bg-background px-3 text-sm text-foreground mb-4 outline-none focus:ring-2 focus:ring-ring"
            placeholder="Your name"
          />

          <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2" htmlFor="contact-email">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            className="h-11 rounded-lg border border-border bg-background px-3 text-sm text-foreground mb-4 outline-none focus:ring-2 focus:ring-ring"
            placeholder="your@email.com"
          />

          <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2" htmlFor="contact-message">
            Message
          </label>
          <textarea
            id="contact-message"
            className="min-h-32 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground mb-5 outline-none focus:ring-2 focus:ring-ring"
            placeholder="Tell me about your project"
          />

          <Button type="submit" className="mt-auto h-11 rounded-xl font-semibold">
            Send Message
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
