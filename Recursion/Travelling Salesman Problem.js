function paths(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * paths(n - 1);
  }
}
