import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

interface Props { title: string; seoTitle: string; seoDescription: string; seoKeywords: string; canonical: string; date: string; tag: string; subtitle?: string; ctaTitle: string; ctaText: string; children: React.ReactNode; }

export default function BlogPostLayout({ title, seoTitle, seoDescription, seoKeywords, canonical, date, tag, subtitle, ctaTitle, ctaText, children }: Props) {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1a1a2e] overflow-x-hidden">
      <SEOHead title={seoTitle} description={seoDescription} keywords={seoKeywords} canonical={canonical} ogType="article" />
      <Navbar />
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16"><div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <a href="/blog" className="group inline-flex items-center gap-2 text-[#0D7377] font-sans text-sm font-medium mb-8 hover:text-[#0a5c5f] transition-colors"><ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />Back to Blog</a>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs tracking-widest uppercase text-[#c4a882]">{date}</span>
            <span className="px-2 py-0.5 bg-[#0D7377]/5 text-[#0D7377] font-mono text-[10px] tracking-wider uppercase rounded-full">{tag}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#1a1a2e] leading-tight mb-6">{title}</h1>
          {subtitle && <p className="font-sans text-xl text-[#1a1a2e]/55 leading-relaxed max-w-3xl mb-4">{subtitle}</p>}
          <div className="section-divider mb-8" />
        </motion.div>
      </div></section>
      <section className="pb-24 lg:pb-32"><div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="prose-jnb">
          {children}
          <div className="mt-12 pt-8 border-t border-[#0D7377]/10 flex items-center gap-4">
            <img src="/headshot.jpg" alt="Sara Hass" className="w-14 h-14 rounded-full object-cover border-2 border-[#0D7377]/20" />
            <div><p className="font-serif text-lg font-semibold text-[#1a1a2e]">Sara Hass</p><p className="font-sans text-sm text-[#1a1a2e]/40">Founder, JNB LLC</p></div>
          </div>
        </motion.article>
      </div></section>
      <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a2e] mb-4">{ctaTitle}</h3>
        <p className="font-sans text-[#1a1a2e]/50 mb-8 max-w-lg mx-auto">{ctaText}</p>
        <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0D7377] text-white font-sans font-semibold rounded-full hover:bg-[#0a5c5f] transition-all duration-300 hover:shadow-xl hover:shadow-[#0D7377]/20">Start a Conversation</a>
      </div></section>
      <Footer />
    </div>
  );
}
