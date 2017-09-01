//Write a recursive function that given a number returns sum of integers from 1 to that number.

function rSigma(n){
	n = Math.floor(n)
	var sum = 0
	if (n == 1){
		return 0
	}
	if (n > 1){
		while (n >= 1){
			sum +=n
			console.log(sum)
			n--
		}
		return sum
	}
	if (n < 1){
		while (n <=1){
			sum += n
			n++
		}
		return sum
	}
}

console.log(rSigma(5)) //should return 15 (1+2+3+4+5)

