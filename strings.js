/**
 * Strings
 * *******
 * Can be enclosed in: '', "", or ``
 * Can be concatenated (glued together) using +
 * String template literals (back tick strings) can
 * interpolate (include inside) other strings / values
 * via use of: ${}
 * Include a variable name or JS expression in the
 * dollar curly braces to include it in your string.
 */

const myString = 'Hello, World!';
console.log('myString:', typeof myString, myString);

const myDoubleQuoteString = "We can even use double-quotes!";
console.log('myDoubleQuoteString:', typeof myDoubleQuoteString, myDoubleQuoteString);

// Concatenation: adding / gluing strings together.
const myConcatenatedString = myString + '\n\t' + myDoubleQuoteString;
console.log('myConcatenatedString:', typeof myConcatenatedString, myConcatenatedString);

// Back-ticks allow string interpolation (we can use strings / expressions
// inside of the string.) `${myVar}`
// Another thing about back-ticks, is they follow your exact use of white-space.
// Meaning... your newlines, tabs, etc. will be noticed!
// 'Let\'s try...'; // You'd have to escape extra quotes in single or double strings.
const myBackTickString = `Let's try using back-ticks!
Inside we can use string template literals. Code and variables
    INSIDE OUR STRINGS! Amazing.
We can use \${} to print our variable values or raw values.
Like so: ${myString} Very cool, eh?`;
console.log('myBackTickString:', typeof myBackTickString, myBackTickString);
