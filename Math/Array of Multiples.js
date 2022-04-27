function arrayOfMultiples(num, length) {
  var result = [];
  for (let i = 1; i <= length; i++) {
    result.push(num * i);
  }
  return result;
}
