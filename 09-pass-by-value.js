function addToNum(num) {
  console.log('Number before addition.', num);
  num = num + 2;
  console.log('Number after addition.', num);
}

const myNum = 5;

console.log('Number before function.', myNum);

addToNum(myNum);
console.log('Number after function.', myNum);
