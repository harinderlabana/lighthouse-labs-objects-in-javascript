# Lighthouse Labs | Objects in JavaScript

[GitHub Repository Branch](https://github.com/WarrenUhrich/lighthouse-labs-objects-in-javascript/tree/2022.03.29-web-flex-mar-21-day-objects-in-javascript) | [Vimeo Video](https://vimeo.com/693715917/4d9d84db17)

- [X] Introduction
- [X] JavaScript Primitives and Data-Types
- [X] JavaScript Object Fundamentals

## Introduction

### About the Instructor

My name is Warren Uhrich, I'm a human person, instructor, and world-wide web developer hailing from Alberta, Canada!

### Lighthouse Lab Lectures

Welcome to a Lighthouse Labs programming lecture! Here are a few things to keep in mind as you attend:
- Spend most of your time listening and asking questions.
    - Write out small experiments, see what happens; code-along sparingly.
    - It is easy to get carried away trying to type _everything_, careful!
- Discussion is key.
    - Ask questions, don't be afraid to speak up!
    - The sooner you ask, the more it will be related to what's being taught in the moment.
    - Zoom has a text chat and a "raise your hand" feature, if you feel it is a moment where you may otherwise be interrupting.
- Lectures are recorded.
    - If you want to review something, or take extra notes, feel free to watch the recording at your leisure.

## Primitives

- undefined
- null
- boolean
- string
- number
- bigint
- symbol

### undefined and null

If a value has not yet been declared, set, or
otherwise described in the program, it will
be represented by undefined when called upon.

If a value is set, but empty, and has no other
appropriate type to describe this, it will
instead show as null. Null is often set by hand
by programmers in JavaScript to show that it is
empty with intention, likely to be filled in later,
or was previously filled and has now been cleared.

Note, that for legacy reasons, the typeof output
for null is "object", so old code can expect the
old output without error or running incorrectly.

### Booleans

A boolean represents a binary value. Think of it as
on or off, 0 or 1, positive or negative, or more
directly in JavaScript's case: true or false.

### Strings

Can be enclosed in: '', "", or ``
Can be concatenated (glued together) using +
String template literals (back tick strings) can
interpolate (include inside) other strings / values
via use of: ${}
Include a variable name or JS expression in the
dollar curly braces to include it in your string.

### Numbers and BigInts

The Number data-type can consist of any numeric value
ranging from 1.7976931348623157e+308 to 5e-324.

Numbers higher than this range are considered Infinity,
those lower than the range are the negative equilvalent,
-Infinity.

A malformed number that cannot be understood or interpreted
by JavaScript is represented as NaN, instead.

All of the above is considered under the data-type: Number.

Should you need values outside of the aforementioned range,
and you would rather they not be simplified as Infinity or
-Infinity, consider the alternative BigInt data-type.

### Symbols

This data-type will not always come up, but it is present in many
languages and can come in handy.

If there is worry that an object's property name may be used multiple
times, but there is need for these properties to hold unique values,
a unique identifier is needed. For cases like this, symbols act as
perfect unique identifiers!

Even if two symbols have the same "name", they will not match when
compared, it must be the exact same symbol.

## Objects

- arrays
- objects
- functions
- and much, much more!

### Objects

An object is usually used to represent a real-world entity. Something
that might require a few pieces of information to represent, and means
something to people or a business that serves them.

Pieces of information are considered properties of an object. They can
be of any valid JavaScript data-type, including objects and arrays.

Careful not to add too many layers and complexity to your objects!
Properties can be accessed via the object's name followed by a period
and the property name—this is "dot-syntax." Alternatively (though less
commonly) you can use the object's name followed by a string
representation of the property name (in quotes) enclosed in square
brackets.

**Dot syntax:** `myObject.propertyName`

**Square bracket syntax:** `myObject['propertyName']`

Because objects are not "indexed" like arrays, this format of storage
is often referred to as an associative array, map, dictionary, or hash
in other languages. These are key-value pairs, and are a very common
mechanism in programming.

In JavaScript, functions can be stored in objects. A function inside
an object is usually referred to as a "method."
Methods are powerful, as they can reference the object's very own
properties, allowing an object to manipulate itself when its methods
are executed.

### Arrays

Arrays are a type capable of storing a list of values. These
can be of any valid JavaScript type.

Each stored value is represented as an index number, starting
with zero. This style of storage is referred to as an "indexed
array" for this reason.

Arrays are started, added to, and manipulated largely by use
of square brackets and array methods.
Note that in JavaScript, an array's typeof output will read as
"object".

## Passing by Value

True "primitive" types are passed by value into functions as
arguments into function.

This means if you were keeping track of the value in a variable, etc.,
the original variable will not be affected (re-assignment of a parameter
within the function will not overwrite the external value.)

## Passing by Reference

Objects (including arrays) are more advanced and complex than
primitives. They are not passed as a simple copy of a value.

Instead, objects are kept track of by a "pointer", essentially
an address for where the object lives in memory.
This means that objects are mutable when passed as an argument.
Mutable, meaning, that their contents can be changed!

## References and Helpful Links
- [MDN: JS Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#creating_new_objects) | [W3Schoos: JS Objects](https://www.w3schools.com/js/js_objects.asp)
- [JavaScript data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [Article: Pass by Value and Pass by Reference in Javascript](https://www.geeksforgeeks.org/pass-by-value-and-pass-by-reference-in-javascript/)
- [Mega-File with Sample from all Topics Today](https://github.com/WarrenUhrich/lighthouse-labs-objects-in-javascript/blob/2022.03.29-web-flex-mar-21-day-objects-in-javascript/index.js)
- [GitHub JS Cheat Sheet Files](https://github.com/WarrenUhrich/javascript-cheat-sheet/tree/master/js)
- [Book: Learning JavaScript, 3rd Edition](https://www.oreilly.com/library/view/learning-javascript-3rd/9781491914892/)
