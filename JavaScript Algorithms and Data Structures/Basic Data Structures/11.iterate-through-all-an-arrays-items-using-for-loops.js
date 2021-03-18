function filteredArray(arr, elem) {
  let newArr = [];
  let aux;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    aux = false;
    for (let j = 0; j < arr[i].length; j++) {
        if(arr[i][j]==elem){
          aux = true;
        }
    }
    if (aux==false){
      newArr.push(arr[i]);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter"));