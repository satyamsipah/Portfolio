"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container-tight">
        <SectionHeading
          index="03"
          title="Skills"
          subtitle="The toolkit I reach for when building production systems."
        />

        <div className="space-y-10">
          {skills.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
              className="grid md:grid-cols-4 gap-6 md:gap-8 items-baseline"
            >
              <div className="md:col-span-1">
                <p className="font-serif text-xl md:text-2xl">
                  {group.category}
                  <span className="accent-italic">.</span>
                </p>
              </div>
              <div className="md:col-span-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
