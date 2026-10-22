# How to manage the Insights page articles

All articles live in **one file**: `insights.js`. Nothing else needs to be touched.
The Insights page (blog.html) and every article page (blog-post.html) read from it automatically.

## Add an article

1. Open `insights.js`.
2. Scroll to the bottom — there is a commented `TEMPLATE` block.
3. Copy it, paste it inside the `INSIGHTS` list (just after `const INSIGHTS = [` if you want it to appear first on the page).
4. Fill in:
   - `id` — must be unique, lowercase, no spaces. The link becomes `blog-post.html?id=your-id`
   - `icon`, `badge`, `badgeIcon` — what the card on the Insights page looks like
   - `title`, `description`, `date`, `readTime` — the card text
   - `content` — the article body (HTML between backticks `` ` ``)

## Add an image to an article

1. Put the image file in the `insights-media/` folder (create it if it doesn't exist).
2. Reference it inside `content`:

```html
<img src="insights-media/my-dashboard.jpg" alt="Short description of the image">
```

## Add a link inside an article

```html
<a href="https://www.reddit.com/r/example" target="_blank" rel="noopener noreferrer">link text</a>
```

## Edit or delete an article

- **Edit:** find the block (its `id` is at the top) and change the text.
- **Delete:** remove the whole block — from its `{` down to its `},`.

## Publish (makes it live for the client)

Push the change to the `fresh-snapshot` branch on GitHub — the site updates in about a minute:

```bash
git add insights.js insights-media/
git commit -m "Add new insights article"
git push origin fresh-snapshot
```

Or simply ask the agent to publish the change for you.
