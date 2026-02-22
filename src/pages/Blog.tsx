/*
 * DESIGN: Elegant Botanical — Blog index page
 * Lists all 5 blog posts with links to individual articles
 * SEO-optimized with keyword-rich meta tags
 */
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const blogPosts = [
  {
    date: "February 2026",
    title: "The Pacesetter",
    excerpt: "What horse racing, distance runners, and business owners have in common. On being the one who sets the tempo — and learning when to build a pace that survives you.",
    href: "/blog/the-pacesetter",
    tag: "Business Insights",
  },
  {
    date: "February 2026",
    title: "5 Things Owls Can Teach You About Running a Business",
    excerpt: "Adaptability, silent efficiency, precision, clarity in darkness. Nature's most strategic hunter has lessons for every business owner.",
    href: "/blog/owls-teach-business",
    tag: "Business Insights",
  },
  {
    date: "February 2026",
    title: "Legend of 1,000 Cranes: A Journey of Perseverance and Possibility",
    excerpt: "How folding 1,000 paper cranes became one of the most transformative experiences of my life — and what it taught me about patience, focus, and building a business.",
    href: "/blog/legend-of-1000-cranes",
    tag: "Lessons Learned",
  },
  {
    date: "2025",
    title: "The Spire Lesson: Why Teachable Work Wins",
    excerpt: "I almost got fired once. Not for doing bad work — for doing work that only I could do. What happens when you become the bottleneck.",
    href: "/blog/the-spire-lesson",
    tag: "Lessons Learned",
  },
  {
    date: "October 2025",
    title: "I Built the House. I Forgot the Foundation.",
    excerpt: "How \"I can do it all\" almost destroyed my business. If you're the only one who can do it, you're not an asset — you're a liability.",
    href: "/blog/i-built-the-house",
    tag: "Lessons Learned",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1a1a2e] overflow-x-hidden">
      <SEOHead
        title="Blog | Small Business Insights & Financial Clarity | JNB LLC"
        description="Real lessons from inside small business consulting. Bookkeeping tips, financial strategy, business growth insights, and honest advice for business owners. No fluff, no guru energy — just what we've learned helping business owners see clearly."
        keywords="small business blog, bookkeeping tips, financial clarity, business growth, entrepreneurship, small business advice, accounting insights, fractional CFO insights, business strategy blog, financial planning tips, QuickBooks tips, tax preparation advice, cash flow management, business owner lessons, Littleton CO business, Denver small business, Colorado entrepreneur"
        canonical="https://jnbllc.com/blog"
        ogType="blog"
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
              href="/"
              className="group inline-flex items-center gap-2 text-[#0D7377] font-sans text-sm font-medium mb-8 hover:text-[#0a5c5f] transition-colors"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              Back to Home
            </a>

            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#0D7377] mb-4">
              Blog
            </p>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a2e] leading-tight mb-6">
              Blog
            </h1>

            <div className="section-divider mb-8" />

            <p className="font-sans text-xl text-[#1a1a2e]/55 leading-relaxed max-w-3xl">
              Real lessons from inside small business consulting. No fluff, no guru energy — just what I've learned helping business owners see clearly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog posts list */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-6">
          {blogPosts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.08 * i }}
            >
              <a
                href={post.href}
                className="group block bg-white rounded-2xl p-8 border border-[#0D7377]/8 hover:border-[#0D7377]/25 transition-all duration-500 hover:shadow-xl hover:shadow-[#0D7377]/5 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-xs tracking-widest uppercase text-[#c4a882]">
                        {post.date}
                      </span>
                      <span className="px-2 py-0.5 bg-[#0D7377]/5 text-[#0D7377] font-mono text-[10px] tracking-wider uppercase rounded-full">
                        {post.tag}
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl font-semibold text-[#1a1a2e] mb-3 group-hover:text-[#0D7377] transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="font-sans text-[#1a1a2e]/50 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="mt-1 w-10 h-10 rounded-full border border-[#0D7377]/15 flex items-center justify-center shrink-0 group-hover:bg-[#0D7377] group-hover:border-[#0D7377] transition-all duration-300">
                    <ArrowRight size={18} className="text-[#0D7377] group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a2e] mb-4">
            Ready to <span className="italic text-[#0D7377]">talk?</span>
          </h3>
          <p className="font-sans text-[#1a1a2e]/50 mb-8 max-w-lg mx-auto">
            No pitch deck. No weird sales funnel. Just an honest conversation about where you are and whether we can help.
          </p>
          <a
            href="/contact"
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
