/*
  5   >  3
  7   > '3'
  2   >  3
  '1' >  9
  Result: true, true, false, false.
*/
function testGreaterThan(val) {
  if (val>100) {  // Change this line
    return "Over 100";
  }

  if (val>10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);