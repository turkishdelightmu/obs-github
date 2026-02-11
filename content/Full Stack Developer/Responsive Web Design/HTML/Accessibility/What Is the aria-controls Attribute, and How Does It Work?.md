---
title: What Is the aria-controls Attribute, and How Does It Work?
draft: false
tags:
  - html
---
 The **aria-controls** attribute creates a programmatic relationship between a controlling element (like a button or tab) and the element it controls, enhancing accessibility for screen reader users. Common uses include tabs, accordions, dropdowns, and modals.

### **Example with Tabs:**  
- **Tabs (buttons)** have:
  - `role="tab"` and an `aria-controls` attribute pointing to the associated content section’s ID.
  - `aria-selected="true"` on the active tab, `false` on inactive ones.

- **Content Sections** have:
  - `role="tabpanel"` and an `aria-labelledby` attribute pointing back to the corresponding tab.
  - The `hidden` attribute to hide inactive content.

### **How It Works:**  
- The value of `aria-controls` matches the `id` of the controlled content section.  
- JavaScript manages visibility by toggling `hidden` on sections and updating `aria-selected` on buttons.  
- Only one section is visible at a time, ensuring a clear and accessible user experience.

Using **aria-controls** improves interface accessibility by clarifying relationships between elements that control visibility or behavior.

