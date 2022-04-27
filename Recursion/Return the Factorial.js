function factorial(int) {
  var res = 1;
  for (i = 1; i <= int; i++) {
    res = res * i;
  }
  return res;
}
// recursion function orqalisi
function factorial(int) {
  if (int == 0) {
    return 1;
  } else {
    return factorial(int - 1) * int;
  }
}
