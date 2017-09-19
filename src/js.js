
function zeros(string) {
	var i = 0,
		end = String(rezult(string)).length;
	while(String(rezult(string))[end-i-1] == '0'){
		i++;
	}
return i;
}

function rezult(str) {
	var arr = str.split('*'),
		fac,
		rez = 1;
	for( i=0; i<arr.length; i++) {
		if (arr[i].slice(-2) == '!!') {
			fac = factor2(parseInt(arr[i]));
		} else fac = factor(parseInt(arr[i]));
	rez *= fac;
	}
return(rez);
}

function factor(n) {
	if (n != 0) {
		return n*factor(n-1);
	}
	else return 1;

}

function factor2(k) {
	if (k > 0) {
		return k*factor2(k-2);
	}
	else return 1;
}
// console.log(factor2(10));
console.log(zeros('10!'));