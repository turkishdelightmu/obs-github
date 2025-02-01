# What Are the `<u>` `<s>` and `<ruby>` Elements Used For, and How Do They Work? 

### **The `<u>` Element (Unarticulated Annotation)**  

The **`<u>` (unarticulated annotation) element** is used to represent **inline text that has a non-textual annotation applied**.  

#### **Example: Highlighting Spelling Errors with `<u>`**  

```html
<p>There are some <u>incorect</u> spelling <u>issuse</u> in this sentence.</p>
```  

**Rendered Output:**  
_There are some_ **incorect** _spelling_ **issuse** _in this sentence._  

#### **Key Notes About `<u>`:**  
- The **default styling** for `<u>` is a **black underline**.  
- In **HTML4**, `<u>` was used purely for styling.  
- In **HTML5**, `<u>` should **only** be used to indicate **non-textual annotations** (e.g., misspellings, proper names in Chinese, or special terminology).  
- If you need to **underline text for styling purposes**, use **CSS** instead.  
### **The `<s>` Element (Strikethrough for Inaccurate or Irrelevant Text)**  

The **`<s>` (strikethrough) element** is used to indicate that **text is no longer accurate or relevant**.  

#### **Example: Using `<s>` to Show a Canceled Event**  

```html
<p>The hiking trip is scheduled for Saturday. <s>Meet at 8:00 AM.</s> The hike has been canceled due to weather conditions.</p>
```  

**Rendered Output:**  
_The hiking trip is scheduled for Saturday._ ~~Meet at 8:00 AM.~~ _The hike has been canceled due to weather conditions._  

#### **Key Notes About `<s>`:**  
- `<s>` should **not** be used for tracking **document changes**.  
- Instead, use **`<del>`** (deleted text) and **`<ins>`** (inserted text) for tracking edits in documents.  

### **The `<ruby>` Element (Annotations for Pronunciation or Translations)**  

The **`<ruby>` element** is used to display **small annotations above or below text**, commonly for **East Asian characters**.  

#### **Example: Using `<ruby>` for Japanese Furigana Pronunciation**  

```html
<ruby>東京<rt>とうきょう</rt></ruby>
```  

**Rendered Output:**  
_東京 (とうきょう)_  

#### **Supporting Elements:**  
- **`<rt>` (Ruby Text)** → Defines the annotation text (e.g., pronunciation or translation).  
- **`<rp>` (Ruby Parentheses)** → Provides **fallback text** for browsers that don’t support `<ruby>`.  

#### **Example: Using `<rp>` for Fallback Display**  

```html
<ruby>漢字<rp>(</rp><rt>kanji</rt><rp>)</rp></ruby>
```  

**Rendered Output (For Unsupported Browsers):**  
_漢字 (kanji)_  

#### **Key Notes About `<ruby>`:**  
- It is primarily used in **East Asian typography**.  
- It can also be used for **phonetic guides, translations, or explanatory annotations**.  

### **Conclusion**  

- **Use `<u>`** for **non-textual annotations** (e.g., highlighting errors or specialized terminology).  
- **Use `<s>`** for **text that is no longer relevant or accurate** (but not for tracking changes).  
- **Use `<ruby>`** for **annotations, pronunciation guides, or translations**, especially in **East Asian languages**.  

These elements enhance **semantic meaning** in HTML and should be used **appropriately** based on their intended function.