function sumArray(arr) {
  const arr1 = arr.flat(2);
  return arr1.reduce((a, b) => a + b);
}
