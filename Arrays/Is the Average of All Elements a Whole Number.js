function isAvgWhole(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return Number.isInteger(sum / arr.length);
}
