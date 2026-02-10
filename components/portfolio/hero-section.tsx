"use client";

import React from "react"

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Download } from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
  "Software Engineer",
  "Full-Stack Developer",
  "UI/UX Enthusiast",
  "Problem Solver",
];

function TypewriterText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (charIndex < current.length) {
            setCharIndex((c) => c + 1);
          } else {
            setTimeout(() => setDeleting(true), 2000);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex((c) => c - 1);
          } else {
            setDeleting(false);
            setRoleIndex((r) => (r + 1) % roles.length);
          }
        }
      },
      deleting ? 40 : 80,
    );
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
      {roles[roleIndex].slice(0, charIndex)}
      <span className="animate-glow-pulse text-primary">|</span>
    </span>
  );
}

function StatusBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/30 px-4 py-1.5 backdrop-blur-sm"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      <span className="text-xs font-medium text-muted-foreground">
        Open to Opportunities
      </span>
    </motion.div>
  );
}

export function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  const handleMouse = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + i * 0.04, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  const name = "Sanduli Ulapane";

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
      onMouseMove={handleMouse}
    >
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[150px]" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-secondary/15 blur-[150px]" />
        <div className="absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-16 lg:flex-row lg:gap-24">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <StatusBadge />

          {/* Name with letter-by-letter animation */}
          <div className="mt-6">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-2 text-sm font-medium tracking-widest text-muted-foreground uppercase"
            >
              {"Hello, I'm"}
            </motion.p>
            <h1 className="font-heading text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
              {name.split("").map((char, i) => (
                <motion.span
                  key={`${char}-${i}`}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block text-foreground"
                  style={{ whiteSpace: char === " " ? "pre" : undefined }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-4 font-heading text-2xl font-semibold sm:text-3xl"
          >
            <TypewriterText />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground lg:mx-0"
          >
            Undergraduate pursuing BSc (Hons) at Birmingham City University.
            I craft clean, scalable software that bridges creativity and
            engineering precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href="#contact"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-secondary px-8 py-3.5 font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
            >
              <span className="relative z-10">{"Let's Talk"}</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-secondary to-primary transition-transform duration-500 group-hover:translate-x-0" />
              <span className="relative z-10 sr-only">Jump to contact section</span>
            </a>
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-xl border border-border/50 bg-muted/20 px-8 py-3.5 font-medium text-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-muted/40"
            >
              View Work
              <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#"
              className="flex items-center gap-2 rounded-xl border border-border/50 bg-muted/20 px-6 py-3.5 font-medium text-foreground backdrop-blur-sm transition-all hover:border-secondary/40 hover:bg-muted/40"
            >
              <Download size={16} />
              Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-10 flex items-center justify-center gap-3 lg:justify-start"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-border/50 bg-muted/20 p-2.5 text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-muted/40 hover:text-foreground"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-border/50 bg-muted/20 p-2.5 text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-muted/40 hover:text-foreground"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <div className="ml-2 h-4 w-px bg-border/50" />
            <span className="text-xs text-muted-foreground/60">
              infosanduulapane@gmail.com
            </span>
          </motion.div>
        </div>

        {/* 3D Tilt Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ perspective: 1000 }}
          className="relative flex-shrink-0"
        >
          <motion.div
            style={{ rotateX, rotateY }}
            className="relative"
          >
            {/* Animated ring */}
            <div className="absolute -inset-6 animate-spin-slow rounded-full border border-dashed border-primary/20" />
            <div className="absolute -inset-12 animate-spin-slow rounded-full border border-dashed border-secondary/10" style={{ animationDirection: "reverse", animationDuration: "30s" }} />

            {/* Glow */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl" />

            {/* Photo */}
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-2 border-primary/20 shadow-2xl shadow-primary/20 sm:h-80 sm:w-80">
              <img
                src="/images/red-20prof.jpeg"
                alt="Sanduli Ulapane"
                className="h-full w-full object-cover object-top"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-8 rounded-lg border border-border/50 bg-card/80 px-3 py-1.5 text-xs font-medium text-foreground shadow-lg backdrop-blur-xl"
            >
              React.js
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -left-4 bottom-16 rounded-lg border border-border/50 bg-card/80 px-3 py-1.5 text-xs font-medium text-foreground shadow-lg backdrop-blur-xl"
            >
              Java
            </motion.div>
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-2 right-12 rounded-lg border border-border/50 bg-card/80 px-3 py-1.5 text-xs font-medium text-foreground shadow-lg backdrop-blur-xl"
            >
              Python
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="group flex flex-col items-center gap-2 text-muted-foreground/60 transition-colors hover:text-foreground"
          aria-label="Scroll to about section"
        >
          <span className="text-[10px] font-medium tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
