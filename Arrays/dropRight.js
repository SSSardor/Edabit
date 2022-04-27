function dropRight(arr, num = 1) {
  if (num > arr.length) {
    return [];
  }
  if (num === 0) {
    return arr;
  } else {
    return arr.slice(0, arr.length - num);
  }
}
