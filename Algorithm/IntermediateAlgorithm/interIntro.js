function reverseArray(arr){
	for(var i = 0; i<= (arr.length/2-1); i++){
		var temp = arr[i];
		arr[i] = arr[arr.length-i-1];
		arr[arr.length-i-1] = temp; 
	}

	return arr;
}