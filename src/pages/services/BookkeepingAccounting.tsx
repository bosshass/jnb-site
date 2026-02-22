import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";

export default function BookkeepingAccounting() {
  return (
    <>
      <SEOHead
        title="Bookkeeping & Accounting Services for Small Business | JNB LLC | Littleton CO"
        description="Professional virtual bookkeeping and accounting services for small businesses. Monthly bookkeeping, QuickBooks cleanup, catch-up bookkeeping, payroll, sales tax, bank reconciliation, and tax-ready financials. Serving Littleton CO, Denver metro, and nationwide."
        keywords="bookkeeping services, small business bookkeeping, virtual bookkeeper, QuickBooks cleanup, accounting services, bank reconciliation, monthly bookkeeping, catch-up bookkeeping, payroll services, sales tax filing, 1099 preparation, W-2 filing, small business accounting, bookkeeper near me, Littleton CO bookkeeper, Denver bookkeeping, Colorado accounting, fractional bookkeeper, outsourced bookkeeping, cloud bookkeeping, FreshBooks, Xero, Gusto, Stripe accounting, Shopify bookkeeping, contractor bookkeeping, service business accounting"
        canonical="https://jnbllc.com/services/bookkeeping-accounting"
      />
      <ServicePageLayout
        title="Professional Bookkeeping & Accounting"
        tagline="You didn't start your business to reconcile transactions at night."
        intro="If your books are behind, messy, or unclear — that's where we come in. JNB LLC provides structured, reliable bookkeeping and accounting support for small businesses that want clarity and consistency."
        philosophy="Clean books are the foundation. If the foundation is cracked, nothing else works."
        sectionTitle="What We Handle"
        blocks={[
          {
            title: "Monthly Bookkeeping",
            desc: "Transaction categorization, bank & credit card reconciliation, financial statement preparation, and clean organized accounting files — every month, on time.",
          },
          {
            title: "Catch-Up & Cleanup",
            desc: "QuickBooks cleanup, historical corrections, bringing books current, and fixing miscategorized accounts. We untangle the mess so you can move forward.",
          },
          {
            title: "Payroll & Sales Tax",
            desc: "Payroll coordination, sales tax tracking and reporting, 1099 & W-2 preparation, and state compliance guidance — handled consistently.",
          },
          {
            title: "Tax-Ready Financials",
            desc: "Organized year-end reporting, direct tax preparation in-house, and CPA collaboration when appropriate. We prepare business taxes and ensure accuracy.",
          },
        ]}
        extras={[
          {
            title: "What Working With Us Looks Like",
            content: "Consistent monthly reporting. Clear communication. No disappearing acts. You'll know where revenue stands, what expenses are doing, and what cash actually looks like. No fluff. No accounting ego.",
          },
          {
            title: "Tools We Work With",
            content: "We support modern accounting and operational platforms including QuickBooks Online, FreshBooks, Xero, Gusto, Stripe, Shopify, service-based field software, and custom reporting systems.",
          },
          {
            title: "Who We Serve",
            content: "Small and growing businesses including contractors, home service companies, professional service firms, agencies, consultants, and owner-operated businesses. If you generate revenue through services, projects, or client work — clean bookkeeping matters.",
          },
          {
            title: "Virtual, But Real",
            content: "JNB LLC operates virtually, serving clients across the United States, with roots in Littleton, Colorado. Whether you're searching for virtual bookkeeping services, small business accounting, or a bookkeeper in the Denver metro area — we're built for it.",
          },
        ]}
        nextLink={{ label: "Tax Preparation", href: "/services/tax-preparation" }}
      />
    </>
  );
}
