# JNB Website Update — February 2026
## What's in this package

### NEW FILES (add to your repo):
- `blog-why-the-owl.html` — 🦉 Owl story blog post (SEO-heavy with FAQ schema, OG tags, keywords)
- `blog-the-pacesetter.html` — Pacesetter blog post
- `lifeline.html` — Lifeline product landing page (Coming Soon)

### UPDATED FILES (replace existing):
- `blog.html` — Updated blog listing with both new posts at the top
- `styles.css` — Enhanced mobile-first CSS (better cards, typography, mobile nav, spacing)
- `_redirects` — Updated with new page redirects

### WHAT TO DO:

#### Option 1: Claude Code (recommended)
```bash
cd ~/jnb-site  # or wherever your repo is
# Copy all files from this package into the repo root
# Then:
git add .
git commit -m "Add owl + pacesetter blogs, Lifeline page, mobile refresh"
git push
```

#### Option 2: Manual
1. Download this zip
2. Copy ALL files into your local `jnb-site` repo folder
3. Push to git (Netlify auto-deploys)

---

## HOMEPAGE LIFELINE SECTION

Add this HTML snippet to your `index.html` — right BEFORE the "Ready to make sense of your numbers?" CTA section:

```html
<!-- Lifeline Preview -->
<section class="lifeline-preview">
    <div class="lifeline-inner">
        <div>
            <span class="lifeline-badge">Coming Soon</span>
            <h2>Meet Lifeline</h2>
            <p>Time tracking, billing, and accounts receivable for service businesses. Built by someone who actually runs your books.</p>
            <ul class="lifeline-features">
                <li><span class="icon">&#x1F4B8;</span> Job completes → invoice drafts automatically</li>
                <li><span class="icon">&#x23F1;</span> GPS-stamped time tracking for field teams</li>
                <li><span class="icon">&#x1F9B5;</span> Automated AR reminders — stop chasing money</li>
                <li><span class="icon">&#x1F4CA;</span> Real-time business pulse dashboard</li>
            </ul>
            <a href="/lifeline" class="btn btn-primary">Learn More</a>
        </div>
        <div class="lifeline-mockup">
            <div class="mockup-header">
                <div class="mockup-dot"></div>
                <div class="mockup-dot"></div>
                <div class="mockup-dot"></div>
            </div>
            <div class="mockup-row"><span class="label">Revenue (MTD)</span><span class="value green">$47,230</span></div>
            <div class="mockup-row"><span class="label">Outstanding AR</span><span class="value red">$12,840</span></div>
            <div class="mockup-row"><span class="label">Team Utilization</span><span class="value">78.4%</span></div>
            <div class="mockup-row"><span class="label">Jobs This Week</span><span class="value">24</span></div>
            <div class="mockup-row"><span class="label">Past Due (30+)</span><span class="value red">$4,200</span></div>
            <div class="mockup-row"><span class="label">Avg Invoice Cycle</span><span class="value green">3.2 days</span></div>
        </div>
    </div>
</section>
```

## SERVICES-WEB.HTML UPDATE

Add this to your services-web.html page, in the services list:

```html
<div style="background: var(--teal-glow); border: 1px solid rgba(26,138,138,0.15); border-radius: 12px; padding: 2rem; margin-top: 2rem;">
    <h3>&#x1F49C; Lifeline — Our Platform</h3>
    <p>We don't just consult — we build. Lifeline is our time tracking, billing, and AR platform purpose-built for service businesses. It connects your field to your financials so nothing falls through the cracks.</p>
    <a href="/lifeline" style="color: var(--teal); font-weight: 500;">Learn more about Lifeline →</a>
</div>
```

## NAV UPDATE

All new pages include "Lifeline" in the nav. Update your existing pages' nav to add:
```html
<li><a href="/lifeline">Lifeline</a></li>
```
(Add it before the "Let's Talk" CTA link)

## SEO NOTES

The owl post is loaded with:
- FAQ schema (appears in Google as expandable questions)
- BlogPosting schema
- Open Graph + Twitter cards
- 15+ targeted keywords including "owl logo meaning", "owl symbolism business", "small business branding"
- Internal links to other blog posts
- Author markup for Sara Hass

Google should pick this up within 1-2 weeks. For faster indexing, submit the URL in Search Console.
