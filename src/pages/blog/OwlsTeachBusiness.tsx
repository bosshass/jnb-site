/*
 * Blog Post: 5 Things Owls Can Teach You About Business
 * Contains CORRECTED owl facts per user fact-check
 */
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const owlFacts = [
  {
    number: "01",
    stat: "270°",
    title: "See What Others Miss",
    lesson: "An owl can rotate its head 270 degrees — giving it a perspective most predators simply don't have. In business, the ability to see around corners, to look at your numbers from multiple angles, is what separates reactive from strategic.",
    fact: "Owls have 14 cervical vertebrae (humans have 7), allowing this extraordinary range of motion.",
  },
  {
    number: "02",
    stat: "Silent",
    title: "Move Without Friction",
    lesson: "Owls reduce sound through their entire wing structure — serrated leading edges, trailing edge fringe, and velvety feather texture all work together to eliminate turbulence. The best financial systems work the same way: quietly, efficiently, without creating drag on your operations.",
    fact: "This multi-layered noise reduction is so effective that owl flight is nearly undetectable by prey.",
  },
  {
    number: "03",
    stat: "500 PSI",
    title: "Decisive Action When It Counts",
    lesson: "Larger species like the Great Horned Owl grip with up to 500 PSI of force — they don't hesitate once they've identified their target. When your financials give you clear data, you can make decisions with the same confidence and precision.",
    fact: "This grip strength is comparable to a large dog's bite force, specific to larger owl species.",
  },
  {
    number: "04",
    stat: "Night Vision",
    title: "Clarity in Uncertainty",
    lesson: "Owls see clearly in near-total darkness. Most business owners are making decisions in the dark — revenue looks fine, but cash feels tight, and nobody can explain why. Financial clarity is your night vision.",
    fact: "Owl eyes are tubular, not spherical, maximizing light capture in low-light conditions.",
  },
];

export default function OwlsTeachBusiness() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1a1a2e] overflow-x-hidden">
      <SEOHead
        title="5 Things Owls Can Teach You About Running a Business | JNB LLC Blog"
        description="What owls can teach business owners about perspective, efficiency, decisive action, and clarity. Business lessons from nature's most strategic hunter. Adaptability, silent efficiency, precision, and financial clarity for small business owners."
        keywords="business lessons, owl business analogy, small business strategy, financial clarity, business efficiency, decisive leadership, business perspective, adaptability in business, strategic thinking, small business tips, entrepreneurship lessons, JNB LLC blog, business owner advice, financial visibility, operational efficiency"
        canonical="https://jnbllc.com/blog/owls-teach-business"
        ogType="article"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="/blog"
              className="group inline-flex items-center gap-2 text-[#0D7377] font-sans text-sm font-medium mb-8 hover:text-[#0a5c5f] transition-colors"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </a>

            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs tracking-widest uppercase text-[#c4a882]">
                February 2026
              </span>
              <span className="px-2 py-0.5 bg-[#0D7377]/5 text-[#0D7377] font-mono text-[10px] tracking-wider uppercase rounded-full">
                Business Insights
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a2e] leading-tight mb-6">
              5 Things Owls Can Teach You About{" "}
              <span className="italic text-[#0D7377]">Business</span>
            </h1>

            <div className="section-divider mb-8" />

            <p className="font-sans text-xl text-[#1a1a2e]/55 leading-relaxed max-w-3xl">
              Just like the owl that rotates its head 270 degrees to see what others miss, 
              we help you find the opportunities already in your business. Adaptability 
              isn't reactive. With the right data, it's strategic.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Owl fact articles */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-12">
          {owlFacts.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group bg-white rounded-2xl p-8 lg:p-10 border border-[#0D7377]/8 hover:border-[#0D7377]/20 transition-all duration-500 hover:shadow-lg hover:shadow-[#0D7377]/5"
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-mono text-sm text-[#0D7377]/30 tracking-wider">
                  {item.number}
                </span>
                <span className="font-mono text-2xl font-bold text-[#0D7377]">
                  {item.stat}
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a2e] mb-4">
                {item.title}
              </h2>

              <p className="font-sans text-[#1a1a2e]/60 leading-relaxed mb-6 text-lg">
                {item.lesson}
              </p>

              <div className="px-5 py-4 bg-[#0D7377]/5 rounded-xl border-l-4 border-[#0D7377]/30">
                <p className="font-sans text-sm text-[#1a1a2e]/50 italic">
                  {item.fact}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a2e] mb-4">
            Ready for your own{" "}
            <span className="italic text-[#0D7377]">night vision?</span>
          </h3>
          <p className="font-sans text-[#1a1a2e]/50 mb-8 max-w-lg mx-auto">
            Let's talk about how financial clarity can change the way you run your business.
          </p>
          <a
            href="mailto:sara@jnbservice.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0D7377] text-white font-sans font-semibold rounded-full hover:bg-[#0a5c5f] transition-all duration-300 hover:shadow-xl hover:shadow-[#0D7377]/20"
          >
            Start a Conversation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
