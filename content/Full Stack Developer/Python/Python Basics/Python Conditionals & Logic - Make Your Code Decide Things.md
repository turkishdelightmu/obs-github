---
title: Python Conditionals & Logic - Make Your Code Decide Things
draft: false
tags:
  - python
  - pythonbasics
---
 ## Python Conditionals & Logic: Make Your Code Decide Things

Conditional statements (conditionals) let your program **choose what to do** based on whether something is **True or False**. They’re built on two key ideas: **comparison operators** and **boolean logic**.

## 1) Comparison operators (they return True/False)

Python compares values using operators like these:

```python
print(3 > 4)   # False
print(3 < 4)   # True
print(4 == 4)  # True
print(3 != 4)  # True
print(3 >= 4)  # False
print(3 <= 4)  # True
```

These expressions produce booleans (`True`/`False`), which is exactly what conditionals need.

## 2) `if` statements (indentation matters)

Basic syntax:

```python
age = 18

if age >= 18:
    print("You are an adult")
```

In Python, **indentation defines the code block**. If you forget it, you’ll get an `IndentationError`.

## 3) `if/else` and `elif` (multiple branches)

Use `else` when you want a fallback:

```python
age = 12

if age >= 18:
    print("You are an adult")
else:
    print("You are not an adult yet")
```

Use `elif` for multiple conditions:

```python
age = 12

if age >= 18:
    print("You are an adult")
elif age >= 13:
    print("You are a teenager")
else:
    print("You are a child")
```

## 4) Truthy vs falsy (Python’s “hidden” booleans)

In Python, many values behave like `True` or `False` in logical contexts.

**Falsy values include:**

- `None`
    
- `False`
    
- `0`, `0.0`
    
- `""` (empty string)
    

Check with `bool()`:

```python
print(bool(0))      # False
print(bool(""))     # False
print(bool("Hi"))   # True
print(bool(42))     # True
```

## 5) Logical operators: `and`, `or`, `not` (+ short-circuiting)

### `and` (both must be truthy)

Often used to avoid nested `if`s:

```python
is_citizen = True
age = 25

if is_citizen and age >= 18:
    print("You are eligible to vote")
else:
    print("You are not eligible to vote")
```

### `or` (at least one must be truthy)

Great for “either/or” checks:

```python
age = 19
is_student = True

if age < 18 or is_student:
    print("You are eligible for a student discount")
else:
    print("You are not eligible for a student discount")
```

### `not` (flips the boolean)

Useful for “not allowed” or “not logged in” logic:

```python
is_admin = False

if not is_admin:
    print("Access denied for non-administrators.")
else:
    print("Welcome, Administrator!")
```

### Short-circuiting (why it’s efficient)

Python evaluates left-to-right and **stops early** when the result is already known:

```python
print(True and "next")   # next
print(False and "next")  # False (stops early)

print("first" or "second")  # first (stops early)
print("" or "backup")       # backup
```

### Takeaway

With comparisons (`==`, `>`, `<=`), conditionals (`if/elif/else`), and logic (`and/or/not`), you can write code that reacts to user input, validates data, controls access, and more—without messy nested blocks.

