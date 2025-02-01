# Why is it Important to Have Good Structural Hierarchy?

The most important aspect of creating a structural hierarchy is the proper use of heading elements. Heading elements are numbered as H1, H2, H3, and so on. These numbers represent the heading level for that element, much like in a text document. It is crucial not to use heading levels in the incorrect order.

- Your **H1 element** is your top-level heading. You will rarely have more than one of these on a page, and it should typically come before all of your content.  
- Your **H2 element** is your subheading. It should always come after your H1 and might follow some introductory text. Unlike an H1 element, you can have multiple H2 elements on your page, often used to delineate different sections of content.  
- Following this pattern, your **H3 element** should always come after an H2 element. You should never skip directly from H1 to H3.  

You can, however, have multiple heading elements at the same level. For example, this code is correct:  
```html
<h1>Main Title</h1>  
<h2>Subheading 1</h2>  
<h2>Subheading 2</h2>  
<h3>Sub-subheading</h3>  
```  
But this code would **not** be correct because H3 comes before H2:  
```html
<h1>Main Title</h1>  
<h3>Sub-subheading</h3>  
<h2>Subheading</h2>  
```  

It may be tempting to use a specific heading element because of its styling, such as using H1 for large text. However, you should always choose the appropriate element for your document structure and use CSS to achieve the desired styling.

### Why is proper hierarchy important?  
1. **Accessibility**: Assistive technologies like screen readers rely on the structure of a web page to determine how to navigate and announce content to users. Using an H3 element after an H1, for example, might cause a screen reader user to believe they have accidentally skipped over important content due to the lack of an H2 element.  

2. **SEO (Search Engine Optimization)**: Search engines use automation to parse the content of your web page and determine its relevance for search results. If your structure is malformed, search engines may not rank your page well in relevant search results.  

3. **Technical Validity**: If your structure is incorrect, your HTML may not be technically valid. When this happens, the web browser has to guess your intent, and its interpretation might not align with what you intended.  

Keep these principles in mind as you build new projects to ensure your content is accessible, SEO-friendly, and technically sound.  
