function findHighest(arr) {
	let result = '';
	for (var i=0; i<arr.length; i++) {
		if (arr[i] > result) {
			result = arr[i];
		}
	}
		return result;
}