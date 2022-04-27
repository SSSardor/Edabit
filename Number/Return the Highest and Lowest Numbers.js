function highLow(str) {
	str1=str.split(" ").sort((a,b)=>a-b)
	return str1[str1.length-1]+" "+str1[0];
}