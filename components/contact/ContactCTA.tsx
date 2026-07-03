import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactCTA() {
  return (
    <div className="mt-10 flex justify-center">
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=maybelasttime9@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          size="lg"
          className="group rounded-full bg-blue-600 px-8 py-6 text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30"
        >
          Send Email
          <ArrowUpRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Button>
      </a>
    </div>
  );
}