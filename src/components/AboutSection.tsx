import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const approach = [
  { step: "Listen & Learn", desc: "We start by understanding your situation — your challenges, your goals, how your business actually works day to day." },
  { step: "Customize & Implement", desc: "No cookie-cutter solutions. Everything we do is tailored to fit your business, your team, and your budget." },
  { step: "Train & Empower", desc: "We don't just hand you reports — we make sure you understand them. The goal is for you to feel confident making decisions." },
  { step: "Support & Evolve", desc: "As your business grows, we grow with you. New challenges come up, and we adapt to meet them." },
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#faf8f5]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center mb-24">
          <motion.div className="lg:col-span-2" initial={{ opacity: 0, x: -30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-32 h-32 rounded-full bg-[#e8b4b8]/20 blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#0D7377]/10 shadow-xl shadow-[#0D7377]/5">
                <img src="/headshot.jpg" alt="Sara Hass, founder of JNB LLC" className="w-full aspect-square object-cover" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-2 border-[#0D7377]/15 rounded-xl" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#0D7377] rounded-full" />
            </div>
          </motion.div>
          <motion.div className="lg:col-span-3" initial={{ opacity: 0, x: 30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }}>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#0D7377] mb-4">About JNB</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1a1a2e] leading-tight mb-8">Small business helping{" "}<span className="italic text-[#0D7377]">small business.</span></h2>
            <div className="space-y-5 font-sans text-lg text-[#1a1a2e]/60 leading-relaxed">
              <p>Hi, I'm Sara. I started JNB because I kept meeting business owners who were great at what they do — but struggling with the financial side. Not because they're bad at it, but because{" "}<strong className="text-[#1a1a2e]">nobody ever taught them</strong>.</p>
              <p>Revenue looks fine. Cash feels tight. Tax season is a scramble. Sound familiar? That's exactly what we help with — whether it's basic bookkeeping or bigger-picture strategy.</p>
              <p className="text-[#0D7377] font-medium">We're not here to make things complicated. We're here to make them clear.</p>
            </div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }} className="mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-6">Our Story</h3>
            <p className="font-sans text-lg text-[#1a1a2e]/55 leading-relaxed">JNB grew out of years of hands-on accounting, web development, and strategic planning. We kept seeing the same thing: small business owners drowning in receipts, wrestling with DIY tools, and making big decisions with incomplete information. So we decided to do something about it.</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }} className="mb-20 bg-white rounded-2xl p-8 lg:p-12 border border-[#0D7377]/8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#0D7377] mb-6">Our Mission</h3>
            <p className="font-sans text-lg text-[#1a1a2e]/60 leading-relaxed italic">To give small businesses the financial clarity and support they need to succeed — without the fluff, the jargon, or the hidden fees. We believe that behind every dollar saved and every process streamlined is a business owner who's free to focus on what they actually love doing.</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-20">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-10 text-center">How We Work</h3>
            <div className="space-y-6">
              {approach.map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="w-10 h-10 rounded-full bg-[#0D7377]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#0D7377]/20 transition-colors"><span className="font-mono text-sm font-bold text-[#0D7377]">{i + 1}</span></div>
                  <div><h4 className="font-serif text-xl font-semibold text-[#1a1a2e] mb-1">{item.step}</h4><p className="font-sans text-[#1a1a2e]/55 leading-relaxed">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-[#0D7377]/5 rounded-2xl p-8 lg:p-12 border border-[#0D7377]/10">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-6">Why JNB?</h3>
            <p className="font-sans text-lg text-[#1a1a2e]/60 leading-relaxed mb-6">We're small business people too. We get what it's like. JNB combines financial know-how with real tech skills and a no-BS approach. No layers of account managers. No corporate runaround. Just honest, reliable help built around your goals.</p>
            <p className="font-sans text-lg text-[#0D7377] font-medium italic">We're not corporate — we're connected.</p>
            <p className="font-sans text-[#1a1a2e]/40 mt-4">— Sara Hass</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
