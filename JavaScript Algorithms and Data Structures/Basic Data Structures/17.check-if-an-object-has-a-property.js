let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

/**
 * 2 methods to check if there is an property in a object.
 * object.hasOwnProperty(property);
 * property in object;
 **/
function isEveryoneHere(obj) {
  // Only change code below this line
  return obj.hasOwnProperty('Alan') && obj.hasOwnProperty('Jeff') && obj.hasOwnProperty('Sarah') && 'Ryan' in obj;
  // Only change code above this line
}

console.log(isEveryoneHere(users));