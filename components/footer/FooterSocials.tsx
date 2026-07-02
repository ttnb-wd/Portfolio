import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, ArrowUpRight } from "lucide-react";

const socials = [
  {
    name: "GitHub",
    username: "@ttnb-wd",
    href: "https://github.com/ttnb-wd",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    username: "Shin Htet Maung",
    href: "https://www.linkedin.com/in/shin-htet-maung-81a24933b/",
    icon: FaLinkedin,
  },
  {
    name: "Email",
    username: "maybelasttime9@gmail.com",
    href: "mailto:maybelasttime9@gmail.com",
    icon: Mail,
  },
];

export default function FooterSocials() {
  return (
    <div className="space-y-5">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
        Connect
      </p>

      <div className="space-y-3">
        {socials.map((social) => {
          const Icon = social.icon;

          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full min-w-[280px] items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-cyan-500/10 p-3 transition group-hover:bg-cyan-500/20">
                  <Icon className="h-5 w-5 text-cyan-400" />
                </div>

                <div>
                  <p className="text-sm text-zinc-500">
                    {social.name}
                  </p>

                  <p className="font-medium text-white">
                    {social.username}
                  </p>
                </div>
              </div>

              <ArrowUpRight className="h-4 w-4 text-zinc-500 transition group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          );
        })}
      </div>
    </div>
  );
}