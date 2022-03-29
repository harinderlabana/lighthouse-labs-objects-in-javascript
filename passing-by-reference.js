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

const myNewObj = {testVal: 'Hello, World!'};
function replaceObjWithBlank(obj) {
    console.log('intial replaceObjWithBlank:', obj);
    obj = {}; // New curly braces, means new reference! NEW OBJECT! ORIGINAL IS UNAFFECTED.
    obj.goodBye = 'See ya\' later!';
    console.log('end of replaceObjWithBlank:', obj);

    return obj;
}

const returnedObj = replaceObjWithBlank(myNewObj);
console.log('myNewObj after replaceWithBlank:', myNewObj);
console.log('returnedObj:', returnedObj);

// Updating an object's properties by reference.
const homeSecurity = {
    door: 'unlocked',
    windows: 'closed',
    motionDectors: 'activated'
};

function editObjectProperty(obj) {
    console.log('initial obj in editObjectProperty', obj);
    obj.windows = 'open';
    obj.garageDoors = 'closed';
    console.log('end obj in editObjectProperty', obj);
}

editObjectProperty(homeSecurity);
console.log('homeSecurity after editObjectProperty', homeSecurity);

const myBrandNewHomeSecurity = homeSecurity; // homeSecurity is an Object REFERENCE
myBrandNewHomeSecurity.garageDoors = 'open';

// Both myBrandNewHomeSecurity AND homeSecurity are referencing the exact
// SAME OBJECT in memory!!! Changes to one, affect the other!

console.log('homeSecurity.garageDoors:', homeSecurity.garageDoors);

console.log('homeSecurity === myBrandNewHomeSecurity', homeSecurity === myBrandNewHomeSecurity)
