
function zeros(string) {
	var i = 0,
		rez = rezult(string);
		while(rez%10 == 0) {
			rez/=10;
			i++;
		};
return(i);
}

function rezult(str) {
	var arr = str.split('*'),
		fac,
		rez = 1;

		for( i=0; i<arr.length; i++) {
			if (arr[i].slice(-2) == '!!') {
				fac = factor2(parseInt(arr[i]));
			} else fac = factor(parseInt(arr[i]));
		rez = multiply(rez, fac);
		}
return(rez);
}

function factor(n) {
	if (n != 0) {
		return multiply(n,factor(n-1));
	}
	else return 1;

}

function factor2(k) {
	if (k > 0) {
		return multiply(k,factor2(k-2));
	}
	else return 1;
}

function multiply(first, second) {
var firstLength = first.length,
	secondLength = second.length,
	res = [],
	trek = 0;
	//init array res
	for (var i = 0; i < (firstLength + secondLength -1); i++) {
		res[i] = 0;
	}

	//multiply first and second
	for (var i = 0; i < firstLength; i++) {
		for (var  j= 0; j < secondLength; j++) {
			res[i + j] += first[i] * second[j];
		}
	}
	//make trek
	for (var i = res.length - 1; i >= 0; i--) {
		if (i != 0) {
			trek = Math.floor(res[i]/10);
			res[i] %= 10;
			res[i-1] += trek;
		}
	}

return(res.join(''));
}
// console.log(factor2(10));
console.log(zeros('90!!'));