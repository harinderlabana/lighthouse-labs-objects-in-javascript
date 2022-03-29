/**
 * Passing by Value
 * ****************
 * True "primitive" types are passed by value into functions as
 * arguments into function.
 * This means if you were keeping track of the value in a variable, etc.,
 * the original variable will not be affected (re-assignment of a parameter
 * within the function will not overwrite the external value.)
 */

function addToNum(num) {
    console.log('num entered in addToNum:', num);
    num = num + 1; // THE ORIGINAL OUTSIDE THE FUNCTION IS NOT TOUCHED.
    console.log('num sum in addToNum:', num);
} 

let testNum = 5; // ONLY the value is passed in, not the original.
addToNum(testNum); // ONLY the value is passed in.
console.log('testNum after addToNum:', testNum);
