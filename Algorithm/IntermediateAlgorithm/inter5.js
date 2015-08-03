function Censor(word, text){
	/*
		Create a function that takes two parameters. The first a word to censor and the
		second a string of text that may contain the word to be censored. Return the 
		string with the censor word replaced with the correct length of *'s

		Hard mode: have it replaced with random symbols instead of just *'s
	*/
	var reg = new RegExp(word,"gi");
	var wordLength = word.length;
	var cencored = text.replace(reg,randomChar(wordLength));
	return cencored;
}

function randomChar(length){
	var str = "";
	for (var i = 1; i<= length; i++){
		str = str + String.fromCharCode(randomIntInc(33,47));
	}
	return str;
}

function randomIntInc (low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}