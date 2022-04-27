function repetition(txt, n) {
  var res = '';
  for (i = 0; i < n; i++) {
    res += txt;
  }
  return res;
}
// 2usul
function repetition(txt, n) {
  return txt.repeat(n);
}
