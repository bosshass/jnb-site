import CaseStudyPageLayout from "@/components/CaseStudyPageLayout";

export default function BeautySalon() {
  return (
    <CaseStudyPageLayout
      industry="Beauty & Salon Services"
      title="Two Owners. Different Needs. Both Got Exactly What They Were Looking For."
      subtitle="One needed a gut check. The other didn't know how successful her business really was."
      seoDescription="JNB LLC case study: Two salon owners at completely different stages — one needed confirmation, the other needed a full financial foundation. Both got exactly the right level of support."
      seoKeywords="salon bookkeeping case study, beauty business accounting, S-Corp election, small business tax savings, customized bookkeeping, JNB LLC, salon financial services, QuickBooks training"
    >
      <h2>The Situation</h2>
      <p>
        Two salon owners at completely different stages, both coming to us for different reasons.
      </p>
      <p>
        One already had a strong handle on the numbers. The books were solid, the business was running well, and nothing was on fire. What was needed wasn't a rescue — it was a gut check. Someone to look at the financials with fresh eyes, confirm what was working, and flag anything that might need attention. A second opinion from someone who looks at small business books all day.
      </p>
      <p>
        The other had built something much bigger than realized. A thriving salon business with strong revenue and real demand — but without the financial infrastructure to see it clearly. No real bookkeeping, no P&L, no framework for understanding what was service revenue versus gratuities, and no way to plan for where the business was headed. The business was already successful. The owner just didn't know how successful.
      </p>

      <h2>Two Different Engagements</h2>

      <div className="my-8 grid sm:grid-cols-2 gap-6">
        <div className="bg-[#0D7377]/5 rounded-xl p-6 border border-[#0D7377]/10">
          <h4 className="font-serif text-lg font-bold text-[#0D7377] mb-4">Owner A — The Gut Check</h4>
          <ul className="space-y-3 font-sans text-sm text-[#1a1a2e]/60">
            <li><strong className="text-[#1a1a2e]/80">Already On Point</strong> — Numbers were solid, just needed confirmation</li>
            <li><strong className="text-[#1a1a2e]/80">Learned QBO</strong> — Trained to manage the books independently</li>
            <li><strong className="text-[#1a1a2e]/80">Quarterly Reviews</strong> — JNB checks in to keep things clean</li>
            <li><strong className="text-[#1a1a2e]/80">Lifeline</strong> — Call when QBO gets weird — we sort it out</li>
          </ul>
        </div>
        <div className="bg-[#c4a882]/5 rounded-xl p-6 border border-[#c4a882]/15">
          <h4 className="font-serif text-lg font-bold text-[#c4a882] mb-4">Owner B — Bigger Than She Knew</h4>
          <ul className="space-y-3 font-sans text-sm text-[#1a1a2e]/60">
            <li><strong className="text-[#1a1a2e]/80">Massive Business</strong> — Didn't realize how well it was doing</li>
            <li><strong className="text-[#1a1a2e]/80">Full Bookkeeping</strong> — JNB handles the books monthly</li>
            <li><strong className="text-[#1a1a2e]/80">Monthly Check-Ins</strong> — P&L reviews, goal setting, growth planning</li>
            <li><strong className="text-[#1a1a2e]/80">Growing Together</strong> — JNB as partner as the business scales</li>
          </ul>
        </div>
      </div>

      <p>
        Neither path is better. One owner needed confirmation and a safety net. The other needed someone to build the financial foundation and walk alongside the growth. Both got exactly what they needed — nothing more, nothing less.
      </p>

      <h2>The Bonus</h2>
      <p>
        Because the books were clean and organized, tax time was easy for both. No scramble, no panic, no "let me find those receipts." Everything was where it needed to be.
      </p>
      <p>
        Even better — the financial clarity revealed that one of the businesses would benefit from an S-Corp election. That's not something you can identify when the books are a mess. Clean data leads to better decisions, and sometimes those decisions save real money at tax time.
      </p>

      <div className="my-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#0D7377]/5 rounded-xl p-5 text-center">
          <p className="font-serif text-lg font-bold text-[#0D7377]">Confirmed</p>
          <p className="font-sans text-xs text-[#1a1a2e]/50 mt-1">Strong Margins</p>
        </div>
        <div className="bg-[#0D7377]/5 rounded-xl p-5 text-center">
          <p className="font-serif text-lg font-bold text-[#0D7377]">Easy</p>
          <p className="font-sans text-xs text-[#1a1a2e]/50 mt-1">Tax Season</p>
        </div>
        <div className="bg-[#0D7377]/5 rounded-xl p-5 text-center">
          <p className="font-serif text-lg font-bold text-[#0D7377]">S-Corp</p>
          <p className="font-sans text-xs text-[#1a1a2e]/50 mt-1">Election Identified</p>
        </div>
        <div className="bg-[#0D7377]/5 rounded-xl p-5 text-center">
          <p className="font-serif text-lg font-bold text-[#0D7377]">Right Fit</p>
          <p className="font-sans text-xs text-[#1a1a2e]/50 mt-1">Support That Matches</p>
        </div>
      </div>

      <h2>What We Delivered</h2>
      <p>
        For one owner: a gut check, QBO training, quarterly reviews, and a lifeline for when things get confusing. The confidence to run it independently with someone in the background who has your back.
      </p>
      <p>
        For the other: monthly bookkeeping, P&L reporting, growth planning, and an ongoing partnership as the business keeps scaling. The realization that what was built is bigger and more successful than it felt — and the financial foundation to keep building on it.
      </p>
      <p>
        Both owners are now making decisions based on real data. Both had painless tax seasons. And both have exactly the level of support that makes sense for where they are.
      </p>

      <blockquote>
        <strong>The lesson:</strong> Not every client needs the same thing. Some need a full-service partner. Some just need someone to say "you're on the right track" and be there when something doesn't look right. The job isn't to sell everyone the same package — it's to figure out what each person actually needs and build around that. The best outcome isn't a client who depends on you forever. It's a client who feels in control of their own business — whether you're doing the books or they are.
      </blockquote>
    </CaseStudyPageLayout>
  );
}
