function sumOfCubes(nums) {
  var res = 0;
  for (var i = 0; i < nums.length; i++) {
    res += Math.pow(nums[i], 3);
  }
  return res;
}
