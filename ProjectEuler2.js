var fib = [];
var sum = 0;
var i = 1;

fib[0] = 0;
fib[1] = 1;
fib[i] 

do {
	i++;
    fib[i] = fib[i-2] + fib[i-1];
    if (fib[i] % 2 == 0) {
    	sum += fib[i];
    };
} while (fib[i] < 4000000);
console.log(sum);
