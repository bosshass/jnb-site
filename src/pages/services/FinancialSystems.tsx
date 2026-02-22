import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";

export default function FinancialSystems() {
  return (
    <>
      <SEOHead
        title="Financial Systems & Custom Business Tools | JNB LLC | Littleton CO"
        description="Custom financial systems, internal dashboards, workflow automation, and operational tools for small businesses. Purpose-built technology that connects operations to financial clarity. Serving Littleton CO, Denver, and nationwide."
        keywords="financial systems, custom business tools, internal dashboards, workflow automation, business intelligence, custom reporting, operational tools, financial visibility, data dashboards, process automation, workflow redesign, custom software, business operations, financial reporting tools, small business technology, custom builds, operational efficiency, Littleton CO business tools, Denver financial systems, Colorado business consulting, spreadsheet replacement, business process improvement"
        canonical="https://jnbllc.com/services/financial-systems"
      />
      <ServicePageLayout
        title="Financial Systems & Custom Business Tools"
        tagline="At some point, spreadsheets stop working."
        intro="Manual reporting slows everything down. Disconnected systems create blind spots. That's when we design something better."
        philosophy="Every tool we design connects operations to financial clarity. Visibility, efficiency, and control — not complexity."
        sectionTitle="Systems Work May Include"
        blocks={[
          {
            title: "Internal Dashboards",
            desc: "Custom reporting dashboards that surface the numbers you need without digging through spreadsheets or logging into 4 different tools.",
          },
          {
            title: "Workflow Redesign",
            desc: "Eliminate redundant data entry, manual handoffs, and broken processes. Design workflows that actually match how your team operates.",
          },
          {
            title: "Financial Visibility Tools",
            desc: "Connect your accounting data to operational reality. See profitability, utilization, and performance without waiting for month-end.",
          },
          {
            title: "Custom Operational Builds",
            desc: "When off-the-shelf software doesn't fit, we build what does. Purpose-built tools designed around your specific business needs.",
          },
        ]}
        extras={[
          {
            title: "Not Tech for the Sake of Tech",
            content: "We don't build software because it's interesting. We build systems because we understand the financial pressure underneath. Every tool we design connects operations to financial clarity. Visibility, efficiency, and control — not complexity.",
          },
          {
            title: "How It's Scoped",
            content: "This work is scoped separately and built intentionally. It's not a retainer add-on. It's a defined project with clear deliverables. Not every business needs custom systems. The right businesses benefit significantly.",
          },
          {
            title: "When It's Needed",
            content: "You'll know when spreadsheets start breaking. When the same report takes 3 hours every week. When your team is entering data into 4 different places. When you can't answer a simple question about your business without digging. That's the moment. And when it hits, it changes everything.",
          },
        ]}
        prevLink={{ label: "Fractional CFO", href: "/services/fractional-cfo" }}
        nextLink={{ label: "Lifeline", href: "/#lifeline" }}
      />
    </>
  );
}
