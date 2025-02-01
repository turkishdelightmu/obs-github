# What Are Description Lists and When Should You Use Them?

Description lists are perfect for presenting terms and definitions in an organized, easy-to-read format—similar to a glossary or dictionary, where words are listed alongside their corresponding definitions.  

### Example of a Description List in HTML  

Below is an example of a description list in HTML with two terms and their corresponding details. In this case, the terms are the acronyms **HTML** and **CSS**, and their details are their expansions. However, the details could also be definitions or other information related to the terms.  

To create a description list in HTML, you need three elements:  

1. **`<dl>` (Description List Element)**  
   - This is the container for the entire list. It wraps around all the other elements within the description list.  

2. **`<dt>` (Description Term Element)**  
   - This defines each term in the list. In this example, the terms are **HTML** and **CSS**, so there are two `<dt>` elements.  

3. **`<dd>` (Description Details Element)**  
   - This contains the details or description associated with each term. In this example, the descriptions are **HyperText Markup Language** for HTML and **Cascading Style Sheets** for CSS.  

When displayed in the browser, each term is followed by its corresponding description. By default, descriptions are slightly indented to the right for better readability.  

### Beyond Terms and Definitions  

Description lists are not limited to just terms and definitions—they are highly versatile. For example, you can use a description list to present a **recipe with ingredients and their corresponding measurements**:  

- The entire description list is wrapped within a `<dl>` element.  
- Each ingredient (e.g., **Flour**) is placed inside a `<dt>` element.  
- The quantity of the ingredient (e.g., **Two cups**) is placed in a `<dd>` element immediately after its corresponding ingredient.  
- The same structure is repeated for **Sugar** and other ingredients if needed.  

When rendered in a browser, ingredients are aligned to the left, while their corresponding measurements are indented for clarity.  

### Other Use Cases for Description Lists  

Description lists can be used in various scenarios, including:  

- **Product specifications**  
- **Frequently asked questions (FAQs)**  
- **Contact information**  
- **Metadata display**  

Essentially, whenever you need to present information in a **key-value pair format**, where one part acts as a label (key) and the other as related information (value), a description list is a great choice.