function sayHelloBye(name, num) {
  var name1 = 'Hello';
  var name2 = 'Bye';
  var name3 = name.replace(name[0], name[0].toUpperCase());
  if (num === 1) {
    return name1 + ' ' + name3;
  }
  if (num === 0) {
    return name2 + ' ' + name3;
  }
}
