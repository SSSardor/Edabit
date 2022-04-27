function findLargestNums(arr) {
  var res = [];
  for (i = 0; i < arr.length; i++) {
    res.push(Math.max(...arr[i]));
  }
  return res;
}
