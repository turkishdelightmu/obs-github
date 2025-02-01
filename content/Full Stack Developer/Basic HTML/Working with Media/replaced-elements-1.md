
# What Are Replaced Elements, and What Are Some Examples?

A replaced element is an element whose content is determined by an external resource rather than by CSS itself. CSS (Cascading Style Sheets) is used to add styles to a web page. Common examples of replaced elements include the `<img>`, `<iframe>`, and `<video>` elements. 

With replaced elements, you can control the position or layout of the element, but your CSS cannot directly modify its content. This is easier to explain with a few examples. Consider the `<img>` element, which embeds an image on your web page. The element itself is replaced by the external object — the image. While CSS can control things like the positioning of the image or apply a filter to it, you cannot actually modify the image itself.

A more robust example is the `<iframe>` element, which embeds an external site on your web page. Common uses of the `<iframe>` element include embedding maps or YouTube videos. The element itself is replaced by the external object — the site. CSS can change the positioning of the embedded site, but it cannot modify the site's contents. To dive a bit further, if the embedded site has an `<h1>` element, your CSS would not be able to style that `<h1>` element. You cannot change its size, font, color, etc.

There are other replaced elements, such as `<video>` and `<embed>`, and some elements behave as replaced elements under specific circumstances. For example, an `<input>` element with the `type` attribute set to "image" is considered a replaced element, but other input types like "text" or "email" are not.