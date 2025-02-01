# How Do You Display Mathematical Equations and Chemical Formulas in HTML?

### **The Superscript Element (`<sup>`)**  

The **`<sup>` (superscript) element** is used to display text **above the normal baseline**. A superscript is typically used for:  

- **Exponents** (e.g., mathematical equations)  
- **Superior lettering** (e.g., abbreviations)  
- **Ordinal numbers** (e.g., 1st, 2nd, 3rd)  

#### **Example: Using `<sup>` for Exponents**  

```html
<p>5<sup>2</sup> = 25</p>
```  

This renders as: **5² = 25**  

In the example above, the number **2** is wrapped inside the `<sup>` tags, making it appear **smaller and slightly raised** above the normal text.  

#### **Example: Using `<sup>` for Superior Lettering**  

Superior lettering is often used in abbreviations, such as **trademark (™) or registered (®) symbols**.  

```html
<p>Acme Corp<sup>®</sup></p>
```  

This renders as: **Acme Corp®**  

#### **Note:**  
The `<sup>` element should only be used for **semantic purposes** (e.g., exponents, abbreviations). If you simply need to style text with a **raised baseline**, it is better to use **CSS (`vertical-align: super;`)** instead.  

### **The Subscript Element (`<sub>`)**  

The **`<sub>` (subscript) element** is used to display text **below the normal baseline**. A subscript is commonly used for:  

- **Chemical formulas** (e.g., CO₂, H₂O)  
- **Mathematical subscripts** (e.g., x₁, y₂)  
- **Footnotes**  

#### **Example: Using `<sub>` for Chemical Formulas**  

```html
<p>Carbon dioxide: CO<sub>2</sub></p>
```  

This renders as: **Carbon dioxide: CO₂**  

In this example, the number **2** appears **lower and smaller** than the surrounding text, correctly formatting the chemical formula.  

### **Conclusion**  

- Use **`<sup>`** for **superscripts**, such as exponents and superior lettering.  
- Use **`<sub>`** for **subscripts**, such as chemical formulas and footnotes.  
- For **visual styling only**, use **CSS** instead of `<sup>` or `<sub>`.  

By using these elements correctly, you ensure **proper formatting** for mathematical equations, chemical formulas, and other typographical elements in HTML.