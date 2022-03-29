//////////////////////////////////////////
// JavaScript Primitives and Data-Types //
//////////////////////////////////////////

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

 console.log('myTest1:', typeof myTest1/*, myTest1*/); // Accessing directly is undefined, and can cause a runtime error.

 let myTest2;
 console.log('myTest2:', typeof myTest2, myTest2);
 
 const myTest3 = null;
 console.log('myTest3:', typeof myTest3, myTest3); // typeof is "object" for legacy support reasons.
 
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
 
 // You can use an exclamation mark to grab the reverse.
 // Think of this as saying "not" in front of the value
 // when reading the expression aloud.
 console.log('Not myTrueBool / !myTrueBool', typeof !myTrueBool, !myTrueBool);
 
 // Note that comparison expressions resolve as either
 // true or false (a boolean).
 
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
 
 const mySecondString = "We can also use double-quotes.";
 console.log('mySecondString:', typeof mySecondString, mySecondString);
 
 // Concatenation uses: +
 const concatenatedString = '\n' + myString + '\n\t' + mySecondString;
 console.log('concatenatedString', typeof concatenatedString, concatenatedString);
 
 // Interpolation uses: `A string with ${yourVar} inside!`
 const myThirdString = `We can even use back ticks...
 this is used for creating string template literals!
 That means we can use: \${} to print variables.
 Example) \${myString} will print as: ${myString}`;
 console.log('myThirdString:', typeof myThirdString, myThirdString);
 
 /**
  * Numbers and BigInts
  * *******************
  * The Number data-type can consist of any numeric value
  * ranging from 1.7976931348623157e+308 to 5e-324.
  * Numbers higher than this range are considered Infinity,
  * those lower than the range are the negative equilvalent,
  * -Infinity.
  * A malformed number that cannot be understood or interpreted
  * by JavaScript is represented as NaN, instead.
  * All of the above is considered under the data-type: Number.
  * Should you need values outside of the aforementioned range,
  * and you would rather they not be simplified as Infinity or
  * -Infinity, consider the alternative BigInt data-type.
  */
 
 const sampleNumber = 3.14;
 console.log('sampleNumber:', typeof sampleNumber, sampleNumber);
 
 const maxNumber = Number.MAX_VALUE; // 1.7976931348623157e+308
 const minNumber = Number.MIN_VALUE; // 5e-324
 console.log(
     'Maximum number:', typeof maxNumber, maxNumber,
     'Minimum number:', typeof minNumber, minNumber
 );
 
 const aboveMaximum = maxNumber + maxNumber; // Infinity
 console.log('Above maximum number?', typeof aboveMaximum, aboveMaximum);
 
 const belowMinimum = -maxNumber - maxNumber; // -Infinity
 console.log('Below lowest number?', typeof belowMinimum, belowMinimum);
 
 // The Number function will try to convert a provided value into a valid number.
 const malformedNumber = Number('3.3.3'); // NaN
 console.log('Malformed number:', typeof malformedNumber, malformedNumber);
 
 // For exceptionally large values, ensure result values are casted into the more
 // appropriate BigInt data type.
 const bigNumber = BigInt(maxNumber) * BigInt(maxNumber);
 console.log('Big Int:', typeof bigNumber, bigNumber);
 
 // To ensure that numbers are treated as BigInt, they can be wrapped in
 // BigInt() or end with the letter n. Note the following examples.
 // Trying the following without the n may result in errors, as the
 // numbers will instead be treated as they would within the normal range.
 const otherBigNumber = 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999n;
 const bigSum = bigNumber + otherBigNumber + 333n;
 console.log('otherBigNumber:', typeof otherBigNumber, otherBigNumber);
 console.log('bigSum:', typeof bigSum, bigSum);
 
 // Typical language and use-cases when using numbers.
 
 // Most languages call numbers with decimals floating-point numbers, or
 // doubles. Try using these terms when describing this sort of value,
 // even though JavaScript doesn't have formal types for these.
 // We can use the built-in parseFloat() to force a number to conform
 // to this format.
 const myFloat = parseFloat('1.23456789'); // Converts a string to a floating-point number.
 console.log('myFloat:', typeof myFloat, myFloat); // Note the type is still "number".
 
 // Numbers without decimal, are typically called integers.
 // There is a built-in parseInt() function to help cut off any
 // decimal points and format your number as an integer. No
 // rounding occurs in this function.
 const myInt = parseInt(3.74); // Converts a string to a number, and/or cuts off decimal values.
 console.log('myInt:', typeof myInt, myInt); // Note the type is still "number".
 
 // If you only care that a number is formed, and not whether it
 // contains a decimal or is a whole number, you can use the
 // Number() function.
 const aNumber = Number('9.87654');
 console.log('aNumber:', typeof aNumber, aNumber);
 
 /**
  * Arrays
  * ******
  * Arrays are a type capable of storing a list of values. These
  * can be of any valid JavaScript type.
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
 
 // Adding a number to the array.
 myCountingArray.push(6); // Adds a value to the end of the array.
 console.log('myCountingArray with 6:', typeof myCountingArray, myCountingArray);
 
 // Accessing a value in the array; note that the index starts with zero!
 console.log('myCountingArray[3] value is:', typeof myCountingArray[3], myCountingArray[3]);
 
 // Looping through an array.
 /**
  * The "for statement" is flexible, and can have three expressions.
  * These three expressions usually follow this pattern:
  * SET ITERATOR; TERMINATION CONDITION; ITERATION
  * 
  * In our example below, we happen to use each of these like so:
  *  1) Iterator starts at zero...
  *  2) At each step, make sure that iterator is smaller than the # of items in the array.
  *  3) Bump the iterator up by one, so we can check the next item in the array.
  *
  * You can also research "Array().forEach()" and "for...of" loops.
  */
 console.log('Looping through contents of "myCountingArray"...');
 for(let i = 0; i < myCountingArray.length; i = i + 1) {
     console.log(`myCountingArray[${i}] = (${typeof myCountingArray[i]}) ${myCountingArray[i]}`);
 }
 console.log('Loop completed.');
 
 /**
  * Objects
  * *******
  * An object is usually used to represent a real-world entity. Something
  * that might require a few pieces of information to represent, and means
  * something to people or a business that serves them.
  * Pieces of information are considered properties of an object. They can
  * be of any valid JavaScript data-type, including objects and arrays.
  * Careful not to add too many layers and complexity to your objects!
  * Properties can be accessed via the object's name followed by a period
  * and the property name—this is "dot-syntax." Alternatively (though less
  * commonly) you can use the object's name followed by a string
  * representation of the property name (in quotes) enclosed in square
  * brackets.
  *             Dot syntax: myObject.propertyName
  *  Square bracket syntax: myObject['propertyName']
  * 
  * Because objects are not "indexed" like arrays, this format of storage
  * is often referred to as an associative array, map, dictionary, or hash
  * in other languages. These are key-value pairs, and are a very common
  * mechanism in programming.
  * 
  * In JavaScript, functions can be stored in objects. A function inside
  * an object is usually referred to as a "method."
  * Methods are powerful, as they can reference the object's very own
  * properties, allowing an object to manipulate itself when its methods
  * are executed.
  */
 
 const pet1 = { // Objects are enclosed in curly braces.
     name: 'Quorra', // Property names are proceeded by a colon and the value to assign.
     age: 1,
     type: 'Dog',
     breed: 'Akita Cross',
     speak: function() { // Methods are functions inside of an object.
         console.log(`${this.name} barks!`);
     }
 };
 console.log('pet1:', typeof pet1, pet1);
 
 // Access a value easily with "dot syntax".
 console.log('pet1.name is:', typeof pet1.name, pet1.name);
 
 // Run methods via "dot syntax" as well.
 pet1.speak(); // Don't forget parenthesis, if you'd like to execute the method.
 
 /**
  * Symbols
  * *******
  * This data-type will not always come up, but it is present in many
  * languages and can come in handy.
  * If there is worry that an object's property name may be used multiple
  * times, but there is need for these properties to hold unique values,
  * a unique identifier is needed. For cases like this, symbols act as
  * perfect unique identifiers!
  * Even if two symbols have the same "name", they will not match when
  * compared, it must be the exact same symbol.
  */
 
 const myFirstSymbol = Symbol('symbolOne');
 const mySecondSymbol = Symbol('symbolTwo');
 
 console.log('myFirstSymbol:', typeof myFirstSymbol, myFirstSymbol);
 
 console.log('Is myFirstSymbol === to myFirstSymbol?', myFirstSymbol === myFirstSymbol);
 console.log('Is myFirstSymbol === to mySecondSymbol?', myFirstSymbol === mySecondSymbol);
 
 const myThirdSymbol = Symbol('sameName');
 const myFourthSymbol = Symbol('sameName');
 
 console.log('Is myThirdSymbol === to myFourthSymbol?', myThirdSymbol === myFourthSymbol);
 
 // Guaranteed uniqueness can be used as property names like so.
 const nameProp = Symbol('name');
 const ageProp = Symbol('age');
 const hobbiesProp = Symbol('hobbies');
 const newPerson = {
     [nameProp]: 'Warren',
     [ageProp]: 28,
     [hobbiesProp]: ['Programming', 'Cheese Tasting']
 };
 
 console.log('newPerson:', typeof newPerson, newPerson);
 console.log('newPerson\'s name:', typeof newPerson[nameProp], newPerson[nameProp]);
 
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
     console.log('num entered in function:', typeof num, num);
     num = num + 1;
     console.log('num calculated in function:', typeof num, num);
 }
 
 let myTestNum = 32;
 console.log('myTestNum:', typeof myTestNum, myTestNum);
 
 addToNum(myTestNum);
 console.log('myTestNum after addToNum():', typeof myTestNum, myTestNum);
 
 const myTestObject = {numberToTest: 2};
 console.log('myTestObject:', typeof myTestObject, myTestObject);
 
 addToNum(myTestObject.numberToTest);
 console.log('myTestObject:', typeof myTestObject, myTestObject);
 
 /**
  * Passing by Reference
  * ********************
  * Objects (including arrays) are more advanced and complex than
  * primitives. They are not passed as a simple copy of a value.
  * Instead, objects are kept track of by a "pointer", essentially
  * an address for where the object lives in memory.
  * This means that objects are mutable when passed as an argument.
  * Mutable, meaning, that their contents can be changed!
  */
 
 function clearObj(obj) {
     console.log('\n\n\nclearObj running...');
     console.log('clearObj received:', obj);
     obj = {}; // Does not overwrite the original, creates a brand new object reference!
     // obj.lights = 'on'; // Property is added to NEW object.
     console.log('clearObj updated:', obj);
 }
 
 const homeSecurity = {
     door: 'unlocked',
     windows: 'closed',
     motionDectectors: 'deactivated'
 };
 
 console.log('homeSecurity:', typeof homeSecurity, homeSecurity);
 
 clearObj(homeSecurity);
 
 // The original object is untouched!
 console.log('homeSecurity after clearObj:', typeof homeSecurity, homeSecurity);
 
 // Another example, editing a property of the object.
 function editObjProp(obj) {
     console.log('\n\n\neditObjProp running...');
     console.log('editObjProp received:', obj);
     obj.windows = 'open';
     console.log('editObjProp updated:', obj);
 }
 
 editObjProp(homeSecurity);
 
 // The property was edited! The original obect was pointed to and edited in this case.
 console.log('homeSecurity after editObjProp:', typeof homeSecurity, homeSecurity);
 
 // More evidence of reference.
 const moreHomeSecurity = homeSecurity;
 moreHomeSecurity.garageDoor = 'closed';
 
 // After changing moreHomeSecurity, homeSecurity too, is updated!
 console.log('moreHomeSecurity:', typeof moreHomeSecurity, moreHomeSecurity);
 console.log('homeSecurity after moreHomeSecurity is updated:', typeof homeSecurity, homeSecurity);
 
 // Both of the above are referencing the same object.
 // Objects and arrays are kept separate of the variable name, and multiple
 // "references" or "pointers" are capable of pointing to the same storage
 // position in your system's memory.
 // This sort of behaviour, if kept in mind, can be used to your advantage
 // instead of disadvantage.
 // Never be afraid to experiment and run tests to ensure you've got it
 // right in your programs!
 