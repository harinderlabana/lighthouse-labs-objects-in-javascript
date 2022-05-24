const leo = {
  name: 'Leo',
  type: 'Gecko',
};

const quorra = {
  name: 'Quorra',
  type: 'dog',
  speak: function () {
    console.log(this.name + ' barks.');
  },
};

const pollo = {
  name: 'Pollo',
  type: 'dog',
  speak: function () {
    console.log(this.name + ' barks.');
  },
};

const cassius = {
  name: 'Cassius',
  type: 'child',
};

console.log('cassius:', typeof cassius, cassius);
console.log('quorra:', typeof quorra, quorra);
console.log('leo:', typeof leo, leo);
console.log('Pollo:', typeof pollo, pollo);

pollo.speak();
quorra.speak();
