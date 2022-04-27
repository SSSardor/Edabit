function getDecimalPlaces(num) {
  if (num.includes('.')) {
    var res = num.indexOf('.');
    var num1 = num.slice(res + 1);
    console.log(num1.length);
  } else {
    console.log(0);
  }
}
getDecimalPlaces('43.20');
