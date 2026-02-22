import CaseStudyPageLayout from "@/components/CaseStudyPageLayout";

export default function ElectricalContracting() {
  return (
    <CaseStudyPageLayout
      industry="Electrical Contracting"
      title="Doing Everything Right in QBO — and Still Flying Blind"
      subtitle="An electrical contractor in QuickBooks every single day. But nobody had ever explained what the numbers actually meant."
      seoDescription="JNB LLC case study: An electrical contractor was in QuickBooks daily but didn't understand true labor costs. We translated the data into actionable insights and revealed hidden profitability gaps."
      seoKeywords="electrical contractor case study, QuickBooks analysis, payroll burden, labor cost analysis, profitability by business line, JNB LLC, small business financial clarity, pricing strategy"
    >
      <h2>The Situation</h2>
      <p>
        An electrical contractor who was doing it right — or at least trying to. In QuickBooks every single day. Entering transactions, tracking invoices, keeping up with the data. This wasn't someone who avoided the books. This was someone who showed up and did the work.
      </p>
      <p>
        The problem wasn't effort. It was interpretation. The data was all there, but nobody had ever sat down and explained what it actually meant. What does it really cost to put a worker on a job site? Not just the hourly rate — the fully burdened cost. Wages, payroll taxes, workers' comp, benefits. The roughly 15% that payroll burden adds on top of base wages that most small business owners have never been told about.
      </p>
      <p>
        The owner was making pricing decisions, taking on contracts, and running the business every day without understanding what the numbers in QBO were actually telling the story of. The effort was there. The insight wasn't.
      </p>

      <h2>What We Found</h2>
      <p>
        When we dug into the data that was already sitting in QBO, the picture was clear — and it wasn't what anyone expected. Some lines of business that looked profitable on the surface were barely breaking even once you factored in the true cost of labor. Other parts of the business were quietly generating the majority of the profit.
      </p>
      <p>
        Pricing decisions had been made based on billing rates without understanding the full cost underneath them. The gap between what workers were being billed at and what they actually cost was much smaller than it appeared — and in some cases, nearly nonexistent.
      </p>
      <p>
        None of this was because the owner wasn't trying. It was because nobody had ever translated the QBO data into something actionable. The information was there the whole time. It just needed someone to read it.
      </p>

      <div className="my-8 grid sm:grid-cols-2 gap-4">
        <div className="bg-[#1a1a2e]/5 rounded-xl p-6">
          <h4 className="font-serif text-lg font-bold text-[#1a1a2e] mb-3">Before</h4>
          <ul className="space-y-2 font-sans text-sm text-[#1a1a2e]/60">
            <li><strong className="text-[#1a1a2e]/80">In QBO Daily</strong> — Doing the work, entering the data</li>
            <li><strong className="text-[#1a1a2e]/80">Pricing Blind</strong> — Didn't know true labor costs</li>
            <li><strong className="text-[#1a1a2e]/80">Unknown Burden</strong> — ~15% payroll cost never factored in</li>
          </ul>
        </div>
        <div className="bg-[#0D7377]/5 rounded-xl p-6">
          <h4 className="font-serif text-lg font-bold text-[#0D7377] mb-3">After</h4>
          <ul className="space-y-2 font-sans text-sm text-[#1a1a2e]/60">
            <li><strong className="text-[#0D7377]">Data Interpreted</strong> — QBO data turned into real insights</li>
            <li><strong className="text-[#0D7377]">True Cost Known</strong> — Fully burdened rate per worker</li>
            <li><strong className="text-[#0D7377]">Smart Pricing</strong> — Decisions based on real margins</li>
          </ul>
        </div>
      </div>

      <div className="my-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#0D7377]/5 rounded-xl p-5 text-center">
          <p className="font-serif text-xl font-bold text-[#0D7377]">~15%</p>
          <p className="font-sans text-xs text-[#1a1a2e]/50 mt-1">Hidden Payroll Burden</p>
        </div>
        <div className="bg-[#0D7377]/5 rounded-xl p-5 text-center">
          <p className="font-serif text-xl font-bold text-[#0D7377]">Massive</p>
          <p className="font-sans text-xs text-[#1a1a2e]/50 mt-1">Profitability Gap</p>
        </div>
        <div className="bg-[#0D7377]/5 rounded-xl p-5 text-center">
          <p className="font-serif text-xl font-bold text-[#0D7377]">Real Margins</p>
          <p className="font-sans text-xs text-[#1a1a2e]/50 mt-1">Visible for First Time</p>
        </div>
        <div className="bg-[#0D7377]/5 rounded-xl p-5 text-center">
          <p className="font-serif text-xl font-bold text-[#0D7377]">Clear Path</p>
          <p className="font-sans text-xs text-[#1a1a2e]/50 mt-1">Forward Strategy</p>
        </div>
      </div>

      <h2>What We Delivered</h2>
      <p>
        We didn't come in and tell this owner to start using QBO — that work was already being done. What we delivered was the layer on top: profitability analysis by business line, true labor cost breakdowns, and reporting that turned raw QBO data into decisions. For the first time, the owner could see not just what the business was doing, but what it was actually earning.
      </p>
      <p>
        The path forward became clear: protect the profitable work, reprice or restructure the rest, and never set a billing rate again without knowing the fully burdened cost underneath it.
      </p>

      <blockquote>
        <strong>The lesson:</strong> Being in QuickBooks every day doesn't mean you understand what QuickBooks is telling you. This owner did everything right — showed up, entered the data, stayed on top of the books. What was missing wasn't effort. It was someone to sit down and say: "Here's what these numbers actually mean, and here's what you should do about it." Sometimes the most valuable thing a financial partner can do isn't the bookkeeping. It's the translation.
      </blockquote>
    </CaseStudyPageLayout>
  );
}
