---
title: How Do You Style the Different Link States?
draft: false
tags:
  - css
  - basiccss
---
Links have multiple states—**link, visited, hover, focus, and active**—that help users understand how they can interact with your site. Thoughtful styling provides clear visual feedback, improving both usability and accessibility, especially for users with visual or cognitive impairments.

These states are styled using **CSS pseudo-classes**, which target elements based on their condition or user interaction—no extra HTML required.

**Pseudo-class syntax:**

```css
A:B {
  property: value;
}
```

Here, `A` is the selector and `:B` is the pseudo-class.

---

### `:link` — Unvisited Links

The `:link` pseudo-class targets links that haven’t been clicked yet, signaling they are interactive.

```html
<link rel="stylesheet" href="styles.css">
<a href="/">Example link</a>
```

```css
a:link {
  color: red;
}
```

This replaces the default blue with red for unvisited links.

---

### `:visited` — Previously Clicked Links

Styling visited links helps users track where they’ve been.

```html
<link rel="stylesheet" href="styles.css">
<a href="https://www.freecodecamp.org/learn/" target="_blank">freeCodeCamp</a>
```

```css
a:visited {
  color: green;
}
```

Once clicked, the link turns green—providing instant browsing feedback.

---

### `:hover` — Pointer Interaction

The `:hover` pseudo-class signals interactivity when a user moves their cursor over a link.

```css
a:hover {
  color: green;
}
```

This subtle change reassures users that the element is clickable.

---

### `:focus` — Keyboard Navigation

`:focus` applies when a link is selected via keyboard navigation, making it essential for accessibility.

```css
a:focus {
  outline: 3px solid orange;
}
```

A strong outline helps users clearly see which element is currently selected.

---

### `:active` — The Moment of Click

The `:active` state provides immediate feedback while the link is being clicked.

```css
a:active {
  color: pink;
}
```

This confirms that the user’s action is being registered.

---

### Best Practice: Follow the Correct Order

When styling multiple states, remember the common order:

👉 **LVHFA — Link, Visited, Hover, Focus, Active**

This prevents styles from unintentionally overriding one another.

---

### Final Thoughts

Clear link states make navigation smoother and more intuitive. To create a better user experience:

✅ Provide distinct visual feedback for each state  
✅ Maintain strong contrast for readability  
✅ Prioritize accessibility, especially for keyboard users

Well-styled links don’t just look good—they guide users confidently through your website.