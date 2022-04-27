function leftDigit(num) {
	var res="";
	for(i=0;i<num.length;i++){
		if(num[i]=="0"){
			return 0
		}
		if(+num[i]){
			res+=num[i];
		}

	}
			return +res[0];
}