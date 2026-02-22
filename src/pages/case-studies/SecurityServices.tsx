import CaseStudyPageLayout from "@/components/CaseStudyPageLayout";

export default function SecurityServices() {
  return (
    <CaseStudyPageLayout
      industry="Security Services"
      title="From Reactive Chaos to Running on Systems"
      subtitle="A growing security company was leaving money on the table at every turn. We built the infrastructure to catch it."
      seoDescription="JNB LLC case study: How we built a custom operations platform for a security services company — from unbilled jobs and reactive chaos to full visibility and significant revenue growth."
      seoKeywords="security company case study, custom operations app, billing workflow, job tracking, profitability analysis, JNB LLC, small business systems, unbilled work recovery"
    >
      <h2>The Situation</h2>
      <p>
        A growing security services company with a small team, doing good work but leaving money on the table at every turn. Estimates weren't being followed up. Completed jobs sat unbilled for weeks — sometimes longer. The owner was juggling field work and sales with no system to track what was in the pipeline, what was in progress, or what needed to be invoiced.
      </p>
      <p>
        There was no operations infrastructure. No job tracking. No profitability visibility. No billing workflow. The owner's time was consumed by reactive daily firefighting instead of strategic growth. And a significant portion of completed work was simply never billed — not because anyone forgot, but because there was no system to catch it.
      </p>

      <h2>What We Did</h2>
      <p>
        We didn't just clean up the books — we built the entire operational backbone of the business. A custom operations platform designed around how this company actually works. Job tracking from estimate to invoice. Pipeline visibility. Billing workflows that ensure nothing falls through the cracks.
      </p>

      <div className="my-8 grid sm:grid-cols-3 gap-4">
        <div className="bg-[#0D7377]/5 rounded-xl p-5 text-center">
          <p className="font-serif text-2xl font-bold text-[#0D7377]">Custom App</p>
          <p className="font-sans text-sm text-[#1a1a2e]/50 mt-1">Built from scratch</p>
        </div>
        <div className="bg-[#0D7377]/5 rounded-xl p-5 text-center">
          <p className="font-serif text-2xl font-bold text-[#0D7377]">Full Visibility</p>
          <p className="font-sans text-sm text-[#1a1a2e]/50 mt-1">Every dollar tracked</p>
        </div>
        <div className="bg-[#0D7377]/5 rounded-xl p-5 text-center">
          <p className="font-serif text-2xl font-bold text-[#0D7377]">Revenue Growth</p>
          <p className="font-sans text-sm text-[#1a1a2e]/50 mt-1">Significant increase</p>
        </div>
      </div>

      <h2>What We Delivered</h2>
      <p>
        A custom-built operations platform. P&L dashboards. Pricing strategy. Billing workflows. Team training. Profitability analysis. The business went from reactive chaos to running on systems — and the revenue followed.
      </p>
      <p>
        The owner now spends time on growth instead of firefighting. Every completed job gets billed. Every dollar is visible. And the custom application we built isn't just a tool — it's the operational backbone of the business.
      </p>

      <blockquote>
        <strong>The lesson:</strong> Sometimes the biggest impact comes from the least glamorous work. Finding unbilled jobs isn't exciting. Building a billing workflow isn't sexy. But when the coordination gaps close, the revenue shows up — and it doesn't stop. The money was already there. It was just falling through the cracks.
      </blockquote>
    </CaseStudyPageLayout>
  );
}
