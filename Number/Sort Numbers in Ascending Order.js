function sortNumsAscending(arr) {
  if (arr === null) {
    return [];
  } else {
    return arr.sort((a, b) => a - b);
  }
}
