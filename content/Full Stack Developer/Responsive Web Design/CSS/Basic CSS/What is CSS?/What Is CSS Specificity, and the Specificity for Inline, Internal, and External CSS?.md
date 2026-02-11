---
title: What Is CSS Specificity, and the Specificity for Inline, Internal, and External CSS?
draft: false
tags:
  - basiccss
  - css
---
CSS specificity is a core concept that determines which styles are applied when multiple CSS rules target the same element. When styles conflict, the browser uses specificity to decide which rule wins.

Mastering specificity helps you debug styling issues faster and ensures your UI looks exactly as intended.

## How CSS Specificity Works

Specificity is calculated based on the types of selectors used in a rule. The more specific the selector, the higher its priority.

### Specificity Hierarchy (Highest → Lowest)

1. **Inline styles**
    
2. **ID selectors**
    
3. **Class selectors, attribute selectors, pseudo-classes**
    
4. **Type selectors and pseudo-elements**
    
5. **Universal selector (`*`)**
    

## Inline Styles: Highest Specificity

Inline styles are applied directly to an element using the `style` attribute. They override all other CSS rules.

```html
<link rel="stylesheet" href="styles.css">

<p style="color: red;">Red paragraph</p>
<p>Other paragraph</p>
<p>Another paragraph</p>
<p>Yet another paragraph</p>
```

```css
/* styles.css */
p {
  color: blue;
}
```

**Result:**  
The first paragraph is red, while the others are blue. Inline styles beat type selectors like `p`.

Specificity value: **(1, 0, 0, 0)**

## ID Selectors: Very High Specificity

ID selectors have the next highest priority after inline styles.

```html
<p id="para">Red paragraph</p>
<p>Other paragraph</p>
<p>Another paragraph</p>
<p>Yet another paragraph</p>
```

```css
#para {
  color: red;
}

p {
  color: blue;
}
```

**Result:**  
The paragraph with `id="para"` is red because ID selectors override type selectors.

Specificity value: **(0, 1, 0, 0)**

## Class Selectors, Attributes, and Pseudo-Classes

These selectors have moderate specificity.

Examples:

- Class selectors: `.container`, `.button`
    
- Attribute selectors: `[type="text"]`
    
- Pseudo-classes: `:hover`, `:focus`
    

```html
<p id="para">Example paragraph</p>
<p class="example-para">Other paragraph</p>
<p class="example-para">Another paragraph</p>
<p>Yet another paragraph</p>
```

```css
#para {
  color: red;
}

.example-para {
  color: green;
}

p {
  color: blue;
}
```

**Result:**

- The first paragraph is red (ID selector wins)
    
- `.example-para` paragraphs are green
    
- Remaining paragraphs are blue
    

Specificity value for `.example-para`: **(0, 0, 1, 0)**

## Type Selectors and Pseudo-Elements

Type selectors like `div`, `p`, and `h1`, along with pseudo-elements such as `::before` and `::after`, have lower specificity.

```css
p {
  color: blue;
}
```

Specificity value: **(0, 0, 0, 1)**

## Universal Selector: Lowest Specificity

The universal selector (`*`) applies styles to all elements but has **no impact on specificity**.

```css
* {
  color: red;
}
```

If ID, class, or type selectors exist, they will override this rule—highlighting how weak `*` is.

Specificity contribution: **(0, 0, 0, 0)**

## The Specificity Formula

Specificity is calculated as a four-part value:

**(a, b, c, d)**

- **a** → Inline styles
    
- **b** → ID selectors
    
- **c** → Class selectors, attributes, pseudo-classes
    
- **d** → Type selectors, pseudo-elements
    

Example:

```css
#main .card p {
  color: blue;
}
```

Specificity: **(0, 1, 1, 1)**

## Inline vs Internal vs External CSS

### Inline CSS

```html
<p style="color: red;">This text is red.</p>
```

Specificity: **(1, 0, 0, 0)**  
Overrides everything else.

### Internal CSS

```html
<head>
  <style>
    #text {
      color: blue;
    }
  </style>
</head>
<body>
  <div id="text">This text is blue.</div>
</body>
```

Specificity depends on the selector used.  
Here: **(0, 1, 0, 0)**

### External CSS

```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="text">Styled externally</div>
</body>
```

```css
/* styles.css */
.text {
  color: green;
}
```

Specificity: **(0, 0, 1, 0)**  
External CSS is the most maintainable option and should be preferred unless overridden intentionally.

## Final Thoughts

CSS specificity isn’t about where styles are written—it’s about **how specific your selectors are**. By understanding the hierarchy and calculation, you can avoid overusing IDs or inline styles and write cleaner, more predictable CSS.

Happy styling 🎨

