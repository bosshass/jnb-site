/*
 * Contact Page — real form via Netlify Forms
 * Honeypot field for spam protection (no reCAPTCHA needed)
 */
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Try emailing us directly.");
      }
    } catch {
      setError("Something went wrong. Try emailing us directly.");
    }
    setSending(false);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1a1a2e] overflow-x-hidden">
      <SEOHead
        title="Contact JNB LLC | Bookkeeping & Fractional CFO | Littleton CO"
        description="Get in touch with JNB LLC. No pitch deck, no weird sales funnel — just an honest conversation about your business finances. Call (720) 750-0063 or send us a message."
        keywords="contact JNB LLC, bookkeeping Littleton CO, fractional CFO contact, small business accounting Denver, Sara Hass contact"
        canonical="https://jnbllc.com/contact"
      />
      <Navbar />

      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Left column — info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1a1a2e] leading-tight mb-6">
                Let's figure it out{" "}
                <span className="italic text-[#0D7377]">together.</span>
              </h1>
              <p className="font-sans text-lg text-[#1a1a2e]/55 leading-relaxed mb-10">
                No pitch deck. No weird sales funnel. Just an honest conversation
                about where you are and whether we can help.
              </p>

              {/* Phone — big and visible */}
              <a
                href="tel:7207500063"
                className="flex items-center gap-4 mb-6 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#0D7377]/10 flex items-center justify-center group-hover:bg-[#0D7377]/20 transition-colors">
                  <Phone size={20} className="text-[#0D7377]" />
                </div>
                <div>
                  <p className="font-sans text-sm text-[#1a1a2e]/40 mb-0.5">Call or text</p>
                  <p className="font-serif text-2xl font-bold text-[#1a1a2e] group-hover:text-[#0D7377] transition-colors">
                    (720) 750-0063
                  </p>
                </div>
              </a>

              <a
                href="mailto:sara@jnbservice.com"
                className="flex items-center gap-4 mb-6 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#0D7377]/10 flex items-center justify-center group-hover:bg-[#0D7377]/20 transition-colors">
                  <Mail size={20} className="text-[#0D7377]" />
                </div>
                <div>
                  <p className="font-sans text-sm text-[#1a1a2e]/40 mb-0.5">Email</p>
                  <p className="font-sans text-lg font-medium text-[#1a1a2e] group-hover:text-[#0D7377] transition-colors">
                    sara@jnbservice.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0D7377]/10 flex items-center justify-center">
                  <MapPin size={20} className="text-[#0D7377]" />
                </div>
                <div>
                  <p className="font-sans text-sm text-[#1a1a2e]/40 mb-0.5">Based in</p>
                  <p className="font-sans text-lg font-medium text-[#1a1a2e]">
                    Littleton, Colorado
                  </p>
                  <p className="font-sans text-sm text-[#1a1a2e]/40">Serving clients nationwide</p>
                </div>
              </div>
            </motion.div>

            {/* Right column — form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="bg-white rounded-2xl p-12 border border-[#0D7377]/10 shadow-sm text-center">
                  <div className="w-16 h-16 rounded-full bg-[#0D7377]/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} className="text-[#0D7377]" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-[#1a1a2e] mb-3">
                    Got it.
                  </h2>
                  <p className="font-sans text-[#1a1a2e]/55 leading-relaxed max-w-md mx-auto">
                    We'll get back to you soon — usually within a business day.
                    If it's urgent, call us at{" "}
                    <a href="tel:7207500063" className="text-[#0D7377] font-semibold hover:underline">
                      (720) 750-0063
                    </a>.
                  </p>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-8 sm:p-10 border border-[#0D7377]/10 shadow-sm"
                >
                  {/* Netlify hidden fields */}
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don't fill this out: <input name="bot-field" />
                    </label>
                  </p>

                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-sans text-sm font-medium text-[#1a1a2e]/70 mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-[#1a1a2e]/10 bg-[#faf8f5] font-sans text-[#1a1a2e] placeholder:text-[#1a1a2e]/25 focus:outline-none focus:border-[#0D7377]/40 focus:ring-2 focus:ring-[#0D7377]/10 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block font-sans text-sm font-medium text-[#1a1a2e]/70 mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-[#1a1a2e]/10 bg-[#faf8f5] font-sans text-[#1a1a2e] placeholder:text-[#1a1a2e]/25 focus:outline-none focus:border-[#0D7377]/40 focus:ring-2 focus:ring-[#0D7377]/10 transition-all"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="phone"
                      className="block font-sans text-sm font-medium text-[#1a1a2e]/70 mb-2"
                    >
                      Phone <span className="text-[#1a1a2e]/30">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-xl border border-[#1a1a2e]/10 bg-[#faf8f5] font-sans text-[#1a1a2e] placeholder:text-[#1a1a2e]/25 focus:outline-none focus:border-[#0D7377]/40 focus:ring-2 focus:ring-[#0D7377]/10 transition-all"
                      placeholder="(555) 555-5555"
                    />
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="subject"
                      className="block font-sans text-sm font-medium text-[#1a1a2e]/70 mb-2"
                    >
                      What can we help with?
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-xl border border-[#1a1a2e]/10 bg-[#faf8f5] font-sans text-[#1a1a2e] focus:outline-none focus:border-[#0D7377]/40 focus:ring-2 focus:ring-[#0D7377]/10 transition-all"
                    >
                      <option value="general">Just have a question</option>
                      <option value="bookkeeping">Bookkeeping & Accounting</option>
                      <option value="tax">Tax Preparation</option>
                      <option value="cfo">Fractional CFO</option>
                      <option value="systems">Financial Systems & Custom Tools</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="message"
                      className="block font-sans text-sm font-medium text-[#1a1a2e]/70 mb-2"
                    >
                      Tell us a bit about what's going on
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-[#1a1a2e]/10 bg-[#faf8f5] font-sans text-[#1a1a2e] placeholder:text-[#1a1a2e]/25 focus:outline-none focus:border-[#0D7377]/40 focus:ring-2 focus:ring-[#0D7377]/10 transition-all resize-none"
                      placeholder="No need to be formal — just tell us what's on your mind."
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 font-sans text-sm mb-4">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#0D7377] text-white font-sans font-semibold rounded-full hover:bg-[#0a5c5f] transition-all duration-300 hover:shadow-xl hover:shadow-[#0D7377]/20 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? "Sending..." : "Send Message"}
                    {!sending && <Send size={18} />}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
