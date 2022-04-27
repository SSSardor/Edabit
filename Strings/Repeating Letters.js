function doubleChar(str) {
  var res = '';
  for (i = 0; i < str.length; i++) {
    res += str[i] + str[i];
  }
  return res;
}
