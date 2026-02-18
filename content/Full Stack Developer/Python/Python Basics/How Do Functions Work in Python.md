---
title: How Do Functions Work in Python
draft: false
tags:
  - python
  - pythonbasics
---
Functions are reusable blocks of code that run when you **call** them. Python ships with lots of built-in functions, which helps you get productive quickly.

## Built-in functions: quick wins

Two common built-ins you’ll use early are `input()` and `int()`.

### `input()` collects user input

```python
name = input("What is your name? ")  # User types "Kolade" and presses Enter
print("Hello", name)                  # Hello Kolade
```

### `int()` converts values to integers

```python
print(int(3.14))    # 3
print(int("42"))    # 42
print(int(True))    # 1
print(int(False))   # 0
```

## Writing your own functions with `def`

To create a custom function, use `def`, give it a name, add parentheses `()`, then a colon `:`. The indented lines that follow are the **function body** (a code block).

```python
def hello():
    print("Hello World")

hello()  # Hello World
```

Indentation matters because Python uses it to group related statements together.

## Parameters vs arguments

**Parameters** are the placeholders in the function definition. **Arguments** are the real values you pass in when calling the function.

```python
def calculate_sum(a, b):  # a and b are parameters
    print(a + b)

calculate_sum(3, 1)  # 3 and 1 are arguments -> 4
```

If you don’t pass the required number of arguments, you’ll get a `TypeError`:

```python
def calculate_sum(a, b):
    print(a + b)

calculate_sum()
# TypeError: calculate_sum() missing 2 required positional arguments: 'a' and 'b'
```

## Returning values (and why `None` appears)

Printing a result is not the same as returning it. If a function doesn’t explicitly `return` something, Python returns `None` by default.

```python
def calculate_sum(a, b):
    print(a + b)

my_sum = calculate_sum(3, 1)  # prints 4
print(my_sum)                 # None
```

Fix it with `return`:

```python
def calculate_sum(a, b):
    return a + b

my_sum = calculate_sum(3, 1)
print(my_sum)  # 4
```

## What is Scope in Python?

**Scope** determines where a variable can be accessed. Python resolves names using the **LEGB rule**:

- **L**ocal: inside the current function/class
    
- **E**nclosing: inside outer (nested) functions
    
- **G**lobal: top level of the file/module
    
- **B**uilt-in: Python’s reserved built-ins (like `print`, `type`, `str`)
    

## Local scope: inside a function only

```python
def my_func():
    my_var = 10
    print(my_var)

my_func()      # 10
print(my_var)  # NameError: name 'my_var' is not defined
```

## Enclosing scope: nested functions can “see” outer variables

```python
def outer_func():
    msg = "Hello there!"

    def inner_func():
        print(msg)  # accesses enclosing variable

    inner_func()

outer_func()  # Hello there!
```

But the outer function can’t access variables created inside the inner function:

```python
def outer_func():
    msg = "Hello there!"
    print(res)  # res doesn't exist here yet

    def inner_func():
        res = "How are you?"
        print(msg)

    inner_func()

outer_func()  # NameError: name 'res' is not defined
```

If you want the inner function to modify an enclosing variable, use `nonlocal`:

```python
def outer_func():
    msg = "Hello there!"
    res = ""

    def inner_func():
        nonlocal res
        res = "How are you?"
        print(msg)

    inner_func()
    print(res)

outer_func()
# Hello there!
# How are you?
```

## Global scope: accessible throughout the file

```python
my_var = 100

def show_var():
    print(my_var)

show_var()   # 100
print(my_var)  # 100
```

To create or modify a global variable inside a function, use `global`:

```python
my_var_1 = 7

def show_vars():
    global my_var_2
    my_var_2 = 10
    print(my_var_1)
    print(my_var_2)

show_vars()    # 7 10
print(my_var_2)  # 10
```

And to modify an existing global:

```python
my_var = 10

def change_var():
    global my_var
    my_var = 20

change_var()
print(my_var)  # 20
```

## Built-in scope: always available

```python
print(str(45))           # "45"
print(type(3.14))        # <class 'float'>
print(isinstance(3, str))  # False
```

## Wrap-up

- Functions help you **reuse logic** and keep code clean.
    
- Use **parameters** to accept input, and **return** to send values back.
    
- Scope follows **LEGB**, which explains _why_ some variables are visible in some places and not others.
    

