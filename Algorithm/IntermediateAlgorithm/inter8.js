function lastNum(a,b){
	/*
	Given a string with 2 numbers, a and b, echo the last digit produced by a^b
	*/
	return lastNumRecursive(a,b,a);
}

function lastNumRecursive(a,b,c){
	if (b == 1){
		return a;
	}

	if (b > 1){
		temp = a*c;
		digits = temp.toString().split("");
		return lastNumRecursive(parseInt(digits[digits.length-1]),b-1,c);
	} 
}