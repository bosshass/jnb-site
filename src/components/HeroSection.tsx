import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Phone } from "lucide-react";
import { useLocation } from "wouter";

export default function HeroSection() {
  const [, setLocation] = useLocation();
  const handleContact = (e: React.MouseEvent) => {
    e.preventDefault();
    setLocation("/contact");
    window.scrollTo(0, 0);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 watercolor-hero" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-[#1a1a2e] mb-8">
            We handle the{" "}<span className="italic text-[#0D7377] relative">numbers
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none"><path d="M2 8 C50 2, 100 2, 150 6 S250 2, 298 8" stroke="#0D7377" strokeWidth="2" strokeLinecap="round" opacity="0.5" /></svg>
            </span>.<br />You run your{" "}<span className="text-[#c4a882]">business.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg sm:text-xl text-[#1a1a2e]/60 leading-relaxed max-w-xl mb-10 font-sans">
            Whether you need someone to clean up your books, take tax season off your plate, or help you actually understand your finances — we're here. No jargon, no judgment.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }} className="flex flex-wrap items-center gap-4">
            <a href="/contact" onClick={handleContact} className="group inline-flex items-center gap-2 px-8 py-4 bg-[#0D7377] text-white font-sans font-semibold rounded-full hover:bg-[#0a5c5f] transition-all duration-300 hover:shadow-xl hover:shadow-[#0D7377]/20 hover:-translate-y-0.5">
              Let's Chat <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#services" className="group inline-flex items-center gap-2 px-8 py-4 bg-white/60 backdrop-blur-sm border border-[#0D7377]/20 text-[#0D7377] font-sans font-semibold rounded-full hover:bg-white/80 hover:border-[#0D7377]/40 transition-all duration-300">
              See What We Do <ChevronDown size={18} className="transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>
          <motion.a
            href="tel:7207500063"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="inline-flex items-center gap-2 mt-8 font-sans text-[#1a1a2e]/50 hover:text-[#0D7377] transition-colors"
          >
            <Phone size={16} />
            <span className="text-lg font-medium">(720) 750-0063</span>
          </motion.a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#faf8f5] to-transparent" />
    </section>
  );
}
