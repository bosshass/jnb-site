import CaseStudyPageLayout from "@/components/CaseStudyPageLayout";

export default function PropertyInvestment() {
  return (
    <CaseStudyPageLayout
      industry="Property Investment"
      title="From Paper Receipts to Day-by-Day Visibility"
      subtitle="Years of operating with no accounting software. We built a real financial system from zero."
      seoDescription="JNB LLC case study: A property investment business operating on paper receipts and gut feelings. We implemented QuickBooks Online from scratch and reconstructed their entire financial history."
      seoKeywords="property investment case study, QuickBooks implementation, paper to digital accounting, financial reconstruction, bookkeeping from scratch, JNB LLC, real estate accounting, QBO setup"
    >
      <h2>The Situation</h2>
      <p>
        A property investment business that had been operating for years with no accounting software, no financial organization, and a shoebox approach to record keeping. Paper receipts. Handwritten notes. Memory. That was the system.
      </p>
      <p>
        The owners knew they were losing money somewhere. They could feel it. But they couldn't prove it, couldn't quantify it, and couldn't explain it to a banker or a CPA. There was no way to tell which parts of the business were profitable and which were bleeding — because nothing was being tracked in a way that could answer those questions.
      </p>
      <p>
        Every financial decision was based on gut feeling and bank account balance. That's not a strategy. That's anxiety.
      </p>

      <h2>What We Did</h2>
      <p>
        We started from zero. Took every paper record that existed and built a real accounting system around it — QuickBooks Online, proper chart of accounts, bank feeds connected, categorization rules in place so transactions get coded correctly the first time.
      </p>
      <p>
        But this wasn't a "set it and forget it" software install. The real work was reconstructing the financial history from whatever records existed, reconciling accounts, and building the baseline they'd never had. Then we put guardrails in place — automated rules, category structures, and workflows — so the system stays clean going forward without constant hand-holding.
      </p>
      <p>
        The goal was simple: the owners should be able to open QBO on any given day and see exactly where they stand. Every cost captured. Every dollar of income tracked. No more guessing.
      </p>

      <div className="my-8 grid sm:grid-cols-3 gap-4">
        <div className="bg-[#0D7377]/5 rounded-xl p-5 text-center">
          <p className="font-serif text-2xl font-bold text-[#0D7377]">Paper → QBO</p>
          <p className="font-sans text-sm text-[#1a1a2e]/50 mt-1">Full implementation</p>
        </div>
        <div className="bg-[#0D7377]/5 rounded-xl p-5 text-center">
          <p className="font-serif text-2xl font-bold text-[#0D7377]">Every $</p>
          <p className="font-sans text-sm text-[#1a1a2e]/50 mt-1">Now captured</p>
        </div>
        <div className="bg-[#0D7377]/5 rounded-xl p-5 text-center">
          <p className="font-serif text-2xl font-bold text-[#0D7377]">Daily Visibility</p>
          <p className="font-sans text-sm text-[#1a1a2e]/50 mt-1">Real-time clarity</p>
        </div>
      </div>

      <h2>What We Delivered</h2>
      <p>
        QuickBooks Online implementation from scratch. Historical reconstruction from paper records. Bank feed connections with categorization rules. Reconciled accounts. Monthly bookkeeping going forward. And the guardrails to keep it all clean — so the owners can focus on running the business instead of worrying about whether the numbers are right.
      </p>
      <p>
        They went from not knowing if they were making money to being able to pull up any day and see exactly what's happening. The anxiety of "I think we're losing our ass" got replaced with actual data they can use to make real decisions.
      </p>
      <p>
        The paper era is over. Now they can see what they have.
      </p>

      <blockquote>
        <strong>The lesson:</strong> You can't fix what you can't see. These weren't careless people — they'd built something real. But without financial infrastructure, every decision was a guess. Going from paper receipts to QBO isn't glamorous. But it's the work that turns "I think we're losing money" into "I know exactly where we stand — and here's what we're going to do about it."
      </blockquote>
    </CaseStudyPageLayout>
  );
}
