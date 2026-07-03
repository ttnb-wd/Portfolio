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
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
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
              className="group flex w-full min-w-[280px] items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              aria-label={`Visit my ${social.name} profile: ${social.username}`}
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-blue-100 p-3 transition group-hover:bg-blue-200" aria-hidden="true">
                  <Icon className="h-5 w-5 text-blue-600" aria-hidden="true" />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    {social.name}
                  </p>

                  <p className="font-medium text-slate-900">
                    {social.username}
                  </p>
                </div>
              </div>

              <ArrowUpRight className="h-4 w-4 text-slate-400 transition group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
            </a>
          );
        })}
      </div>
    </div>
  );
}