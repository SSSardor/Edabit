function convertBinary(str) {
  var res = '';
  for (i = 0; i < str.length; i++) {
    if (/[a-m]/i.test(str[i])) {
      res += '0';
    } else {
      res += '1';
    }
  }
  return res;
}
