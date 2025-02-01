# How Do Block and Inline Quotes Work in HTML?

In HTML, quoted elements are used to distinguish quoted text from the surrounding content, making it easy to identify.  

### **Block Quotes (`<blockquote>`)**  

You should use the **block quotation element (`<blockquote>`)** to represent a section quoted from another source. It is primarily used for **extended quotations**.  

If the source of the quote has an address, you can cite it using the **`cite` attribute**. The value of this attribute should be a valid URL. Here’s an example of a quote within a block quotation element that includes a `cite` attribute:  

```html
<blockquote cite="https://example.com/source">
   This is an example of a block quote.
</blockquote>
```  

The `cite` attribute does not affect the visual presentation of the block quote, but it is helpful for **screen readers** and **search engines**, providing more context about the source of the quote.  

#### **How Block Quotes Appear in the Browser**  

By default, block quotes are **slightly indented**. If you want to include quotation marks at the beginning and end of the quote, you must add them manually.  

You can place text directly inside the `<blockquote>` element or wrap it in one or more `<p>` (paragraph) elements. Using multiple paragraphs within a block quote is helpful when quoting longer text while maintaining proper formatting:  

```html
<blockquote cite="https://example.com/source">
   <p>First paragraph of the quote.</p>
   <p>Second paragraph of the quote.</p>
   <p>Third paragraph of the quote.</p>
   <p>Fourth paragraph of the quote.</p>
</blockquote>
```  

In the browser, all paragraphs remain aligned relative to each other, but they are **indented** within their container.  

### **Visually Attributing the Source of a Quote**  

While the `cite` attribute helps with metadata, it **does not display the source to the user**. If you want to **visually show** the source, you can use the `<cite>` element outside the `<blockquote>` element.  

The `<cite>` element is used to **mark up the title of a referenced creative work**, such as a book, article, song, film, website, or research paper.  

#### **Example with a Visible Citation**  

```html
<blockquote>
   <p>This is a quote from a well-known book.</p>
</blockquote>
<p>— Quincy Larson, <cite>How to Learn to Code and Get a Developer Job</cite></p>
```  

In the browser, the **author's name and book title will be clearly visible** beneath the quote.  

### **Inline Quotes (`<q>`)**  

While block quotes are used for extended quotations, sometimes you only need to quote a **few words within a larger paragraph**. This is where the **inline quotation element (`<q>`)** comes in.  

The `<q>` element is used for **short, inline quotations** from other sources. Most modern browsers will **automatically add quotation marks** around the quoted text when you use this element.  

#### **Example of an Inline Quote**  

```html
<p>As Albert Einstein once said, <q>Imagination is more important than knowledge.</q></p>
```  

In the browser, the quoted text will appear inside quotation marks, which are automatically added by the browser.  

Like the `<blockquote>` element, the `<q>` element also supports the `cite` attribute for metadata purposes:  

```html
<p>As Albert Einstein once said, <q cite="https://example.com/einstein-quote">Imagination is more important than knowledge.</q></p>
```  

Although the `cite` attribute does not affect the visual appearance, it **helps screen readers and search engines understand the source of the quote**.  

### **Key Differences Between Block Quotes and Inline Quotes**  

| Feature              | Block Quote (`<blockquote>`) | Inline Quote (`<q>`) |
|----------------------|----------------------------|----------------------|
| Use case            | Extended quotations from another source | Short quotations within a paragraph |
| Default appearance  | Indented text (without quotation marks) | Quotation marks added automatically |
| Supports `cite` attribute? | ✅ Yes | ✅ Yes |
| Should be inside a paragraph? | ❌ No | ✅ Yes |

### **Conclusion**  

- **Use `<blockquote>` for long quotations** from other sources, optionally with a `cite` attribute for metadata and a `<cite>` element for visible attribution.  
- **Use `<q>` for short, inline quotes** within an existing paragraph.  

Both elements help structure quoted content in a way that is readable, accessible, and search-engine friendly.