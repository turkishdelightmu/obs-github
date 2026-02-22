---
title: Common Design Terms (and Tiny Code Demos) That Help Developers Talk to Designers
draft: false
tags:
  - css
  - design
---
If you’ve ever been in a handoff meeting where a designer says “the hierarchy feels off” or “we need more white space,” it helps to share the same vocabulary. Knowing a few core design terms lets you collaborate faster, give clearer feedback, and build UIs that feel intentional instead of accidental.

Below are the most common terms you’ll hear—plus small HTML/CSS examples you can copy into a single file to _see_the idea.

## 1) Layout

**Layout** is the overall arrangement of elements on a page—text, images, navigation, spacing. Think of it as the blueprint: what goes where, and how the page is structured.

**Mini example: simple header + hero layout**

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Layout Demo</title>
  <style>
    body { font-family: system-ui, sans-serif; margin: 0; }
    header { padding: 16px 24px; border-bottom: 1px solid #ddd; }
    .container { max-width: 960px; margin: 0 auto; display: flex; gap: 16px; align-items: center; justify-content: space-between; }
    nav a { margin-left: 12px; text-decoration: none; color: inherit; }
    .hero { padding: 64px 24px; max-width: 960px; margin: 0 auto; }
    .btn { display: inline-block; padding: 10px 14px; border: 1px solid #333; border-radius: 8px; text-decoration: none; }
  </style>
</head>
<body>
  <header>
    <div class="container">
      <strong>ShopMate</strong>
      <nav>
        <a href="#">Home</a><a href="#">Shop</a><a href="#">About</a><a href="#">Cart (2)</a>
      </nav>
    </div>
  </header>

  <main class="hero">
    <h1>Fall Collection 2025</h1>
    <p>Discover the latest trends</p>
    <a class="btn" href="#">Shop Now</a>
  </main>
</body>
</html>
```

## 2) Alignment

**Alignment** is how elements line up relative to each other (left, center, right, or along a shared grid). Good alignment makes designs feel clean and “on purpose.”

```html
<div class="grid">
  <section class="card left">
    <h2>Left</h2><p>Best for readable body text.</p>
  </section>
  <section class="card center">
    <h2>Center</h2><p>Great for titles and focal content.</p>
  </section>
  <section class="card right">
    <h2>Right</h2><p>Useful for emphasis or side info.</p>
  </section>
</div>

<style>
  body { font-family: system-ui, sans-serif; padding: 24px; }
  .grid { display: grid; gap: 16px; max-width: 900px; }
  .card { border: 1px solid #ddd; border-radius: 12px; padding: 16px; }
  .left { text-align: left; }
  .center { text-align: center; }
  .right { text-align: right; }
</style>
```

## 3) Composition and Balance

**Composition** is the “art” of arranging elements so they feel harmonious—not just placed.  
**Balance** is how visual weight is distributed. You can have:

- **Symmetrical balance**: mirrored, stable
    
- **Asymmetrical balance**: not mirrored, but still feels even
    

```html
<h2>Balance</h2>

<div class="row">
  <div class="box">A</div><div class="box">B</div><div class="box">A</div>
  <p class="label">Symmetrical</p>
</div>

<div class="row">
  <div class="box">A</div><div class="box big">C</div><div class="box">B</div>
  <p class="label">Asymmetrical</p>
</div>

<style>
  body { font-family: system-ui, sans-serif; padding: 24px; }
  .row { display: grid; grid-template-columns: repeat(3, 72px); gap: 12px; align-items: center; margin-bottom: 18px; }
  .box { border: 1px solid #333; border-radius: 10px; height: 60px; display: grid; place-items: center; }
  .big { height: 90px; }
  .label { grid-column: 1 / -1; margin: 0; color: #555; }
</style>
```

## 4) Visual Hierarchy

**Hierarchy** is the order in which a user notices things. You create it with size, spacing, contrast, alignment, color, and typography.

```html
<div class="card">
  <div class="headline">Upgrade to Pro</div>
  <div class="subheadline">Get more features and storage</div>
  <p class="body">
    The Pro plan offers advanced tools, priority support, and 10× more storage.
  </p>
  <a class="cta" href="#">Start Free Trial</a>
</div>

<style>
  body { font-family: system-ui, sans-serif; padding: 24px; }
  .card { max-width: 420px; border: 1px solid #ddd; border-radius: 16px; padding: 18px; }
  .headline { font-size: 24px; font-weight: 700; }
  .subheadline { margin-top: 6px; font-size: 16px; color: #555; }
  .body { margin-top: 12px; line-height: 1.5; color: #333; }
  .cta { display: inline-block; margin-top: 14px; padding: 10px 12px; border-radius: 10px; border: 1px solid #333; text-decoration: none; }
</style>
```

## 5) Contrast (and Accessibility)

**Contrast** is how distinct two things are—often text vs background. It’s not only style; it’s **readability**.

A practical rule of thumb from **WCAG**:

- **AA**: contrast ratio **≥ 4.5:1** for normal text (common minimum)
    
- **AAA**: contrast ratio **≥ 7:1** for normal text (stronger accessibility)
    

**Quick demo: high vs low contrast**

```html
<div class="good">High contrast: readable</div>
<div class="bad">Low contrast: harder to read</div>

<style>
  body { font-family: system-ui, sans-serif; padding: 24px; }
  .good { background: #000; color: #fff; padding: 14px; border-radius: 10px; margin-bottom: 12px; }
  .bad  { background: #add8e6; color: #dda0dd; padding: 14px; border-radius: 10px; }
</style>
```

**Designer-friendly tip:** instead of “this looks faint,” say “this contrast might not meet AA—can we darken the text or lighten the background?”

## 6) White Space (Negative Space)

**White space** is the empty space around elements. It doesn’t have to be white—it’s just breathing room. It improves readability, supports hierarchy, and helps users focus.

```html
<div class="spacious">
  <h2>With white space</h2>
  <p>Content feels calmer and easier to scan.</p>
  <a href="#" class="btn">Learn more</a>
</div>

<div class="cramped">
  <strong>Without white space:</strong> This block feels tight and harder to read.
</div>

<style>
  body { font-family: system-ui, sans-serif; padding: 24px; }
  .spacious { border: 1px solid #ddd; border-radius: 14px; padding: 22px; margin-bottom: 16px; }
  .btn { display: inline-block; margin-top: 10px; padding: 10px 12px; border: 1px solid #333; border-radius: 10px; text-decoration: none; }
  .cramped { border: 1px solid #ddd; border-radius: 14px; padding: 6px; }
</style>
```

You’ll also hear:

- **Macro white space**: spacing between big sections
    
- **Micro white space**: spacing between lines/letters
    
- **Proximity**: items near each other feel related
    

## 7) Scale

**Scale** is element size and size relationships—headings vs body text, buttons vs links, images vs surrounding content. Scale heavily influences hierarchy and usability (especially on mobile).

```html
<h1 class="big">Big heading (high emphasis)</h1>
<p class="normal">Normal paragraph text (supporting content).</p>

<nav class="nav">
  <a href="#">Home</a><a href="#">Docs</a><a href="#">Pricing</a>
</nav>

<style>
  body { font-family: system-ui, sans-serif; padding: 24px; }
  .big { font-size: 40px; margin: 0 0 10px; }
  .normal { font-size: 16px; line-height: 1.6; max-width: 60ch; }

  .nav { margin-top: 18px; display: flex; gap: 10px; flex-wrap: wrap; }
  .nav a { padding: 10px 12px; border: 1px solid #333; border-radius: 10px; text-decoration: none; }
</style>
```

## 8) UI vs UX

- **UI (User Interface)**: the visible/interactive parts—buttons, text, icons, layout.
    
- **UX (User Experience)**: how it _feels_ to use—clarity, speed, accessibility, delight, frustration.
    

A clean UI can still have bad UX if flows are confusing. And strong UX often depends on UI choices (like contrast, hierarchy, spacing).

## 9) Progressive Enhancement (Developer-friendly design thinking)

**Progressive enhancement** means: deliver a core experience that works everywhere first (HTML), then enhance with CSS and JavaScript for capable browsers.

```html
<!-- Core experience works even without CSS/JS -->
<form action="/subscribe" method="post">
  <label>Email <input name="email" type="email" required></label>
  <button type="submit">Subscribe</button>
</form>

<!-- Enhancement: only runs if JS loads -->
<script>
  // Optional enhancement: inline validation messaging, async submit, etc.
</script>
```

This tends to improve **accessibility**, **performance**, and **SEO** because content exists in the initial HTML.

## Wrap-up

Design conversations get a lot easier once you share the same vocabulary. When a designer mentions _layout_, _alignment_, or _hierarchy_, they’re pointing to concrete, buildable decisions—where things go, how they line up, and what gets noticed first.

Here’s what to keep in your back pocket:

- **Layout** is the overall structure of the page.
    
- **Alignment** creates order by lining elements up consistently.
    
- **Composition + balance** make the arrangement feel stable (symmetrical) or intentionally dynamic (asymmetrical).
    
- **Hierarchy + scale** control what people notice first and how they move through content.
    
- **Contrast** guides attention _and_ supports accessibility (aim for WCAG AA at minimum).
    
- **White space** improves readability, focus, and grouping (proximity).
    
- **UI** is what users interact with; **UX** is how it feels to use.
    
- **Progressive enhancement** helps you ship a solid baseline experience, then layer on polish.
    

If you’re unsure what feedback to give in a design review, a simple approach is: **ask what the user should notice first**, then check whether hierarchy, contrast, scale, and spacing make that path obvious.
