// Mark the current section in the main navigation (Home / Services / Case studies / Insights).
(function () {
    var page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    var map = {
        'index.html': 'index.html',
        'service.html': 'index.html#capabilities',
        'package.html': 'index.html#capabilities',
        'case-study.html': 'case-study.html',
        'blog.html': 'blog.html',
        'blog-post.html': 'blog.html'
    };
    var current = map[page];
    if (!current) return;
    document.querySelectorAll('.primary-nav a').forEach(function (a) {
        if (a.getAttribute('href') === current) {
            a.setAttribute('aria-current', 'page');
        }
    });
})();
