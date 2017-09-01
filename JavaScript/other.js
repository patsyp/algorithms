//Write a recursive function that given a number returns sum of integers from 1 to that number.

function rSigma(n){
	var sum = 0
	while (n>=1){
		sum +=n
		n--
		console.log(n)
	}
	return sum
}

rSigma(5) //should return 15 (1+2+3+4+5)

console.log(rSigma(-1))