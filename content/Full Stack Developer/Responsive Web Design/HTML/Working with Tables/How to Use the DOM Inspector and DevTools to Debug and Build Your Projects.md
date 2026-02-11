---
title: How to Use the DOM Inspector and DevTools to Debug and Build Your Projects
draft: false
tags:
  - html
---
When building projects, you’ll often encounter issues where things don’t work as expected—these issues are called bugs. The process of finding and fixing them is known as debugging. Thankfully, modern browsers provide powerful tools to help: the **DOM Inspector** and **Developer Tools (DevTools).**

### What is the DOM Inspector?
The **Document Object Model (DOM)** represents the structure of a webpage in a tree-like format. The DOM Inspector allows you to examine and manipulate the HTML elements on your page in real time. This is helpful for identifying misplaced elements, missing attributes, or incorrect styles.

### Using Developer Tools for Debugging
DevTools provides access to the page’s **HTML, CSS, and JavaScript**, allowing you to inspect and troubleshoot issues directly within the browser. To open DevTools:
- Right-click on a webpage and select **Inspect**
- Use **Ctrl + Shift + I** (Windows) or **Cmd + Option + I** (Mac)

### Debugging a Broken Link Example
Consider the following HTML snippet:
```html
<a href="https://www.freecodecamp.org/larn/">freeCodeCamp curriculum</a>
```
Clicking this link leads to a **404 error**—indicating that the page doesn’t exist. To debug:
1. Open DevTools and navigate to the **Elements tab** to inspect the anchor tag.
2. Check the **Console tab** for error messages. A 404 error suggests the issue is with the **href** value.
3. Noticing a typo, you correct **"larn"** to **"learn"** in the URL:
```html
<a href="https://www.freecodecamp.org/learn/">freeCodeCamp curriculum</a>
```
4. The link now works correctly!

### Conclusion
The DOM Inspector and DevTools are invaluable for debugging and refining your projects. As you continue learning, these tools will help you efficiently diagnose and fix errors, improving both development speed and code quality.



