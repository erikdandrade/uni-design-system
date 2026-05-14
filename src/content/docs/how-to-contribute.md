---
title: How to Contribute
description: A step-by-step guide for non-engineers on how to add and update content in the UNI Design System documentation.
sidebar:
  order: 2
---

This guide explains how anyone — designer, writer, or product manager — can add or update content in the UNI Design System documentation. No engineering experience required.

---

## Before you start

### What you'll need

1. **A code editor** — [Visual Studio Code](https://code.visualstudio.com/) is free and works great. Download and install it if you don't have it.
2. **Access to the GitHub repository** — Ask your team for access to the UNI Design System docs repository.
3. **The project on your computer** — Once you have access, clone the repository (ask an engineer to help the first time if needed).

### How the site works

Every page on this documentation site is a plain text file written in **Markdown** (`.md`). Markdown is a simple way to format text using symbols like `#` for headings and `**bold**` for bold text — no design tools or code needed.

When you save a file and push it to GitHub, the site automatically rebuilds and publishes your changes on Vercel within a few minutes.

---

## Understanding the folder structure

All documentation content lives in one folder:

```
src/
└── content/
    └── docs/
        ├── welcome-to-uni.md
        ├── how-to-contribute.md
        ├── foundations/
        │   ├── colors.md
        │   ├── typography.md
        │   └── ...
        ├── components/
        │   └── buttons/
        │       ├── button/
        │       │   ├── overview.md
        │       │   ├── usage.md
        │       │   ├── structure.md
        │       │   ├── code.md
        │       │   └── change-log.md
        │       └── icon-button/
        │           └── ...
        ├── inputs-and-selection/
        ├── indicators-and-status/
        ├── navigation/
        ├── messaging/
        └── layout/
```

**The folder structure is the navigation.** Every folder becomes a section in the left sidebar. Every `.md` file becomes a page. You don't need to touch any configuration — just create the files in the right place.

---

## The two types of pages

### Type 1 — Single page

Used for standalone topics like Foundations pages (Colors, Typography, Spacing).

```
foundations/
└── colors.md        ← one file = one page
```

The sidebar shows a single link to this page.

### Type 2 — Component page (with tabs)

Used for UI components that need multiple sections: Overview, Usage, Structure, Code, and Change Log.

```
components/
└── buttons/
    └── button/
        ├── overview.md      ← tab 1
        ├── usage.md         ← tab 2
        ├── structure.md     ← tab 3
        ├── code.md          ← tab 4
        └── change-log.md    ← tab 5
```

The sidebar shows one link ("Button") and the page shows a tab bar at the top to switch between sections.

The tab system is automatic — it works for any folder that contains files named `overview`, `usage`, `structure`, `code`, or `change-log`.

---

## Understanding frontmatter

Every documentation file starts with a small block of settings between two `---` lines. This is called **frontmatter**.

```markdown
---
title: "Colors"
sidebar:
  order: 2
---

Your page content starts here.
```

Here is what each field means:

| Field | What it does | Example |
|---|---|---|
| `title` | The page heading and browser tab title | `title: "Colors"` |
| `sidebar.order` | The position of this page within its section (lower = higher up) | `sidebar: order: 2` |
| `sidebar.label` | Override the text shown in the sidebar (useful for overview pages — see below) | `sidebar: label: "Button"` |
| `sidebar.hidden` | Set to `true` to hide a page from the sidebar but keep it accessible via tabs | `sidebar: hidden: true` |
| `description` | A short summary shown in search results and link previews | `description: "How colors are used in UNI"` |

:::tip[Indentation matters]
In frontmatter, `sidebar.order` must be written with two spaces of indentation under `sidebar:`. Copy the examples exactly, including the spaces.
:::

---

## Creating a new single page

Use this when you're adding a standalone topic — for example, a new foundations page like "Motion" or a new top-level guide.

### Step 1 — Create the file

Inside `src/content/docs/`, navigate to the right section folder and create a new `.md` file.

**Example:** Adding a "Motion" page to Foundations.

Create the file at:
```
src/content/docs/foundations/motion.md
```

### Step 2 — Add frontmatter

Open the file and add the frontmatter block at the very top:

```markdown
---
title: "Motion"
description: "Principles and guidelines for animation and transitions in UNI."
sidebar:
  order: 8
---
```

> **Tip on `sidebar.order`:** Look at the existing pages in the same folder to pick a number that places your page in the right position. Pages are sorted from lowest to highest number. If the last page is `order: 7`, use `order: 8` to place yours after it.

### Step 3 — Write your content

After the closing `---`, write your page content in Markdown. See the [Writing content in Markdown](#writing-content-in-markdown) section below for full guidance.

```markdown
---
title: "Motion"
description: "Principles and guidelines for animation and transitions in UNI."
sidebar:
  order: 8
---

Motion in UNI is used to guide attention, provide feedback, and create a sense of continuity across interactions.

## Principles

### Purposeful
Every animation should serve a function — never decorative.

### Responsive
Animations should feel instant on fast interactions and smooth on slower ones.
```

That's it. Save the file, and it will automatically appear in the sidebar under **Foundations**.

---

## Creating a new component page (with tabs)

Use this when you're documenting a UI component that needs multiple sections.

### Step 1 — Create the folder structure

Inside the right section (e.g., `components/buttons/`), create a new folder named after your component using lowercase letters and hyphens.

**Example:** Adding a "Floating Action Button" component.

Create this folder and files:
```
src/content/docs/components/buttons/floating-action-button/
├── overview.md
├── usage.md
├── structure.md
├── code.md
└── change-log.md
```

> **Naming rule:** Always use lowercase and hyphens for folder names. No spaces, no uppercase.
> - ✅ `floating-action-button`
> - ❌ `Floating Action Button`
> - ❌ `floatingActionButton`

### Step 2 — Write the overview.md file

The `overview.md` file is special — it's the one that appears in the sidebar. Its frontmatter uses `sidebar.label` to show the component name:

```markdown
---
title: "Overview"
description: "The Floating Action Button triggers a primary action on a screen."
sidebar:
  label: "Floating Action Button"
  order: 6
---

The Floating Action Button (FAB) is used for the most important action on a screen.

## When to use

Use a FAB when there is one primary action that users will perform frequently on a page.

## Variants

### Primary FAB
Used for the main call-to-action.

### Extended FAB
Includes a text label alongside the icon for additional clarity.
```

> **What `sidebar.label` does:** Without this, the sidebar would show "Overview" as the link text. With it set to `"Floating Action Button"`, the sidebar shows the component name — which is what users expect to see.

> **What `sidebar.order` does:** Controls the position of this component within its group (e.g., within the "Buttons" group). Pick a number higher than the existing components to add it at the end.

### Step 3 — Write the remaining tab files

Each of the other files (`usage.md`, `structure.md`, `code.md`, `change-log.md`) uses `sidebar.hidden: true` so they don't clutter the sidebar — they're only accessed through the tab bar at the top of the page.

**usage.md:**
```markdown
---
title: "Usage"
sidebar:
  hidden: true
---

## When to use

- Use a FAB for the single most important action on a screen.
- Avoid using more than one FAB per page.

## When not to use

- Don't use a FAB for destructive actions.
- Don't use a FAB inside a dialog or modal.

## Do and Don't

**Do** — Place the FAB in the bottom-right corner on mobile.

**Don't** — Use the FAB for secondary or less important actions.
```

**structure.md:**
```markdown
---
title: "Structure"
sidebar:
  hidden: true
---

## Anatomy

1. **Container** — The circular button background.
2. **Icon** — A 24px icon representing the action.
3. **Label** (Extended FAB only) — A short text label next to the icon.

## Sizing

| Size | Dimensions |
|------|-----------|
| Default | 56 × 56 px |
| Small | 40 × 40 px |
| Extended | 56px tall, variable width |
```

**code.md:**
```markdown
---
title: "Code"
sidebar:
  hidden: true
---

## Implementation

```jsx
import { FAB } from '@uni/components';

<FAB icon="add" label="Create" onClick={handleCreate} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | string | — | Icon name from the UNI icon library |
| `label` | string | — | Text label (Extended FAB only) |
| `variant` | `"primary"` \| `"secondary"` | `"primary"` | Visual style |
| `onClick` | function | — | Called when the button is clicked |
```

**change-log.md:**
```markdown
---
title: "Change Log"
sidebar:
  hidden: true
---

## v1.0.0 — May 2026

- Initial release of the Floating Action Button component.
- Available variants: Primary, Extended.
```

### Step 4 — Check it works

Save all five files. If you have the local preview running (see [Previewing your changes](#previewing-your-changes-locally)), refresh the browser and you'll see the new component appear in the sidebar with the correct tabs.

---

## Creating a new top-level section

If you need a completely new section in the sidebar (like a new "Patterns" or "Templates" category), follow these steps.

### Step 1 — Create the folder

Create a new folder inside `src/content/docs/`:

```
src/content/docs/patterns/
```

### Step 2 — Add your content files

Add `.md` files inside the folder following the same rules as above.

### Step 3 — Register the section in the sidebar config

This is the **one** time you'll need to edit a configuration file. Open `astro.config.mjs` (in the project root) and find the `sidebar` array. Add your new section following the same pattern as the existing ones:

```js
// astro.config.mjs  (find this section and add your entry)
sidebar: [
  { label: 'Welcome', slug: 'welcome-to-uni' },
  { label: 'How to Contribute', slug: 'how-to-contribute' },
  {
    label: 'Foundations',
    items: [{ autogenerate: { directory: 'foundations' } }],
  },
  // ... existing sections ...
  {
    label: 'Patterns',              // ← your new section label
    items: [{ autogenerate: { directory: 'patterns' } }],  // ← folder name
  },
],
```

> **Important:** The `directory` value must exactly match the folder name you created inside `src/content/docs/`.

---

## Writing content in Markdown

Markdown is a simple text format. Here are all the elements you'll use regularly.

### Headings

Use `#` symbols to create headings. The number of `#` symbols sets the level.

```markdown
## Main section heading
### Sub-section heading
#### Smaller heading
```

> **Note:** Don't use a single `#` (H1) — that's reserved for the page title, which is set automatically from your frontmatter.

---

### Paragraphs

Just type text. Leave a blank line between paragraphs.

```markdown
This is the first paragraph.

This is the second paragraph.
```

---

### Bold and italic

```markdown
**This text is bold**
*This text is italic*
```

Result: **This text is bold** and *this text is italic*.

---

### Lists

**Unordered list (bullet points):**
```markdown
- First item
- Second item
- Third item
```

**Ordered list (numbered):**
```markdown
1. First step
2. Second step
3. Third step
```

---

### Tables

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Cell A   | Cell B   | Cell C   |
| Cell D   | Cell E   | Cell F   |
```

Result:

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Cell A   | Cell B   | Cell C   |
| Cell D   | Cell E   | Cell F   |

---

### Code blocks

Wrap code in triple backticks. Add the language name after the first set of backticks for syntax highlighting.

````markdown
```jsx
const Button = ({ label }) => <button>{label}</button>;
```
````

---

### Images

```markdown
![Alt text describing the image](/images/your-image-filename.png)
A short caption for the image
```

Replace `your-image-filename.png` with your actual filename. The `Alt text` is important for accessibility — describe what the image shows.

---

### Tips, warnings, and notes

The documentation supports special callout boxes:

```markdown
:::tip[Pro tip]
This is a helpful tip for the reader.
:::

:::caution[Watch out]
This warns about something easy to get wrong.
:::

:::note
This is a general note or additional context.
:::
```

---

### Horizontal rule (divider)

```markdown
---
```

---

## Adding images

### Step 1 — Prepare your image

- Use **PNG** or **SVG** format for diagrams and UI screenshots
- Keep file names lowercase with hyphens: `button-primary-states.png`
- Recommended width: 1200px or less

### Step 2 — Add the image to the project

Place your image file in:
```
public/images/your-image-filename.png
```

### Step 3 — Reference it in your Markdown

```markdown
![Button primary states showing default, hover, pressed, and disabled](/images/button-primary-states.png)
Button primary states
```

The path always starts with `/images/` followed by your filename.

---

## Controlling the sidebar order

The `sidebar.order` number in frontmatter controls where a page appears within its section. Pages are sorted from **lowest to highest**.

```
order: 1  →  appears first
order: 2  →  appears second
order: 3  →  appears third
```

**Example:** If Foundations currently has Colors (order: 2), Typography (order: 3), and Spacing (order: 4), and you want to add Motion between Typography and Spacing:

```markdown
---
title: "Motion"
sidebar:
  order: 3.5   ← decimals work too, so you don't need to renumber everything
---
```

Or renumber the existing pages to make room:

```markdown
# typography.md
sidebar:
  order: 3

# motion.md  (new)
sidebar:
  order: 4

# spacing.md  (was 4, now 5)
sidebar:
  order: 5
```

---

## Previewing your changes locally

Before publishing, you can preview the site on your own computer.

### Step 1 — Open Terminal

On Mac: press `Cmd + Space`, type `Terminal`, press Enter.

### Step 2 — Navigate to the project

```bash
cd path/to/your/project
```

Replace `path/to/your/project` with the actual location of the project folder on your computer.

### Step 3 — Start the preview server

```bash
yarn dev
```

### Step 4 — Open in the browser

Open your browser and go to:
```
http://localhost:4321
```

The site will automatically update as you save files — no need to restart.

To stop the server, go back to Terminal and press `Ctrl + C`.

---

## Submitting your contribution

Once you're happy with your changes:

### Step 1 — Save your files

Make sure all your `.md` files are saved in your code editor.

### Step 2 — Commit your changes

In Terminal (from the project folder):

```bash
git add .
git commit -m "Add Motion foundations page"
```

Replace the message in quotes with a short description of what you added or changed.

### Step 3 — Push to GitHub

```bash
git push
```

### Step 4 — Wait for the deploy

Vercel picks up the change automatically. The live site will update within a few minutes. You can check the progress in the Vercel dashboard.

---

## Quick reference

### Frontmatter cheat sheet

```markdown
---
title: "Your Page Title"
description: "A short description of this page."
sidebar:
  order: 5
---
```

For component overview files:
```markdown
---
title: "Overview"
sidebar:
  label: "Component Name"
  order: 3
---
```

For all non-overview tab files (usage, structure, code, change-log):
```markdown
---
title: "Usage"
sidebar:
  hidden: true
---
```

### File naming rules

| Do | Don't |
|----|-------|
| `floating-action-button.md` | `Floating Action Button.md` |
| `date-and-time.md` | `dateAndTime.md` |
| `overview.md` | `Overview.md` |

### Folder naming rules

| Do | Don't |
|----|-------|
| `floating-action-button/` | `Floating Action Button/` |
| `inputs-and-selection/` | `InputsAndSelection/` |

### The five tab file names

These names are fixed — the tab system only recognises them exactly as written:

| Filename | Tab label |
|----------|-----------|
| `overview.md` | Overview |
| `usage.md` | Usage |
| `structure.md` | Structure |
| `code.md` | Code |
| `change-log.md` | Change Log |

Not every component needs all five. You can have just `overview.md` and `usage.md` — the tab bar will only show the tabs that exist.

---

## Need help?

If something isn't working as expected, reach out to the design systems team. Common things to check first:

- **Page not appearing in sidebar** — make sure the frontmatter has a `title` and the file extension is `.md`
- **Tabs not showing** — make sure the files are named exactly `overview.md`, `usage.md`, etc. (lowercase, with the hyphen in `change-log`)
- **Order not right** — double-check that `sidebar.order` is indented with exactly two spaces under `sidebar:`
- **Image not loading** — make sure the image file is in `public/images/` and the path in the markdown starts with `/images/`
