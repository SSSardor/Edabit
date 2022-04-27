function getAbsSum(arr) {
  return arr.reduce((a, b) => Math.abs(a) + Math.abs(b), 0);
}
