function balance(arr){
	/*
		Given an array of numbers return true if there is a place to split the array 
		so that the sum of the numbers on one side is equal to the sum of the numbers 
		on the other side.
	*/
	var sum = 0;
	// Calculate the sum of the array;
	for (var i = 0; i < arr.length; i++){
		sum = sum + arr[i];
	}

	// Find the possible split
	var right = sum;
	var left = 0;
	for (var j = 0; j < arr.length-1; j++){
		left = left + arr[i];
		right = right - arr[i];
		if (left === right){
			return true;
		}
	}
	return false;
}