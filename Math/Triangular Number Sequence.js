function triangle(n) {
	let step = 1
	let result = 0
	for(let i = 0; i < n; i++) {
		result += step++;
	}
	return(result);
}