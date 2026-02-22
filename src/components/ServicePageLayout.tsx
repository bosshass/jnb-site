import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ServiceLink { label: string; href: string; }
interface ContentBlock { title: string; desc: string; }
interface ServicePageProps { title: string; tagline: string; intro: string; philosophy: string; sectionTitle: string; blocks: ContentBlock[]; extras?: { title: string; content: string }[]; prevLink?: ServiceLink; nextLink?: ServiceLink; }

export default function ServicePageLayout({ title, tagline, intro, philosophy, sectionTitle, blocks, extras, prevLink, nextLink }: ServicePageProps) {
  const [, setLocation] = useLocation();
  const go = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (href.startsWith("/#")) { setLocation("/"); const hash = href.substring(1); setTimeout(() => { document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" }); }, 150); }
    else { setLocation(href); window.scrollTo(0, 0); }
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1a1a2e] overflow-x-hidden">
      <Navbar />
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <a href="/" onClick={(e) => go("/", e)} className="group inline-flex items-center gap-2 text-[#0D7377] font-sans text-sm font-medium mb-8 hover:text-[#0a5c5f] transition-colors"><ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />Back to Home</a>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#0D7377] mb-4">Services</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a2e] leading-tight mb-6">{title}</h1>
            <div className="section-divider mb-8" />
            <p className="font-serif text-2xl text-[#1a1a2e]/70 leading-relaxed max-w-3xl italic mb-6">{tagline}</p>
            <p className="font-sans text-lg text-[#1a1a2e]/55 leading-relaxed max-w-3xl">{intro}</p>
          </motion.div>
        </div>
      </section>
      <section className="pb-12"><div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-[#0D7377]/5 border-l-4 border-[#0D7377] rounded-r-xl px-8 py-6">
          <p className="font-sans text-lg text-[#1a1a2e]/70 leading-relaxed italic">{philosophy}</p>
        </motion.div>
      </div></section>
      <section className="pb-16 lg:pb-24"><div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-10">{sectionTitle}</motion.h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {blocks.map((b, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-white rounded-2xl p-7 border border-[#0D7377]/8 hover:border-[#0D7377]/20 transition-all duration-300 hover:shadow-lg hover:shadow-[#0D7377]/5">
              <h3 className="font-serif text-xl font-semibold text-[#1a1a2e] mb-3">{b.title}</h3>
              <p className="font-sans text-[#1a1a2e]/55 leading-relaxed text-sm">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div></section>
      {extras && extras.length > 0 && (<section className="pb-16 lg:pb-24"><div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-12">
        {extras.map((ex, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a2e] mb-4">{ex.title}</h3>
          <p className="font-sans text-lg text-[#1a1a2e]/55 leading-relaxed">{ex.content}</p>
        </motion.div>))}
      </div></section>)}
      {(prevLink || nextLink) && (<section className="pb-16"><div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-t border-b border-[#0D7377]/10">
          {prevLink ? <a href={prevLink.href} onClick={(e) => go(prevLink.href, e)} className="group inline-flex items-center gap-2 text-[#0D7377] font-sans text-sm font-medium"><ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />{prevLink.label}</a> : <div />}
          {nextLink ? <a href={nextLink.href} onClick={(e) => go(nextLink.href, e)} className="group inline-flex items-center gap-2 text-[#0D7377] font-sans text-sm font-medium">{nextLink.label}<ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></a> : <div />}
        </div>
      </div></section>)}
      <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a2e] mb-4">Have questions? <span className="italic text-[#0D7377]">Let's talk.</span></h3>
        <p className="font-sans text-[#1a1a2e]/50 mb-8 max-w-lg mx-auto">No pitch deck. No weird sales funnel. Just an honest conversation about where you are and whether we can help.</p>
        <a href="mailto:sara@jnbservice.com" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0D7377] text-white font-sans font-semibold rounded-full hover:bg-[#0a5c5f] transition-all duration-300 hover:shadow-xl hover:shadow-[#0D7377]/20">Send Us a Note</a>
      </div></section>
      <Footer />
    </div>
  );
}
