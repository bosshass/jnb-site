import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

const serviceLinks = [
  { label: "Bookkeeping & Accounting", href: "/services/bookkeeping-accounting" },
  { label: "Tax Preparation", href: "/services/tax-preparation" },
  { label: "Fractional CFO", href: "/services/fractional-cfo" },
  { label: "Financial Systems", href: "/services/financial-systems" },
];
const navLinks = [
  { label: "Case Studies", href: "/case-studies", isRoute: true },
  { label: "Lifeline", href: "#lifeline", isRoute: false },
  { label: "About", href: "#about", isRoute: false },
  { label: "Blog", href: "/blog", isRoute: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const h = (e: MouseEvent) => { if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setServicesOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const handleNavClick = (link: typeof navLinks[0], e: React.MouseEvent) => {
    setMobileOpen(false);
    if (link.isRoute) { e.preventDefault(); setLocation(link.href); window.scrollTo(0, 0); return; }
    if (location !== "/") { e.preventDefault(); setLocation("/"); setTimeout(() => { document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" }); }, 100); return; }
    e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
  };
  const handleLogoClick = (e: React.MouseEvent) => { e.preventDefault(); if (location !== "/") setLocation("/"); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const handleServiceClick = (href: string) => { setServicesOpen(false); setMobileOpen(false); setLocation(href); window.scrollTo(0, 0); };

  return (
    <motion.nav initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-[#0D7377]/10" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" onClick={handleLogoClick} className="flex items-center gap-3 group">
            <img src="/logo.png" alt="JNB LLC" className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-105" />
            <span className="font-serif text-xl font-bold tracking-tight text-[#1a1a2e]">JNB <span className="text-[#0D7377]">LLC</span></span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <div className="relative" ref={dropdownRef}>
              <button onClick={() => setServicesOpen(!servicesOpen)} className="relative font-sans text-sm font-medium tracking-wide text-[#1a1a2e]/70 hover:text-[#0D7377] transition-colors duration-300 group flex items-center gap-1">
                Services <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0D7377] transition-all duration-300 group-hover:w-full rounded-full" />
              </button>
              <AnimatePresence>{servicesOpen && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-3 w-64 bg-white rounded-xl shadow-xl border border-[#0D7377]/10 overflow-hidden py-2">
                  {serviceLinks.map((s) => (<button key={s.href} onClick={() => handleServiceClick(s.href)} className="block w-full text-left px-5 py-3 font-sans text-sm text-[#1a1a2e]/70 hover:text-[#0D7377] hover:bg-[#0D7377]/5 transition-all duration-200">{s.label}</button>))}
                </motion.div>
              )}</AnimatePresence>
            </div>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => handleNavClick(link, e)} className="relative font-sans text-sm font-medium tracking-wide text-[#1a1a2e]/70 hover:text-[#0D7377] transition-colors duration-300 group">
                {link.label}<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0D7377] transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
            <a href="mailto:sara@jnbservice.com" className="ml-2 px-6 py-2.5 bg-[#0D7377] text-white font-sans text-sm font-semibold rounded-full hover:bg-[#0a5c5f] transition-all duration-300 hover:shadow-lg hover:shadow-[#0D7377]/20">Let's Talk</a>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-[#1a1a2e]" aria-label="Toggle menu">{mobileOpen ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
      </div>
      <AnimatePresence>{mobileOpen && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white/95 backdrop-blur-md border-t border-[#0D7377]/10 overflow-hidden">
          <div className="px-6 py-6 flex flex-col gap-2">
            <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="flex items-center justify-between font-sans text-base font-medium text-[#1a1a2e]/80 py-3 border-b border-gray-100">Services <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} /></button>
            <AnimatePresence>{mobileServicesOpen && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden pl-4">
              {serviceLinks.map((s) => (<button key={s.href} onClick={() => handleServiceClick(s.href)} className="block w-full text-left font-sans text-sm text-[#1a1a2e]/60 hover:text-[#0D7377] py-2.5 border-b border-gray-50 transition-colors">{s.label}</button>))}
            </motion.div>)}</AnimatePresence>
            {navLinks.map((link) => (<a key={link.href} href={link.href} onClick={(e) => handleNavClick(link, e)} className="font-sans text-base font-medium text-[#1a1a2e]/80 hover:text-[#0D7377] transition-colors py-3 border-b border-gray-100">{link.label}</a>))}
            <a href="mailto:sara@jnbservice.com" onClick={() => setMobileOpen(false)} className="mt-3 px-6 py-3 bg-[#0D7377] text-white font-sans text-sm font-semibold rounded-full text-center">Let's Talk</a>
          </div>
        </motion.div>
      )}</AnimatePresence>
    </motion.nav>
  );
}
