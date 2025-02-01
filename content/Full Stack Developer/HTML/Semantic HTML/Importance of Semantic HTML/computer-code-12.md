# How Do You Represent Computer Code in HTML?

### **The Inline Code Element (`<code>`)**  

The **`<code>` (inline code) element** is used to represent **short snippets of code within text**. It is commonly used in:  

- **Technical articles**  
- **Programming documentation**  
- **Tutorials**  

#### **Example: Using `<code>` for Inline Code**  

```html
<p>The CSS <code>color</code> property is used to set text color.</p>
```  

This renders as:  
**The CSS `color` property is used to set text color.**  

When you wrap text inside `<code>` tags, the browser **interprets it as inline code** and applies **default styling**—typically a **monospaced font** for readability.  

### **The `<pre>` Element for Multi-Line Code**  

The **`<pre>` (preformatted text) element** is used to **preserve whitespace and formatting**, making it ideal for **longer code snippets**. It ensures that:  

- **Indentation and line breaks** are maintained  
- Code appears exactly as written in the **HTML document**  

#### **Example: Using `<pre>` with `<code>` for Multi-Line Code**  

```html
<pre>
<code>
p {
  color: blue;
}
</code>
</pre>
```  

This renders as:  

```
p {
  color: blue;
}
```  

#### **Important Notes:**  
- The `<code>` element should be used for **short, inline code snippets**.  
- For **longer blocks of code**, wrap the `<code>` element inside a `<pre>` element to **preserve formatting**.  
- Be mindful of **indentation**, as the `<pre>` element displays text exactly as written.  

### **Conclusion**  

- Use **`<code>`** for **inline code snippets** within text.  
- Use **`<pre>` with `<code>`** for **multi-line code blocks** to maintain indentation and formatting.  
- Ensure proper indentation within `<pre>` to **avoid unintended spacing issues**.  

By following these best practices, you can display code effectively in HTML, ensuring **clear readability and proper formatting**.