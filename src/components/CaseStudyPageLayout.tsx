import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

interface Props { industry: string; title: string; subtitle: string; seoDescription: string; seoKeywords: string; children: React.ReactNode; }

export default function CaseStudyPageLayout({ industry, title, subtitle, seoDescription, seoKeywords, children }: Props) {
  const [, setLocation] = useLocation();
  const back = (e: React.MouseEvent) => { e.preventDefault(); setLocation("/case-studies"); window.scrollTo(0, 0); };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1a1a2e] overflow-x-hidden">
      <SEOHead title={title + " | JNB LLC Case Study"} description={seoDescription} keywords={seoKeywords} canonical={"https://jnbllc.com/case-studies/" + industry.toLowerCase().replace(/[^a-z0-9]+/g, "-")} />
      <Navbar />
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16"><div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <a href="/case-studies" onClick={back} className="group inline-flex items-center gap-2 text-[#0D7377] font-sans text-sm font-medium mb-8 hover:text-[#0a5c5f] transition-colors"><ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />All Case Studies</a>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#c4a882] mb-4">{industry}</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] leading-tight mb-4">{title}</h1>
          <p className="font-serif text-xl text-[#1a1a2e]/60 leading-relaxed italic">{subtitle}</p>
          <div className="section-divider mt-8" />
        </motion.div>
      </div></section>
      <section className="pb-16 lg:pb-24"><div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="prose-jnb">{children}</motion.div>
      </div></section>
      <section className="py-16 bg-white"><div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a2e] mb-4">See yourself in this story?</h3>
        <p className="font-sans text-[#1a1a2e]/50 mb-8 max-w-lg mx-auto">Every business is different, but the patterns are the same. Let's talk about yours.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="mailto:sara@jnbservice.com" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0D7377] text-white font-sans font-semibold rounded-full hover:bg-[#0a5c5f] transition-all duration-300 hover:shadow-xl hover:shadow-[#0D7377]/20">Let's Chat</a>
          <a href="/case-studies" onClick={back} className="inline-flex items-center gap-2 px-8 py-4 border border-[#0D7377]/20 text-[#0D7377] font-sans font-semibold rounded-full hover:bg-[#0D7377]/5 transition-all">More Case Studies</a>
        </div>
      </div></section>
      <Footer />
    </div>
  );
}
