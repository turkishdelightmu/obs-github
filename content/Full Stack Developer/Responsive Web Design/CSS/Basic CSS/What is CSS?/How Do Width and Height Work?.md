---
title: How Do Width and Height Work?
draft: false
tags:
  - basiccss
  - css
---
In CSS, the **width** and **height** properties control the size of elements on a webpage. These values can be defined using units like **pixels (px)**, **percentages (%)**, and **viewport units (vw, vh)**.

By default, both properties are set to `auto`, meaning the browser determines the element’s size based on its content, parent container, and display type.
## Basic Width and Height

- **`width`** defines how wide an element is.
    
- **`height`** defines how tall an element is.
    
- When set to `auto`, elements expand based on their content.
    
### Example: Fixed Dimensions

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 100px;
      height: 100px;
      background-color: skyblue;
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
</html>
```

This creates a square box that is **100px by 100px** with a sky-blue background.

## Minimum Width and Height

The **`min-width`** and **`min-height`** properties ensure that an element does not shrink below a certain size, even if smaller dimensions are specified.

### Example: Minimum Size Enforcement

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 50px;
      min-width: 100px;
      height: 50px;
      min-height: 100px;
      background-color: lightcoral;
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
</html>
```

Even though the width and height are set to **50px**, the element renders as **100px by 100px** because the minimum values take priority.

## Maximum Width and Height

The **`max-width`** and **`max-height`** properties limit how large an element can grow, even if larger values are defined.

### Example: Maximum Size Restriction

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 200px;
      max-width: 150px;
      height: 200px;
      max-height: 150px;
      background-color: lightgreen;
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
</html>
```

Although the element is set to **200px by 200px**, it is restricted to **150px by 150px** because the maximum values override larger dimensions.

## How CSS Resolves Size Conflicts

- **`min-width` / `min-height`** override smaller `width` and `height` values.
    
- **`max-width` / `max-height`** limit elements when `width` or `height` exceed them.
    
- CSS ensures elements stay within defined size ranges for better layout control and usability.
    

## Conclusion

Using **width**, **height**, **min-width**, **min-height**, **max-width**, and **max-height** gives you precise control over element sizing. These properties help maintain consistent layouts, prevent elements from becoming too small or too large, and improve responsive design across different screen sizes.