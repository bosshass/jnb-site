import { Phone, Mail } from "lucide-react";
import { useLocation } from "wouter";

const serviceLinks = [
  { label: "Bookkeeping", href: "/services/bookkeeping-accounting" },
  { label: "Tax Preparation", href: "/services/tax-preparation" },
  { label: "Fractional CFO", href: "/services/fractional-cfo" },
  { label: "Financial Systems", href: "/services/financial-systems" },
];
const companyLinks = [
  { label: "About", href: "/#about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Lifeline", href: "/#lifeline" },
  { label: "Contact", href: "mailto:sara@jnbservice.com" },
];

export default function Footer() {
  const [location, setLocation] = useLocation();
  const handleClick = (href: string, e: React.MouseEvent) => {
    if (href.startsWith("mailto:")) return;
    e.preventDefault();
    if (href.startsWith("/#")) {
      const hash = href.substring(1);
      if (location === "/") { document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" }); }
      else { setLocation("/"); setTimeout(() => { document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" }); }, 150); }
      return;
    }
    setLocation(href); window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-[#1a1a2e] border-t border-[#0D7377]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <a href="/" onClick={(e) => handleClick("/", e)} className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="JNB LLC" className="w-12 h-12 object-contain" />
              <span className="font-serif text-xl font-bold text-white tracking-tight">JNB <span className="text-[#0D7377]">LLC</span></span>
            </a>
            <p className="text-white/40 text-sm mb-6 leading-relaxed font-sans">We make the numbers make sense.</p>
            <div className="space-y-3">
              <a href="tel:7207500063" className="flex items-center gap-3 text-white/50 hover:text-[#0D7377] transition-colors text-sm font-sans"><Phone size={16} />(720) 750-0063</a>
              <a href="mailto:sara@jnbservice.com" className="flex items-center gap-3 text-white/50 hover:text-[#0D7377] transition-colors text-sm font-sans"><Mail size={16} />sara@jnbservice.com</a>
            </div>
          </div>
          <div>
            <h4 className="font-serif font-semibold text-white text-sm uppercase tracking-wider mb-6">Services</h4>
            <ul className="space-y-3">{serviceLinks.map((i) => (<li key={i.label}><a href={i.href} onClick={(e) => handleClick(i.href, e)} className="text-white/40 hover:text-[#0D7377] transition-colors text-sm font-sans">{i.label}</a></li>))}</ul>
          </div>
          <div>
            <h4 className="font-serif font-semibold text-white text-sm uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-3">{companyLinks.map((i) => (<li key={i.label}><a href={i.href} onClick={(e) => handleClick(i.href, e)} className="text-white/40 hover:text-[#0D7377] transition-colors text-sm font-sans">{i.label}</a></li>))}</ul>
          </div>
          <div>
            <h4 className="font-serif font-semibold text-white text-sm uppercase tracking-wider mb-6">Get in Touch</h4>
            <p className="text-white/40 text-sm mb-6 leading-relaxed font-sans">Ready to get your numbers sorted? We'd love to hear from you.</p>
            <a href="mailto:sara@jnbservice.com" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0D7377]/15 border border-[#0D7377]/30 text-[#0D7377] font-sans font-semibold text-sm rounded-full hover:bg-[#0D7377]/25 transition-all">Send Us a Note</a>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm font-sans">&copy; 2026 JNB LLC. All rights reserved. Based in Littleton, Colorado.</p>
          <div className="flex items-center gap-1"><span className="text-white/30 text-xs font-sans">Crafted with</span><span className="text-[#0D7377] text-xs font-sans">clarity</span></div>
        </div>
      </div>
    </footer>
  );
}
