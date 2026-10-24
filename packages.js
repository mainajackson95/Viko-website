/* ==========================================================================
   VIKO PACKAGES — one file for both packages, used by:
     • index.html (homepage package cards + hero preview)
     • package.html (full package detail page, example: package.html?id=ads)
   ========================================================================== */

const PACKAGES = {
    ads: {
        id: 'ads',
        title: 'Reddit Ads Accelerator',
        price: '$80',
        period: '/ week',
        tag: '55,000+ targeted impressions every week',
        chip: 'Fast traffic',
        summary: 'Fully managed Reddit ads for qualified impressions, clicks, leads, and bookings.',
        lead: 'Drive real results on Reddit with a fully managed advertising service. We create, launch, optimize, and monitor high-performing Reddit Ads that feel native to the platform while delivering measurable ROI.',
        includedTitle: 'What’s included every week',
        included: [
            'Creation of 1 high-impact Reddit Ad with compelling copy and professional visual creative tailored to your niche',
            'Precise targeting in high-intent subreddits where your ideal customers are active',
            'Daily monitoring, bid optimization, and A/B testing',
            'Real-time performance dashboard covering impressions, clicks, CTR, CPC, leads, and conversions',
            'Full compliance with Reddit advertising policies',
            'Weekly report with actionable insights and recommendations'
        ],
        proof: {
            label: 'Proof from a live campaign',
            title: 'Beyond the Plains Safaris — High-Performance Reddit Ads Placement & Optimization',
            metrics: '471,707 impressions, 10,303 clicks, 135 leads, and 66 purchases from one managed Reddit Ads campaign.',
            url: 'case-study.html?id=beyond-plains-ads'
        },
        note: 'Perfect for safari operators, SaaS companies, e-commerce brands, and service businesses ready to scale visibility and generate qualified traffic fast.',
        cta: 'Start the Reddit Ads Accelerator'
    },
    organic: {
        id: 'organic',
        title: 'Organic Growth Engine',
        price: '$210',
        period: '/ week',
        tag: '12+ authentic brand mentions every week',
        chip: 'Organic + AI',
        summary: 'Steady organic visibility through strategic posts, comments, and LLM-friendly Reddit placement.',
        lead: 'Build authentic brand visibility on Reddit with consistent, high-quality engagement every single week. We craft strategic posts and comments that position your brand as a trusted authority while supporting long-term AI and LLM discoverability.',
        includedTitle: 'What’s included every week',
        included: [
            '6 premium organic posts placed in the most relevant high-engagement subreddits for your niche',
            '12 strategic promotional comments across new posts and existing high-traffic Reddit threads',
            '1 contextual brand mention on 5 existing high-traffic threads already ranking on Google',
            'Full subreddit research and content creation tailored to your audience',
            'Natural, experience-based storytelling that survives moderation',
            'Karma building, reputation management, and a weekly report covering views, upvotes, comments, sentiment, and estimated reach'
        ],
        proof: null,
        note: 'Perfect for SaaS, Fintech, health and wellness, travel, and service brands looking for steady organic presence and AI-powered visibility.',
        cta: 'Start the Organic Growth Engine'
    },
    ambassador: {
        id: 'ambassador',
        title: 'Reddit Ambassador Program',
        price: '$85',
        period: '/ week',
        tag: 'Official brand account, professionally managed',
        chip: 'Brand voice',
        summary: 'We run an official Reddit account for your brand and act as your professional, transparent voice in the communities that matter.',
        lead: 'Own the conversation with a real, named presence. We take over your official branded Reddit account and represent you in the communities that matter — joining discussions, answering questions, and speaking transparently as your brand. Customers get a professional voice they can talk to directly.',
        includedTitle: 'What’s included with your account',
        included: [
            'Official branded account managed on your behalf',
            'Active participation in relevant subreddits',
            'Open, helpful advice given as a brand representative',
            'Replies to mentions, questions, and brand-related threads',
            'Drafts shared with you for review before posting',
            'Monthly summary of conversations, sentiment, and insights'
        ],
        proof: null,
        note: 'Perfect for brands that want a permanent, transparent home on Reddit — a professional, accountable voice rather than anonymous promotion.',
        cta: 'Start the Reddit Ambassador Program'
    }
};
