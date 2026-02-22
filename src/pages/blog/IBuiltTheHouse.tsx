/*
 * Blog Post: I Built the House. I Forgot the Foundation.
 * How "I can do it all" almost destroyed my business.
 */
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function IBuiltTheHouse() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1a1a2e] overflow-x-hidden">
      <SEOHead
        title="I Built the House. I Forgot the Foundation. | JNB LLC Blog"
        description="How 'I can do it all' almost destroyed my business. If you're the only one who can do it, you're not an asset — you're a liability. A personal story about building systems, hiring help, and saying no."
        keywords="business foundation, doing it all, business burnout, hiring help, business systems, delegation, saying no, small business owner, entrepreneur burnout, business processes, documentation, Sara Hass, JNB LLC blog, Colorado business, business growth, operational efficiency"
        canonical="https://jnbllc.com/blog/i-built-the-house"
        ogType="article"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
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
                October 2025
              </span>
              <span className="px-2 py-0.5 bg-[#0D7377]/5 text-[#0D7377] font-mono text-[10px] tracking-wider uppercase rounded-full">
                Lessons Learned
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#1a1a2e] leading-tight mb-6">
              I Built the House. I Forgot the{" "}
              <span className="italic text-[#0D7377]">Foundation.</span>
            </h1>

            <p className="font-sans text-xl text-[#1a1a2e]/55 leading-relaxed max-w-3xl mb-4">
              How "I can do it all" almost destroyed my business.
            </p>

            <div className="section-divider mb-8" />
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose-jnb"
          >
            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              I'm good at a lot of things. Bookkeeping. Operations. Building apps. Strategy. Marketing. Client management. I can do it all.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              And that almost destroyed my business.
            </p>

            {/* Section: The Trap */}
            <h2 className="font-serif text-3xl font-bold text-[#1a1a2e] mt-14 mb-6">
              The Trap
            </h2>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              When you can do everything, you do everything. You become the marketing department and the accounting department and the IT department and the sales team and the operations manager. You work 60 hours a week and feel productive because you're always moving.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              But you're not building anything. You're just running. Really fast. On a hamster wheel.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              I realized I had built a house with no foundation. Lots of walls. Lots of rooms. But nothing holding it together except me. If I stopped, everything stopped.
            </p>

            {/* Section: The Wake-Up */}
            <h2 className="font-serif text-3xl font-bold text-[#1a1a2e] mt-14 mb-6">
              The Wake-Up
            </h2>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              I got sick. Not hospitalized sick, but sick enough that I couldn't work for a week. And you know what happened?
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              Chaos.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              Invoices didn't go out. Clients didn't hear back. Projects stalled. Because everything ran through me, and I wasn't there.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              That's when I knew something had to change.
            </p>

            {/* Section: What I'm Doing About It */}
            <h2 className="font-serif text-3xl font-bold text-[#1a1a2e] mt-14 mb-6">
              What I'm Doing About It
            </h2>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-4">
              I'm building the foundation I forgot. That means:
            </p>

            <div className="bg-white rounded-2xl p-6 lg:p-8 border border-[#0D7377]/8 mb-8 space-y-3">
              {[
                "Documenting processes so someone else can do them",
                "Hiring help for things that don't need to be me",
                "Building systems that run without me in the room",
                "Saying no to projects that don't fit",
              ].map((item, i) => (
                <p key={i} className="font-sans text-[#1a1a2e]/60 leading-relaxed flex items-start gap-3">
                  <span className="text-[#0D7377] font-mono text-xs mt-1.5 shrink-0">•</span>
                  {item}
                </p>
              ))}
            </div>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              It's not easy. I still want to do everything. But I've learned:
            </p>

            <div className="bg-white rounded-2xl p-8 border border-[#c4a882]/20 my-10 text-center">
              <p className="font-serif text-2xl text-[#1a1a2e] leading-relaxed italic">
                If you're the only one who can do it, you're not an asset — you're a liability.
              </p>
            </div>

            {/* Author */}
            <div className="mt-12 pt-8 border-t border-[#0D7377]/10 flex items-center gap-4">
              <img
                src="/headshot.jpg"
                alt="Sara Hass"
                className="w-14 h-14 rounded-full object-cover border-2 border-[#0D7377]/20"
              />
              <div>
                <p className="font-serif text-lg font-semibold text-[#1a1a2e]">Sara Hass</p>
                <p className="font-sans text-sm text-[#1a1a2e]/40">Founder, JNB LLC</p>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a2e] mb-4">
            Sound <span className="italic text-[#0D7377]">familiar?</span>
          </h3>
          <p className="font-sans text-[#1a1a2e]/50 mb-8 max-w-lg mx-auto">
            Let's talk about building a business that doesn't depend entirely on you.
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
