---
title: What Is the important Keyword, and What Are the Best Practices for Using It?
draft: false
tags:
  - basiccss
  - css
---
The **`!important`** keyword in CSS gives a style rule the **highest priority**, forcing the browser to apply it regardless of selector specificity or source order—even overriding inline styles.

While powerful, it should be used sparingly.

## The Problem: Inline Styles Take Priority

Consider the following HTML:

```html
<p class="para" style="background-color: lightblue; color: black;">
  This is a paragraph.
</p>
```

The paragraph has inline styles that set a light blue background and black text.

Now let’s try to override those styles using external CSS.

**styles.css**

```css
.para {
  background-color: black;
  color: white;
}
```

Because **inline styles have higher precedence** than class selectors, the paragraph will **remain light blue with black text**.

## The Solution: Using `!important`

To override the inline styles, you can use `!important`.

```css
.para {
  background-color: black !important;
  color: white !important;
}
```

The `!important` keyword is placed **after the value and before the semicolon**.

**Result:**  
The paragraph now has a **black background** and **white text**, even though inline styles exist.

## How `!important` Works

- Overrides **all other declarations**, including inline styles
    
- Does **not** change selector specificity
    
- Forces the browser to apply the rule with `!important`
    

In other words, `!important` wins conflicts by priority, not by specificity.

## When `!important` Makes Sense

A common and acceptable use case is overriding styles from **third-party libraries or frameworks** when you don’t control the original CSS.

Example:

```css
.btn {
  font-size: 18px !important;
}
```

## Why You Should Use It Sparingly

Overusing `!important` can:

- Break the natural CSS cascade
    
- Make styles harder to debug
    
- Create unpredictable behavior
    
- Lead to “specificity wars” in your CSS
    

## Key Takeaways

- `!important` forces a style to be applied above all others
    
- It can override inline styles and high-specificity selectors
    
- It doesn’t change selector specificity
    
- Best used as a **last resort**
    

Used carefully, `!important` can save the day—but overuse can make your CSS harder to maintain 🚨

