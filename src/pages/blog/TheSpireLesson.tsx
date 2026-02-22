/*
 * Blog Post: The Spire Lesson
 * Why teachable work wins.
 */
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function TheSpireLesson() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1a1a2e] overflow-x-hidden">
      <SEOHead
        title="The Spire Lesson: Why Teachable Work Wins | JNB LLC Blog"
        description="I almost got fired once. Not for doing bad work — for doing work that only I could do. What happens when you become the bottleneck, and how building systems that grow beyond you is more valuable than being irreplaceable."
        keywords="business systems, teachable work, delegation, business bottleneck, scalable processes, documentation, business growth, small business systems, process documentation, hiring help, business operations, startup lessons, Sara Hass, JNB LLC blog, Colorado business, entrepreneurship"
        canonical="https://jnbllc.com/blog/the-spire-lesson"
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
                2025
              </span>
              <span className="px-2 py-0.5 bg-[#0D7377]/5 text-[#0D7377] font-mono text-[10px] tracking-wider uppercase rounded-full">
                Lessons Learned
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#1a1a2e] leading-tight mb-6">
              The Spire <span className="italic text-[#0D7377]">Lesson</span>
            </h1>

            <p className="font-sans text-xl text-[#1a1a2e]/55 leading-relaxed max-w-3xl mb-4">
              Why teachable work wins.
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
              I almost got fired once. Not for doing bad work — for doing work that only I could do.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              I was working at a tech startup called Spire. I was the operations person. I built the systems, managed the workflows, handled the chaos. And I was really, really good at it.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              Too good.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              The problem was that nobody else could do what I did. The processes lived in my head. The systems only worked because I was there to run them. If I was out sick, things stopped. If I went on vacation, things piled up.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              I wasn't an asset. I was a liability.
            </p>

            {/* Section: The Wake-Up Call */}
            <h2 className="font-serif text-3xl font-bold text-[#1a1a2e] mt-14 mb-6">
              The Wake-Up Call
            </h2>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              My boss pulled me aside and told me something I'll never forget:
            </p>

            <div className="bg-[#0D7377]/5 border-l-4 border-[#0D7377] rounded-r-xl px-8 py-6 my-10">
              <p className="font-serif text-xl text-[#1a1a2e]/70 leading-relaxed italic">
                "You're great at your job. But we can't grow around you. We need systems that work without you in the room."
              </p>
            </div>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              It hurt. But he was right.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              I had built a house of cards. Everything depended on me. And that meant the company couldn't scale. They couldn't hire someone to take over. They couldn't promote me to something bigger. They were stuck — and so was I.
            </p>

            {/* Section: The Lesson */}
            <h2 className="font-serif text-3xl font-bold text-[#1a1a2e] mt-14 mb-6">
              The Lesson
            </h2>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              That conversation changed how I work. Now, every system I build has to pass one test: can someone else run it?
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              Not "can they run it after I train them for six months." Not "can they run it if they're exactly like me." Can they pick it up, follow the documentation, and make it work?
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              If the answer is no, the system isn't done.
            </p>

            {/* Section: Why This Matters For You */}
            <h2 className="font-serif text-3xl font-bold text-[#1a1a2e] mt-14 mb-6">
              Why This Matters For You
            </h2>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              If you're the only one who can do something in your business, you're not an asset — you're a bottleneck. You can't take time off. You can't hire help. You can't grow.
            </p>

            <div className="bg-white rounded-2xl p-8 border border-[#c4a882]/20 my-10 text-center">
              <p className="font-serif text-2xl text-[#1a1a2e] leading-relaxed italic">
                Teachable work wins. Systems that don't depend on one person win. Documentation that actually gets used wins.
              </p>
            </div>

            <p className="font-sans text-lg text-[#1a1a2e]/80 leading-[1.9] mb-8 font-semibold">
              Build the business. Not the bottleneck.
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
            Ready to build systems that don't <span className="italic text-[#0D7377]">depend on you?</span>
          </h3>
          <p className="font-sans text-[#1a1a2e]/50 mb-8 max-w-lg mx-auto">
            Let's talk about what's trapped in your head and how to get it out.
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
