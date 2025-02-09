---
title: What Are HTML Tables Used For, and What Should They Not Be Used For?
draft: false
tags:
  - html
---
HTML tables were once a staple of web design but are now primarily used for their intended purpose: displaying tabular data. As a frontend developer, you should still be familiar with them.  

### What Are HTML Tables Used For?  
Tables structure data in rows and columns, making them ideal for presenting statistics, reports, or financial information. Here's an example from the U.S. Bureau of Labor Statistics:  

```html
<table>
  <thead>
    <tr><th colspan="2">Quick Facts: Software Developers</th></tr>
  </thead>
  <tbody>
    <tr><th>Median Pay</th><td>$130,160 per year</td></tr>
    <tr><th>Education</th><td>Bachelor's degree</td></tr>
    <tr><th>Job Outlook (2022-32)</th><td>25% (Much faster than average)</td></tr>
  </tbody>
</table>
```
A table consists of:  
- `<thead>` (table header)  
- `<tbody>` (main content)  
- `<tfoot>` (footer for meta info)  
- `<tr>` (table rows)  
- `<th>` (header cells)  
- `<td>` (data cells)  

### What Should Tables NOT Be Used For?  
In the past, developers misused tables for page layouts, but this is outdated. Instead, use **CSS Flexbox** and **CSS Grid** for layouts. Avoid using `<div>` elements to simulate tables—stick to the table element for structured data.  

### Key Takeaway  
Use HTML tables for presenting tabular data—not for page layouts. Mastering proper table structure will help you create accessible, well-organized content on the web.  

