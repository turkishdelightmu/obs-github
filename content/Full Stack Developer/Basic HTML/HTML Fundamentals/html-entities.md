
# What Are HTML Entities, and What Are Some Common Examples?

- **What Are HTML Entities?**  
  - HTML entities (or character references) are used to represent reserved characters in HTML.

- **Example Problem:**  
  - Intended text: **This is an `<img>` element**.  
  - If the text appears as **This is an `<element>`**, it means the browser misinterpreted the content.

- **Why the Issue Occurs:**  
  - The HTML parser interprets the less-than symbol (`<`) followed by a tag name as the start of an HTML element.

- **Solution: Using HTML Entities**  
  - Replace reserved characters with their corresponding HTML entities.  
    - Example for `<` and `>`:  
      ```html
      <p>This is an &lt;img&gt; element.</p>
      ```

- **Named Character References:**  
  - Start with an **ampersand (`&`)** and end with a **semicolon (`;`)**.  
  - Ensure the parser treats the symbols as text.  
  - Example: `&lt;` for `<` and `&gt;` for `>`.

- **Other Types of Character References:**  
  1. **Decimal Numeric Reference:**  
     - Example for `<`:  
       ```html
       &#60;
       ```
     - **Syntax:** Starts with `&`, followed by `#` and decimal digits, ending with `;`.  
  2. **Hexadecimal Numeric Reference:**  
     - Example for `<`:  
       ```html
       &#x3C;
       ```
     - **Syntax:** Starts with `&`, followed by `#x`, hexadecimal digits, and `;`.

- **Common Uses of HTML Entities:**  
  - Represent symbols like:  
    - **Copyright (`©`)**, **Trademark (`™`)**, **Ampersand (`&`)**.  
  - Quotation marks:  
    - **Double quotes (`&quot;`)**, **Single quotes (`&apos;`)**.  

- **Purpose of HTML Entities:**  
  - Ensure reserved or special characters are displayed as intended.

--- 

This structure highlights the key takeaways for better readability and understanding.