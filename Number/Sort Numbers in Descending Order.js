function sortDescending(num) {
  var num2 = num.toString().split('');
  var num1 = num2.sort((a, b) => b - a).join('');
  return +num1;
}
