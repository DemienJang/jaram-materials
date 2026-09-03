# Repository Guidelines

## Project Purpose

This repository is the local operating folder for Jang Jaesik's integrated Naver blog workflow. It combines blog drafting, content research, threads, card news, education materials, title image planning, and posting management in one place.

The core rule is content-first operation. Work is organized by content item, not by function or chat room. A blog post is the source content; threads, card news, education materials, and title images are derived from that post.

## Required Reading Order

Before starting any work, read this file and `guides/00_MASTER_GUIDE.md`.

Then read the guide that matches the task:

- Blog writing or revision: `guides/01_BLOG_STYLE_GUIDE.md`
- Thread conversion: `guides/02_THREAD_GUIDE.md`
- Card news planning or production: `guides/03_CARDNEWS_GUIDE.md`
- Education material creation: `guides/04_EDU_MATERIAL_GUIDE.md`
- Title image planning or prompts: `guides/05_TITLE_IMAGE_GUIDE.md`
- Topic research or source collection: `guides/06_CONTENT_RESEARCH_GUIDE.md`
- Posting schedule or channel expansion: `guides/07_POSTING_WORKFLOW.md`
- Importing previous or legacy content: `guides/08_LEGACY_IMPORT_GUIDE.md`

## Project Structure

- `guides/`: Local operating rules and style guides. Keep project instructions here, not only in external settings.
- `contents/`: One folder per content item, for example `contents/2026-09-sample-content/`.
- `templates/`: Reusable templates for card news, education files, HTML, and DOCX.
- `outputs/`: Final exported or published-ready files grouped by format.
- `archive/`: Completed or inactive content folders.
- `incoming/`: Temporary holding area for previous or external content before selective import.

## Content Folder Standard

Each content folder should use this structure when relevant:

- `00_brief.md`: Topic, category, core question, real experience, source notes, audience, and required outputs.
- `01_blog.md`: Main Naver blog post.
- `02_threads.md`: Short thread version derived from the blog post.
- `03_cardnews.md`: Card news outline or script.
- `04_edu_material.md`: Education material draft.
- `05_image_prompt.md`: Title image direction and generation prompt.
- `output/`: Final files for that content item.

## Operating Principles

Do not invent personal experiences. Extract scenes, questions, and meaning from user-provided experience, notes, sermons, lectures, reading records, coaching records, or conversations.

Start by creating or updating `00_brief.md`. If a blog post is needed, create `01_blog.md` first. Create derived outputs in the same content folder and save final production files under `output/` or the root `outputs/` folders.

At the end of each task, summarize completion status and the next recommended action.
