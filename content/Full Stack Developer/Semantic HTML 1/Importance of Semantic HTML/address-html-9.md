# How Do You Display Addresses in HTML?

The **`<address>` (contact address) element** is used to represent **contact information** for a section on a web page. This element is versatile and can be used for **business pages, author pages, personal sites, and more**.  

When building a contact section for your website, it is best to use the **semantic `<address>` element** instead of a generic `<div>` or `<p>` element.  

### **Example: Using the `<address>` Element for a Company Contact Page**  

```html
<address>
   <strong>Company Name</strong><br>
   123 Main Street<br>
   New York, NY 10001<br>
   USA<br>
   Phone: <a href="tel:+1234567890">+1 (234) 567-890</a><br>
   Email: <a href="mailto:info@example.com">info@example.com</a>
</address>
```  

### **How This Appears on the Screen**  

- The **physical address** is displayed with **line breaks (`<br>`)** to separate the street name, city, and country.  
- The **phone number** is a clickable link that allows users to **initiate a call** on supported devices.  
- The **email address** is also a clickable link that opens the user's default email client.  

### **Making the Phone Number Clickable**  

For the **phone number**, we use an **anchor (`<a>`) element** with the `href` attribute set to `tel:` followed by the phone number.  

```html
<a href="tel:+1234567890">+1 (234) 567-890</a>
```  

This creates a **clickable phone number** that can initiate a call on mobile devices or apps like FaceTime.  

### **Making the Email Address Clickable**  

For the **email address**, we use an **anchor (`<a>`) element** with the `href` attribute set to `mailto:` followed by the email address.  

```html
<a href="mailto:info@example.com">info@example.com</a>
```  

Clicking this link will **open the user's default email client** (such as Outlook, Gmail, or Apple Mail) with a new draft email.  

### **Potential Downsides of Using `mailto:` Links**  

While `mailto:` links can be convenient, they are often targeted by spammers. Many users **avoid clicking them** due to the risk of receiving spam emails. To reduce this risk, consider using:  

- **Contact forms** instead of `mailto:` links.  
- **JavaScript-based email obfuscation** to prevent bots from harvesting email addresses.  

### **Conclusion**  

- Use the **`<address>` element** for **contact information** instead of generic elements.  
- Use the **`tel:` attribute** to create a **clickable phone number**.  
- Use the **`mailto:` attribute** to create a **clickable email address**, but be aware of potential spam risks.  
- Consider **alternative methods** like contact forms for better user experience and security.