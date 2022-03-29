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

const sampleNumber = 3.74;
console.log('sampleNumber:', typeof sampleNumber, sampleNumber);

const myInt = parseInt(sampleNumber); // Format as integer (whole number.)
console.log('myInt:', typeof myInt, myInt);

// Decimal numbers... floats or double.
const myFloat = parseFloat('3.14'); // Great for converting strings to numbers for math!
console.log('myFloat:', typeof myFloat, myFloat);

const genericNumber = Number('5');
console.log('genericNumber:', typeof genericNumber, genericNumber);

console.log('5 + "5" =', 5 + "5");
console.log('5 + Number("5") =', 5 + Number("5"));

// BIG INTS
const hugeNumber = 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
console.log('hugeNumber:', typeof hugeNumber, hugeNumber);

// If a number is too big, it becomes Infinity
Infinity;

// If a number is too small, it becomes -Infinity
-Infinity;

const reallyNegativeNumber = -hugeNumber - hugeNumber;
console.log('reallyNegativeNumber:', typeof reallyNegativeNumber, reallyNegativeNumber);

// If you NEED to keep track of numbers this big, use BigInt instead.
// Just add an n at the end of the 999... number and it becomes readable!
const myFirstBigInt = 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999n;
console.log('myFirstBigInt:', typeof myFirstBigInt, myFirstBigInt);

// Instead of n we can use the BigInt() function.
const alternativeSyntaxBigInt = BigInt(34);
console.log('alternativeSyntaxBigInt:', typeof alternativeSyntaxBigInt, alternativeSyntaxBigInt);

const bigIntSum = myFirstBigInt + alternativeSyntaxBigInt + 2n;
console.log('bigIntSum', typeof bigIntSum, bigIntSum);

// If you're curious about the max/min values for NUMBERS in your version of JS, run the following:
const maxNumber = Number.MAX_VALUE; // 1.7976931348623157e+308
const minNumber = Number.MIN_VALUE; // 5e-324
console.log(
    'Maximum number:', typeof maxNumber, maxNumber,
    'Minimum number:', typeof minNumber, minNumber
);
