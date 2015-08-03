function fibAdd(){
	
	/*
		For a fibonacci sequence starting at 1 and 2 add up all the even values below 4,000,000
	*/

	fib.cache = [1,2];
	fib(32);

	var sum = 0;

	for(var i = 0; i < fib.cache.length;i++){
		if (fib.cache[i]%2 ===0){
			sum = sum + fib.cache[i];
		}
	}
	
	return sum;
}


function fib(n, undefined){
    if(fib.cache[n] === undefined){
        fib.cache[n] = fib(n-1) + fib(n-2);
    }

    return fib.cache[n];
}