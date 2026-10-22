/* ============================================================================
   VIKO INSIGHTS — EVERY ARTICLE ON THE INSIGHTS PAGE LIVES IN THIS ONE FILE
   ============================================================================

   ✅ HOW TO ... (quick guide)

   ADD AN ARTICLE
     1. Copy the TEMPLATE block at the bottom of this file.
     2. Paste it anywhere inside the [ ] list (usually right after the line
        that says `const INSIGHTS = [` so it shows first on the page).
     3. Fill in title, description, date, readTime and your content.
     4. Choose a unique `id` (example: 'reddit-ads-checklist') — the article
        URL becomes blog-post.html?id=reddit-ads-checklist

   EDIT AN ARTICLE
     Find its block and change the text. Everything between the backticks
     (` `) is the article body and uses normal HTML.

   DELETE AN ARTICLE
     Select its whole block — from the opening `{` to the closing `},` —
     delete it, save. (Do not delete the [ or ] that wrap the list.)

   WRITE IMAGES AND LINKS WITHIN AN ARTICLE
     Image:  <img src="insights-media/my-dashboard.jpg" alt="Short description">
             → put the actual image file inside the `insights-media` folder.
     Link:   <a href="https://www.reddit.com/..." target="_blank" rel="noopener noreferrer">link text</a>
     Bold:   <strong>bold text</strong>
     Heading: <h2>Section title</h2>
     List:   <ul><li>point one</li><li>point two</li></ul>

   PUBLISHING
     After saving this file, push it to GitHub (or ask the agent to do it)
     and the live site updates in about a minute.

   RULES OF THUMB
     • The order of the blocks = the order on the Insights page
       (first block = top card). New articles usually go first.
     • Keep every field line exactly as shown — don't rename `title:`,
       `content:` etc.
     • Do not use the ` or $ characters inside your article text.
   ============================================================================ */

const INSIGHTS = [
    {
        id: 'blog-1',
        icon: 'fab fa-reddit-alien',
        badge: '342 upvotes',
        badgeIcon: 'fas fa-arrow-up',
        title: 'Reddit karma in 2025: why authority matters more than ever',
        description: 'How Reddit’s algorithm changes affect brand visibility and what to do about it.',
        date: 'May 10, 2026',
        readTime: '5 min read',
        content: `
            <p><strong>The Reddit ecosystem has changed.</strong> In 2025, karma and account history are now strong signals that decide whether your content lands in front of a community or gets filtered out.</p>
            <p>Brands that treat Reddit as a long-term community channel are winning. Short-term self-promotion gets buried fast, while authority-based storytelling continues to surface.</p>
            <img src="case-study-1.png" alt="Reddit authority campaign snapshot">
            <h2>What actually matters now</h2>
            <p>Top-performing Reddit posts share three traits:</p>
            <ul>
                <li>True relevance to the subreddit</li>
                <li>High-value comments and follow-up engagement</li>
                <li>Author credibility built over time</li>
            </ul>
            <h2>How to use this for your brand</h2>
            <p>Start by mapping out the communities your audience already trusts. Create a posting cadence that prioritizes helpful guides, not ads. Then, layer in subtle brand mentions after trust is established.</p>
        `
    },
    {
        id: 'blog-2',
        icon: 'fas fa-fire',
        badge: '128 comments',
        badgeIcon: 'fas fa-comments',
        title: 'How to build Reddit authority without direct promotions',
        description: 'Practical strategies for organic community growth and long-term karma gains.',
        date: 'April 22, 2026',
        readTime: '6 min read',
        content: `
            <p>Direct promotion is rarely welcomed on Reddit. The smarter approach is to earn authority through value-first contributions.</p>
            <h2>Authority checklist</h2>
            <ul>
                <li>Respond to questions with real answers</li>
                <li>Share case studies without overt selling</li>
                <li>Use comments to help, not to pitch</li>
            </ul>
            <p>This is the content style that builds trust and drives better long-term results.</p>
        `
    },
    {
        id: 'blog-3',
        icon: 'fas fa-rocket',
        badge: '76% growth',
        badgeIcon: 'fas fa-chart-line',
        title: 'Reddit content funnels: turning posts into qualified leads',
        description: 'How to design campaigns that convert community engagement into business results.',
        date: 'March 30, 2026',
        readTime: '7 min read',
        content: `
            <p>Reddit content can be the top of a funnel when it’s designed to educate first, then invite conversation.</p>
            <h2>Funnel stages</h2>
            <ol>
                <li>Awareness: a high-value post that solves a problem</li>
                <li>Interest: comments that answer follow-up questions</li>
                <li>Consideration: private messages or site visits driven by trust</li>
            </ol>
            <p>This process works best when the brand avoids hard selling and focuses on community value.</p>
        `
    },
    {
        id: 'blog-4',
        icon: 'fas fa-microchip',
        badge: 'AI insights',
        badgeIcon: 'fas fa-robot',
        title: 'AI SEO for Reddit: optimizing content for LLM indexing',
        description: 'How to structure your Reddit posts for better AI search visibility.',
        date: 'February 18, 2026',
        readTime: '8 min read',
        content: `
            <p>AI search now indexes Reddit content more aggressively. Posts that answer questions clearly are more likely to be surfaced.</p>
            <h2>Best practice</h2>
            <p>Use concise headings and write responses that can be read independently of the comments thread.</p>
            <img src="case-study-7-section-2.jpg" alt="Reddit campaign performance dashboard">
        `
    },
    {
        id: 'blog-5',
        icon: 'fas fa-chart-line',
        badge: 'Community',
        badgeIcon: 'fas fa-users',
        title: 'Building community trust: the foundation of Reddit marketing',
        description: 'Why authentic engagement beats paid promotion every time.',
        date: 'January 10, 2026',
        readTime: '6 min read',
        content: `
            <p>Trust is the most valuable currency on Reddit. Without it, even great content will fail.</p>
            <h2>What trust looks like</h2>
            <p>Authentic accounts, consistent activity, and real problem solving.</p>
        `
    },
    {
        id: 'blog-6',
        icon: 'fas fa-shield-halved',
        badge: 'Reputation',
        badgeIcon: 'fas fa-lock',
        title: 'Reputation management on Reddit: crisis prevention and recovery',
        description: 'How to protect and rebuild your brand’s online reputation.',
        date: 'December 5, 2025',
        readTime: '9 min read',
        content: `
            <p>Reddit communities can turn quickly. The best defense is proactive reputation management.</p>
            <h2>Recovery plan</h2>
            <p>Respond transparently, own mistakes, and continue providing value.</p>
        `
    },
    /* ======================================================================
       TEMPLATE — copy from here ...
       {
           id: 'my-new-article',                          // unique, used in the URL
           icon: 'fas fa-lightbulb',                      // card icon
           badge: 'Strategy',                             // chip on the card
           badgeIcon: 'fas fa-tag',
           title: 'Your article title here',
           description: 'One or two lines shown under the title on the Insights page.',
           date: 'October 22, 2026',
           readTime: '4 min read',
           content: `
               <p>Your opening paragraph.</p>
               <h2>A section heading</h2>
               <p>More text with a <a href="https://example.com" target="_blank" rel="noopener noreferrer">link</a> and an <strong>bold</strong> word.</p>
               <ul><li>A bullet point</li><li>Another one</li></ul>
               <img src="insights-media/my-image.jpg" alt="Short description of the image">
           `
       },
       ... to here. Paste it above (inside the brackets), fill it in, save.
       ====================================================================== */
];
