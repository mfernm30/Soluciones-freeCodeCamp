/*
  Result: true, false, true, true
  1   ==  1
  1   ==  2
  1   == '1'
  "3" ==  3
*/ 

// Setup
function testEqual(val) {
  if (val == "12") { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);