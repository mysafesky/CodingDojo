function longestWord(str){
	/*
	Given a string find the longest word in the string.  
	For example if the string is "Coding Dojo rocks" then 
	it should print "the longest word is Coding".
	*/

	words = str.split(" ");
	var longest = "";
	for (var i = 0 ; i < words.length; i++){
		if (words[i].length > longest.length){
			longest = words[i];
		}
	}

	debug("the longest word is " + longest);
}

//test = "Coding Dojo works"
//longestWord(test);