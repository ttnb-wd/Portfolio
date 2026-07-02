"use client";

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { toast } from "sonner";

const links = [
  {
    title: "Email",
    value: "maybelasttime9@gmail.com",
    href: "mailto:maybelasttime9@gmail.com",
    icon: Mail,
  },
  {
    title: "GitHub",
    value: "@ttnb-wd",
    href: "https://github.com/ttnb-wd",
    icon: FaGithub,
  },
  {
    title: "LinkedIn",
    value: "Shin Htet Maung",
    href: "https://www.linkedin.com/in/shin-htet-maung-81a24933b/",
    icon: FaLinkedin,
  },
];

export default function ContactLinks() {
  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText("maybelasttime9@gmail.com");

      toast.success("Email copied!", {
        description: "Paste it anywhere or click 'Send Email' below.",
      });
    } catch {
      toast.error("Couldn't copy email.");
    }
  };

  return (
    <div className="space-y-4">
      {links.map((item) => {
        const Icon = item.icon;

        if (item.title === "Email") {
          return (
            <button
              key={item.title}
              type="button"
              onClick={handleEmailClick}
              className="group flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-cyan-500/10 p-3 transition-colors group-hover:bg-cyan-500/20">
                  <Icon className="h-6 w-6 text-cyan-400" />
                </div>

                <div>
                  <p className="text-sm text-zinc-400">
                    {item.title}
                  </p>

                  <p className="font-medium text-white">
                    {item.value}
                  </p>
                </div>
              </div>

              <span className="text-sm text-cyan-400 opacity-0 transition-opacity group-hover:opacity-100">
                Copy →
              </span>
            </button>
          );
        }

        return (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-white/10"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-cyan-500/10 p-3 transition-colors group-hover:bg-cyan-500/20">
                <Icon className="h-6 w-6 text-cyan-400" />
              </div>

              <div>
                <p className="text-sm text-zinc-400">
                  {item.title}
                </p>

                <p className="font-medium text-white">
                  {item.value}
                </p>
              </div>
            </div>

            <span className="text-sm text-cyan-400 opacity-0 transition-opacity group-hover:opacity-100">
              Open →
            </span>
          </a>
        );
      })}
    </div>
  );
}