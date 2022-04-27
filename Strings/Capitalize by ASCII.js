function asciiCapitalize(str) {
  let res = '';
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) % 2 == 0) {
      res += str[i].toUpperCase();
    } else {
      res += str[i].toLowerCase();
    }
  }
  return res;
}
