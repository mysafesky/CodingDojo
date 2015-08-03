function largestPalindrome(str){
	/*
	Given a string find the largest palindrome in the string
	*/
	var largest = "";

	var words = str.split(" ");
	for (var i = 0; i<words.length;i++){
		if (words[i] == words[i].split("").reverse().join("") && words[i].length > largest.length){
			largest = words[i];
		}
	}
	return largest;
}

//teststr = "abcdcba aba abcba adsfaf afdsfas afdsfadffasfdsafas"
//debug(largestPalindrome(teststr));