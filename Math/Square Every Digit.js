function squareDigits(n) {
  return +[...String(n)].map((x) => Math.pow(+x, 2)).join('');
}
