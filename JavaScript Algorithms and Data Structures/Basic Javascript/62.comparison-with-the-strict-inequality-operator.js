/*
  3 !==  3
  3 !== '3'
  4 !==  3
  Result: false, true, true.
 */

// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);