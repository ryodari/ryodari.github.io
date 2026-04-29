# beparano.id

Source code for my personal website at [beparano.id](https://beparano.id).

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), hosted on GitHub Pages. Blog posts are written in Markdown.

## Local development

```sh
npm install
npm run dev
```

## Adding a blog post

Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: "My post"
description: "A short description."
date: 2026-04-22
tags: [some, tags]
image: "/images/some-folder/some-file.jpeg"
---

Content goes here.
```

Images go in `public/images/` and are referenced as `/images/filename.jpg`.

## Deployment

Pushing to `main` triggers a GitHub Actions workflow that builds and deploys to GitHub Pages automatically.
