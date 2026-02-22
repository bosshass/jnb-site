import CaseStudyPageLayout from "@/components/CaseStudyPageLayout";

export default function BusinessConsulting() {
  return (
    <CaseStudyPageLayout
      industry="Business Consulting"
      title="You Can't Win Everyone"
      subtitle="Same tools. Same consultant. Same company. Completely different outcomes — because one side committed and the other didn't."
      seoDescription="JNB LLC case study: An honest look at what happens when the same systems, tools, and consultant produce opposite results. One side committed. The other didn't. We share this one honestly."
      seoKeywords="business consulting case study, honest consulting, client commitment, same tools different results, JNB LLC, small business consulting, financial systems, utilization analysis"
    >
      <h2>The Situation</h2>
      <p>
        A services company with multiple lines of business operating under one roof. Same leadership team, same tools available, same consultant providing financial analysis, operational frameworks, and profitability reporting. Every part of the business got the same attention, the same systems, and the same recommendations.
      </p>
      <p>
        The only variable was whether the people running each area chose to use what was built for them.
      </p>

      <h2>What We Built</h2>
      <p>
        Utilization analysis. Revenue and margin breakdowns by business line. Profitability reporting that showed exactly where money was being made and where it was being lost. Pricing optimization. Operational frameworks designed to improve efficiency and capture more billable work.
      </p>
      <p>
        Everything was delivered the same way, at the same time, with the same level of support. No part of the business got more attention than another. The playing field was level.
      </p>

      <h2>What Happened</h2>

      <div className="my-8 grid sm:grid-cols-2 gap-6">
        <div className="bg-[#0D7377]/5 rounded-xl p-6 border border-[#0D7377]/10">
          <h4 className="font-serif text-lg font-bold text-[#0D7377] mb-4">Side A — Committed</h4>
          <ul className="space-y-3 font-sans text-sm text-[#1a1a2e]/60">
            <li><strong className="text-[#0D7377]">Implemented</strong> — Adopted the systems and used them</li>
            <li><strong className="text-[#0D7377]">Revenue Grew</strong> — Real, measurable growth</li>
            <li><strong className="text-[#0D7377]">Strong Margins</strong> — Healthy and improving</li>
            <li><strong className="text-[#0D7377]">Proof</strong> — The systems work when people use them</li>
          </ul>
        </div>
        <div className="bg-[#1a1a2e]/5 rounded-xl p-6 border border-[#1a1a2e]/10">
          <h4 className="font-serif text-lg font-bold text-[#1a1a2e]/60 mb-4">Side B — Resisted</h4>
          <ul className="space-y-3 font-sans text-sm text-[#1a1a2e]/60">
            <li><strong className="text-[#1a1a2e]/50">Same Tools</strong> — Ignored the recommendations</li>
            <li><strong className="text-[#1a1a2e]/50">Revenue Shrank</strong> — Contraction, not growth</li>
            <li><strong className="text-[#1a1a2e]/50">Thin Margins</strong> — Getting thinner</li>
            <li><strong className="text-[#1a1a2e]/50">Same Systems</strong> — Just never used</li>
          </ul>
        </div>
      </div>

      <p>
        Same company. Same tools. Same consultant. One side grew. The other contracted. The only difference was buy-in.
      </p>

      <h2>The Honest Truth</h2>
      <p>
        This is one of the hardest case studies to share, because the instinct as a consultant is to make every engagement look like a win. But the reality of this work is that you can't force results. You can build the systems, present the data, and make the recommendations — but if the person on the other side of the table doesn't want to change, they won't.
      </p>
      <p>
        And that's not a failure. It's information.
      </p>
      <p>
        The side that committed proved that the systems work. The growth was real, the margins were healthy, and the data backed up every decision. That's the proof of concept. The side that resisted proved something equally important: that no amount of analysis matters if nobody acts on it.
      </p>

      <h2>Why We Share This</h2>
      <p>
        Most consultants would bury this story. Show the wins, hide the rest. But we think this is one of the most important things a prospective client can understand about working with us: we will build you incredible tools, give you clear data, and walk alongside you every step — but we can't do the work for you.
      </p>
      <p>
        The businesses that grow with us are the ones that commit to using what we build. The ones that implement the recommendations, trust the data, and show up to the monthly meetings ready to act. That's the common thread across every success story on this page.
      </p>
      <p>
        We'd rather be honest about that upfront than pretend every engagement is a fairy tale.
      </p>

      <blockquote>
        <strong>The lesson:</strong> You can't win everyone — and trying to will burn you out. The consultant's job is to build the tools, present the truth, and walk alongside the client. The client's job is to decide whether to act on it. When they do, the results speak for themselves. When they don't, that's not a failure. That's a boundary. And knowing the difference is how you stay in this business long enough to help the ones who are ready.
      </blockquote>
    </CaseStudyPageLayout>
  );
}
