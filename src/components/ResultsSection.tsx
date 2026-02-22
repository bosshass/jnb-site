import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLocation } from "wouter";

const featured = [
  { slug: "security-services", industry: "Security Services", title: "From Reactive Chaos to Running on Systems", summary: "Unbilled jobs, no pipeline tracking, no profitability visibility. We built a custom operations platform from scratch.", stats: ["Custom App Built", "Full Visibility", "Revenue Growth"] },
  { slug: "hvac-services", industry: "HVAC Services", title: "We Refused to Quit on Someone Who Quit on Themselves", summary: "A one-person HVAC company was ready to close. We built the foundation and were still there when he came back.", stats: ["More Than Doubled", "Full Turnaround"] },
  { slug: "electrical-contracting", industry: "Electrical Contracting", title: "Doing Everything Right — and Still Flying Blind", summary: "In QuickBooks every day, but nobody had ever explained what the numbers actually meant.", stats: ["~15% Hidden Costs", "Real Margins Found"] },
];

export default function ResultsSection() {
  const { ref, isVisible } = useScrollReveal();
  const [, setLocation] = useLocation();
  const go = (path: string, e: React.MouseEvent) => { e.preventDefault(); setLocation(path); window.scrollTo(0, 0); };

  return (
    <section id="results" className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 watercolor-results" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-white/60 mb-4">Case Studies</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight">Real stories from{" "}<span className="italic text-[#e8b4b8]">real businesses</span></h2>
          <p className="mt-4 text-lg text-white/60 font-sans max-w-2xl mx-auto">Every business is different. But the pattern is the same — once you can actually see what's going on, everything gets easier.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {featured.map((cs, i) => (
            <motion.a key={cs.slug} href={"/case-studies/" + cs.slug} onClick={(e) => go("/case-studies/" + cs.slug, e)} initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 * i }}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/20 transition-all duration-500 hover:-translate-y-1 flex flex-col">
              <p className="font-mono text-xs tracking-widest uppercase text-[#e8b4b8]/80 mb-3">{cs.industry}</p>
              <h3 className="font-serif text-xl font-bold text-white mb-3 leading-snug group-hover:text-[#e8b4b8] transition-colors duration-300">{cs.title}</h3>
              <p className="font-sans text-white/60 leading-relaxed text-sm mb-5 flex-1">{cs.summary}</p>
              <div className="flex flex-wrap gap-2 mb-4">{cs.stats.map((s) => (<span key={s} className="px-3 py-1 bg-white/10 text-white/80 font-mono text-xs rounded-full">{s}</span>))}</div>
              <div className="flex items-center gap-2 text-white/50 group-hover:text-white font-sans text-sm transition-colors">Read the full story <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></div>
            </motion.a>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }} className="text-center">
          <a href="/case-studies" onClick={(e) => go("/case-studies", e)} className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0D7377] font-sans font-semibold rounded-full hover:bg-[#e8b4b8] hover:text-[#1a1a2e] transition-all duration-300 hover:shadow-xl">
            View All Case Studies <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
