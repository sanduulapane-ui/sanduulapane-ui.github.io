"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce web application with product management, shopping cart, secure checkout, and admin dashboard with order tracking.",
    tags: ["React.js", "Java", "MongoDB", "REST API"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates, drag-and-drop Kanban interface, and team collaboration features.",
    tags: ["React.js", "Python", "SQL", "Tailwind CSS"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description:
      "Real-time weather forecasting dashboard with interactive charts, location search, and 7-day forecast visualization.",
    tags: ["JavaScript", "Tailwind CSS", "REST API"],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Android Fitness Tracker",
    description:
      "A native Android app for tracking workouts, steps, and health metrics with data visualization and goal setting.",
    tags: ["Kotlin", "Android Studio", "SQLite"],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website with advanced animations, particle effects, and a dark-themed UI.",
    tags: ["React.js", "Tailwind CSS", "Framer Motion"],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Chat Application",
    description:
      "Real-time messaging app with user authentication, group chats, media sharing, and typing indicators.",
    tags: ["React.js", "Node.js", "MongoDB", "Socket.io"],
    github: "#",
    demo: "#",
    featured: false,
  },
];

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="relative px-6 py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
              My Work
            </p>
            <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
              Featured{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              A curated selection of projects that showcase my skills across
              different domains and technologies.
            </p>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            View all on GitHub
            <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        {/* Featured projects - larger cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {displayed.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`group glass-card relative flex flex-col overflow-hidden rounded-xl transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 ${
                project.featured ? "md:row-span-1" : ""
              }`}
            >
              {/* Top gradient on hover */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Folder size={20} />
                  </div>
                  <div className="flex gap-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg p-2.5 text-muted-foreground transition-all hover:bg-muted/50 hover:text-foreground"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg p-2.5 text-muted-foreground transition-all hover:bg-muted/50 hover:text-foreground"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <h3 className="mb-3 font-heading text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border/30 bg-muted/30 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Show more */}
        {!showAll && projects.length > 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 flex justify-center"
          >
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="group flex items-center gap-2 rounded-xl border border-border/50 bg-muted/20 px-8 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-muted/40"
            >
              Show More Projects
              <ArrowUpRight size={14} className="transition-transform group-hover:rotate-45" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
