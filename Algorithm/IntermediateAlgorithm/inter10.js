function string2number(str){
	/*
	Given a string find all the numbers in the string and find their sum in javascript
	*/

	words = str.split(" ");
	var sum = 0;
	for (var i = 0 ; i < words.length; i++){
		if (!isNaN(parseInt(words[i]))){
			sum = sum + Number(words[i]);
		}
	}
	return sum;
}

str ="abs 9 9 1123.1"
debug(string2number(str));