import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";

export default function FractionalCFO() {
  return (
    <>
      <SEOHead
        title="Fractional CFO Services for Small Business | JNB LLC | Littleton CO"
        description="Fractional CFO services for growing small businesses. Cash flow forecasting, hiring analysis, margin analysis, pricing strategy, KPI tracking, and scenario modeling. Customized financial leadership without the full-time cost. Serving Littleton CO, Denver, and nationwide."
        keywords="fractional CFO, fractional CFO services, outsourced CFO, part-time CFO, small business CFO, cash flow forecasting, hiring analysis, margin analysis, pricing strategy, KPI tracking, scenario modeling, financial leadership, business strategy, revenue growth, profitability analysis, financial planning, CFO for hire, virtual CFO, Littleton CO CFO, Denver fractional CFO, Colorado financial consulting, small business financial strategy, embedded CFO, strategic financial review"
        canonical="https://jnbllc.com/services/fractional-cfo"
      />
      <ServicePageLayout
        title="Fractional CFO Services"
        tagline="Once your books are stable, the pressure shifts. Growth creates complexity."
        intro="You start asking different questions: Are we profitable enough? Can we afford to hire? Why are we busy but not scaling? That's when bookkeeping alone isn't enough. That's where I step in differently."
        philosophy="This is not outsourced advice from a distance. This is embedded financial leadership built around your business and your capacity."
        sectionTitle="CFO Work May Include"
        blocks={[
          {
            title: "Cash Flow Forecasting",
            desc: "See what's coming before it hits. Model revenue timing, expense cycles, and cash positions weeks and months out.",
          },
          {
            title: "Hiring & Compensation",
            desc: "Know exactly what a new hire costs — fully loaded — and when you can afford it without guessing.",
          },
          {
            title: "Margin Analysis",
            desc: "Understand profitability by service line, client, or job type. Find the work that actually makes money.",
          },
          {
            title: "Pricing Strategy",
            desc: "Set prices based on real cost data, not vibes. Know your floor rate and build from there.",
          },
          {
            title: "KPI Tracking",
            desc: "Define and monitor the numbers that actually matter for your business — not vanity metrics.",
          },
          {
            title: "Scenario Modeling",
            desc: "Run the \"what ifs\" with real numbers. New equipment, new location, lost client — model it before you commit.",
          },
        ]}
        extras={[
          {
            title: "This Is Not a Template Package",
            content: "Some owners want to be trained. Some want partnership. Some want embedded financial leadership. I customize, teach, train, and run alongside owners — if that's what they want.",
          },
          {
            title: "How Engagement Works",
            content: "We start with a strategic review. We look at current financial visibility, growth pressure, and decision bottlenecks. Then we build scope intentionally. Fractional CFO services are customized based on revenue size, team structure, operational complexity, reporting needs, and frequency of support. No one-size-fits-all retainers. No corporate nonsense. Just structured financial leadership.",
          },
          {
            title: "Built on a Strong Foundation",
            content: "Most Fractional CFO clients start with bookkeeping through JNB LLC. Because strategy without accurate numbers is guessing. When the foundation is clean, decisions get clearer. When decisions get clearer, growth gets calmer.",
          },
        ]}
        prevLink={{ label: "Tax Preparation", href: "/services/tax-preparation" }}
        nextLink={{ label: "Financial Systems", href: "/services/financial-systems" }}
      />
    </>
  );
}
