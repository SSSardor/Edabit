function hashPlusCount(str) {
  var res = 0;
  var res1 = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] == '#') {
      res += 1;
    }
    if (str[i] == '+') {
      res1 += 1;
    }
  }
  return [res, res1];
}
