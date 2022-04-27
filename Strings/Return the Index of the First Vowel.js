function firstVowel(str) {
  const list = ['a', 'e', 'i', 'o', 'u'];
  str = str.toLowerCase().split('');
  for (let i = 0; i < str.length; i++) {
    if (list.includes(str[i])) {
      return str.indexOf(str[i]);
    }
  }
  return -1;
}
//2 usul
function firstVowel(str) {
  return str.indexOf(str.match(/[ueoaiUEOAI]/)[0]);
}
