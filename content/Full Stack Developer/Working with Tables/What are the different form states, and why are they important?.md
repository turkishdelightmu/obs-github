---
title: What are the different form states, and why are they important?
draft: false
tags:
  - html
---
- **Form States in HTML**: Inputs can exist in different conditions that affect user interaction.  
- **Types of Form States**:  
  - **Default State**: The initial blank state before the user enters any data.  
  - **Focused State**: When the user selects an input (e.g., clicking or using the tab key); browsers usually highlight it.  
  - **Disabled State**: Prevents user interaction; set using the `disabled` attribute (`<input disabled>`).  
  - **Readonly State**: Displays a fixed value that cannot be edited but can still be focused; set using the `readonly` attribute (`<input readonly>`).  
- **Key Difference**:  
  - **Readonly inputs can be focused**, but **disabled inputs cannot**.  
- **Importance of Form States**: Improves user experience by providing feedback and preventing errors.

