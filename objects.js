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

const pet1 = {
    name: 'Charlotte',
    age: 5,
    type: 'cat',
    speak: function() {
        console.log(`${this.name} says meow!`);
    }
};

const pet2 = {
    name: 'Nora',
    age: 4,
    type: 'cat',
    speak: function() {
        console.log(`${this.name} says meow!`);
    }
};

const pet3 = {
    name: 'Silo',
    age: 8,
    type: 'dog',
    speak: function() {
        console.log(`${this.name} says bark!`);
    }
};

console.log('pet1:', typeof pet1, pet1);
console.log('pet2:', typeof pet2, pet2);
console.log('pet3:', typeof pet3, pet3);

// To access a particular value, use dot syntax:
console.log('pet2.name:', typeof pet2.name, pet2.name);

// We can also run methods, but don't forget parenthesis!
pet1.speak();
pet3.speak();

// Versus arrays which aren't the most descriptive...
const myPerson = [
    'Bill', // What is this? Name, or a restaurant receipt?
    25, // Age? Hours worked this week?
    ['Hiking', 'Swimming'] // Hobbies, dislikes?
];
console.log('myPerson\'s name:', myPerson[0]); // What is zero!?!?

// Loop through array of objects!
const pets = [pet1, pet2, pet3];
console.log('for...of pets loop starting...');
for (let pet of pets) { // for...of loop, different than for statement from before!
    pet.speak(); // Each pet in the array will speak!
}
console.log('for...of pets loop completed.');
