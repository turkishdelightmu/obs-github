# What Are IDs and Classes, and When Should You Use Them?

- **IDs and Classes Overview:** IDs are unique, while classes can be reused for multiple elements.

- **ID Attribute:**
  - Assigns a **unique identifier** to an HTML element.
  - Example of an ID in HTML:
    ```html
    <h1 id="title">Hello World</h1>
    ```
  - IDs can be referenced in **JavaScript** or **CSS** using the hash symbol (`#`):
    ```css
    #title {
      color: red;
    }
    ```
  - **Key Points About IDs:**
    1. **Uniqueness:** Each ID must be unique within the HTML document.
    2. **No Spaces:** ID values cannot contain spaces (e.g., `main heading` is invalid).
    3. **Allowed Characters:** ID values should only use letters, digits, underscores (`_`), and dashes (`-`).

- **Class Attribute:**
  - Used to group elements and does not need to be unique.
  - Example of a class in HTML:
    ```html
    <div class="box">Content</div>
    ```
  - **Multiple Classes:** You can add multiple class names to an element, separated by spaces:
    ```html
    <div class="box highlighted">Content</div>
    ```
  - Classes are referenced in CSS using a dot (`.`):
    ```css
    .box {
      width: 200px;
      height: 100px;
      border: 1px solid black;
    }
    ```

- **When to Use IDs vs. Classes:**
  - **Use an ID** when targeting a **specific element** (since IDs are unique).
  - **Use a class** for applying the same styles or behavior to **multiple elements** (classes can be reused).

---

By keeping these distinctions in mind, you can effectively structure and style your HTML documents.  

--- 