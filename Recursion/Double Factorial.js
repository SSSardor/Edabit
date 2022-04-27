function doubleFactorial(num) {
	if(num==-1){
		return 1
	}if(num==0){
		return 1
	}if(num%2==0){
		return num*doubleFactorial(num-2)				
	}if(num%2==1){
		return num*doubleFactorial(num-2)
	}
}