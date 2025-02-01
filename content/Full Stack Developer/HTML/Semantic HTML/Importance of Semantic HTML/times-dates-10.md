# How Do You Display Times and Dates in HTML?

The **`<time>` element** is used to represent a **specific moment in time** in an HTML document.  

### **Example: Representing a Specific Time**  

```html
<time datetime="20:00">8:00 PM</time>
```  

In this example, the `<time>` element represents **20:00 hours (8:00 PM)**.  

### **The `datetime` Attribute**  

The **`datetime` attribute** translates dates and times into a **machine-readable format**. This is important because:  

- It helps **search engines** process and display date/time information accurately.  
- It allows **browsers** to interpret and format dates/times effectively.  

### **Valid Values for the `datetime` Attribute**  

The `datetime` attribute must be formatted as one of the following valid types:  

- **Year:** `"2025"`  
- **Month:** `"2025-02"` (February 2025)  
- **Time:** `"14:30"` (2:30 PM)  
- **Local Date & Time:** `"2025-02-15T14:30"` (February 15, 2025, at 2:30 PM)  
- **Global Date & Time (ISO 8601 format):** `"2025-02-15T14:30Z"` (UTC time)  
- **Duration:** `"PT30M"` (30-minute duration)  

### **Example: Representing a Specific Date**  

```html
<time datetime="2025-02-15T15:00">February 15, 2025, at 3:00 PM</time>
```  

In this example:  

- The `datetime` attribute follows the **ISO 8601 standard**, which is an **international format** for representing dates and times.  
- The **capital "T"** separates the **date (2025-02-15)** from the **time (15:00, or 3:00 PM).**  

### **When to Use the `<time>` Element**  

Use the `<time>` element when representing:  

- **Event dates and times** (e.g., meetings, webinars, conferences).  
- **Publication dates** (e.g., blog posts, news articles).  
- **Appointments or schedules** (e.g., calendars, booking systems).  

By using the `<time>` element correctly, you improve **SEO, accessibility, and browser compatibility** for date and time information.