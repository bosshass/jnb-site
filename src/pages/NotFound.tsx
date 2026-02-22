import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1a1a2e]">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-40 pb-32 text-center">
        <h1 className="font-serif text-6xl font-bold text-[#0D7377] mb-4">404</h1>
        <p className="font-sans text-xl text-[#1a1a2e]/60 mb-8">Page not found. Let's get you back on track.</p>
        <a href="/" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0D7377] text-white font-sans font-semibold rounded-full hover:bg-[#0a5c5f] transition-all"><ArrowLeft size={16} />Back to Home</a>
      </div>
      <Footer />
    </div>
  );
}
