"use client";

import { motion } from "framer-motion";
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
      {links.map((item, index) => {
        const Icon = item.icon;

        if (item.title === "Email") {
          return (
            <motion.button
              key={item.title}
              type="button"
              onClick={handleEmailClick}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.1,
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left transition-all duration-500 hover:-translate-y-1 hover:border-blue-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-sky-50 hover:shadow-lg hover:shadow-blue-100/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              aria-label="Copy email address to clipboard"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-blue-100 p-3 transition-colors group-hover:bg-blue-200" aria-hidden="true">
                  <Icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    {item.title}
                  </p>

                  <p className="font-medium text-slate-900">
                    {item.value}
                  </p>
                </div>
              </div>

              <span className="text-sm text-blue-600 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true">
                Copy →
              </span>
            </motion.button>
          );
        }

        return (
          <motion.a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: index * 0.1,
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-blue-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-sky-50 hover:shadow-lg hover:shadow-blue-100/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            aria-label={`Visit my ${item.title} profile: ${item.value}`}
          >
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-blue-100 p-3 transition-colors group-hover:bg-blue-200" aria-hidden="true">
                <Icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  {item.title}
                </p>

                <p className="font-medium text-slate-900">
                  {item.value}
                </p>
              </div>
            </div>

            <span className="text-sm text-blue-600 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true">
              Open →
            </span>
          </motion.a>
        );
      })}
    </div>
  );
}