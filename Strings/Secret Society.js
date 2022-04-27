function societyName(friends) {
  var res = '';
  for (i = 0; i < friends.length; i++) {
    res += friends[i][0];
  }
  var res1 = res.split('').sort().join('');
  return res1;
}
