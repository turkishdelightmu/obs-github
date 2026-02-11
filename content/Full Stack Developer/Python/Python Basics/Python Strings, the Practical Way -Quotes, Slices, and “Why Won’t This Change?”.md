---
title: Python Strings, the Practical Way -Quotes, Slices, and “Why Won’t This Change?”
draft: false
tags:
  - python
  - pythonbasics
---
Strings are one of the first (and most useful) data types you’ll work with in Python. A **string** is simply a sequence of characters wrapped in **single** or **double** quotes—and in Python, both types of quotes behave the same.

```python
my_str_1 = 'Hello'
my_str_2 = "World"
```

### Multi-line strings

Need line breaks? Use triple quotes:

```python
my_str_3 = """Multiline
string"""
```

### Quotes inside strings (two clean options)

**1) Swap quote types:**

```python
msg = "It's a sunny day"
quote = 'She said, "Hello World!"'
```

**2) Escape quotes with a backslash:**

```python
msg = 'It\'s a sunny day'
quote = "She said, \"Hello!\""
```

## Checking content, length, and indexing

To check if text exists inside a string, use `in`:

```python
my_str = "Hello world"
print("Hello" in my_str)  # True
print("hey" in my_str)    # False
```

To get string length, use `len()`:

```python
print(len("Hello world"))  # 11
```

To access characters, use **zero-based indexing**:

```python
my_str = "Hello world"
print(my_str[0])   # H
print(my_str[6])   # w
```

Negative indexes count from the end:

```python
print(my_str[-1])  # d
print(my_str[-2])  # l
```

## String immutability (the “why won’t it update?” moment)

Strings are **immutable** in Python. You can **reassign** a variable to a new string, but you can’t change characters in-place.

```python
greeting = "hi"
greeting = "hello"  # reassignment is fine
print(greeting)     # hello
```

But this fails:

```python
greeting = "hi"
greeting[0] = "H"   # TypeError: 'str' object does not support item assignment
```

## Concatenation vs interpolation (f-strings)

### Concatenation with `+`

```python
first = "Hello"
second = "World"
print(first + " " + second)  # Hello World
```

Concatenating a string and a number raises an error unless you convert:

```python
name = "John Doe"
age = 26
print(name + str(age))  # John Doe26
```

### Interpolation with f-strings (cleanest)

F-strings let you embed variables and expressions directly:

```python
name = "John Doe"
age = 26
print(f"My name is {name} and I am {age} years old")
```

```python
num1, num2 = 5, 10
print(f"The sum of {num1} and {num2} is {num1 + num2}")
```
## Slicing: grab parts of a string (without modifying it)

Slicing uses `start:stop` (stop is **non-inclusive**):

```python
my_str = "Hello world"
print(my_str[1:4])  # ell
```

Omit values to default to the start/end:

```python
print(my_str[:7])   # Hello w
print(my_str[8:])   # rld
print(my_str[:])    # Hello world
```

Use a `step` to skip characters—or reverse the string:

```python
print(my_str[0:11:2])  # Hlowrd
print(my_str[::-1])    # dlrow olleH
```

## Handy string methods you’ll use constantly

Each method returns a **new** string (because strings are immutable):

```python
s = "  hello world  "
print(s.strip())                 # hello world
print(s.upper())                 #   HELLO WORLD
print("Hello World".lower())     # hello world
print("hello world".replace("hello", "hi"))  # hi world
print("hello world".split())     # ['hello', 'world']
print(" ".join(["hello", "world"]))          # hello world
```

Quick checks and searches:

```python
s = "hello world"
print(s.startswith("hello"))  # True
print(s.endswith("world"))    # True
print(s.find("world"))        # 6
print(s.count("o"))           # 2
print(s.title())              # Hello World
```

### Takeaway

If you remember three things, you’re set:

- Strings are text in quotes (single or double is fine)
    
- Strings are **immutable** (you create new ones instead of editing)
    
- Use **f-strings** and **slicing** for clean, readable string work
