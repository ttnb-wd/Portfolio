import FooterBrand from "@/components/footer/FooterBrand";
import FooterSocials from "@/components/footer/FooterSocials";
import FooterBottom from "@/components/footer/FooterBottom";
import FooterTech from "@/components/footer/FooterTech";
import FooterStatus from "@/components/footer/FooterStatus";
import FooterBackToTop from "@/components/footer/FooterBackToTop";

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-white">
      {/* Glow Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[300px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        
        {/* TOP SECTION */}
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <FooterBrand />

          <div className="lg:justify-self-end">
            <FooterSocials />
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-14 h-px bg-slate-200" />

        {/* MIDDLE - TECH */}
        <div className="flex flex-col items-center justify-center text-center">
          <FooterTech />
        </div>

        {/* STATUS ROW */}
        <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row sm:justify-between">
          <FooterStatus />
          <FooterBackToTop />
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px bg-slate-200" />

        {/* BOTTOM */}
        <FooterBottom />
      </div>
    </footer>
  );
}