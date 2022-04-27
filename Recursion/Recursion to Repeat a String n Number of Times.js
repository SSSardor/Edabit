function repetition(txt, n) {
	var res="";
	if(n==1){
		return txt;
	}else{
		return txt+repetition(txt,n-1)
	}

}