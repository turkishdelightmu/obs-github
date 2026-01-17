---
title: What Are the Different Types of CSS Combinators?
draft: false
tags:
  - basiccss
  - css
---
CSS combinators define the **relationship between selectors**, allowing you to target elements based on how they are positioned in the HTML structure. They make your styles more **precise, readable, and efficient**.

The most common CSS combinators are:

- Descendant ( )
- Child (`>`)
- Next sibling (`+`)
- Subsequent sibling (`~`)
    

Let’s explore each one with examples.

## 1. Descendant Combinator ( )

The **descendant combinator** selects elements that are nested inside another element, regardless of how deep they are.

### Example:

```html
<figure>
  <img src="cat.jpg" alt="Relaxing Cat">
  <figcaption>A relaxing cat</figcaption>
</figure>
```

```css
figure img {
  border: 4px solid red;
}
```

### How it works:

- Targets **all `img` elements inside `figure`**
    
- The `img` does not need to be a direct child
    
- A space between selectors indicates a descendant relationship
    

✅ Best used when styling all matching elements inside a container.

## 2. Child Combinator (`>`)

The **child combinator** selects only **direct children** of a specified parent.

### Example:

```html
<div class="container">
  <p>First</p>
  <div>
    <p>Second</p>
  </div>
</div>
```

```css
.container > p {
  color: blue;
}
```

### How it works:

- Only the **direct `p` child** of `.container` is styled
    
- Nested `p` elements are ignored
    

✅ Useful for preventing unintended styling of deeply nested elements.

## 3. Next-Sibling Combinator (`+`)

The **next-sibling combinator** selects an element that **immediately follows** another element at the same level.

### Example:

```html
<figure>
  <img src="cat.jpg" alt="Cat">
  <figcaption>Cat caption</figcaption>
</figure>
```

```css
img + figcaption {
  border: 4px solid black;
}
```

### How it works:

- Styles only the `figcaption` that comes **directly after** the `img`
    

✅ Ideal for styling elements based on immediate placement.

## 4. Subsequent-Sibling Combinator (`~`)

The **subsequent-sibling combinator** selects **all siblings** that come after a specified element.

### Example:

```html
<div class="container">
  <h2>Subheading</h2>
  <p>First paragraph</p>
  <p>Second paragraph</p>
  <p>Third paragraph</p>
</div>
```

```css
h2 ~ p {
  color: green;
}
```

### How it works:

- Styles **all `p` elements that follow the `h2`**
- They do not need to be immediate siblings

✅ Useful for styling sections that follow headings.

## Conclusion

CSS combinators give you **powerful control** over how styles are applied based on element relationships:

- **Descendant ( )** → Any nested element
    
- **Child (`>`)** → Direct children only
    
- **Next sibling (`+`)** → Immediate sibling
    
- **Subsequent sibling (`~`)** → All following siblings
    

Mastering combinators helps you write **cleaner CSS**, avoid unnecessary classes, and create **more maintainable and scalable designs**.

