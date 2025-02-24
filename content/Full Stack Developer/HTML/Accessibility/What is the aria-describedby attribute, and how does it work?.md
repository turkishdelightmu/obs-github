---
title: What is the aria-describedby attribute, and how does it work?
draft: false
tags:
  - html
---
 The **aria-describedby** attribute provides additional information to screen reader users by linking an element to existing descriptive content on the page. It creates an accessible description that screen readers announce when users interact with the element.

### **Common Uses:**

- **Form Inputs:** Associates instructions or error messages with fields to ensure screen reader users hear them when navigating forms.
- **Buttons (e.g., Delete):** Links to warnings or explanations about an action’s consequences.

### **How It Works:**

- The attribute value matches the `id` of the descriptive content.
- When focused, screen readers may announce both the element’s label and the associated description.

### **Examples:**

1. **Password Input:**
    - `aria-describedby="password-help"` links the input to instructions about password requirements.
2. **Delete Button:**
    - `aria-describedby="delete-message"` links to a warning about permanent deletions.

While behavior varies across screen readers, **aria-describedby** generally improves accessibility by providing essential context users might otherwise miss.

