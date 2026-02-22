import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { X } from "lucide-react";

const features = [
  { label: "Revenue", detail: "See your revenue in real time — by client, by service, by month. No more waiting for your bookkeeper to tell you how you're doing." },
  { label: "Cash Flow", detail: "Know exactly what's coming in and going out. Spot cash crunches before they happen and plan around them." },
  { label: "Utilization", detail: "Track how your team's time is being spent. See who's overbooked, who has capacity, and where the bottlenecks are." },
  { label: "Pipeline", detail: "See what's in the pipeline — proposals, pending work, upcoming revenue — so you can plan ahead with confidence." },
];

export default function LifelineSection() {
  const { ref, isVisible } = useScrollReveal();
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="lifeline" className="relative py-24 lg:py-32 bg-white overflow-hidden" ref={ref}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D7377]/10 border border-[#0D7377]/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0D7377] animate-pulse" />
              <span className="font-mono text-xs tracking-widest text-[#0D7377] uppercase">Coming Soon</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1a1a2e] leading-tight mb-6">Lifeline: Your Business{" "}<span className="italic text-[#0D7377]">at a Glance</span></h2>
            <p className="font-sans text-lg text-[#1a1a2e]/55 leading-relaxed mb-8">One simple dashboard with the numbers that actually matter.{" "}<strong className="text-[#1a1a2e]">No digging. No spreadsheet gymnastics.</strong>{" "}Built for business owners who want visibility without the overwhelm.</p>
            <p className="font-sans text-sm text-[#1a1a2e]/40 mb-3">Click to learn more:</p>
            <div className="flex flex-wrap gap-3 mb-4">
              {features.map((f, i) => (<button key={f.label} onClick={() => setActive(active === i ? null : i)}
                className={"px-5 py-2.5 rounded-full font-sans text-sm font-medium transition-all duration-300 cursor-pointer " + (active === i ? "bg-[#0D7377] text-white shadow-lg shadow-[#0D7377]/20" : "bg-[#0D7377]/5 border border-[#0D7377]/15 text-[#0D7377] hover:bg-[#0D7377]/15")}>{f.label}</button>))}
            </div>
            <AnimatePresence mode="wait">{active !== null && (
              <motion.div key={active} initial={{ opacity: 0, y: -10, height: 0 }} animate={{ opacity: 1, y: 0, height: "auto" }} exit={{ opacity: 0, y: -10, height: 0 }} className="overflow-hidden">
                <div className="bg-[#0D7377]/5 border border-[#0D7377]/15 rounded-xl p-5 mt-2 relative">
                  <button onClick={() => setActive(null)} className="absolute top-3 right-3 text-[#0D7377]/40 hover:text-[#0D7377]"><X size={16} /></button>
                  <h4 className="font-serif text-lg font-semibold text-[#0D7377] mb-2">{features[active].label}</h4>
                  <p className="font-sans text-sm text-[#1a1a2e]/70 leading-relaxed pr-6">{features[active].detail}</p>
                </div>
              </motion.div>
            )}</AnimatePresence>
            <a href="https://lifeline.jnbllc.com" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 font-sans text-sm text-[#0D7377] hover:text-[#0a5c5f] transition-colors font-medium">lifeline.jnbllc.com →</a>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="bg-white rounded-2xl border border-[#0D7377]/10 shadow-xl shadow-[#0D7377]/5 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#faf8f5] border-b border-gray-100">
                <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-[#e8b4b8]" /><div className="w-3 h-3 rounded-full bg-[#c4a882]" /><div className="w-3 h-3 rounded-full bg-[#0D7377]/30" /></div>
                <div className="ml-4 px-3 py-1 bg-white rounded text-xs text-[#1a1a2e]/40 font-mono flex-1">lifeline.jnbllc.com</div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between p-4 bg-[#faf8f5] rounded-xl"><span className="font-sans text-sm font-medium text-[#1a1a2e]/70">Monthly Revenue</span><span className="font-mono text-sm font-bold text-[#0D7377]">$47,250</span></div>
                <div className="h-2 bg-[#faf8f5] rounded-full overflow-hidden"><div className="h-full w-3/4 bg-gradient-to-r from-[#0D7377] to-[#0D7377]/60 rounded-full" /></div>
                <div className="flex items-center justify-between p-4 bg-[#faf8f5] rounded-xl"><span className="font-sans text-sm font-medium text-[#1a1a2e]/70">Cash Flow</span><span className="font-mono text-sm font-bold text-[#c4a882]">+$12,840</span></div>
                <div className="h-2 bg-[#faf8f5] rounded-full overflow-hidden"><div className="h-full w-2/3 bg-gradient-to-r from-[#c4a882] to-[#c4a882]/60 rounded-full" /></div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="text-center p-4 bg-[#faf8f5] rounded-xl"><div className="font-mono text-2xl font-bold text-[#0D7377]">87%</div><div className="text-xs text-[#1a1a2e]/50 font-sans mt-1">Utilization</div></div>
                  <div className="text-center p-4 bg-[#faf8f5] rounded-xl"><div className="font-mono text-2xl font-bold text-[#0D7377]">14</div><div className="text-xs text-[#1a1a2e]/50 font-sans mt-1">Pipeline</div></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
