function Sum2One(num){
	/*
	given a postitive integer calculate the sum of the digits, do this until the sum is one digit in size
	*/
	if (num > 9) {
		var sum = 0;
		digits = num.toString().split("");
		for (var i = 0; i < digits.length; i++){
			sum = sum + parseInt(digits[i]);
		}
		return Sum2One(sum);
	} else {
		return num;
	}
}

//debug(Sum2One(1234566));