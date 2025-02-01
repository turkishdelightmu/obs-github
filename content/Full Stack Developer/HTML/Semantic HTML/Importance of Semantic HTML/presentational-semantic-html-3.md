# What's the Difference Between Presentational and Semantic HTML?

**Presentational HTML** focuses on the appearance and style of the content. In the early days of HTML, developers used elements like `<center>`, `<big>`, and `<font>`. However, these elements are no longer recommended in modern web development due to their limitations and negative impact on **accessibility** and **maintainability**. Many presentational HTML elements are **deprecated**, meaning they are outdated and no longer in use. While it’s helpful to understand them, modern practices encourage using **CSS** for styling instead.

#### Examples of Deprecated Presentational Elements

1. **`<font>` Element**  
   The `<font>` element was used to set the font size and color of text.  
   Example:  
   ```html
   <font color="blue" size="5">This is blue text with a size of 5.</font>
   ```
   - The `size` attribute ranges from 1 (smallest) to 7 (largest). The default size is 3.  
   - **Why not use it?** Font size and color should always be set with CSS to ensure flexibility and maintainability.  

2. **`<center>` Element**  
   The `<center>` element centered content horizontally within its container.  
   Example:  
   ```html
   <center>
     <p>This text is centered.</p>
   </center>
   ```
   - **Why not use it?** Use CSS's `text-align: center;` instead for more robust styling.

3. **`<big>` Element**  
   The `<big>` element made the enclosed text one level larger than the surrounding text.  
   Example:  
   ```html
   <p>This is <big>larger text</big> within a paragraph.</p>
   ```
   - **Why not use it?** Font sizes should always be defined in CSS.

While these elements may still work in some browsers, they are no longer best practice. Instead, **semantic HTML** is recommended.

### What is Semantic HTML?

**Semantic HTML** describes the content and its purpose, making it easier to read, understand, and maintain. It improves **accessibility** by providing meaningful structure that assistive technologies, like screen readers, can interpret. It also enhances **search engine optimization (SEO)** by helping search engines better understand the content of a site.

#### Examples of Semantic HTML Elements

- `<header>`: Defines the header of a document or section.
- `<nav>`: Represents a section with navigation links.
- `<section>`: Groups related content.
- `<figure>`: Encapsulates illustrations or diagrams.

Example:  
```html
<header>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
```

In this example, the **semantic elements** (`<header>` and `<nav>`) clearly show their purpose within the HTML structure, making the code more readable and accessible.

### Key Differences

| **Aspect**            | **Presentational HTML**               | **Semantic HTML**                        |
|------------------------|---------------------------------------|------------------------------------------|
| **Focus**             | Appearance and style                 | Content meaning and structure            |
| **Usage**             | Outdated and deprecated              | Recommended best practice                |
| **Accessibility**     | Limited                              | High                                    |
| **Styling**           | Inline HTML                          | CSS                                     |
| **SEO Benefits**      | Minimal                              | Significant                             |


Semantic HTML focuses on describing the content's meaning, while presentational HTML emphasizes appearance—but should be avoided in favor of modern CSS practices.  
