let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line
//3 examples of changing properties of an object
foods.bananas = 13;

foods.strawberries = 27;

//If you want to name the property as a variable or if you want to use a variable with spaces you have to use braket notation.
foods['apples and oranges'] = 57;
let grapes = 'grapes';
foods[grapes] = 35;
// Only change code above this line

console.log(foods);