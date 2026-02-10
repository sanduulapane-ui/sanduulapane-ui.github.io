"use client";

import { motion } from "framer-motion";
import {
  Send,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { useState, type FormEvent } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "infosanduulapane@gmail.com",
    href: "mailto:infosanduulapane@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sri Lanka",
    href: null,
  },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/sanduulapane-ui" },
  { icon: Linkedin, label: "LinkedIn", href: "https://github.com/sanduulapane-ui" },
];

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative px-6 py-32 lg:py-40">
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -bottom-40 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[150px]" />
        <div className="absolute -bottom-20 right-1/4 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
            Contact
          </p>
          <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
            {"Let's Work "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            {
              "Have an idea, a project, or just want to say hello? I'd love to hear from you."
            }
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 lg:col-span-2"
          >
            {/* Contact info cards */}
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card group rounded-xl p-5 transition-all hover:border-primary/30"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <info.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <div className="glass-card rounded-xl p-5">
              <p className="mb-4 text-xs font-medium tracking-widest text-muted-foreground uppercase">
                Follow Me
              </p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 rounded-xl border border-border/30 bg-muted/20 px-4 py-2.5 text-sm text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground"
                    aria-label={link.label}
                  >
                    <link.icon size={16} />
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-all group-hover:opacity-100"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA note */}
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {"I'm currently "}
                <span className="font-medium text-foreground">
                  open to opportunities
                </span>
                {
                  " including internships, freelance work, and collaborative projects. Don't hesitate to reach out!"
                }
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-6 sm:p-8 lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className={`absolute left-4 transition-all duration-200 ${focused === "name"
                        ? "-top-2 text-[10px] font-medium text-primary"
                        : "top-3.5 text-sm text-muted-foreground/50"
                      }`}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    onFocus={() => setFocused("name")}
                    onBlur={(e) =>
                      !e.target.value && setFocused(null)
                    }
                    className="w-full rounded-xl border border-border/30 bg-muted/20 px-4 pt-5 pb-2 text-sm text-foreground outline-none transition-all focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="email"
                    className={`absolute left-4 transition-all duration-200 ${focused === "email"
                        ? "-top-2 text-[10px] font-medium text-primary"
                        : "top-3.5 text-sm text-muted-foreground/50"
                      }`}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    onFocus={() => setFocused("email")}
                    onBlur={(e) =>
                      !e.target.value && setFocused(null)
                    }
                    className="w-full rounded-xl border border-border/30 bg-muted/20 px-4 pt-5 pb-2 text-sm text-foreground outline-none transition-all focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="subject"
                  className={`absolute left-4 transition-all duration-200 ${focused === "subject"
                      ? "-top-2 text-[10px] font-medium text-primary"
                      : "top-3.5 text-sm text-muted-foreground/50"
                    }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  onFocus={() => setFocused("subject")}
                  onBlur={(e) =>
                    !e.target.value && setFocused(null)
                  }
                  className="w-full rounded-xl border border-border/30 bg-muted/20 px-4 pt-5 pb-2 text-sm text-foreground outline-none transition-all focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="message"
                  className={`absolute left-4 transition-all duration-200 ${focused === "message"
                      ? "-top-2 text-[10px] font-medium text-primary"
                      : "top-3.5 text-sm text-muted-foreground/50"
                    }`}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  onFocus={() => setFocused("message")}
                  onBlur={(e) =>
                    !e.target.value && setFocused(null)
                  }
                  className="w-full resize-none rounded-xl border border-border/30 bg-muted/20 px-4 pt-5 pb-2 text-sm text-foreground outline-none transition-all focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-secondary px-8 py-3.5 font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 disabled:opacity-60"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {submitted ? (
                    "Message Sent Successfully!"
                  ) : (
                    <>
                      Send Message
                      <Send
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-secondary to-primary transition-transform duration-500 group-hover:translate-x-0" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
