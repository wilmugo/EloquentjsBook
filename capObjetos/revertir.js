function revertirArray(array) {
  let revertArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    revertArray.push(array[i]);
  }
  return revertArray;
}

console.log(revertirArray([2, 5, 6, 7, 8, 9]));
