---
title: What Is the Universal Selector, and What Is Its Specificity?
draft: false
tags:
  - basiccss
  - css
---
The **universal selector (`*`)** is a special CSS selector that matches **every element** in the document. It’s commonly used to apply global styles, especially for resetting or normalizing default browser styles.

## What Does the Universal Selector Do?

The `*` selector can be used:

- **Globally**, to target all elements on the page
    
- **Within a specific context**, such as inside a container element
    

Because it affects everything, it should be used carefully—but it’s extremely useful in the right situations.

## Common Use Case: CSS Reset

One of the most popular uses of the universal selector is resetting margins and padding across all elements.

### Example: Resetting Margin and Padding

**index.html**

```html
<link rel="stylesheet" href="styles.css">

<h1>Heading element</h1>
<p>Example paragraph element</p>
```

**styles.css**

```css
* {
  margin: 0;
  padding: 0;
}
```

In this example, the `*` selector removes the default margin and padding applied by browsers to all elements. This creates a consistent baseline for styling and is a common technique in CSS reset stylesheets.

## Specificity of the Universal Selector

The universal selector has the **lowest possible specificity**:

**Specificity value:**  
**(0, 0, 0, 0)**

This means:

- Any type selector (`p`, `div`)
    
- Any class selector (`.highlight`)
    
- Any ID selector (`#unique`)
    
- Any inline style
    

will override styles applied using `*`.

## How the Universal Selector Interacts with Other Selectors

Let’s look at a real example to see how specificity works in practice.

```html
<head>
  <style>
    * {
      color: blue;
    }

    p {
      color: red;
    }

    .highlight {
      color: green;
    }

    #unique {
      color: purple;
    }
  </style>
</head>
<body>
  <p id="unique" class="highlight">
    This text has multiple styles applied.
  </p>
</body>
```

### What Happens Here?

1. The universal selector sets the text color to **blue** for all elements.
    
2. The `p` type selector overrides it, changing the color to **red**.
    
3. The `.highlight` class selector takes precedence, changing the color to **green**.
    
4. Finally, the `#unique` ID selector wins due to its higher specificity and sets the color to **purple**.
    

**Final result:** The text appears **purple**.

## Key Takeaways

- The universal selector (`*`) targets **all elements**
    
- It’s ideal for **global resets and base styles**
    
- It has the **lowest specificity**, so it’s easily overridden
    
- Use it as a foundation—not for critical styling rules
    

When used thoughtfully, the universal selector is a powerful tool for creating clean, consistent layouts from the ground up 🎯

