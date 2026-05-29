import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container-tight">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-serif text-lg">
              Satyam Maddheshiya<span className="accent-italic">.</span>
            </p>
            <p className="text-sm text-muted mt-1 font-mono">
              Designed and built from scratch · {new Date().getFullYear()}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-card border border-transparent hover:border-border transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-card border border-transparent hover:border-border transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.email}
              className="p-2 rounded-full hover:bg-card border border-transparent hover:border-border transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <p className="mt-8 font-mono text-[10px] text-muted/70 text-center uppercase tracking-widest">
          Built with Next.js · Tailwind · Framer Motion · Deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
