---
title: What Is the Specificity for Class Selectors?
draft: false
tags:
  - basiccss
  - css
---
**Class selectors** are a core part of CSS. They allow you to target multiple elements that share the same `class` attribute and apply consistent styling across your site. This makes them flexible, reusable, and ideal for scalable designs.

Class selectors are defined using a **dot (`.`)** followed by the class name and can be applied to any HTML element.

## Basic Example: Using a Class Selector

**index.html**

```html
<link rel="stylesheet" href="styles.css">

<p class="highlight">Example paragraph</p>
```

**styles.css**

```css
.highlight {
  color: green;
}
```

**Result:**  
Any element with the `highlight` class will have green text.

## Specificity of Class Selectors

Class selectors have a **moderate specificity**, higher than type selectors but lower than ID selectors and inline styles.

**Specificity value:**  
**(0, 0, 1, 0)**

This means:

- Class selectors **override type selectors**
    
- They are **overridden by ID selectors**
    
- They are **overridden by inline styles**
    

## Class Selector vs Type Selector

If both a type selector and a class selector target the same element, the class selector wins.

```css
p {
  color: blue;
}

.highlight {
  color: green;
}
```

A paragraph with the `highlight` class will appear green because the class selector has higher specificity.

## Combining Class Selectors with Other Selectors

Class selectors can be combined with type selectors to create more specific rules.

**index.html**

```html
<p class="bold-text">Example paragraph</p>
<p class="bold-text">Example paragraph</p>
<p>Another paragraph</p>
<p>Yet another paragraph</p>
```

**styles.css**

```css
p.bold-text {
  font-weight: bold;
}
```

**Result:**  
Only `p` elements with the `bold-text` class will have bold text.
## Key Takeaways

- Class selectors target elements using a shared `class` attribute
    
- Syntax: `.class-name`
    
- Specificity is **(0, 0, 1, 0)**
    
- They’re ideal for reusable, maintainable styling
    
- Combining them with other selectors increases precision
    

Class selectors strike a great balance between power and flexibility, making them one of the most commonly used tools in CSS 💡

