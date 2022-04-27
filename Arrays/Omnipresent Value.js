function isOmnipresent(arr, val) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i].includes(val)) {
      return true;
    } else {
      return false;
    }
  }
}
