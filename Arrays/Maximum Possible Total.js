function maxTotal(nums) {
	return nums.sort((a,b)=>a-b).slice(nums.length-5).reduce((a,b)=>a+b);

		

	
}