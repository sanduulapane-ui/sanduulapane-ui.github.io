"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Smartphone,
  Wrench,
  Users,
} from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend Development",
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    ],
  },
  {
    icon: Server,
    title: "Backend Development",
    color: "from-primary to-violet-500",
    skills: [
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    ],
  },
  {
    icon: Database,
    title: "Database Management",
    color: "from-emerald-500 to-teal-400",
    skills: [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    color: "from-orange-500 to-amber-400",
    skills: [
      { name: "Android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
      { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & DevOps",
    color: "from-secondary to-blue-400",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "IntelliJ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "NPM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
    ],
  },
  {
    icon: Users,
    title: "Soft Skills",
    color: "from-pink-500 to-rose-400",
    skills: [
      { name: "Problem Solving", icon: "" },
      { name: "Agile / Scrum", icon: "" },
      { name: "Documentation", icon: "" },
      { name: "Team Work", icon: "" },
    ],
  },
];

// Marquee row for skill icons
function SkillMarquee() {
  const allSkillsWithIcons = skillCategories
    .flatMap((c) => c.skills)
    .filter((s) => s.icon);

  const doubled = [...allSkillsWithIcons, ...allSkillsWithIcons];

  return (
    <div className="relative mb-20 overflow-hidden">
      <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />
      <div className="flex animate-marquee items-center gap-12">
        {doubled.map((skill, i) => (
          <div
            key={`${skill.name}-${i}`}
            className="flex flex-shrink-0 items-center gap-3 opacity-30 transition-opacity hover:opacity-80"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={skill.icon || "/placeholder.svg"}
              alt={skill.name}
              className="h-8 w-8"
              loading="lazy"
            />
            <span className="whitespace-nowrap text-sm text-muted-foreground">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative px-6 py-32 lg:py-40">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/3 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
            What I Work With
          </p>
          <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
            Technical{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            A comprehensive toolkit spanning frontend, backend, mobile, and DevOps
            -- everything I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-16"
        >
          <SkillMarquee />
        </motion.div>

        {/* Category grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: catIdx * 0.08, duration: 0.5 }}
              className="group glass-card relative overflow-hidden rounded-xl p-6 transition-all hover:border-primary/30"
            >
              {/* Top gradient line */}
              <div
                className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${category.color} opacity-0 transition-opacity group-hover:opacity-100`}
              />

              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <category.icon size={18} />
                </div>
                <h3 className="font-heading text-sm font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 rounded-lg border border-border/30 bg-muted/30 px-3 py-2 text-xs text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground"
                  >
                    {skill.icon && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={skill.icon || "/placeholder.svg"}
                        alt=""
                        className="h-4 w-4"
                        loading="lazy"
                      />
                    )}
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
