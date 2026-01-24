---
title: How Does the Cascade Algorithm Work at a High Level?
draft: false
tags:
  - basiccss
  - css
---
The **CSS Cascade Algorithm** is the system browsers use to decide **which CSS rules apply** when multiple styles target the same element. It ensures styles are applied predictably using a clear set of rules.

## How the Cascade Algorithm Works

The browser evaluates CSS in the following order:

### 1. Relevance

First, the browser filters out rules that don’t apply to the element.

This includes:

- Matching selectors
    
- Active **media queries**
    

**Media queries** allow styles to apply based on device or viewport characteristics such as width, height, or orientation.

```css
@media (max-width: 600px) {
  p {
    font-size: 14px;
  }
}
```
### 2. Origin and Importance

CSS can come from different sources:

- **User-agent styles** (browser defaults)
    
- **User styles**
    
- **Author styles** (your CSS)
    

Rules marked with **`!important`** take priority over normal rules, regardless of origin.

```css
p {
  color: red !important;
}
```
### 3. Specificity

If multiple rules from the same origin and importance level apply, the browser compares **specificity**.

More targeted selectors win over general ones.

```css
p {
  color: blue;
}

.highlight {
  color: green;
}
```

An element with the `highlight` class will be green because class selectors are more specific than type selectors.

### 4. Order of Appearance

If relevance, origin, importance, and specificity are all equal, the **last rule written wins**.

## Cascade Example in Action

**index.html**

```html
<link rel="stylesheet" href="styles.css">
<p>Example paragraph</p>
```

**styles.css**

```css
p {
  color: blue;
}

p {
  color: green;
}
```

**Result:**  
The paragraph text will be **green** because the second rule appears later in the stylesheet.

## Why the Cascade Matters

The Cascade Algorithm ensures your CSS behaves consistently by evaluating:

- Relevance
    
- Origin and importance
    
- Specificity
    
- Order of appearance
    

Understanding how the cascade works helps you write cleaner CSS, avoid conflicts, and build more reliable layouts as your stylesheets grow 🎯

