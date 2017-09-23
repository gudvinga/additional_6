
function zeros(string) {
	var arr = string.split('*'),
		count = 0,
		count2 = 0;
		count3 = 0;
	for(var i=0; i<arr.length; i++) {
		console.log('arr[i] = ' + arr[i]);
		if (arr[i].slice(-2) == '!!') {
			var num = parseInt(arr[i]);
			if (num%2 == 0) {
				for(var j=0; j<= num; j+=2) {
					if (j%10 == 0 ) count++;
					if (j%2 == 0 && j%10 != 0) count2++;
				}; 
			};
			else {
				for(var j=1; j<= num; j++) {
					if (j = 5) count5++;
			}
		} 
		else {
			for(var j=1; j<= parseInt(arr[i]); j++) {
				if (j%10 == 0 || j == 5) count++;
			}

		}
		console.log('count = ' + count);
	}
return(count);
}

console.log(zeros('45!*5!*63!*5!*28!*5!*55!!*5!*35!!*5!*45!!*5!*25!!*5!*65!!*5!*50!!*5!*40!!*5!*95!!*5!'));