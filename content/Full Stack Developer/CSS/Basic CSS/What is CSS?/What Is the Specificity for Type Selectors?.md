---
title: What Is the Specificity for Type Selectors?
draft: false
tags:
  - basiccss
  - css
---
**Type selectors**, also known as **element selectors**, target HTML elements based on their tag name. They are one of the most fundamental CSS selectors and allow you to apply styles to every instance of a specific element on a page.

Type selectors are simple, readable, and written using only the element’s tag name.

## Basic Example: Styling Paragraphs

Here’s a type selector that targets all paragraph (`p`) elements.

**index.html**

```html
<link rel="stylesheet" href="styles.css">

<p>Paragraph one</p>
<p>Paragraph two</p>
<p>Paragraph three</p>
```

**styles.css**

```css
p {
  color: blue;
}
```

**Result:**  
All paragraph elements on the page will have blue text.

## Specificity of Type Selectors

Type selectors have a **low specificity**:

**Specificity value:**  
**(0, 0, 0, 1)**

This means:

- They can be overridden by **class selectors**
    
- They are overridden by **ID selectors**
    
- They are overridden by **inline styles**
    

However, they still apply styles unless a more specific rule exists.

## When Class Selectors Override Type Selectors

Let’s look at an example where a class selector takes precedence over a type selector.

**index.html**

```html
<p class="para">I am a paragraph</p>
<p class="para">Here is another paragraph</p>
```

**styles.css**

```css
p {
  color: blue;
}

.para {
  color: red;
}
```

**Result:**  
Both paragraphs will be **red**, not blue.

Even though the elements are paragraphs, the `.para` class selector has a higher specificity than the `p` type selector, so its styles win.

## Key Takeaways

- Type selectors target elements by **tag name**
    
- They’re ideal for **base styles** and global formatting
    
- Specificity is **(0, 0, 0, 1)**, making them easy to override
    
- Class, ID, and inline styles will take precedence when conflicts arise
    

Type selectors are a great starting point for clean, scalable CSS—and they work best when combined thoughtfully with more specific selectors 🎯
