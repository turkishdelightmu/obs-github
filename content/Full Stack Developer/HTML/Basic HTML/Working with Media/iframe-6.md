# How to Embed Videos on Your Page Using the `iframe` Element

#### What is the `iframe` Element?

The `iframe` element, short for **inline frame**, is an HTML element used to embed external content directly within a web page. This content can include videos, maps, other HTML elements, or even entire web pages.

#### Syntax of the `iframe` Element

The `iframe` element comes with several important attributes:

- **`src`**: Specifies the URL of the content you want to embed.  
- **`width`**: Defines the width of the `iframe`.  
- **`height`**: Defines the height of the `iframe`.  
- **`allowfullscreen`**: Enables the user to view the content in full-screen mode.  
- **`title`**: Provides a descriptive title for the `iframe`, which is important for accessibility.

#### Embedding Videos with `iframe`

To embed a video, you can copy the embed code provided by popular video services like YouTube and Vimeo. Alternatively, you can define your own `iframe` by setting the `src` attribute to the video URL. 

Here’s an example of embedding a FreeCodeCamp course from YouTube:

```html
<iframe 
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
  width="560" 
  height="315" 
  frameborder="0" 
  allowfullscreen 
  title="FreeCodeCamp Course">
</iframe>
```

#### Adjusting YouTube Links for Embedding

When copying a YouTube share link, you may need to adjust it for proper embedding. Replace the `https://youtu.be` part with `https://www.youtube.com/embed`. For example:

- Share link: `https://youtu.be/VIDEO_ID`  
- Embed link: `https://www.youtube.com/embed/VIDEO_ID`  

#### Other Sources for Embedded Videos

Videos can also come from other platforms, such as Pixabay. For example, embedding a Pixabay video might look like this:

```html
<iframe 
  src="https://pixabay.com/videos/embed/YOUR_VIDEO_ID" 
  width="560" 
  height="315" 
  frameborder="0" 
  allowfullscreen 
  title="Pixabay Video">
</iframe>
```

#### Embedding Maps and Other Content

You can use the `iframe` element to embed maps, other web pages, or even custom HTML. Here's an example of embedding a map using Google Maps:

```html
<iframe 
  src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_CODE" 
  width="600" 
  height="450" 
  style="border:0;" 
  allowfullscreen 
  loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade" 
  title="Google Map">
</iframe>
```

#### Using the `srcdoc` Attribute for Inline HTML

To embed custom HTML directly into an `iframe`, use the `srcdoc` attribute instead of `src`. This lets you define inline content within the `iframe` itself. For example:

```html
<iframe 
  srcdoc="<p>This is a paragraph embedded directly in the iframe.</p>" 
  width="400" 
  height="200" 
  frameborder="0" 
  title="Custom HTML Example">
</iframe>
```

#### Final Notes

- The content embedded via an `iframe` doesn’t have to come from video services like YouTube or Vimeo; you can use any valid URL.  
- Always ensure the `iframe` has a meaningful `title` for better accessibility.  

By understanding the flexibility of the `iframe` element, you can embed videos, maps, and other content seamlessly into your web pages.
