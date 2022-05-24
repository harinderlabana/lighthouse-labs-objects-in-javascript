// Single quites can be used to begin or terminate a string.
const hiThere = 'Hello World!';
console.log('hiThere:', typeof hiThere, hiThere);

const letsGoString = "Let's go!\n\tNew-line/tabbed text.";
console.log('letsGoString:', typeof letsGoString, letsGoString);

const myBackTickString = `Let's go! Warren says "Hi!
Look at all of these...



    tabbed
    new
    lines`;

console.log('myBackTickString', typeof myBackTickString, myBackTickString);

// Glue strings togetherl concatenation!

const myConcatenatedString = hiThere + ' ' + letsGoString;
console.log(
  'myConcatenatedString:',
  typeof myConcatenatedString,
  myConcatenatedString
);

// Interpolation... values inserted within strings.,
const myInterpolatedString = `Hi there! Here is an interpolated string: ${5 + 5}

Lets say hello... ${hiThere}

Now the string is done.`;
console.log(
  'myInterpolatedString',
  typeof myInterpolatedString,
  myInterpolatedString
);
