i
function isPrime(number) {
	if (number == 2) {
		return true;
	};
	if (number % 2 == 0) {
		return false;
	};

	var i = 3;
	sqrtOfNumber = Math.sqrt(number);

	while (i <= sqrtOfNumber) {
        if (number % i == 0) {
            return false;
        };
        i += 2;
    };    
    return true;
};

function largestPrime(number) {
	for(var x = number-1; x > 1; x--) {
		if (number % x == 0 && isPrime(x)) {
			return x;
		};
	};
};

console.log(largestPrime(13195));
console.log(isPrime(45));

