---
title: What are the Different Target Attribute Types, and How Do They Work?
draft: false
tags:
  - html
aliases:
---
 The `<button>` element is used to perform a specific action when activated. Here’s an example of a button element with the text **"Start Game"**:

```html
<button>Start Game</button>
```

Other common uses of the `<button>` element include submitting a form, displaying a modal, or toggling a side menu open and closed.

#### Button Types and Their Uses

The `<button>` element has a `type` attribute that controls its behavior when activated. There are three main types:

1. **Button (`type="button"`)**  
   By default, a button does nothing when clicked unless you add JavaScript to make it interactive. Here’s an example:

   ```html
   <button type="button" onclick="alert('Hello!')">Show Alert</button>
   ```

2. **Submit (`type="submit"`)**  
   A submit button is used inside a form to send user data to the server. Example:

   ```html
   <form>
       <label for="email">Email:</label>
       <input type="email" id="email" name="email">
       <button type="submit">Submit</button>
   </form>
   ```

3. **Reset (`type="reset"`)**  
   A reset button clears all input fields in a form. Example:

   ```html
   <form>
       <label for="email">Email:</label>
       <input type="email" id="email" name="email">
       <button type="reset">Reset</button>
       <button type="submit">Submit</button>
   </form>
   ```

   However, reset buttons are generally discouraged, as users might accidentally clear their data. Additionally, too many buttons can clutter the user interface.

#### Using the `<input>` Element as a Button

Another way to create buttons in HTML is with the `<input>` element. The `type` attribute can be set to `"button"`, `"submit"`, or `"reset"`. Example:

```html
<input type="button" value="Click Me">
```

#### `<button>` vs. `<input>`

- `<input>` elements are **void elements**, meaning they cannot have child nodes such as text or icons.
- `<button>` elements are more **flexible**, allowing you to include text, images, and icons inside them.

In general, the `<button>` element is preferred for most interactive features because of its greater flexibility.
