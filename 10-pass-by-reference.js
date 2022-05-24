function addToObjProp(obj) {
  console.log('Object before addition.', obj);
  obj = {}; //brand new reference
  obj.prop = 5;
  obj.prop = obj.prop + 2;
  console.log('Object after addition.', obj);
}

const myObj = { prop: 5 };
console.log('Object before function.', myObj);
addToObjProp(myObj);
console.log('Object after function.', myObj);
