---
title: What is client-side form validation in HTML forms, and what are some examples?
draft: false
tags:
  - html
---
- **Client-Side Form Validation**: Ensures users enter the correct information before submitting a form, preventing invalid data from reaching the server.  
- **Client-Side vs. Server-Side**:  
  - **Client-Side**: Runs on the user's device, handling layout, design, and interactions.  
  - **Server-Side**: Runs on the web server, processing data and handling requests.  
  - **Security Note**: Server-side validation is still necessary, as client-side checks can be bypassed.  
- **Built-in Validation Examples**:  
  - **`required` Attribute**: Ensures users fill out a field before submission.  
  - **Email Input Validation**:  
    - The `type="email"` attribute enforces basic email format checking.  
    - **Additional Validation Attributes**:  
      - `size`: Defines the input field's display width.  
      - `minlength` & `maxlength`: Restrict the minimum and maximum number of characters allowed.  
- **Browser Behavior**: Different browsers show their own alert styles for validation messages.

