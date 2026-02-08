---
title: How to Space List Items Using margin or line-height
draft: false
tags:
  - css
  - basiccss
---
## How to Space List Items Using `margin` or `line-height`

Proper spacing between list items improves readability and gives your content a more polished look. Two common CSS techniques for adjusting spacing are **`margin`** and **`line-height`**—each serving a slightly different purpose.

### Spacing List Items with `margin`

The `margin` property controls the space **outside** an element. Applying a bottom margin to `<li>` elements creates consistent gaps between each item.

**HTML**

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

**CSS**

```css
li {
  margin-bottom: 40px;
}
```

This example adds **40px of space** below each list item, making the list easier to scan. Use margins when you want precise control over the spacing between separate items.

### Spacing with `line-height`

The `line-height` property adjusts the vertical spacing **within** text. While it mainly affects the distance between lines inside a single list item, it can also make single-line items appear more spaced out.

**HTML**

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

**CSS**

```css
li {
  line-height: 2;
}
```

Setting `line-height: 2;` makes each line twice the font size, creating more breathing room within the item. However, for multi-line content, this controls internal spacing—not the gap between items.

### When Should You Use Each?

- ✅ **Use `margin`** to control spacing between individual list items.
    
- ✅ **Use `line-height`** to improve readability within the text itself.
    
- ⭐ For the best results, you can combine both depending on your layout needs.
    

Thoughtful spacing helps users absorb information faster—so don’t overlook these simple CSS properties when styling your lists!

