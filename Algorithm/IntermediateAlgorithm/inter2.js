function TwoArrayOneHash(arr1,arr2){
	/*
	 *2Arrays1Hash
	 *Given two arrays make a hash with the first array being the keys
	 */

	var map = {};
	for(var i = 0; i < arr1.length; i++){
		map[arr1[i]] = arr2[i];
	}

	return map;
}