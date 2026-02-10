"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  GraduationCap,
  Code2,
  BookOpen,
  Sparkles,
  Target,
  Lightbulb,
} from "lucide-react";
import { useRef } from "react";

const stats = [
  { label: "Technologies", value: "15+" },
  { label: "Projects Built", value: "10+" },
  { label: "Years Coding", value: "3+" },
  { label: "Certifications", value: "5+" },
];

const highlights = [
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "I focus on delivering measurable results with clean, efficient code.",
  },
  {
    icon: Lightbulb,
    title: "Creative Thinker",
    description: "I approach problems from unique angles to find innovative solutions.",
  },
  {
    icon: Sparkles,
    title: "Detail-Driven",
    description: "Every pixel, every line of code is crafted with precision and care.",
  },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="about" ref={sectionRef} className="relative px-6 py-32 lg:py-40">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
            Who I Am
          </p>
          <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </motion.div>

        {/* Main content: Photo + Bio */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Photo with decorative frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Decorative corner brackets */}
              <div className="absolute -left-4 -top-4 h-16 w-16 border-l-2 border-t-2 border-primary/40" />
              <div className="absolute -bottom-4 -right-4 h-16 w-16 border-b-2 border-r-2 border-secondary/40" />

              {/* Glow */}
              <div className="absolute -inset-6 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl" />

              {/* Photo */}
              <div className="relative h-80 w-72 overflow-hidden rounded-2xl border border-border/50 shadow-2xl sm:h-96 sm:w-80">
                <img
                  src="/images/red-20prof.jpeg"
                  alt="Sanduli Ulapane - Software Engineer"
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 glass-card rounded-xl px-5 py-3 shadow-xl"
              >
                <p className="text-2xl font-bold text-foreground">3+</p>
                <p className="text-xs text-muted-foreground">Years of Coding</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Bio content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-heading text-2xl font-bold text-foreground">
              {"A passionate "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Software Engineer
              </span>
              {" based in Sri Lanka"}
            </h3>
            <div className="mt-6 space-y-4">
              <p className="text-base leading-relaxed text-muted-foreground">
                {
                  "I'm Sanduli Ulapane, an aspiring Software Engineer with a deep passion for building efficient, elegant, and impactful software. I thrive at the intersection of creativity and logic, turning complex problems into simple, beautiful solutions."
                }
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                {
                  "Currently pursuing a dual education path at Birmingham City University and the Java Institute for Advanced Technology, I bring a unique perspective that combines internationally recognized standards with hands-on technical expertise."
                }
              </p>
            </div>

            {/* Highlight cards */}
            <div className="mt-8 flex flex-col gap-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="group flex items-start gap-4 rounded-xl border border-border/30 bg-muted/20 p-4 transition-all hover:border-primary/30 hover:bg-muted/40"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <h.icon size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{h.title}</h4>
                    <p className="mt-0.5 text-xs text-muted-foreground">{h.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="glass-card group rounded-xl px-6 py-6 text-center transition-all hover:border-primary/30"
            >
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                className="font-heading text-3xl font-bold text-foreground"
              >
                {stat.value}
              </motion.p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Education timeline */}
        <div className="mt-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center font-heading text-2xl font-bold text-foreground"
          >
            Education
          </motion.h3>

          <div className="relative">
            {/* Animated vertical line */}
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border/30 md:block">
              <motion.div
                style={{ height: lineHeight }}
                className="w-full bg-gradient-to-b from-primary to-secondary"
              />
            </div>

            <div className="flex flex-col gap-8 md:gap-12">
              {[
                {
                  icon: GraduationCap,
                  school: "Birmingham City University",
                  degree: "BSc (Hons) in Software Engineering",
                  desc: "Pursuing an internationally recognized degree with focus on modern software engineering principles, agile methodologies, and industry best practices.",
                  side: "left" as const,
                },
                {
                  icon: BookOpen,
                  school: "Java Institute for Advanced Technology",
                  degree: "Diploma in Software Engineering",
                  desc: "Deepening expertise in advanced technology, Java ecosystems, and software development methodologies with hands-on project experience.",
                  side: "right" as const,
                },
                {
                  icon: Code2,
                  school: "Self-Directed Learning",
                  degree: "Continuous Growth & Open Source",
                  desc: "Constantly exploring new technologies, contributing to projects, and sharpening skills through real-world challenges and online platforms.",
                  side: "left" as const,
                },
              ].map((edu, i) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className={`relative flex flex-col gap-4 md:flex-row md:gap-0 ${
                    edu.side === "right" ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Card */}
                  <div className={`glass-card group w-full rounded-xl p-6 transition-all hover:border-primary/30 md:w-[calc(50%-32px)] ${edu.side === "left" ? "md:mr-auto" : "md:ml-auto"}`}>
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <edu.icon size={18} />
                      </div>
                      <div>
                        <h4 className="font-heading text-sm font-semibold text-foreground">
                          {edu.school}
                        </h4>
                        <p className="text-xs text-primary">{edu.degree}</p>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {edu.desc}
                    </p>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 top-6 hidden h-4 w-4 -translate-x-1/2 items-center justify-center md:flex">
                    <div className="h-3 w-3 rounded-full border-2 border-primary bg-background" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
