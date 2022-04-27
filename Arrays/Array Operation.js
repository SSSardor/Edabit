function arrayOperation(x, y, n) {
  Arr = [];
  for (i = x; i <= y; i++) {
    if (i % n === 0) {
      Arr.push(i);
    }
  }
  return Arr;
}
