"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { profile } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-tight">
        <SectionHeading index="01" title="About" />

        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="md:col-span-2"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-border bg-card">
              <Image
                src="/satyam.jpg"
                alt="Satyam Maddheshiya speaking at GCC Innovation Summit 2025"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
                priority
              />
              {/* Subtle vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
            <p className="mt-4 font-mono text-xs text-muted">
              GCC Innovation Summit 2025 · Speaker
            </p>
          </motion.div>

          {/* Bio column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="md:col-span-3 space-y-6 text-lg leading-relaxed"
          >
            {profile.longBio.map((para, i) => (
              <p key={i} className="text-fg/85">
                {para}
              </p>
            ))}

            {/* Quick facts */}
            <div className="pt-6 grid grid-cols-2 gap-4 border-t border-border">
              <div>
                <p className="font-mono text-xs text-muted uppercase tracking-wider mb-1">
                  Based in
                </p>
                <p className="text-sm">Kanpur, India</p>
              </div>
              <div>
                <p className="font-mono text-xs text-muted uppercase tracking-wider mb-1">
                  Focus
                </p>
                <p className="text-sm">Full-stack engineering</p>
              </div>
              <div>
                <p className="font-mono text-xs text-muted uppercase tracking-wider mb-1">
                  Currently
                </p>
                <p className="text-sm">3rd year, B.Tech</p>
              </div>
              <div>
                <p className="font-mono text-xs text-muted uppercase tracking-wider mb-1">
                  Hobbies
                </p>
                <p className="text-sm">Chess · Badminton</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
