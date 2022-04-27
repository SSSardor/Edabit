function calculateDifference(obj, limit) {
  return Object.values(obj).reduce((a, b) => a + b) - limit;
}
