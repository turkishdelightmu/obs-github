# What Are the Different Link States, and Why Are They Important?

You may have noticed a link turning purple after you click it. This happens because the **state** of the link has changed, and different styling is applied. In web development, links can exist in five distinct states. Understanding and styling these states appropriately is crucial for creating a user-friendly and visually consistent web experience.  

### **1. Default State (`link`)**  
The **default state** applies to links that the user has not yet visited, clicked, or interacted with. This state provides the **base styling** for all links on your page, serving as the foundation upon which other states build.  

### **2. Visited State (`visited`)**  
The **visited state** applies to links that the user has already clicked and visited. By default, browsers often style visited links with a **purple color**. However, you can use CSS to customize this styling, offering users a clear visual indicator that they’ve already visited a particular page. This is especially helpful for:  
- Letting users know which parts of documentation they’ve already read.  
- Indicating that the site is familiar or trustworthy.  

### **3. Hover State (`hover`)**  
The **hover state** is triggered when a user moves their cursor over a link. This state is ideal for drawing extra attention to a link and reinforcing its interactivity. Common styles include changing the color, adding an underline, or applying a slight animation to enhance visual feedback.  

### **4. Focus State (`focus`)**  
The **focus state** applies when a link gains focus, typically through keyboard navigation (e.g., using the `Tab` key). Styling the focus state ensures that your website is accessible to users who rely on keyboard navigation or assistive technologies.  

### **5. Active State (`active`)**  
The **active state** applies to links while they are being activated by the user—most commonly when the user is clicking or tapping the link. This state provides immediate feedback to confirm the user’s action. A common style is a brief change in color or appearance while the link is being clicked.  

### **CSS Order for Styling Link States**  
When styling links in CSS, it’s essential to follow a specific order to ensure proper application of styles. The recommended order is:  

**LVHA** (Link, Visited, Hover, Active):  
```css
a:link { color: blue; }     /* Default state */
a:visited { color: purple; } /* Visited state */
a:hover { color: green; }   /* Hover state */
a:active { color: red; }    /* Active state */
```  

### **Why Link States Are Important**  
1. **User Experience**: Clear styling helps users distinguish between visited and unvisited links, improving navigation.  
2. **Accessibility**: Focus and hover states enhance usability for keyboard users and assistive technology.  
3. **Visual Feedback**: Active states provide instant confirmation of interactions.  
4. **Custom Branding**: By customizing link styles, you can align them with your website’s design while maintaining functionality.  

By leveraging these link states, you can provide a unique and accessible experience while ensuring users receive clear visual feedback about each link’s state.  
