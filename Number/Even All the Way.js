function getOnlyEvens(nums) {
  var res = [];
  for (i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0 && i % 2 === 0) {
      res.push(nums[i]);
    }
  }
  return res;
}
