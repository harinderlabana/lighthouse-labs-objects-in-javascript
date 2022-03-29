/**
 * Booleans
 * ********
 * A boolean represents a binary value. Think of it as
 * on or off, 0 or 1, positive or negative, or more
 * directly in JavaScript's case: true or false.
 */

const myTrueBool = true;
const myFalseBool = false;
console.log('myTrueBool', typeof myTrueBool, myTrueBool);
console.log('myFalseBool', typeof myFalseBool, myFalseBool);

// If you want to get the opposite, use the exclamation mark (useful in if statements.)
console.log('Not myTrueBool / !myTrueBool', typeof !myTrueBool, !myTrueBool);

if(3 > 2) { // Only runs if condition is true.
    console.log('Testing an if statement!');
}
