function highLow(str) {
	var arr = str.split(' ').map(x => Number(x));
	return Math.max(...arr) + ' ' + Math.min(...arr);
}