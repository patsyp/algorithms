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

//Return whether a sorted array contains a value but without sequentially iterating through array.
function binarySearch(arr, val){
	var len = arr.length
	var half = Math.floor(len/2)
	if (arr[half]>val){ 
		var lowerHalf= arr.slice(0, half)
		if (lowerHalf[0] == val){
			return {'Value': val, 'Index': 0}
		}
		else{
			while (lowerHalf.length > 1){
				lowerHalf=lowerHalf.slice(Math.floor(lowerHalf.length/2), lowerHalf.length)
				if (lowerHalf[0] == val){
					return {'Value': val, 'Index':arr.indexOf(val)}
				}
			}
		}
	}
	if (arr[half]<val){
		var upperHalf= arr.slice (half, len)
		if (upperHalf[0] = val){
			return {'Value': val, 'Index': arr.indexOf(val)}
		}
		else{
			while (upperHalf.length > 1){
				upperHalf = upperHalf.slice(Math.floor(lowerHalf.length/2), lowerHalf.length)
				if (lowerHalf[0] == val){
					return {'Value': val, 'Index':arr.indexOf(val)}
				}
			}

		}
	}
}

console.log(binarySearch([1, 2, 4, 5, 7, 9,10], 9))