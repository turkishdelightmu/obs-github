---
title: What Is the aria-hidden Attribute, and How Does It Work?
draft: false
tags:
  - html
---
Ensuring web accessibility is crucial for all users, including those with disabilities. For people using screen readers, the `aria-label`, `aria-labelledby`, and `aria-hidden` attributes provide essential information about elements that may not have visible text. Let's explore their roles in improving accessibility for users with visual impairments.

### What Are ARIA Label and ARIA Labelledby?
Both `aria-label` and `aria-labelledby` are part of ARIA (Accessible Rich Internet Applications), a set of attributes that help developers convey the purpose of elements to assistive technologies.

- **`aria-label`**: Provides an invisible text label for interactive elements. This is useful for elements without visible text, such as icon-only buttons.
- **`aria-labelledby`**: Functions similarly to `aria-label`, but instead of defining text directly, it references existing text on the page using an ID.

### How They Work
#### `aria-label` Example:
```html
<button aria-label="Search">
  <svg>...</svg>
</button>
```
Here, the screen reader announces "Search button," even though the button contains only an icon.

#### `aria-labelledby` Example:
```html
<label id="search-label">Search</label>
<input type="text" aria-labelledby="search-label">
```
In this case, the input field uses the label text as its description, ensuring accessibility.

### Key Differences and Best Practices
- **Translation Considerations**: `aria-label` text may not always be translated by automated services, whereas `aria-labelledby` references existing text, which is more adaptable.
- **Synchronization with Visible Text**: Using `aria-labelledby` helps maintain consistency, as changing the referenced text automatically updates the screen reader label.
- **Complex Labels**: `aria-labelledby` allows combining multiple text sources, making it easier to create detailed descriptions programmatically.

### Important Guidelines
- **Use One at a Time**: Avoid using both `aria-label` and `aria-labelledby` on the same element. If both are present, `aria-labelledby` takes precedence, and `aria-label` will be ignored.
- **Prefer Native Labels When Possible**: If an element already has a visible label, there's no need for ARIA attributes.

### What Is ARIA Hidden?
The `aria-hidden` attribute is used to hide elements from assistive technologies like screen readers while keeping them visible on the page. This is useful for decorative icons, duplicate content, or other elements that do not need to be read aloud.

#### `aria-hidden` Example:
```html
<span aria-hidden="true">★</span>
```
In this example, the star icon is hidden from screen readers, ensuring it does not cause unnecessary redundancy.

### Best Practices for `aria-hidden`
- **Do Not Use on Focusable Elements**: Elements that can receive keyboard focus should never be hidden from screen readers, as this may confuse users.
- **Avoid Redundant Use**: If an element is already hidden via CSS (`display: none` or `visibility: hidden`), `aria-hidden` is unnecessary.
- **Ensure Proper Testing**: Always test with assistive technologies to confirm that hidden elements do not disrupt user navigation.

By using `aria-label`, `aria-labelledby`, and `aria-hidden` correctly, developers can create more accessible and user-friendly websites, ensuring inclusivity for all users.



