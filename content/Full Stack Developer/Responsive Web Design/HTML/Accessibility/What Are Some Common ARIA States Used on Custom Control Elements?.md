---
title: What Are Some Common ARIA States Used on Custom Control Elements?
draft: false
tags:
  - html
---
 Native form elements like `<input>`, `<select>`, `<textarea>`, `<button>`, and `<fieldset>` come with built-in states that enhance accessibility. Attributes like `disabled` and `checked` help convey state information to assistive technologies. However, when creating custom controls, you need to use ARIA (Accessible Rich Internet Applications) attributes to ensure accessibility. Here are some common ARIA states and how to use them effectively:

### 1. `aria-selected`
Indicates whether an element is selected. This is useful for custom tabs, list boxes, and grids.

**Example:** In a custom tab interface, the selected tab has `aria-selected="true"`, while others have `aria-selected="false"`.

### 2. `aria-disabled`
Indicates that an element is disabled for assistive technology users. Unlike the `disabled` attribute, `aria-disabled` does not prevent interaction; you must implement styling and JavaScript to reflect its disabled state.

**Example:** A custom edit button with `aria-disabled="true"` informs screen readers that the button is inactive, but you must ensure it behaves like a disabled button.

### 3. `aria-haspopup`
Indicates that an element will trigger a popup when activated. The attribute value should be one of the following roles: `menu`, `listbox`, `tree`, `grid`, or `dialog`.

**Example:** A file menu button with `aria-haspopup="menu"` lets screen readers announce the presence of a popup.

### 4. `aria-required`
Marks a field as required before form submission. Use this for custom form controls, but avoid redundancy if the label already states "Required."

**Example:** A custom content-editable input with `aria-required="true"` ensures screen readers notify users that the field must be filled.

### 5. `aria-checked`
Indicates the checked state of an element, commonly used for custom checkboxes, radio buttons, and switches.

**Example:** A custom checkbox updates `aria-checked="true"` when selected and `aria-checked="false"` when deselected.

### Conclusion
While native elements offer built-in accessibility, custom controls require ARIA attributes to ensure assistive technologies interpret their states correctly. Always test your implementation to ensure accessibility and usability.



