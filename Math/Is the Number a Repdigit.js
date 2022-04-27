function isRepdigit(num) {
  num = num.toString().split('');
  for (let i = 0; i < num.length; i++) {
    if (num[i] == num[0]) {
      return true;
    }
  }
  return false;
}
