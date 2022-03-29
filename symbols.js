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
console.log('myFirstSymbol:', typeof myFirstSymbol, myFirstSymbol);
const mySecondSymbol = Symbol('symbolTwo');
console.log('mySecondSymbol:', typeof mySecondSymbol, mySecondSymbol);

console.log('Is myFirstSymbol === to myFirstSymbol?', myFirstSymbol === myFirstSymbol);
console.log('Is myFirstSymbol === to mySecondSymbol?', myFirstSymbol === mySecondSymbol);

const myThirdSymbol = Symbol('sameName');
const myFourthSymbol = Symbol('sameName');

console.log('Is myThirdSymbol === to myFourthSymbol?', myThirdSymbol === myFourthSymbol);

const SETTING_ACTIVE = 'yes';
if ( SETTING_ACTIVE === 'yes' ) console.log('Setting should be active.');

const SETTING_ACTIVE2 = Symbol('yes');
if ( SETTING_ACTIVE2 === SETTING_ACTIVE2 ) console.log('Setting should be active.');

const objWithSymbols = {
    [Symbol('name')]: 'Henry',
    [Symbol('age')]: 42,
    age: 41
};

console.log('objWithSymbols', typeof objWithSymbols, objWithSymbols);
objWithSymbols.age = 42; // Happy birthday!
objWithSymbols['age'] = 43; // Oh no, two birthdays so soon!
console.log('objWithSymbols', typeof objWithSymbols, objWithSymbols);

