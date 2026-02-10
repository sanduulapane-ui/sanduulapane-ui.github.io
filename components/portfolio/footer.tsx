"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:infosanduulapane@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/30 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6">
        {/* Logo */}
        <a
          href="https://mail.google.com/mail/u/0/"
          className="font-heading text-lg font-bold text-foreground"
        >
          {"S"}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            U
          </span>
        </a>

        {/* Social links */}
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border/30 bg-muted/20 p-2.5 text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground"
              aria-label={link.label}
            >
              <link.icon size={16} />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Copyright */}
        <div className="flex flex-col items-center gap-1">
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Designed & Built with
            <Heart size={12} className="fill-primary text-primary" />
            by Sanduli Ulapane
          </p>
          <p className="text-xs text-muted-foreground/40">
            {"© 2026 All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}
