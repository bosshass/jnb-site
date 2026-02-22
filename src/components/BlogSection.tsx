import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

const posts = [
  { title: "The Pacesetter", excerpt: "What horse racing, distance runners, and business owners have in common.", href: "/blog/the-pacesetter", tag: "Business Insights" },
  { title: "5 Things Owls Can Teach You About Business", excerpt: "Adaptability, silent efficiency, precision, and clarity in darkness.", href: "/blog/owls-teach-business", tag: "Business Insights" },
  { title: "I Built the House. I Forgot the Foundation.", excerpt: 'How "I can do it all" almost destroyed my business.', href: "/blog/i-built-the-house", tag: "Lessons Learned" },
];

export default function BlogSection() {
  const { ref, isVisible } = useScrollReveal();
  const [, setLocation] = useLocation();
  const go = (href: string, e: React.MouseEvent) => { e.preventDefault(); setLocation(href); window.scrollTo(0, 0); };

  return (
    <section id="blog" className="py-24 lg:py-32 bg-[#faf8f5]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <div className="text-center mb-14">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#0D7377] mb-4">From the Blog</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-4">Insights for <span className="italic text-[#0D7377]">business owners</span></h2>
            <p className="font-sans text-lg text-[#1a1a2e]/50 leading-relaxed max-w-2xl mx-auto">Real lessons from inside small business consulting. No fluff — just what we've learned helping business owners see clearly.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {posts.map((p, i) => (
              <motion.a key={i} href={p.href} onClick={(e) => go(p.href, e)} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 * i }}
                className="group block bg-white rounded-2xl p-7 border border-[#0D7377]/8 hover:border-[#0D7377]/25 transition-all duration-500 hover:shadow-xl hover:shadow-[#0D7377]/5 hover:-translate-y-1">
                <span className="px-2 py-0.5 bg-[#0D7377]/5 text-[#0D7377] font-mono text-[10px] tracking-wider uppercase rounded-full">{p.tag}</span>
                <h3 className="font-serif text-xl font-semibold text-[#1a1a2e] mt-4 mb-3 group-hover:text-[#0D7377] transition-colors leading-snug">{p.title}</h3>
                <p className="font-sans text-sm text-[#1a1a2e]/50 leading-relaxed mb-4">{p.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-[#0D7377] group-hover:gap-2.5 transition-all">Read more <ArrowRight size={14} /></span>
              </motion.a>
            ))}
          </div>
          <div className="text-center">
            <a href="/blog" onClick={(e) => go("/blog", e)} className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#0D7377] hover:text-[#0a5c5f] transition-colors group">View All Posts <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
