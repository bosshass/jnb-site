import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const painPoints = [
  { title: '"I just need someone to handle my books."', desc: "You didn't start a business to reconcile bank statements. If bookkeeping feels like a second job, it shouldn't be yours.", highlight: "handle my books" },
  { title: '"Tax season stresses me out."', desc: "The scramble for documents, the guessing, the last-minute panic — we take all of that off your plate so you can breathe.", highlight: "stresses me out" },
  { title: '"I don\'t really understand my own numbers."', desc: "That's more common than you think. Most business owners were never taught this stuff. We'll help it make sense — no lecture, no judgment.", highlight: "understand my own numbers" },
  { title: '"Things are growing and I\'m losing track."', desc: "More clients, more revenue, more moving parts. Growth is great — until the back office can't keep up. That's where we come in.", highlight: "losing track" },
];

export default function PainPointsSection() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="py-24 lg:py-32 bg-[#faf8f5]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mb-16">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#0D7377] mb-4">Sound Familiar?</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1a1a2e] leading-tight">You're not alone{" "}<span className="italic text-[#c4a882]">in this</span></h2>
          <p className="mt-4 text-lg text-[#1a1a2e]/50 font-sans max-w-xl">These are the things we hear from business owners every week. If any of this sounds like you, we can help.</p>
          <div className="section-divider mt-6" />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 * i }}
              className="group relative bg-white rounded-2xl p-8 border border-[#0D7377]/8 hover:border-[#0D7377]/20 transition-all duration-500 hover:shadow-lg hover:shadow-[#0D7377]/5 hover:-translate-y-1">
              <div className="absolute left-0 top-8 bottom-8 w-[3px] rounded-full bg-gradient-to-b from-[#0D7377] to-[#e8b4b8] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="font-serif text-xl font-semibold text-[#1a1a2e] mb-3 leading-snug">{item.title.split(item.highlight).map((part, idx, arr) => idx < arr.length - 1 ? (<span key={idx}>{part}<span className="text-[#0D7377]">{item.highlight}</span></span>) : (<span key={idx}>{part}</span>))}</h3>
              <p className="font-sans text-[#1a1a2e]/55 leading-relaxed">{item.desc}</p>
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl"><div className="absolute top-0 right-0 w-32 h-32 -translate-x-1/2 -translate-y-1/2 bg-[#e8b4b8]/10 rounded-full group-hover:bg-[#e8b4b8]/20 transition-colors" /></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
