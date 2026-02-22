import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 watercolor-cta" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Let's figure it out together.</h2>
          <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-sans">No pitch deck. No weird sales funnel. Just an honest conversation about where you are and whether we can help. Even if it's just a quick question — we're happy to talk.</p>
          <a href="mailto:sara@jnbservice.com" className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-[#0D7377] font-sans font-bold text-lg rounded-full hover:bg-[#faf8f5] transition-all duration-300 hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-1">
            Send Us a Note <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
