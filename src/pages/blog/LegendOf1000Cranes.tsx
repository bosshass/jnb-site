/*
 * Blog Post: Legend of 1,000 Cranes
 * Personal story from Sara about perseverance and building JNB LLC
 */
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function LegendOf1000Cranes() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1a1a2e] overflow-x-hidden">
      <SEOHead
        title="Legend of 1,000 Cranes: A Journey of Perseverance and Possibility | JNB LLC Blog"
        description="How folding 1,000 paper cranes became one of the most transformative experiences of my life — and what it taught me about patience, focus, and building a business. A personal story from Sara Hass, founder of JNB LLC."
        keywords="senbazuru, 1000 paper cranes, business perseverance, entrepreneurship story, small business journey, patience in business, building a company, JNB LLC story, Sara Hass, startup lessons, business founder story, resilience, determination, small business owner, Colorado entrepreneur, Littleton CO business"
        canonical="https://jnbllc.com/blog/legend-of-1000-cranes"
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
                February 2026
              </span>
              <span className="px-2 py-0.5 bg-[#0D7377]/5 text-[#0D7377] font-mono text-[10px] tracking-wider uppercase rounded-full">
                Lessons Learned
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#1a1a2e] leading-tight mb-6">
              Legend of 1,000 Cranes:{" "}
              <span className="italic text-[#0D7377]">A Journey of Perseverance and Possibility</span>
            </h1>

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
              It was a new day for me. I had left a comfortable, well-paying job in retail to join a tech startup in downtown Denver. I had always dreamed of a 9-5 job, and when I interviewed for this position, something deep inside me just said, "this feels right." I walked into the office full of dreams and hopes, excited that one of my responsibilities included buying beer for the office every Friday. It felt like the fresh start I'd been looking for.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-4">
              As the days went on, I learned some unforgettable lessons:
            </p>

            <div className="bg-white rounded-2xl p-6 lg:p-8 border border-[#0D7377]/8 mb-8 space-y-3">
              {[
                "The coffee Czar is never wrong.",
                "Don't let the coffee pot go empty.",
                "The more expensive the four-pack, the better the beer must be.",
                "Keep the animals fed — Mountain Dew and snacks could never run dry.",
                "And most importantly, DON'T TELL ANYONE YOU ARE OUT OF THINGS TO DO.",
              ].map((lesson, i) => (
                <p key={i} className="font-sans text-[#1a1a2e]/60 leading-relaxed flex items-start gap-3">
                  <span className="text-[#0D7377] font-mono text-xs mt-1.5 shrink-0">•</span>
                  {lesson}
                </p>
              ))}
            </div>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              Of course, I did just that. One day, I told a beloved mentor of mine, Katie, that I was bored and needed something to do. Katie, being who she is, wasted no time. Minutes later, someone was at my desk asking me to look up instructions on how to fold paper cranes. We ordered origami paper and tools, and I set off to work.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              At the time, I didn't know the deeper meaning behind what I was doing. But today, I do — and I want to share how folding 1,000 paper cranes, which were ultimately never used, became one of the most transformative experiences of my life.
            </p>

            {/* Callout */}
            <div className="bg-[#0D7377]/5 border-l-4 border-[#0D7377] rounded-r-xl px-8 py-6 my-10">
              <p className="font-serif text-xl text-[#1a1a2e]/70 leading-relaxed italic">
                In Japanese legend, folding 1,000 paper cranes, known as senbazuru, grants the folder a wish, symbolizing hope, perseverance, and healing.
              </p>
            </div>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              To sit and methodically fold crane after crane demands patience, focus, and faith — qualities I didn't realize I was developing at the time. But as each crane took shape, so did my confidence, my determination, and my vision for the future.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              Day after day, I folded. It wasn't glamorous work, but it became a form of meditation — an exercise in discipline and dedication. I needed that patience and perseverance to grow both personally and professionally within the company. Folding those cranes wasn't about busywork; it was about preparing myself for bigger challenges, unknowingly building the very foundation that would carry me forward.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              The legend promises that after folding 1,000 cranes, you are granted a wish. And I had one: to one day own my own company, to grow and prosper in a career that brought me joy, and to build a life filled with purpose and passion.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              That wish didn't come true overnight. But the lessons I learned through each careful fold stayed with me. They helped me succeed in that tech startup, pushing me to take on more responsibility, lead with intention, and dream bigger. And when the time came to step out on my own, to create JNB LLC, it was that same patience, focus, and perseverance that carried me through.
            </p>

            {/* Closing callout */}
            <div className="bg-white rounded-2xl p-8 border border-[#c4a882]/20 my-10 text-center">
              <p className="font-serif text-2xl text-[#1a1a2e] leading-relaxed italic">
                Folding 1,000 cranes wasn't just an office task — it was a symbol of resilience and the quiet, steady work it takes to turn dreams into reality.
              </p>
            </div>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              So, here's to the cranes, the legends that inspire us, and the belief that even the smallest steps can lead to something extraordinary.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] italic">
              And yes, I still make sure the coffee pot never runs dry.
            </p>

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
