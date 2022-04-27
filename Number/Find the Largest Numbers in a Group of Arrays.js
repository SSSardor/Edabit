function findLargestNums(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    array.push(Math.max(...arr[i]));
  }
  return array;
}
