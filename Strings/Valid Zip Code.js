function isValid(zip) {
  if (Number(zip) && zip.length <= 5) {
    return true;
  } else return false;
}
