function addNums(nums) {
	return nums.split(", ").reduce((a,b)=>a+ +b,0);
}