import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";

export default function TaxPreparation() {
  return (
    <>
      <SEOHead
        title="Business Tax Preparation & Filing Services | JNB LLC | Littleton CO"
        description="In-house business tax preparation, estimated tax planning, 1099 & W-2 filings, and CPA coordination for small businesses. No scrambling, no surprises. Organized tax filing from your bookkeeper. Serving Littleton CO, Denver, and nationwide."
        keywords="business tax preparation, small business tax filing, tax preparer near me, estimated tax planning, quarterly tax estimates, 1099 filing, W-2 filing, CPA coordination, business tax return, tax season preparation, in-house tax prep, bookkeeper tax filing, Littleton CO tax preparation, Denver business taxes, Colorado tax services, small business tax help, tax compliance, year-end tax reporting, organized tax filing, tax planning services"
        canonical="https://jnbllc.com/services/tax-preparation"
      />
      <ServicePageLayout
        title="Business Tax Preparation"
        tagline="Tax season should not feel like a crisis."
        intro="We prepare business tax filings in-house and collaborate with CPAs when appropriate. Because organized books make taxes simple."
        philosophy="Your books should make tax season boring. We aim for boring."
        sectionTitle="What We Support"
        blocks={[
          {
            title: "Business Tax Filing",
            desc: "Complete business tax preparation handled in-house with year-end financial reporting that's already organized and reconciled.",
          },
          {
            title: "Estimated Tax Planning",
            desc: "Quarterly estimates based on real numbers so you're not scrambling or overpaying. Structured planning instead of guessing.",
          },
          {
            title: "1099 & W-2 Filings",
            desc: "Contractor and employee filings handled accurately and on time. Compliance without the headache.",
          },
          {
            title: "CPA Coordination",
            desc: "When complexity demands it — multi-entity structures, specialized situations — we coordinate directly with CPAs. You don't manage the handoff.",
          },
        ]}
        extras={[
          {
            title: "How It Works",
            content: "If we've handled your bookkeeping, tax prep becomes clean and predictable. Your financials are already organized, categorized, and reconciled. We walk into tax season prepared — not scrambling. If we haven't handled your bookkeeping, we'll still bring structure to it. We'll organize what exists, clean what's messy, and file accurately.",
          },
          {
            title: "Why In-House Matters",
            content: "When your bookkeeper and your tax preparer are the same firm, nothing falls through the cracks. No miscommunication between teams. No duplicated effort. No surprises.",
          },
          {
            title: "The Goal",
            content: "No scrambling. No surprises. No fire drills. Just organized financials, filed correctly, on time, every time.",
          },
        ]}
        prevLink={{ label: "Bookkeeping", href: "/services/bookkeeping-accounting" }}
        nextLink={{ label: "Fractional CFO", href: "/services/fractional-cfo" }}
      />
    </>
  );
}
