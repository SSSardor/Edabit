function tpChecker(home) {
  var a = Math.floor((home.tp * 500) / 57 / home.people);
  if (a < 14) {
    return `Your TP will only last ${a} days, buy more!`;
  } else {
    return `Your TP will last ${a} days, no need to panic!`;
  }
}
