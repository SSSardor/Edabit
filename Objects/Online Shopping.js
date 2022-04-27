function freeShipping(order) {
  var res = Object.values(order);
  const res1 = res.reduce((a, b) => a + b, 0);
  if (res1 < 50) {
    return false;
  } else {
    return true;
  }
}
