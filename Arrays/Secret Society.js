function societyName(friends) {
	var res="";
	for(i=0;i<friends.length;i++){
		var friends1=friends.sort()
		res+=friends1[i][0]
	}
	
	return res;
}