---
title: What Is the Basic Anatomy of a CSS Rule?
draft: false
tags:
  - basiccss
  - anatomoy
  - css
---
CSS rules define the visual style of a webpage, and each rule is made up of two main parts: a **selector** and a **declaration block**.

Here's the basic syntax:

```css
selector {
  property: value;
}
```

- **Selector**: Targets specific HTML elements (e.g., `p`, `.class`, `#id`) to apply styles.
    
- **Declaration block**: Enclosed in curly braces, it contains one or more declarations.
    
- **Declaration**: Each declaration includes a **property** (like `color`) and a **value** (like `blue`), separated by a colon and ending with a semicolon.
    

Example:

```css
p {
  color: blue;
}
```

This rule changes the text color of all `<p>` elements to blue.

To apply styles to multiple elements, you can use a selector list:

```css
#title,
.subheading {
  color: navy;
}
```

Here, both an ID selector (`#title`) and a class selector (`.subheading`) are styled with navy text.

Understanding this structure is key to writing effective and organised CSS.

