---
title: How Does Inline-Block Work, and How Does It Differ from Inline and Block Elements?
draft: false
tags:
  - basiccss
  - css
---
In CSS, elements can have three main display behaviors: **block**, **inline**, and **inline-block**. Each affects how elements are positioned and how they interact with other elements.

- **Block elements** take up the full width of their parent and start on a new line. You can control both width and height.
    
- **Inline elements** only take up as much space as their content and stay in the flow of text. Their width and height cannot be controlled.
    

The **inline-block** property is a **hybrid of both**:

- Like inline elements, it stays inline and doesn’t start on a new line.
    
- Like block elements, it allows you to set **width and height**.
    

This makes `inline-block` ideal for layouts where you want **alignment and dimension control** simultaneously.

### Example: Using `inline-block`

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .inline-block-element {
      display: inline-block;
      width: 120px;
      height: 80px;
      background-color: skyblue;
      margin: 5px;
      text-align: center;
      line-height: 80px;
    }
  </style>
</head>
<body>
  <div class="container">
    <span class="inline-block-element">Box 1</span>
    <span class="inline-block-element">Box 2</span>
  </div>
</body>
</html>
```

- The two boxes appear **side by side** because they are inline.
    
- Both boxes have **width and height** defined, unlike regular inline elements.
    

### What Happens Without `inline-block`

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .inline-block-element {
      /* display: inline-block; removed */
      width: 120px;
      height: 80px;
      background-color: lightcoral;
      margin: 5px;
      text-align: center;
      line-height: 80px;
    }
  </style>
</head>
<body>
  <div class="container">
    <span class="inline-block-element">Box 1</span>
    <span class="inline-block-element">Box 2</span>
  </div>
</body>
</html>
```

- The boxes revert to **inline behavior**.
    
- The **width and height are ignored**, and each span only takes up space for its text.
    

### Key Takeaways

- **Inline-block** combines the best of inline and block elements.
    
- It keeps elements inline **without breaking the text flow**.
    
- Allows **full control over width and height**, which inline elements cannot.
    
- Perfect for **creating horizontally aligned layouts with consistent sizing**.
    

