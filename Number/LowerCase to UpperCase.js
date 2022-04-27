function task(str) {
  var res = '';
  for (i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() === str[i]) {
      res += str[i].toLowerCase();
    }
    if (str[i].toLowerCase() === str[i]) {
      res += str[i].toUpperCase();
    }
  }
  console.log(res);
}
task('aAaaBHGJkjkjkjKJKjkjKNJKjjGGh');
