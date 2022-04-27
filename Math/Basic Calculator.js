function calculator(num1, operator, num2) {
  if (num2 === 0) {
    return "Can't divide by 0!";
  } else {
    return eval(num1 + operator + num2);
  }
}
