/*
 * DESIGN: Elegant Botanical — Case Studies index page
 * Shows all 6 case studies as cards with industry, title, summary
 */
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const caseStudies = [
  {
    slug: "security-services",
    industry: "Security Services",
    title: "From Reactive Chaos to Running on Systems",
    summary: "A growing security company was leaving money on the table — unbilled jobs, no pipeline tracking, no profitability visibility. We built a custom operations platform from scratch.",
    stats: ["Custom App Built", "Full Visibility", "Revenue Growth"],
  },
  {
    slug: "hvac-services",
    industry: "HVAC Services",
    title: "We Refused to Quit on Someone Who Quit on Themselves",
    summary: "A one-person HVAC company was ready to close. We built the foundation, kept it running when the owner stepped away, and were still there when he came back.",
    stats: ["More Than Doubled", "Built From Nothing", "Full Turnaround"],
  },
  {
    slug: "electrical-contracting",
    industry: "Electrical Contracting",
    title: "Doing Everything Right — and Still Flying Blind",
    summary: "An electrical contractor in QuickBooks every single day — but nobody had ever explained what the numbers actually meant. We translated the data into decisions.",
    stats: ["~15% Hidden Costs", "Real Margins Found", "Smart Pricing"],
  },
  {
    slug: "property-investment",
    industry: "Property Investment",
    title: "From Paper Receipts to Day-by-Day Visibility",
    summary: "Years of operating with no accounting software, no financial organization, and a shoebox approach to record keeping. We built a real system from zero.",
    stats: ["Paper → QBO", "Every $ Tracked", "Daily Visibility"],
  },
  {
    slug: "beauty-salon",
    industry: "Beauty & Salon",
    title: "Two Owners. Different Needs. Both Got Exactly What They Needed.",
    summary: "Two salon owners at completely different stages. One needed a gut check. The other didn't know how successful her business really was. Both got the right fit.",
    stats: ["2 Paths Built", "S-Corp Identified", "Easy Tax Season"],
  },
  {
    slug: "business-consulting",
    industry: "Business Consulting",
    title: "You Can't Win Everyone",
    summary: "Same tools. Same consultant. Same company. Completely different outcomes — because one side committed and the other didn't. We share this one honestly.",
    stats: ["Same Systems", "Opposite Results", "Honest Truth"],
  },
];

export default function CaseStudies() {
  const [, setLocation] = useLocation();

  const handleCardClick = (slug: string, e: React.MouseEvent) => {
    e.preventDefault();
    setLocation(`/case-studies/${slug}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1a1a2e] overflow-x-hidden">
      <SEOHead
        title="Case Studies | JNB LLC — Real Stories From Real Businesses"
        description="Read real case studies from JNB LLC clients — security companies, HVAC businesses, electrical contractors, salons, and more. See how financial clarity transforms small businesses."
        keywords="JNB LLC case studies, small business success stories, bookkeeping results, fractional CFO results, QuickBooks transformation, business turnaround, financial clarity, real client stories, HVAC business, electrical contractor, salon bookkeeping, property investment accounting"
        canonical="https://jnbllc.com/case-studies"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#0D7377] mb-4">
              Case Studies
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a2e] leading-tight mb-6">
              Real stories from{" "}
              <span className="italic text-[#0D7377]">real businesses</span>
            </h1>
            <p className="font-sans text-lg text-[#1a1a2e]/50 leading-relaxed max-w-2xl mx-auto">
              Every business is different. But the pattern is the same — once you can 
              actually see what's going on, everything gets easier. Here's what that 
              looks like in practice.
            </p>
            <div className="section-divider mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Case study cards */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid gap-6">
            {caseStudies.map((cs, i) => (
              <motion.a
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                onClick={(e) => handleCardClick(cs.slug, e)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * i }}
                className="group block bg-white rounded-2xl p-8 lg:p-10 border border-[#0D7377]/8 hover:border-[#0D7377]/25 transition-all duration-500 hover:shadow-xl hover:shadow-[#0D7377]/5 hover:-translate-y-1"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <p className="font-mono text-xs tracking-widest uppercase text-[#c4a882] mb-2">
                      {cs.industry}
                    </p>
                    <h2 className="font-serif text-2xl lg:text-3xl font-bold text-[#1a1a2e] mb-3 group-hover:text-[#0D7377] transition-colors duration-300">
                      {cs.title}
                    </h2>
                    <p className="font-sans text-[#1a1a2e]/50 leading-relaxed mb-4">
                      {cs.summary}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cs.stats.map((stat) => (
                        <span
                          key={stat}
                          className="px-3 py-1 bg-[#0D7377]/5 text-[#0D7377] font-mono text-xs rounded-full"
                        >
                          {stat}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="shrink-0 self-center">
                    <div className="w-10 h-10 rounded-full border border-[#0D7377]/15 flex items-center justify-center group-hover:bg-[#0D7377] group-hover:border-[#0D7377] transition-all duration-300">
                      <ArrowRight size={18} className="text-[#0D7377] group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a2e] mb-4">
            See yourself in any of these stories?
          </h3>
          <p className="font-sans text-[#1a1a2e]/50 mb-8 max-w-lg mx-auto">
            We'd love to hear what's going on in your business. No pitch — just a conversation.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0D7377] text-white font-sans font-semibold rounded-full hover:bg-[#0a5c5f] transition-all duration-300 hover:shadow-xl hover:shadow-[#0D7377]/20"
          >
            Let's Chat
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
