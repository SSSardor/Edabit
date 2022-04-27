function getBudgets(arr) {
  return (arr) => arr.reduce((a, v) => a + v.budget, 0);
}
