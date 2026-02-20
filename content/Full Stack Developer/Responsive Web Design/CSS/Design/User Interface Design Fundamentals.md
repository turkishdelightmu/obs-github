---
title: User Interface Design Fundamentals
draft: false
tags:
  - css
  - design
---
When you work with designers, the fastest way to reduce back-and-forth is to share a vocabulary. Terms like _layout_, _hierarchy_, and _contrast_ aren’t “art words” — they’re practical ways to describe what should change and why. Below is a quick tour of the most common design terms you’ll hear in product work, plus small code snippets you can paste into an `.html` file to see the ideas in action.

## Layout

**Layout** is the overall arrangement of elements on a screen: where the header sits, how content is grouped, what gets space, and what comes first. Think “page blueprint.”

```html
<header class="header">
  <div class="container">
    <h1>ShopMate</h1>
    <nav class="nav">
      <a href="#">Home</a>
      <a href="#">Shop</a>
      <a href="#">About</a>
      <a href="#">Cart (2)</a>
    </nav>
  </div>
</header>

<main class="container">
  <section class="hero">
    <h2>Fall Collection 2025</h2>
    <p>Discover the latest trends</p>
    <a class="btn" href="#">Shop Now</a>
  </section>
</main>

<style>
  .container { max-width: 960px; margin: 0 auto; padding: 16px; }
  .header { border-bottom: 1px solid #ddd; }
  .header .container { display:flex; align-items:center; justify-content:space-between; }
  .nav a { margin-left: 12px; text-decoration:none; }
  .hero { padding: 48px 16px; border: 1px solid #eee; border-radius: 12px; margin-top: 16px; }
  .btn { display:inline-block; margin-top: 12px; padding: 10px 14px; border: 1px solid #333; border-radius: 10px; }
</style>
```

## Alignment

**Alignment** is how elements line up relative to each other (left, center, right, or along a shared edge/grid). Good alignment makes a UI feel intentional.

```html
<div class="demo">
  <section class="box left">
    <h3>Left</h3>
    <p>Best for body text in left-to-right languages.</p>
  </section>

  <section class="box center">
    <h3>Center</h3>
    <p>Great for short headlines and focal content.</p>
  </section>

  <section class="box right">
    <h3>Right</h3>
    <p>Often used for secondary or stylistic emphasis.</p>
  </section>
</div>

<style>
  .demo { display:grid; gap: 12px; max-width: 720px; margin: 16px auto; padding: 16px; }
  .box { border: 1px solid #ddd; border-radius: 12px; padding: 14px; }
  .left { text-align: left; }
  .center { text-align: center; }
  .right { text-align: right; }
</style>
```

## Composition and Balance

**Composition** is the “art” of arranging elements so they feel cohesive. **Balance** is how visual weight is distributed — either **symmetrical** (even) or **asymmetrical** (uneven but still stable).

```html
<h2>Balance</h2>
<div class="row">
  <div class="panel">
    <p><strong>Symmetrical</strong></p>
    <div class="grid">
      <div class="tile">A</div><div class="tile">B</div><div class="tile">A</div>
    </div>
  </div>

  <div class="panel">
    <p><strong>Asymmetrical</strong></p>
    <div class="grid">
      <div class="tile">A</div><div class="tile big">C</div><div class="tile">B</div>
    </div>
  </div>
</div>

<style>
  .row { display:flex; gap: 16px; flex-wrap: wrap; }
  .panel { border:1px solid #ddd; border-radius: 12px; padding: 12px; width: 320px; }
  .grid { display:flex; gap: 10px; }
  .tile { width: 70px; height: 70px; display:grid; place-items:center; border:1px solid #aaa; border-radius: 12px; }
  .tile.big { width: 110px; }
</style>
```

## Hierarchy

**Visual hierarchy** is the order people _notice_ things. You create it with size, spacing, contrast, color, and typography so the “what matters most” is obvious.

```html
<article class="card">
  <div class="headline">Upgrade to Pro</div>
  <div class="subhead">Get more features and storage</div>
  <p class="body">
    Advanced tools, priority support, and 10x more storage for growing teams.
  </p>
  <a class="cta" href="#">Start Free Trial</a>
</article>

<style>
  .card { max-width: 520px; margin: 16px auto; padding: 18px; border:1px solid #ddd; border-radius: 14px; }
  .headline { font-size: 26px; font-weight: 800; }
  .subhead { margin-top: 6px; font-size: 16px; opacity: .8; }
  .body { margin-top: 12px; line-height: 1.6; }
  .cta { display:inline-block; margin-top: 14px; padding: 10px 14px; border-radius: 12px; border:1px solid #333; }
</style>
```

## Contrast (and accessible contrast ratios)

**Contrast** is how distinct two colors are. It’s not just aesthetics — it’s readability and accessibility. WCAG commonly cites **4.5:1** as a baseline for normal text (AA) and **7:1** for stronger accessibility (AAA).

```html
<div class="sample good">Readable text (high contrast)</div>
<div class="sample bad">Hard-to-read text (low contrast)</div>

<style>
  .sample { padding: 14px; border-radius: 12px; margin: 10px 0; font: 16px/1.5 system-ui; }
  .good { background: #fff; color: #111; border: 1px solid #ddd; }
  .bad  { background: #add8e6; color: #dda0dd; }
</style>
```

**Practical workflow tip:** check contrast in browser devtools (most modern browsers include an accessibility/contrast checker in the color picker).

## White space (negative space)

**White space** is the empty area around elements. It’s not necessarily white — it’s just breathing room. Good spacing improves readability and strengthens hierarchy.

```html
<div class="with-space">
  <h3>With white space</h3>
  <p>Padding and spacing help the content feel calm and readable.</p>
  <a class="btn" href="#">Learn more</a>
</div>

<div class="no-space">
  <strong>Without white space:</strong> This feels cramped and harder to scan.
</div>

<style>
  .with-space { max-width: 620px; margin: 16px auto; padding: 18px; border:1px solid #ddd; border-radius: 14px; }
  .no-space { max-width: 620px; margin: 16px auto; padding: 4px; border:1px solid #ddd; }
</style>
```

## Scale

**Scale** is size — and the relationship between sizes. It’s essential for hierarchy (big draws attention) and usability (tap targets on mobile).

```html
<nav class="navbar">
  <a class="link" href="#">Home</a>
  <a class="link" href="#">Docs</a>
  <a class="link" href="#">Pricing</a>
</nav>

<style>
  .navbar { padding: 14px; display:flex; gap: 12px; border:1px solid #ddd; border-radius: 12px; max-width: 720px; margin: 16px auto; }
  .link { padding: 10px 12px; border-radius: 10px; border: 1px solid #aaa; text-decoration:none; font-size: 18px; }
</style>
```

## UI vs UX

- **UI (User Interface):** what users see and interact with — buttons, inputs, typography, spacing, states.
    
- **UX (User Experience):** how it feels to use the product — clarity, speed, confidence, accessibility, and overall ease.
    

A clean UI can support UX, but UX also includes things like flow, error handling, performance, and accessibility.

## Progressive enhancement

**Progressive enhancement** means building a solid core experience that works everywhere (HTML first), then layering improvements (CSS for layout/visual polish, JS for advanced interactivity). Benefits: accessibility, resilience on slow networks/devices, and often better SEO.

```html
<form action="/subscribe" method="post">
  <label>
    Email
    <input name="email" type="email" required />
  </label>
  <button type="submit">Subscribe</button>
</form>

<!-- Later: add CSS for layout and JS for inline validation/enhanced UX -->
```

## The shortcut to better designer-dev communication

When giving feedback, try framing it with these terms:

- “The **hierarchy** is unclear — the CTA doesn’t stand out.”
    
- “Can we improve **contrast** for readability (AA/AAA)?”
    
- “The **alignment** feels off — can we align these to the same left edge?”
    
- “We need more **white space** between sections for scanning.”
    
- “The mobile **scale** makes links hard to tap.”
    


