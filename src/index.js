module.exports = function zeros(expression) {
	var arr = expression.split('*'),
		count = 0;
	//console.log('arr = ' + arr);
	for(var i=0; i<arr.length; i++) {
		console.log('arr[i] = ' + arr[i]);
		if (arr[i].slice(-2) == '!!') {
			var num = parseInt(arr[i]);
			if (num%2 == 0) {
				for(var j=1; j<= num; j++) {
					if (j%10 == 0 ) count++;
				}; 
			};
		} 
		else {
			for(var j=1; j<= parseInt(arr[i]); j++) {
				if (j%10 == 0 || j == 5) count++;
			}

		}
	}
return(count);
}