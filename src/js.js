
function zeros(expression) {
	var countZeros = 0,
		resString = '';
		numbers = expression.split('*');
	for(var i = 0; i < numbers.length; i++) {
		if ( numbers[i].slice(-2) == '!!' ) {
			resString += factor2(parseInt(numbers[i])) + ' ';
		}
		else if ( numbers[i].slice(-1) == '!' ) {
			resString += factor(parseInt(numbers[i])) + ' ';
		}
		else return console.log('You need multiply factorials, used ! ')
	}
	numbers = resString.split(' ');
	for (var i = 0; i < numbers.length-1; i++) {
		countZeros += counter(+numbers[i],5);
	}
return countZeros;
}

function counter(num, index) {
	if (num == 0) return 0;
	var count = 0;
	while( num % index == 0 ) {
		count++;
		num /= index;
	}
return(count);
}

function factor(n) {
	if (n > 1 ) return n + ' ' + factor(n-1);
	else return 1;
}

function factor2(k) {
	if (k > 1) return k + ' ' + factor2(k-2);
	else return 1;
}
console.log(zeros('1!*2!*3!*4!*5!*6!*7!*8!*9!*10!'));