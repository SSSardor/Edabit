function integerToString(num, base) {
  let digits = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ];
  while (num) {
    br = digits[Math.floor(num % base)] + '';
    num = Math.floor(num / base);
  }
  return br;
}
