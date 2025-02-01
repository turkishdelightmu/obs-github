# What Is the Difference Between Absolute and Relative Paths?


A path is a string that specifies the location of a file or directory within a file system. In web development, paths are used to link to resources such as images, stylesheets, scripts, and other web pages. There are two main types of paths: **absolute** and **relative**. Understanding their differences is essential for specifying file locations effectively. Let’s explore each type so you can decide when to use them.  

### **Absolute Path**  
An **absolute path** provides the complete location of a resource, starting from the root directory and including all intermediate directories, the file name, and its extension. For web resources, an absolute path often includes the protocol (e.g., `http`, `https`, or `file`) and the domain name (if applicable).  

#### Example of an Absolute Path (Web)  
Here is an example linking to the freeCodeCamp logo:  
`https://designstyleguide.freecodecamp.org/FCC-secondary-small.svg`  

- **Protocol**: `https`  
- **Domain**: `designstyleguide.freecodecamp.org`  
- **File name**: `FCC-secondary-small.svg`  

#### Example of an Absolute Path (Local Machine)  
If the resource is on your local machine, the absolute path will include the file system structure. For example:  
```
file:///Users/User/Desktop/FCC/Script-code/Absolute-vs-Relative-Paths/Core-pages/about.html
```
This path includes:  
1. The protocol: `file://`  
2. A hierarchical structure of folders:  
   - `Users` → `User` → `Desktop` → `FCC` → `Script-code` → `Absolute-vs-Relative-Paths` → `Core-pages`  
3. The file name and extension: `about.html`  

### **Relative Path**  
A **relative path** specifies the location of a file relative to the directory of the current file. Unlike absolute paths, relative paths do not include the protocol or domain name, making them shorter and more flexible for internal links within the same project or website.  

#### Example of a Relative Path  
Imagine you are on the `contact.html` page and want to link to the `about.html` page located in the same directory. You can use a simple relative path:  
```
about.html
```  

If the file is in a subdirectory, the relative path might look like this:  
```
./subfolder/file.html
```  
Or to access a file in the parent directory:  
```
../file.html
```  

### **When to Use Absolute and Relative Paths**  

#### **Use Absolute Paths When:**  
1. Linking to a resource hosted on an external website.  
2. Ensuring consistency regardless of the current file's location within the site.  

#### **Use Relative Paths When:**  
1. Linking to resources within the same website.  
2. Keeping your code cleaner and easier to maintain during development.  
3. Performing local testing to ensure links work without an internet connection.  

By understanding and applying these principles, you can effectively manage resource linking in your projects, ensuring your paths are both functional and maintainable.  
