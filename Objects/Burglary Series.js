function addName(obj, name, value) {
	let b=obj;
	const a={};
	a[name]=value;
	return Object.assign(b,a);
	
}