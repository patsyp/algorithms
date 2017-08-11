//Return the first index of an array in which the sum of the intergers on the left and right sice are equal.
function findEvenIndex(arr){
	var leftSum = 0
	var rightSum = 0
	if (arr.length == 0){
			console.log("Empty Array")
			return 0
	}
	for (var i=0; i<arr.length; i++){
		leftSum = leftSum + arr[i]
		rightSum = 0
		for (var l=arr.length-1; l>i; l--){
			rightSum = rightSum + arr[l]
			if (rightSum == leftSum && l == i+2){
				return l-1
			}
		}
	}
	return -1
}

findEvenIndex([1,2,3,4,3,2,1])//returns index 3
findEvenIndex([1,100,50,-51,1,1])//returns index 1

//Takes any non-negative integer and returns new interger with digits in descending order.
function highToLow(num){ 
	var arr = Array.from(num.toString()).map(Number);
	var max=0
	var newArr = []
	var len = arr.length
	while (newArr.length<len){
		for (var i=0; i<arr.length; i++){	
			if (max<arr[i]){
				max = arr[i]	
			}
		}
		newArr.push(max)
		var inx = arr.indexOf(max)
		arr.splice(inx, 1)
		max = arr[0]
	}
	var newNum = newArr.join("")
	return parseInt(newNum)
}
// console.log(highToLow(2501)) //returns 5210

//Given a string of space separated numbers, return the highest and lowest number.
function highAndLow(num){
	var arr = num.split(" ")
	var max = arr[0]
	var min = arr[0]
	for (var i=0; i<arr.length; i++){
		arr[i] = parseInt(arr[i])
		if (max < arr[i]){
			max = arr[i]
		}
		if (min > arr[i]){
			min = arr[i]
		}
	}
	return `${max} ${min}`
}
highAndLow("1 -1")

function queueTime(customers, n) {
	var arr=customers.slice(n)
	console.log(arr)
	var sum=0
	if (customers.length == 0){
		return sum
	}
	var sortArr = customers.sort(function(a, b){return a-b})
	var max = sortArr[sortArr.length-1]
	var min = sortArr[0]
	for (var i=0; i<arr.length; i++){
				sum += arr[i]
		}
	}
  	if (n >= customers.length){
  			return max
  	}
	if (n == 1){
		return s(customers)
	}
	else {
		for (var i=n; i<customers.length; i++){
				 sum = min + customers[i]
			}
	}
}

console.log(queueTime([1, 2, 5, 6], 1))


// Test.assertEquals(queueTime([2,2,3,3,4,4], 2), 9);

