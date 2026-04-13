"use client";

import { type Variants, motion, useMotionValue, useSpring } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

import { ParticleBackground } from "@/components/Perticlebackground";
import { ContactSection } from "@/app/sections/contactsection";
import { LoadingScreen } from "@/components/LoadingScreenElement";
import { TypewriterEffect } from "@/components/TypewriterEffect";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IconCloud } from "@/components/ui/icon-cloud";
import { Tabs } from "@/components/ui/tabs";
import { Timeline } from "@/components/ui/timeline";

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

const InstagramIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const PhoneIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.7 12.7 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.7 12.7 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
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
    href: "https://www.linkedin.com/in/pankaj-sharma-2a427327b/",
  },
  { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com/" },
  { icon: PhoneIcon, label: "WhatsApp", href: "https://wa.me/919653823030" },
  { icon: MailIcon, label: "Email", href: "mailto:pkjsharma987@mail.com" },
];

const SKILL_CLOUD_IMAGES = [
  "https://cdn.simpleicons.org/nextdotjs/ffffff",
  "https://cdn.simpleicons.org/react/61DAFB",
  "https://cdn.simpleicons.org/typescript/3178C6",
  "https://cdn.simpleicons.org/javascript/F7DF1E",
  "https://cdn.simpleicons.org/nodedotjs/339933",
  "https://cdn.simpleicons.org/express/ffffff",
  "https://cdn.simpleicons.org/mongodb/47A248",
  "https://cdn.simpleicons.org/postgresql/4169E1",
  "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  "https://cdn.simpleicons.org/git/F05032",
  "https://cdn.simpleicons.org/github/ffffff",
  "https://cdn.simpleicons.org/firebase/FFCA28",
];

const SKILL_GROUPS = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Mobile and Tools",
    items: ["React Native", "Expo", "Git", "Firebase", "Deployment"],
  },
];

const EXPERIENCE_ITEMS = [
  {
    period: "Present",
    role: "Web Developer",
    organization: "Freelance and Personal Projects",
    highlights: [
      "Building full-stack web applications with modern UI and scalable backend architecture.",
      "Improving performance, accessibility, and responsive behavior for production-ready products.",
      "Designing polished interfaces with animation and component-driven systems.",
    ],
  },
  {
    period: "College Years",
    role: "Software Developer",
    organization: "NIT Jalandhar",
    highlights: [
      "Developed portfolio-grade projects across web, backend, and mobile ecosystems.",
      "Collaborated on problem-solving and engineering workflows in academic teams.",
      "Strengthened fundamentals in data handling, API design, and application structure.",
    ],
  },
];

const PROJECT_GROUPS = {
  fullstack: [
    {
      title: "Portfolio Platform",
      description:
        "A modern portfolio experience with interactive sections, layered motion, and optimized SSR rendering.",
      stack: ["Next.js", "TypeScript", "Tailwind"],
      demo: "#",
      code: "#",
    },
    {
      title: "Campus Connect",
      description:
        "A collaboration app for student communities with event boards, announcements, and role-based access.",
      stack: ["React", "Node.js", "MongoDB"],
      demo: "#",
      code: "#",
    },
  ],
  mobile: [
    {
      title: "FitTrack Mobile",
      description:
        "A React Native tracker for workouts and daily goals with lightweight analytics and smooth sync.",
      stack: ["React Native", "Expo", "Firebase"],
      demo: "#",
      code: "#",
    },
    {
      title: "QuickNotes",
      description:
        "Offline-first notes app with smart categorization, instant search, and clean productivity UI.",
      stack: ["React Native", "SQLite", "TypeScript"],
      demo: "#",
      code: "#",
    },
  ],
  backend: [
    {
      title: "API Gateway Service",
      description:
        "Scalable REST gateway with JWT auth, request throttling, and centralized audit logging.",
      stack: ["Node.js", "Express", "Redis"],
      demo: "#",
      code: "#",
    },
    {
      title: "Realtime Notification Engine",
      description:
        "Event-driven notification system handling email and push pipelines with queue-based workers.",
      stack: ["Node.js", "RabbitMQ", "PostgreSQL"],
      demo: "#",
      code: "#",
    },
  ],
};

type ProjectCardType = {
  title: string;
  description: string;
  stack: string[];
  demo: string;
  code: string;
};

type ProjectCategory = keyof typeof PROJECT_GROUPS;

type SectionVisibility = {
  highlights: boolean;
  projects: boolean;
  business: boolean;
  skills: boolean;
  experience: boolean;
  timeline: boolean;
  contact: boolean;
};

const DEFAULT_VISIBILITY: SectionVisibility = {
  highlights: true,
  projects: true,
  business: true,
  skills: true,
  experience: true,
  timeline: true,
  contact: true,
};

const PROJECT_STORAGE_KEY = "portfolio-project-groups";
const SECTION_STORAGE_KEY = "portfolio-section-visibility";

type CertificateItem = {
  title: string;
  issuer: string;
  year: string;
  summary: string;
};

function ProjectGrid({ projects }: { projects: ProjectCardType[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {projects.map((project) => (
        <article
          key={project.title}
          className="rounded-2xl border border-border bg-card/85 backdrop-blur-md p-5 text-left"
        >
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.stack.map((item) => (
              <span
                key={item}
                className="px-2.5 py-1 rounded-full text-[11px] font-mono border border-border bg-muted/60 text-foreground"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <Button asChild size="sm" className="rounded-lg">
              <a href={project.demo}>Live Demo</a>
            </Button>
            <Button asChild size="sm" variant="outline" className="rounded-lg">
              <a href={project.code}>Source Code</a>
            </Button>
          </div>
        </article>
      ))}
    </div>
  );
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    return;
  }
  window.location.href = `/#${id}`;
}

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const tapCountRef = useRef(0);
  const tapTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCertificate, setActiveCertificate] = useState<CertificateItem | null>(null);
  const [isControlOpen, setIsControlOpen] = useState(false);
  const [projectGroups, setProjectGroups] = useState<typeof PROJECT_GROUPS>(() => {
    if (typeof window === "undefined") return PROJECT_GROUPS;
    try {
      const savedProjects = localStorage.getItem(PROJECT_STORAGE_KEY);
      return savedProjects
        ? (JSON.parse(savedProjects) as typeof PROJECT_GROUPS)
        : PROJECT_GROUPS;
    } catch {
      return PROJECT_GROUPS;
    }
  });
  const [sectionVisibility, setSectionVisibility] = useState<SectionVisibility>(() => {
    if (typeof window === "undefined") return DEFAULT_VISIBILITY;
    try {
      const savedVisibility = localStorage.getItem(SECTION_STORAGE_KEY);
      if (!savedVisibility) return DEFAULT_VISIBILITY;
      const parsed = JSON.parse(savedVisibility) as Partial<SectionVisibility>;
      return {
        ...DEFAULT_VISIBILITY,
        ...parsed,
        business: true,
      };
    } catch {
      return DEFAULT_VISIBILITY;
    }
  });
  const [projectDraft, setProjectDraft] = useState({
    category: "fullstack" as ProjectCategory,
    title: "",
    description: "",
    stack: "",
    demo: "#",
    code: "#",
  });

  const allProjects = [
    ...projectGroups.fullstack,
    ...projectGroups.mobile,
    ...projectGroups.backend,
  ];
  const projectTabs = [
    {
      title: `All (${allProjects.length})`,
      value: "all",
      content: <ProjectGrid projects={allProjects} />,
    },
    {
      title: `Full Stack (${projectGroups.fullstack.length})`,
      value: "fullstack",
      content: <ProjectGrid projects={projectGroups.fullstack} />,
    },
    {
      title: `Mobile (${projectGroups.mobile.length})`,
      value: "mobile",
      content: <ProjectGrid projects={projectGroups.mobile} />,
    },
    {
      title: `Backend (${projectGroups.backend.length})`,
      value: "backend",
      content: <ProjectGrid projects={projectGroups.backend} />,
    },
  ];

  useEffect(() => {
    localStorage.setItem(PROJECT_STORAGE_KEY, JSON.stringify(projectGroups));
  }, [projectGroups]);

  useEffect(() => {
    localStorage.setItem(SECTION_STORAGE_KEY, JSON.stringify(sectionVisibility));
  }, [sectionVisibility]);

  function addCustomProject() {
    const title = projectDraft.title.trim();
    const description = projectDraft.description.trim();
    if (!title || !description) return;

    const parsedStack = projectDraft.stack
      .split(",")
      .map((part) => part.trim())
      .filter(Boolean);

    setProjectGroups((prev: typeof PROJECT_GROUPS) => ({
      ...prev,
      [projectDraft.category]: [
        {
          title,
          description,
          stack: parsedStack.length ? parsedStack : ["Web"],
          demo: projectDraft.demo.trim() || "#",
          code: projectDraft.code.trim() || "#",
        },
        ...prev[projectDraft.category],
      ],
    }));

    setProjectDraft((prev) => ({
      ...prev,
      title: "",
      description: "",
      stack: "",
      demo: "#",
      code: "#",
    }));
  }

  function removeProject(category: ProjectCategory, index: number) {
    setProjectGroups((prev: typeof PROJECT_GROUPS) => ({
      ...prev,
      [category]: prev[category].filter((_, i) => i !== index),
    }));
  }

  function handleBrandTap() {
    scrollToSection("hero");

    tapCountRef.current += 1;
    if (tapTimerRef.current) clearTimeout(tapTimerRef.current);

    tapTimerRef.current = setTimeout(() => {
      tapCountRef.current = 0;
    }, 450);

    if (tapCountRef.current >= 3) {
      setIsControlOpen(true);
      tapCountRef.current = 0;
      if (tapTimerRef.current) clearTimeout(tapTimerRef.current);
    }
  }

  const timelineData = [
    {
      title: "Up to Class 10",
      content: (
        <div className="rounded-2xl border border-border bg-card/85 p-5 md:p-6">
          <p className="text-lg font-semibold text-foreground">Cambridge Public School</p>
          <p className="mt-1 text-sm text-muted-foreground">Completed schooling up to Class 10 with a strong base in math and science.</p>
          <Button
            size="sm"
            className="mt-4"
            onClick={() =>
              setActiveCertificate({
                title: "Secondary School Certificate",
                issuer: "Cambridge Public School",
                year: "Class 10",
                summary: "Official record for completion of secondary education up to Class 10.",
              })
            }
          >
            View Certificate
          </Button>
        </div>
      ),
    },
    {
      title: "Class 11-12",
      content: (
        <div className="rounded-2xl border border-border bg-card/85 p-5 md:p-6">
          <p className="text-lg font-semibold text-foreground">Anvjeen Science School, Sikar</p>
          <p className="mt-1 text-sm text-muted-foreground">Completed senior secondary education (Class 11 and 12) focused on science.</p>
          <Button
            size="sm"
            className="mt-4"
            onClick={() =>
              setActiveCertificate({
                title: "Senior Secondary Certificate",
                issuer: "Anvjeen Science School, Sikar",
                year: "Class 12",
                summary: "Official record of senior secondary completion with science stream.",
              })
            }
          >
            View Certificate
          </Button>
        </div>
      ),
    },
    {
      title: "College",
      content: (
        <div className="rounded-2xl border border-border bg-card/85 p-5 md:p-6">
          <p className="text-lg font-semibold text-foreground">NIT Jalandhar</p>
          <p className="mt-1 text-sm text-muted-foreground">Engineering journey at NIT Jalandhar with practical software development projects.</p>
          <Button
            size="sm"
            className="mt-4"
            onClick={() =>
              setActiveCertificate({
                title: "College Academic Certificate",
                issuer: "NIT Jalandhar",
                year: "Undergraduate",
                summary: "Academic milestone document from National Institute of Technology, Jalandhar.",
              })
            }
          >
            View Certificate
          </Button>
        </div>
      ),
    },
    {
      title: "Current",
      content: (
        <div className="rounded-2xl border border-border bg-card/85 p-5 md:p-6">
          <p className="text-lg font-semibold text-foreground">Web Developer</p>
          <p className="mt-1 text-sm text-muted-foreground">Continuing as a web developer, building modern full-stack products and UI systems.</p>
          <Button
            size="sm"
            className="mt-4"
            onClick={() =>
              setActiveCertificate({
                title: "Professional Development Certificate",
                issuer: "Web Development Track",
                year: "Ongoing",
                summary: "Current upskilling and professional growth in modern web development.",
              })
            }
          >
            View Certificate
          </Button>
        </div>
      ),
    },
  ];

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

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    return () => {
      if (tapTimerRef.current) clearTimeout(tapTimerRef.current);
    };
  }, []);

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
    <>
      <LoadingScreen isVisible={isLoading} />

      <header className="fixed top-0 left-0 right-0 z-110 px-4 sm:px-6 pt-4">
        <nav className="max-w-6xl mx-auto rounded-2xl border border-border/60 bg-background/70 backdrop-blur-xl px-4 py-3 flex items-center justify-between">
          <button
            type="button"
            onClick={handleBrandTap}
            className="flex items-center gap-2.5"
            aria-label="Go to top"
          >
            <span className="h-9 w-9 rounded-xl border border-border bg-card flex items-center justify-center font-display font-bold text-sm text-foreground">
              PS
            </span>
            <span className="hidden sm:block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Pankaj Sharma
            </span>
          </button>

          <div className="flex items-center gap-2 overflow-x-auto no-visible-scrollbar max-w-[70vw] sm:max-w-none">
            {sectionVisibility.projects && (
              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="inline-flex px-3 py-2 rounded-lg text-xs font-mono text-muted-foreground border border-border bg-card/80 hover:bg-accent hover:text-accent-foreground whitespace-nowrap"
              >
                Projects
              </button>
            )}
            {sectionVisibility.skills && (
              <button
                type="button"
                onClick={() => scrollToSection("skills")}
                className="inline-flex px-3 py-2 rounded-lg text-xs font-mono text-muted-foreground border border-border bg-card/80 hover:bg-accent hover:text-accent-foreground whitespace-nowrap"
              >
                Skills
              </button>
            )}
            <a
              href="/pankaj-web-solution"
              className="inline-flex px-3 py-2 rounded-lg text-xs font-mono text-muted-foreground border border-border bg-card/80 hover:bg-accent hover:text-accent-foreground whitespace-nowrap"
            >
              Web Solution
            </a>
            {sectionVisibility.timeline && (
              <button
                type="button"
                onClick={() => scrollToSection("timeline")}
                className="inline-flex px-3 py-2 rounded-lg text-xs font-mono text-muted-foreground border border-border bg-card/80 hover:bg-accent hover:text-accent-foreground whitespace-nowrap"
              >
                Timeline
              </button>
            )}
            {sectionVisibility.contact && (
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="inline-flex px-3 py-2 rounded-lg text-xs font-mono text-muted-foreground border border-border bg-card/80 hover:bg-accent hover:text-accent-foreground whitespace-nowrap"
              >
                Contact
              </button>
            )}
            <AnimatedThemeToggler className="h-9 w-9 rounded-xl border border-border bg-card text-foreground flex items-center justify-center hover:bg-accent" />
          </div>
        </nav>
      </header>

      <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-gradient pt-24 scroll-mt-24"
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
              className="p-2.5 rounded-xl border border-border bg-card/80 text-foreground shadow-sm transition-smooth"
              whileHover={{ scale: 1.12 }}
              data-ocid={`hero-social-${label.toLowerCase()}`}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

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

      {sectionVisibility.projects && (
        <section
        id="projects"
        className="relative px-6 py-24 md:py-28 bg-background scroll-mt-24"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, oklch(0.28 0.01 264 / 0.35), transparent 68%)",
          }}
          aria-hidden="true"
        />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <Badge
              className="px-4 py-1.5 text-xs font-mono tracking-widest uppercase mb-4"
              style={{
                background: "oklch(0.80 0.004 264 / 0.10)",
                border: "1px solid oklch(0.80 0.004 264 / 0.25)",
                color: "oklch(0.80 0.004 264)",
              }}
            >
              Featured Build Work
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-3">
              Projects
            </h2>
            <p className="text-sm md:text-base text-muted-foreground font-mono">
              Browse my work by category using tabs: full stack, mobile, and backend.
            </p>
          </div>

          <Tabs tabs={projectTabs} />
        </div>
        </section>
      )}

      {sectionVisibility.skills && (
        <section id="skills" className="relative px-6 py-24 md:py-28 bg-background">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 25% 10%, oklch(0.30 0.01 264 / 0.28), transparent 68%)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <Badge
              className="px-4 py-1.5 text-xs font-mono tracking-widest uppercase mb-4"
              style={{
                background: "oklch(0.80 0.004 264 / 0.10)",
                border: "1px solid oklch(0.80 0.004 264 / 0.25)",
                color: "oklch(0.80 0.004 264)",
              }}
            >
              Skills and Stack
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-3">Skills</h2>
            <p className="text-sm md:text-base text-muted-foreground font-mono">
              Technologies I use to design, build, and ship web products.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              {SKILL_GROUPS.map((group) => (
                <article key={group.title} className="rounded-2xl border border-border bg-card/85 p-5 md:p-6">
                  <h3 className="text-lg font-semibold mb-3">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-full text-[11px] font-mono border border-border bg-muted/60 text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="rounded-3xl border border-border bg-muted/55 p-4 sm:p-6 flex items-center justify-center min-h-90">
              <IconCloud images={SKILL_CLOUD_IMAGES} />
            </div>
          </div>
        </div>
        </section>
      )}

      {sectionVisibility.experience && (
        <section id="experience" className="relative px-6 py-24 md:py-28 bg-background scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <Badge
              className="px-4 py-1.5 text-xs font-mono tracking-widest uppercase mb-4"
              style={{
                background: "oklch(0.80 0.004 264 / 0.10)",
                border: "1px solid oklch(0.80 0.004 264 / 0.25)",
                color: "oklch(0.80 0.004 264)",
              }}
            >
              Professional Story
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-3">Experience</h2>
            <p className="text-sm md:text-base text-muted-foreground font-mono">
              My current focus and practical development experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {EXPERIENCE_ITEMS.map((item) => (
              <article key={item.role} className="rounded-2xl border border-border bg-card/85 p-5 md:p-6">
                <p className="text-xs font-mono tracking-wider uppercase text-muted-foreground mb-2">{item.period}</p>
                <h3 className="text-xl font-semibold">{item.role}</h3>
                <p className="text-sm text-muted-foreground mt-1 mb-4">{item.organization}</p>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                  {item.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
        </section>
      )}

      {sectionVisibility.timeline && (
        <section id="timeline" className="relative px-4 md:px-6 py-20 bg-background scroll-mt-24">
        <div className="max-w-6xl mx-auto mb-10 text-center">
          <Badge
            className="px-4 py-1.5 text-xs font-mono tracking-widest uppercase mb-4"
            style={{
              background: "oklch(0.80 0.004 264 / 0.10)",
              border: "1px solid oklch(0.80 0.004 264 / 0.25)",
              color: "oklch(0.80 0.004 264)",
            }}
          >
            Education and Career
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-3">Timeline</h2>
          <p className="text-sm md:text-base text-muted-foreground font-mono">
            From school to NIT Jalandhar and ongoing web development work.
          </p>
        </div>
        <div className="rounded-3xl border border-border overflow-hidden bg-card/85">
          <Timeline data={timelineData} />
        </div>
        </section>
      )}

      {sectionVisibility.contact && <ContactSection />}

      {sectionVisibility.business && (
        <section id="business-teaser" className="relative px-6 py-18 md:py-22 bg-background scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-3xl border border-border bg-card/85 p-6 md:p-8">
              <div className="grid gap-5 md:grid-cols-[1.25fr_1fr] md:items-center">
                <div>
                  <Badge className="px-4 py-1.5 text-xs font-mono tracking-widest uppercase mb-3">
                    About Pankaj Web Solution
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-2">
                    Business Services Inside Portfolio
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground mb-5">
                    This portfolio now includes my complete business website offering: strategy, timeline,
                    pricing breakdown, and previous client work in one place.
                  </p>
                  <Button asChild className="rounded-xl px-6 py-3 text-sm font-semibold">
                    <a href="/pankaj-web-solution">Visit Our Website</a>
                  </Button>
                </div>

                <div className="overflow-hidden rounded-2xl border border-border">
                  <Image
                    src="/business/hero-website.svg"
                    alt="Pankaj Web Solution business preview"
                    width={800}
                    height={520}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {isControlOpen && (
        <div className="fixed inset-0 z-120 bg-black/60 p-4 flex items-center justify-center">
          <div className="w-full max-w-xl rounded-2xl border border-border bg-card p-5 md:p-6 max-h-[88vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Secret Portfolio Controls</h3>
              <button
                type="button"
                className="h-8 w-8 rounded-md border border-border text-muted-foreground hover:text-foreground"
                onClick={() => setIsControlOpen(false)}
                aria-label="Close controls"
              >
                X
              </button>
            </div>

            <div className="space-y-3 mb-6">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Toggle sections</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {Object.entries(sectionVisibility).map(([key, value]) => (
                  <label key={key} className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2">
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={(e) =>
                        setSectionVisibility((prev) => ({
                          ...prev,
                          [key]: e.target.checked,
                        }))
                      }
                    />
                    <span className="capitalize">{key}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Manage projects</p>
              <div className="space-y-2">
                {(Object.keys(projectGroups) as ProjectCategory[]).map((category) => (
                  <div key={category} className="rounded-lg border border-border bg-background p-3">
                    <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                      {category}
                    </p>
                    <div className="space-y-1.5 max-h-32 overflow-y-auto pr-1">
                      {projectGroups[category].map((project, index) => (
                        <div key={`${category}-${project.title}-${index}`} className="flex items-center justify-between gap-2 rounded-md bg-card px-2 py-1.5 text-sm">
                          <span className="truncate">{project.title}</span>
                          <button
                            type="button"
                            className="text-xs text-muted-foreground hover:text-destructive"
                            onClick={() => removeProject(category, index)}
                          >
                            Delete
                          </button>
                        </div>
                      ))}
                      {projectGroups[category].length === 0 && (
                        <p className="text-xs text-muted-foreground">No projects</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Add project</p>
              <select
                className="w-full h-10 rounded-lg border border-border bg-background px-3 text-sm"
                value={projectDraft.category}
                onChange={(e) =>
                  setProjectDraft((prev) => ({
                    ...prev,
                    category: e.target.value as ProjectCategory,
                  }))
                }
              >
                <option value="fullstack">Full Stack</option>
                <option value="mobile">Mobile</option>
                <option value="backend">Backend</option>
              </select>
              <input
                className="w-full h-10 rounded-lg border border-border bg-background px-3 text-sm"
                placeholder="Project title"
                value={projectDraft.title}
                onChange={(e) => setProjectDraft((prev) => ({ ...prev, title: e.target.value }))}
              />
              <textarea
                className="w-full min-h-20 rounded-lg border border-border bg-background px-3 py-2 text-sm"
                placeholder="Project description"
                value={projectDraft.description}
                onChange={(e) =>
                  setProjectDraft((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
              />
              <input
                className="w-full h-10 rounded-lg border border-border bg-background px-3 text-sm"
                placeholder="Stack (comma separated)"
                value={projectDraft.stack}
                onChange={(e) => setProjectDraft((prev) => ({ ...prev, stack: e.target.value }))}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <input
                  className="w-full h-10 rounded-lg border border-border bg-background px-3 text-sm"
                  placeholder="Demo URL"
                  value={projectDraft.demo}
                  onChange={(e) => setProjectDraft((prev) => ({ ...prev, demo: e.target.value }))}
                />
                <input
                  className="w-full h-10 rounded-lg border border-border bg-background px-3 text-sm"
                  placeholder="Source URL"
                  value={projectDraft.code}
                  onChange={(e) => setProjectDraft((prev) => ({ ...prev, code: e.target.value }))}
                />
              </div>

              <div className="flex items-center justify-between gap-2 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setProjectGroups(PROJECT_GROUPS);
                    setSectionVisibility(DEFAULT_VISIBILITY);
                    localStorage.removeItem(PROJECT_STORAGE_KEY);
                    localStorage.removeItem(SECTION_STORAGE_KEY);
                  }}
                >
                  Reset
                </Button>
                <Button type="button" onClick={addCustomProject}>
                  Add Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeCertificate && (
        <div className="fixed inset-0 z-120 flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-lg font-semibold text-foreground">{activeCertificate.title}</p>
                <p className="text-sm text-muted-foreground mt-1">{activeCertificate.issuer} · {activeCertificate.year}</p>
              </div>
              <button
                type="button"
                className="h-8 w-8 rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-ring"
                onClick={() => setActiveCertificate(null)}
                aria-label="Close certificate"
              >
                X
              </button>
            </div>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{activeCertificate.summary}</p>
            <div className="mt-5 flex justify-end">
              <Button size="sm" onClick={() => setActiveCertificate(null)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
