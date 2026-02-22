/*
 * Blog Post: The Pacesetter
 * What horse racing, distance runners, and business owners have in common.
 */
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function ThePacesetter() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1a1a2e] overflow-x-hidden">
      <SEOHead
        title="The Pacesetter | What Horse Racing Teaches About Business | JNB LLC Blog"
        description="What horse racing, distance runners, and business owners have in common. On being the one who sets the tempo — and learning when to build a pace that survives you. By Sara Hass, JNB LLC."
        keywords="business pace, leadership tempo, sustainable business, business burnout, setting the pace, horse racing business analogy, distance running business, fractional CFO insights, small business leadership, business systems, delegation, Sara Hass, JNB LLC blog, entrepreneurship, business growth, Colorado business"
        canonical="https://jnbllc.com/blog/the-pacesetter"
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
                Business Insights
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#1a1a2e] leading-tight mb-6">
              The <span className="italic text-[#0D7377]">Pacesetter</span>
            </h1>

            <p className="font-sans text-xl text-[#1a1a2e]/55 leading-relaxed max-w-3xl mb-4">
              What horse racing, distance runners, and business owners have in common.
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
              In classic distance horse racing, a pacesetter doesn't break from the gate carefully.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              They go.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              They push the tempo early so the race can't drift into something slow and tactical. Because a slow race is dangerous. It favors the horse that waits, saves everything, and sprints late.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              So the pacesetter makes it honest.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              They stretch the field. They force movement. They prevent complacency.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              Sometimes they're entered to protect a stronger stablemate — a horse with deeper stamina and a better finish. The pacesetter burns energy so the contender doesn't have to.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              By the final stretch, they often fade.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              And occasionally — if no one challenges them — they win anyway.
            </p>

            {/* Section: The Business Version */}
            <h2 className="font-serif text-3xl font-bold text-[#1a1a2e] mt-14 mb-6">
              The Business Version
            </h2>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              For most of my career, I've been the one who goes early.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              I set the tempo before anyone else is comfortable. I push standards before they're popular. I tighten margins before they become emergencies.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              Because I've seen what happens when a business drifts.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              A slow business doesn't collapse overnight. It erodes quietly.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              Margins blur. Owners compensate with effort instead of structure. Leaders absorb pressure instead of distributing it. Chaos becomes "normal."
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              So I move fast.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              I implement systems before people ask for them. I confront numbers before they become stories. I force clarity early — because I know the cost of waiting.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              And yes — sometimes I burn too much fuel doing it.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              Sometimes being the one who breaks first means you're the one who feels the headwind.
            </p>

            {/* Section: Pete */}
            <h2 className="font-serif text-3xl font-bold text-[#1a1a2e] mt-14 mb-6">
              Pete
            </h2>

            <div className="my-8 flex justify-center">
              <div className="relative">
                <img
                  src="/pete-tierney.jpg"
                  alt="Pete Tierney"
                  className="w-64 h-auto rounded-2xl shadow-lg border-2 border-[#c4a882]/20"
                />
                <p className="font-sans text-sm text-[#1a1a2e]/35 text-center mt-3 italic">
                  Pete Tierney
                </p>
              </div>
            </div>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              In high school, my teacher Pete talked about pace differently.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              Not about forcing the field. About finishing the race.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              He ran the Bolder Boulder into his seventies. Steady. Disciplined. Never dramatic.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              He didn't preach intensity. He preached distribution.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              He said:
            </p>

            <div className="bg-[#0D7377]/5 border-l-4 border-[#0D7377] rounded-r-xl px-8 py-6 my-10">
              <p className="font-serif text-xl text-[#1a1a2e]/70 leading-relaxed italic">
                Run smart enough that you still have something left to finish.
              </p>
            </div>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              At seventeen, I thought that sounded conservative.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              At thirty-something, running businesses, raising kids, carrying weight that doesn't show up on a P&L — I understand it differently.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              Pete Tierney. The original pacesetter in my life. Run smart enough to finish.
            </p>

            {/* Section: The Shift */}
            <h2 className="font-serif text-3xl font-bold text-[#1a1a2e] mt-14 mb-6">
              The Shift
            </h2>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              Four months ago, I wouldn't have questioned the front-running approach.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8 italic">
              If you don't set the pace, someone else will. If you don't control tempo, the market will. If you don't force honesty, the numbers eventually will.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              But here's what racing quietly teaches you:
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/80 leading-[1.9] mb-8 font-semibold">
              The pacesetter doesn't always run the whole distance.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              And if they try to, they don't last long.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              This week, I told my clients something I wouldn't have said a year ago:
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/80 leading-[1.9] mb-8 font-semibold">
              I don't have to carry the early pace alone.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              Strong businesses aren't built on one person breaking into the wind every mile.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              They're built on structure. On shared load. On systems that hold tempo even when the founder steps back.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              And nothing broke.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              The work moved forward. The rhythm adjusted. The business held.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              Because sustainable leadership isn't about dominating the start.
            </p>

            <div className="bg-white rounded-2xl p-8 border border-[#c4a882]/20 my-10 text-center">
              <p className="font-serif text-2xl text-[#1a1a2e] leading-relaxed italic">
                It's about building a pace that survives you.
              </p>
            </div>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              Pete didn't last because he was intense.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              He lasted because he was measured.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/65 leading-[1.9] mb-8">
              There's a difference between forcing the tempo and engineering one.
            </p>

            <p className="font-sans text-lg text-[#1a1a2e]/80 leading-[1.9] mb-8 font-semibold">
              I'm learning which one scales.
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
            Tired of breaking into the <span className="italic text-[#0D7377]">wind alone?</span>
          </h3>
          <p className="font-sans text-[#1a1a2e]/50 mb-8 max-w-lg mx-auto">
            Let's build systems that hold the tempo — even when you step back.
          </p>
          <a
            href="/contact"
            onClick={(e) => { e.preventDefault(); window.location.href = "/contact"; }}
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
