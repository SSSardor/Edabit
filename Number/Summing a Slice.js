function sliceSum(arr, n) {

	return arr.slice(0,n).reduce((a,b)=>a+b,0);
}