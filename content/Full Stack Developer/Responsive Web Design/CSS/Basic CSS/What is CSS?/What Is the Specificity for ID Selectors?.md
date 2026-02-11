---
title: What Is the Specificity for ID Selectors?
draft: false
tags:
  - basiccss
  - css
---
**ID selectors** are among the most powerful selectors in CSS. They allow developers to apply styles to a **single, unique element** using an identifier that appears only once in the HTML document.

Because IDs are unique, they’re ideal for styling elements that require special treatment.

## How ID Selectors Work

ID selectors are defined using a **hash symbol (`#`)** followed by the ID name. Each ID must be unique—no two elements should share the same ID.

## Basic Example: Using an ID Selector

**index.html**

```html
<link rel="stylesheet" href="styles.css">

<p id="unique">Example paragraph</p>
<p>Another paragraph</p>
<p>Yet another paragraph</p>
```

**styles.css**

```css
#unique {
  color: purple;
}
```

**Result:**  
Only the paragraph with `id="unique"` will have purple text.

## Specificity of ID Selectors

ID selectors have **very high specificity**.

**Specificity value:**  
**(0, 1, 0, 0)**

This means:

- ID selectors override **type selectors** (`p`, `div`)
    
- ID selectors override **class selectors** (`.highlight`)
    
- ID selectors are overridden only by **inline styles**
    

## ID Selector vs Class Selector

```css
p {
  color: blue;
}

.highlight {
  color: green;
}

#unique {
  color: purple;
}
```

If an element matches all three selectors, the ID selector wins due to its higher specificity.

## Key Takeaways

- ID selectors target **one unique element**
    
- Syntax: `#id-name`
    
- Specificity is **(0, 1, 0, 0)**
    
- Stronger than class and type selectors
    
- Best used sparingly to avoid overly rigid CSS
    

ID selectors are powerful tools—but because of their high specificity, they’re best reserved for truly unique elements 🎯

