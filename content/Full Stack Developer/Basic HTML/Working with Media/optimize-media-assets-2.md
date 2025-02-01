# **What are common ways to optimize media assets?**

There are three key factors to consider when using media, such as images, on your web pages: size, format, and compression. Let's discuss the size of your images first. When building a website, you'll often style images to display at a specific size. For example, you might want an image to display at a resolution of 640x480, where 640 represents the width and 480 represents the height in pixels. 

When preparing your image, you should scale it to the 640x480 size to match this styling. If you serve an image that is 1920x1080 but are styling it to be much smaller, you're requiring your users to download unnecessary data. A smaller resolution leads to a smaller file size.

Next, consider the file format. Two of the most common formats are PNG and JPEG, but these are no longer the most ideal for serving images. Unless you need to support older browsers, you should consider using more optimized formats like WebP or AVIF.

Finally, you can run compression algorithms on your images. A compression algorithm reduces the file size for images or data. There are tools like PNGCrush to compress your images locally, or you can use online compression tools. However, it's important to note that some file formats, such as JPEG, are not lossless. Lossless means that the original data can be perfectly reconstructed from the compressed data. If you try to compress a JPEG image, it will result in a loss of quality.

Keep these factors in mind when selecting images for your web pages.