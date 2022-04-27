function addUp(num) {
  if (num === 0) {
    return num;
  }
  return num + addUp(num - 1);
}
