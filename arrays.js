/**
 * Arrays
 * ******
 * Arrays are a "type" of object capable of storing a list of values.
 * These stored values can be of any valid JavaScript type (including arrays.)
 * Each stored value is represented as an index number, starting
 * with zero. This style of storage is referred to as an "indexed
 * array" for this reason.
 * Arrays are started, added to, and manipulated largely by use
 * of square brackets and array methods.
 * Note that in JavaScript, an array's typeof output will read as
 * "object".
 */

const myCountingArray = [1, 2, 3, 4, 5];
console.log('myCountingArray:', typeof myCountingArray, myCountingArray);

// Array indexes start at zero. The following will show value "2" at position "1".
console.log('myCountingArray[1]:', typeof myCountingArray[1], myCountingArray[1]);

myCountingArray.push(6);
console.log('myCountingArray after pushing 6:', typeof myCountingArray, myCountingArray);

console.log('Looping through contents of myCountingArray...');
// SET ITERATOR; CHECK CONDITION;            ITERATE / ITERATION
for ( let i = 1; i < myCountingArray.length; i = i + 2 ) {
    console.log(
        `myCountingArray[${i}] = (${typeof myCountingArray[i]}) ${myCountingArray[i]}`
    );
}
console.log('Loop is complete.');

// Other ways to loop through arrays include... Array().forEach(), for...of
