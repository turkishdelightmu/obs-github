---
title: What Are Inline, Internal, and External CSS, and When Should You Use Each One?
draft: false
tags:
  - basiccss
  - css
---

CSS can be added to a webpage in **three main ways**: **inline**, **internal**, and **external**. Each method serves a different purpose, and choosing the right one helps keep your code clean, organized, and maintainable.

Let’s explore each approach, when to use it, and see practical examples.

## 1. Inline CSS

**Inline CSS** is written directly inside an HTML element using the `style` attribute. It affects only that specific element.

### Example:

```html
<p style="color: green;">This is an inline-styled paragraph.</p>
```

### When to use inline CSS:

- Quick testing or small, one-off changes
    
- Overriding styles in rare cases
    

### Drawbacks:

- Clutters HTML
    
- Hard to maintain or reuse
    
- Not suitable for larger projects
    

👉 **Best avoided** for regular styling.

## 2. Internal CSS

**Internal CSS** is written inside a `<style>` tag within the `<head>` section of an HTML document. It applies styles to the entire page.

### Example:

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    p {
      color: blue;
    }
  </style>
</head>
<body>
  <p>This paragraph is styled using internal CSS.</p>
</body>
</html>
```

### When to use internal CSS:

- Styling a single webpage
    
- Small projects or prototypes
    
- Pages that don’t share styles with others
    

### Drawbacks:

- Styles cannot be reused across multiple pages
    
- Mixes HTML and CSS, reducing maintainability
    

## 3. External CSS

**External CSS** is written in a separate `.css` file and linked to the HTML document using the `<link>` tag.

### Example:

**index.html**

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <p>This paragraph is styled using external CSS.</p>
</body>
</html>
```

**styles.css**

```css
p {
  color: purple;
}
```

### Why external CSS is preferred:

- Keeps HTML and CSS separate
    
- Allows consistent styling across multiple pages
    
- Easier to maintain and scale
    
- Industry standard for professional projects
    

The `rel` attribute defines the relationship (stylesheet), while `href` specifies the file location.

## Conclusion

- **Inline CSS** → Quick fixes, not recommended for real projects
- **Internal CSS** → Useful for single-page styling
- **External CSS** → Best choice for most websites and applications

👉 For **clean, scalable, and professional development**, **external CSS should be your default approach**.
