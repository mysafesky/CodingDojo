function divisive3or5(){
	/*
	Add all the values between 100 and 4000000 inclusively that are divisable by 3 or 5 but not both 3 and 5
	*/

	var arr = [];

	for (i = 100; i<= 4000000; i++){
		if ((i%5==0 || i%3==0) && !(i%5==0 && i%3==0)){
			arr.push(i);
		}
	}
	return arr;
}