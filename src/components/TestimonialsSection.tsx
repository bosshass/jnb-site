import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Rheyna Garcia", text: "So happy my client added Sara to the team! From our first meeting, I knew she'd be a game changer.", timeAgo: "20 weeks ago" },
  { name: "Wesley Rickert", badge: "Local Guide", text: "As a small business owner, finding a professional who is a true partner is rare. I struck gold with Sara at JNB.", timeAgo: "29 weeks ago" },
  { name: "Greta Hannam", text: "Sara was super helpful and her expertise was very evident when explaining her accounting and bookkeeping services.", timeAgo: "41 weeks ago" },
  { name: "Nathaniel Byerly", text: "Nothing but good things from JNB. Sara has been a massive help with tax prep and bookkeeping. Has gone above and beyond to take care of my business needs through QuickBooks. Highly recommend.", timeAgo: "44 weeks ago" },
  { name: "Rachel Libersat", text: "Highly recommend JNB for your bookkeeping needs! Sara has 10+ years of expertise in bookkeeping, accounting, and GAAP with businesses small and large. In addition to her expertise, she's hands on and friendly!", timeAgo: "Oct 2024" },
];
const Stars = () => (<div className="flex items-center gap-0.5">{[...Array(5)].map((_, i) => (<Star key={i} size={16} className="fill-[#c4a882] text-[#c4a882]" />))}</div>);

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  useEffect(() => { const t = setInterval(() => setIdx((p) => (p + 1) % reviews.length), 5000); return () => clearInterval(t); }, []);

  return (
    <section className="py-24 lg:py-32 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#0D7377] mb-4">Google Reviews</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-4">What our clients <span className="italic text-[#0D7377]">say</span></h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex items-center gap-0.5">{[...Array(5)].map((_, i) => (<Star key={i} size={22} className="fill-[#c4a882] text-[#c4a882]" />))}</div>
            <span className="font-serif text-2xl font-bold text-[#1a1a2e]">5.0</span>
            <span className="font-sans text-sm text-[#1a1a2e]/40">({reviews.length} reviews)</span>
          </div>
        </motion.div>
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.1 * i }}
              className={"bg-[#faf8f5] rounded-2xl p-8 border border-[#0D7377]/8 hover:border-[#0D7377]/20 transition-all duration-500 hover:shadow-lg hover:shadow-[#0D7377]/5" + (i === 3 ? " lg:col-span-1 lg:translate-y-4" : "") + (i === 4 ? " lg:col-span-2 lg:translate-y-4" : "")}>
              <Stars />
              <p className="font-sans text-[#1a1a2e]/60 leading-relaxed mt-5 mb-6 text-[15px]">"{r.text}"</p>
              <div className="flex items-center justify-between">
                <div><p className="font-serif font-semibold text-[#1a1a2e] text-sm">{r.name}</p>{r.badge && <p className="font-mono text-[10px] tracking-wider uppercase text-[#0D7377] mt-0.5">{r.badge}</p>}</div>
                <span className="font-mono text-[10px] tracking-wider uppercase text-[#1a1a2e]/30">{r.timeAgo}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="md:hidden">
          <motion.div key={idx} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-[#faf8f5] rounded-2xl p-8 border border-[#0D7377]/8">
            <Stars />
            <p className="font-sans text-[#1a1a2e]/60 leading-relaxed mt-5 mb-6">"{reviews[idx].text}"</p>
            <div className="flex items-center justify-between">
              <div><p className="font-serif font-semibold text-[#1a1a2e] text-sm">{reviews[idx].name}</p></div>
              <span className="font-mono text-[10px] tracking-wider uppercase text-[#1a1a2e]/30">{reviews[idx].timeAgo}</span>
            </div>
          </motion.div>
          <div className="flex items-center justify-center gap-2 mt-6">{reviews.map((_, i) => (<button key={i} onClick={() => setIdx(i)} className={"w-2 h-2 rounded-full transition-all duration-300 " + (i === idx ? "bg-[#0D7377] w-6" : "bg-[#0D7377]/20")} />))}</div>
        </div>
      </div>
    </section>
  );
}
