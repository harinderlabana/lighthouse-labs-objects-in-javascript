/**
 * undefined and null
 * ******************
 * If a value has not yet been declared, set, or
 * otherwise described in the program, it will
 * be represented by undefined when called upon.
 * If a value is set, but empty, and has no other
 * appropriate type to describe this, it will
 * instead show as null. Null is often set by hand
 * by programmers in JavaScript to show that it is
 * empty with intention, likely to be filled in later,
 * or was previously filled and has now been cleared.
 * Note, that for legacy reasons, the typeof output
 * for null is "object", so old code can expect the
 * old output without error or running incorrectly.
 */

let myTest;
console.log('myTest', typeof myTest, myTest);

console.log('nonexistant variable', typeof myNonExistantTest);

const myNullVal = null; // typeof "object" for legacy compatibility.
console.log('myNullVal', typeof myNullVal, myNullVal);
