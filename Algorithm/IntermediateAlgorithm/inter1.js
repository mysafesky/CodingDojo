function DnF2DArray(){
	/*
		Create a 10 X 10 array and randomly fill each cell with "D" or "E"
	*/
	var arr = [];
	
	for(var i = 0; i < 10; i++) {
	    arr[i] = [];

	    for(var j = 0; j < 10; j++) {
	    	var a = Math.random();
	    	if (a < 0.5){
	    		arr[i][j] = "D";
	    	} else {
	    		arr[i][j] = "F";
	    	}  
	    }
	}
	return arr;
}