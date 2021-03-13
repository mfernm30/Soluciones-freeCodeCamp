/*
    1 !=  2
    1 != "1"
    1 != '1'
    1 != true
    0 != false
    Result: true, false, false, false, false
 */

// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);