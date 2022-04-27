function calculateLosses(obj) {
  var res = Object.values(obj);
  if (res.length === 0) {
    return 'Lucky you!';
  } else {
    return res.reduce((a, b) => a + b, 0);
  }
}
