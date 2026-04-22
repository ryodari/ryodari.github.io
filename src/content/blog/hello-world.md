---
title: "Hello, World"
description: "The first post on this site — a brief introduction and what to expect."
date: 2026-04-22
tags: ['tag 1', 'tag 2']
---

This is the first post on this site. Consider it a placeholder and a test of the blog system.

## What this site is about

This is my personal corner of the internet. I'll write about things that interest me:
software engineering, design, tooling, and whatever else occupies my mind.

Posts will primarily be in English, with some content available in German as well.

## The stack

This site is built with [Astro](https://astro.build), styled with Tailwind CSS, and hosted
on GitHub Pages. Blog posts are written in Markdown. The source is available on GitHub.

## Code snippets

Inline code looks like this: `const greeting = "hello"`.

A fenced code block with syntax highlighting:

```typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("world"));
```

You can also specify other languages — `bash`, `json`, `yaml`, `css`, and so on:

```bash
npm run build
```

## Images

Images are stored in `public/images/` and referenced with an absolute path starting from
the domain root — no `public/` prefix needed in the Markdown:

```markdown
![A descriptive alt text](/images/your-photo.jpg)
```

That renders as:

![Placeholder image — 800×450](/images/placeholder.svg)

The alt text (in the square brackets) is important for accessibility and SEO.
For photos that are purely decorative you can leave it empty: `![]( /images/deco.jpg)`.

A caption can be added as a `<figcaption>` in MDX, but in plain Markdown the simplest
convention is italics on the line directly below:

```markdown
![Alt text](/images/your-photo.jpg)
*This is the caption.*
```

**Folder convention:**

```
public/
└── images/
    ├── placeholder.svg      # generic placeholder
    ├── avatar.jpg           # used on the homepage
    └── posts/               # per-post assets
        └── hello-world/
            └── screenshot.png
```

Posts with many assets get their own subdirectory: `public/images/posts/your-slug/`.

## Footnotes

Footnotes work with the standard Markdown syntax.[^1] You can have multiple,[^2] and they
render as numbered superscripts that link to the reference at the bottom of the post.

The reference list is defined anywhere in the document (convention: end of file) and Astro
will always render them at the very bottom.[^3]

---

More to come.

<3 Pepe

[^1]: This is the first footnote. It can contain **formatting** and [links](https://astro.build).
[^2]: A second footnote. Note that the numbers are assigned automatically based on order of
      appearance in the text, not by the number you write here.
[^3]: Astro uses [remark-gfm](https://github.com/remarkjs/remark-gfm) by default, which
      includes footnote support — no extra plugin needed.
