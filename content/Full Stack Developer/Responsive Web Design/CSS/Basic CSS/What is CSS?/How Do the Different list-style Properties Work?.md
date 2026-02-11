---
title: How Do the Different list-style Properties Work?
draft: false
tags:
  - css
  - basiccss
---
In CSS, the `list-style` property controls how lists appear on a webpage. Whether you’re styling ordered (`ol`) or unordered (`ul`) lists, these properties help you customize bullets, numbering, and alignment.

The `list-style` property is shorthand for three individual properties:

- **`list-style-type`** – Defines the bullet or numbering style
    
- **`list-style-position`** – Sets where the marker appears relative to the content
    
- **`list-style-image`** – Replaces the default marker with a custom image
    

Let’s explore each one.

### `list-style-type`

This property determines the visual style of bullets or numbers. Unordered lists can use shapes like `disc`, `circle`, or `square`, while ordered lists support formats such as decimals, Roman numerals, or letters.

```html
<ul style="list-style-type: square;">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

Here, the default bullets are replaced with squares. Because it directly affects marker appearance, this is the most commonly used list-style property.

### `list-style-position`

The `list-style-position` property controls where the marker sits relative to the text.

- **`outside`** (default): The marker appears outside the content block.
    
- **`inside`**: The marker becomes part of the content flow, causing wrapped text to align beneath it.
    

```html
<ul style="list-style-position: inside;">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<ul style="list-style-position: outside;">
  <li>Item 4</li>
  <li>Item 5</li>
  <li>Item 6</li>
</ul>
```

Use this property when you need precise alignment—especially for list items with multiple lines of text.

### `list-style-image`

Want a more unique look? `list-style-image` lets you swap standard bullets for a custom image.

```html
<head>
  <style>
    ul {
      list-style-image: url("https://cdn.freecodecamp.org/platform/universal/freecodecamp-org-gravatar.jpeg");
      list-style-position: inside;
    }
  </style>
</head>
<body>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</body>
```

This example replaces bullets with a logo. Just be sure the image is small and simple—large or complex graphics can hurt readability.

### Using the `list-style` Shorthand

You can combine all three properties into one concise declaration. The order doesn’t matter.

```html
<ul style="list-style: square inside url('https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg');">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

If the image fails to load, the square bullets act as a fallback.

### Final Thoughts

The `list-style` properties give you flexible control over list design:

- Use **`list-style-type`** for quick visual changes.
    
- Adjust **`list-style-position`** for better text alignment.
    
- Try **`list-style-image`** to add personality.
    
- Combine them with the shorthand for cleaner CSS.
    

Small styling choices like these can significantly elevate the look and usability of your lists. 

