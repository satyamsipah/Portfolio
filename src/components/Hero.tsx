"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin, Github, Linkedin, Mail, Code2 } from "lucide-react";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain">
      {/* Atmospheric background */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      <div className="container-tight relative z-10 pt-24 pb-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.12 } }
          }}
          className="space-y-8"
        >
          {/* Status badge */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber" />
            </span>
            <span className="font-mono text-xs text-muted uppercase tracking-wider">
              Open to Summer 2026 SDE Internships
            </span>
          </motion.div>

          {/* Big editorial headline */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-balance"
          >
            Satyam<br />
            Maddheshiya<span className="accent-italic">.</span>
          </motion.h1>

          {/* Subheadline with italic accent */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-xl md:text-2xl text-muted max-w-2xl text-balance leading-relaxed"
          >
            Software engineer building{" "}
            <span className="accent-italic text-2xl md:text-3xl">full-stack systems</span>{" "}
            and developer tooling. Currently studying at HBTU Kanpur, focused on shipping work that holds up under load.
          </motion.p>

          {/* Meta row */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted font-mono"
          >
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              Kanpur, India
            </span>
            <span className="flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5" />
              TypeScript · Next.js · C++
            </span>
          </motion.div>

          {/* CTAs + social */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-fg text-bg text-sm font-medium hover:bg-accent transition-all"
            >
              View Projects
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border text-sm font-medium hover:border-accent hover:text-accent transition-all"
            >
              Get in Touch
            </a>

            <div className="flex items-center gap-1 ml-2">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full hover:bg-card border border-transparent hover:border-border transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full hover:bg-card border border-transparent hover:border-border transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.email}
                className="p-2.5 rounded-full hover:bg-card border border-transparent hover:border-border transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <div className="flex flex-col items-center gap-2 text-muted">
            <span className="font-mono text-[10px] uppercase tracking-widest">
              Scroll
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-border to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
