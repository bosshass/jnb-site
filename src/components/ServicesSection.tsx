import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

const services = [
  { title: "Bookkeeping & Accounting", desc: "We keep your books clean and your reports accurate — so you always know where you stand. Whether it's a monthly cleanup or ongoing support, we make it easy.", href: "/services/bookkeeping-accounting" },
  { title: "Tax Preparation", desc: "We handle business taxes in-house and work with your CPA when needed. No last-minute scrambles, no surprises — just one less thing to worry about.", href: "/services/tax-preparation" },
  { title: "Fractional CFO", desc: "When you're ready for more than just bookkeeping — cash flow planning, pricing strategy, growth decisions — we're here for that too. Think of it as a CFO without the full-time price tag.", href: "/services/fractional-cfo" },
  { title: "Financial Systems & Custom Tools", desc: "Outgrowing spreadsheets? We build simple, custom tools that connect your operations to your finances — so you can see what's actually going on without digging.", href: "/services/financial-systems" },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollReveal();
  const [, setLocation] = useLocation();
  const go = (href: string, e: React.MouseEvent) => { e.preventDefault(); setLocation(href); window.scrollTo(0, 0); };

  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 watercolor-services" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#0D7377] mb-4">How We Help</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1a1a2e] leading-tight">From simple bookkeeping to{" "}<span className="italic text-[#0D7377]">big-picture strategy</span></h2>
          <p className="mt-4 text-lg text-[#1a1a2e]/50 font-sans max-w-2xl mx-auto">Not every business needs the same thing. Some just need clean books. Others need a financial partner. We meet you wherever you are.</p>
          <div className="section-divider mt-6 mx-auto" />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((svc, i) => (
            <motion.a key={svc.title} href={svc.href} onClick={(e) => go(svc.href, e)} initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 * i }}
              className="group block bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#0D7377]/8 hover:border-[#0D7377]/25 transition-all duration-500 hover:shadow-xl hover:shadow-[#0D7377]/5 hover:-translate-y-1 cursor-pointer">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-semibold text-[#1a1a2e] mb-3 group-hover:text-[#0D7377] transition-colors duration-300">{svc.title}</h3>
                  <p className="font-sans text-[#1a1a2e]/55 leading-relaxed">{svc.desc}</p>
                </div>
                <div className="mt-1 w-10 h-10 rounded-full border border-[#0D7377]/15 flex items-center justify-center shrink-0 group-hover:bg-[#0D7377] group-hover:border-[#0D7377] transition-all duration-300">
                  <ArrowRight size={18} className="text-[#0D7377] group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
